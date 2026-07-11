# Proposal: EP Extraction v4 — Migrate the Popper/Overlay Family off element-plus Internals

> Artifact store: hybrid. Continues `ep-extraction-v3` (archived 2026-07-10). Primary input: exploration obs #269 (grep-verified dependency graph + hook inventory).
> This is the **popper/overlay slice**, not the full remaining migration. It migrates 13 packages and builds the hooks/directives they need just-in-time. The table family and `input-number` are deferred to a future `ep-extraction-v5`.

## Intent

After v3, `main` has a clean `g-utils`, `g-hooks`, and `g-form`, plus 5 migrated form-control packages and an ESLint guard whose `excludedFiles` allowlist still masks the EP coupling of every package we have not reached yet. v3 proved the pattern on the light, popper-free controls. The next honest step is the hard middle: the **popper/overlay family** — the packages whose EP dependency is not just utilities but real overlay machinery (positioning, focus-trapping, z-index, forward-ref, model-toggle).

v4 closes that coupling for 13 packages: the near-leaf prerequisites (`focus-trap`, `slot`, `overlay`, `scrollbar`), the `popper` core, its direct dependents (`tooltip`, `select`, `dropdown`, `dialog`), the self-contained picker family (`date-picker`, `time-picker`), and the two remaining light controls (`input-tag`, `inline`). Migrating them removes 13 more entries from the guard's allowlist and lets `front-b2b` / `front-admin` consume the overlay migration incrementally rather than waiting on one large drop.

**Honest non-goal up front:** v4 does **not** remove `element-plus` from `package.json` anywhere. Eight packages are permanent islands that wrap real EP components (see Out of Scope). They keep `element-plus` as a genuine dependency **by design**. v4 removes EP-**internal-utility** coupling from the 13 in-scope packages; it does not attempt to delete element-plus from the monorepo.

## Scope

### In Scope

**(a) New hooks/directives — built JUST-IN-TIME.** We do not front-load a foundation-first hook package. Each of the ~19 discovered hooks/directives is built inside the work-unit of the **first in-scope package that consumes it**, then re-pointed by later consumers. When two packages need the same hook near-simultaneously, the earlier package in the topological order owns building it (and later ones re-point). The build list (all grep-verified missing from `g-utils`/`g-hooks` in obs #269):

- Popper/overlay core: `usePopper`, `usePopperContainer`/`usePopperContainerId`, `useZIndex`, `useForwardRef` + `useForwardRefDirective` + `FORWARD_REF_INJECTION_KEY`, `useEscapeKeydown`, `useSameTarget` (shared by `dialog` + `overlay`), `isFocusable`, `PatchFlags`.
- Toggle/interaction: `useDelayedToggle`/`useDelayedToggleProps`, `createModelToggleComposable`, `useDraggable` (dialog), `whenMouse` (dropdown).
- i18n / values: `useLocale` (dropdown, date-picker, time-picker), `useEmptyValues`/`useEmptyValuesProps` (select + time-picker).
- Widths / refs / arrays / style: `useCalcInputWidth` (select + input-tag), `composeRefs` (dialog + dropdown), `castArray` (date-picker), `getStyle` (time-picker), `iconPropType`.
- Directives: `ClickOutside` (select + date-picker), plus the DS-native config shim below.
- **DS-native config shim** replacing `useGlobalConfig` for `dialog` — see Approach decision 1 (highest-effort/highest-risk item).

Every new hook/directive ships with Vitest unit tests (strict TDD active, `yarn test:run`, unit-only policy). EP algorithms are copied exactly (no "improvements") to avoid behavior drift.

**Reused, NOT rebuilt — pure import re-point.** A large fraction of this slice is re-pointing imports to symbols v2/v3 already shipped, not new engineering: `useNamespace`, `useId`/`useIdInjection`, `useGlobalSize`, `useAriaProps`, `useSizeProp`, `useComposition`, `useFocusController`, `useFormSize` (g-form), plus the whole type-guard / prop-builder / event-constant surface (`isBoolean`/`isString`/`isObject`/`buildProps`/`definePropType`/`EVENT_CODE`/`CHANGE_EVENT`/`UPDATE_MODEL_EVENT`, etc.). Each in-scope package still needs its own explicit re-point pass even where no new hook work exists (obs #269 confirmed `time-picker` and `input-tag` still import already-extracted hooks straight from EP).

**(b) Migrate 13 packages off element-plus internals**, dependency-ordered:

- Near-leaves: `focus-trap`, `slot`, `overlay`, `scrollbar`
- Core: `popper`
- Popper-dependents: `tooltip`, then `select`, `dropdown`; `dialog` (parallel to the tooltip branch)
- Picker family: `date-picker`, `time-picker`
- Remaining light controls: `input-tag`, `inline`

**(c) Shrink the ESLint guard**: remove each migrated package's entry from `excludedFiles` in `.eslintrc.cjs` as it lands, so `--max-warnings 0` always passes. Deferred packages and the 8 islands stay excluded.

**(d) Clean `date-picker`'s pre-existing lint debt** (`no-unused-vars`) inside its migration WU — fix the package as part of migrating it, don't ship it dirty and don't track it separately (Approach decision 3).

**(e) Follow the v3 packaging convention** for every migrated package: declare `g-utils`/`g-hooks` in `dependencies`; keep `g-form`/`g-icon-font`/`element-plus`/`vue` in `peerDependencies`. This was the v3 packaging-bug root cause; new migrated packages must not repeat it.

### Out of Scope (Non-Goals)

- **Table family + `input-number`, deferred to `ep-extraction-v5`:** `table`, `pagination`, `collapse`, `input-number`. Rationale: their combined size and cross-cutting hook needs (`useLocale`, `ClickOutside`/`Mousewheel` directives, `vRepeatClick`, `INPUT_EVENT`, plus `table`'s ~27 EP imports) rival the entire v4 slice. Splitting keeps the review budget sane and each chained PR reviewable, matching the v3 precedent of slicing rather than big-bang. These are technically independent of the popper chain, so v5 can proceed cleanly on top of v4's shared packages.
- **The 8 permanent islands — never in scope, any vN:** `badge`, `menu`, `config-provider`, `popover`, `radio-group`, `form-item`, `skeleton`, `infinite-scroll`. These wrap whole EP components; they keep `element-plus` as a real dependency by design. v4 does **not** touch them and does **not** remove element-plus from their `package.json`.
- **Removing `element-plus` from the monorepo or from any island's `peerDependencies`.** Out, by the non-goal above.
- **Any DOM / integration / mounted test** — unit-only policy stands.

## Approach

Dependency-ordered migration on top of v3's clean shared packages, isolated per work unit so each WU is an independently reviewable, independently publishable chained PR (`stacked-to-main`, incremental Lerna publish per WU — reused from v3). Two mechanically distinct kinds of work run through the slice, and the proposal treats them differently:

- **Re-pointing** — swapping an EP import for an already-extracted DS symbol. Low risk, mostly mechanical; still needs a per-package pass (obs #269 proved untouched packages don't auto-consume existing hooks).
- **Deep migration** — copying a genuinely missing EP algorithm into `g-utils`/`g-hooks` with unit tests, then wiring it in. This is where the risk lives and where TDD matters.

Ordering follows obs #269's verified topological graph: near-leaves first (they unblock `popper`), then `popper` (the core that gates its dependents), then `tooltip` → `select`/`dropdown` with `dialog` in parallel, then the picker family, then `input-tag`/`inline`. Hooks are built just-in-time inside the first consuming WU (decision 2).

**The three decisions the user made:**

1. **config-provider coupling (`useGlobalConfig`, used by `dialog`): build a DS-native config shim.** `dialog` currently reads global config (locale/zIndex/namespace/message defaults) from the still-EP-backed `config-provider` island via EP's `useGlobalConfig`. We do **not** accept a scoped EP exception. Instead we build a DS-native config hook so `dialog` no longer reaches into the island's EP-provided context. This is the **highest-effort, highest-risk item in v4**: it sits on the boundary of a permanent island, and getting the provide/inject contract wrong risks a silent regression in dialog defaults. It gets its own careful design pass and lets `dialog`'s ESLint exclude be removed fully rather than narrowed per-symbol.

2. **Hook build strategy: just-in-time, not foundation-first.** Each new hook/directive is built in the WU of the first package that consumes it. Shared hooks (e.g. `useSameTarget` for `overlay`+`dialog`, `useCalcInputWidth` for `select`+`input-tag`, `useLocale` for the picker branch) are owned by whichever consumer lands first in the topological order; later consumers re-point. This keeps each WU self-contained and avoids a large speculative foundation PR that would be hard to review and might build hooks we mis-scope.

3. **`date-picker` pre-existing lint debt: fix it in-place.** `date-picker` carries `no-unused-vars` warnings predating this change. We clean them as part of the date-picker migration WU (touched-files hygiene), not as a separate tracked chore and not by excluding them from the diff.

## Impact

| Area                                                                                                                                                  | Impact    | Description                                                                                                                                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `common/g-utils/src/**`                                                                                                                               | Modified  | New pure helpers/types/directives added just-in-time: `castArray`, `getStyle`, `composeRefs`, `isFocusable`, `iconPropType`, `PatchFlags`, `ClickOutside`                                                                                                                         |
| `common/g-hooks/src/**`                                                                                                                               | Modified  | New composables added just-in-time: `usePopper*`, `useZIndex`, `useForwardRef*`, `useEscapeKeydown`, `useSameTarget`, `useDelayedToggle*`, `createModelToggleComposable`, `useDraggable`, `useLocale`, `useEmptyValues*`, `useCalcInputWidth`, `whenMouse`, DS-native config shim |
| `components/{focus-trap,slot,overlay,scrollbar,popper,tooltip,select,dropdown,dialog,date-picker,time-picker,input-tag,inline}/src/**` and `index.ts` | Modified  | EP internal imports replaced with own code / `g-utils` / `g-hooks` / `g-form`                                                                                                                                                                                                     |
| `.eslintrc.cjs`                                                                                                                                       | Modified  | Remove the 13 migrated packages from `excludedFiles` as each lands                                                                                                                                                                                                                |
| Consumers: `front-b2b`, `front-admin`                                                                                                                 | Validated | Incremental publish per WU; b2b real-copy validation on branch `ander/update/version-packages` with the exact published versions (never symlinks — symlinks strip base CSS / Tailwind `@apply` processing, documented v3 gotcha)                                                  |

## Risks

| Risk                                                                                                                                                                                                                                       | Likelihood                | Mitigation                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **config shim boundary** — the DS-native `useGlobalConfig` replacement must reproduce the EP ConfigProvider provide/inject contract that the permanent `config-provider` island still backs; a mismatch silently regresses dialog defaults | High effort / Medium risk | Dedicated design pass; unit tests for the shim's resolution of locale/zIndex/namespace defaults; validate `dialog` in b2b before removing its ESLint exclude |
| **`dropdown` fan-out** — widest internal dependency surface in the slice (focus-trap, roving-focus-group, collection, tooltip, scrollbar, icon-font, slot, popper)                                                                         | High (review budget)      | Its own dedicated WU; do NOT bundle with `select`; keep each WU ≤400 lines                                                                                   |
| **`select` must follow `tooltip`** — `select` currently imports `TooltipInstance`/`useTooltipContentProps` straight from `element-plus`, not from the DS `tooltip`; wrong ordering yields a broken re-point                                | Medium                    | Sequence `select` strictly after `tooltip`; re-point to `@flash-global66/g-tooltip`, not to an EP subpath                                                    |
| **`date-picker` debt now in-scope** — fixing `no-unused-vars` inside the migration widens the diff                                                                                                                                         | Low                       | Scope the cleanup to touched files; keep it inside the date-picker WU so `--max-warnings 0` stays green without a separate chore                             |
| **Copied EP algorithms drift** (e.g. `usePopper`, `useDraggable`, `createModelToggleComposable`)                                                                                                                                           | Medium                    | Copy exactly, no improvements; dedicated unit test per hook before wiring                                                                                    |
| **Already-extracted hooks not auto-consumed** — untouched packages still import existing hooks from EP (`time-picker` → `useFocusController`)                                                                                              | Medium                    | Every in-scope package gets an explicit re-point pass, even where no new hook work exists                                                                    |
| Symlinked b2b validation hides CSS/`@apply` breakage                                                                                                                                                                                       | High if misused           | Mandatory real-copy validation per migration WU on `ander/update/version-packages`                                                                           |

## Open Questions (for sdd-spec / sdd-design)

- **`useForwardRef` vs `useForwardRefDirective` naming** — EP splits these into two distinct APIs (`useForwardRef` in `popper/trigger`, `useForwardRefDirective` + `FORWARD_REF_INJECTION_KEY` in `slot/only-child`). Design should confirm whether to mirror EP's split or unify into one g-hooks family, to avoid future consumer API drift.
- **`useEmptyValues` placement** — generic `g-hooks` vs form-context `g-form`? EP's real impl composes with form context for `emptyValues`/`valueOnClear` prop cascading. Needs the same acyclic-placement analysis v3 did for `useFormSize`.
- **DS-native config shim contract** — exact shape of the provide/inject the shim exposes, and whether it reads from the existing `config-provider` island or establishes its own DS provider. Design decision; flagged as the highest-risk item.
- **Stale `radio-group` → `radio/radio.type` reference** — `radio-group` is a permanent island but references `components/radio` (migrated in v3). Sanity-check during design so v4 doesn't inherit an unrelated cross-package coupling bug; do not silently fix inside an unrelated WU.

# Proposal: EP Extraction v3 — Migrate the First Form-Control Slice off element-plus Internals

> Artifact store: hybrid. Continues `ep-extraction-v2` (archived 2026-07-08, PR #242).
> This is a **SLICE**, not the full 22-package migration. It migrates 5 simple form-control packages and builds only the hooks/utils those 5 actually need. `input-number` and the heavy popper/overlay/table families are deferred to a future `ep-extraction-v4`.

## Intent

After v2, `main` has an extended `g-utils`, a new `g-hooks` (`useId`/`useGlobalSize`/`useProp`), a `g-form` composables package, 19 migrated packages, and an ESLint guard — but **22 packages still import element-plus internals** because the hooks they need were never extracted. The guard keeps them on an `excludedFiles` allowlist, so nothing prevents their EP coupling from growing and the allowlist masks real debt.

We start closing that gap now with the lowest-risk, highest-clarity subset: **5 form-control packages** whose EP dependency is utilities + a small set of form-control composables, no popper/overlay machinery. Migrating them proves the v2 pattern scales to a second wave, removes 5 packages from the guard's allowlist, and produces the reusable form-control hooks that the rest of v4 will build on. Doing this as an isolated slice keeps each PR reviewable and lets `front-b2b` consume the migration incrementally instead of waiting for a 22-package big-bang.

## Scope

### In Scope

**(a) Build the hooks/utils the 5 packages actually import** (verified by grepping real `element-plus` imports in the 5 target packages — NOT the full seed candidate list):

- **New composables in `common/g-hooks`** (source-only, `buildable:false`, algorithms copied exactly from EP):
  - `useAriaProps` — used by checkbox, radio, switch, segmented, input
  - `useSizeProp` — used by input
  - `useFormSize` — used by segmented (final package placement — `g-hooks` vs `g-form` — is a design-phase decision, see Proposal question round)
  - Input sub-family used only by `input`: `useComposition`, `useCursor`, `useFocusController`, and the EP-flavored merged `useAttrs` (distinct from Vue's `useAttrs`; `input.vue` imports both — required for `input` to fully drop element-plus)
- **New helpers in `common/g-utils`** (source-only, `buildable:false`, pure):
  - Type guards: `isBoolean`, `isObject`, `isString`
  - Prop builders: `buildProps`, `definePropType`
  - `debugWarn`; size validator `isValidComponentSize`
  - Install helper `withInstall` + type `SFCWithInstall`
  - Map still missing: `ValidateComponentsMap` (used by `input`)
- All new hooks/utils **ship with Vitest unit tests** (strict TDD active, `yarn test:run`, unit-only policy).

**Reused, NOT built** (already extracted; migration just re-points imports to own code):

- `useNamespace` — already exists in `@flash-global66/g-utils` (`common/g-utils/src/composables/useNamespace.ts`, already unit-tested). Used by all 5 packages, currently imported from `element-plus`.
- `useId` — already in `@flash-global66/g-hooks` (used by radio, segmented).
- `useFormItem` / `useFormItemInputId` / `useFormDisabled` — already in `@flash-global66/g-form`, already imported by the 5 packages.

**(b) Migrate the 5 form-control packages** off element-plus internals onto the own-code hooks/utils (and the already-extracted `g-utils`/`g-hooks`/`g-form`):
`checkbox`, `radio`, `switch`, `segmented`, `input`.

**(c) Shrink the ESLint guard**: remove exactly these 5 entries from `excludedFiles` in `.eslintrc.cjs` as each package is migrated — `components/{checkbox,radio,switch,segmented,input}/**`. All other deferred packages stay excluded until v4.

### Out of Scope (Non-Goals)

- **`input-number`, deferred to v4.** It is the heaviest of the original candidates: it needs `useLocale` (i18n) and the `vRepeatClick` directive (neither built in v3), and it depends on `@flash-global66/g-input` (`InputInstance`) — which v3 migrates, so v4 can migrate `input-number` on top of a clean `g-input`. v4 will build `useLocale` + `vRepeatClick` and then migrate it.
- **The heavy/popper-dependent family, deferred to v4**: select, table, tooltip, popper, date-picker, time-picker, dialog, dropdown, collapse, toast, pagination, scrollbar, slot, focus-trap, input-tag, inline. **Do NOT build the `usePopper*` family, `useSameTarget`, or `useEscapeKeydown` in v3.**
- **`iconPropType`** and other prop-helpers NOT imported by these 5 (verified absent) — build them when the package that needs them is migrated.
- **The 8 permanent islands** (wrap whole EP components): badge, menu, config-provider, popover, radio-group, form-item, skeleton, infinite-scroll — permanently out.
- Removing `element-plus` from any package's `peerDependencies`.
- Any DOM/integration test (unit-only policy).

## Capabilities

### Modified Capabilities

- `g-hooks-package`: add the form-control composable set (`useAriaProps`, `useSizeProp`, `useFormSize`) plus the input sub-family (`useComposition`, `useCursor`, `useFocusController`, EP `useAttrs`).
- `g-utils-extended`: add `isBoolean`, `isObject`, `isString`, `buildProps`, `definePropType`, `debugWarn`, `isValidComponentSize`, `withInstall`, `SFCWithInstall`, `ValidateComponentsMap`.
- `eslint-ep-import-guard`: remove the 5 migrated packages from `excludedFiles`.

## Approach

Dependency-ordered, isolated per work unit so each WU is an independently reviewable, independently publishable chained PR. Build utils first, then the shared form-control hooks, migrate the 4 light controls, then build the input-specific hooks and migrate `input` last. Copy EP algorithms EXACTLY (no "improvements") to avoid behavior drift; cover each with unit tests before wiring it into a component. Extend the guard by deletion (remove excludes) only after each package is migrated and lint-clean, so `--max-warnings 0` always passes.

**Discovered heaviness (baked into ordering):** `input` is NOT as simple as checkbox/radio/switch/segmented — it pulls an input-specific hook sub-family (`useComposition`, `useCursor`, `useFocusController`, EP `useAttrs`). It is isolated into its own hook WU + migration WU to protect the review budget and to keep the 4 light controls shippable without waiting on the input family. (`input-number`, originally the heaviest, is deferred to v4 — see Out of Scope.)

## Work Unit Grouping (this slice)

| WU   | Deliverable                                                                                                                                                                 | Depends on | Publish    |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------- |
| WU-1 | `g-utils` additions (type guards, `buildProps`/`definePropType`, `debugWarn`, `isValidComponentSize`, `withInstall`/`SFCWithInstall`, `ValidateComponentsMap`) + unit tests | —          | g-utils    |
| WU-2 | `g-hooks` shared form-control composables (`useAriaProps`, `useSizeProp`, `useFormSize`) + unit tests                                                                       | WU-1       | g-hooks    |
| WU-3 | Migrate 4 light controls: checkbox, radio, switch, segmented + remove their 4 ESLint excludes                                                                               | WU-1, WU-2 | 4 controls |
| WU-4 | `g-hooks` input sub-family (`useComposition`, `useCursor`, `useFocusController`, EP `useAttrs`) + unit tests                                                                | WU-1       | g-hooks    |
| WU-5 | Migrate input + remove its ESLint exclude                                                                                                                                   | WU-2, WU-4 | input      |

## Delivery / Rollout

- **Chained PRs by work unit**, strategy `stacked-to-main`: each WU is its own PR that merges to `main` in order. WU-3 and WU-5 are the two migration slices; WU-1/WU-2/WU-4 are hook/util foundations.
- **Incremental publish per WU**: each merged WU publishes its packages via Lerna; `front-b2b` consumes the migration incrementally rather than in one big-bang.
- **b2b validation with REAL COPIES in `node_modules`, never symlinks** — symlinks strip base CSS / Tailwind `@apply` processing (documented gotcha). Validate each migration WU against b2b before moving on.
- **Strict TDD**: new hooks/utils land red→green with `yarn test:run` (unit-only; 129 tests currently green). Env requires node v20.19.3 and a dummy `GBP_PACKAGE_TOKEN` for yarn/npx.
- Review budget: each WU targets ≤400 changed lines. With `input-number` deferred, WU-5 is now a single-package migration and comfortably within budget.

## Affected Areas

| Area                                                                       | Impact   | Description                                                       |
| -------------------------------------------------------------------------- | -------- | ----------------------------------------------------------------- |
| `common/g-utils/src/**`                                                    | Modified | New pure helpers, guards, `ValidateComponentsMap`                 |
| `common/g-hooks/src/**`                                                    | Modified | New form-control + input composables                              |
| `components/{checkbox,radio,switch,segmented,input}/src/**` and `index.ts` | Modified | EP internal imports replaced with own code / `g-utils` / `g-form` |
| `.eslintrc.cjs`                                                            | Modified | Remove the 5 migrated packages from `excludedFiles`               |

## Risks

| Risk                                                                                  | Likelihood      | Mitigation                                                                                                                   |
| ------------------------------------------------------------------------------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Copied EP algorithms drift (e.g. `useComposition`, `useCursor`, `useFocusController`) | Medium          | Copy exactly, no improvements; dedicated unit tests per hook before wiring                                                   |
| `input` heavier than "simple" label; scope/budget creep                               | Medium          | Isolated in WU-4/WU-5; hooks built and tested before the migration WU                                                        |
| Re-pointing `useNamespace` (used by all 5) introduces a class-name regression         | Low             | Already extracted and unit-tested in `g-utils`; migration only swaps the import path; validate on the 4 light controls first |
| Symlinked b2b validation hides CSS/`@apply` breakage                                  | High if misused | Mandatory real-copy validation per migration WU                                                                              |
| Incremental publish leaves b2b on a mixed set of versions mid-slice                   | Low             | WUs are additive/independent; each published package is self-consistent                                                      |

## Rollback Plan

Each WU is a separate PR/merge commit. Roll back a WU with `git revert` of its merge commit; hooks/utils are additive and imports are swapped file-by-file, so reverting a migration WU restores the prior EP imports without touching unrelated work. No data migration or external state involved.

## Success Criteria

- [x] Zero `from ['"]element-plus` matches under the 5 migrated packages' `src/**` and `index.ts`. — Confirmed by verify-report obs #268.
- [x] New hooks/utils each have passing Vitest unit tests; full suite stays green. — 218/218, verify-report obs #268.
- [x] `.eslintrc.cjs` `excludedFiles` no longer lists the 5 migrated packages (the other deferred packages, `input-number`, and the 8 islands remain). — Confirmed exact list, verify-report obs #268.
- [x] `yarn build` succeeds for all buildable packages; `yarn lint` passes with `--max-warnings 0`. — Confirmed (scoped clean; repo-wide pre-existing debt only), verify-report obs #268.
- [x] Each migration WU validated in `front-b2b` via real copies (no symlinks). — Performed live by the user post-verification, user-confirmed to the orchestrator; reconciled in tasks.md T3.8/T5.8 at archive time.

## Proposal question round

Open product/scope decisions worth confirming before `sdd-spec`/`sdd-design`:

1. **`useFormSize` placement** — it reads form context for size. Does it belong in `g-hooks` (size domain) or in `@flash-global66/g-form` (form-context domain, where `useFormItem`/`useFormDisabled` already live)? Assumption: build it where it minimizes cross-package coupling; defer the final call to `sdd-design`. **Resolved in design**: `g-form`.
2. **Publish cadence** — assumption: publish per WU (incremental). Confirm vs. publishing once at the end of the slice. **Resolved**: publish per WU, as delivered.

_Resolved: `input-number` is deferred to v4 (user decision) — v3 covers 5 packages._

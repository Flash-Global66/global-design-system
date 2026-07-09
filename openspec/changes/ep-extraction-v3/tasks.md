# Tasks: ep-extraction-v3

> Artifact store: hybrid. Depends on `spec.md` + `design.md` (same dir; engram `sdd/ep-extraction-v3/spec` #257, `sdd/ep-extraction-v3/design` #258).
> Strict TDD is ACTIVE. Test runner: `yarn test:run` (Vitest, unit-only, no DOM/integration). Env: node v20.19.3 + dummy `GBP_PACKAGE_TOKEN` for yarn/npx. 129 pre-existing tests must stay green throughout.
> Chain strategy: **stacked-to-main** — each WU is its own PR merging to `main` in dependency order (proposal §Delivery, design §2.4). Incremental Lerna publish per merged WU.

## Dependency graph (WU level)

```
WU-1 (g-utils)
   │
   ├──────────────┬───────────────┐
   ▼              ▼               ▼
WU-2 (g-hooks   WU-4 (g-hooks   [WU-2 and WU-4 can be
 shared +         input sub-      developed in parallel —
 g-form)          family)         both depend only on WU-1]
   │              │
   ▼              │
WU-3 (4 light     │
 controls)        │
   │              ▼
   │           WU-5 (input) ← depends on WU-2 AND WU-4
   ▼
(WU-3 and WU-4/WU-5 track are independent chains after WU-1;
 WU-5 cannot start until BOTH WU-2 and WU-4 are merged)
```

Every child PR body must include this diagram with the current PR marked `📍`, plus start/end state, prior dependencies, and out-of-scope items (chained-pr skill).

---

## WU-1 — `g-utils` additions (foundations, no dependencies)

Publishes: `@flash-global66/g-utils`. Est. ~150 changed lines. Requirements: `g-utils-extended` → `component-size-validation`, `promise-type-guard`, `mutable-identity-cast`, `new-utils-unit-tested`.

- [ ] T1.1 Write failing unit test for `componentSizes` (equals `['', 'default', 'small', 'large']`) — extend `common/g-utils/tests/utils/validators.util.spec.ts` or a new `tests/types/component.type.spec.ts`.
- [ ] T1.2 Implement `componentSizes` constant next to `ComponentSize` in `common/g-utils/src/types/component.type.ts` (runtime array keeps `''` for EP validator parity; do NOT change the `ComponentSize` type union). Run `yarn test:run` → green.
- [ ] T1.3 Write failing unit tests for `isValidComponentSize` (`true` for `''`/`'default'`/`'small'`/`'large'`, `false` for `'medium'`/`'xl'`) in `common/g-utils/tests/utils/validators.util.spec.ts`.
- [ ] T1.4 Implement `isValidComponentSize` in `common/g-utils/src/utils/validators.util.ts` using `componentSizes.includes(val)`. Run `yarn test:run` → green.
- [ ] T1.5 Write failing unit tests for `isPromise` (`true` for a real `Promise` and a `{then, catch}` thenable; `false` for `{}`, `null`, functions) in `common/g-utils/tests/utils/validators.util.spec.ts`.
- [ ] T1.6 Implement `isPromise` in `common/g-utils/src/utils/validators.util.ts` (reuses existing `isObject` + `isFunction` guards — do not reimplement those). Run `yarn test:run` → green.
- [ ] T1.7 Write failing unit test for `mutable`/`Mutable` (runtime identity — returns the same reference; type-level test that `readonly` is stripped) — new `common/g-utils/tests/types/utils.type.spec.ts`.
- [ ] T1.8 Implement `Mutable<T>` type + `mutable()` identity cast in `common/g-utils/src/types/utils.type.ts`. Run `yarn test:run` → green.
- [ ] T1.9 Update `common/g-utils/src/index.ts` barrel to export the 4 new symbols.
- [ ] T1.10 Confirm zero regressions: full `yarn test:run` (129 + new tests), `yarn lint --max-warnings 0` on `common/g-utils/**`.
- [ ] T1.11 **Do NOT touch** already-shipped helpers (`isBoolean`/`isObject`/`isString`/`buildProps`/`definePropType`/`debugWarn`/`withInstall`/`SFCWithInstall`) — verify via `git diff --stat` that only the 4 new-symbol files changed.
- [ ] T1.12 Commit as one work unit (`feat(g-utils): add componentSizes, isValidComponentSize, isPromise, mutable`), open PR #1 (stacked-to-main, target `main`), Lerna-publish `g-utils` on merge.

## WU-2 — `g-hooks` shared form-control composables + `g-form: useFormSize` (depends on WU-1; parallelizable with WU-4)

Publishes: `@flash-global66/g-hooks` AND `@flash-global66/g-form`. Est. ~300 changed lines. Requirements: `g-hooks-package` → `form-control-aria-composable`, `input-size-prop-composable`, `new-hooks-unit-tested`; `g-form` → `form-aware-size-resolution`, `new-hook-unit-tested`.

- [ ] T2.1 Write failing unit test for `useAriaProps` (returns `{ ariaProps }` with exactly one `buildProp`'d `String` entry per requested aria key; unknown keys excluded) — new `common/g-hooks/tests/composables/useAriaProps.spec.ts`.
- [ ] T2.2 Implement `useAriaProps` in `common/g-hooks/src/composables/useAriaProps.ts` (uses `buildProps`/`definePropType` from `@flash-global66/g-utils` — reused, not reimplemented). Run `yarn test:run` → green.
- [ ] T2.3 Write failing unit test for `useSizeProp` (prop def with `type === String`, `required === false`, `values` deep-equal `componentSizes`; validator accepts each valid size, rejects `'huge'`) — new `common/g-hooks/tests/composables/useSizeProp.spec.ts`.
- [ ] T2.4 Implement `useSizeProp` in `common/g-hooks/src/composables/useSizeProp.ts` as a `buildProp`'d prop **definition constant** (not a function), sourcing `componentSizes` from `@flash-global66/g-utils` (WU-1). Run `yarn test:run` → green.
- [ ] T2.5 Update `common/g-hooks/src/index.ts` barrel to export `useAriaProps`, `useSizeProp`.
- [ ] T2.6 Write failing unit tests for `useFormSize` (mounted-component tests): explicit prop wins over everything; `fallback` beats global when prop absent; no prop/fallback falls back to `useGlobalSize()` → `'default'`; `ignore.prop`/`ignore.global` flags neutralize each tier; assert NO form-context tier exists — new test file alongside `components/form/src/hooks/use-form-common-props.ts` (create a `components/form/tests/` dir following the `tests/composables|utils` convention used by g-hooks/g-utils, e.g. `components/form/tests/hooks/use-form-common-props.spec.ts`).
- [ ] T2.7 Implement `useFormSize` in `components/form/src/hooks/use-form-common-props.ts` (sibling of the existing `useFormDisabled` in the same file), composing `useProp<ComponentSize>('size')` + `useGlobalSize()` from `g-hooks` — resolution: `prop > unref(fallback) > useGlobalSize() > 'default'`, **no form-context tier** (do NOT add a `size` prop to `formProps`/`formItemProps` — rejected scope creep per design §2.1). Run `yarn test:run` → green.
- [ ] T2.8 Update `components/form/src/hooks/index.ts` barrel to export `useFormSize`.
- [ ] T2.9 Full `yarn test:run` (green), `yarn lint --max-warnings 0` on `common/g-hooks/**` and `components/form/**`.
- [ ] T2.10 Commit as one work unit (`feat(g-hooks,g-form): add useAriaProps, useSizeProp, useFormSize`), open PR #2 targeting `main` after PR #1 merges (stacked-to-main), Lerna-publish **both** `g-hooks` and `g-form` on merge (design §2.4 — WU-2 must publish g-form or switch/segmented break).

## WU-3 — Migrate 4 light controls: checkbox, radio, switch, segmented (depends on WU-1, WU-2)

Publishes: `checkbox`, `radio`, `switch`, `segmented`. Est. ~260 changed lines. Requirements: `form-control-migration` → `zero-ep-imports-per-migrated-package`, `public-api-preserved`, `reused-composables-repointed`, `size-composable-wired-per-component`, `migration-gated-by-green-tests`; `eslint-ep-import-guard` → `island-override-exclusion` (4 entries).

The 4 packages are independent files and can be migrated concurrently by different contributors, but ship as **one PR** (design §2.4).

- [ ] T3.1 **checkbox**: re-point `useNamespace`→g-utils, `useAriaProps`→g-hooks, `debugWarn`/`isArray`/`isBoolean`/`isObject`/`isString`/`isNumber`/`isPropAbsent`/`isUndefined`→g-utils, `UPDATE_MODEL_EVENT`→g-utils constants, `useFormDisabled`→g-form. Zero public API change. `yarn test:run` green for checkbox's existing tests.
- [ ] T3.2 **radio**: re-point `useId`→g-hooks, `useNamespace`→g-utils, `useAriaProps`→g-hooks, `buildProps`/`isBoolean`/`isNumber`/`isString`/`isPropAbsent`→g-utils, `UPDATE_MODEL_EVENT`/`CHANGE_EVENT`→g-utils constants. Zero public API change. `yarn test:run` green.
- [ ] T3.3 **switch**: re-point `useAriaProps`/`useSizeProp`→g-hooks, `useFormDisabled`/`useFormSize`→g-form, `useNamespace`→g-utils, `addUnit`/`debugWarn`/`isBoolean`/`isPromise`/`throwError`/`isValidComponentSize`/`buildProps`/`definePropType`/`isNumber`/`isString`→g-utils, `ComponentSize` type→g-utils. `INPUT_EVENT`/`CHANGE_EVENT`/`UPDATE_MODEL_EVENT` stay on local `./constants` (unchanged). Zero public API change. `yarn test:run` green.
- [ ] T3.4 **segmented**: re-point `useFormSize`→g-form, `useId`→g-hooks, `useNamespace`→g-utils, `buildProps`/`definePropType`/`isBoolean`/`isNumber`/`isString`/`isObject`/`debugWarn`→g-utils. Zero public API change. `yarn test:run` green.
- [ ] T3.5 Grep-verify zero `from ['"]element-plus` matches under `components/{checkbox,radio,switch,segmented}/src/**` and `index.ts`.
- [ ] T3.6 Remove `'components/checkbox/**'`, `'components/radio/**'`, `'components/switch/**'`, `'components/segmented/**'` from `excludedFiles` in `.eslintrc.cjs`. Run `yarn lint --max-warnings 0` (must pass with the excludes removed).
- [ ] T3.7 `yarn build` succeeds for the 4 packages.
- [ ] T3.8 Validate in `front-b2b` using **real copies in `node_modules`** (never symlinks — symlinks strip base CSS/Tailwind `@apply`) for the 4 published packages.
- [ ] T3.9 Commit as one work unit per package or a cohesive multi-package commit that tells one story (`feat(checkbox,radio,switch,segmented): migrate off element-plus internals`), open PR #3 targeting `main` after PR #2 merges. Lerna-publish the 4 packages on merge. Rollback = `git revert` this merge commit (restores prior EP imports without touching WU-1/WU-2).

## WU-4 — `g-hooks` input sub-family (depends on WU-1 only; parallelizable with WU-2/WU-3)

Publishes: `@flash-global66/g-hooks` (second publish, additive). Est. ~380 changed lines (heaviest WU — watch the 400-line budget). Requirements: `g-hooks-package` → `input-composable-subfamily`, `new-hooks-unit-tested`.

- [ ] T4.1 Write failing unit tests for `useComposition` (`compositionstart`/`compositionupdate` set `isComposing = true`; `compositionend` sets it `false` and invokes `afterComposition`; verify the EP Firefox guard on `update`) — new `common/g-hooks/tests/composables/useComposition.spec.ts`.
- [ ] T4.2 Implement `useComposition` in `common/g-hooks/src/composables/useComposition.ts` — byte-exact copy of EP algorithm, no improvements. Run `yarn test:run` → green.
- [ ] T4.3 Write failing unit tests for `useCursor` (`record()` then mutate value then `restore()` reinstates `selectionStart`/`selectionEnd`; no-throw when the ref is `undefined`) — new `common/g-hooks/tests/composables/useCursor.spec.ts`.
- [ ] T4.4 Implement `useCursor` in `common/g-hooks/src/composables/useCursor.ts` — byte-exact copy. Run `yarn test:run` → green.
- [ ] T4.5 Write failing unit tests for `useFocusController` (`handleFocus` sets `isFocused = true` + fires `afterFocus`; `handleBlur` respects `beforeBlur` veto and otherwise clears focus + fires `afterBlur`; `handleClick` calls `target.focus()`) — new `common/g-hooks/tests/composables/useFocusController.spec.ts`.
- [ ] T4.6 Implement `useFocusController` in `common/g-hooks/src/composables/useFocusController.ts` — byte-exact copy. Run `yarn test:run` → green.
- [ ] T4.7 Write failing unit tests for the EP-flavored `useAttrs` (computed excludes `class`/`style` + provided `excludeKeys`; `excludeListeners: true` strips `on[A-Z]*` handlers; passes everything else through reactively) — new `common/g-hooks/tests/composables/useAttrs.spec.ts`.
- [ ] T4.8 Implement `useAttrs` in `common/g-hooks/src/composables/useAttrs.ts` (`DEFAULT_EXCLUDE_KEYS = ['class', 'style']`, `LISTENER_PREFIX = /^on[A-Z]/`) — name this distinctly enough in the barrel/docs to avoid confusion with Vue's own `useAttrs` (both are imported by `input.vue`). Run `yarn test:run` → green.
- [ ] T4.9 Update `common/g-hooks/src/index.ts` barrel to export `useComposition`, `useCursor`, `useFocusController`, `useAttrs`.
- [ ] T4.10 Full `yarn test:run` (green), `yarn lint --max-warnings 0` on `common/g-hooks/**`. If the diff is trending over ~400 lines, split T4.1-4.4 (composition+cursor) and T4.5-4.8 (focus+attrs) into two sequential commits within this same PR rather than opening a second WU.
- [ ] T4.11 Commit as one work unit (`feat(g-hooks): add input sub-family — useComposition, useCursor, useFocusController, useAttrs`), open PR #4. Since WU-4 depends only on WU-1, it may be branched off WU-1's merge and developed in parallel with WU-2/WU-3; sequence the actual PR-to-`main` merge order per stacked-to-main policy (after WU-1, coordinate merge order with WU-2/WU-3 to avoid rebase churn). Lerna-publish `g-hooks` again on merge.

## WU-5 — Migrate `input` (depends on WU-2 AND WU-4 — last in the chain)

Publishes: `input`. Est. ~220 changed lines. Requirements: `form-control-migration` → `zero-ep-imports-per-migrated-package`, `public-api-preserved`, `reused-composables-repointed`, `size-composable-wired-per-component`, `input-specific-hooks-wired`, `validate-components-map-input-local`, `input-number-out-of-scope`, `migration-gated-by-green-tests`; `eslint-ep-import-guard` → `island-override-exclusion` (input entry).

- [ ] T5.1 **First action**: audit whether `input.vue` still _uses_ `ValidateComponentsMap` (grep shows only an import line in the current EP-coupled code) — confirm usage before writing any migration code.
- [ ] T5.2a (if used) Write failing unit test for a DS-icon-authored `ValidateComponentsMap` (mapping validate states to `@flash-global66/g-icon-font` `IconString`/`GIconFont`, NOT `@element-plus/icons-vue`) in `components/input/tests/`, then implement it **input-local** in `components/input/src/`. Run `yarn test:run` → green.
- [ ] T5.2b (if unused) Drop the `ValidateComponentsMap` import entirely from `input.vue` — do not port it, do not add it to `g-utils`.
- [ ] T5.3 Re-point `useAttrs`/`useComposition`/`useCursor`/`useFocusController`→g-hooks (WU-4), `useAriaProps`/`useSizeProp`→g-hooks (WU-2), `useNamespace`→g-utils, `NOOP`/`debugWarn`/`isClient`/`isObject`/`mutable`/`isString`/`definePropType`/`buildProps`→g-utils, `UPDATE_MODEL_EVENT`→g-utils constants. `useFormItem`/`useFormItemInputId`/`useFormDisabled` already g-form (unchanged, reused as-is). Zero public API change.
- [ ] T5.4 Confirm `input-number` is untouched (no import from `input` into `input-number` breaks; `input-number` stays on its current EP imports, deferred to v4).
- [ ] T5.5 `yarn test:run` green for `input`'s existing + new tests; grep-verify zero `from ['"]element-plus` matches under `components/input/src/**` and `index.ts`.
- [ ] T5.6 Remove `'components/input/**'` from `excludedFiles` in `.eslintrc.cjs` (leave `'components/input-number/**'` excluded). Run `yarn lint --max-warnings 0`.
- [ ] T5.7 `yarn build` succeeds for `input`.
- [ ] T5.8 Validate in `front-b2b` using **real copies in `node_modules`** (never symlinks) for the published `input` package.
- [ ] T5.9 Commit as one work unit (`feat(input): migrate off element-plus internals`), open PR #5 targeting `main` after both PR #2 and PR #4 merge (stacked-to-main; if PR #4 merges after PR #2/#3, rebase PR #5 onto latest `main` before opening). Lerna-publish `input` on merge. Rollback = `git revert` this merge commit.

## Cross-cutting (apply to every WU)

- [ ] X.1 Every WU PR body includes: the dependency diagram (this file's header) with the current PR marked `📍`, start state, finished state, prior dependencies, follow-up work, and out-of-scope items (chained-pr skill Output Contract).
- [ ] X.2 Every WU is verified independently before merge: `yarn test:run` green, `yarn lint --max-warnings 0`, `yarn build` (where applicable), and — for migration WUs (3, 5) — `front-b2b` real-copy validation.
- [ ] X.3 No WU introduces a `g-icon-font` dependency into `g-utils` or `g-hooks` (leaf-layer purity, per design §2.3).
- [ ] X.4 No WU adds a `size` prop to `g-form`'s `formProps`/`formItemProps` (scope-creep guard, per design §2.1).
- [ ] X.5 After all 5 WUs merge, confirm the slice-level Success Criteria from `proposal.md`: zero EP imports across the 5 packages, all new hooks/utils unit-tested with the full suite green, `excludedFiles` no longer lists the 5 packages, `yarn build`/`yarn lint --max-warnings 0` pass repo-wide, each migration WU validated in `front-b2b` via real copies.

---

## Review Workload Forecast

| WU   | Deliverable                           | Est. changed lines | Chained PR recommended                | 400-line budget risk                                                                                           | Decision needed before apply                                                                                                                  |
| ---- | ------------------------------------- | -----------------: | ------------------------------------- | -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| WU-1 | g-utils additions                     |               ~150 | Yes (already locked: stacked-to-main) | Low                                                                                                            | No — strategy pre-decided in proposal/design                                                                                                  |
| WU-2 | g-hooks shared + g-form `useFormSize` |               ~300 | Yes                                   | Low–Medium                                                                                                     | No                                                                                                                                            |
| WU-3 | Migrate 4 light controls              |               ~260 | Yes                                   | Low                                                                                                            | No                                                                                                                                            |
| WU-4 | g-hooks input sub-family              |               ~380 | Yes                                   | **Medium** (closest to the 400-line ceiling; T4.10 has a fallback split-in-two-commits plan if it creeps over) | No — but flag to orchestrator/user if actual diff exceeds ~400 during apply, since it is the one WU at real risk of tripping `size:exception` |
| WU-5 | Migrate input                         |               ~220 | Yes                                   | Low                                                                                                            | No                                                                                                                                            |

**Overall**: 5 chained PRs, `stacked-to-main`, all WUs individually under the 400-line budget per current estimates. No `size:exception` anticipated. The only watch item is **WU-4**, which sits closest to the ceiling — if the actual diff (4 composables + 4 test files, byte-exact EP copies tend to run long) exceeds ~400 lines during `sdd-apply`, split it into two sequential commits (composition+cursor, then focus+attrs) within the same PR rather than opening a new WU, per T4.10.

**Parallelism summary**: WU-2 and WU-4 both depend only on WU-1 and can be developed in parallel (design §2.4). WU-3's four packages (checkbox, radio, switch, segmented) are independent files migrable concurrently but ship as one PR. WU-5 is strictly sequential — it cannot start until both WU-2 and WU-4 have merged.

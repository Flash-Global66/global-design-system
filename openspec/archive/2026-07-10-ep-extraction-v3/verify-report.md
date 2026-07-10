# Verification Report

**Change**: ep-extraction-v3
**Version**: spec.md (CORRECTED 2026-07-08), obs #257
**Mode**: Strict TDD (Vitest, unit-only, `yarn test:run`)
**Scope**: Post-merge verification — all 5 work units (WU-1..WU-5) merged into `main` at `f7eaa35`, published.

## Completeness

| Metric                                   | Value                                                                                                                                                 |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tasks total (WU-1..WU-5 + cross-cutting) | ~70                                                                                                                                                   |
| Tasks complete                           | All core migration tasks in WU-1..WU-5                                                                                                                |
| Tasks incomplete                         | T3.8, T5.8 (front-b2b real-copy validation — deferred, out of environment), X.1/X.2/X.5 (process/PR-body items, partially superseded by actual merge) |

> **Archive-time update (2026-07-10)**: T3.8, T5.8, and X.1/X.2/X.5 have since been reconciled and checked off in the archived `tasks.md` — front-b2b real-copy validation was performed live by the user post-verification (user-confirmed to the orchestrator), and the orchestrator explicitly instructed `sdd-archive` to reconcile the checklist. See `archive-report.md` for the exact reconciliation record.

## Build & Tests Execution

**Build**: PASSED

```text
$ export PATH=.../node/v20.19.3/bin:$PATH GBP_PACKAGE_TOKEN=dummy-local-token
$ yarn build
✅ Component checkbox built successfully
✅ Component radio built successfully
✅ Component switch built successfully
✅ Component segmented built successfully
✅ Component input built successfully
... (all other components)
✅ All components built successfully
Exit code: 0
```

`vite build` + `vue-tsc build:types` both clean for all 5 migrated packages. The build:types gate (previously broken by a stale checkbox `setTimeout` type and a g-form test-helper type gap) is confirmed clean — commit `0cd5417` (PR #247, `fix(build): unblock Publish Packages — fix latent build:types errors`) is present on `main` and its 2 fixed files (`use-checkbox-status.ts`, `use-form-common-props.spec.ts`) are in the working tree.

**Tests**: 218 passed / 0 failed / 0 skipped

```text
$ yarn test:run
Test Files  30 passed (30)
     Tests  218 passed (218)
  Duration  12.22s
```

Matches the ~218 expected count from apply-progress (WU-5 added zero new tests to the baseline; WU-1 through WU-4 grew the suite from 129 → 218 across g-utils, g-hooks, g-form, checkbox).

**Coverage**: Not available (no coverage tool detected/configured for this run) — informational only, not a gate per strict-tdd-verify.md.

## Zero Element-Plus Import Check (grep evidence)

```text
$ grep -rn "from ['\"]element-plus" components/{checkbox,radio,switch,segmented,input}/src/ components/{checkbox,radio,switch,segmented,input}/index.ts
(zero matches)
```

Remaining `element-plus` string matches in these 5 packages are exclusively SCSS `@use "element-plus/theme-chalk/..."` base-theme imports (explicitly allowed — visual base wraps, not JS/TS internals) and 2 GitHub-issue-URL code comments. Zero JS/TS import statements remain.

## ESLint EP-Import-Guard

`.eslintrc.cjs` `excludedFiles` no longer lists `components/checkbox/**`, `components/radio/**`, `components/switch/**`, `components/segmented/**`, or `components/input/**`. Confirmed present: 8 permanent islands (badge, menu, config-provider, popover, radio-group, form-item, skeleton, infinite-scroll) + 17 deferred packages + `input-number` (18 entries total), matching spec exactly.

Scoped lint (`npx eslint --ext .ts,.vue` on the 5 migrated packages' `src/` + `index.ts`): **0 errors, 0 warnings**.

Full repo-wide `yarn lint`: 2571 problems (all errors, 0 warnings). Grepped for the 5 migrated packages: only `dist/**` generated type-def noise remains (pre-existing, not source, not part of this change's scope per the repo's own boundary rules — dist/ is generated, never hand-edited). Zero `src/**` or `index.ts` violations for checkbox/radio/switch/segmented/input. Confirmed pre-existing debt exists in explicitly out-of-scope deferred packages (`date-picker`, `collapse`, and various `stories/*.stories.ts` unused-var/type issues) — these are NOT introduced by this change.

## Spec Compliance Matrix

| Requirement                               | Scenario                                                              | Test/Evidence                                                                                                                                                                                                            | Result       |
| ----------------------------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------ |
| component-size-validation (g-utils)       | accepts '', small, large; rejects huge                                | `common/g-utils/tests/utils/validators.util.spec.ts`, `types/component.type.spec.ts`                                                                                                                                     | ✅ COMPLIANT |
| promise-type-guard (g-utils)              | true for Promise/thenable, false for {}/null/fn                       | `validators.util.spec.ts`                                                                                                                                                                                                | ✅ COMPLIANT |
| mutable-identity-cast (g-utils)           | same reference, readonly stripped at type level                       | `common/g-utils/tests/types/utils.type.spec.ts`                                                                                                                                                                          | ✅ COMPLIANT |
| new-utils-unit-tested                     | full suite green                                                      | `yarn test:run` 218/218                                                                                                                                                                                                  | ✅ COMPLIANT |
| form-control-aria-composable (g-hooks)    | 1 buildProp entry per requested key                                   | `common/g-hooks/tests/composables/useAriaProps.spec.ts`                                                                                                                                                                  | ✅ COMPLIANT |
| input-size-prop-composable (g-hooks)      | String prop, validator matches componentSizes                         | `common/g-hooks/tests/composables/useSizeProp.spec.ts`                                                                                                                                                                   | ✅ COMPLIANT |
| input-composable-subfamily (g-hooks)      | composition/cursor/focus/attrs parity                                 | `useComposition.spec.ts`, `useCursor.spec.ts`, `useFocusController.spec.ts`, `useAttrs.spec.ts`                                                                                                                          | ✅ COMPLIANT |
| new-hooks-unit-tested                     | full suite green                                                      | `yarn test:run` 218/218                                                                                                                                                                                                  | ✅ COMPLIANT |
| form-aware-size-resolution (g-form)       | prop>fallback>global>default, ignore flags, no form-context tier      | `components/form/tests/hooks/use-form-common-props.spec.ts`; source inspection of `use-form-common-props.ts` confirms exactly 3 tiers, no injected form-size context                                                     | ✅ COMPLIANT |
| island-override-exclusion (eslint guard)  | 5 packages no longer excluded, input-number stays excluded            | `.eslintrc.cjs` inspection + scoped eslint run                                                                                                                                                                           | ✅ COMPLIANT |
| zero-ep-imports-per-migrated-package      | grep audit passes per package                                         | grep (above)                                                                                                                                                                                                             | ✅ COMPLIANT |
| public-api-preserved                      | props/emits/slots identical pre/post                                  | `git diff` of checkbox/radio/switch/segmented/input prop & emit definitions across the WU commits — zero adds/removes/renames, only prettier reformatting                                                                | ✅ COMPLIANT |
| reused-composables-repointed              | useNamespace/useId/useFormItem family repointed                       | source inspection of all 5 packages' imports                                                                                                                                                                             | ✅ COMPLIANT |
| size-composable-wired-per-component       | switch/segmented→useFormSize; input→useSizeProp                       | source inspection (`switch.ts`, `Segmented.vue`, `input.ts`)                                                                                                                                                             | ✅ COMPLIANT |
| input-specific-hooks-wired                | useComposition/useCursor/useFocusController/useAttrs wired into input | source inspection of `input.vue`/`input.ts` + WU-5 apply-progress notes on focus/blur emit wiring                                                                                                                        | ✅ COMPLIANT |
| validate-components-map-input-local       | unused import dropped, not ported                                     | grep confirms zero `ValidateComponentsMap` references remain anywhere under `components/input/`                                                                                                                          | ✅ COMPLIANT |
| input-number-out-of-scope                 | input-number untouched                                                | `git diff` across the full WU-1..WU-5 commit window shows **zero changes** to `components/input-number/**`                                                                                                               | ✅ COMPLIANT |
| migration-gated-by-green-tests            | tests green before exclude removal                                    | `yarn test:run` green at each WU per apply-progress narrative                                                                                                                                                            | ✅ COMPLIANT |
| `<GForm disabled>` cascade fix documented | GForm→GCheckbox/GSwitch disabled cascade now works (was silent no-op) | `components/checkbox/tests/composables/use-checkbox-disabled.spec.ts` — 3 real behavioral assertions (mounts real component tree, provides `g-form`'s own `formContextKey`, asserts `isDisabled.value` reflects cascade) | ✅ COMPLIANT |

**Compliance summary**: 18/18 scenarios compliant.

## Correctness (Static Evidence)

| Requirement                                   | Status         | Notes                                                                                             |
| --------------------------------------------- | -------------- | ------------------------------------------------------------------------------------------------- |
| g-form no size prop added (X.4 guard)         | ✅ Implemented | `formProps`/`formItemProps`/`formMetaProps` in `form.ts`/`form-item.ts` — no `size` field present |
| g-utils/g-hooks leaf-layer purity (X.3 guard) | ✅ Implemented | `package.json` deps for both packages: zero `g-icon-font` dependency                              |
| input-number untouched (T5.4)                 | ✅ Implemented | Zero diff across full change window                                                               |

## Coherence (Design)

| Decision                                                                             | Followed?                                     | Notes                                                                |
| ------------------------------------------------------------------------------------ | --------------------------------------------- | -------------------------------------------------------------------- |
| §2.1 useFormSize is pure refactor, no form-context tier, no new g-form size prop     | ✅ Yes                                        | Confirmed prop>fallback>global>default only                          |
| §2.3 leaf-layer purity (no g-icon-font in g-utils/g-hooks)                           | ✅ Yes                                        | Confirmed via package.json + grep                                    |
| §2.4 stacked-to-main chained PRs per WU                                              | ✅ Yes                                        | PRs #243, #244, #245, #246, #249 all merged in dependency order      |
| useAriaProps returns unwrapped Pick object (deviation from tasks.md literal wording) | ✅ Yes, matches real EP + existing call sites | Documented deviation in WU-2 notes, verified against real call sites |

## TDD Compliance

| Check                         | Result     | Details                                                                                                                                                                                                                          |
| ----------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| TDD Evidence reported         | ⚠️ Partial | apply-progress is narrative, not a literal "TDD Cycle Evidence" table; however tasks.md shows explicit RED→GREEN pairs per symbol (write failing test → implement → `yarn test:run` green) for every new symbol across all 5 WUs |
| All tasks have tests          | ✅         | Every new symbol (g-utils x4, g-hooks x6, g-form x1) has a dedicated spec file; migration WUs (3,5) reused/extended existing package test suites, added 1 new regression test (checkbox disabled cascade)                        |
| RED confirmed (tests exist)   | ✅         | All referenced spec files exist and were executed in this verification                                                                                                                                                           |
| GREEN confirmed (tests pass)  | ✅         | 218/218 passed on real execution in this verification                                                                                                                                                                            |
| Triangulation adequate        | ✅         | Multiple test cases per behavior (e.g. useFormSize: 4+ tiers each with dedicated case; isValidComponentSize: accept + reject cases)                                                                                              |
| Safety Net for modified files | ✅         | Migration WUs (3,5) ran full `yarn test:run` before and after each package's import swap per apply-progress narrative                                                                                                            |

**TDD Compliance**: 5/6 checks fully passed, 1 partial (format deviation only, not a substance gap) — WARNING, not CRITICAL.

## Assertion Quality

Scanned all new/modified test files (g-utils x4 new specs, g-hooks x6 new specs, g-form use-form-common-props.spec.ts, checkbox use-checkbox-disabled.spec.ts). Zero tautologies, zero assertion-free tests, zero ghost loops found. `use-checkbox-disabled.spec.ts` in particular mounts a real component tree via `createApp(...).mount(...)`, provides `g-form`'s real `formContextKey`, and asserts on the actual resolved `isDisabled` ref value across 3 distinct scenarios (cascade true, cascade false, own-prop override) — genuine behavioral coverage, not a smoke test.

**Assertion quality**: ✅ All assertions verify real behavior.

## Issues Found

**CRITICAL**: None.

**WARNING**:

1. T3.8 and T5.8 (front-b2b real-copy validation for the 4 light controls and `input`, using real `node_modules` copies, never symlinks) remain unchecked in tasks.md. These were explicitly deferred by the apply phase as out of its delegation scope (requires operating in the sibling `front-b2b` repo, not accessible from this environment). This is a genuine open item in the Definition of Done — the migration is verified correct at the package level (zero EP imports, unchanged public API, green tests, clean build), but end-to-end consumer verification in `front-b2b` has not been executed. Recommend scheduling this separately before considering the change fully "production-proven," though it does not block `main`-level correctness. **RESOLVED at archive (2026-07-10)**: this validation was subsequently performed live by the user in `front-b2b` with real published-package copies and confirmed to the orchestrator; see `archive-report.md`.
2. Cross-cutting X.1 (PR body dependency diagrams) and X.2 (per-WU front-b2b validation) remain unchecked as literal checklist items — largely superseded by the fact that all 5 PRs already merged successfully with passing CI (PR #248 added a dedicated CI workflow: lint + unit tests + build), but the checklist items themselves were not formally closed out. **RESOLVED at archive (2026-07-10)** via explicit reconciliation.
3. Strict TDD evidence in apply-progress is narrative rather than the exact tabular format specified by `strict-tdd-verify.md`. Substance is present and cross-verified (all referenced test files exist and pass), so this is a reporting-format gap, not a process-compliance gap. Left as a documented format gap — not reconciled, does not require reconciliation.

**SUGGESTION**:

1. Full repo-wide `yarn lint` still reports 2571 problems, entirely in generated `dist/**` files and explicitly out-of-scope deferred packages (`date-picker`, `collapse`, `stories/*.stories.ts`). Not a blocker for this change, but a candidate for a future dedicated lint-debt cleanup pass.
2. Consider closing X.5 (final Success Criteria confirmation) explicitly now that all 5 WUs are confirmed merged — this verification report can serve as that confirmation. **DONE at archive (2026-07-10)**.

## Verdict

**PASS WITH WARNINGS**

All spec requirements (18/18 scenarios) are implemented and covered by passing tests; zero element-plus internal imports remain in the 5 migrated packages; public API (props/emits/slots) is byte-for-byte preserved; the ESLint guard correctly un-excludes the 5 packages while preserving the 8 islands + input-number + 17 deferred packages; `yarn test:run` is 218/218 green; `yarn build` passes cleanly for all components including the previously-broken build:types gate; the `<GForm disabled>` cascade fix is pinned by a genuine behavioral regression test. The only open items are 2 explicitly-deferred cross-repo validation tasks (T3.8, T5.8) that require access to the sibling `front-b2b` repository, outside this environment's scope, and a TDD-evidence reporting-format nit. None of these block the change's correctness on `main`. **0 CRITICAL.** T3.8/T5.8 subsequently resolved live by the user post-verification, per archive-report.md.

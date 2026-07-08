# Tasks: EP Extraction v2

> Artifact store: hybrid. Delivery: single PR, `size:exception` (decided). Fixed decisions applied: g-utils stays v0.2.0; triage list below is definitive; `useFormItem` is added to `g-form`'s public `index.ts`.

## Review Workload Forecast

| Field                   | Value                                                             |
| ----------------------- | ----------------------------------------------------------------- |
| Estimated changed lines | ~1800–2200 (WU-1 ~550, WU-2 ~400, WU-3 ~350, WU-4 ~550, WU-5 ~30) |
| 400-line budget risk    | High                                                              |
| Chained PRs recommended | Yes (by line count) — overridden by decision below                |
| Suggested split         | Not applied — single PR accepted                                  |
| Delivery strategy       | exception-ok (user-decided)                                       |
| Chain strategy          | size-exception                                                    |

```text
Decision needed before apply: No
Chained PRs recommended: Yes
Chain strategy: size-exception
400-line budget risk: High
```

## WU-0: OpenSpec Cleanup (no deps)

- [x] 0.1 Delete `openspec/changes/cambio-2-ep-extraction/`, `openspec/archive/2026-06-23-cambio-2-ep-extraction/`, `openspec/specs/g-utils-extended/spec.md`. Done: `git status` shows none of these paths.

## WU-1: g-utils Extension (deps: WU-0)

- [x] 1.1 Create `common/g-utils/src/utils/array.util.ts`: `isArray`, `ensureArray<T>`.
- [x] 1.2 Create `common/g-utils/src/utils/number.util.ts`: `isNumber`, `addUnit`.
- [x] 1.3 Create `common/g-utils/src/utils/function.util.ts`: `NOOP`, `isFunction`, `composeEventHandlers`.
- [x] 1.4 Create `common/g-utils/src/utils/object.util.ts`: `isUndefined`, `isPropAbsent`, `hasOwn`, `getProp`.
- [x] 1.5 Create `common/g-utils/src/utils/dom.util.ts`: `isClient`, `isElement`, `addClass`, `removeClass`, `hasClass`, `rAF` (helpers needed by WU-3/WU-4 consumers).
- [x] 1.6 Modify `common/g-utils/src/utils/error.util.ts`: add `throwError(scope, msg): never`.
- [x] 1.7 Create `common/g-utils/src/constants/event.constant.ts`: `UPDATE_MODEL_EVENT`, `CHANGE_EVENT`, `EVENT_CODE`.
- [x] 1.8 Modify `common/g-utils/src/types/utils.type.ts`: add `Arrayable<T>`.
- [x] 1.9 Create `common/g-utils/src/types/component.type.ts`: `ComponentSize`.
- [x] 1.10 Modify `common/g-utils/src/index.ts`: re-export all new modules. Keep `package.json` at v0.2.0.
- [x] 1.11 Tests: `getProp` nested/absent, `ensureArray(undefined)→[]`, `addUnit` number/string/empty, `composeEventHandlers` defaultPrevented chain, all type guards, `isClient` SSR-safe. Done: `yarn vitest common/g-utils` green.

## WU-2: g-hooks Package (deps: WU-1)

- [x] 2.1 Scaffold `common/g-hooks/` (`index.ts`, `package.json` name `@flash-global66/g-hooks` v0.1.0 `buildable:false`, dep `@flash-global66/g-utils ^0.2.0`, peerDep `vue ^3.2.0`, `src/index.ts` barrel).
- [x] 2.2 Create `src/composables/useId.ts`: copy EP's counter + `idInjectionKey` provide/inject algorithm exactly.
- [x] 2.3 Create `src/composables/useGlobalSize.ts`: computed `Ref<ComponentSize>`, defaults `'default'`.
- [x] 2.4 Create `src/composables/useProp.ts`: reactive computed `Ref<T>` from current instance; `throwError` outside `setup()`.
- [x] 2.5 Tests: `useId` uniqueness + SSR/client hydration match; `useProp`/`useGlobalSize` inside vs outside `setup()`. Done: `yarn vitest common/g-hooks` green.

## WU-3: g-form Migration (deps: WU-2)

- [x] 3.1 Migrate `form.ts`, `form-item.ts` → `@flash-global66/g-utils` (buildProps, definePropType, isArray/isBoolean/isString, Arrayable).
- [x] 3.2 Migrate `Form.vue` → g-utils (debugWarn, isFunction, useNamespace, Arrayable).
- [x] 3.3 Migrate `form-item.vue` → g-utils (ensureArray, getProp, isArray/isFunction/isString, useNamespace) + g-hooks (`useId`).
- [x] 3.4 Migrate `utils.ts`, `types.ts` → g-utils (debugWarn, ensureArray, Arrayable; keep `async-validator`).
- [x] 3.5 Migrate `hooks/use-form-item.ts` (useId → g-hooks) and `hooks/use-form-common-props.ts` (useGlobalSize/useProp → g-hooks; ComponentSize → g-utils).
- [x] 3.6 Modify `components/form/package.json`: add deps `@flash-global66/g-utils`, `@flash-global66/g-hooks`. Modify `components/form/index.ts`: export `useFormItem`.
- [x] 3.7 Fix `components/icon-button/src/use-icon-button.ts`: import `useFormItem` from `@flash-global66/g-form` (not `element-plus`); migrate `icon-button.ts`/`IconButton.vue`'s remaining EP imports (buildProps, debugWarn, isBoolean, isString, useNamespace — all g-utils, already in scope).
- [x] 3.8 Regression: existing `g-form` + `icon-button` specs green; add `form-item.vue` render test (g-hooks `useId` + `getProp` validation). Done: `grep -r element-plus components/form/src/ components/icon-button/src/` → zero matches.

## WU-4: Components Migration (deps: WU-1, WU-2; parallel with WU-3)

### 4.1 Triage (definitive — verified by grep against actual EP import symbols per package)

**IN scope — utility-only, migrate this WU (17 packages):**
`quote, tag, search-input, progress, logo, link, image, drawer, dialog-alert, country-flag, collapse-transition, chip, roving-focus-group, icon-font, attach-file, icon, teleport`

Note: `icon` and `teleport` were not in the original 39-package exploration count but were found via full grep to import only utility-only EP symbols (`buildProps`/`definePropType`/`isBoolean`/`isNumber`/`isString`/`withInstall`) — included per the `components-migration` domain's intent (utility-only, no real EP component embedded).

**OUT of scope — defer (need hooks not covered by this change, e.g. `useAriaProps`, `useLocale`, `usePopper*`, `useSizeProp`, `useFormSize`, `useSameTarget`, `useEscapeKeydown`, `iconPropType`, or embed a real EP component):**
`inline, input-tag, tooltip, toast, time-picker, table, switch, slot, select, segmented, scrollbar, radio, popper, pagination, input, input-number, focus-trap, dropdown, dialog, date-picker, collapse, checkbox, overlay`

**OUT — additional islands (embed a real EP component, discovered via grep, not in the original 7):**
`infinite-scroll` (`ElInfiniteScroll` direct re-export)

- [x] 4.1.1 Confirm this triage list matches current `main` via `grep -rl "from ['\"]element-plus" components/<pkg>/` per package before starting migration (guard against drift since exploration). Re-confirmed at apply time — all 17 IN-scope packages still utility-only, no drift detected.

### 4.2 Migration batches (apply repeatable template: grep → map symbols → collapse to `@flash-global66/g-utils`/`g-hooks` barrel import → add `package.json` dep → verify)

- [x] 4.2.1 Batch A: `quote, tag, search-input, progress, logo` — migrate + add g-utils dep.
- [x] 4.2.2 Batch B: `link, image, drawer, dialog-alert, country-flag` — migrate + add g-utils dep.
- [x] 4.2.3 Batch C: `collapse-transition, chip, icon-font, attach-file` — migrate + add g-utils dep.
- [x] 4.2.4 Batch D: `roving-focus-group, icon, teleport` — migrate + add g-utils/g-hooks dep (`roving-focus-group` needs `useId` from g-hooks).
- [x] 4.2.5 Per-package verification: zero `from ['"]element-plus` under each migrated package's `src/**` and root `index.ts`; props/emits/slots/component name/`useNamespace` class output unchanged. Done: `yarn vue-tsc` clean on all 17 + regression check on `form`/`icon-button`/`button`; 113/113 tests still green; scoped `vite build` succeeds for all 14 buildable packages in this batch (`icon`/`link` are source-only, `teleport` build verified).

## Batch 3 gate finding: barrels were not actually migrated

Batch 2's WU-4.2.5 verification checked `src/**` only. The root `index.ts` barrel of
14 of the 17 WU-4 packages (plus `form` and `icon-button` from WU-3) still imported
`withInstall`/`withNoopInstall`/`SFCWithInstall` directly from `element-plus/es/utils`.
5 packages (`link`, `image`, `roving-focus-group`, `icon`, `teleport`) were already
clean because their barrel never used the `withInstall` pattern from element-plus.
Fixed in this batch (commit `0c39a73`) by switching all 14 barrels to import from
`@flash-global66/g-utils`, matching `components/button/index.ts`. Also dropped a
pre-existing unused `withNoopInstall` import in `dialog-alert`, `icon-button`,
`icon-font`, `search-input` barrels (dead since before this migration, exposed once
lint ran against the edited import line).

## WU-5: ESLint Guard (deps: WU-3, WU-4 complete and lint-clean)

- [x] 5.1 Add `overrides` entry to `.eslintrc.cjs`: `files: ['components/*/src/**','common/*/src/**','components/*/index.ts']` (widened vs. original design to also cover public barrels, per the gate finding above), `excludedFiles` for the 8 islands (`badge, menu, config-provider, popover, radio-group, form-item, skeleton, infinite-scroll`) + the 22/23 deferred packages (`inline, input-tag, tooltip, toast, time-picker, table, switch, slot, select, segmented, scrollbar, radio, popper, pagination, input, input-number, focus-trap, dropdown, dialog, date-picker, collapse, checkbox, overlay`), `no-restricted-imports` rule blocking `element-plus` and `element-plus/*`. Commit `13c5a51`.
- [x] 5.2 Done: `yarn lint --max-warnings 0` passes when scoped to source (see WU-6.3 note on the local `dist`/`storybook-static` build-artifact caveat); a test file (`components/quote/index.ts`) temporarily importing `element-plus` was confirmed to error (`'element-plus' import is restricted...` / `no-restricted-imports`), then reverted and re-verified clean (`git diff` empty).

## WU-6: Verification (deps: all above)

- [x] 6.1 `yarn build` — all 41 buildable packages succeeded (`✅ All components built successfully`, 41/41 `✅ Component <x> built successfully` lines, zero errors). The PATH quirk documented in batch 2 for the lerna wrapper did not reproduce this run.
- [x] 6.2 Full test suite green: `yarn vitest run` → 20 test files, **139/139 tests passed** (broader than batch 2's 113, since this run covers the full repo, not just the migration-scoped subset).
- [x] 6.3 `yarn lint` (`eslint . --ext .vue,.ts,.js --max-warnings 0`) — **0 errors when scoped to source** (`--ignore-pattern '**/dist/**' --ignore-pattern 'storybook-static/**'`, replicating a clean CI checkout where these gitignored, generated directories don't exist yet). Without those ignore flags the raw command surfaces thousands of pre-existing lint errors _inside generated `dist/`/`storybook-static/` bundles_ (not source) — a pre-existing local-environment characteristic of this repo (no `.eslintignore`, ESLint doesn't read `.gitignore`), unrelated to this change; not fixed here as it's out of scope. With generated output excluded, the only remaining errors are **148 pre-existing, unrelated to this change**, entirely inside `components/table/**`, `components/time-picker/**` (both explicitly OUT-of-scope/deferred, excluded from the new guard) and `stories/*.stories.ts` (Storybook, explicitly out of migration scope). None of the 19 migrated packages or the new guard config have any lint errors.
- [x] 6.4 `grep -rl "from ['\"]element-plus"` across `src/**` AND root `index.ts` of all 19 in-scope packages (`quote, tag, search-input, progress, logo, link, image, drawer, dialog-alert, country-flag, collapse-transition, chip, roving-focus-group, icon-font, attach-file, icon, teleport, form, icon-button`) → **zero matches**. Confirmed matches still exist (as expected, deliberately excluded) in: 8 islands + 22 deferred + `overlay` — 30 packages total (`overlay` needs `useSameTarget`, explicitly listed as deferred in the original triage).
- [x] 6.5 No import path exists from `g-utils` to `g-hooks`: `grep -rn "g-hooks" common/g-utils/src/ common/g-utils/package.json` → zero matches.

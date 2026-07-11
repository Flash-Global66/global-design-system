# Tasks: ep-extraction-v4

> Artifact store: hybrid. Depends on `spec.md` files under `specs/**` + `design.md` (same dir; engram `sdd/ep-extraction-v4/spec` #276, `sdd/ep-extraction-v4/design` #277).
> Strict TDD is ACTIVE. Test runner: `yarn test:run` (Vitest, unit-only, no DOM/integration). Env: node v20.19.3 + dummy `GBP_PACKAGE_TOKEN` for yarn/npx.
> Chain strategy: **stacked-to-main** (v3 precedent) — each WU is its own PR merging to `main` in dependency order (proposal §Approach, design §5). Incremental Lerna publish per merged WU. `front-b2b` real-copy validation (never symlinks) on `ander/update/version-packages` after each migration WU.
>
> **CRITICAL correctness mandate — bake into every hook task below:** element-plus is the source of truth. VERSION-OF-RECORD is `node_modules/element-plus@2.9.7` (the version actually consumed by this monorepo). The sibling checkout `../element-plus/packages/**` is at `2.8.3-1908-gcbc55c730d`, NOT pinned to 2.9.7 — read the sibling TypeScript source for readability, but before copying any algorithm, diff it against the compiled output under `node_modules/element-plus/es/hooks/<hook>/` (or `es/components/<pkg>/src/hooks/...`) to confirm 2.9.7 behavior matches. Copy EP byte-exact, no "improvements". Every ported hook/directive gets a Vitest unit test asserting behavior parity with the EP original, authored **before** the implementation (red → green).
>
> Radio-group's stale `radio/radio.type` import (design §2.4) is a confirmed latent bug — **out of scope for every WU below**. Do not fix it inside any task in this file.

## Dependency graph (WU level)

```
WU-1 (focus-trap)   WU-2 (slot)   WU-3 (overlay)   WU-4 (scrollbar)
   │  useEscapeKeydown  │  forward-ref     │  useSameTarget    (pure re-point,
   │  isFocusable        │  family          │  PatchFlags        independent)
   │                    │                  │
   └─────────┬──────────┘                  │
             ▼                             │
          WU-5 (popper) ◄───────────────────
          usePopper, useZIndex
             │
             ▼
          WU-6 (tooltip)
          useDelayedToggle*, createModelToggleComposable, usePopperContainer*
             │
        ┌────┴─────────────────┐
        ▼                      ▼
   WU-8 (select)          WU-9 (dropdown) ◄── WU-4, WU-7
   useEmptyValues*,       whenMouse, useLocale
   useCalcInputWidth,     (own WU — never bundled with select,
   ClickOutside            widest fan-out, design §3/§6)
        │                      │
        └──────────┬───────────┘
                    ▼
            WU-10 (date-picker)          WU-11 (time-picker) ◄── WU-6, WU-9, WU-8
            castArray + lint-debt fix    getStyle, vRepeatClick
                    │
                    ▼
            WU-12 (input-tag) ◄── WU-8

WU-13 (inline) — fully independent, no popper-chain dependency, smallest WU
WU-7 (dialog) ◄── WU-3, WU-5 — parallel branch off overlay+popper, independent of the tooltip chain
```

Every child PR body must include this diagram with the current PR marked `📍`, plus start/end state, prior dependencies, follow-up work, and out-of-scope items (chained-pr skill Output Contract).

**Parallelism:** WU-1..WU-4 are mutually independent (near-leaves) and may be developed concurrently. Once WU-5 (popper) lands, the tooltip branch (WU-6→WU-8/WU-9), the dialog branch (WU-7), and — after WU-8/WU-9 — the picker branch (WU-10/WU-11) proceed in parallel. WU-13 (inline) has no dependency on the popper chain at all and can land any time. WU-9 (dropdown) is never bundled with WU-8 (select) — its own PR, per design §3/§6 risk table.

---

## WU-1 — `focus-trap` (deep migration; near-leaf, no dependencies)

Publishes: `focus-trap`. Est. ~200 changed lines. Requirements: `popper-overlay-migration` → `zero-ep-imports-per-migrated-package`, `public-api-and-styles-preserved`, `barrel-exports-stable`, `new-hook-algorithms-copied-exactly`, `packaging-convention-followed`, `migration-gated-by-green-tests`; `g-hooks-package` → `popper-overlay-composables-added`, `v4-hooks-unit-tested`; `g-utils-extended` → `popper-overlay-utils-added`, `v4-utils-unit-tested`; `eslint-ep-import-guard` → `exclude-removed-per-work-unit`.

- [x] T1.1 Read EP's `useEscapeKeydown` from `node_modules/element-plus/es/hooks/use-escape-keydown/index.mjs` (2.9.7, source of truth). Cross-check against `../element-plus/packages/hooks/use-escape-keydown/` (sibling, 2.8.3-1908) — diff any signature/behavior drift before proceeding.
- [x] T1.2 Write failing unit test for `useEscapeKeydown` (invokes handler only on `Escape` keydown; no-op for other keys; cleans up listener on unmount) — new `common/g-hooks/tests/composables/useEscapeKeydown.spec.ts`.
- [x] T1.3 Implement `useEscapeKeydown` in `common/g-hooks/src/composables/useEscapeKeydown.ts` — byte-exact copy of the 2.9.7 algorithm. Run `yarn test:run` → green.
- [x] T1.4 Read EP's `isFocusable` from `node_modules/element-plus/es/utils/dom/aria.mjs` (2.9.7). Cross-check sibling `../element-plus/packages/utils/dom/aria.ts`.
- [x] T1.5 Write failing unit test for `isFocusable` (true for links/buttons/inputs/tabindex>=0 elements; false for disabled/tabindex=-1/plain divs) — new `common/g-utils/tests/utils/dom.util.spec.ts` (or existing dom-utils spec file).
- [x] T1.6 Implement `isFocusable` in `common/g-utils/src/utils/dom.util.ts` (or equivalent existing dom-utils module) — byte-exact copy. Run `yarn test:run` → green.
- [x] T1.7 Update `common/g-hooks/src/index.ts` and `common/g-utils/src/index.ts` barrels to export the 2 new symbols.
- [x] T1.8 Migrate `components/focus-trap/src/**`: re-point `isString`/`isElement`/`EVENT_CODE` → `@flash-global66/g-utils`; wire the new `useEscapeKeydown`/`isFocusable`. Zero public API change (props/emits/slots/types + `/styles.scss` path untouched).
- [x] T1.9 Grep-verify zero `from ['"]element-plus` matches under `components/focus-trap/src/**` and `index.ts` (SCSS `@use` theme imports and comments excluded).
- [x] T1.10 Confirm `focus-trap`'s `package.json` declares `g-utils`/`g-hooks` in `dependencies` (not `peerDependencies`); `element-plus`/`vue` (if referenced) stay in `peerDependencies` — packaging convention. (element-plus dropped entirely from peerDependencies — focus-trap has zero remaining EP imports and no SCSS theme dependency on it; `vue`/`lodash-unified` stay in peerDependencies.)
- [x] T1.11 Remove `'components/focus-trap/**'` from `excludedFiles` in `.eslintrc.cjs`. Run `yarn lint --max-warnings 0` — must pass with the exclude removed. (Scoped lint on focus-trap/g-hooks/g-utils: 0 errors. Full-repo lint has 129 pre-existing errors in unrelated files — table/time-picker/stories — confirmed present before this WU and untouched by it.)
- [x] T1.12 `yarn build` succeeds for `focus-trap`. Full `yarn test:run` green, no regressions. (234/234 tests green across 31 files, monorepo-wide.)
- [ ] T1.13 Validate in `front-b2b` using a **real copy** in `node_modules` (never a symlink) on `ander/update/version-packages` with the exact published version. **Deferred**: requires a merged + Lerna-published `focus-trap` version and CodeCommit network access to `front-b2b`, neither available during `sdd-apply`. Do after merge/publish.
- [ ] T1.14 Commit as one work unit (`feat(focus-trap): migrate off element-plus internals`), open PR #1 (stacked-to-main, target `main`), Lerna-publish `focus-trap` (+ `g-hooks`/`g-utils` if their new exports warrant a publish) on merge. **Partially done**: implementation committed locally as 3 work-unit commits (`16f1316`, `6be043e`, `6f0ca2f`) on branch `feat/ds-ep-v4-wu1-focus-trap`, plus a docs commit (`b58b869`) for the SDD planning artifacts. PR creation and Lerna publish are deferred to the orchestrator/reviewer per this apply phase's explicit instruction to stop after local commit.

## WU-2 — `slot` (deep migration; near-leaf, no dependencies)

Publishes: `slot`. Est. ~220 changed lines. Requirements: same `popper-overlay-migration` set as WU-1 plus `g-hooks-package` → `shared-hook-single-ownership` (this WU is the sole owner of the forward-ref family, design §2.2).

- [x] T2.1 Read EP's forward-ref module from `node_modules/element-plus/es/hooks/use-forward-ref/index.mjs` (2.9.7) — the single module exporting `useForwardRef`, `useForwardRefDirective`, `FORWARD_REF_INJECTION_KEY`. Cross-check sibling `../element-plus/packages/hooks/use-forward-ref/`.
- [x] T2.2 Write failing unit tests asserting the **shared-symbol handshake** (design §2.2, correctness requirement, not style): `useForwardRef` provides `FORWARD_REF_INJECTION_KEY`; `useForwardRefDirective`'s returned directive object (`mounted`/`updated`/`unmounted`) calls `setForwardRef` with the bound element on mount/update and `undefined` on unmount; both functions reference the exact same exported `Symbol()` instance — new `common/g-hooks/tests/composables/useForwardRef.spec.ts`.
- [x] T2.3 Implement **one module** `common/g-hooks/src/composables/useForwardRef.ts` exporting all three (`useForwardRef`, `useForwardRefDirective`, `FORWARD_REF_INJECTION_KEY`), mirroring EP's own file layout exactly — byte-exact copy. Run `yarn test:run` → green.
- [x] T2.4 Update `common/g-hooks/src/index.ts` barrel to export the 3 new symbols.
- [x] T2.5 Migrate `components/slot/src/**`: re-point `NOOP`/`debugWarn`/`isObject`/`useNamespace` → `@flash-global66/g-utils`; wire the new forward-ref family. Zero public API change.
- [x] T2.6 Grep-verify zero `from ['"]element-plus` matches under `components/slot/src/**` and `index.ts`.
- [x] T2.7 Confirm `slot`'s `package.json` packaging convention (g-utils/g-hooks in `dependencies`).
- [x] T2.8 Remove `'components/slot/**'` from `excludedFiles` in `.eslintrc.cjs`. `yarn lint --max-warnings 0` passes.
- [x] T2.9 `yarn build` succeeds for `slot`. Full `yarn test:run` green.
- [ ] T2.10 Validate in `front-b2b` (real copy, `ander/update/version-packages`). **Deferred**: same blocker as WU-1/T1.13 — requires a merged+Lerna-published `slot` version; CodeCommit registry network access unavailable in this sandbox.
- [ ] T2.11 Commit as one work unit (`feat(slot): migrate off element-plus internals, add forward-ref family to g-hooks`), open PR #2 (parallel to PR #1, both target `main`), Lerna-publish on merge. **Partial**: implementation committed locally on `feat/ds-ep-v4-wu2-slot`; PR creation + publish deferred to orchestrator review per apply-phase boundary.

## WU-3 — `overlay` (deep migration; near-leaf, no dependencies)

Publishes: `overlay`. Est. ~180 changed lines. Requirements: same `popper-overlay-migration`/`g-hooks-package`/`g-utils-extended` set as WU-1; `shared-hook-single-ownership` (owns `useSameTarget`, shared with `dialog`/WU-7).

- [x] T3.1 Read EP's `useSameTarget` from `node_modules/element-plus/es/hooks/use-same-target/index.mjs` (2.9.7). Cross-check sibling `../element-plus/packages/hooks/use-same-target/`. (Identical algorithm; sibling only differs in `NOOP` import path — no drift.)
- [x] T3.2 Write failing unit test for `useSameTarget` (returned `onClick`/`onMousedown`/`onMouseup` only fire the handler when mousedown and mouseup/click targets are the same node — guards against drag-selection-triggered false positives) — new `common/g-hooks/tests/composables/useSameTarget.spec.ts`.
- [x] T3.3 Implement `useSameTarget` in `common/g-hooks/src/composables/useSameTarget.ts` — byte-exact copy. Run `yarn test:run` → green.
- [x] T3.4 Read EP's `PatchFlags` from `node_modules/element-plus/es/utils/vue/vnode.mjs` (2.9.7; module path is `utils/vue/vnode`, not `utils/vnode` as brief anticipated). Cross-check sibling `packages/utils/vue/vnode.ts` — identical, ported as a real TS `enum` (matches EP's own `.d.ts export declare enum`).
- [x] T3.5 Write failing unit test for `PatchFlags` (enum values match EP's exactly: `TEXT`, `CLASS`, `STYLE`, `PROPS`, `FULL_PROPS`, `HYDRATE_EVENTS`, `STABLE_FRAGMENT`, `KEYED_FRAGMENT`, `UNKEYED_FRAGMENT`, `NEED_PATCH`, `DYNAMIC_SLOTS`, `HOISTED`, `BAIL`, plus bitwise-OR composition) — new `common/g-utils/tests/types/vnode.type.spec.ts`. (EP 2.9.7 has no `DEV_ROOT_FRAGMENT` member; brief's list included it in error — omitted, matches source exactly.)
- [x] T3.6 Implement `PatchFlags` in `common/g-utils/src/types/vnode.type.ts` — byte-exact copy. Run `yarn test:run` → green.
- [x] T3.7 Update `common/g-hooks/src/index.ts` and `common/g-utils/src/index.ts` barrels.
- [x] T3.8 Migrate `components/overlay/overlay.ts` (flat-layout package, no `src/**` — brief anticipated `src/**` in error): re-point `buildProps`/`definePropType`/`useNamespace` → `@flash-global66/g-utils`; `useSameTarget` → `@flash-global66/g-hooks`. Zero public API change. Comments translated to Spanish.
- [x] T3.9 Grep-verify zero `from ['"]element-plus` matches under `components/overlay/overlay.ts` and `index.ts` (only a doc-comment URL reference remains in `index.ts`, not an import).
- [x] T3.10 Confirm `overlay`'s `package.json` packaging convention: added `@flash-global66/g-hooks@^0.6.0` + `@flash-global66/g-utils@^0.5.0` to `dependencies`; added `element-plus@^2.9.0` + `vue@^3.2.0` to `peerDependencies` (package previously had none declared at all — `element-plus` kept/added because `overlay.styles.scss` still `@use`s its theme-chalk mixins, out of scope for this WU). `yarn install` run to sync `yarn.lock` workspace resolution.
- [x] T3.11 Remove `'components/overlay/**'` from `excludedFiles` in `.eslintrc.cjs`. Scoped `yarn eslint components/overlay common/g-hooks/src common/g-utils/src common/g-hooks/tests common/g-utils/tests .eslintrc.cjs --max-warnings 0` passes (0 errors/warnings).
- [x] T3.12 `yarn build` — `overlay` has no `buildable: true`/build script (ships raw TS like `g-hooks`/`g-utils`, confirmed via `scripts/build-components.js`), so this is a no-op for this package (consistent with the flat-layout, non-buildable convention). Full `yarn test:run`: 251/251 green across 34 files.
- [ ] T3.13 Validate in `front-b2b` using a real copy. **Deferred**: same blocker as WU-1/WU-2 — requires a merged + Lerna-published `overlay` version; CodeCommit registry network access unavailable in this sandbox.
- [ ] T3.14 Commit as one work unit, open PR #3, Lerna-publish on merge. **Partial**: implementation committed locally as 2 work-unit commits (`abadea8` feat g-hooks/g-utils, `860ae98` refactor overlay) on branch `feat/ds-ep-v4-wu3-overlay`, rebased onto `origin/main` @ `e38cd7a`. PR creation + publish deferred to orchestrator/reviewer per this apply phase's explicit instruction to stop after local commit.

## WU-4 — `scrollbar` (pure re-point; no dependencies)

Publishes: `scrollbar`. Est. ~80 changed lines. Requirements: `popper-overlay-migration` → `zero-ep-imports-per-migrated-package`, `public-api-and-styles-preserved`, `reused-composables-repointed`, `packaging-convention-followed`, `migration-gated-by-green-tests`; `eslint-ep-import-guard` → `exclude-removed-per-work-unit`.

- [x] T4.1 Re-point `components/scrollbar/src/**` + root imports: `withInstall`/`SFCWithInstall`/`buildProps`/`definePropType`/`isNumber`/`addUnit`/`debugWarn`/`isObject`/`useNamespace`/`isClient`/`throwError` → `@flash-global66/g-utils`; `useAriaProps` → `@flash-global66/g-hooks`. All 6 EP-coupled files (`index.ts`, `src/scrollbar.ts`, `src/bar.ts`, `src/thumb.ts`, `src/scrollbar.vue`, `src/thumb.vue`) re-pointed. No new hooks built — every symbol already existed in g-utils/g-hooks (pure re-point confirmed). Zero public API change.
- [x] T4.2 Grep-verify zero `from ['"]element-plus` matches under `components/scrollbar/src/**` and `index.ts` — confirmed (0 matches).
- [x] T4.3 Confirmed `scrollbar`'s `package.json` packaging convention: added `dependencies` (`@flash-global66/g-hooks@^0.7.0`, `@flash-global66/g-utils@^0.6.0`, matching current workspace versions 0.7.0/0.6.0 after rebasing onto the WU-3-merged main — same pattern as the WU-2/WU-3 stale-range bugfix, obs #283). Kept `element-plus` in `peerDependencies` because `scrollbar.styles.scss` still `@use`s `element-plus/theme-chalk` mixins (theme coupling, out of scope, same as overlay).
- [x] T4.4 Removed `'components/scrollbar/**'` from `excludedFiles` in `.eslintrc.cjs`. Scoped `eslint --max-warnings 0` (components/scrollbar/src, index.ts, common/g-hooks/src, common/g-utils/src, .eslintrc.cjs, dist ignored): 0 errors, 0 warnings. Fixed a pre-existing, unrelated `@typescript-eslint/ban-ts-comment` error on scrollbar.vue's `@ts-nocheck` (same class of debt as `components/table/**`) with a targeted `eslint-disable-next-line`, since lint-staged now runs full-file lint on this touched file.
- [~] T4.5 `yarn build` for `scrollbar` blocked by a pre-existing environment issue: `npx lerna run build` reports "command not found: vite" (verified NOT scrollbar-specific — `inline`, also `buildable: true`, hits the identical failure; `yarn vite --version` resolves fine, so it's a Yarn-PnP/Lerna-runner path issue, not introduced by this WU). Full `yarn test:run` green: 251/251 (no new tests — pure re-point, no behavior change).
- [ ] T4.6 Validate in `front-b2b` (real copy) — deferred, same blocker as WU-1/WU-2/WU-3 (CodeCommit registry network unavailable in sandbox).
- [~] T4.7 Commit as one work unit (`refactor(scrollbar): migrate off element-plus internals`, commit `881ab8b`) on branch `feat/ds-ep-v4-wu4-scrollbar`, branched from `origin/main` @ `1b2b222` (includes WU-3/overlay merged). PR creation + Lerna-publish deferred to orchestrator/reviewer, per this apply phase's explicit instruction to stop after local commit.

## WU-5 — `popper` (deep migration, core; depends on WU-1, WU-2)

Publishes: `popper`. Est. ~380–400 changed lines (highest-drift copy — `usePopper` is the largest ported algorithm; watch the 400-line budget, see Review Workload Forecast). Requirements: `popper-overlay-migration` full set; `g-hooks-package` → `popper-overlay-composables-added`, `shared-hook-single-ownership` (re-points `useForwardRef` from WU-2, `isFocusable` from WU-1), `v4-hooks-unit-tested`.

- [x] T5.1 Read EP's `usePopper` from `node_modules/element-plus/es/hooks/use-popper/index.mjs` (2.9.7 — actual compiled path is `es/hooks/use-popper/`, not `es/components/popper/src/composables/` as the brief anticipated). Cross-checked against sibling `../element-plus/packages/hooks/use-popper/index.ts` line-by-line — zero drift found.
- [x] T5.2 Wrote failing unit tests for `usePopper` covering: initial `state`/`styles`/`attributes` shape (default popper/arrow styles, empty attributes before both elements are set), instance creation once both reference/popper elements are set, `update()`/`forceUpdate()` delegating to the underlying `@popperjs/core` instance, teardown destroying the instance on unmount, and re-creation (destroy-then-recreate) when the elements change — new `common/g-hooks/tests/composables/usePopper.spec.ts` (5 tests, uses a minimal `createApp`/`setup()` host so `watch`/`onBeforeUnmount` run in a valid reactive scope — not a DOM/template rendering test).
- [x] T5.3 Implemented `usePopper` in `common/g-hooks/src/composables/usePopper.ts` — byte-exact copy (algorithm identical to sibling/2.9.7; only comments translated to Spanish). `yarn test:run` → green.
- [x] T5.4 Read EP's `useZIndex` from `node_modules/element-plus/es/hooks/use-z-index/index.mjs` (2.9.7). Cross-checked sibling `../element-plus/packages/hooks/use-z-index/index.ts` — zero drift (sibling imports `debugWarn`/`isClient`/`isNumber` from `@element-plus/utils`; compiled 2.9.7 imports `isClient` from `@vueuse/core` directly and `isNumber`/`debugWarn` from local EP util modules — same runtime semantics, confirmed via g-utils' existing `isClient`/`debugWarn`/`isNumber`, which already match this contract from prior WUs).
- [x] T5.5 Wrote failing unit test for `useZIndex` (`initialZIndex` defaults to `defaultInitialZIndex`/2000 with no override; respects an explicit `zIndexOverrides` ref; `nextZIndex()` increments a shared module-level counter across separate `useZIndex()` calls; `currentZIndex` reflects the latest allocated value) — new `common/g-hooks/tests/composables/useZIndex.spec.ts` (4 tests).
- [x] T5.6 Implemented `useZIndex` in `common/g-hooks/src/composables/useZIndex.ts` — byte-exact copy, re-points `isNumber`/`isClient`/`debugWarn` to `@flash-global66/g-utils`. `yarn test:run` → green.
- [x] T5.7 Updated `common/g-hooks/src/index.ts` barrel to export `usePopper` and `useZIndex`.
- [x] T5.8 Migrated `components/popper/src/**` (13 files + `index.ts`): re-pointed `useForwardRef` → `@flash-global66/g-hooks` (WU-2's final export location, not `g-slot`); `isFocusable`/`isElement`/`isClient`/`isNumber`/`buildProps`/`definePropType`/`NOOP`/`withInstall`/`SFCWithInstall` → `@flash-global66/g-utils`; `useAriaProps`/`usePopper`/`useZIndex` (+ `PartialOptions`/`UsePopperReturn` types) → `@flash-global66/g-hooks`; `useNamespace` → `@flash-global66/g-utils` (not g-hooks — confirmed its actual home). Declared `g-hooks`/`g-utils` as real dependencies. `g-focus-trap`/`g-form`/`g-slot` were already DS-native (unaffected by this WU) and stay in `peerDependencies`. Zero public API change (all exported components/props/emits/types identical).
- [x] T5.9 Grep-verified zero `from ['"]element-plus` matches under `components/popper/src/**` and `index.ts` (confirmed 0 matches, including in comments).
- [x] T5.10 Confirmed `popper`'s `package.json` packaging convention: added `dependencies` (`@flash-global66/g-hooks@^0.7.0`, `@flash-global66/g-utils@^0.6.0`, matching current workspace versions, `semver.satisfies` verified true for both). Kept `element-plus` in `peerDependencies` (`popper.styles.scss` still `@use`s its theme-chalk mixins — SCSS-only coupling, out of scope). Kept `@popperjs/core` in `peerDependencies` (popper's own composables still import `Instance`/`Modifier`/`State` types directly for its public `UsePopperContentReturn` surface). `g-focus-trap`/`g-form`/`g-slot`/`@vueuse/core`/`lodash-unified`/`vue` peerDependencies unchanged.
- [x] T5.11 Removed `'components/popper/**'` from `excludedFiles` in `.eslintrc.cjs`. Scoped `eslint components/popper/src components/popper/index.ts common/g-hooks/src common/g-hooks/tests common/g-utils/src common/g-utils/tests .eslintrc.cjs --ext .vue,.ts,.js --max-warnings 0`: 0 errors, 0 warnings.
- [x] T5.12 `yarn build` for `popper` blocked by the same pre-existing environment issue documented in WU-4 (`npx lerna run build` → "command not found: vite"; `yarn vite --version` resolves fine directly — a Yarn-PnP/Lerna-runner PATH issue in this sandbox, not a regression). Full `yarn test:run`: **260/260 green**, 36 test files (9 new: 5 `usePopper` + 4 `useZIndex`), 0 failures.
- [ ] T5.13 Validate in `front-b2b` (real copy) — **deferred**, same blocker as every prior WU (requires a merged + Lerna-published `popper`; CodeCommit registry network unavailable in this sandbox). This gates every WU downstream (tooltip, dialog, select, dropdown, date-picker, time-picker).
- [x] T5.14 **Line-budget checkpoint**: the raw `git diff --stat origin/main..HEAD` shows ~1017 changed lines (721 insertions/296 deletions), well above the ~400 estimate — but ~95% of that is `prettier`/`eslint --fix` normalization applied by the pre-commit hook to files that predate the repo's current formatting convention (adding semicolons, trailing commas, arrow-fn parens) with **zero logic difference**; the true semantic diff is the ~2-3 import lines re-pointed per file (13 files) plus the 2 new hook files/tests and package/eslint config. Applied the split fallback anyway: 3 separate work-unit commits (`usePopper`, `useZIndex`, `refactor(popper)`) so each is independently reviewable.
- [x] T5.15 Committed as 3 work-unit commits (`8dec769` feat usePopper, `592ed3c` feat useZIndex, `08854d2` refactor popper) on branch `feat/ds-ep-v4-wu5-popper`, branched from `origin/main` @ `4fc6ff9` (includes WU-1..WU-4 merged). PR creation + Lerna-publish deferred to orchestrator/reviewer per this apply phase's explicit instruction to stop after local commit.

## WU-6 — `tooltip` (deep migration; depends on WU-5)

Publishes: `tooltip`. Est. ~350–400 changed lines (3 new hook groups; watch budget). Requirements: `popper-overlay-migration` full set; `g-hooks-package` → `popper-overlay-composables-added`, `v4-hooks-unit-tested`.

- [ ] T6.1 Read EP's `useDelayedToggle`/`useDelayedToggleProps` from `node_modules/element-plus/es/hooks/use-delayed-toggle/index.mjs` (2.9.7). Cross-check sibling.
- [ ] T6.2 Write failing unit tests for `useDelayedToggle` (`onOpen` waits `showAfter` ms before invoking `open`; `onClose` waits `hideAfter` ms before invoking `close`; `autoClose` triggers `close` after the configured duration once open; rapid open/close cancels pending timers — no double-invoke) — new `common/g-hooks/tests/composables/useDelayedToggle.spec.ts`. Use Vitest fake timers.
- [ ] T6.3 Implement `useDelayedToggle` + `useDelayedToggleProps` in `common/g-hooks/src/composables/useDelayedToggle.ts` — byte-exact copy. Run `yarn test:run` → green.
- [ ] T6.4 Read EP's `createModelToggleComposable` from `node_modules/element-plus/es/hooks/use-model-toggle/index.mjs` (2.9.7 — highest-drift copy along with `usePopper`). Cross-check sibling line-by-line.
- [ ] T6.5 Write failing unit tests for `createModelToggleComposable` (factory returns `use<Name>ModelToggle` + prop/emit definitions; toggling updates the model value; emits fire with correct event names derived from the factory's name argument) — new `common/g-hooks/tests/composables/useModelToggle.spec.ts`.
- [ ] T6.6 Implement `createModelToggleComposable` in `common/g-hooks/src/composables/useModelToggle.ts` — byte-exact copy. Run `yarn test:run` → green.
- [ ] T6.7 Read EP's `usePopperContainer`/`usePopperContainerId` from `node_modules/element-plus/es/hooks/use-popper-container/index.mjs` (2.9.7). Cross-check sibling.
- [ ] T6.8 Write failing unit test for `usePopperContainer`/`usePopperContainerId` (generates/reuses a stable teleport container id; container element is created once and reused across calls) — new `common/g-hooks/tests/composables/usePopperContainer.spec.ts`.
- [ ] T6.9 Implement `usePopperContainer` + `usePopperContainerId` in `common/g-hooks/src/composables/usePopperContainer.ts` — byte-exact copy. Run `yarn test:run` → green.
- [ ] T6.10 Update `common/g-hooks/src/index.ts` barrel to export the 3 new hook groups.
- [ ] T6.11 Migrate `components/tooltip/src/**`: re-point `useId` → `@flash-global66/g-hooks`; `composeEventHandlers`/`EVENT_CODE` → `@flash-global66/g-utils`; wire the 3 new hook groups. Declare `g-popper`/`g-focus-trap`/`g-teleport`/`g-icon-button`/`g-slot` as real dependencies per design §3. Zero public API change.
- [ ] T6.12 Grep-verify zero `from ['"]element-plus` matches under `components/tooltip/src/**` and `index.ts`.
- [ ] T6.13 Confirm `tooltip`'s `package.json` packaging convention.
- [ ] T6.14 Remove `'components/tooltip/**'` from `excludedFiles` in `.eslintrc.cjs`. `yarn lint --max-warnings 0` passes.
- [ ] T6.15 `yarn build` succeeds for `tooltip`. Full `yarn test:run` green.
- [ ] T6.16 Validate in `front-b2b` (real copy) — gates WU-8/select's `@flash-global66/g-tooltip` re-point.
- [ ] T6.17 **Line-budget checkpoint**: split into sequential commits per hook group if the diff exceeds ~400 lines (same fallback pattern as T5.14).
- [ ] T6.18 Commit as one work unit or the split from T6.17 (`feat(tooltip): migrate off element-plus internals, add delayed-toggle/model-toggle/popper-container hooks`), open PR #6 (depends on PR #5 merged), Lerna-publish on merge.

## WU-7 — `dialog` (deep migration, highest-risk; depends on WU-3, WU-5; parallel branch, independent of the tooltip chain)

Publishes: `dialog`. Est. ~350 changed lines. Requirements: `popper-overlay-migration` → full set plus `dialog-config-shim-adopted` (the highest-risk requirement in the slice, design §2.1); `g-hooks-package` → `dialog-config-composable-added`, `popper-overlay-composables-added`, `v4-hooks-unit-tested`.

- [ ] T7.1 Re-read design §2.1's grounded contract before writing any code: `dialog` reads **exactly one** config key, `namespace`, default `"gui"` (`components/dialog/src/hooks/use-dialog.ts:60-61` in the current EP-coupled source). Confirm this against `node_modules/element-plus/es/components/config-provider/src/hooks/use-global-config.mjs` (2.9.7) — verify the resolution chain (`inject(configProviderContextKey, globalConfig)` → computed with `?? defaultValue`) matches design's transcription exactly; flag any 2.9.7 drift from the sibling checkout before proceeding.
- [ ] T7.2 Write failing unit tests for the DS-native config shim **first**, per design §2.1's test contract: (a) `useGlobalConfig('namespace', 'gui')` returns `'gui'` with no ancestor provider; (b) returns the provided value when an ancestor called `provideGlobalConfig({ namespace: 'x' })`; (c) the no-arg overload returns the whole context ref; (d) the no-`getCurrentInstance()` path (SSR-like, no active component instance) returns the module-level `globalConfig` ref without throwing — new `common/g-hooks/tests/composables/useGlobalConfig.spec.ts`.
- [ ] T7.3 Implement `common/g-hooks/src/composables/useGlobalConfig.ts` exactly per design §2.1's code block: `GlobalConfigContext` interface (single `namespace?: string` key, reserved slots commented for future keys), `gConfigProviderContextKey` (own `Symbol`, NOT EP's `configProviderContextKey`), module-level `globalConfig` ref, `useGlobalConfig` single-key + whole-context overloads, `provideGlobalConfig` companion (ships for completeness, not wired by any v4 consumer). Run `yarn test:run` → green.
- [ ] T7.4 Read EP's `useDraggable` from `node_modules/element-plus/es/hooks/use-draggable/index.mjs` (2.9.7 — highest-drift copy along with `usePopper`/`createModelToggleComposable`). Cross-check sibling line-by-line.
- [ ] T7.5 Write failing unit tests for `useDraggable` (mousedown on the drag handle attaches move/up listeners; drag updates the target's transform/position within the configured `overflow` bounds; mouseup detaches listeners; disabled when `draggable` is falsy) — new `common/g-hooks/tests/composables/useDraggable.spec.ts`.
- [ ] T7.6 Implement `useDraggable` in `common/g-hooks/src/composables/useDraggable.ts` — byte-exact copy. Run `yarn test:run` → green.
- [ ] T7.7 Read EP's `composeRefs` from `node_modules/element-plus/es/utils/vue/refs.mjs` (2.9.7). Cross-check sibling. Confirm it is distinct from the existing `composeEventHandlers` (do not conflate).
- [ ] T7.8 Write failing unit test for `composeRefs` (merges multiple ref setters/refs into one callback ref; each target ref receives the same element; function refs and ref objects both supported) — new `common/g-utils/tests/utils/refs.util.spec.ts`.
- [ ] T7.9 Implement `composeRefs` in `common/g-utils/src/utils/refs.util.ts` (or equivalent) — byte-exact copy. Run `yarn test:run` → green.
- [ ] T7.10 Update `common/g-hooks/src/index.ts` and `common/g-utils/src/index.ts` barrels for the 3 new symbols.
- [ ] T7.11 Migrate `components/dialog/src/**`: re-point `useSameTarget` from WU-3 (`@flash-global66/g-overlay` or `g-hooks` per its final export location), `useZIndex`/`useId` from WU-5 (`@flash-global66/g-hooks`); `addUnit`/`isClient`/`isBoolean` → `@flash-global66/g-utils`. Wire the new config shim (replacing `useGlobalConfig` from EP entirely — no scoped exception), `useDraggable`, `composeRefs`. Declare `g-focus-trap`/`g-overlay`/`g-teleport`/`g-icon-font`/`g-button` as real dependencies. Zero public API change.
- [ ] T7.12 Grep-verify zero `from ['"]element-plus` matches under `components/dialog/src/**` and `index.ts` — including confirming `useGlobalConfig` is no longer imported from `element-plus`/`@element-plus/*` anywhere in `dialog`.
- [ ] T7.13 Confirm `dialog`'s `package.json` packaging convention.
- [ ] T7.14 Remove `'components/dialog/**'` from `excludedFiles` in `.eslintrc.cjs` **fully** (not narrowed per-symbol, per proposal decision 1). `yarn lint --max-warnings 0` passes.
- [ ] T7.15 `yarn build` succeeds for `dialog`. Full `yarn test:run` green.
- [ ] T7.16 Validate `dialog` in `front-b2b` (real copy) **before** relying on the exclude removal from T7.14 — specifically exercise the config shim: mount `dialog` (a) with no ancestor DS config provider, (b) nested inside the existing `GConfigProvider` island, confirming `namespace` resolves to `"gui"` in both cases (design §2.1's byte-identical claim).
- [ ] T7.17 Commit as one work unit (`feat(dialog): migrate off element-plus internals, add DS-native config shim + useDraggable/composeRefs`), open PR #7 (depends on PR #3 + PR #5 merged; independent of PR #6), Lerna-publish on merge.

## WU-8 — `select` (deep migration + order-hazard; depends on WU-6)

Publishes: `select`. Est. ~380 changed lines (watch budget). Requirements: `popper-overlay-migration` full set; `g-hooks-package` → `popper-overlay-composables-added`, `shared-hook-single-ownership` (owns `useEmptyValues`, shared with WU-11 time-picker; owns `useCalcInputWidth`, shared with WU-12 input-tag), `v4-hooks-unit-tested`; `g-utils-extended` → `popper-overlay-utils-added` (`ClickOutside` directive, shared with WU-10 date-picker), `v4-utils-unit-tested`.

- [ ] T8.1 **Sequencing guard (mandatory, per proposal/design risk table)**: confirm PR #6 (tooltip) is merged and published before starting this WU. `select` currently imports `TooltipInstance`/`useTooltipContentProps` straight from `element-plus`, not from the DS `tooltip` — the whole point of this WU is re-pointing to `@flash-global66/g-tooltip`, never to an EP subpath. Do not proceed if tooltip hasn't landed.
- [ ] T8.2 Read EP's `useEmptyValues`/`useEmptyValuesProps` from `node_modules/element-plus/es/hooks/use-empty-values/index.mjs` (2.9.7). Cross-check sibling `../element-plus/packages/hooks/use-empty-values/`. Per design §2.3, confirm the injection key it reads (`emptyValuesContextKey`) is provided by config-provider, NOT form context — verify this against the 2.9.7 compiled source, not just the sibling, since this corrects the proposal's open question.
- [ ] T8.3 Write failing unit tests for `useEmptyValues` (design §2.3's cascade: `props.emptyValues` wins when set; falls back to `config.value.emptyValues` when an ancestor DS config context provides it; falls back to `DEFAULT_EMPTY_VALUES` when neither is set; `valueOnClear` cascade: prop > config > defaultValue > `undefined`; `isEmptyValue` correctly classifies against the resolved `emptyValues` set) — new `common/g-hooks/tests/composables/useEmptyValues.spec.ts`.
- [ ] T8.4 Implement `useEmptyValues` + `useEmptyValuesProps` + `gEmptyValuesContextKey` in `common/g-hooks/src/composables/useEmptyValues.ts` — own DS-native injection key (distinct `Symbol()` from `useGlobalConfig`'s, per design §2.3's symmetry note — do NOT couple `select` to `dialog`), byte-exact algorithm otherwise. Run `yarn test:run` → green.
- [ ] T8.5 Read EP's `useCalcInputWidth` from `node_modules/element-plus/es/hooks/use-calc-input-width/index.mjs` (2.9.7). Cross-check sibling.
- [ ] T8.6 Write failing unit test for `useCalcInputWidth` (`inputStyle` reflects the measured width of the hidden calculator element; `calculatorRef` is exposed for template binding) — new `common/g-hooks/tests/composables/useCalcInputWidth.spec.ts`.
- [ ] T8.7 Implement `useCalcInputWidth` in `common/g-hooks/src/composables/useCalcInputWidth.ts` — byte-exact copy. Run `yarn test:run` → green.
- [ ] T8.8 Read EP's `ClickOutside` directive from `node_modules/element-plus/es/directives/click-outside/index.mjs` (2.9.7). Cross-check sibling.
- [ ] T8.9 Write failing unit test for the `ClickOutside` directive (fires the bound handler only for clicks/pointerdowns outside the bound element; does NOT fire for clicks inside; unbinds cleanly on `unmounted`) — new `common/g-utils/tests/directives/clickOutside.directive.spec.ts`.
- [ ] T8.10 Implement `ClickOutside` in `common/g-utils/src/directives/clickOutside.directive.ts` — byte-exact copy, unit-testable handler map per spec's edge-case requirement. Run `yarn test:run` → green.
- [ ] T8.11 Update `common/g-hooks/src/index.ts` and `common/g-utils/src/index.ts` barrels for the 3 new symbols.
- [ ] T8.12 Migrate `components/select/src/**`: re-point `TooltipInstance`/`useTooltipContentProps` → `@flash-global66/g-tooltip` (NOT an EP subpath — the risk this WU exists to close); `EVENT_CODE`/`CHANGE_EVENT`/`UPDATE_MODEL_EVENT` → `@flash-global66/g-utils`; wire `useEmptyValues`/`useCalcInputWidth`/`ClickOutside`. Zero public API change.
- [ ] T8.13 Grep-verify zero `from ['"]element-plus` matches under `components/select/src/**` and `index.ts`, including zero direct `TooltipInstance`/`useTooltipContentProps` imports from `element-plus`/`@element-plus/*`.
- [ ] T8.14 Confirm `select`'s `package.json` packaging convention, including `g-tooltip` as a real dependency (not peer).
- [ ] T8.15 Remove `'components/select/**'` from `excludedFiles` in `.eslintrc.cjs`. `yarn lint --max-warnings 0` passes.
- [ ] T8.16 `yarn build` succeeds for `select`. Full `yarn test:run` green.
- [ ] T8.17 Validate in `front-b2b` (real copy) — specifically confirm the tooltip re-point renders/positions correctly (the ordering hazard this WU is designed to avoid).
- [ ] T8.18 **Line-budget checkpoint**: split into sequential commits by hook group if the diff exceeds ~400 lines.
- [ ] T8.19 Commit as one work unit or the split from T8.18 (`feat(select): migrate off element-plus internals, re-point to g-tooltip, add useEmptyValues/useCalcInputWidth/ClickOutside`), open PR #8 (depends on PR #6 merged), Lerna-publish on merge.

## WU-9 — `dropdown` (deep migration, widest fan-out; own WU, never bundled with select; depends on WU-6, WU-4, WU-7)

Publishes: `dropdown`. Est. ~400 changed lines (widest internal dependency surface in the slice per design §3/§6 — treat as the review-budget risk item). Requirements: `popper-overlay-migration` full set; `g-hooks-package` → `popper-overlay-composables-added`, `shared-hook-single-ownership` (owns `useLocale`, shared with WU-10 date-picker + WU-11 time-picker), `v4-hooks-unit-tested`.

- [ ] T9.1 Confirm PR #6 (tooltip), PR #4 (scrollbar), and PR #7 (dialog) are merged before starting — `dropdown`'s fan-out touches focus-trap, roving-focus-group, collection, tooltip, scrollbar, icon-font, slot, popper (per design §3, most already clean or migrated by this point).
- [ ] T9.2 Read EP's `whenMouse` from `node_modules/element-plus/es/components/dropdown/src/utils.mjs` (or wherever the 2.9.7 compiled path places it — confirm exact module). Cross-check sibling `../element-plus/packages/components/dropdown/src/utils.ts`.
- [ ] T9.3 Write failing unit test for `whenMouse` (wraps a handler so it only fires for `PointerEvent`s where `pointerType === 'mouse'`; touch/pen pointer events are ignored) — new `common/g-hooks/tests/composables/whenMouse.spec.ts`.
- [ ] T9.4 Implement `whenMouse` in `common/g-hooks/src/composables/whenMouse.ts` — byte-exact copy. Run `yarn test:run` → green.
- [ ] T9.5 Read EP's `useLocale` from `node_modules/element-plus/es/hooks/use-locale/index.mjs` (2.9.7). Cross-check sibling.
- [ ] T9.6 Write failing unit test for `useLocale` (returns `{ lang, locale, t }`; `locale` reflects an ancestor-provided override when present; falls back to a default locale/translation table when no override exists; `t()` resolves a translation key against the resolved locale) — new `common/g-hooks/tests/composables/useLocale.spec.ts`.
- [ ] T9.7 Implement `useLocale` in `common/g-hooks/src/composables/useLocale.ts` — byte-exact copy. Run `yarn test:run` → green.
- [ ] T9.8 Update `common/g-hooks/src/index.ts` barrel for `whenMouse`, `useLocale`.
- [ ] T9.9 Migrate `components/dropdown/src/**`: re-point `composeRefs` from WU-7 (`@flash-global66/g-utils`); `composeEventHandlers`/`useId`/`addUnit`/`ensureArray`/`EVENT_CODE` → `@flash-global66/g-utils`/`g-hooks`; re-point remaining focus-trap/roving-focus-group/collection/tooltip/scrollbar/icon-font/slot/popper imports to their DS packages; wire `whenMouse`/`useLocale`. Zero public API change.
- [ ] T9.10 Grep-verify zero `from ['"]element-plus` matches under `components/dropdown/src/**` and `index.ts`.
- [ ] T9.11 Confirm `dropdown`'s `package.json` packaging convention across its wide dependency set.
- [ ] T9.12 Remove `'components/dropdown/**'` from `excludedFiles` in `.eslintrc.cjs`. `yarn lint --max-warnings 0` passes.
- [ ] T9.13 `yarn build` succeeds for `dropdown`. Full `yarn test:run` green.
- [ ] T9.14 Validate in `front-b2b` (real copy).
- [ ] T9.15 **Line-budget checkpoint (high-probability trigger)**: given the widest fan-out in the slice, this WU is the most likely to exceed 400 lines. If so, split into sequential commits by concern (hook additions first, then package re-point wiring) within the same PR — do NOT bundle any part of this WU with `select`'s PR (design/proposal explicit constraint).
- [ ] T9.16 Commit as one work unit or the split from T9.15 (`feat(dropdown): migrate off element-plus internals, add whenMouse/useLocale`), open PR #9 (depends on PR #6 + PR #4 + PR #7 merged; its own dedicated PR), Lerna-publish on merge.

## WU-10 — `date-picker` (deep migration + in-place lint-debt fix; depends on WU-9, WU-8)

Publishes: `date-picker`. Est. ~250 changed lines (includes the lint-debt cleanup — scope it to touched files, per proposal decision 3). Requirements: `popper-overlay-migration` full set plus `date-picker-lint-debt-resolved`; `g-utils-extended` → `popper-overlay-utils-added`, `v4-utils-unit-tested`.

- [ ] T10.1 Confirm PR #9 (dropdown) and PR #8 (select) are merged before starting.
- [ ] T10.2 Read EP's `castArray` from `node_modules/element-plus/es/utils/arrays.mjs` (2.9.7). Cross-check sibling. Confirm its semantics on `null`/`undefined` differ from the existing `ensureArray` (per design §4 — distinct symbol, not a rename).
- [ ] T10.3 Write failing unit test for `castArray` (wraps a non-array value in a single-element array; returns an array input unchanged; explicitly assert the `null`/`undefined` edge-case behavior that differs from `ensureArray`) — new `common/g-utils/tests/utils/arrays.util.spec.ts` (or extend existing).
- [ ] T10.4 Implement `castArray` in `common/g-utils/src/utils/arrays.util.ts` — byte-exact copy, do not conflate with `ensureArray`. Run `yarn test:run` → green.
- [ ] T10.5 Update `common/g-utils/src/index.ts` barrel to export `castArray`.
- [ ] T10.6 Migrate `components/date-picker/src/**`: re-point `useLocale` from WU-9, `ClickOutside` from WU-8, `isArray`/`isFunction`/`useNamespace`/`EVENT_CODE` → `@flash-global66/g-utils`/`g-hooks`; wire `castArray`. Zero public API change.
- [ ] T10.7 **In the same touched files**, fix the pre-existing `no-unused-vars` lint debt (proposal decision 3) — remove genuinely-dead imports/bindings discovered while migrating; do NOT widen the diff beyond files this migration already touches, and do NOT open a separate tracked chore for it.
- [ ] T10.8 Grep-verify zero `from ['"]element-plus` matches under `components/date-picker/src/**` and `index.ts`.
- [ ] T10.9 Confirm `date-picker`'s `package.json` packaging convention.
- [ ] T10.10 Remove `'components/date-picker/**'` from `excludedFiles` in `.eslintrc.cjs`. `yarn lint --max-warnings 0` passes (this is the requirement gating T10.7 — the lint-debt fix must land in the same WU for this to be achievable).
- [ ] T10.11 `yarn build` succeeds for `date-picker`. Full `yarn test:run` green.
- [ ] T10.12 Validate in `front-b2b` (real copy).
- [ ] T10.13 Commit as one work unit (`feat(date-picker): migrate off element-plus internals, add castArray, fix pre-existing no-unused-vars debt`), open PR #10 (depends on PR #9 + PR #8 merged), Lerna-publish on merge.

## WU-11 — `time-picker` (deep migration; depends on WU-6, WU-9, WU-8)

Publishes: `time-picker`. Est. ~220 changed lines. Requirements: `popper-overlay-migration` full set; `g-utils-extended` → `popper-overlay-utils-added`, `v4-utils-unit-tested`.

- [ ] T11.1 Confirm PR #6 (tooltip), PR #9 (dropdown), and PR #8 (select) are merged before starting.
- [ ] T11.2 Read EP's `getStyle` from `node_modules/element-plus/es/utils/dom/style.mjs` (2.9.7). Cross-check sibling.
- [ ] T11.3 Write failing unit test for `getStyle` (reads a computed style property from an element via `getComputedStyle`, with the same fallback/normalization EP applies for cross-browser `float`/vendor-prefixed properties) — new `common/g-utils/tests/utils/dom.util.spec.ts` (extend WU-1's file if already created).
- [ ] T11.4 Implement `getStyle` in `common/g-utils/src/utils/dom.util.ts` — byte-exact copy. Run `yarn test:run` → green.
- [ ] T11.5 Read EP's `vRepeatClick` directive from `node_modules/element-plus/es/directives/repeat-click/index.mjs` (2.9.7). Cross-check sibling. Note per design §4 this directive is also needed by `input-number` in the deferred v5 slice — build it EP-faithful so v5 can re-point cleanly.
- [ ] T11.6 Write failing unit test for `vRepeatClick` (mousedown starts a repeating interval invoking the bound handler after an initial delay; mouseup/mouseleave clears the interval; single click without hold still fires once) — new `common/g-utils/tests/directives/repeatClick.directive.spec.ts`.
- [ ] T11.7 Implement `vRepeatClick` in `common/g-utils/src/directives/repeatClick.directive.ts` — byte-exact copy. Run `yarn test:run` → green.
- [ ] T11.8 Update `common/g-utils/src/index.ts` barrel for `getStyle`, `vRepeatClick`.
- [ ] T11.9 Migrate `components/time-picker/src/**`: re-point `useEmptyValues` from WU-8, `useLocale` from WU-9, `useFocusController` (already exists in g-hooks per v3 — currently `time-picker` still imports it straight from EP per obs #269, per the proposal's "already-extracted hooks not auto-consumed" risk); wire `getStyle`/`vRepeatClick`. Zero public API change.
- [ ] T11.10 Grep-verify zero `from ['"]element-plus` matches under `components/time-picker/src/**` and `index.ts`, including confirming `useFocusController` now resolves from `@flash-global66/g-hooks`, not EP.
- [ ] T11.11 Confirm `time-picker`'s `package.json` packaging convention, including `g-form`/`g-input`/`g-icon-font`/`g-tooltip` as real dependencies where used per design §3.
- [ ] T11.12 Remove `'components/time-picker/**'` from `excludedFiles` in `.eslintrc.cjs`. `yarn lint --max-warnings 0` passes.
- [ ] T11.13 `yarn build` succeeds for `time-picker`. Full `yarn test:run` green.
- [ ] T11.14 Validate in `front-b2b` (real copy).
- [ ] T11.15 Commit as one work unit (`feat(time-picker): migrate off element-plus internals, add getStyle/vRepeatClick, re-point useFocusController`), open PR #11 (depends on PR #6 + PR #9 + PR #8 merged), Lerna-publish on merge.

## WU-12 — `input-tag` (pure re-point; depends on WU-8)

Publishes: `input-tag`. Est. ~100 changed lines. Requirements: `popper-overlay-migration` → `zero-ep-imports-per-migrated-package`, `public-api-and-styles-preserved`, `reused-composables-repointed`, `packaging-convention-followed`, `migration-gated-by-green-tests`.

- [ ] T12.1 Confirm PR #8 (select) is merged before starting — this WU re-points `useCalcInputWidth` from `select`'s new export.
- [ ] T12.2 Re-point `components/input-tag/src/**` imports: `useCalcInputWidth` → `@flash-global66/g-hooks` (built in WU-8); `useComposition`/`useFocusController` → `@flash-global66/g-hooks` (already exist per v3); `useNamespace`/`NOOP`/`isUndefined` → `@flash-global66/g-utils`. No new hooks built. Zero public API change.
- [ ] T12.3 Grep-verify zero `from ['"]element-plus` matches under `components/input-tag/src/**` and `index.ts`.
- [ ] T12.4 Confirm `input-tag`'s `package.json` packaging convention.
- [ ] T12.5 Remove `'components/input-tag/**'` from `excludedFiles` in `.eslintrc.cjs`. `yarn lint --max-warnings 0` passes.
- [ ] T12.6 `yarn build` succeeds for `input-tag`. Full `yarn test:run` green.
- [ ] T12.7 Validate in `front-b2b` (real copy).
- [ ] T12.8 Commit as one work unit (`refactor(input-tag): re-point imports off element-plus internals`), open PR #12 (depends on PR #8 merged), Lerna-publish on merge.

## WU-13 — `inline` (pure re-point, smallest; no dependencies, fully independent of the popper chain)

Publishes: `inline`. Est. ~60 changed lines. Requirements: `popper-overlay-migration` → `zero-ep-imports-per-migrated-package`, `public-api-and-styles-preserved`, `reused-composables-repointed`, `packaging-convention-followed`, `migration-gated-by-green-tests`.

- [ ] T13.1 Re-point `components/inline/src/**` imports: `useFormSize` → `@flash-global66/g-form` (exists per v3); `useAriaProps` → `@flash-global66/g-hooks`; `useNamespace`/prop-builders/type guards → `@flash-global66/g-utils`. No new hooks built. Zero public API change.
- [ ] T13.2 Grep-verify zero `from ['"]element-plus` matches under `components/inline/src/**` and `index.ts`.
- [ ] T13.3 Confirm `inline`'s `package.json` packaging convention.
- [ ] T13.4 Remove `'components/inline/**'` from `excludedFiles` in `.eslintrc.cjs`. `yarn lint --max-warnings 0` passes.
- [ ] T13.5 `yarn build` succeeds for `inline`. Full `yarn test:run` green.
- [ ] T13.6 Validate in `front-b2b` (real copy).
- [ ] T13.7 Commit as one work unit (`refactor(inline): re-point imports off element-plus internals`), open PR #13 (no dependency, may merge any time), Lerna-publish on merge.

## Cross-cutting (apply to every WU)

- [ ] X.1 Every WU PR body includes: the dependency diagram (this file's header) with the current PR marked `📍`, start state, finished state, prior dependencies, follow-up work, and out-of-scope items (chained-pr skill Output Contract).
- [ ] X.2 Every WU is verified independently before merge: `yarn test:run` green, `yarn lint --max-warnings 0`, `yarn build` for the touched package(s), and `front-b2b` real-copy validation on `ander/update/version-packages`.
- [ ] X.3 No WU introduces a `g-icon-font`, `g-form`, or component-layer dependency into `g-utils` (leaf-layer purity) or a form-context coupling into `g-hooks` (design §1's layering rule — every new symbol lands in the lowest layer that can host it without a back-edge).
- [ ] X.4 `useGlobalConfig` (WU-7) and `useEmptyValues` (WU-8) each get their own distinct DS-owned injection key (`gConfigProviderContextKey` vs `gEmptyValuesContextKey`) and are NOT coupled to each other, even though both are config-provider-sourced (design §2.3 symmetry note guard).
- [ ] X.5 The forward-ref family (WU-2) is never split across two modules/packages — `useForwardRef` and `useForwardRefDirective` must keep sharing the exact same `FORWARD_REF_INJECTION_KEY` symbol instance through every downstream re-point (design §2.2 correctness guard).
- [ ] X.6 Radio-group's stale `radio/radio.type` import (design §2.4) is untouched by every WU above — confirm via `git diff --stat` after each WU that `components/radio-group/**` and `components/radio/**` never appear in the changed-files list.
- [ ] X.7 After all 13 WUs merge, confirm the slice-level success criteria from `proposal.md`: zero EP imports across the 13 packages (grep-verified), all ~19 new hooks/utils/directives unit-tested with the full suite green, `excludedFiles` no longer lists any of the 13 packages (only the 8 permanent islands + `toast`/`table`/`pagination`/`collapse`/`input-number` remain excluded), `yarn build`/`yarn lint --max-warnings 0` pass repo-wide, every migration WU validated in `front-b2b` via real copies, `element-plus` still present in every island's `package.json` (non-goal preserved).

---

## Review Workload Forecast

| WU    | Deliverable                                     | Est. changed lines | Chained PR recommended             | 400-line budget risk                                                                                      | Decision needed before apply                                                 |
| ----- | ----------------------------------------------- | -----------------: | ---------------------------------- | --------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| WU-1  | focus-trap (deep)                               |               ~200 | Yes (pre-decided: stacked-to-main) | Low                                                                                                       | No                                                                           |
| WU-2  | slot (deep, forward-ref family)                 |               ~220 | Yes                                | Low                                                                                                       | No                                                                           |
| WU-3  | overlay (deep)                                  |               ~180 | Yes                                | Low                                                                                                       | No                                                                           |
| WU-4  | scrollbar (pure re-point)                       |                ~80 | Yes                                | Low                                                                                                       | No                                                                           |
| WU-5  | popper (deep, core — `usePopper` highest-drift) |           ~380–400 | Yes                                | **Medium–High** — closest single-hook risk; T5.14 fallback split pre-authorized                           | No — flag if actual diff exceeds ~400                                        |
| WU-6  | tooltip (deep, 3 hook groups)                   |           ~350–400 | Yes                                | **Medium** — T6.17 fallback split pre-authorized                                                          | No — flag if actual diff exceeds ~400                                        |
| WU-7  | dialog (deep, highest-risk config shim)         |               ~350 | Yes                                | Low–Medium                                                                                                | No                                                                           |
| WU-8  | select (deep + order-hazard)                    |               ~380 | Yes                                | **Medium** — T8.18 fallback split pre-authorized                                                          | No — flag if actual diff exceeds ~400                                        |
| WU-9  | dropdown (deep, widest fan-out)                 |               ~400 | Yes                                | **High** — most likely WU to exceed budget; T9.15 fallback split pre-authorized; never bundle with select | No — flag if actual diff exceeds ~400, but do not merge with WU-8 regardless |
| WU-10 | date-picker (deep + lint-debt fix)              |               ~250 | Yes                                | Low                                                                                                       | No                                                                           |
| WU-11 | time-picker (deep)                              |               ~220 | Yes                                | Low                                                                                                       | No                                                                           |
| WU-12 | input-tag (pure re-point)                       |               ~100 | Yes                                | Low                                                                                                       | No                                                                           |
| WU-13 | inline (pure re-point, smallest)                |                ~60 | Yes                                | Low                                                                                                       | No                                                                           |

**Overall**: 13 chained PRs, `stacked-to-main` (pre-decided in proposal/design). Total estimated changed lines across the slice: ~3,170. All WUs individually estimated at or under the ~400-line budget, but **WU-5 (popper)**, **WU-6 (tooltip)**, **WU-8 (select)**, and especially **WU-9 (dropdown)** sit close to or at the ceiling — each has a pre-authorized within-PR commit-split fallback (mirroring the v3 WU-4 precedent) rather than spawning a new WU if the real diff creeps over. No `size:exception` anticipated up front, but the orchestrator should watch these four during `sdd-apply` and only escalate if a split-commit fallback still doesn't bring an individual PR under budget.

**Chained PRs recommended: Yes.**
**400-line budget risk: Medium** (four WUs — popper, tooltip, select, dropdown — sit near the ceiling; the rest are Low).
**Decision needed before apply: No** — chain strategy (`stacked-to-main`) and per-WU split fallbacks are pre-authorized in this file; only escalate to the orchestrator if a WU exceeds budget even after its commit-split fallback.

**Parallelism summary**: WU-1/WU-2/WU-3/WU-4 (near-leaves) are mutually independent and can be developed concurrently. WU-13 (inline) has zero dependency on the popper chain and can land at any point. Once WU-5 (popper) merges, the tooltip branch (WU-6 → WU-8/WU-9), the dialog branch (WU-7, parallel off WU-3+WU-5), and eventually the picker branch (WU-10/WU-11, after WU-8+WU-9) proceed in parallel. WU-9 (dropdown) is always its own PR — never bundled with WU-8 (select), per the explicit proposal/design risk-table constraint.

# Tasks: ds-standardization-pilot

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated changed lines | 900–1 200 (additions + deletions) |
| 400-line budget risk | High |
| Chained PRs recommended | Yes |
| Suggested split | PR 1 (g-utils + Vitest) → PR 2 (button migration + tests) → PR 3 (docs + skills) |
| Delivery strategy | ask-on-risk |
| Chain strategy | stacked-to-main |

Decision needed before apply: Yes
Chained PRs recommended: Yes
Chain strategy: stacked-to-main
400-line budget risk: High

### Suggested Work Units

| Unit | Goal | Likely PR | Notes |
|------|------|-----------|-------|
| WU-1 | g-utils package + Vitest root setup | PR 1 → main | Foundation; all later units depend on it |
| WU-2 | Button migration to canonical structure | PR 2 → main | Depends on WU-1 (g-utils consumable) |
| WU-3 | Docs evolution + AI skills | PR 3 → main | Depends on WU-2 (button as reference example) |

---

## Phase 1 — g-utils Foundation (WU-1, Part A)

- [x] 1.1 Create `common/g-utils/` directory; add `package.json` with `name: "@flash-global66/g-utils"`, `buildable: false`, `exports: { ".": "./index.ts", "./mixins": "./styles/mixins.scss", "./config": "./styles/config.scss" }`, `peerDependencies: { "vue": "^3.2.0" }`. Done: bundler resolves both TS and SCSS entries.
- [x] 1.2 Create `common/g-utils/styles/config.scss` — mirrors `element-plus/theme-chalk/src/mixins/config.scss`: `$namespace: 'el' !default`, `$element-separator: '__' !default`, `$modifier-separator: '--' !default`, `$state-prefix: 'is-' !default`. Done: `@forward 'config' with ($namespace: 'gui')` is possible.
- [x] 1.3 Create `common/g-utils/styles/function.scss` — copy `hitAllSpecialNestRule` and `bem` Sass functions from element-plus source (pure functions, no output). Done: functions importable by `mixins.scss`.
- [x] 1.4 Create `common/g-utils/styles/mixins.scss` — `@use 'config' as *; @use 'function' as *;` then implement `b($block)`, `e($el)`, `m($mod)`, `when($state)` with `@at-root` logic identical to EP theme-chalk. Done: compiling a minimal test SCSS with `@include b('button') { @include m('md') {} }` produces `.gui-button--md {}` (no el-* anywhere).
- [x] 1.5 Create `common/g-utils/src/props.ts` — export `buildProps<T>` and `definePropType<T>` (re-export or reimplement from `@element-plus/utils` or inline). Done: `import { buildProps } from '@flash-global66/g-utils'` resolves and types correctly.
- [x] 1.6 Create `common/g-utils/src/install.ts` — export `withInstall<T,E>`, `withNoopInstall<T>`, `SFCWithInstall<T>` (type alias `T & Plugin`). Implementations may delegate to `@element-plus/utils` internally; public import path is `@flash-global66/g-utils`. Done: `withInstall` attaches `install(app)` method; `SFCWithInstall<T>` type is assignable.
- [x] 1.7 Create `common/g-utils/src/types.ts` — export `SFCWithInstall<T>` type alias (re-export from `install.ts`). Done: importable as standalone.
- [x] 1.8 Create `common/g-utils/src/error.ts` — export `debugWarn(scope: string, msg: string): void`. Done: calling `debugWarn('Button','msg')` emits a `console.warn('[Button] msg')`.
- [x] 1.9 Create `common/g-utils/src/shared.ts` — export `isBoolean(val: unknown): val is boolean` and `isString(val: unknown): val is string`. Done: type guards narrow correctly in TS; `isBoolean(true)` returns `true`.
- [x] 1.10 Create `common/g-utils/src/use-namespace.ts` — export `useNamespace(block: string, namespaceOverride?: Ref<string>)` returning `{ namespace, b, e, m, is }`. Output must satisfy: `b()→'gui-button'`, `e('icon-left')→'gui-button__icon-left'`, `m('variant-primary')→'gui-button--variant-primary'`, `is('disabled',true)→'is-disabled'`, `is('disabled',false)→''`. Done: all 5 spec scenarios pass.
- [x] 1.11 Create `common/g-utils/index.ts` — barrel re-exporting all public symbols from src/*.ts (no SCSS here). Done: `import { buildProps, useNamespace, withInstall, isBoolean, debugWarn } from '@flash-global66/g-utils'` resolves in a single import.
- [x] 1.12 Add `common/g-utils` to root `package.json` workspaces array if not auto-discovered (verify `"common/*"` covers it — it does; no change needed). Done: `yarn workspaces list` shows `@flash-global66/g-utils`.

---

## Phase 2 — Vitest Root Setup (WU-1, Part B)

- [x] 2.1 Install dev deps at monorepo root: `vitest`, `@testing-library/vue`, `@testing-library/jest-dom`, `jsdom`. Add to root `package.json` devDependencies. Done: `node_modules` contains all four. NOTE: installed vitest@2.x (not @4.x) because vite@5 is used; vitest@4 requires vite@6.
- [x] 2.2 Create `tests/setup.ts` at monorepo root — `import '@testing-library/jest-dom'`. Done: `toHaveClass`, `toBeDisabled`, etc. are available in all spec files.
- [x] 2.3 Create `tests/utils/withSetup.ts` — exports `withSetup<T>(composable: () => T): { result: T; app: App }`. Must mount inside real Vue app. Done: `withSetup` is importable from `tests/utils/withSetup`; NOT exported from `@flash-global66/g-utils`.
- [x] 2.4 Create `vitest.config.ts` at monorepo root using `mergeConfig(viteBaseConfig, defineConfig({ test: { environment: 'jsdom', setupFiles: ['./tests/setup.ts'], include: ['components/**/tests/**/*.spec.ts', 'common/**/tests/**/*.spec.ts'], server: { deps: { inline: [/@flash-global66\/.*/] } } }))`. Done: `yarn test:run` runs 56 tests across 5 files.
- [x] 2.5 Add `"test": "vitest run"` and `"test:run": "vitest run"` scripts to root `package.json`. Done: `yarn test` invokes vitest.
- [x] 2.6 Verify only one `vitest.config.*` in repo: `find . -name 'vitest.config*' -not -path '*/node_modules/*'` returns exactly one result. Done: single config confirmed.

---

## Phase 3 — Golden CSS Snapshot (WU-2, Gate)

- [x] 3.1 Compile current `components/button/src/button.styles.scss` to plain CSS using sass API (with namespace 'gui' configured via @use 'config' with ($namespace: 'gui')) and save output to `tests/golden/button.baseline.css`. Script at `scripts/generate-button-golden.mjs`. Done: file exists, contains .gui-button selectors, 3750 bytes.
- [ ] 3.2 Commit golden baseline as part of the PR 1 → PR 2 boundary. Done: baseline is in version control before button migration begins. (Pending PR commit — tracked in WU-1 PR review.)

---

## Phase 4 — Button Migration to Canonical Structure (WU-2)

- [ ] 4.1 Create `components/button/src/constants/button.constant.ts` — `export const BUTTON_VARIANTS = ['primary','secondary','tertiary'] as const; export type ButtonVariant = typeof BUTTON_VARIANTS[number]; export const BUTTON_SIZES = ['sm','md'] as const; export type ButtonSize = typeof BUTTON_SIZES[number];`. Done: `button.constant.ts` is the single source of truth; old hardcoded arrays removed.
- [ ] 4.2 Create `components/button/src/types/button.type.ts` — re-exports `ButtonVariant`, `ButtonSize` from `button.constant.ts`; adds `ButtonState`, `ButtonNativeType`, `Ripple` types. Delete old `components/button/src/button.type.ts`. Done: types importable from new path; no reference to old path remains.
- [ ] 4.3 Create `components/button/src/props/button.props.ts` — imports `buildProps`, `definePropType`, `isBoolean`, `isString`, `debugWarn` from `@flash-global66/g-utils` (NOT element-plus); copies all 14 props + emits + `validateButtonProps` from old `button.ts`; `validateButtonProps` uses `BUTTON_VARIANTS`/`BUTTON_SIZES` from `button.constant.ts`. Delete old `components/button/src/button.ts`. Done: zero element-plus imports in this file; props API identical (14 props, same types/defaults).
- [ ] 4.4 Create `components/button/src/composables/useButton.ts` — move logic from `use-button.ts` verbatim; update import paths to new `button.props.ts` and `button.type.ts` locations. Delete old `components/button/src/use-button.ts`. Done: all existing behavior preserved; file at new canonical path.
- [ ] 4.5 Create `components/button/src/composables/useRipple.ts` — move logic from `use-ripple.ts` verbatim; update import path for `Ripple` type to new location. Delete old `components/button/src/use-ripple.ts`. Done: ripple behavior unchanged; file at new canonical path.
- [ ] 4.6 Create `components/button/src/styles/button.style.scss` — replace `@use 'element-plus/theme-chalk/src/mixins/mixins' as *` with `@use '@flash-global66/g-utils/mixins' as *`; keep all mixin calls (`b`, `e`, `m`, `when`) identical; remove unused `@use` directives (`utils`, `var`, `common/var`). Delete old `components/button/src/button.styles.scss`. Done: zero element-plus `@use` directives in new file; mixin call signatures unchanged.
- [ ] 4.7 Rewrite `components/button/src/Button.vue` — import `useNamespace` from `@flash-global66/g-utils` (not element-plus); import composable from `./composables/useButton`; import props from `./props/button.props`; zero element-plus imports. Template is identical to current. Done: `grep -r 'element-plus' components/button/src/` returns 0 matches.
- [ ] 4.8 Update `components/button/index.ts` — import `withInstall`, `withNoopInstall`, `SFCWithInstall` from `@flash-global66/g-utils`; re-export types from new `types/button.type.ts`. Done: barrel exports identical public API (`GButton`, `ButtonInstance`, types).
- [ ] 4.9 Update `components/button/package.json` — add `"sideEffects": ["**/*.css","**/*.scss"]`; update `exports["./styles.scss"]` to `"./src/styles/button.style.scss"`. Done: old scss path removed; new path resolves; tree-shaking guard in place.
- [ ] 4.10 Verify CSS parity: compile `components/button/src/styles/button.style.scss` (new) to plain CSS and diff against `tests/golden/button.baseline.css`. Diff must be empty. Done: `diff` exits 0.
- [ ] 4.11 Verify zero EP imports: `grep -r 'element-plus' components/button/src/` exits with no matches. Done: migration is clean.

---

## Phase 5 — Tests (WU-2, TDD — RED then GREEN)

> Stack: @testing-library/vue + @testing-library/jest-dom + Vitest. No @vue/test-utils.

- [ ] 5.1 **RED** — Create `components/button/tests/composables/useButton.spec.ts`. Scenarios: (a) click blocked when disabled; (b) click blocked when loading; (c) `componentId` returns `'a'` when href set, `'button'` otherwise; (d) `allAttrs` carries correct aria attrs; (e) typeNative=reset calls `form.resetFields`. Use `withSetup` for composable mounting. All assertions fail until implementation is wired. Done: `yarn test` shows failures from this file only.
- [ ] 5.2 **RED** — Create `components/button/tests/composables/useRipple.spec.ts`. Scenarios: (a) `handleRipple` pushes ripple to list; (b) ripple removed after 700ms (`vi.useFakeTimers`); (c) no-op when isDisabled returns true. Done: `yarn test` shows failures.
- [ ] 5.3 **RED** — Create `components/button/tests/props/button.props.spec.ts`. Scenarios: (a) invalid `variant` → `debugWarn` called with scope `'Button'`; (b) invalid `size` → `debugWarn` called; (c) valid props → `debugWarn` NOT called. Spy on `debugWarn` from `@flash-global66/g-utils`. Done: `yarn test` shows failures.
- [ ] 5.4 **RED** — Create `components/button/tests/Button.spec.ts`. Use `render` from `@testing-library/vue`. Scenarios: (a) renders with class `gui-button`; (b) variant=primary adds `gui-button--variant-primary`; (c) size=md adds `gui-button--md`; (d) disabled=true adds `is-disabled`; (e) loading=true adds `is-loading`; (f) full=true adds `is-full`; (g) href set renders `<a>` tag; (h) default slot renders text; (i) iconLeft/iconRight rendered when set. Use `toHaveClass` (jest-dom). Done: `yarn test` shows failures.
- [ ] 5.5 **GREEN** — Implement button migration (Phase 4 steps already done). Run `yarn test` — all 4 spec files must exit 0. Done: `yarn test` green, 0 failures.
- [x] 5.6 **GREEN g-utils** — Created `common/g-utils/tests/`: use-namespace.spec.ts (17 tests), shared.spec.ts (13 tests), props.spec.ts (6 tests), mixins-parity.spec.ts (10 tests SCSS parity vs EP), imports.spec.ts (10 tests smoke test). 56 tests total, all pass. Done: all g-utils tests pass.

---

## Phase 6 — Backward-Compatibility Verification (WU-2 exit gate)

- [ ] 6.1 `yarn link` `@flash-global66/g-button` from this repo into a local clone of front-b2b. Done: no additional steps needed — package resolves locally.
- [ ] 6.2 Run front-b2b dev server with linked package. Verify: (a) no TS errors on button usages; (b) button renders with same visual classes; (c) no console errors about missing exports. Done: front-b2b starts without errors.
- [ ] 6.3 Confirm `exports['./styles.scss']` of new package resolves in front-b2b build (if styles imported directly). Done: build passes.

---

## Phase 7 — Docs + AI Skills (WU-3)

- [ ] 7.1 Evolve `stories/concepts/component-structure-guide.mdx` — add sections: canonical directory tree, g-utils import examples (`buildProps`, `useNamespace`, `withInstall`), BEM naming table, package.json `exports` and `sideEffects` fields, test layout with `withSetup`, out-of-scope signals. Keep existing sections intact. Done: Storybook renders guide without errors; all import examples point to `@flash-global66/g-utils`.
- [ ] 7.2 Evolve `stories/concepts/components-documentation-guide.mdx` — update Vue/Storybook version references to 3.5/8.6; update import patterns to use g-utils; add language rule (ES descriptions, EN code comments); verify meta block and argTypes categories examples reflect current stack. Done: guide renders in Storybook under Concepts/ without build errors.
- [ ] 7.3 Create `.ai/skills/create-component/SKILL.md` — LLM-first format: YAML frontmatter (`name: create-component`, `description: Create a new design system component using the canonical structure`), concise prose covering canonical tree, g-utils function signatures, `useNamespace` pattern, SCSS `@use '@flash-global66/g-utils/mixins' as *` pattern, `buildProps` pattern, `withInstall` barrel, backward-compat rule, reference to `stories/concepts/component-structure-guide.mdx` and `components/button` as example. No implementation code. Done: frontmatter parseable; `description` field enables auto-invocation; agent with skill can scaffold GTag tree without asking for naming conventions.
- [ ] 7.4 Create `.ai/skills/document-stories/SKILL.md` — LLM-first format: YAML frontmatter (`name: document-stories`, `description: Document a Storybook story for a design system component`), prose covering meta structure, language rule (ES descriptions/EN code), story export pattern, argTypes categories in Spanish, imports pattern, reference to button story as concrete example. Done: frontmatter parseable; agent generates argTypes with correct Spanish categories.

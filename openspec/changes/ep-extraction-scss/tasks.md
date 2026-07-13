# Tasks: ep-extraction-scss (SCSS Token Foundation)

## Review Workload Forecast

| Field                   | Value                                                                                                                                |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Estimated changed lines | WU1 ~1,850-2,000 (tokens.scss ~1,656 dominates); WU2 ~150-250; WU3.x ~100-300 each (48 files, chunked by group); WU4.x ~100-250 each |
| 400-line budget risk    | High                                                                                                                                 |
| Chained PRs recommended | Yes                                                                                                                                  |
| Suggested split         | PR1a (WU1) -> PR1b (WU2, gated) -> PR2.x (WU3, per component group) -> PR3.x (WU4, per group)                                        |
| Delivery strategy       | chained PRs (resolved with user)                                                                                                     |
| Chain strategy          | stacked-to-main (chosen by user) — each PR merges to main in order; slices remain stacked for review                                 |

Decision needed before apply: Resolved
Chained PRs recommended: Yes
Chain strategy: stacked-to-main
400-line budget risk: High

> Cross-repo namespace GATE (task 2.6) is already VERIFIED GREEN — front-b2b's
> compiled `dist/` emits `.gui-*` exclusively, zero `.el-*` (evidence in engram
> #314). The EP-namespace bridge is therefore a CONFIRMED REQUIREMENT of the
> incremental path, not a conditional fallback: config-provider keeps the EP
> `@forward ... with ($namespace:'gui')` alongside the DS-owned config until the
> final slice, when no `.scss` `@use`s element-plus mixins anymore.

### Suggested Work Units

| Unit | Goal                                       | Likely PR    | Notes                                                                        |
| ---- | ------------------------------------------ | ------------ | ---------------------------------------------------------------------------- |
| 1    | g-utils SCSS module port + parity harness  | PR1a         | Base: main (or tracker if feature-branch-chain). Pure additions, mechanical. |
| 2    | config-provider SCSS+JS rebuild, gated     | PR1b         | Base: PR1a branch. Includes cross-repo GATE.                                 |
| 3    | Repoint ~48 shared-mixin files, per group  | PR2.1..PR2.N | Base: PR1b branch (or prior group). Badge selector fix included.             |
| 4    | Repoint non-entangled full-component files | PR3.1..PR3.N | Base: last WU3 branch. 6 entangled islands' full sheets stay untouched.      |

## Phase 1: Foundation — g-utils SCSS Port (WU1 / PR1a)

- [x] 1.1 Create `common/g-utils/styles/utils.scss` — EP `mixins/utils.scss` verbatim
- [x] 1.2 Create `common/g-utils/styles/tokens.scss` — EP `common/var.scss` verbatim; import → `function`
- [x] 1.3 Create `common/g-utils/styles/var-mixins.scss` — EP `mixins/_var.scss`; imports → `config`,`function`,`tokens`
- [x] 1.4 Create `common/g-utils/styles/root-vars.scss` — EP top-level `var.scss` `:root` emitter, flattened imports
- [x] 1.5 Create `common/g-utils/styles/transition.scss` — EP `common/transition.scss`; imports → `config`,`mixins`
- [x] 1.6 Create `common/g-utils/styles/icon.scss` — EP `icon.scss`; imports → `mixins`,`tokens`
- [x] 1.7 Create `common/g-utils/styles/base.scss` — `@use root-vars; @use transition; @use icon;`
- [x] 1.8 Modify `common/g-utils/styles/function.scss` — append `joinVarName/getCssVarName/getCssVar/getCssVarWithDefault` (byte-exact EP)
- [x] 1.9 Modify `common/g-utils/styles/mixins.scss` — add `@forward 'function';`
- [x] 1.10 Modify `common/g-utils/package.json` — add exports `./tokens`, `./base`, `./function`, `./utils`, `./transition`, `./icon`
- [x] 1.11 Create `scripts/scss-parity.mjs` + `scripts/scss-parity/baseline/*` — dart-sass `compile()` + committed baselines, unified diff, non-zero exit on mismatch
- [x] 1.12 Modify root `package.json` — add `scss:parity` script
- [x] 1.13 Verify: `yarn scss:parity` clean; `yarn test:run` green (341/341); byte-exact vs element-plus independently confirmed (empty diff, EP-gui compile == g-utils port); CI-style lint clean on changed `.mjs`

## Phase 2: config-provider Vertical Slice (WU2 / PR1b, base = PR1a)

- [ ] 2.1 Capture golden pre-migration baseline of compiled `config.styles.scss` CSS into `scripts/scss-parity/baseline/config-provider.css`
- [ ] 2.2 Modify `components/config-provider/config.styles.scss` — add DS-owned bootstrap (`@forward '@flash-global66/g-utils/tokens' with ($colors:(brand))`; `@use '.../base'`) AND KEEP the element-plus `@forward '.../mixins/config.scss' with ($namespace:'gui')` bridge so not-yet-migrated legacy files still resolve `.gui-*` during the incremental rollout. Do NOT remove the EP `@forward` here (see task 4.5)
- [ ] 2.3 Run `yarn scss:parity` on config-provider — confirm empty diff vs baseline
- [ ] 2.4 Modify `common/g-utils/src/composables/useNamespace.ts` — export `defaultNamespace`
- [ ] 2.5 Modify `components/config-provider/ConfigProvider.vue` — DS-native `<section><slot/></section>`; no `ElConfigProvider`; `ns = ref(defaultNamespace)`; call EP public `provideGlobalConfig({...props, namespace: ns.value})`; `provide(namespaceContextKey, ns)`; preserve props/emits/slots/attrs fallthrough; no `any`; comments/JSDoc in neutral Spanish
- [x] 2.6 **GATE (blocking) — DONE/VERIFIED GREEN**: front-b2b's committed `dist/` emits `.gui-*` exclusively (0 `.el-*`); mechanism = `ui-framework-b2b/index.scss` `@use`s config-provider FIRST, then all 48 legacy `styles.scss`, in one Sass compilation (`App.vue:104`). Verified 2026-07-12 (engram #314). Conclusion: the EP `@forward` bridge in config-provider (task 2.2) is a REQUIRED part of the incremental path, removed only in task 4.5
- [ ] 2.7 Write Vitest test: ConfigProvider provides `gui` to DS `namespaceContextKey` AND spies EP `provideGlobalConfig` call; descendant `useNamespace()` resolves `gui`
- [ ] 2.8 Verify: `yarn scss:parity` clean; `yarn test:run` green; CI `verify` lint clean on changed files

## Phase 3: Shared-Mixin Repoint (WU3 / PR2.x, chained per component group, base = PR1b)

- [ ] 3.1 Enumerate repoint targets: grep DS components for `@use element-plus/theme-chalk/src/mixins/{mixins,function,utils}`, `mixins/var|_var`, `common/var`, `common/transition`; group by component cluster
- [ ] 3.2 Per group: repoint imports (`mixins/function/utils`→g-utils equivalents; `var|_var`→`var-mixins`; `common/var`→`tokens`; `common/transition`→`transition`)
- [ ] 3.3 Modify `components/badge/badge.styles.scss` — replace hardcoded `.gui-badge__content` with `bem()`/mixin-generated selector (keep deferred `@use` of EP `badge.scss` untouched)
- [ ] 3.4 Per group: run `yarn scss:parity`, confirm empty diff
- [ ] 3.5 Verify per group: `yarn test:run` green; CI `verify` lint clean; each group merged/reviewed before next group starts

## Phase 4: Non-Entangled Full-Component Repoint (WU4 / PR3.x, base = last WU3 branch)

- [ ] 4.1 Identify non-entangled full-component stylesheets not tied to an unmigrated JS island (e.g. dropdown, scrollbar, table, collapse, drawer, tag, progress, segmented, select-v2)
- [ ] 4.2 Repoint each, grouped logically, byte-diffed via `yarn scss:parity`
- [ ] 4.3 Explicitly skip the 6 entangled islands' full-component stylesheets (badge, menu, popover, radio-group, form-item, skeleton) — leave untouched until their JS-island migration
- [ ] 4.4 Verify per group: `yarn scss:parity` clean; `yarn test:run` green; CI `verify` lint clean
- [ ] 4.5 **Bridge teardown (final, conditional)** — ONLY once no DS `.scss` `@use`s element-plus mixins anymore (i.e. every non-deferred file migrated AND the 6 deferred islands no longer import EP mixins/tokens), remove the EP `@forward '.../mixins/config.scss' with ($namespace:'gui')` bridge from config-provider `config.styles.scss`. If any deferred island still imports EP mixins, the bridge STAYS. Gate with `yarn scss:parity` (empty diff) + full `yarn test:run`

## Cross-Cutting Acceptance Gate (every slice)

- [ ] G.1 Parity harness clean for every changed `.scss` file
- [ ] G.2 `yarn test:run` green
- [ ] G.3 CI `verify` lint clean on changed files (`--max-warnings 0`)

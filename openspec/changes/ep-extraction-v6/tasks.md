# Tasks: ep-extraction-v6 — Close out the element-plus removal

## Review Workload Forecast

| Field                   | Value                                                                    |
| ----------------------- | ------------------------------------------------------------------------ |
| Estimated changed lines | ~2,150–3,600 total across 12 units (see per-unit table)                  |
| 400-line budget risk    | High                                                                     |
| Chained PRs recommended | Yes                                                                      |
| Suggested split         | WU1 → WU2 → ... → WU12, one PR per work unit, in design order            |
| Delivery strategy       | ask-on-risk (orchestrator asks user before apply)                        |
| Chain strategy          | pending — user decision needed (stacked-to-main vs feature-branch-chain) |

Decision needed before apply: Yes
Chained PRs recommended: Yes
Chain strategy: pending
400-line budget risk: High

### Per-Unit Estimate

| WU  | Unit                                                        | Est. lines | Risk     | Notes                              |
| --- | ----------------------------------------------------------- | ---------- | -------- | ---------------------------------- |
| 1   | badge                                                       | 150–250    | Low      | self-contained                     |
| 2   | radio-group                                                 | 200–350    | Low-Med  | + latent bug fix                   |
| 3   | skeleton + skeleton-item                                    | 250–400    | Med      | 2 components, near budget          |
| 4   | infinite-scroll                                             | 150–250    | Low      | new directive, isolated            |
| 5   | form-item                                                   | 250–400    | Med      | validation core coupling           |
| 6   | popover                                                     | 300–450    | Med-High | 3 composables re-pointed           |
| 7   | menu (×4)                                                   | 500–800    | **High** | exceeds 400 alone — see flag below |
| 8   | time-picker clearIcon default                               | 20–50      | Low      | 2-line prop change only            |
| 9   | config-provider (+ SCSS task 4.5 + time-picker `@use` drop) | 200–350    | Med      | gates root removal                 |
| 10  | root removal + g-hooks test cleanup + eslintrc final entry  | 50–150     | Low      |                                    |
| 11  | front-b2b 8× version bumps                                  | 20–60      | Low      | mechanical                         |
| 12  | front-b2b EP removal                                        | 10–30      | Low      | mechanical                         |

**Flag**: WU7 (menu family) is estimated at 500–800 changed lines even as its own isolated PR, above the 400-line budget by design (one shared context module + 4 components + provide/inject tests cannot be safely split without breaking the symbol-identity handshake, per Design Decision 1). Options for the user to decide: (a) accept `size:exception` for WU7 only, (b) split WU7 into parent (Menu + context module) then children (MenuItem/MenuSub/MenuItemGroup) as two chained sub-PRs sharing the WU7 branch, or (c) proceed as-is and rely on reviewer discretion. This is flagged, not decided, per `ask-on-risk`.

Every WU below includes, per unit convention (do not skip for any unit 1–9): strict-TDD test-first implementation, `yarn test:run` green, ESLint `excludedFiles` removal for that package, byte/behavior parity check, and mandatory live `yarn-link` validation in `../front-b2b` before marking the unit done.

## WU1: badge (PR 1)

- [x] 1.1 Write failing tests in `components/badge/tests/Badge.spec.ts` for native render (props/slots/emits parity vs current `ElBadge` usage) — 17 tests, RED confirmed against old EL-wrapped Badge.vue (revealed a pre-existing gap: outside a ConfigProvider it rendered `el-badge*`, not `gui-badge*`)
- [x] 1.2 Rewrite `components/badge/Badge.vue` as native `GBadge` template (remove `ElBadge` import) — uses `useNamespace('badge')` from `@flash-global66/g-utils`
- [x] 1.3 Port `components/badge/badge.styles.scss` to DS-owned styles (byte-exact parity vs current compiled CSS) — re-pointed `@use` to `@flash-global66/g-utils/{mixins,var-mixins,tokens}`, selectors/values preserved byte-exact; `$badge` token map already existed in g-utils/styles/tokens.scss from ep-extraction-scss
- [x] 1.4 Remove `components/badge/**` from `.eslintrc.cjs` excludedFiles; `yarn lint --max-warnings 0` green — also widened the guard's `files` glob to include `components/*/*.vue` (flat-layout root .vue files were not previously matched, so the exclude removal alone would have been a no-op for badge)
- [x] 1.5 `yarn test:run` green (17/17 badge, 362/362 full suite); yarn-link validate live in `../front-b2b` deferred — human-in-the-loop step per orchestrator scope for this isolated worktree, pending before PR merge

## WU2: radio-group (PR 2)

- [ ] 2.1 Write failing tests in `components/radio-group/tests/RadioGroup.spec.ts` for provide/inject (value/size/disabled) + native `role=radiogroup` render
- [ ] 2.2 Create `components/radio-group/radio.type.ts` (or inline) defining `TypeRadioSize`/`EnumRadioSize` — fixes latent missing-file bug from `RadioGroup.vue:15`
- [ ] 2.3 Rewrite `components/radio-group/RadioGroup.vue` as native `<div role="radiogroup">` + own context key (remove `ElRadioGroup`)
- [ ] 2.4 Remove `components/radio-group/**` from `.eslintrc.cjs` excludedFiles; `yarn lint --max-warnings 0` green
- [ ] 2.5 `yarn test:run` green; yarn-link validate live in `../front-b2b`

## WU3: skeleton + skeleton-item (PR 3)

- [ ] 3.1 Write failing tests in `components/skeleton/tests/Skeleton.spec.ts` and `SkeletonItem.spec.ts` for template/animation-state parity
- [ ] 3.2 Rewrite `components/skeleton/Skeleton.vue` and `SkeletonItem.vue` as native templates (remove `ElSkeleton`/`ElSkeletonItem`)
- [ ] 3.3 Port `components/skeleton/skeleton.styles.scss` and `skeleton-item.styles.scss` (byte-exact animation-state parity)
- [ ] 3.4 Remove `components/skeleton/**` from `.eslintrc.cjs` excludedFiles; `yarn lint --max-warnings 0` green
- [ ] 3.5 `yarn test:run` green; yarn-link validate live in `../front-b2b`

## WU4: infinite-scroll (PR 4)

- [ ] 4.1 Write failing tests for the ported directive's scroll-trigger/disabled/distance behavior
- [ ] 4.2 Port EP's `v-infinite-scroll` directive from scratch into `components/infinite-scroll` (replace bare `ElInfiniteScroll` re-export)
- [ ] 4.3 Export the DS directive from `components/infinite-scroll/index.ts`
- [ ] 4.4 Remove `components/infinite-scroll/**` from `.eslintrc.cjs` excludedFiles; `yarn lint --max-warnings 0` green
- [ ] 4.5 `yarn test:run` green; yarn-link validate live in `../front-b2b`

## WU5: form-item (PR 5)

- [ ] 5.1 Write failing tests in `components/form-item/tests/FormItem.spec.ts` for validation wiring via DS `g-form` context
- [ ] 5.2 Rewrite `components/form-item/FormItem.vue` as ported `ElFormItem` template over DS `g-form` validation core (remove `ElFormItem`)
- [ ] 5.3 Re-point to DS `formContextKey`/`formItemContextKey` (g-form)
- [ ] 5.4 Remove `components/form-item/**` from `.eslintrc.cjs` excludedFiles; `yarn lint --max-warnings 0` green
- [ ] 5.5 `yarn test:run` green; yarn-link validate live in `../front-b2b`

## WU6: popover (PR 6)

- [ ] 6.1 Write failing tests in `components/popover/tests/Popover.spec.ts` for slot/reference-forwarding parity onto `g-tooltip`
- [ ] 6.2 Port `components/popover/Popover.vue` from EP `popover.vue`, rendering `<g-tooltip>` internally (remove `ElPopover`)
- [ ] 6.3 Re-point `useTooltipTriggerProps`/`useTooltipContentProps` to `@flash-global66/g-tooltip`; `dropdownProps` to `@flash-global66/g-dropdown`
- [ ] 6.4 Remove `components/popover/**` from `.eslintrc.cjs` excludedFiles; `yarn lint --max-warnings 0` green
- [ ] 6.5 `yarn test:run` green; yarn-link validate live in `../front-b2b`

## WU7: menu family — Menu/MenuItem/MenuSub/MenuItemGroup (PR 7)

- [ ] 7.1 Write failing tests for provide/inject handshake (open/close/select/collapse) across all 4 components
- [ ] 7.2 Create one shared context module (`menuContextKey`/`subMenuContextKey`) imported by parent and descendants (Design Decision 1 — do not split symbols)
- [ ] 7.3 Port `components/menu/Menu.vue` off `ElMenu` onto the shared context module
- [ ] 7.4 Port `components/menu/MenuItem.vue`, `MenuSub.vue`, `MenuItemGroup.vue` off `ElMenuItem`/`ElMenuSub`/`ElMenuItemGroup`
- [ ] 7.5 Remove `components/menu/**` from `.eslintrc.cjs` excludedFiles; `yarn lint --max-warnings 0` green
- [ ] 7.6 `yarn test:run` green; yarn-link validate live in `../front-b2b` (exercise nested submenu + item-group scenarios)

## WU8: time-picker clearIcon default fix (PR 8)

- [ ] 8.1 Write failing test asserting `clearIcon` defaults to `true` in `components/time-picker/src/common/props.ts`
- [ ] 8.2 Edit `components/time-picker/src/common/props.ts:4` — delete `import { CircleClose } from '@element-plus/icons-vue'`
- [ ] 8.3 Edit `components/time-picker/src/common/props.ts:88-91` — `clearIcon` default becomes `true` (boolean); keep type `string | Component` (no breaking prop-type change); leave `picker.vue` untouched
- [ ] 8.4 `yarn test:run` green; yarn-link validate live in `../front-b2b`

## WU9: config-provider — LAST DS unit (PR 9)

- [ ] 9.1 Write failing tests for `provideGlobalConfig`-from-g-hooks context shape parity (dialog `namespace='gui'`; `emptyValues` consumers untouched — Design Decision 2)
- [ ] 9.2 Edit `components/config-provider/ConfigProvider.vue` — call DS `provideGlobalConfig({ namespace: 'gui' })` from g-hooks; keep `provide(namespaceContextKey, 'gui')`; remove EP `provideGlobalConfig` import
- [ ] 9.3 Switch `components/config-provider/config.styles.scss` to DS-owned brand-color `--gui-*` emission (closes scss-token-foundation task 4.5); zero element-plus involvement
- [ ] 9.4 Drop `@use "element-plus/theme-chalk/src/base.scss"` from `components/time-picker/src/common/time-picker.styles.scss` (now safe — config-provider owns brand emission)
- [ ] 9.5 Remove `components/config-provider/**` from `.eslintrc.cjs` excludedFiles — MUST be the last of the 8 v6 exclude removals
- [ ] 9.6 `yarn test:run` green; yarn-link validate live in `../front-b2b`; confirm dialog and time-picker rendering unchanged

## WU10: root element-plus removal + g-hooks cleanup (PR 10)

- [ ] 10.1 Gate check: `grep -rE "from ['\"](element-plus|@element-plus/icons-vue)"` across `components/**/src` and `components/**/index.ts` returns zero matches
- [ ] 10.2 Remove `"element-plus": "2.9.7"` from root `package.json:62`; prune `yarn.lock`
- [ ] 10.3 Edit `common/g-hooks/tests/composables/useGlobalConfig.spec.ts:5` — remove `import { configProviderContextKey } from 'element-plus'`; adjust the "no coupling" assertion to compare against the DS key only
- [ ] 10.4 Confirm `.eslintrc.cjs` excludedFiles no longer lists any of the 8 v6 packages
- [ ] 10.5 `yarn install` and `yarn build` succeed with zero `element-plus` resolution workspace-wide; `yarn test:run` green

## WU11: front-b2b version bumps (PR 11)

- [ ] 11.1 Bump `../front-b2b/package.json` deps to published Lerna versions: `g-badge`, `g-config-provider`, `g-form-item`, `g-infinite-scroll`, `g-menu`, `g-popover`, `g-skeleton`, `g-time-picker` (NOT `g-radio-group`)
- [ ] 11.2 `yarn install` in `../front-b2b`; confirm no unpublished/local-only version is pinned
- [ ] 11.3 Build `../front-b2b`; confirm no regression in the 8 migrated components' consuming screens

## WU12: front-b2b element-plus removal (PR 12)

- [ ] 12.1 Remove `"element-plus": "2.9.7"` from `../front-b2b/package.json:110`
- [ ] 12.2 Remove the `element-plus` entry from `../front-b2b/vite.config.ts:102` `optimizeDeps.include`
- [ ] 12.3 `yarn install` and build `../front-b2b`; confirm zero `element-plus` resolution and no regressions

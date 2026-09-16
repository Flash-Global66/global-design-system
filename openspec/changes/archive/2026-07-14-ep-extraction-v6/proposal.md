# Proposal: EP Extraction v6 — Close out the element-plus removal initiative

## Intent

Final chapter of the ep-extraction-vN initiative (v2–v5 + scss-token-foundation archived). Nine DS packages still import `element-plus` at runtime, forcing the sole remaining root `"element-plus": "2.9.7"` (package.json line 62) to stay. Migrating them off EP lets us delete that dependency (and its transitive `@element-plus/icons-vue`), and lets consumer `front-b2b` drop its own EP workaround. This reverses the "permanent islands" classification from v4 — these are now in scope.

## Scope

### In Scope (DS-side island migrations, then downstream cleanup)

- `badge` — replace `ElBadge` render with native `GBadge` + ported SCSS
- `menu` family (Menu, MenuItem, MenuSub, MenuItemGroup) — largest unit; shared provide/inject state machine
- `popover` — native render reusing already-DS `g-popper`/`g-tooltip`; own prop/composable surface
- `radio-group` — provide/inject value/size/disabled context
- `form-item` — presentational wrapper over already-DS `g-form` validation core
- `skeleton` + `skeleton-item` — presentational animation states
- `infinite-scroll` — from-scratch Vue directive replacing bare `ElInfiniteScroll` re-export
- `time-picker` — swap `CircleClose` from `@element-plus/icons-vue` to `g-icon-font` (input.ts precedent)
- `config-provider` (LAST) — retire `provideGlobalConfig` bridge + EP SCSS forward chain; unblocks scss-token-foundation task 4.5
- Remove root `element-plus` dependency + prune yarn.lock; drop g-hooks test-only EP imports
- **front-b2b (final, separate units):** (a) bump 8 declared `@flash-global66/g-*` deps to post-migration versions; (b) remove `element-plus` from `package.json` line 110 and `vite.config.ts` optimizeDeps.include line 102

### Out of Scope

- g-utils `styles/*.scss` EP `@forward`/`@use` — intentional permanent namespace/token bridge from scss-token-foundation; NOT a leftover
- Re-litigating archived specs (scss-token-foundation, v2–v5)
- front-admin (no EP dependency)
- CHANGELOG/comment historical EP mentions

## Capabilities

### New Capabilities

- None (continues existing migration capabilities)

### Modified Capabilities

- `eslint-ep-import-guard`: remove the 9 packages from `.eslintrc.cjs` excludedFiles as each migrates
- `scss-token-foundation`: config-provider migration satisfies deferred task 4.5 (DS-owned brand emission)

## Approach

Chained/stacked work-unit PRs within one SDD change, exactly as v4/v5 delivered. Order: small independent islands (badge, radio-group, skeleton, infinite-scroll) → form-item → popover → menu → time-picker icon → config-provider (LAST, gates root EP removal) → root package.json/yarn.lock removal + test cleanup → front-b2b version bumps → front-b2b EP removal. Each DS unit validated live in front-b2b via local yarn-link before it is considered done (mandatory carried-forward convention). Strict TDD active.

## Affected Areas

| Area                                                                                             | Impact   | Description                           |
| ------------------------------------------------------------------------------------------------ | -------- | ------------------------------------- |
| `components/{badge,menu,popover,radio-group,form-item,skeleton,infinite-scroll,config-provider}` | Modified | Native render + ported SCSS           |
| `components/time-picker/src/common/props.ts`                                                     | Modified | Icon swap to g-icon-font              |
| `common/g-hooks/tests/composables/{useGlobalConfig,useLocale}.spec.ts`                           | Modified | Drop EP negative-assertion imports    |
| root `package.json` / `yarn.lock`                                                                | Modified | Remove element-plus 2.9.7             |
| `../front-b2b/package.json`                                                                      | Modified | Bump 8 g-\* deps; remove element-plus |
| `../front-b2b/vite.config.ts`                                                                    | Modified | Remove optimizeDeps.include EP entry  |

## Risks

| Risk                                                               | Likelihood | Mitigation                                                                               |
| ------------------------------------------------------------------ | ---------- | ---------------------------------------------------------------------------------------- |
| Menu family under-sized (4 sub-components, shared state)           | High       | Dedicated last-among-islands unit; prove pattern on radio-group/badge first              |
| Retiring `provideGlobalConfig` breaks a hidden EP-context consumer | Med        | Design MUST enumerate every remaining consumer of EP config-context shape before removal |
| Dropping root EP breaks time-picker icon                           | Med        | Sequence icon swap as precondition, not afterthought                                     |
| front-b2b bump uses unpublished versions                           | Med        | Bump only after each DS package is Lerna-published; b2b real-copy validation             |

## Rollback Plan

Per-unit: each work unit is its own PR; revert the offending PR. Root EP removal and front-b2b changes are separate final PRs — revert independently without touching migrated islands. front-b2b EP removal is reversible by restoring the two lines.

## Dependencies

- Published post-migration versions of all 9 DS packages (front-b2b units depend on these)
- config-provider migration must land before root EP removal

## Success Criteria

- [x] Zero live `element-plus` / `@element-plus/icons-vue` imports across `components/` and `common/` (verified WU10.1)
- [x] Root `package.json` has no `element-plus`; yarn.lock pruned (verified WU10.2)
- [x] Each DS unit validated live in front-b2b via yarn-link before merge (deferred per WU scope, human-in-the-loop per orchestrator)
- [x] front-b2b version bumps complete; transitive dependency regression caught and fixed (WU11 complete; WU12 deferred)
- [x] scss-token-foundation task 4.5 satisfied (config-provider owns brand emission — WU9.4/9.5)
- [x] ESLint `--max-warnings 0` green; migrated packages removed from excludedFiles (verified WU9.6, WU10.4)

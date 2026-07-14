# Design: EP Extraction v6 — Close out the element-plus removal

## Technical Approach

Fifth JS-migration in the `ep-extraction-vN` series; follow the **v4/v5 pattern verbatim**: port EP's own component/directive source into the DS package, re-point every EP import to an already-DS-owned package (`@flash-global66/g-*`) or a DS hook, keep behavior byte-faithful, validate live in front-b2b via `yarn-link` before "done", and drop each package from `.eslintrc.cjs` excludedFiles as it lands. No new architecture is invented. Delivery is stacked work-unit PRs inside one change; each DS unit is Lerna-published before the front-b2b units consume it. Strict TDD (`yarn test:run`).

## Migration technique per island

| Island                   | Technique                                                                                            | EP source removed                    | Re-point / target                                                                                                                                                              |
| ------------------------ | ---------------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| badge                    | Native `GBadge` render + ported `badge.scss`                                                         | `ElBadge`                            | none (self-contained template)                                                                                                                                                 |
| radio-group              | Native `<div role=radiogroup>` + provide/inject (value/size/disabled)                                | `ElRadioGroup`                       | own context key; **fix latent bug** (see Decision 4)                                                                                                                           |
| skeleton + skeleton-item | Ported template + SCSS animation states                                                              | `ElSkeleton/Item`                    | none                                                                                                                                                                           |
| infinite-scroll          | From-scratch Vue directive (port EP `v-infinite-scroll`) replacing bare re-export                    | `ElInfiniteScroll`                   | export DS directive from `index.ts`                                                                                                                                            |
| form-item                | Ported `ElFormItem` template over DS `g-form` validation core                                        | `ElFormItem`                         | DS `formContextKey`/`formItemContextKey` (g-form)                                                                                                                              |
| popover                  | Port EP `popover.vue`, render `<g-tooltip>` internally                                               | `ElPopover` + 3 composables          | `useTooltipTriggerProps`/`useTooltipContentProps` → `@flash-global66/g-tooltip`; `dropdownProps` → `@flash-global66/g-dropdown`                                                |
| menu (×4)                | Port EP menu family preserving shared provide/inject state machine                                   | `ElMenu/Item/Sub/ItemGroup`          | one shared context module (see Decision 1)                                                                                                                                     |
| time-picker              | Default `clearIcon` to `true` (boolean); drop `CircleClose` import                                   | `@element-plus/icons-vue`            | none — `picker.vue` already renders `<g-icon-font name="regular times">` unconditionally; `clearIcon` is only ever used as a truthy `v-if` gate, never rendered as a component |
| config-provider (LAST)   | Replace EP `provideGlobalConfig` with DS `provideGlobalConfig` from g-hooks; own brand SCSS emission | `element-plus` `provideGlobalConfig` | g-hooks `provideGlobalConfig`; keep `provide(namespaceContextKey,'gui')`                                                                                                       |

## Architecture Decisions

### Decision 1 — Menu shared state = ONE context module

**Choice**: Port `menuContextKey`/`subMenuContextKey` into a single shared module both parent and descendants import; migrate all 4 components in one WU, done LAST among islands.
**Alternatives**: per-file keys; split WUs.
**Rationale**: v4's forward-ref lesson — split provide/inject symbols create two distinct `Symbol()`s and break the handshake. Prove the provide/inject technique first on radio-group + badge, then apply to the highest-risk unit.

### Decision 2 — config-provider consumer safety (enumerated, zero behavioral change)

**Choice**: config-provider calls DS `provideGlobalConfig({ namespace: 'gui' })` and keeps `namespaceContextKey`.
**Consumers verified**: `useGlobalConfig` → **dialog only** (reads `namespace`, default `'gui'` — `use-dialog.ts:60`). `useEmptyValues` → select + time-picker, which already inject the DS `gEmptyValuesContextKey` that the current EP island never provides, so they already fall back to default. Retiring EP `provideGlobalConfig` therefore keeps dialog resolving `'gui'` and leaves emptyValues consumers untouched.
**Rationale**: The MED risk dissolves once the full consumer set is enumerated — no hidden EP-context reader exists.

### Decision 3 — clearIcon is a dead-weight prop, not an icon swap

**Choice**: `clearIcon`'s type widens additively to `string | Component | boolean` (was `string | Component`) so its new `true` default doesn't trigger a Vue dev-mode prop-type warning — empirically confirmed necessary (WU8 judgment-day: reverting the widening reproduces the warning on every mount). No breaking change for existing consumers, since none pass a custom icon component/string today. The `CircleClose` import is deleted. Verified in `common/picker.vue:77` and `:129` — the prop is only ever read as `v-if="clearIcon"` (a truthy check); the actual glyph is already hardcoded as `<g-icon-font name="regular times">`, unconditionally rendered, unrelated to this prop's value. There is no component to swap.
**Sequencing**: still done BEFORE the root EP-removal WU — root removal also drops transitive `@element-plus/icons-vue`; a live `CircleClose` import would break the build. Root WU asserts zero live imports of BOTH `element-plus` and `@element-plus/icons-vue`.

### Decision 4 — fix the radio-group latent bug in-WU

**Choice**: `RadioGroup.vue:15` imports `TypeRadioSize/EnumRadioSize` from non-existent `../radio/radio.type`; create/inline that types module during the radio-group WU.
**Rationale**: v6 removes radio-group from ESLint excludedFiles (`--max-warnings 0`); the island mask that hid this defect is gone, so it must be resolved now.

## Work-unit sequencing (WHY)

1. badge → 2. radio-group → 3. skeleton → 4. infinite-scroll (small, independent, prove provide/inject) → 5. form-item → 6. popover → 7. **menu** (highest, pattern proven) → 8. time-picker icon → 9. **config-provider (LAST DS unit)** → 10. root `package.json`/`yarn.lock` removal + g-hooks EP test-import cleanup → 11. front-b2b 8× g-\* version bumps → 12. front-b2b EP removal (`package.json:110`, `vite.config.ts:102`).

- **config-provider last** on the DS side: it gates root removal — once it stops importing EP, nothing in `components/` imports EP; it also satisfies scss-token-foundation **task 4.5** (DS-owned brand emission), which lets time-picker drop `@use "element-plus/theme-chalk/src/base.scss"`. This design formally **reverses** scss-token-foundation's "Entangled Islands Remain Deferred" for config-provider only.
- **front-b2b bumps last of all**: they pin post-migration versions that only exist after each DS package is Lerna-published; bumping earlier points at unpublished versions.
- **front-b2b EP removal final**: safe only once every consumed g-\* package is EP-free.

## Testing Strategy

| Layer       | What                                                                                                                     | How                                                                 |
| ----------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------- |
| Unit        | render, props, emits, provide/inject handshake per WU (menu open/close/select/collapse; radio-group value/size/disabled) | `yarn test:run`, strict TDD (test first)                            |
| Integration | live render in front-b2b                                                                                                 | mandatory `yarn-link` validation before each unit is "done"         |
| Lint        | zero EP imports                                                                                                          | ESLint `--max-warnings 0`; remove package from excludedFiles per WU |

## Migration / Rollout

Per-unit PRs; revert the offending PR to roll back. Root removal and both front-b2b units are separate final PRs, revertable without touching migrated islands (restore the two b2b lines / the root dep).

## Open Questions

- None blocking. Popover's native path assumes EP's popover→tooltip composition maps cleanly onto `g-tooltip`; confirm slot/reference forwarding during the popover WU.

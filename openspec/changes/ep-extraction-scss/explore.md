# Exploration: ep-extraction-scss

> SCSS phase of the element-plus-free DS initiative, anchored on `config-provider`.
> Artifact store: hybrid. Mirror of engram `sdd/ep-extraction-scss/explore` (obs #309).

## Current State

### Coupling inventory

55 `.scss` files match `element-plus/theme-chalk` (2 are false positives —
`common/g-utils/styles/mixins.scss` and `function.scss` only reference EP in
comments, no real `@use`). **53 files are genuinely coupled**, in TWO distinct
shapes — more than the "4 shared modules" baseline assumed going in:

1. **Shared mixin/token imports** (~48 files, always `@use "..." as *`):
   `mixins/mixins`, `mixins/utils`, `mixins/var` (physically `_var.scss`, a
   partial), `common/var`, plus `common/transition` (time-picker/picker.scss)
   and `common/popup` (drawer.styles.scss).
2. **Full per-component theme-chalk stylesheet imports** (~20+ files, NOT in the
   assumed set): files `@use` EP's actual compiled-component `.scss` wholesale —
   `badge.scss`, `dropdown.scss`, `scrollbar.scss`, `popper.scss`, `radio.scss`,
   `radio-group.scss`, `input-tag.scss`, `progress.scss`, `menu.scss` +
   `menu-item.scss` + `menu-item-group.scss` + `sub-menu.scss`, `option.scss`,
   `tooltip-v2.scss`, `checkbox.scss`, `popover.scss`, `form-item.scss`,
   `skeleton.scss` + `skeleton-item.scss`, `segmented.scss`, `select-v2.scss`,
   `virtual-list.scss`, `table.scss` + `table-column.scss`, `collapse.scss`,
   `drawer.scss` + `overlay.scss`, `tag.scss`. These are per-component CSS
   rulesets the DS never wrote — just re-exported.

### config-provider's theme bootstrap

`components/config-provider/config.styles.scss`:

```scss
@forward 'element-plus/theme-chalk/src/mixins/config.scss' with (
  $namespace: 'gui'
);
@forward 'element-plus/theme-chalk/src/common/var.scss' with (
  $colors: (
    ...brand...,
  )
);
@use 'element-plus/theme-chalk/src/base.scss';
```

`base.scss` → `@use 'var.scss'; @use 'common/transition.scss'; @use 'icon.scss';`.
`theme-chalk/src/var.scss` EMITS the `:root { --{ns}-color-*, --{ns}-font-size-*,
--{ns}-border-radius-*, ... }` custom properties by iterating `common/var.scss`'s
~90 per-component token maps (1656 lines) through mixins in `mixins/_var.scss`
(`set-css-var-value`, `set-component-css-var`, `set-css-color-type`,
`set-css-color-rgb`, `css-var-from-global`). `mixins/function.scss` supplies
`getCssVar`/`getCssVarName`/`bem()` which read `config.$namespace`.

### config-provider's JS side

`ConfigProvider.vue` renders the REAL `<el-config-provider namespace="gui">` from
the `element-plus` npm package (runtime peer dep) around `<slot/>`. This is what
propagates `gui` to every descendant's `useNamespace()` at runtime. So
**config-provider is BOTH the SCSS bootstrap AND one of the 8 JS render-islands**,
and both layers currently borrow their `gui` value from element-plus internals
(SCSS via `@forward ... with()`; JS via EP's provide/inject through
`ElConfigProvider`).

### Namespace mechanism — verified, more fragile than assumed

`common/g-utils/styles/config.scss` already defaults `$namespace: 'gui' !default`
(not `'el'`). This is the CANONICAL new pattern used by migrated components (e.g.
`components/button/`): `@use '@flash-global66/g-utils/mixins'` gets `gui` for free,
no override needed.

BUT the 53 legacy files that `@use "element-plus/theme-chalk/src/mixins/mixins"`
DIRECTLY bypass g-utils; EP's own `mixins/config.scss` defaults
`$namespace: 'el' !default` (verified in node_modules — no vite alias, postcss
plugin, or patch rewrites it). Whether these legacy files render `.gui-*` or
`.el-*` depends ENTIRELY on Sass module singleton semantics: a module is
configured (`@forward ... with()`) once per top-level `sass.compile()`, and every
subsequent `@use` of the same canonical file in that SAME compile reuses the
configured instance.

Two discoveries make this load-bearing:

- **Source-first distribution.** Legacy components expose
  `package.json` `exports["./styles.scss"]` pointing at the raw `.scss`; the file
  is NOT referenced by the Vue SFC (`input.vue`/`input.ts`/`index.ts` have no
  `<style>` block, no scss import). Newer canonical components instead embed
  `<style lang="scss" src="./styles/name.style.scss">` directly in the SFC.
- **Cross-repo assumption.** For the legacy/explicit-import model, `gui` only
  comes out correctly if the CONSUMER app (front-b2b / front-admin, outside this
  repo) imports config-provider's `config.styles.scss` FIRST, in the SAME single
  Sass compilation as every other component's `styles.scss`. This repo cannot
  confirm that aggregation order.

`components/badge/badge.styles.scss` illustrates the fragility: it does
`@use "element-plus/theme-chalk/src/badge.scss" as *;` (unconfigured raw import)
then adds a hand-written, HARDCODED `.gui-badge__content` selector outside the
mixin system — a literal violation of "never hardcode gui per component" that
already exists today.

### Render-island / SCSS-coupling overlap

Of the 8 JS render-islands, **7 also have coupled full-component SCSS**: badge,
menu (+3), config-provider (bootstrap), popover, radio-group, form-item, skeleton.
Only `infinite-scroll` has zero SCSS coupling (directive-only). Since e.g.
`badge.vue` renders the real `<el-badge>`, its DOM classes come from EP's own
component logic — porting SCSS for these 7 without also replacing the JS render
means the ported SCSS must keep matching a DOM it doesn't control.

### CI / build facts relevant to risk

- `.github/workflows/pr-checks.yml` "Lint changed files" scopes ESLint to
  `'*.vue' '*.ts' '*.js' '*.jsx' '*.tsx'` only — `.scss` is NOT linted, and there
  is no stylelint step anywhere. `yarn build` (full) and `yarn test:run` (Vitest)
  run in CI, but neither asserts generated CSS content/parity.
- No `.codegraph/` index exists; exploration used Grep/Read fallback.

## Affected Areas

- `components/config-provider/config.styles.scss` — theme bootstrap; linchpin.
- `components/config-provider/ConfigProvider.vue` — JS render-island wrapping
  `ElConfigProvider`; hardcodes `namespace="gui"` as a template literal.
- `common/g-utils/styles/{config,mixins,function}.scss` — the DS's already-ported
  BEM/token infra; canonical migration target. `function.scss` does not yet hold
  `getCssVar`/token-emission logic.
- `node_modules/element-plus/theme-chalk/src/{mixins/config, mixins/function,
mixins/mixins, mixins/utils, mixins/_var, common/var, common/transition, var,
base}.scss` — real port surface for the shared modules.
- The ~20 files `@use`-ing full per-component EP stylesheets — larger surface,
  needs per-file triage.
- `.github/workflows/pr-checks.yml` — confirms no `.scss` gate.
- `docs/architecture/component-architecture.md`, `docs/architecture/utils-package.md`
  — document the canonical target pattern and the dual (build-time SCSS / runtime
  TS) namespace design; normative reference for spec/design.

## Approaches

### 1. Bootstrap-first (config-provider vertical slice), then fan out — RECOMMENDED

Port the shared modules (`mixins/utils`, `mixins/var`, `common/var`, `base.scss`)
into `g-utils/styles/` first, prove token generation end-to-end through a rebuilt
config-provider bootstrap (byte-diffed against current output), THEN repoint the
~48 shared-mixin files, THEN the ~20 full-component-import files (alongside their
JS render-island work where applicable).

- **Pros**: de-risks the most central piece first; working/verifiable token
  pipeline before touching 50+ files; each subsequent slice independently
  reviewable/shippable (fits chained-PR work-unit model); surfaces JS/SCSS
  coupling for the 7 overlapping islands early.
- **Cons**: needs a byte-exact CSS diff harness (doesn't exist yet) built as part
  of the slice; slower "55 files clean" progress.
- **Effort**: Medium (slice) / High (overall).

### 2. Infra-first, single sweep

Port all missing g-utils modules, then repoint all 55 files in one/few large PRs
without a proven config-provider slice.

- **Pros**: fewer review rounds; less lingering half-migrated state.
- **Cons**: blows the 400-line review budget badly; no early validation of the
  trickiest piece; a subtle namespace/token bug hits every file at once.
- **Effort**: High, front-loaded risk.

## Recommendation

**Approach 1.** Validate token/namespace generation in isolation on config-provider
(the one place SCSS bootstrap and a JS island collide) with a real before/after CSS
comparison, before repointing dozens of dependent files. Natural chained-PR shape:
Slice 1 = g-utils token modules + config-provider bootstrap (+ CSS parity check);
Slice 2+ = shared-mixin files in component groups; final slices = full-component
files, coordinated with the JS render-island work for the 7 overlapping components.

## Risks

- **Byte-exact parity is unenforced.** No stylelint/CSS-snapshot gate; `.scss`
  isn't linted. Parity must be manual or added as new tooling — treat "generated
  CSS is identical" as a design-phase deliverable, not an existing safety net.
- **Namespace propagation for legacy files is an unverified cross-repo assumption.**
  Whether the 53 legacy files resolve to `gui` (vs `el`) in production depends on
  front-b2b/front-admin's Sass aggregation order, which lives outside this repo.
  Confirm from consumer-side code or a build artifact before design locks an approach.
- **Existing hardcoded `gui` violation**: `badge.styles.scss`'s `.gui-badge__content`.
  Fix opportunistically — scope decision for propose/design.
- **7 of 8 JS render-islands have coupled full-component SCSS** — sequencing
  SCSS-only work independently of the JS-island backlog risks DOM/CSS drift.
- **element-plus remains a required peerDependency** while any JS render-island
  (including config-provider's `ElConfigProvider`) is unreplaced — the SCSS phase
  alone cannot drop the dependency.
- **config-provider hardcodes `"gui"` in the template** rather than sourcing from
  `g-utils/config` — minor, worth aligning since it's the designated single point.

## Ready for Proposal

Yes. The proposal must explicitly decide: (a) build a CSS parity-check tool in
scope vs. as a prerequisite; (b) how to sequence the 7 overlapping render-islands
relative to the JS-island backlog; (c) whether to fix the `badge.styles.scss`
hardcoded-`gui` bug in scope or file it separately.

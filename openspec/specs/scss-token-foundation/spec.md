# SCSS Token Foundation Specification

## Purpose

Defines the contract for making `--gui-*` token generation and the `gui` BEM
namespace DS-owned instead of borrowed from `element-plus/theme-chalk`,
anchored on the `config-provider` vertical slice. Governs the migrated
surface only (g-utils token modules, config-provider SCSS + JS, badge
selector fix); the 6 deferred entangled islands and non-island files are out
of scope for this spec's Requirements.

## Requirements

### Requirement: Byte-Exact CSS Parity

The generated CSS for every migrated surface MUST be byte-identical to the
pre-migration output (selectors, the full `:root { --gui-* }` block, and all
values).

#### Scenario: Config-provider bootstrap recompiled

- GIVEN the pre-migration compiled CSS for `config.styles.scss`
- WHEN it is recompiled after repointing to DS-owned `g-utils/styles/` modules
- THEN the diff between before and after output is empty

### Requirement: Single-Source Namespace

The `gui` prefix MUST be resolvable from exactly one place —
`common/g-utils/styles/config.scss` `$namespace`. No component `.scss` MAY
hardcode the literal `gui` outside the mixin system.

#### Scenario: Namespace changed at the single source

- GIVEN `$namespace` is changed in `g-utils/styles/config.scss`
- WHEN any migrated component's SCSS is recompiled
- THEN every generated selector and token prefix reflects the new value

#### Scenario: No hardcoded namespace remains

- GIVEN the migrated component `.scss` files
- WHEN grepped for a literal `gui` outside `g-utils` mixin usage
- THEN no matches are found (badge fix included)

### Requirement: DS-Owned Token Generation

`--gui-*` custom properties MUST be emitted by DS-owned Sass ported into
`common/g-utils/styles/` (`mixins/utils`, `mixins/var`, `common/var`,
`base`), not by importing `element-plus/theme-chalk`.

#### Scenario: No element-plus import in the migrated bootstrap

- GIVEN the migrated `config.styles.scss`
- WHEN its `@use`/`@forward` graph is inspected
- THEN it contains no reference to `element-plus/theme-chalk`
- AND it still emits the identical `:root` token block

### Requirement: Config-Provider Is DS-Native (SCSS and JS)

config-provider's SCSS bootstrap MUST NOT import element-plus SCSS, AND
`ConfigProvider.vue` MUST NOT render `ElConfigProvider` from element-plus. It
MUST render a DS-native provider that reads `gui` from `g-utils/config`
(not a hardcoded template literal) and MUST provide the namespace via the
existing `namespaceContextKey` injection.

#### Scenario: Descendants still resolve the namespace

- GIVEN a descendant component calling `useNamespace()`
- WHEN it is rendered under the DS-native config-provider
- THEN it resolves `gui` exactly as before the migration

### Requirement: Byte-Exact Parity Harness

A CSS parity harness MUST exist as a deliverable that compiles the generated
CSS before and after a change and fails on any diff.

#### Scenario: Harness catches a regression

- GIVEN a slice's before/after compiled CSS
- WHEN the harness runs and a byte differs
- THEN the harness fails with a non-zero exit and reports the diff

### Requirement: No Hardcoded Namespace in Badge

`badge.styles.scss` MUST NOT contain the hardcoded `.gui-badge__content`
selector; it MUST be produced through the mixin/namespace system.

#### Scenario: Badge selector resolves through the mixin

- GIVEN the migrated `badge.styles.scss`
- WHEN compiled
- THEN `.gui-badge__content` is generated via `bem()`/namespace mixins, not literal text

### Requirement: No Visual or Public API Change

No component MAY change props, emits, slots, tokens, or selectors as a
result of this migration.

#### Scenario: Public API unchanged

- GIVEN a migrated component's public API before the change
- WHEN compared after the change
- THEN props, emits, and slots are identical

### Requirement: Cross-Repo Namespace Assumption Verified

Before the port mechanics are locked, the change MUST verify that
legacy-pattern `.scss` files resolve to `.gui-*` (not `.el-*`) in the
consumer build (front-b2b / front-admin).

#### Scenario: Consumer build confirms gui resolution

- GIVEN front-b2b or front-admin's Sass aggregation order
- WHEN inspected via source or a build artifact
- THEN legacy-pattern selectors resolve to `.gui-*`

### Requirement: Entangled Islands Fully Migrated (Closes v6)

The 6 previously-deferred entangled islands (`badge`, `menu`, `popover`,
`radio-group`, `form-item`, `skeleton`) are migrated off `element-plus` in
`ep-extraction-v6`. Their full-component stylesheets MUST now be DS-owned
(no `element-plus` `@use`/`@forward` reference), and MUST preserve
byte-exact CSS parity per this spec's Byte-Exact CSS Parity requirement.

#### Scenario: Previously-deferred island stylesheet fully migrated

- GIVEN one of the 6 previously-deferred islands
- WHEN its `.scss` is migrated in `ep-extraction-v6`
- THEN it contains no `element-plus` reference and compiles to byte-identical
  CSS versus its pre-migration output

### Requirement: Config-Provider Owns Brand Emission (Closes Task 4.5)

config-provider's JS bridge retirement (`provideGlobalConfig`) in
`ep-extraction-v6` MUST complete this spec's deferred brand-color emission
task: DS-owned code MUST be the sole source of brand-color `--gui-*` custom
properties, with no `element-plus` fallback path remaining anywhere in the
emission chain.

#### Scenario: Deferred brand-emission task closed

- GIVEN config-provider fully migrated off element-plus in
  `ep-extraction-v6`
- WHEN brand-color `--gui-*` custom properties are generated
- THEN they are emitted entirely by DS-owned code, with zero element-plus
  involvement, satisfying the task deferred at `scss-token-foundation`
  archival

### Requirement: Per-Slice Acceptance Gate

Each delivery slice MUST pass: parity-clean via the harness, `yarn test:run`
green, and CI `verify` lint clean on changed files before being considered
complete.

#### Scenario: Slice passes its gate

- GIVEN a completed slice
- WHEN parity harness, `yarn test:run`, and lint are run
- THEN all three pass before the slice is merged

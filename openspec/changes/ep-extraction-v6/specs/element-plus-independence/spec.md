# Spec: element-plus-independence

> Artifact store: hybrid. Change: `ep-extraction-v6`. New capability — closes the
> final 9 element-plus-coupled DS packages (the former "permanent islands") plus
> root and consumer cleanup, completing the `ep-extraction-vN` initiative
> (v2-v5 + `scss-token-foundation` already archived).

## Purpose

Migrate the last DS packages still importing `element-plus` at runtime — badge,
menu family (Menu/MenuItem/MenuSub/MenuItemGroup), popover, radio-group,
form-item, skeleton family (Skeleton/SkeletonItem), infinite-scroll,
time-picker's icon prop, and config-provider's JS bridge — off `element-plus`,
then remove the root `element-plus` dependency and close the two front-b2b
cleanup units, with zero public API or visual regression.

## Requirements

### Requirement: Zero EP Imports Per Island

For each in-scope package (`badge`, `menu`, `popover`, `radio-group`,
`form-item`, `skeleton`, `infinite-scroll`, `time-picker`, `config-provider`),
no file under `components/<pkg>/src/**` or `components/<pkg>/index.ts` MUST
import any specifier starting with `element-plus` or
`@element-plus/icons-vue`.

#### Scenario: Grep audit passes per island

- GIVEN a migrated package from the in-scope list
- WHEN `grep -rE "from ['\"](element-plus|@element-plus/icons-vue)"
components/<pkg>/src/ components/<pkg>/index.ts` runs
- THEN zero matches are returned

#### Scenario: Time-picker icon swap verified

- GIVEN `time-picker`'s icon prop definitions
- WHEN inspected after migration
- THEN `CircleClose` is sourced from `g-icon-font`, not
  `@element-plus/icons-vue`, following the `components/input/src/input.ts`
  precedent

### Requirement: Public API and Visual Parity Preserved

Each migrated package's props, emits, slots, and exported types MUST be
identical before and after migration, and rendered visual output MUST be
unchanged.

#### Scenario: Consumer usage compiles and renders unchanged

- GIVEN a fixed set of props/emits/slots usage for one in-scope package,
  exercised before and after migration
- WHEN compared
- THEN no prop/emit/slot/exported type is added, removed, renamed, or
  retyped, and rendered output/styles are unchanged

#### Scenario: Menu family shared state preserved

- GIVEN Menu/MenuItem/MenuSub/MenuItemGroup's provide/inject state machine
- WHEN migrated off element-plus internals
- THEN descendants read the identical provided keys/shape as before migration

### Requirement: Config-Provider Context Shape Preserved

config-provider's retirement of `provideGlobalConfig` MUST preserve the exact
context shape (injection keys, provided value structure) consumed by every
downstream component currently reading the EP/DS config context, and MUST NOT
regress `scss-token-foundation`'s already-shipped guarantees.

#### Scenario: Every remaining consumer enumerated before removal

- GIVEN the set of components injecting the EP config context today
- WHEN `provideGlobalConfig` is retired
- THEN each enumerated consumer resolves the same locale/size/zIndex/namespace
  defaults via the DS-native replacement

#### Scenario: scss-token-foundation guarantees not regressed

- GIVEN `scss-token-foundation`'s shipped requirements (Byte-Exact CSS Parity,
  DS-Owned Token Generation, Config-Provider Is DS-Native)
- WHEN config-provider's remaining JS bridge is retired in this change
- THEN those requirements continue to hold with no diff in generated CSS or
  namespace resolution

### Requirement: Root EP Removal Is Gated

Removing `"element-plus"` (and `@element-plus/icons-vue`) from the root
`package.json` MUST be gated on all 9 in-scope packages passing the zero
EP imports check AND on `config-provider` migrating last (sequenced after
every other island).

#### Scenario: Root removal blocked until gate clears

- GIVEN one or more of the 9 packages still importing element-plus
- WHEN root `package.json`/`yarn.lock` removal is attempted
- THEN it MUST NOT proceed

#### Scenario: Root removal succeeds after gate clears

- GIVEN all 9 packages pass the grep audit and `config-provider` is migrated
- WHEN root `element-plus`/`@element-plus/icons-vue` are removed from
  `package.json` and `yarn.lock` is pruned
- THEN `yarn install` and `yarn build` succeed with zero `element-plus`
  resolution anywhere in the workspace

### Requirement: front-b2b Version Bump and Cleanup

front-b2b's `package.json` MUST bump the 8 affected `@flash-global66/g-*`
deps (`g-badge`, `g-config-provider`, `g-form-item`, `g-infinite-scroll`,
`g-menu`, `g-popover`, `g-skeleton`, `g-time-picker` — NOT `g-radio-group`,
not a direct b2b dep) to their published post-migration versions, and MUST
remove its own `element-plus` dependency (`package.json:110`) and the
`vite.config.ts:102` `optimizeDeps.include` EP workaround entry, only after
each bumped package is Lerna-published and yarn-link validated.

#### Scenario: Version bump uses published versions only

- GIVEN a DS package pending front-b2b bump
- WHEN front-b2b's `package.json` is edited
- THEN the pinned version matches an already-published Lerna release, not an
  in-progress local build

#### Scenario: front-b2b builds and runs EP-free

- GIVEN the 8 version bumps applied and the `element-plus`/`optimizeDeps`
  workaround removed
- WHEN front-b2b is built
- THEN the build succeeds with no `element-plus` resolution and no
  regression in the migrated components' consuming screens

## Non-Goals

- `g-utils` `styles/*.scss` EP `@forward`/`@use` bridge (intentional
  `scss-token-foundation` namespace substrate — not removed)
- Re-litigating archived specs (`scss-token-foundation`, v2-v5)
- front-admin changes (no EP dependency)
- CHANGELOG/comment historical EP mentions

## References

- Depends on: `openspec/specs/eslint-ep-import-guard/spec.md`,
  `openspec/specs/scss-token-foundation/spec.md`,
  `openspec/specs/popper-overlay-migration/spec.md` (precedent),
  `openspec/specs/form-control-migration/spec.md` (precedent)
- Change: `ep-extraction-v6` (proposal obs #328 /
  `openspec/changes/ep-extraction-v6/proposal.md`)

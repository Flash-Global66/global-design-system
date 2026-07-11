# Spec: popper-overlay-migration

> Artifact store: hybrid. Change: `ep-extraction-v4`. New capability (v3's `form-control-migration` covers the light form controls; this covers the popper/overlay family).

## Purpose

Migrate 13 popper/overlay-family packages — `focus-trap`, `slot`, `overlay`, `scrollbar`, `popper`, `tooltip`, `select`, `dropdown`, `dialog`, `date-picker`, `time-picker`, `input-tag`, `inline` — off `element-plus` internal imports onto the design system's own code, `g-utils`, `g-hooks`, and `g-form`, with zero public API change. `table`, `pagination`, `collapse`, and `input-number` are explicitly excluded (deferred to `ep-extraction-v5`).

## Requirements

### Requirement: zero-ep-imports-per-migrated-package

For each of the 13 in-scope packages, no file under `components/<pkg>/src/**` nor `components/<pkg>/index.ts` MUST import any specifier starting with `element-plus`.

#### Scenario: grep audit passes per package

- GIVEN a migrated package from the 13 in-scope list
- WHEN `grep -r "from ['\"]element-plus" components/<pkg>/src/ components/<pkg>/index.ts` runs
- THEN zero matches are returned

### Requirement: public-api-and-styles-preserved

Each migrated package's props, emits, slots, and exported types MUST be identical before and after migration. The package's SCSS styles export path (e.g. `/styles.scss`) MUST resolve unchanged. This is an internal refactor, not a breaking change for `front-b2b`/`front-admin`.

#### Scenario: consumers compile and render unchanged

- GIVEN a fixed set of props/emits/slots usage for a migrated component, exercised before and after migration
- WHEN compared
- THEN no prop/emit/slot/exported type is added, removed, renamed, or retyped, and rendered output is unchanged

#### Scenario: styles import path unaffected

- GIVEN a consumer importing `@flash-global66/g-<pkg>/styles.scss`
- WHEN resolved before and after migration
- THEN the same path resolves to equivalent compiled CSS

### Requirement: barrel-exports-stable

Each migrated package's `index.ts` public barrel MUST export the exact same set of symbols (components, types, constants) before and after migration.

#### Scenario: barrel export diff is empty

- GIVEN a migrated package's `index.ts` before and after migration
- WHEN the exported symbol names are diffed
- THEN the sets are identical

### Requirement: reused-composables-repointed

Each in-scope package MUST import already-extracted composables/utilities (`useNamespace`, `useId`, `useIdInjection`, `useGlobalSize`, `useAriaProps`, `useSizeProp`, `useComposition`, `useFocusController`, `useFormSize`, type guards, prop builders, event constants) from `@flash-global66/g-utils`/`@flash-global66/g-hooks`/`@flash-global66/g-form`, not from `element-plus` — even where no new hook is built for that package.

#### Scenario: pre-extracted hook re-pointed without new hook work

- GIVEN `time-picker` or `input-tag`, which import already-extracted hooks straight from `element-plus`
- WHEN migrated
- THEN they import the same hooks from `@flash-global66/g-hooks`/`@flash-global66/g-utils` with unchanged observable behavior

### Requirement: new-hook-algorithms-copied-exactly

Every newly-built hook/directive consumed by an in-scope package (see `g-hooks-package` and `g-utils-extended` deltas) MUST replicate the element-plus algorithm's observable behavior exactly — no behavioral "improvements".

#### Scenario: hook behavior parity with EP original

- GIVEN a newly-built hook (e.g. `usePopper`, `useDraggable`, `createModelToggleComposable`) wired into its first consumer package
- WHEN exercised with the same inputs as the pre-migration element-plus call
- THEN the observable output/behavior matches the pre-migration implementation

### Requirement: dialog-config-shim-adopted

`dialog` MUST NOT import `useGlobalConfig` from `element-plus`. It MUST resolve global config (locale/zIndex/namespace/message defaults) via a DS-native composable (exact contract defined by design), reproducing the observable defaults element-plus's `ConfigProvider` produced.

#### Scenario: dialog defaults resolve with an ancestor provider

- GIVEN a DS-native config provider ancestor supplying a non-default locale/zIndex
- WHEN `dialog` reads its defaults via the DS-native composable
- THEN it resolves the ancestor's locale/zIndex, matching pre-migration `useGlobalConfig` behavior

#### Scenario: dialog defaults resolve without an ancestor provider

- GIVEN no DS-native config provider ancestor
- WHEN `dialog` reads its defaults
- THEN it falls back to the same defaults element-plus's `ConfigProvider` used absent an ancestor

### Requirement: packaging-convention-followed

Each of the 13 migrated packages MUST declare `@flash-global66/g-utils` and `@flash-global66/g-hooks` in `dependencies`, and keep `g-form`, `g-icon-font`, `element-plus`, and `vue` in `peerDependencies`.

#### Scenario: package.json matches convention

- GIVEN a migrated package's `package.json`
- WHEN inspected
- THEN `g-utils`/`g-hooks` are listed under `dependencies` and the peer set is unchanged from the v3 convention

### Requirement: date-picker-lint-debt-resolved

`date-picker`'s migration work unit MUST also resolve its pre-existing `no-unused-vars` warnings, scoped to files touched by the migration.

#### Scenario: lint clean after migration

- GIVEN `date-picker` migrated
- WHEN `yarn lint --max-warnings 0` runs scoped to `components/date-picker`
- THEN no `no-unused-vars` warnings remain

### Requirement: migration-gated-by-green-tests

For each of the 13 packages, all relevant unit tests (existing plus new hook/util tests) MUST pass via `yarn test:run` before that package's ESLint exclude is removed.

#### Scenario: tests green gates exclude removal

- GIVEN a migration work unit for one of the 13 packages
- WHEN `yarn test:run` executes as part of that work unit
- THEN it passes with no failing tests before `.eslintrc.cjs` is updated to remove that package's exclude

## Non-Goals

- Migrating `table`, `pagination`, `collapse`, or `input-number` (deferred to `ep-extraction-v5`)
- Touching any of the 8 permanent islands (`badge`, `menu`, `config-provider`, `popover`, `radio-group`, `form-item`, `skeleton`, `infinite-scroll`) — they keep `element-plus` as a genuine dependency by design
- Removing `element-plus` from any package's `package.json`/`peerDependencies`, anywhere in the monorepo
- Any DOM/integration/mounted test (unit-only policy)

## References

- Depends on: `openspec/specs/g-utils-extended/spec.md`, `openspec/specs/g-hooks-package/spec.md`, `openspec/specs/g-form/spec.md`, `openspec/specs/eslint-ep-import-guard/spec.md`
- Change: `ep-extraction-v4` (proposal obs #275 / `openspec/changes/ep-extraction-v4/proposal.md`)
- Precedent: `openspec/specs/form-control-migration/spec.md` (v3, same pattern for the light form controls)

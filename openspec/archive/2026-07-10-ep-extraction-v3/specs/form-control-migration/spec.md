# form-control-migration Specification

## Purpose

Migrate 5 form-control component packages — `checkbox`, `radio`, `switch`, `segmented`, `input` — off `element-plus` internal imports onto the design system's own hooks/utils (`g-utils`, `g-hooks`, `g-form`), without changing any package's public API. `input-number` is explicitly excluded from this change.

## Requirements

### Requirement: zero-ep-imports-per-migrated-package

For each of `checkbox`, `radio`, `switch`, `segmented`, and `input`, no file under `components/<pkg>/src/**` nor `components/<pkg>/index.ts` MUST import any specifier starting with `element-plus`.

#### Scenario: grep audit passes per package

- GIVEN a migrated package
- WHEN `grep -r "from ['\"]element-plus" components/<pkg>/src/ components/<pkg>/index.ts` runs
- THEN zero matches are returned

### Requirement: public-api-preserved

Each migrated package's props, emits, and slots MUST be identical before and after migration. This is an internal refactor, not a breaking change for `front-b2b` or `front-admin`.

#### Scenario: consumers compile and render unchanged

- GIVEN a fixed set of props/emits/slots usage for a migrated component, exercised before and after migration
- WHEN compared
- THEN no prop/emit/slot is added, removed, renamed, or retyped, and rendered output is unchanged

### Requirement: reused-composables-repointed

Each migrated package MUST import `useNamespace` from `@flash-global66/g-utils`, `useId` from `@flash-global66/g-hooks` (where used, e.g. radio, segmented), and `useFormItem`/`useFormItemInputId`/`useFormDisabled` from `@flash-global66/g-form`, instead of `element-plus`.

#### Scenario: import source swapped without behavior change

- GIVEN a migrated package that previously imported `useNamespace` from `element-plus`
- WHEN it now imports `useNamespace` from `@flash-global66/g-utils`
- THEN generated CSS class names are byte-identical to the pre-migration output

### Requirement: size-composable-wired-per-component

`switch` and `segmented` MUST resolve their effective size via `useFormSize` from `@flash-global66/g-form` (they read form-context-aware size). `input` MUST resolve its `size` prop via `useSizeProp` from `@flash-global66/g-hooks` instead — `input` has no `useFormSize` call in element-plus and none is introduced by this change.

#### Scenario: switch and segmented use the form-aware size hook

- GIVEN `switch` and `segmented` migrated
- WHEN their source is inspected
- THEN both import `useFormSize` from `@flash-global66/g-form` and no longer import a size hook from `element-plus`

#### Scenario: input uses the prop-only size hook

- GIVEN `input` migrated
- WHEN its source is inspected
- THEN it declares `size` via `useSizeProp` from `@flash-global66/g-hooks` and does not import `useFormSize`

### Requirement: input-specific-hooks-wired

`input` MUST additionally use `useComposition`, `useCursor`, `useFocusController`, and the own-code EP-flavored `useAttrs` from `@flash-global66/g-hooks`, replacing its element-plus equivalents.

#### Scenario: input behavior unchanged after hook rewiring

- GIVEN `input` wired to the new `g-hooks` composables
- WHEN IME composition, cursor movement, focus/blur, and attribute merging are exercised
- THEN observed behavior matches the pre-migration element-plus-backed implementation

### Requirement: validate-components-map-input-local

`ValidateComponentsMap` MUST be authored as an `input`-local constant (`components/input/src/`), re-mapping validation states to `@flash-global66/g-icon-font` icons instead of copying element-plus's `@element-plus/icons-vue` mapping. Before porting, the migration work unit MUST confirm the symbol is still consumed by `input.vue` (not just imported); if unused, the import MUST be dropped instead of re-authored.

#### Scenario: map is DS-icon-based and input-local

- GIVEN `input` migrated and `ValidateComponentsMap` still in use
- WHEN its module location and icon references are inspected
- THEN it lives under `components/input/src/` (not `g-utils`/`g-hooks`) and references `@flash-global66/g-icon-font` icons, not `@element-plus/icons-vue`

#### Scenario: unused import is dropped, not ported

- GIVEN the WU-5 usage audit finds `ValidateComponentsMap` imported but never referenced in `input.vue`
- WHEN the migration is completed
- THEN the import is removed entirely and no local `ValidateComponentsMap` file is created

### Requirement: input-number-out-of-scope

`input-number` MUST NOT be modified by this change. It depends on hooks (`useLocale`, `vRepeatClick`) not built in this slice and is deferred to `ep-extraction-v4`.

#### Scenario: input-number untouched

- GIVEN this change is applied
- WHEN `components/input-number/src/**` is inspected
- THEN its element-plus imports remain exactly as before this change

### Requirement: migration-gated-by-green-tests

For each migrated package, all relevant unit tests (existing plus new hook/util tests) MUST pass via `yarn test:run` before that package's ESLint exclude is removed.

#### Scenario: tests green gates exclude removal

- GIVEN a migration work unit for one of the 5 packages
- WHEN `yarn test:run` is executed as part of that work unit
- THEN it passes with no failing tests before `.eslintrc.cjs` is updated to remove that package's exclude

## Non-Goals

- Any DOM/integration test (unit-only policy)
- Changing public API (props/emits/slots) of any of the 5 packages
- Migrating `input-number` or any popper/overlay-dependent package
- Removing `element-plus` from any package's `peerDependencies`
- Adding a `g-icon-font` dependency to `g-utils` or `g-hooks` (icon mapping stays input-local)

## References

- Depends on: `openspec/specs/g-utils-extended/spec.md`, `openspec/specs/g-hooks-package/spec.md`, `openspec/changes/ep-extraction-v3/specs/g-form/spec.md`
- Change: `ep-extraction-v3` (proposal #252)

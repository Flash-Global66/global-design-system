# Delta for g-hooks-package

## ADDED Requirements

### Requirement: popper-overlay-composables-added

`g-hooks` MUST export the following composables, added in `ep-extraction-v4`, each replicating its element-plus algorithm exactly: `usePopper`, `usePopperContainer`/`usePopperContainerId`, `useZIndex`, `useForwardRef`/`useForwardRefDirective` (+ `FORWARD_REF_INJECTION_KEY`), `useEscapeKeydown`, `useSameTarget`, `useDelayedToggle`/`useDelayedToggleProps`, `createModelToggleComposable`, `useDraggable`, `whenMouse`, `useLocale`, `useEmptyValues`/`useEmptyValuesProps`, `useCalcInputWidth`.

#### Scenario: popper/overlay composables resolve and behave identically to EP

- GIVEN a consumer importing `usePopper` (or any composable in this set) from `@flash-global66/g-hooks`
- WHEN called with the same inputs as its pre-migration element-plus call
- THEN it resolves without a build step and produces identical observable output

### Requirement: shared-hook-single-ownership

Where a composable is shared by more than one in-scope package (e.g. `useSameTarget` by `overlay`+`dialog`, `useCalcInputWidth` by `select`+`input-tag`, `useLocale` by `dropdown`/`date-picker`/`time-picker`), it MUST be built exactly once, owned by the first consumer in the migration's topological order, and re-pointed (not re-implemented) by later consumers.

#### Scenario: second consumer re-points to the existing composable

- GIVEN `useSameTarget` already built and shipped for `overlay`
- WHEN `dialog` is migrated afterward
- THEN `dialog` imports the same `useSameTarget` from `@flash-global66/g-hooks` without a second implementation being added

### Requirement: dialog-config-composable-added

`g-hooks` MUST export a DS-native composable that resolves global config (locale/zIndex/namespace/message defaults) without depending on element-plus's `useGlobalConfig`, for exclusive use by `dialog` in this slice.

#### Scenario: config composable resolves defaults with and without a provider ancestor

- GIVEN the DS-native config composable, with and without a DS config provider ancestor present
- WHEN called in each case
- THEN it resolves the ancestor's values when present, and the same fallback defaults element-plus used when absent

### Requirement: v4-hooks-unit-tested

Every composable added in `ep-extraction-v4` MUST ship a Vitest unit test file. Tests MUST be unit-only (no DOM/integration), and the full suite MUST pass via `yarn test:run`.

#### Scenario: full suite green after additions

- GIVEN all v4 composables implemented with unit tests
- WHEN `yarn test:run` executes
- THEN all tests pass, including the new v4 hook tests

## Non-Goals (v4 delta)

- Building/bundling g-hooks as a distributable artifact (stays source-only) — unchanged from base spec
- Final placement of `useLocale`/`useEmptyValues` (`g-hooks` vs `g-form`) — decided by design (open question in the proposal); this delta only requires the composables exist and are unit-tested, not their exact host package
- Table-family composables (`vRepeatClick`, `Mousewheel` directive) — deferred to `ep-extraction-v5`

## References

- Change: `ep-extraction-v4` (proposal obs #275)
- Base spec: `openspec/specs/g-hooks-package/spec.md`

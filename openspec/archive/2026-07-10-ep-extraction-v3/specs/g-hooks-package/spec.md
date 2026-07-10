# Delta for g-hooks-package

## ADDED Requirements

### Requirement: form-control-aria-composable

`useAriaProps` MUST be added to `@flash-global66/g-hooks`, replicating the element-plus algorithm exactly (no reimplementation), and MUST be consumed by `checkbox`, `radio`, `switch`, `segmented`, and `input` in place of the element-plus import.

#### Scenario: aria attrs resolve identically to element-plus

- GIVEN a component calling `useAriaProps(...)` with the same inputs as its pre-migration element-plus call
- WHEN the returned aria attribute object is compared to the pre-migration output
- THEN the attributes are identical

### Requirement: input-size-prop-composable

`useSizeProp` MUST be added to `g-hooks` as a `buildProp`'d prop DEFINITION constant (mirroring element-plus, not a hook function) built from `componentSizes` (`@flash-global66/g-utils`), and consumed by `input` to declare its reactive `size` prop.

#### Scenario: prop definition validates size values

- GIVEN `input`'s `size` prop declared via `useSizeProp`
- WHEN a value from `componentSizes` is assigned versus an invalid value like `'huge'`
- THEN valid values are accepted and `'huge'` fails the prop validator

### Requirement: input-composable-subfamily

`useComposition`, `useCursor`, `useFocusController`, and an EP-flavored `useAttrs` (distinct from Vue core's `useAttrs`; `input.vue` imports both) MUST be added to `g-hooks`, with algorithms copied exactly from element-plus. This subfamily MUST be consumed only by `input`.

#### Scenario: composition and cursor state preserved

- GIVEN an IME composition sequence and a subsequent cursor-position update on the same input
- WHEN `useComposition` and `useCursor` process the events
- THEN composing state and cursor position match element-plus's pre-migration behavior

#### Scenario: focus controller forwards events

- GIVEN `input`'s focus/blur handlers wired through `useFocusController`
- WHEN the input gains and loses focus
- THEN `focus`/`blur` events fire with the same payload shape as before migration

#### Scenario: EP-flavored useAttrs excludes class/style and listeners on demand

- GIVEN `useAttrs({ excludeListeners: true })` on a component with `class`, `style`, and an `onClick` handler in `$attrs`
- WHEN the computed attrs object is read
- THEN `class`, `style`, and `onClick` are absent while other attrs pass through reactively

### Requirement: new-hooks-unit-tested

Every composable added by this delta (`useAriaProps`, `useSizeProp`, `useComposition`, `useCursor`, `useFocusController`, EP-flavored `useAttrs`) MUST ship a Vitest unit test file. Tests MUST be unit-only (no DOM/integration), and the full suite MUST pass via `yarn test:run`.

#### Scenario: full suite green after additions

- GIVEN all hooks in this delta implemented with unit tests
- WHEN `yarn test:run` executes
- THEN all tests pass, including the new hook tests

## Non-Goals

- `useFormSize` — NOT added to `g-hooks`. It requires form/form-item injection context (`formContextKey`/`formItemContextKey`), which live in `g-form`; hosting it in `g-hooks` would create a `g-hooks → g-form → g-hooks` cycle. See the `g-form` domain.
- `usePopper*`, `useSameTarget`, `useEscapeKeydown` — deferred to `ep-extraction-v4`.

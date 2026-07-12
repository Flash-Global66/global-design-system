# Spec: g-hooks Composables Package

> Artifact store: hybrid. Implemented in changes `ep-extraction-v2`, `ep-extraction-v3`, and `ep-extraction-v4`. Branches: `feat/ds-ep-extraction-v2`, `feat/ds-ep-extraction-v3-wu2`, `feat/ds-ep-extraction-v3-wu4`, `feat/ds-ep-extraction-v4-wu*`.
> This spec documents the `@flash-global66/g-hooks` package (v0.11.4+, source-only) as implemented and verified.

## Purpose

The `@flash-global66/g-hooks` package provides Vue 3 composables for stateful, context-aware functionality that requires Vue reactivity and injection/provide patterns. The package is `buildable:false`, source-only, depends on `@flash-global66/g-utils`, and carries no reverse dependency from g-utils.

## Capabilities

### Composables

**Unique Identification**

- `useId(): string` — Generates a unique, stable per-instance ID that is safe across SSR and client hydration. Uses Vue's `getCurrentInstance()` counter + `idInjectionKey` provide/inject pattern (algorithm copied exactly from element-plus). Callable only inside `setup()`.

**Global State Reading**

- `useGlobalSize(): Ref<ComponentSize>` — Returns a computed `Ref<ComponentSize>` that reads the DS global size provider. Defaults to `'default'` if no provider is active. Callable only inside `setup()`.
- `useProp<T>(propName: string): Ref<T>` — Returns a reactive computed `Ref<T>` that tracks the current instance's named prop. Throws error if called outside `setup()`.

**Form Context (Injected from g-form)**

- `useFormItem()` — Note: This composable is NOT in g-hooks. It is exported from `@flash-global66/g-form` because it reads form-item injection context specific to the form domain. See g-form spec.

**Form-Control ARIA / Size (added in `ep-extraction-v3`)**

- `useAriaProps(arias: string[])` — Replicates the element-plus algorithm exactly; returns a `Pick`'d object of `buildProp`'d `String` aria entries, unwrapped (not `{ ariaProps }`). Consumed by `checkbox`, `radio`, `switch`, `segmented`, `input`.
- `useSizeProp` — A `buildProp`'d prop DEFINITION constant (not a function) built from `componentSizes` (`@flash-global66/g-utils`). Consumed by `input` to declare its reactive `size` prop.

**Input Sub-Family (added in `ep-extraction-v3`, consumed only by `input`)**

- `useComposition({ afterComposition, emit? })` — IME composition state tracking, byte-exact copy of the element-plus algorithm. `emit` narrowed to the exact 3 composition-event overloaded signature (not the fully generic `SetupContext['emit']`) for compatibility with `defineEmits`-derived emit functions.
- `useCursor(inputRef)` → `[record, restore]` — Cursor position preservation across value mutations.
- `useFocusController(target, { beforeFocus?, afterFocus?, beforeBlur?, afterBlur? })` → `{ wrapperRef, isFocused, handleFocus, handleBlur, handleClick }` — Focus/blur controller; does NOT auto-emit `focus`/`blur` (callers wire their own emit from the `afterFocus`/`afterBlur` callbacks using the event captured in `beforeFocus`/`beforeBlur`). Includes `beforeFocus` beyond the original design draft to match `input.vue`'s real call site.
- `useAttrs({ excludeListeners?, excludeKeys? })` — EP-flavored, own-code implementation distinct from Vue core's `useAttrs` (`input.vue` imports both). Excludes `class`/`style` (+ any `excludeKeys`) always; `excludeListeners: true` additionally strips `on[A-Z]*` handlers.

## Requirements

### Requirement: package-scaffold

The package MUST be source-only (`buildable:false`), export `.` → `./index.ts`, declare `@flash-global66/g-utils` as a dependency and `vue` as a peerDependency.

#### Scenario: resolves without build

- GIVEN a consumer imports `useId` from `@flash-global66/g-hooks`
- WHEN the import is resolved
- THEN the source resolves directly with no build artifact required

### Requirement: useId-ssr-safe

`useId()` MUST generate a unique per-instance ID, stable across SSR and client hydration, using the algorithm copied EXACTLY from element-plus (not reimplemented).

#### Scenario: SSR hydration stability and uniqueness

- GIVEN a component using `useId()` rendered on the server then hydrated, and a second component mounted alongside it
- WHEN IDs are compared between server and client render, and between the two components
- THEN the server/client ID for the first component matches exactly, and the two components' IDs differ

### Requirement: state-reading-composables

`useGlobalSize()` and `useProp<T>()` MUST return reactive computed Refs that update on state changes.

#### Scenario: default size and reactive prop read

- GIVEN no DS global size provider in the app, and a component whose prop `size` changes value
- WHEN `useGlobalSize()` is called and `useProp('size')` is read after the prop changes
- THEN the size ref is `'default'` on first read and the prop ref reflects the new value on next tick

### Requirement: composables-require-setup

Calling `useGlobalSize()`, `useProp()`, or `useId()` outside a `setup()` context MUST throw a descriptive error.

#### Scenario: setup context enforced

- GIVEN a call to `useGlobalSize()` in an event handler (outside setup)
- WHEN the code executes
- THEN an error is thrown with a message indicating the composable must be called inside `setup()`

### Requirement: no-reverse-dependency

`g-hooks` MUST NOT be imported by `g-utils` or create a circular dependency.

#### Scenario: dependency direction enforced

- GIVEN the dependency graph after this change
- WHEN analyzed
- THEN no import path exists from `g-utils` to `g-hooks`

### Requirement: form-control-aria-composable

`useAriaProps` MUST replicate the element-plus algorithm exactly (no reimplementation), and MUST be consumed by `checkbox`, `radio`, `switch`, `segmented`, and `input` in place of the element-plus import.

#### Scenario: aria attrs resolve identically to element-plus

- GIVEN a component calling `useAriaProps(...)` with the same inputs as its pre-migration element-plus call
- WHEN the returned aria attribute object is compared to the pre-migration output
- THEN the attributes are identical

### Requirement: input-size-prop-composable

`useSizeProp` MUST be a `buildProp`'d prop DEFINITION constant (mirroring element-plus, not a hook function) built from `componentSizes` (`@flash-global66/g-utils`), and consumed by `input` to declare its reactive `size` prop.

#### Scenario: prop definition validates size values

- GIVEN `input`'s `size` prop declared via `useSizeProp`
- WHEN a value from `componentSizes` is assigned versus an invalid value like `'huge'`
- THEN valid values are accepted and `'huge'` fails the prop validator

### Requirement: input-composable-subfamily

`useComposition`, `useCursor`, `useFocusController`, and an EP-flavored `useAttrs` (distinct from Vue core's `useAttrs`; `input.vue` imports both) MUST have algorithms copied exactly from element-plus. This subfamily MUST be consumed only by `input`.

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

Every composable added in `ep-extraction-v3` (`useAriaProps`, `useSizeProp`, `useComposition`, `useCursor`, `useFocusController`, EP-flavored `useAttrs`) MUST ship a Vitest unit test file. Tests MUST be unit-only (no DOM/integration), and the full suite MUST pass via `yarn test:run`.

#### Scenario: full suite green after additions

- GIVEN all hooks in this delta implemented with unit tests
- WHEN `yarn test:run` executes
- THEN all tests pass, including the new hook tests

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

## Non-Goals

- Building/bundling g-hooks as a distributable artifact (stays source-only)
- Creating form-context composables here (form context lives in g-form per domain responsibility) — `useFormSize` specifically is NOT in `g-hooks`; hosting it here would create a `g-hooks → g-form → g-hooks` cycle (see `g-form` spec)
- Reimplementing composable algorithms beyond exact copies of element-plus (no "improvements")
- g-hooks stays source-only; useLocale/useEmptyValues final placement (g-hooks vs g-form) is a design decision, not fixed here
- Table-family composables deferred to `ep-extraction-v5`

## References

- Change: `ep-extraction-v2` (proposal #239, spec #240, design #241, tasks #242, verify-report #247)
- Change: `ep-extraction-v3` (proposal #252, spec #257, design #258, tasks #260, verify-report #268)
- Change: `ep-extraction-v4` (proposal obs #275, spec obs #276, design obs #277, tasks obs #279, verify-report obs #297)
- Archive: `openspec/archive/2026-07-08-ep-extraction-v2/`, `openspec/archive/2026-07-10-ep-extraction-v3/`
- Depends on: `openspec/specs/g-utils-extended/spec.md`

# Delta for g-utils-extended

## ADDED Requirements

### Requirement: component-size-validation

`componentSizes` MUST be added as a runtime constant array `['', 'default', 'small', 'large']` (keeps `''` for element-plus validator parity). `isValidComponentSize(val)` MUST return `true` only for values in `componentSizes`. The existing `ComponentSize` type (`'large' | 'default' | 'small'`) is unchanged — it intentionally omits `''`.

#### Scenario: size validator accepts EP-valid values including empty string

- GIVEN `isValidComponentSize('')`, `isValidComponentSize('small')`, `isValidComponentSize('large')`
- WHEN each is called
- THEN each returns `true`

#### Scenario: size validator rejects invalid values

- GIVEN `isValidComponentSize('huge')`
- WHEN it is called
- THEN it returns `false`

### Requirement: promise-type-guard

`isPromise<T>(val): val is Promise<T>` MUST be added as a pure type guard, returning `true` for native `Promise` instances and `{then, catch}`-shaped thenables.

#### Scenario: guard recognizes real and thenable promises

- GIVEN a native `Promise.resolve()` and a plain object `{then: fn, catch: fn}`
- WHEN `isPromise` is called on each
- THEN both return `true`

#### Scenario: guard rejects non-promise values

- GIVEN `isPromise({})`, `isPromise(null)`, `isPromise(() => {})`
- WHEN each is called
- THEN each returns `false`

### Requirement: mutable-identity-cast

`mutable<T>(val)` and the type `Mutable<T> = { -readonly [P in keyof T]: T[P] }` MUST be added, providing a readonly-stripping identity cast for `as const` literal arrays/objects (used by `input`'s prop definitions). `mutable` MUST return the same reference it received, only re-typed.

#### Scenario: identity cast preserves reference and strips readonly

- GIVEN a `readonly` tuple `['a', 'b'] as const`
- WHEN passed through `mutable(...)`
- THEN the returned value is reference-equal to the input and its static type is no longer `readonly`

### Requirement: new-utils-unit-tested

Every symbol added by this delta (`componentSizes`, `isValidComponentSize`, `isPromise`, `mutable`/`Mutable`) MUST ship a Vitest unit test file. Tests MUST be unit-only (no DOM/integration), and the full suite MUST pass via `yarn test:run`.

#### Scenario: full suite green after additions

- GIVEN all utilities in this delta implemented with unit tests
- WHEN `yarn test:run` executes
- THEN all tests pass, including the new utility tests

## Non-Goals

- Re-adding `isBoolean`, `isObject`, `isString`, `buildProps`, `definePropType`, `debugWarn`, `withInstall`, `SFCWithInstall` — these already ship in `@flash-global66/g-utils` since `ep-extraction-v2` and are only re-pointed-to (reused as-is) by the migrated packages.
- `ValidateComponentsMap` — NOT added here. It maps to `@element-plus/icons-vue` components in EP and must be re-authored against `@flash-global66/g-icon-font` to avoid `g-utils` depending on an icon package. It is input-local; see `form-control-migration`.
- `INPUT_EVENT` — consumed only by `input-number` (deferred to v4), not by `input`; `switch` already imports it from its own local `./constants`.
- Adding a `g-icon-font` dependency to `g-utils`.

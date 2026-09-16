# Spec: g-utils Extended Utilities

> Artifact store: hybrid. Implemented in changes `ep-extraction-v2`, `ep-extraction-v3`, and `ep-extraction-v4`. Branches: `feat/ds-ep-extraction-v2`, `feat/ds-ep-extraction-v3-wu1`, `feat/ds-ep-extraction-v4-wu*`.
> This spec documents the extended g-utils package (v0.12.0+, source-only) as implemented and verified.

## Purpose

The `@flash-global66/g-utils` package provides tree-shakeable pure utility functions, types, and constants that replace internal dependencies on `element-plus` private APIs. The package remains `buildable:false`, source-only, and resolvable via `index.ts` with zero build step.

## Capabilities

### Pure Utility Functions

**Type Guards**

- `isArray(val: unknown): val is any[]` — Array type guard, returns `boolean`, narrows TS type
- `isNumber(val: unknown): val is number` — Number type guard
- `isFunction(val: unknown): val is Function` — Function type guard
- `isUndefined(val: unknown): val is undefined` — Undefined type guard
- `isClient: boolean` — True only when `window` is defined; safe to evaluate at SSR module load

**Array and Object Utilities**

- `ensureArray<T>(val: T | T[]): T[]` — Converts scalar to `[val]`; array input returned unchanged
- `getProp(obj: any, path: string, defaultValue?: any): any` — Dot-notation traversal (supports reactive objects); returns `defaultValue`/`undefined` on missing segment
- `hasOwn(obj: any, key: string): boolean` — Own property check
- `isPropAbsent(obj: any, key: string): boolean` — Property absence check

**Value Transformation**

- `addUnit(val: string | number | undefined): string` — Converts numbers to `{val}px` string format; string input passed through; undefined/empty returns empty string

**Event Composition**

- `composeEventHandlers(fns: Nullable<Function>[]): Function` — Chains multiple event handlers, respecting `defaultPrevented` state

**DOM Utilities**

- `isElement(el: unknown): el is Element` — DOM Element type guard
- `addClass(el: Element, className: string): void` — Add class to element
- `removeClass(el: Element, className: string): void` — Remove class from element
- `hasClass(el: Element, className: string): boolean` — Check element class membership
- `rAF(cb: FrameRequestCallback): void` — Wrapper for `requestAnimationFrame`

**Error Handling**

- `throwError(scope: string, msg: string): never` — Throws Error with formatted message including scope

**No-op**

- `NOOP: () => void` — Empty function, useful for default callbacks

### Constants

**Event Constants**

- `UPDATE_MODEL_EVENT = 'update:modelValue'` — Standard Vue model update event name
- `CHANGE_EVENT = 'change'` — Standard change event name
- `EVENT_CODE` — Keyboard event code map (e.g., `EVENT_CODE.esc`, `EVENT_CODE.enter`) matching element-plus implementation

### Types

**Generic Types**

- `Arrayable<T> = T | T[]` — Union type for single item or array of items
- `ComponentSize = 'large' | 'default' | 'small'` — Design system size token
- `Mutable<T> = { -readonly [P in keyof T]: T[P] }` — Readonly-stripping identity type (added in `ep-extraction-v3`)

**Component Size Validation** (added in `ep-extraction-v3`)

- `componentSizes: readonly ['', 'default', 'small', 'large']` — Runtime array of valid size values, keeps `''` for element-plus validator parity (the `ComponentSize` TYPE intentionally omits `''` and is unchanged)
- `isValidComponentSize(val: unknown): boolean` — `true` only for values in `componentSizes`

**Promise Guard** (added in `ep-extraction-v3`)

- `isPromise<T>(val: unknown): val is Promise<T>` — `true` for native `Promise` instances and `{then, catch}`-shaped thenables; `false` otherwise

**Identity Cast** (added in `ep-extraction-v3`)

- `mutable<T>(val: T): Mutable<T>` — Readonly-stripping identity cast; returns the SAME reference, only re-typed. Used to unfreeze `as const`-declared prop-definition arrays/objects passed through `buildProps`.

## Requirements

### Requirement: pure-utility-functions-available

All pure utility functions listed above MUST be exported from `@flash-global66/g-utils`.

#### Scenario: functions resolve and type-guard correctly

- GIVEN `import { isNumber, getProp } from '@flash-global66/g-utils'`
- WHEN calling `isNumber(42)` and `getProp({a:{b:1}}, 'a.b')`
- THEN `isNumber` returns `true` and `getProp` returns `1` (not `undefined`)

### Requirement: ssr-safe-client-check

The `isClient` check MUST evaluate safely in SSR environments without throwing ReferenceError.

#### Scenario: SSR module load succeeds

- GIVEN an SSR environment without `window` global
- WHEN a module imports and evaluates `isClient`
- THEN no ReferenceError is thrown and `isClient === false`

### Requirement: constants-and-types-exported

Constants (`UPDATE_MODEL_EVENT`, `CHANGE_EVENT`, `EVENT_CODE`) and types (`Arrayable`, `ComponentSize`) MUST be exported.

#### Scenario: constants match element-plus and types enforce boundaries

- GIVEN `EVENT_CODE.esc` and a value `'medium'` assigned to a `ComponentSize` prop
- THEN `EVENT_CODE.esc` produces the same key code as element-plus, and TypeScript raises a compile error for `'medium'`

### Requirement: package-integrity-preserved

`g-utils` MUST remain `buildable:false`, source-only, and MUST NOT depend on `g-hooks`.

#### Scenario: source resolves without build

- GIVEN a consumer importing from `@flash-global66/g-utils`
- WHEN the import is resolved
- THEN it resolves directly to source files with no build step required

### Requirement: component-size-validation

`componentSizes` MUST be a runtime constant array `['', 'default', 'small', 'large']` (keeps `''` for element-plus validator parity). `isValidComponentSize(val)` MUST return `true` only for values in `componentSizes`. The existing `ComponentSize` type (`'large' | 'default' | 'small'`) is unchanged — it intentionally omits `''`.

#### Scenario: size validator accepts EP-valid values including empty string

- GIVEN `isValidComponentSize('')`, `isValidComponentSize('small')`, `isValidComponentSize('large')`
- WHEN each is called
- THEN each returns `true`

#### Scenario: size validator rejects invalid values

- GIVEN `isValidComponentSize('huge')`
- WHEN it is called
- THEN it returns `false`

### Requirement: promise-type-guard

`isPromise<T>(val): val is Promise<T>` MUST be a pure type guard, returning `true` for native `Promise` instances and `{then, catch}`-shaped thenables.

#### Scenario: guard recognizes real and thenable promises

- GIVEN a native `Promise.resolve()` and a plain object `{then: fn, catch: fn}`
- WHEN `isPromise` is called on each
- THEN both return `true`

#### Scenario: guard rejects non-promise values

- GIVEN `isPromise({})`, `isPromise(null)`, `isPromise(() => {})`
- WHEN each is called
- THEN each returns `false`

### Requirement: mutable-identity-cast

`mutable<T>(val)` and the type `Mutable<T> = { -readonly [P in keyof T]: T[P] }` MUST provide a readonly-stripping identity cast for `as const` literal arrays/objects (used by `input`'s prop definitions). `mutable` MUST return the same reference it received, only re-typed.

#### Scenario: identity cast preserves reference and strips readonly

- GIVEN a `readonly` tuple `['a', 'b'] as const`
- WHEN passed through `mutable(...)`
- THEN the returned value is reference-equal to the input and its static type is no longer `readonly`

### Requirement: new-utils-unit-tested

Every symbol added in `ep-extraction-v3` (`componentSizes`, `isValidComponentSize`, `isPromise`, `mutable`/`Mutable`) MUST ship a Vitest unit test file. Tests MUST be unit-only (no DOM/integration), and the full suite MUST pass via `yarn test:run`.

#### Scenario: full suite green after additions

- GIVEN all utilities in this delta implemented with unit tests
- WHEN `yarn test:run` executes
- THEN all tests pass, including the new utility tests

### Requirement: popper-overlay-utils-added

`g-utils` MUST export the following pure helpers/types/directives, added in `ep-extraction-v4`, each replicating its element-plus algorithm exactly: `castArray`, `getStyle`, `composeRefs`, `isFocusable`, `iconPropType`, `PatchFlags`, and the `ClickOutside` directive.

#### Scenario: new utils resolve and behave identically to EP

- GIVEN a consumer importing one of the new v4 utilities from `@flash-global66/g-utils`
- WHEN called with the same inputs as its pre-migration element-plus call
- THEN it resolves without a build step and returns/behaves identically

#### Scenario: ClickOutside directive fires on outside interaction only

- GIVEN `ClickOutside` bound to an element inside a mounted component
- WHEN a click occurs outside the bound element versus inside it
- THEN the directive's callback fires only for the outside click

### Requirement: v4-utils-unit-tested

Every utility/directive added in `ep-extraction-v4` MUST ship a Vitest unit test file. Tests MUST be unit-only (no DOM/integration beyond directive-local assertions), and the full suite MUST pass via `yarn test:run`.

#### Scenario: full suite green after additions

- GIVEN all v4 utilities implemented with unit tests
- WHEN `yarn test:run` executes
- THEN all tests pass, including the new v4 utility tests

## Non-Goals

- Building/bundling g-utils as a distributable artifact (stays source-only)
- Depending on g-hooks or g-form from g-utils (unchanged from base spec)
- Reimplementing whole components or design patterns
- `ValidateComponentsMap` — not hosted here; it maps to `@element-plus/icons-vue` in EP and must be re-authored against `@flash-global66/g-icon-font`; it is `input`-local (see `form-control-migration` spec) to avoid `g-utils` depending on an icon package
- `INPUT_EVENT` — consumed only by `input-number` (deferred to `ep-extraction-v5`); `switch` imports it from its own local `./constants`
- Adding a `g-icon-font` dependency to `g-utils`
- Table-family utilities — deferred to `ep-extraction-v5`

## References

- Change: `ep-extraction-v2` (proposal #239, spec #240, design #241, tasks #242, verify-report #247)
- Change: `ep-extraction-v3` (proposal #252, spec #257, design #258, tasks #260, verify-report #268)
- Change: `ep-extraction-v4` (proposal obs #275, spec obs #276, design obs #277, tasks obs #279, verify-report obs #297)
- Archive: `openspec/archive/2026-07-08-ep-extraction-v2/`, `openspec/archive/2026-07-10-ep-extraction-v3/`

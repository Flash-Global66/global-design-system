# Spec: g-utils Extended Utilities

> Artifact store: hybrid. Implemented in change `ep-extraction-v2`. Branch: `feat/ds-ep-extraction-v2`.
> This spec documents the extended g-utils package (v0.2.0, source-only) as implemented and verified.

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

## Non-Goals

- Building/bundling g-utils as a distributable artifact (stays source-only)
- Depending on g-hooks or any external packages (pure utilities only)
- Reimplementing whole components or design patterns

## References

- Change: `ep-extraction-v2` (proposal #239, spec #240, design #241, tasks #242, verify-report #247)
- Archive: `openspec/archive/2026-07-08-ep-extraction-v2/`

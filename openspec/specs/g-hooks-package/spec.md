# Spec: g-hooks Composables Package

> Artifact store: hybrid. Implemented in change `ep-extraction-v2`. Branch: `feat/ds-ep-extraction-v2`.
> This spec documents the new `@flash-global66/g-hooks` package (v0.1.0, source-only) as implemented and verified.

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

## Non-Goals

- Building/bundling g-hooks as a distributable artifact (stays source-only)
- Creating form-context composables here (form context lives in g-form per domain responsibility)
- Reimplementing composable algorithms beyond exact copies of element-plus (no "improvements")

## References

- Change: `ep-extraction-v2` (proposal #239, spec #240, design #241, tasks #242, verify-report #247)
- Archive: `openspec/archive/2026-07-08-ep-extraction-v2/`
- Depends on: `openspec/specs/g-utils-extended/spec.md`

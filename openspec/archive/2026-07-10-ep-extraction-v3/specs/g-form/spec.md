# g-form Specification

> New OpenSpec domain, introduced by `ep-extraction-v3` because the size-resolution composable must live next to `g-form`'s existing form/form-item injection context (`useFormItem`, `useFormItemInputId`, `useFormDisabled`), not in `g-hooks`, to keep the dependency graph acyclic (`g-hooks → g-form` is forbidden). This spec documents only the NEW composable this change adds; `useFormItem`/`useFormItemInputId`/`useFormDisabled` already exist (shipped pre-v3) and are out of scope for this documentation pass.

## Purpose

`@flash-global66/g-form` hosts form-context-derived composables — logic that must `inject()` the form/form-item provide keys. It depends on `@flash-global66/g-hooks` and `@flash-global66/g-utils`; nothing may depend back on it from those lower layers.

## Requirements

### Requirement: form-aware-size-resolution

`useFormSize` MUST be added to `@flash-global66/g-form`, resolving a component's effective size with this precedence, highest first: (1) an explicit `size` prop (via `useProp<ComponentSize>('size')` from `g-hooks`), (2) an optional `fallback` argument, (3) `useGlobalSize()` from `g-hooks`, (4) `'default'`. It MUST NOT read a form/form-item context size tier: `g-form`'s `formProps`/`formItemProps` expose no `size` field in this version, so no such tier exists to read. `ignore.prop`/`ignore.global` flags MAY be passed to skip the corresponding tier.

#### Scenario: explicit prop wins over fallback and global

- GIVEN a component with an explicit `size="large"` prop, a `fallback` of `'small'`, and a global size config of `'default'`
- WHEN `useFormSize(fallback)` resolves size
- THEN it returns `'large'`

#### Scenario: fallback wins when prop is absent

- GIVEN no `size` prop set, `fallback` of `'small'`, and a global size config of `'default'`
- WHEN `useFormSize(fallback)` resolves size
- THEN it returns `'small'`

#### Scenario: falls through to global default with nothing set

- GIVEN no `size` prop, no `fallback`, and no DS global size config active
- WHEN `useFormSize()` resolves size
- THEN it returns `'default'`

#### Scenario: ignore flags neutralize their tier

- GIVEN an explicit `size` prop set and `ignore: { prop: true }` passed
- WHEN `useFormSize(undefined, { prop: true })` resolves size
- THEN it evaluates the next tier (`fallback` then global) instead of the prop

### Requirement: new-hook-unit-tested

`useFormSize` MUST ship mounted-component Vitest unit tests covering all four precedence tiers and both `ignore` flags. Tests MUST be unit-only, and the full suite MUST pass via `yarn test:run`.

#### Scenario: full suite green after addition

- GIVEN `useFormSize` implemented with unit tests
- WHEN `yarn test:run` executes
- THEN all tests pass, including the new hook's tests

## Non-Goals

- Adding a `size` prop to `formProps`/`formItemProps` or reinstating a form-context size tier — rejected as scope creep; this is a migration, not a new feature. Documented as a future enhancement outside `ep-extraction-v3`.
- Reimplementing or re-documenting `useFormItem`, `useFormItemInputId`, `useFormDisabled` — already exist, unaffected by this change.
- Moving `formContextKey`/`formItemContextKey` out of `g-form` into `g-hooks`/`g-utils`.

## References

- Depends on: `@flash-global66/g-hooks` (`useProp`, `useGlobalSize`), `@flash-global66/g-utils` (`ComponentSize`)
- Change: `ep-extraction-v3` (proposal #252, design decision 2.1)

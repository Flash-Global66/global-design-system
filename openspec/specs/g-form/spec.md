# Spec: g-form Package

> Artifact store: hybrid. Introduced by change `ep-extraction-v3`. Branch: `feat/ds-ep-extraction-v3-wu2`.
> This spec documents the `useFormSize` composable added to `@flash-global66/g-form`. Pre-existing composables in this package (`useFormItem`, `useFormItemInputId`, `useFormDisabled`) predate this change and are out of scope for this documentation pass.

## Purpose

`@flash-global66/g-form` hosts form-context-derived composables — logic that must `inject()` the form/form-item provide keys. It depends on `@flash-global66/g-hooks` and `@flash-global66/g-utils`; nothing may depend back on it from those lower layers. `useFormSize` was placed here rather than in `g-hooks` specifically to keep the dependency graph acyclic (`g-hooks → g-form` is forbidden).

## Capabilities

### Composables

**Size Resolution**

- `useFormSize(fallback?: MaybeRef<ComponentSize>, ignore?: { prop?: boolean; global?: boolean }): ComputedRef<ComponentSize>` — Resolves a component's effective size with precedence, highest first: (1) explicit `size` prop via `useProp<ComponentSize>('size')` from `g-hooks`, (2) `fallback` argument, (3) `useGlobalSize()` from `g-hooks`, (4) `'default'`. `ignore.prop`/`ignore.global` skip the corresponding tier.

**Pre-existing (out of scope for this doc pass)**

- `useFormItem()`, `useFormItemInputId()`, `useFormDisabled()` — form/form-item injection composables that predate `ep-extraction-v3`.

## Requirements

### Requirement: form-aware-size-resolution

`useFormSize` MUST resolve a component's effective size with this precedence, highest first: (1) an explicit `size` prop (via `useProp<ComponentSize>('size')` from `g-hooks`), (2) an optional `fallback` argument, (3) `useGlobalSize()` from `g-hooks`, (4) `'default'`. It MUST NOT read a form/form-item context size tier: `g-form`'s `formProps`/`formItemProps` expose no `size` field in this version, so no such tier exists to read. `ignore.prop`/`ignore.global` flags MAY be passed to skip the corresponding tier.

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

- Adding a `size` prop to `formProps`/`formItemProps` or reinstating a form-context size tier — rejected as scope creep in `ep-extraction-v3`; this was a migration, not a new feature. Documented as a FUTURE enhancement, not yet scheduled.
- Reimplementing or re-documenting `useFormItem`, `useFormItemInputId`, `useFormDisabled` — pre-existing, unaffected by `ep-extraction-v3`.
- Moving `formContextKey`/`formItemContextKey` out of `g-form` into `g-hooks`/`g-utils`.

## References

- Depends on: `openspec/specs/g-hooks-package/spec.md` (`useProp`, `useGlobalSize`), `openspec/specs/g-utils-extended/spec.md` (`ComponentSize`)
- Change: `ep-extraction-v3` (proposal #252, spec #257, design #258 decision 2.1, tasks #260, verify-report #268)
- Archive: `openspec/archive/2026-07-10-ep-extraction-v3/`

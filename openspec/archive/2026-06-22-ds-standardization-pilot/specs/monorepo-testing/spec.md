# monorepo-testing Specification

## Purpose

Defines the requirements for adding a single Vitest runner at the monorepo root. Prior to this change, the design system has no test runner. This spec covers configuration, resolution of internal workspace packages, and the `withSetup` composable test utility.

---

## Requirements

### Requirement: Single Vitest Config at Root

A single Vitest configuration file MUST exist at the monorepo root. It MUST NOT be placed inside any component workspace. All component tests across the monorepo MUST be discovered by this single config.

#### Scenario: Tests run from the root

- GIVEN `vitest.config.ts` (or `.js`) exists at the monorepo root
- WHEN `yarn test` is executed from the monorepo root
- THEN Vitest discovers and runs all `*.spec.ts` files under `components/**/tests/`
- AND the exit code reflects pass/fail status of those tests

#### Scenario: No separate Vitest config inside component packages

- GIVEN the migration is applied
- WHEN the filesystem is searched for `vitest.config.*` files
- THEN only one such file exists, at the monorepo root

---

### Requirement: jsdom Test Environment

The Vitest configuration MUST declare `environment: 'jsdom'` so Vue components can be mounted in tests without a real browser.

#### Scenario: DOM APIs available in tests

- GIVEN a Vitest test that uses `@vue/test-utils` `mount()`
- WHEN the test runs under the root Vitest config
- THEN `document`, `window`, and other browser globals are available
- AND Vue components mount without a "document is not defined" error

---

### Requirement: Internal Package Resolution (deps.inline)

The Vitest config MUST include `deps.inline: [/@flash-global66\/.*/]`. This ensures workspace packages are processed by Vite's pipeline instead of treated as pre-bundled CommonJS, avoiding ESM/CJS resolution failures.

#### Scenario: Import from @flash-global66/g-utils does not throw in tests

- GIVEN a test file that imports `{ buildProps } from '@flash-global66/g-utils'`
- WHEN Vitest processes the file
- THEN the import resolves without a "Cannot find module" or "does not provide an export" error

#### Scenario: Import from @flash-global66/g-button resolves in tests

- GIVEN a test file that imports `{ GButton } from '@flash-global66/g-button'`
- WHEN Vitest processes the file with `deps.inline` active
- THEN the component is importable and mountable via `@vue/test-utils`

---

### Requirement: Root package.json test script

The monorepo root `package.json` MUST declare a `test` script that invokes Vitest. The script MUST be runnable with `yarn test` from the root.

#### Scenario: yarn test command exists and exits cleanly

- GIVEN all specs pass
- WHEN `yarn test` is run from the monorepo root
- THEN the process exits with code `0`
- AND Vitest output shows the test run summary

---

### Requirement: withSetup Test Utility

A `withSetup` utility function for testing composables MUST exist at `tests/utils/withSetup.ts` in the monorepo root's test utilities (NOT inside `g-utils`). It MUST allow mounting a composable inside a real Vue app instance so that `provide`/`inject`, lifecycle hooks, and reactivity work correctly in unit tests.

#### Scenario: withSetup resolves composable return value

- GIVEN a composable `useCounter` that returns `{ count: Ref<number> }`
- WHEN `withSetup(() => useCounter())` is called in a test
- THEN the returned `{ result }` contains the composable's return value with full reactivity

#### Scenario: withSetup utility is not bundled into g-utils

- GIVEN the published `@flash-global66/g-utils` package
- WHEN its exports are inspected
- THEN `withSetup` is NOT exported from the package

---

### Requirement: Baseline Test Suite for Button (4 specs)

The following four test files MUST exist and MUST pass via `yarn test` after migration:

| File                                           | What it tests                                                     |
| ---------------------------------------------- | ----------------------------------------------------------------- |
| `components/button/tests/useButton.spec.ts`    | composable logic: componentId, allAttrs, shouldShowLeftIcon/Right |
| `components/button/tests/useRipple.spec.ts`    | ripple array mutation, removeRipple, animation lifecycle          |
| `components/button/tests/button.props.spec.ts` | prop validator warnings for invalid variant/size/type values      |
| `components/button/tests/Button.spec.ts`       | rendered DOM: correct classes, slot rendering, emit on click      |

#### Scenario: All 4 specs pass with yarn test

- GIVEN the migration is complete and `@flash-global66/g-utils` is built/linked
- WHEN `yarn test` is executed at the monorepo root
- THEN all four spec files complete with 0 failures and 0 errors

#### Scenario: Button render spec asserts CSS classes

- GIVEN `Button.spec.ts` mounts `<GButton variant="primary" size="md" />`
- WHEN the rendered wrapper's classes are inspected
- THEN `wrapper.classes()` includes `'gui-button'`, `'gui-button--variant-primary'`, `'gui-button--md'`
- AND does NOT include any class from element-plus's own namespace

#### Scenario: Props spec asserts validator warnings for invalid inputs

- GIVEN `button.props.spec.ts` calls `validateButtonProps` with `variant: 'invalid'`
- WHEN the function executes
- THEN `debugWarn` (from `@flash-global66/g-utils`) is called with scope `'Button'` and a message containing `'variant'`

# g-utils-package Specification

## Purpose

Defines the requirements for the `@flash-global66/g-utils` package: a self-owned utility library that replaces direct `element-plus` imports for TS utilities, the BEM namespace helper, and SCSS mixins. This package MUST be the authoritative source of truth for component authoring primitives across the design system.

---

## Requirements

### Requirement: TypeScript Utility Exports

The package MUST export the following TypeScript symbols, each with behavior equivalent to their element-plus counterparts, resolvable via the package's main entry point:

| Symbol                                                         | Kind                      |
| -------------------------------------------------------------- | ------------------------- |
| `buildProps<T>(props: T): T`                                   | function                  |
| `definePropType<T>(val: any): PropType<T>`                     | function                  |
| `withInstall<T, E>(main: T, extra?: E): SFCWithInstall<T> & E` | function                  |
| `withNoopInstall<T>(comp: T): SFCWithInstall<T>`               | function                  |
| `SFCWithInstall<T>`                                            | type alias (`T & Plugin`) |
| `isBoolean(v: unknown): v is boolean`                          | type guard                |
| `isString(v: unknown): v is string`                            | type guard                |
| `debugWarn(scope: string, message: string): void`              | function                  |

#### Scenario: Consumer imports TS utilities via package name

- GIVEN `@flash-global66/g-utils` is installed as a workspace dependency
- WHEN a TypeScript file does `import { buildProps, isBoolean } from '@flash-global66/g-utils'`
- THEN the import resolves without errors and each symbol has the correct TypeScript signature

#### Scenario: withInstall attaches Plugin interface

- GIVEN a Vue SFC exported as a plain component type `T`
- WHEN `withInstall(component)` is called
- THEN the returned value satisfies `T & Plugin` and exposes an `install(app: App): void` method

#### Scenario: Type guards narrow types correctly

- GIVEN a value of type `unknown`
- WHEN `isBoolean(value)` returns `true`
- THEN TypeScript narrows the type to `boolean`
- AND the same invariant holds for `isString` narrowing to `string`

---

### Requirement: BEM Namespace Helper (useNamespace)

The package MUST export `useNamespace(block: string, namespaceRef?: Ref<string>): NamespaceHelpers` that produces BEM class names using namespace `'gui'` by default. The generated class names MUST be identical to those produced by `element-plus`'s `useNamespace` called with the same arguments and namespace `'gui'`.

| Helper method           | Example output (block=`button`, ns=`gui`) |
| ----------------------- | ----------------------------------------- |
| `.b()`                  | `gui-button`                              |
| `.e('content')`         | `gui-button__content`                     |
| `.m('variant-primary')` | `gui-button--variant-primary`             |
| `.m('sm')`              | `gui-button--sm`                          |
| `.is('disabled', true)` | `is-disabled`                             |
| `.is('loading', true)`  | `is-loading`                              |
| `.is('href', true)`     | `is-href`                                 |
| `.is('full', true)`     | `is-full`                                 |

#### Scenario: Block class generation

- GIVEN `useNamespace('button', ref('gui'))` is called
- WHEN `.b()` is invoked on the result
- THEN the returned string is exactly `'gui-button'`

#### Scenario: Element class generation

- GIVEN `useNamespace('button', ref('gui'))` is called
- WHEN `.e('icon-left')` is invoked
- THEN the returned string is exactly `'gui-button__icon-left'`

#### Scenario: Modifier class generation

- GIVEN `useNamespace('button', ref('gui'))` is called
- WHEN `.m('variant-primary')` is invoked
- THEN the returned string is exactly `'gui-button--variant-primary'`

#### Scenario: State class generation (is-\* classes)

- GIVEN `useNamespace('button', ref('gui'))` is called
- WHEN `.is('disabled', true)` is invoked
- THEN the returned string is exactly `'is-disabled'`
- AND `.is('disabled', false)` returns `false` or empty (no class emitted)

#### Scenario: Parity test against element-plus useNamespace

- GIVEN a Vitest unit test that imports both `useNamespace` from `@flash-global66/g-utils` and from `element-plus`
- WHEN both are called with `('button', ref('gui'))` and each helper method is invoked identically
- THEN every returned string is byte-for-byte identical

---

### Requirement: SCSS BEM Mixins via Package Exports

The package MUST expose SCSS mixins resolvable via `@use '@flash-global66/g-utils/mixins' as *`. The four mixins MUST produce CSS output IDENTICAL to `element-plus/theme-chalk/src/mixins/mixins`.

| Mixin signature | Generated CSS selector   |
| --------------- | ------------------------ |
| `b($block)`     | `.gui-#{$block} { ... }` |
| `e($el)`        | `&__#{$el} { ... }`      |
| `m($mod)`       | `&--#{$mod} { ... }`     |
| `when($state)`  | `&.is-#{$state} { ... }` |

#### Scenario: b() mixin produces root block selector

- GIVEN a SCSS file that does `@use '@flash-global66/g-utils/mixins' as *`
- WHEN `@include b('button') { color: red; }` is written
- THEN the compiled CSS contains exactly `.gui-button { color: red; }`

#### Scenario: e() mixin produces BEM element selector

- GIVEN inside an `@include b('button')` block
- WHEN `@include e('content') { display: flex; }` is written
- THEN the compiled CSS contains `.gui-button__content { display: flex; }`

#### Scenario: m() mixin produces BEM modifier selector

- GIVEN inside an `@include b('button')` block
- WHEN `@include m('variant-primary') { ... }` is written
- THEN the compiled CSS contains `.gui-button--variant-primary { ... }`

#### Scenario: when() mixin produces state selector

- GIVEN inside an `@include b('button')` block
- WHEN `@include when(disabled) { cursor: not-allowed; }` is written
- THEN the compiled CSS contains `.gui-button.is-disabled { cursor: not-allowed; }`

#### Scenario: CSS diff parity with element-plus theme-chalk

- GIVEN button.style.scss compiled with g-utils mixins (output A)
- AND the same SCSS content compiled with element-plus/theme-chalk mixins (output B)
- WHEN a textual diff is run between A and B
- THEN the diff MUST be empty (zero byte difference in generated CSS)

---

### Requirement: Package Exports Map

The package MUST declare an `exports` field in `package.json` that makes BOTH the TS entry point and the SCSS mixins resolvable by package name.

#### Scenario: Resolving TS entry via package name

- GIVEN `@flash-global66/g-utils` is a workspace dependency
- WHEN a bundler resolves `'@flash-global66/g-utils'`
- THEN it resolves to the declared `main`/`module` entry containing the TS exports

#### Scenario: Resolving SCSS mixins via subpath export

- GIVEN a SCSS file uses `@use '@flash-global66/g-utils/mixins' as *`
- WHEN the Sass compiler resolves the import
- THEN it resolves to the `mixins.scss` file declared in `exports["./mixins"]`

---

### Requirement: Out-of-Scope Exclusion (Theming)

The package MUST NOT include any theming, token, or design-token primitives. ConfigProvider integration, b2b/b2c theming, and dark/light mode MUST NOT be implemented in this package (those belong to Cambio 3: `g-tokens-foundations`).

#### Scenario: No theming API surfaced

- GIVEN the public exports of `@flash-global66/g-utils`
- WHEN a consumer inspects the exported symbols
- THEN no symbol related to themes, tokens, or design configuration is present

# component-canonical-architecture Specification

## Purpose

Defines the canonical modular file layout for a publishable design system component. The structure is validated end-to-end on the `button` component. All requirements describe WHAT the final file tree and public API contract must look like — not HOW to get there.

---

## Requirements

### Requirement: Canonical Source Layout

Every component migrated under this pattern MUST follow this exact directory tree inside its workspace package:

```
components/{name}/
├── index.ts                        # public barrel — exports the SFCWithInstall wrapper
├── package.json                    # publishable, with correct exports map
└── src/
    ├── {Name}.vue                  # template-only SFC; no business logic inline
    ├── composables/
    │   ├── use{Name}.ts            # primary composable (orchestrates logic)
    │   └── use{SubFeature}.ts      # sub-composables as needed
    ├── props/
    │   └── {name}.props.ts         # buildProps() call; no logic
    ├── types/
    │   └── {name}.type.ts          # TypeScript type aliases only
    ├── constants/
    │   └── {name}.constant.ts      # as const enum-like objects; no logic
    └── styles/
        └── {name}.style.scss       # SINGULAR file; uses g-utils mixins only
```

Tests MUST mirror the `src/` layout under `tests/`:

```
tests/
├── use{Name}.spec.ts
├── use{SubFeature}.spec.ts
├── {name}.props.spec.ts
└── {Name}.spec.ts
```

#### Scenario: Button source tree matches canonical layout

- GIVEN the ds-standardization-pilot branch is applied
- WHEN the filesystem under `components/button/src/` is inspected
- THEN the tree MUST contain exactly: `Button.vue`, `composables/useButton.ts`, `composables/useRipple.ts`, `props/button.props.ts`, `types/button.type.ts`, `constants/button.constant.ts`, `styles/button.style.scss`
- AND no file named `button.ts` (the old flat entry) remains in `src/`

#### Scenario: Tests mirror src layout

- GIVEN `components/button/tests/` exists
- WHEN its contents are listed
- THEN it contains `useButton.spec.ts`, `useRipple.spec.ts`, `button.props.spec.ts`, and `Button.spec.ts`

---

### Requirement: Template-Pure SFC

The `{Name}.vue` file MUST contain ONLY template markup and a `<script setup>` that: imports props/emits from `props/`, delegates all reactive logic to the primary composable, and uses `useNamespace` from `@flash-global66/g-utils`. It MUST NOT contain business logic, computed derivations beyond class binding, or direct imports from `element-plus`.

#### Scenario: No element-plus import in Button.vue

- GIVEN `components/button/src/Button.vue` after migration
- WHEN all import statements in the file are inspected
- THEN zero imports reference `element-plus` or any sub-path of `element-plus`

#### Scenario: Namespace import comes from g-utils

- GIVEN `components/button/src/Button.vue`
- WHEN the import of `useNamespace` is located
- THEN its source is `'@flash-global66/g-utils'`, not `'element-plus'`

---

### Requirement: Props File uses buildProps from g-utils

The `props/{name}.props.ts` file MUST call `buildProps()` imported from `@flash-global66/g-utils`. It MUST NOT import from `element-plus`.

#### Scenario: buildProps import source

- GIVEN `components/button/src/props/button.props.ts`
- WHEN the import of `buildProps` is located
- THEN its source is `'@flash-global66/g-utils'`

---

### Requirement: Styles File uses g-utils Mixins Only

The `styles/{name}.style.scss` file MUST use `@use '@flash-global66/g-utils/mixins' as *` as its only BEM mixin source. It MUST NOT `@use` any `element-plus/theme-chalk` path.

#### Scenario: No element-plus SCSS import in button.style.scss

- GIVEN `components/button/src/styles/button.style.scss`
- WHEN all `@use` directives in the file are inspected
- THEN zero directives reference `element-plus/theme-chalk` or any element-plus path

---

### Requirement: Backward-Compatible Public API (Button)

The public API of `@flash-global66/g-button` MUST remain byte-compatible with its pre-migration state. This is a HARD constraint because `front-b2b` consumes this package in production.

**Props that MUST remain (no additions, no removals, no type changes):**

| Prop         | Type                                     | Default     |
| ------------ | ---------------------------------------- | ----------- |
| `typeNative` | `'button' \| 'submit' \| 'reset'`        | `'button'`  |
| `disabled`   | `boolean`                                | `false`     |
| `full`       | `boolean`                                | `false`     |
| `autofocus`  | `boolean`                                | `false`     |
| `href`       | `string \| undefined`                    | `undefined` |
| `target`     | `string \| undefined`                    | `undefined` |
| `download`   | `string \| undefined`                    | `undefined` |
| `variant`    | `'primary' \| 'secondary' \| 'tertiary'` | `'primary'` |
| `size`       | `'sm' \| 'md'`                           | `'md'`      |
| `loading`    | `boolean`                                | `false`     |
| `title`      | `string`                                 | `''`        |
| `iconLeft`   | `IconString`                             | `''`        |
| `iconRight`  | `IconString`                             | `''`        |
| `ariaLabel`  | `string`                                 | `''`        |

**Emits that MUST remain:** `click: (evt: MouseEvent) => boolean`, `mousedown: (evt: MouseEvent) => boolean`.

**Slots that MUST remain:** default slot.

**No new props MAY be added in this change.** ConfigProvider/theming props belong to Cambio 3.

#### Scenario: Props contract is identical to pre-migration

- GIVEN a TypeScript consumer that already uses `@flash-global66/g-button` with any subset of the props listed above
- WHEN the package is updated to the post-migration version
- THEN no TypeScript type errors appear and no prop validation warnings are emitted at runtime

#### Scenario: No new props introduced

- GIVEN the migrated `button.props.ts`
- WHEN its exported `buttonProps` object keys are enumerated
- THEN the set of keys is identical to the pre-migration set — no additions

#### Scenario: Emits contract preserved

- GIVEN a consumer that binds `@click` and `@mousedown` on `<g-button>`
- WHEN the post-migration component is used
- THEN both events are emitted with a `MouseEvent` argument, identical behavior to pre-migration

---

### Requirement: CSS Class Parity (Button)

The CSS classes emitted by the migrated button MUST be byte-for-byte identical to the pre-migration classes. The classes are generated by `useNamespace('button', ref('gui'))` and MUST NOT change.

**Classes that MUST be generated (non-exhaustive, but exemplary):**

| Condition            | Expected class                  |
| -------------------- | ------------------------------- |
| Root element         | `gui-button`                    |
| variant=primary      | `gui-button--variant-primary`   |
| variant=secondary    | `gui-button--variant-secondary` |
| variant=tertiary     | `gui-button--variant-tertiary`  |
| size=sm              | `gui-button--sm`                |
| size=md              | `gui-button--md`                |
| disabled=true        | `is-disabled`                   |
| loading=true         | `is-loading`                    |
| href set             | `is-href`                       |
| full=true            | `is-full`                       |
| element: content div | `gui-button__content`           |
| element: icon left   | `gui-button__icon-left`         |
| element: icon right  | `gui-button__icon-right`        |
| element: loader      | `gui-button__loader`            |
| element: dot         | `gui-button__dot`               |
| element: ripple      | `gui-button__ripple`            |
| element: title       | `gui-button__title`             |

#### Scenario: Unit test asserts every CSS class exactly

- GIVEN a Vitest test that mounts `<GButton>` with each relevant prop combination
- WHEN the rendered DOM is inspected
- THEN `wrapper.classes()` contains exactly the expected class string(s) from the table above for each combination

#### Scenario: Compiled CSS diff is empty (double red)

- GIVEN the button SCSS compiled with the OLD mixin source (element-plus/theme-chalk)
- AND the button SCSS compiled with the NEW mixin source (g-utils mixins)
- WHEN a textual diff is performed on the two compiled CSS outputs
- THEN the diff output is empty

---

### Requirement: Package.json Packaging Fields

`components/button/package.json` MUST declare the following fields after migration:

| Field                      | Required value                       |
| -------------------------- | ------------------------------------ |
| `sideEffects`              | `["**/*.css", "**/*.scss"]`          |
| `main`                     | pointing to CJS dist entry           |
| `module`                   | pointing to ESM dist entry           |
| `types`                    | pointing to `.d.ts` entry            |
| `exports["./styles.scss"]` | `"./src/styles/button.style.scss"`   |
| `exports["."]`             | `{ import, require, types }` sub-map |

#### Scenario: sideEffects prevents tree-shaking of styles

- GIVEN `components/button/package.json` with `sideEffects: ["**/*.css", "**/*.scss"]`
- WHEN a bundler processes the package
- THEN it does NOT tree-shake away the SCSS import from consuming applications

#### Scenario: Public styles.scss export resolves to new internal file

- GIVEN a consumer that imports `'@flash-global66/g-button/styles.scss'`
- WHEN the package resolver resolves the path
- THEN it resolves to `./src/styles/button.style.scss` (the new singular file)
- AND the resolved file exists on disk

#### Scenario: element-plus removed from direct imports (0 count)

- GIVEN the migrated `components/button/src/` directory
- WHEN a grep for `from 'element-plus` or `@use 'element-plus` is run across all files
- THEN the result count is zero

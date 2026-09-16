# Spec: ep-extraction-v2

> Artifact store: hybrid. Branch: `feat/ds-ep-extraction-v2`.
> All domains below are treated as NEW full specs — the only prior OpenSpec artifacts for this area (`openspec/specs/g-utils-extended/spec.md`, `openspec/changes/cambio-2-ep-extraction/`) come from an abandoned, never-merged branch and are stale/misleading (see `openspec-cleanup`). They are NOT a trustworthy baseline and are removed by this change, not extended.

## Domain: openspec-cleanup (WU-0)

### Requirement: remove-stale-openspec-artifacts

The system MUST remove the obsolete OpenSpec artifacts left by the abandoned `feat/ds-cambio-2-ep-extraction` branch before this change's other work units are considered complete, since they falsely claim finished work (g-utils/g-hooks "done", 58/58 tasks) that does not exist on `main`.

#### Scenario: stale artifacts deleted

- GIVEN untracked paths `openspec/changes/cambio-2-ep-extraction/`, `openspec/archive/2026-06-23-cambio-2-ep-extraction/`, and `openspec/specs/g-utils-extended/spec.md`
- WHEN WU-0 executes
- THEN all three paths are removed from the working tree
- AND no later phase of this change reads them as ground truth

## Domain: g-utils-extended (Modified Capability)

Purpose: extend `common/g-utils` v0.2.0 with the pure-utility gap confirmed missing by exploration. Already-present symbols (`buildProps`, `withInstall`, `isBoolean`, `isString`, `isObject`, `debugWarn`) are OUT of scope.

### Requirement: pure-utility-symbols-added

`g-utils` MUST add the following pure symbols, matching the behavior below (no Vue reactivity, no composables):

| Symbol                                          | Required behavior                                                                                      |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `isArray`/`isNumber`/`isFunction`/`isUndefined` | Pure type guard, returns `boolean`, narrows TS type                                                    |
| `isClient`                                      | `true` only when `window` is defined; safe to evaluate at SSR module load                              |
| `ensureArray<T>(val)`                           | Scalar → `[val]`; array input returned unchanged                                                       |
| `getProp(obj, path, default?)`                  | Dot-notation traversal (incl. reactive objects); returns `default`/`undefined` on missing segment      |
| `addUnit(val)`                                  | Number → `` `${val}px` ``; string passthrough                                                          |
| `throwError(scope, msg)`                        | Throws `Error` whose message contains both `scope` and `msg`                                           |
| DOM helpers                                     | class/attr/style helpers matching EP's exact per-helper behavior for consumers migrated in this change |

#### Scenario: type guard and getProp behave correctly

- GIVEN `isNumber(42)` and `getProp({a:{b:{c:42}}}, 'a.b.c')`
- WHEN both are called
- THEN `isNumber` returns `true` and `getProp` returns `42`

#### Scenario: getProp falls back and isClient is SSR-safe

- GIVEN `getProp({a:1}, 'x.y', 'fallback')` and an SSR environment without `window`
- WHEN `getProp` runs and `isClient` is evaluated
- THEN `getProp` returns `'fallback'` and `isClient` returns `false` with no `ReferenceError`

### Requirement: constants-and-types-added

`g-utils` MUST export `EVENT_CODE` (keyboard code map matching EP), `UPDATE_MODEL_EVENT` (`'update:modelValue'`), `CHANGE_EVENT` (`'change'`), `Arrayable<T>` (`T | T[]`), and `ComponentSize` (`'large' | 'default' | 'small'`).

#### Scenario: constants and types are usable and type-safe

- GIVEN `EVENT_CODE.esc` and a prop typed `ComponentSize`
- WHEN `EVENT_CODE.esc` is read and `'medium'` is assigned to the prop
- THEN the code matches EP's Escape key value and TypeScript raises a compile error for `'medium'`

### Requirement: g-utils-package-integrity-preserved

`g-utils` MUST remain `buildable:false`, source-only, resolvable via `index.ts` with no build step, and MUST NOT depend on `g-hooks`.

#### Scenario: no reverse dependency

- GIVEN the monorepo dependency graph after this change
- WHEN analyzed
- THEN no import path exists from `g-utils` to `g-hooks`

## Domain: g-hooks-package (New Capability)

Purpose: create `common/g-hooks/` for Vue composables requiring reactivity/injection context, depending on `g-utils`. Package does not exist today.

### Requirement: package-scaffold

The package MUST be source-only (`buildable:false`), export `.` → `index.ts`, declare `@flash-global66/g-utils` as a dependency and `vue` as a peerDependency.

#### Scenario: resolves without build

- GIVEN a consumer imports a hook from `@flash-global66/g-hooks`
- WHEN TypeScript resolves it
- THEN the source resolves directly with no build artifact required

### Requirement: useId-ssr-safe

`useId()` MUST generate a unique per-instance ID, stable across SSR and client hydration, using the algorithm copied EXACTLY from EP (not reimplemented) to avoid behavioral drift. Callable only inside `setup()`.

#### Scenario: SSR hydration stability and uniqueness

- GIVEN a component using `useId()` rendered on the server then hydrated, and a second component mounted alongside it
- WHEN IDs are compared
- THEN the server/client ID for the first component matches exactly, and the two components' IDs differ

### Requirement: state-reading-composables

`useGlobalSize()` MUST return a computed `Ref<ComponentSize>` from the DS global size provider, defaulting to `'default'` without a provider. `useProp<T>(propName)` MUST return a reactive computed `Ref<T>` for the named prop of the current instance. Both callable only inside `setup()`.

#### Scenario: default size and reactive prop read

- GIVEN no DS provider in the app, and a component whose prop `size` changes value
- WHEN `useGlobalSize()` is called and `useProp('size')` is read after the change
- THEN the size ref is `'default'` and the prop ref reflects the new value on next tick

### Requirement: useFormItem-copied-algorithm

`useFormItem` MUST replicate EP's exact inject-key and validation-state algorithm to preserve behavioral compatibility for form-context-aware components.

#### Scenario: inject key compatibility

- GIVEN a `g-form` ancestor providing form context
- WHEN a descendant calls `useFormItem()`
- THEN it reads the same context shape (disabled/size/validate state) the EP-based version exposed

### Requirement: no-reverse-dependency

`g-hooks` MUST NOT be imported by `g-utils`.

#### Scenario: dependency direction enforced

- GIVEN the dependency graph
- WHEN analyzed
- THEN no edge exists from `g-utils` to `g-hooks`

## Domain: g-form-migration

Purpose: migrate the 8 files under `components/form/src/**` off direct EP imports, and fix the `icon-button` bug.

### Requirement: zero-ep-imports-in-form

No file under `components/form/src/` MUST import any specifier starting with `element-plus`.

#### Scenario: grep audit passes

- GIVEN the migrated `g-form` source
- WHEN `grep -r 'element-plus' components/form/src/` runs
- THEN zero matches are returned

### Requirement: useFormItem-api-stability

The public API (params, return shape, inject keys) of `components/form/src/hooks/use-form-item.ts`'s `useFormItem` MUST be unchanged after migration.

#### Scenario: consumers compile unchanged

- GIVEN a component outside `g-form` importing `useFormItem`
- WHEN the migration lands
- THEN it compiles without type errors and runtime behavior is unchanged

### Requirement: icon-button-bug-fix

`components/icon-button/src/use-icon-button.ts` MUST import `useFormItem` from `@flash-global66/g-form`, never from `element-plus`.

#### Scenario: import fixed and form context functional

- GIVEN a `g-form` with `disabled:true` containing an `icon-button`
- WHEN `icon-button` reads context via the corrected `useFormItem` import
- THEN the import specifier is not `element-plus` and `icon-button` observes `disabled:true`

### Requirement: g-form-dependency-declaration

`g-form`'s package manifest MUST declare `@flash-global66/g-utils` and `@flash-global66/g-hooks` as dependencies.

#### Scenario: manifest reflects new deps

- GIVEN `components/form/package.json` post-migration
- WHEN inspected
- THEN both packages appear as dependencies

## Domain: components-migration

Purpose: migrate the remaining in-scope `src/**` packages (subset of the 39; excludes the 7 flat-structure islands) that consume only EP utilities/composables/constants, not full EP components.

### Requirement: zero-ep-imports-per-migrated-package

For every migrated package, no file under `components/<pkg>/src/**` nor its root barrel `index.ts` MUST import any specifier starting with `element-plus`.

#### Scenario: grep audit passes per package

- GIVEN a migrated package
- WHEN `grep -r "from ['\"]element-plus" components/<pkg>/` runs
- THEN zero matches are returned

### Requirement: public-api-and-output-unchanged

Migrated components MUST preserve identical props, emits, slots, component name, and `useNamespace`-generated CSS class names versus pre-migration.

#### Scenario: props and class output identical

- GIVEN a migrated component's props type and rendered class output before and after migration (fixed props)
- WHEN compared
- THEN no prop is added/removed/renamed/retyped and class names are byte-identical

### Requirement: island-packages-excluded

The 7 flat-structure packages wrapping whole EP components (`badge`, `menu`, `config-provider`, `popover`, `radio-group`, `form-item`, `skeleton`) MUST NOT be modified by this change.

#### Scenario: islands untouched

- GIVEN the 7 island packages
- WHEN this change is applied
- THEN their existing `element-plus` imports remain unchanged

## Domain: eslint-ep-import-guard (New Capability)

Purpose: prevent new `element-plus` imports in guarded paths, landed only after migration is verified clean.

### Requirement: no-restricted-imports-rule

ESLint MUST error on any import specifier equal to `element-plus` or matching `element-plus/*` under `components/*/src/**` and `common/*/src/**`.

#### Scenario: violation errors, allowed imports pass

- GIVEN the rule active
- WHEN a guarded file imports `from 'element-plus'`, and another guarded file imports from `@flash-global66/g-utils`
- THEN ESLint reports an error for the first and no error for the second

### Requirement: island-override-exclusion

The rule MUST include a glob override excluding the 7 island packages so their legitimate EP component imports are not blocked.

#### Scenario: island import not blocked

- GIVEN the override configured for the 7 island package paths
- WHEN a file there imports `element-plus`
- THEN ESLint reports no error

### Requirement: guard-lands-after-migration

The guard MUST be added only after `g-utils`, `g-hooks`, `g-form`, and in-scope component migrations are complete and lint-clean, per the proposal's sequencing.

#### Scenario: lint passes at guard activation

- GIVEN the guard is added as the final step
- WHEN `yarn lint` runs with `--max-warnings 0`
- THEN it passes with zero errors

## Non-Goals (apply to all domains above)

- The 7 flat-structure island packages (`badge`, `menu`, `config-provider`, `popover`, `radio-group`, `form-item`, `skeleton`) — out of scope, not reimplemented.
- Reimplementing whole EP components anywhere.
- Removing `element-plus` from `peerDependencies` where a package legitimately wraps an EP component.
- Untriaged EP-heavy components (`select`, `table`, `date-picker`, etc.) unless found utility-only during task execution.

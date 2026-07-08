# Design: EP Extraction v2

> Artifact store: hybrid. Repo root: `global-design-system/`. Branch: `feat/ds-ep-extraction-v2`.
> Baseline: `g-utils` v0.2.0 (source-only, `buildable:false`, zero EP imports). `g-hooks` does not exist yet.

## Technical Approach

Extend the existing `g-utils` v0.2.0 layout with the missing utility/type/constant gap (new files only — never reinvent `buildProps`, `isBoolean`, `isString`, `isObject`, `debugWarn`, `withInstall`, `useNamespace` which already exist). Create a new source-only `g-hooks` package for stateful composables (`useId`, `useGlobalSize`, `useProp`). Migrate `g-form` (8 files) off EP onto `g-utils`/`g-hooks`, and export its OWN `useFormItem` so `icon-button` can drop the EP import. Apply a repeatable per-component migration template to the remaining utility-only packages. Land the ESLint `no-restricted-imports` guard LAST. All copied algorithms are byte-faithful to EP to avoid behavior drift.

## Architecture Decisions

| Decision                           | Choice                                                                                     | Alternatives rejected                                       | Rationale                                                                                                                                                                                                                                                            |
| ---------------------------------- | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Where do stateful composables live | New `common/g-hooks` package, separate from `g-utils`                                      | Put them inside `g-utils`                                   | `g-utils` is pure/tree-shakeable; composables carry `provide/inject` state. Screaming Architecture — keep pure utils and stateful hooks in distinct packages.                                                                                                        |
| `g-hooks` build style              | Source-only, `buildable:false`, mirrors `g-utils` package.json                             | Buildable Vite package                                      | Consistency with `g-utils`; consumers compile from source; no dist to maintain.                                                                                                                                                                                      |
| Layering direction                 | `g-hooks` depends on `g-utils`; `g-utils` never imports `g-hooks`                          | Bidirectional                                               | One-way dependency prevents cycles.                                                                                                                                                                                                                                  |
| Home of `useFormItem`              | Stays in `g-form`, exported from its public `index.ts` (NOT g-hooks)                       | Put `useFormItem` in `g-hooks` (as the old proposal listed) | `useFormItem` reads form-item injection context, so it is form-domain-coupled. Since `g-form` already depends on `g-hooks`, placing `useFormItem` in `g-hooks` would force `g-hooks → g-form` and create a cycle. Keeping it in `g-form` is the only acyclic option. |
| `useId` implementation             | Copy EP algorithm exactly (`getCurrentInstance` counter + `idInjectionKey` provide/inject) | `nanoid`/`uuid`/`crypto.randomUUID`                         | Random IDs break SSR hydration (server/client mismatch). EP's counter-based injection keeps IDs deterministic across render.                                                                                                                                         |
| `getProp` / `composeEventHandlers` | Copy EP impl exactly, cover with dedicated tests                                           | Rewrite dot-notation resolver                               | Dot-path get/set and default-prevented chaining have subtle edge cases; drift causes silent form-validation bugs.                                                                                                                                                    |
| ESLint guard timing                | Added LAST, after all migration is verified clean                                          | Add first as warning                                        | Repo passes `yarn lint --max-warnings 0` only once code is clean; landing early would fail CI mid-migration.                                                                                                                                                         |

## File Changes

### `g-utils` — new files (follow existing `src/utils/*.util.ts`, `src/types/*.type.ts` convention)

| File                                             | Action | Symbols                                                                                              |
| ------------------------------------------------ | ------ | ---------------------------------------------------------------------------------------------------- |
| `common/g-utils/src/utils/array.util.ts`         | Create | `isArray` (=`Array.isArray`), `ensureArray<T>`                                                       |
| `common/g-utils/src/utils/number.util.ts`        | Create | `isNumber`, `addUnit(value?, defaultUnit='px')`                                                      |
| `common/g-utils/src/utils/function.util.ts`      | Create | `NOOP`, `isFunction`, `composeEventHandlers`                                                         |
| `common/g-utils/src/utils/object.util.ts`        | Create | `isUndefined`, `isPropAbsent`, `hasOwn`, `getProp`                                                   |
| `common/g-utils/src/utils/dom.util.ts`           | Create | `isClient`, `isElement`, plus dom helpers needed by consumers                                        |
| `common/g-utils/src/utils/error.util.ts`         | Modify | Add `throwError(scope, msg): never` alongside existing `debugWarn`                                   |
| `common/g-utils/src/constants/event.constant.ts` | Create | `UPDATE_MODEL_EVENT`, `CHANGE_EVENT`, `EVENT_CODE` (matches `.constant.ts` convention from g-button) |
| `common/g-utils/src/types/utils.type.ts`         | Modify | Add `Arrayable<T> = T \| T[]`                                                                        |
| `common/g-utils/src/types/component.type.ts`     | Create | `ComponentSize = 'large' \| 'default' \| 'small'`                                                    |
| `common/g-utils/src/index.ts`                    | Modify | Re-export all new modules                                                                            |

`package.json` stays `buildable:false` v0.2.0 (bump only if the release flow requires it).

### `g-hooks` — new package (mirror `g-utils` shape)

```
common/g-hooks/
├── index.ts              # export * from './src/index'
├── package.json          # name @flash-global66/g-hooks, v0.1.0, buildable:false,
│                         # type module, exports {".":"./index.ts"}, files [index.ts, src],
│                         # peerDeps: vue ^3.2.0 ; deps: @flash-global66/g-utils ^0.2.0
├── src/
│   ├── index.ts          # barrel
│   └── composables/
│       ├── useId.ts       # copy EP + idInjectionKey provide/inject (SSR-safe)
│       ├── useGlobalSize.ts
│       └── useProp.ts     # getCurrentInstance proxy; throwError outside setup
└── tests/composables/*.spec.ts
```

### `g-form` migration (8 files, in order)

| File                             | EP imports today                                                                                            | Replace with                                          |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| `form.ts`                        | `buildProps, definePropType, isArray, isBoolean, isString` (es/utils)                                       | `@flash-global66/g-utils`                             |
| `form-item.ts`                   | `buildProps, definePropType`, type `Arrayable` (es/utils)                                                   | `@flash-global66/g-utils`                             |
| `Form.vue`                       | `debugWarn, isFunction` (es/utils), `useNamespace` (barrel), type `Arrayable`                               | `@flash-global66/g-utils`                             |
| `form-item.vue`                  | `ensureArray, getProp, isArray, isFunction, isString, Arrayable` (es/utils); `useId, useNamespace` (barrel) | utils/`useNamespace` → `g-utils`; `useId` → `g-hooks` |
| `utils.ts`                       | `debugWarn, ensureArray`, type `Arrayable`                                                                  | `@flash-global66/g-utils`                             |
| `types.ts`                       | type `Arrayable` (keep `async-validator` — not EP)                                                          | `@flash-global66/g-utils`                             |
| `hooks/use-form-item.ts`         | `useId`                                                                                                     | `@flash-global66/g-hooks`                             |
| `hooks/use-form-common-props.ts` | `useGlobalSize, useProp`, type `ComponentSize`                                                              | hooks → `g-hooks`; `ComponentSize` → `g-utils`        |

`form/package.json`: add `@flash-global66/g-hooks ^0.1.0` dep. Ensure `g-form`'s public `index.ts` exports `useFormItem`. Migrate `Arrayable` type in a single commit to avoid mixed type identities. `form.styles.scss` `@use "element-plus/theme-chalk/..."` is SCSS (design-base), OUT of scope — the lint guard targets JS/TS only.

Then `icon-button/src/use-icon-button.ts` line 3: `import { useFormItem } from "element-plus"` → `from "@flash-global66/g-form"` (icon-button already declares `g-form` as peerDep).

### Repeatable component template (remaining utility-only packages)

1. Grep the package's `src/**` for `element-plus` and `element-plus/es/...` import specifiers.
2. Map each symbol to its new home (utils/types/constants → `g-utils`; `useId`/`useGlobalSize`/`useProp` → `g-hooks`).
3. Collapse all imports into a single `@flash-global66/g-utils` barrel import (+ `g-hooks` only if a stateful hook is used).
4. Add the missing `dependencies` entry to the package's `package.json`.
5. Verify: zero `from ['"]element-plus` in that package's `src/**`; public API (props/emits/slots) unchanged; build passes.
   Triage guard: if a package turns out to embed a real EP **component** (e.g. `select`, `table`, `date-picker`), move it to OUT scope instead of forcing migration.

### ESLint guard (`.eslintrc.cjs`, added last)

Add an `overrides` entry (legacy CJS config already in use):

```js
overrides: [
  {
    files: ['components/*/src/**', 'common/*/src/**'],
    excludedFiles: [
      'components/badge/**',
      'components/menu/**',
      'components/config-provider/**',
      'components/popover/**',
      'components/radio-group/**',
      'components/form-item/**',
      'components/skeleton/**',
    ],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: 'element-plus',
              message: 'Use @flash-global66/g-utils or g-hooks.',
            },
          ],
          patterns: [
            {
              group: ['element-plus/*'],
              message:
                'No element-plus subpaths; use @flash-global66/g-utils / g-hooks.',
            },
          ],
        },
      ],
    },
  },
];
```

The 7 islands are flat-structure (no `src/`), so `components/*/src/**` already excludes them; `excludedFiles` is defensive belt-and-suspenders. Rule affects JS/TS only, never SCSS `@use`.

## Data Flow / Dependency Order

```
WU-0 delete stale openspec artifacts
   └─▶ g-utils (extend)  ──▶  g-hooks (new, deps g-utils)
                                   │
                                   ▼
                              g-form (migrate 8 files + export useFormItem)
                                   │
                    ┌──────────────┴───────────────┐
                    ▼                               ▼
             icon-button (import fix)      remaining utility-only components
                                   │
                                   ▼
                          ESLint guard (LAST)
```

Guard goes last so migrated code already passes `--max-warnings 0`; landing it earlier fails CI while migration is in flight.

## Testing Strategy

| Layer               | What to test                                                                                                                                                                      | Approach                                                      |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| Unit — g-utils      | `getProp` nested/absent paths, `ensureArray(undefined) → []`, `addUnit('') → ''` / number → `px` / string passthrough, `composeEventHandlers` defaultPrevented chain, type guards | Vitest pure                                                   |
| Unit — g-hooks      | `useId` uniqueness + SSR injection sync (no hydration mismatch), `useProp`/`useGlobalSize` inside vs outside `setup()` (throwError)                                               | Vitest + `@vue/test-utils`                                    |
| Equivalence         | Migrated symbols behave identically to EP originals (copy-exact)                                                                                                                  | Assert same outputs on the same inputs the EP version handled |
| Regression (g-form) | Existing `g-form` + `icon-button` specs stay green; add render test for `form-item.vue` using `g-hooks` `useId` and form-item validation via `getProp`                            | Run existing suites unchanged, no snapshot churn              |
| Guard               | Zero `from ['"]element-plus` under migrated `src/**`; `yarn build` all 41 buildable packages; `yarn lint --max-warnings 0` passes                                                 | grep + build + lint in CI                                     |

## Risks & Mitigation

| Risk                                                                                               | Mitigation                                                                                         |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Copied EP algorithms drift (`useId` SSR, `getProp` dot-notation, `composeEventHandlers`)           | Copy byte-for-byte, no "improvements"; dedicated equivalence tests per symbol                      |
| `g-form` regression (transversal dep for `icon-button` and others)                                 | Migrate `g-form` early, run consumer specs immediately after                                       |
| `useId` hydration mismatch                                                                         | Use EP's `idInjectionKey` provide/inject counter, never random IDs                                 |
| Singleton coexistence (`useGlobalSize`/id injection key while EP still resolvable in node_modules) | Reuse EP's conceptual provide/inject key so a single singleton is shared; verify no double-provide |
| Dropping `element-plus/es/...` subpath imports breaks tree-shaking or types                        | Route every symbol through the single `g-utils`/`g-hooks` barrel; verify build + types             |
| Island-exclusion glob wrong → guard blocks unrelated work                                          | Land guard last; flat islands already excluded by `*/src/**`; `excludedFiles` as backup            |

## Open Questions

- [ ] Bump `g-utils` to v0.3.0 on extension, or keep v0.2.0? (assume keep unless release flow requires bump)
- [ ] Confirm every remaining `src/**` package is utility-only vs. embeds a real EP component (triage during tasks/apply; move component-wrappers to OUT scope)
- [ ] Confirm `g-form`'s public `index.ts` currently exports `useFormItem` or needs the export added (assume add)

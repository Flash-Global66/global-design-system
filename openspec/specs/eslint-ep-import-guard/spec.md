# Spec: ESLint element-plus Import Guard

> Artifact store: hybrid. Implemented in changes `ep-extraction-v2` and `ep-extraction-v3`. Branches: `feat/ds-ep-extraction-v2`, `feat/ds-ep-extraction-v3-wu3`, `feat/ds-ep-extraction-v3-wu5`.
> This spec documents the ESLint guard rule as implemented and verified.

## Purpose

The ESLint `no-restricted-imports` guard prevents new direct imports from `element-plus` in migrated package source code and public barrels, enforcing the architecture where components use `@flash-global66/g-utils` and `@flash-global66/g-hooks` instead of element-plus internals.

## Capabilities

### Rule Configuration

**Guarded Paths**

- `components/*/src/**` — Component source files
- `common/*/src/**` — Common package source files
- `components/*/index.ts` — Component public barrel exports

**Blocked Imports**

- `from 'element-plus'` — Exact match
- `from 'element-plus/*'` — Pattern match (all subpaths)

**Excluded Packages (No Guard Applied)**

- **8 Island packages** (permanent — wrap real element-plus components): `badge`, `menu`, `config-provider`, `popover`, `radio-group`, `form-item`, `skeleton`, `infinite-scroll`
- **17 Deferred packages + `input-number`** (need hooks/utilities not yet extracted; target of `ep-extraction-v4`): `inline`, `input-tag`, `tooltip`, `toast`, `time-picker`, `table`, `slot`, `select`, `scrollbar`, `popper`, `pagination`, `input-number`, `focus-trap`, `dropdown`, `dialog`, `date-picker`, `collapse`, `overlay`

**Migrated Packages (guard active, no longer excluded — as of `ep-extraction-v3`)**

- `checkbox`, `radio`, `switch`, `segmented`, `input` — removed from `excludedFiles`; any new `element-plus` import in these packages now errors

## Requirements

### Requirement: no-restricted-imports-rule

ESLint MUST error on any import specifier matching `element-plus` or `element-plus/*` in guarded paths.

#### Scenario: violation errors, allowed imports pass

- GIVEN the rule active in `components/quote/src/Quote.vue` and `components/quote/index.ts`
- WHEN a guarded file imports `from 'element-plus'` and another imports from `@flash-global66/g-utils`
- THEN ESLint reports error `'element-plus' import is restricted` for the first and no error for the second

### Requirement: island-override-exclusion

The rule MUST include exclusions for the 8 permanent island packages and the deferred packages not yet migrated off element-plus internals, so their legitimate element-plus imports are not blocked. As of `ep-extraction-v3`, `checkbox`, `radio`, `switch`, `segmented`, and `input` are migrated and MUST NO LONGER appear in `excludedFiles` — they are guarded like any other component source path. The remaining 17 deferred packages and `input-number` (deferred to `ep-extraction-v4`) MUST stay excluded.

#### Scenario: island import not blocked

- GIVEN the guard active and exclusions configured for island/deferred packages
- WHEN a file in `components/badge/index.ts` (island) imports `from 'element-plus'`
- THEN ESLint reports no error

#### Scenario: migrated packages are no longer excluded

- GIVEN `checkbox`, `radio`, `switch`, `segmented`, and `input` removed from `excludedFiles`
- WHEN a file under `components/checkbox/src/**` imports `from 'element-plus'`
- THEN ESLint reports error `'element-plus' import is restricted`

#### Scenario: input-number stays excluded

- GIVEN `input-number` is deferred to `ep-extraction-v4` and remains in `excludedFiles`
- WHEN a file under `components/input-number/src/**` imports `from 'element-plus'`
- THEN ESLint reports no error

### Requirement: guard-lands-after-migration

The guard MUST be added only after g-utils, g-hooks, g-form, and in-scope component migrations are complete and lint-clean.

#### Scenario: lint passes at guard activation

- GIVEN all migration work units complete
- WHEN the guard is added as the final step
- THEN `yarn lint` runs with `--max-warnings 0` and passes with zero errors

## Configuration

The rule is configured in `.eslintrc.cjs` under `overrides`:

```javascript
{
  files: [
    'components/*/src/**',
    'common/*/src/**',
    'components/*/index.ts'
  ],
  excludedFiles: [
    // 8 islands (wrap real EP components) — permanent
    'components/badge/**',
    'components/menu/**',
    'components/config-provider/**',
    'components/popover/**',
    'components/radio-group/**',
    'components/form-item/**',
    'components/skeleton/**',
    'components/infinite-scroll/**',
    // 17 deferred packages + input-number (need hooks/utilities not built yet — target of ep-extraction-v4)
    'components/inline/**',
    'components/input-tag/**',
    'components/tooltip/**',
    'components/toast/**',
    'components/time-picker/**',
    'components/table/**',
    'components/slot/**',
    'components/select/**',
    'components/scrollbar/**',
    'components/popper/**',
    'components/pagination/**',
    'components/input-number/**',
    'components/focus-trap/**',
    'components/dropdown/**',
    'components/dialog/**',
    'components/date-picker/**',
    'components/collapse/**',
    'components/overlay/**',
    // checkbox, radio, switch, segmented, input REMOVED here as of ep-extraction-v3 — now guarded
  ],
  rules: {
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'element-plus',
            message: 'Use @flash-global66/g-utils or @flash-global66/g-hooks instead of element-plus internals'
          }
        ],
        patterns: [
          {
            group: ['element-plus/*'],
            message: 'Use @flash-global66/g-utils or @flash-global66/g-hooks instead of element-plus internals'
          }
        ]
      }
    ]
  }
}
```

## Non-Goals

- Guarding SCSS/style imports (rule applies to JS/TS only)
- Preventing legitimate element-plus component wrapping in island packages
- Modifying existing element-plus imports in deferred/untouched packages

## References

- Change: `ep-extraction-v2` (proposal #239, spec #240, design #241, tasks #242, verify-report #247)
- Change: `ep-extraction-v3` (proposal #252, spec #257, design #258, tasks #260, verify-report #268) — removed `checkbox`/`radio`/`switch`/`segmented`/`input` from `excludedFiles`
- Archive: `openspec/archive/2026-07-08-ep-extraction-v2/`, `openspec/archive/2026-07-10-ep-extraction-v3/`
- Configuration file: `.eslintrc.cjs`

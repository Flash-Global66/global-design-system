# Delta for eslint-ep-import-guard

## MODIFIED Requirements

### Requirement: island-override-exclusion

The rule MUST include exclusions for the 8 permanent island packages and the packages not yet migrated off element-plus internals, so their legitimate element-plus imports are not blocked. As of `ep-extraction-v4`, `focus-trap`, `slot`, `overlay`, `scrollbar`, `popper`, `tooltip`, `select`, `dropdown`, `dialog`, `date-picker`, `time-picker`, `input-tag`, and `inline` are migrated and MUST NO LONGER appear in `excludedFiles` — they are guarded like any other component source path. `toast`, `table`, `pagination`, `collapse`, and `input-number` remain excluded (deferred to `ep-extraction-v5` or beyond).
(Previously: only `checkbox`/`radio`/`switch`/`segmented`/`input` were migrated as of `ep-extraction-v3`; the 13 v4 packages plus `toast`/`table`/`pagination`/`collapse`/`input-number` were all still excluded.)

#### Scenario: island import not blocked

- GIVEN the guard active and exclusions configured for island/deferred packages
- WHEN a file in `components/badge/index.ts` (island) imports `from 'element-plus'`
- THEN ESLint reports no error

#### Scenario: v4-migrated packages are no longer excluded

- GIVEN the 13 v4 packages removed from `excludedFiles`
- WHEN a file under `components/dropdown/src/**` (or any of the other 12) imports `from 'element-plus'`
- THEN ESLint reports error `'element-plus' import is restricted`

#### Scenario: remaining deferred packages stay excluded

- GIVEN `table`, `pagination`, `collapse`, and `input-number` are deferred to `ep-extraction-v5`, and `toast` remains unscheduled
- WHEN a file under any of their `src/**` imports `from 'element-plus'`
- THEN ESLint reports no error

## ADDED Requirements

### Requirement: exclude-removed-per-work-unit

Each of the 13 v4-migrated packages' `excludedFiles` entries MUST be removed individually, at that package's own migration work unit boundary, not batched into one edit at the end of the slice.

#### Scenario: lint passes at each package's guard update

- GIVEN one of the 13 v4 packages finishes migration and its unit tests are green
- WHEN `.eslintrc.cjs` is updated to remove that package's exclude
- THEN `yarn lint --max-warnings 0` passes immediately after that update, before the next package's work unit starts

## Non-Goals (v4 delta)

- Guarding SCSS/style imports — unchanged from base spec
- Removing `toast`, `table`, `pagination`, `collapse`, or `input-number` from `excludedFiles` in this change

## References

- Change: `ep-extraction-v4` (proposal obs #275)
- Base spec: `openspec/specs/eslint-ep-import-guard/spec.md`

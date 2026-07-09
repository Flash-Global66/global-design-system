# Delta for eslint-ep-import-guard

## MODIFIED Requirements

### Requirement: island-override-exclusion

The rule MUST include exclusions for the 8 permanent island packages and the deferred packages that have not yet been migrated off element-plus internals, so their legitimate element-plus imports are not blocked. After this change, `excludedFiles` MUST NO LONGER list `checkbox`, `radio`, `switch`, `segmented`, or `input` — these 5 packages are migrated and become guarded like any other component source path. The remaining deferred packages and `input-number` (explicitly deferred to `ep-extraction-v4`) MUST stay excluded.

(Previously: exclusions covered the 8 island packages and all deferred packages, including `checkbox`, `radio`, `switch`, `segmented`, and `input`.)

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

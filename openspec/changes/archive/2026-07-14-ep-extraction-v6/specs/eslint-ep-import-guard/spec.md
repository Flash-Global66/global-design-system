# Delta for eslint-ep-import-guard

> Artifact store: hybrid. Change: `ep-extraction-v6`. Base spec:
> `openspec/specs/eslint-ep-import-guard/spec.md`.

## MODIFIED Requirements

### Requirement: island-override-exclusion

The rule MUST include exclusions only for packages not yet migrated off
element-plus internals, so their legitimate element-plus imports are not
blocked. As of `ep-extraction-v4`, `focus-trap`, `slot`, `overlay`,
`scrollbar`, `popper`, `tooltip`, `select`, `dropdown`, `dialog`,
`date-picker`, `time-picker`, `input-tag`, and `inline` are migrated and
MUST NOT appear in `excludedFiles`. As of `ep-extraction-v6`, the former
"8 permanent islands" — `badge`, `menu`, `config-provider`, `popover`,
`radio-group`, `form-item`, `skeleton`, `infinite-scroll` — are ALSO migrated
and MUST NO LONGER appear in `excludedFiles`; no package retains a
"permanent island" classification after this change. `toast`, `table`,
`pagination`, `collapse`, and `input-number` remain excluded (still
deferred, out of scope for `ep-extraction-v6`).
(Previously: classified those 8 packages as permanent islands exempt from
the guard forever; v6 reverses that and migrates all 8.)

#### Scenario: v4-migrated packages are no longer excluded

- GIVEN the 13 v4 packages removed from `excludedFiles`
- WHEN a file under `components/dropdown/src/**` (or any of the other 12)
  imports `from 'element-plus'`
- THEN ESLint reports error `'element-plus' import is restricted`

#### Scenario: v6-migrated packages are no longer excluded

- GIVEN the 8 former "permanent island" packages removed from `excludedFiles`
- WHEN a file under `components/badge/src/**` (or any of the other 7)
  imports `from 'element-plus'`
- THEN ESLint reports error `'element-plus' import is restricted`

#### Scenario: remaining deferred packages stay excluded

- GIVEN `table`, `pagination`, `collapse`, `input-number`, and `toast`
  remain deferred
- WHEN a file under any of their `src/**` imports `from 'element-plus'`
- THEN ESLint reports no error

## ADDED Requirements

### Requirement: v6-exclude-removed-per-work-unit

Each of the 8 v6-migrated packages' `excludedFiles` entries MUST be removed
individually, at that package's own migration work unit boundary, not
batched. `config-provider`'s entry MUST be the last one removed, after every
other v6 island's entry, matching the proposal's sequencing (config-provider
gates root EP removal).

#### Scenario: lint passes at each package's guard update

- GIVEN one of the 8 v6 packages finishes migration and its unit tests are
  green
- WHEN `.eslintrc.cjs` is updated to remove that package's exclude
- THEN `yarn lint --max-warnings 0` passes immediately after that update,
  before the next package's work unit starts

#### Scenario: config-provider exclude removed last

- GIVEN the other 7 v6 packages already removed from `excludedFiles`
- WHEN `config-provider`'s exclude entry is removed
- THEN it is the final `excludedFiles` edit among the 8, immediately
  preceding root `element-plus` removal

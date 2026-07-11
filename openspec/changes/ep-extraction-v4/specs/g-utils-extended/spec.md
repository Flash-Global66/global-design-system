# Delta for g-utils-extended

## ADDED Requirements

### Requirement: popper-overlay-utils-added

`g-utils` MUST export the following pure helpers/types/directives, added in `ep-extraction-v4`, each replicating its element-plus algorithm exactly: `castArray`, `getStyle`, `composeRefs`, `isFocusable`, `iconPropType`, `PatchFlags`, and the `ClickOutside` directive.

#### Scenario: new utils resolve and behave identically to EP

- GIVEN a consumer importing one of the new v4 utilities from `@flash-global66/g-utils`
- WHEN called with the same inputs as its pre-migration element-plus call
- THEN it resolves without a build step and returns/behaves identically

#### Scenario: ClickOutside directive fires on outside interaction only

- GIVEN `ClickOutside` bound to an element inside a mounted component
- WHEN a click occurs outside the bound element versus inside it
- THEN the directive's callback fires only for the outside click

### Requirement: v4-utils-unit-tested

Every utility/directive added in `ep-extraction-v4` MUST ship a Vitest unit test file. Tests MUST be unit-only (no DOM/integration beyond directive-local assertions), and the full suite MUST pass via `yarn test:run`.

#### Scenario: full suite green after additions

- GIVEN all v4 utilities implemented with unit tests
- WHEN `yarn test:run` executes
- THEN all tests pass, including the new v4 utility tests

## Non-Goals (v4 delta)

- Depending on g-hooks or g-form from g-utils — unchanged from base spec
- Table-family utilities — deferred to `ep-extraction-v5`

## References

- Change: `ep-extraction-v4` (proposal obs #275)
- Base spec: `openspec/specs/g-utils-extended/spec.md`

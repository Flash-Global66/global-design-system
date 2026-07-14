# Delta for scss-token-foundation

> Artifact store: hybrid. Change: `ep-extraction-v6`. Base spec:
> `openspec/specs/scss-token-foundation/spec.md`.

## MODIFIED Requirements

### Requirement: Entangled Islands Remain Deferred

The 6 previously-deferred entangled islands (`badge`, `menu`, `popover`,
`radio-group`, `form-item`, `skeleton`) are migrated off `element-plus` in
`ep-extraction-v6`. Their full-component stylesheets MUST now be DS-owned
(no `element-plus` `@use`/`@forward` reference), and MUST preserve
byte-exact CSS parity per this spec's Byte-Exact CSS Parity requirement.
(Previously: deferred these 6 islands' full stylesheets, only allowing their
shared-mixin dependency to be repointed when byte-exact.)

#### Scenario: Previously-deferred island stylesheet fully migrated

- GIVEN one of the 6 previously-deferred islands
- WHEN its `.scss` is migrated in `ep-extraction-v6`
- THEN it contains no `element-plus` reference and compiles to byte-identical
  CSS versus its pre-migration output

## ADDED Requirements

### Requirement: Config-Provider Owns Brand Emission (Closes Task 4.5)

config-provider's JS bridge retirement (`provideGlobalConfig`) in
`ep-extraction-v6` MUST complete this spec's deferred brand-color emission
task: DS-owned code MUST be the sole source of brand-color `--gui-*` custom
properties, with no `element-plus` fallback path remaining anywhere in the
emission chain.

#### Scenario: Deferred brand-emission task closed

- GIVEN config-provider fully migrated off element-plus in
  `ep-extraction-v6`
- WHEN brand-color `--gui-*` custom properties are generated
- THEN they are emitted entirely by DS-owned code, with zero element-plus
  involvement, satisfying the task deferred at `scss-token-foundation`
  archival

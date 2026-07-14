# Archive Report: ep-extraction-v6

> **Status**: COMPLETE (with intentionally deferred WU12, out of scope)  
> **Date**: 2026-07-14  
> **Change**: ep-extraction-v6 — Close out the element-plus removal initiative  
> **Artifact Store**: hybrid (engram + openspec files)

## Executive Summary

`ep-extraction-v6` successfully closes WU1–WU11 (all 9 DS package migrations + root EP removal + front-b2b version bumps), completing the DS-side element-plus elimination. WU12 (front-b2b EP removal) is explicitly deferred per user decision, pending systematic audit of 32 DS packages still bridging to element-plus at front-b2b's current pinned versions — a significantly larger scope than originally scoped.

## Final Status: WU1–WU11 Complete, WU12 Intentionally Deferred

| Work Unit | Title                     | Status      | PR(s)                                       | Notes                                                     |
| --------- | ------------------------- | ----------- | ------------------------------------------- | --------------------------------------------------------- |
| WU1       | badge                     | ✅ DONE     | #294                                        | Native render + ported SCSS                               |
| WU2       | radio-group               | ✅ DONE     | #295                                        | Provide/inject + latent-bug fix                           |
| WU3       | skeleton + skeleton-item  | ✅ DONE     | #296                                        | Animation state ports                                     |
| WU4       | infinite-scroll           | ✅ DONE     | #297                                        | Directive port                                            |
| WU5       | form-item                 | ✅ DONE     | #298                                        | Validation core coupling + context-key fix                |
| WU6       | popover                   | ✅ DONE     | #299                                        | g-tooltip render + interop fixes                          |
| WU7       | menu (×4)                 | ✅ DONE     | #300                                        | Shared context module + provide/inject                    |
| WU8       | time-picker clearIcon     | ✅ DONE     | #301                                        | Icon swap + prop-type widening                            |
| WU9       | config-provider           | ✅ DONE     | #302                                        | DS-native provider + task 4.5 (brand emission)            |
| WU10      | root EP removal + cleanup | ✅ DONE     | #303                                        | Package.json/yarn.lock + test imports                     |
| WU11      | front-b2b version bumps   | ✅ DONE     | 2 commits (`ander/update/version-packages`) | 8× deps bumped; `g-input-number` transitive fix           |
| WU12      | front-b2b EP removal      | ⏸️ DEFERRED | —                                           | Blocked on 32-package SCSS-bridge audit; not scoped to v6 |

**All implementation tasks WU1–WU11 are checked `[x]` in `tasks.md`.** WU12 is documented as deliberately deferred with full root-cause analysis (32 packages still bridge to element-plus at front-b2b's pinned versions; removing element-plus breaks SCSS compilation until all 32 are systematically bumped).

## Specs Synced to Main

| Domain                    | Action         | Details                                                                                                                                   |
| ------------------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| element-plus-independence | NEW CAPABILITY | 146-line spec describing the final 9-package migration + root removal + WU11 cleanup; WU12 deferred to v7                                 |
| eslint-ep-import-guard    | MODIFIED       | Removed "permanent island" classification for all 8 v6 packages; added v6-exclude-removed-per-work-unit requirement; updated References   |
| scss-token-foundation     | MODIFIED       | Changed "Entangled Islands Remain Deferred" to "Fully Migrated"; added "Config-Provider Owns Brand Emission" requirement closing task 4.5 |

## Archive Contents

- ✅ proposal.md — Intent, scope, approach, risks, success criteria
- ✅ design.md — Technical approach per island, 4 architecture decisions, sequencing rationale
- ✅ specs/element-plus-independence/ — Delta (now copied to main as new capability)
- ✅ specs/eslint-ep-import-guard/ — Delta (merged into `openspec/specs/eslint-ep-import-guard/spec.md`)
- ✅ specs/scss-token-foundation/ — Delta (merged into `openspec/specs/scss-token-foundation/spec.md`)
- ✅ tasks.md — 12 work units; WU1–WU11 `[x]` complete, WU12 `[ ]` deferred with root-cause documented

## Key Outcomes

### DS-Side Completion (WU1–WU10)

- **9 packages fully migrated off element-plus**: badge, menu (×4), popover, radio-group, form-item, skeleton (×2), infinite-scroll, time-picker, config-provider
- **Zero element-plus JS/TS imports** anywhere under `components/` or `common/src/**` (confirmed by grep audit in WU10.1)
- **Root `element-plus` 2.9.7 removed** from `package.json`; `@element-plus/icons-vue` drops transitively
- **yarn.lock pruned**: zero `element-plus` entries repo-wide
- **ESLint guard active**: all 8 v6 packages removed from `excludedFiles`; any future import errors immediately
- **Test suite fully green**: `yarn test:run` 480/480 tests passing (65 files) after WU10's cleanup
- **scss-token-foundation task 4.5 closed**: config-provider owns brand emission; no element-plus fallback path remains
- **Latent bugs fixed as discovered** (WU2 radio.type, WU5 formContextKey coupling, WU8 prop-type widening)

### Consumer Cleanup (WU11)

- **front-b2b version bumps**: 8 packages bumped to published post-migration versions
  - g-badge, g-config-provider, g-form-item, g-infinite-scroll, g-menu, g-popover, g-skeleton, g-time-picker
  - g-radio-group intentionally excluded (not a direct b2b dependency)
- **Transitive-dependency regression caught & fixed**: g-input-number hard-pinned to incompatible g-config-provider version; bumped to 0.2.13
- **front-b2b build clean**: `yarn build-only` succeeds; live `yarn serve:ci` boots clean with zero SCSS/JS errors
- **Live smoke test passing**: dev-server HTTP 200, all UI functional

### Known Deferred Work (WU12)

**Explicitly deferred per user decision — not in scope for `ep-extraction-v6`.**

A systematic audit discovered that front-b2b's own `src/assets/styles/ui-framework-b2b/index.scss` directly `@use`s raw `.scss` source from ~41 `@flash-global66/*` UI packages. **32 of those packages still bridge directly to `element-plus/theme-chalk`** at front-b2b's currently-pinned versions, making removal of `element-plus` from front-b2b impossible until all 32 are systematically bumped:

`g-attach-file, g-checkbox, g-chip, g-collapse, g-country-flag, g-date-picker, g-dialog, g-dialog-alert, g-drawer, g-dropdown, g-form, g-icon-button, g-image, g-inline, g-input, g-input-tag, g-link, g-logo, g-overlay, g-pagination, g-popper, g-progress, g-quote, g-radio, g-scrollbar, g-search-input, g-segmented, g-select, g-switch, g-table, g-tag, g-toast, g-tooltip`

WU12 (full front-b2b EP removal) is recommended as a separate, methodical follow-up initiative (`ep-extraction-v7` or equivalent), bumping each of the 32 one at a time, re-verifying against current DS main and its own transitive dependency ranges (same procedure that caught the `g-input-number`/`g-config-provider` conflict during WU11).

## Continuity with Prior Initiatives

**v2–v5 precedent**: ep-extraction-v6 follows the exact same delivery pattern (stacked work-unit PRs, mandatory yarn-link validation per unit, strict TDD, per-package eslintrc removal).

**scss-token-foundation closure**: config-provider's migration formally satisfies the deferred task 4.5 (DS-owned brand emission), enabling the 6 previously-entangled islands' full SCSS migrations.

**Closing the "permanent islands" myth**: the 8 packages classified as "permanent" at v4 are now fully migrated; no package retains permanent-island status. The architecture evolved to prove (over 5 initiatives) that even the highest-coupling internals can be ported with proper sequencing and test coverage.

## Rollback Impact

If needed, reverting `ep-extraction-v6` is mechanical per unit:

- **Per-WU rollback**: revert the offending PR (e.g., revert PR #294 for badge; revert PR #302 for config-provider)
- **Root removal rollback**: revert PR #303 (restores `element-plus` to `package.json` and `yarn.lock`)
- **front-b2b rollback**: revert the WU11 commits on `ander/update/version-packages` (restores pinned g-\* versions to pre-migration state)
- **Residual spec merges**: manual revert of the 3 spec edits (remove element-plus-independence; revert eslint-ep-import-guard and scss-token-foundation to pre-v6 state)

No mixed state or coupling prevents independent revert of any unit.

## Artifact Store State

**Engram**: Archive report saved at topic_key `sdd/ep-extraction-v6/archive-report` with full observation IDs for traceability.

**OpenSpec files**: Change folder moved to `openspec/changes/archive/2026-07-14-ep-extraction-v6/`; main specs updated with merged deltas.

## SDD Cycle Complete

`ep-extraction-v6` is fully planned (proposal → spec → design → tasks), implemented (apply WU1–WU11 with strict TDD), verified (green tests + lint), and archived. Ready for the next initiative.

---

**Archive prepared by**: sdd-archive executor  
**Date archived**: 2026-07-14  
**Artifact store mode**: hybrid (engram + openspec)  
**Engram topic_key**: `sdd/ep-extraction-v6/archive-report`

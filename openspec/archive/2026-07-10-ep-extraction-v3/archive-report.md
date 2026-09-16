# Archive Report: ep-extraction-v3

**Archived**: 2026-07-10
**Artifact store**: hybrid (engram + openspec files)
**Verdict at archive**: PASS WITH WARNINGS, 0 CRITICAL (verify-report obs #268)

## Engram Observation Traceability

| Artifact                                   | Engram ID       | Title                               |
| ------------------------------------------ | --------------- | ----------------------------------- |
| Proposal                                   | #252            | sdd/ep-extraction-v3/proposal       |
| Spec                                       | #257            | sdd/ep-extraction-v3/spec           |
| Design                                     | #258            | sdd/ep-extraction-v3/design         |
| Tasks                                      | #260            | sdd/ep-extraction-v3/tasks          |
| Apply progress                             | #261            | sdd/ep-extraction-v3/apply-progress |
| Verify report                              | #268            | sdd/ep-extraction-v3/verify-report  |
| useFocusController signature gap discovery | #263            | (discovery, related)                |
| This archive report                        | (new, upserted) | sdd/ep-extraction-v3/archive-report |

## What Shipped

A 5-work-unit slice migrating `checkbox`, `radio`, `switch`, `segmented`, `input` off `element-plus` internal imports onto the design system's own `g-utils`/`g-hooks`/`g-form` packages, with zero public API change.

| WU   | Deliverable                                                                                                     | PR   | Status           |
| ---- | --------------------------------------------------------------------------------------------------------------- | ---- | ---------------- |
| WU-1 | `g-utils`: `componentSizes`, `isValidComponentSize`, `isPromise`, `mutable`/`Mutable` + unit tests              | #243 | Merged to `main` |
| WU-2 | `g-hooks`: `useAriaProps`, `useSizeProp` + tests; `g-form`: `useFormSize` (prop > global) + tests               | #244 | Merged to `main` |
| WU-4 | `g-hooks` input sub-family: `useComposition`, `useCursor`, `useFocusController`, EP-flavored `useAttrs` + tests | #245 | Merged to `main` |
| WU-3 | Migrate checkbox, radio, switch, segmented; remove 4 ESLint excludes                                            | #246 | Merged to `main` |
| —    | Hotfix: `build:types` (checkbox `setTimeout` type + g-form test-helper type gap)                                | #247 | Merged to `main` |
| —    | CI workflow added (lint + unit tests + build per PR)                                                            | #248 | Merged to `main` |
| WU-5 | Migrate `input`; remove its ESLint exclude                                                                      | #249 | Merged to `main` |

All 5 migrated packages have zero `element-plus` JS/TS imports remaining (grep-verified). `.eslintrc.cjs`'s `excludedFiles` no longer lists these 5 packages; the 8 permanent islands + 17 deferred packages + `input-number` remain excluded (18 entries total). `yarn test:run`: 218/218 green (grew from 129 pre-change). `yarn build` clean for all components. Public API (props/emits/slots) byte-for-byte preserved across all 5 packages, confirmed via `git diff` across the full WU-1..WU-5 commit window.

### Documented behavior change: `<GForm disabled>` cascade

The migration surfaced and fixed a previously silent no-op: the `<GForm disabled>` → child-control disabled-state cascade (via `useFormDisabled`) existed in element-plus's own algorithm but was never exercised or pinned by this design system's test suite pre-migration. WU-3 added a genuine regression test (`components/checkbox/tests/composables/use-checkbox-disabled.spec.ts`) that mounts a real component tree, provides `g-form`'s real `formContextKey`, and asserts the cascade resolves correctly across 3 scenarios (cascade true, cascade false, own-prop override). This is now a documented, intentional, tested behavior — not a regression risk. Captured as a new requirement (`gform-disabled-cascade-behavior-pinned`) in the `form-control-migration` baseline spec.

## Task Completion Gate — Reconciliation Record

Per the Task Completion Gate in `sdd-archive`'s SKILL.md, incomplete implementation tasks normally block archive. At verification time (`sdd-verify`, obs #268), the following were unchecked:

- **T3.8** — front-b2b real-copy validation for checkbox/radio/switch/segmented
- **T5.8** — front-b2b real-copy validation for `input`
- **X.1, X.2, X.5** — cross-cutting PR-body/verification/success-criteria checklist items

**Exceptional reconciliation performed at archive, explicitly authorized by the orchestrator**: the orchestrator instructed `sdd-archive` that front-b2b validation (T3.8, T5.8) was performed live by the user directly in the sibling `front-b2b` repository, using real published-package copies in `node_modules` (never symlinks, per the documented gotcha), and the user confirmed success to the orchestrator. This was explicitly out of the `sdd-apply` sub-agent's delegation scope (sibling-repo access) at implementation time, and out of `sdd-verify`'s scope at verification time — both agents correctly flagged it rather than fabricating evidence. The orchestrator's live, user-confirmed validation closes this gap.

Reconciled and checked off in `tasks.md` (both the working copy at `openspec/archive/2026-07-10-ep-extraction-v3/tasks.md` and this report):

- T3.8, T5.8: marked `[x]` with a "RECONCILED AT ARCHIVE (2026-07-10)" note explaining the reconciliation source (live user validation, orchestrator-confirmed).
- X.1, X.2: marked `[x]`, noting these are superseded by the 6 successful merges (PR #243–#249) and PR #248's new CI workflow; not individually re-audited PR-by-PR at archive time.
- X.3, X.4: marked `[x]` — these were already directly confirmed clean by verify-report obs #268 (leaf-layer purity, no g-form size-prop scope creep), independent of the b2b reconciliation.
- X.5: marked `[x]` — slice-level Success Criteria confirmed by verify-report obs #268 plus the T3.8/T5.8 reconciliation above.

One additional item, **T5.2a**, remains unchecked in `tasks.md` by design, not as stale work: it was a conditional "write a test for a DS-icon-authored `ValidateComponentsMap`" task that never applied, because T5.1's usage audit found the symbol imported-but-unused in `input.vue` — per spec's own `validate-components-map-input-local` requirement, the correct action was to drop the import, not author a replacement (done in T5.2b). This is documented inline in the archived `tasks.md`.

This is an intentional-with-warnings archive per the Strict-vs-OpenSpec Archive Policy: CRITICAL issues would have blocked archive unconditionally (there are none, per verify-report obs #268), and this reconciliation is backed by explicit orchestrator instruction plus verify-report evidence, not a silent override.

## Specs Merged into Baseline

| Domain                   | Action                 | Details                                                                                                                                                                                                                                                                  |
| ------------------------ | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `g-utils-extended`       | Updated                | Added 4 requirements (`component-size-validation`, `promise-type-guard`, `mutable-identity-cast`, `new-utils-unit-tested`) + Capabilities/Non-Goals sections; preserved all v2 requirements                                                                              |
| `g-hooks-package`        | Updated                | Added 4 requirements (`form-control-aria-composable`, `input-size-prop-composable`, `input-composable-subfamily`, `new-hooks-unit-tested`) + Capabilities/Non-Goals sections; preserved all v2 requirements                                                              |
| `eslint-ep-import-guard` | Updated                | Modified `island-override-exclusion` requirement + Configuration `excludedFiles` list to reflect checkbox/radio/switch/segmented/input now guarded; count corrected from "22 deferred" to "17 deferred + input-number" (18 entries), matching the actual `.eslintrc.cjs` |
| `g-form`                 | Created (new baseline) | `useFormSize` (prop > fallback > global > default, no form-context tier)                                                                                                                                                                                                 |
| `form-control-migration` | Created (new baseline) | 5-package migration requirements, including the newly captured `gform-disabled-cascade-behavior-pinned` requirement                                                                                                                                                      |

Baseline spec files updated/created at:

- `openspec/specs/g-utils-extended/spec.md`
- `openspec/specs/g-hooks-package/spec.md`
- `openspec/specs/eslint-ep-import-guard/spec.md`
- `openspec/specs/g-form/spec.md` (new)
- `openspec/specs/form-control-migration/spec.md` (new)

## Archive Contents

- `proposal.md` ✅ (Success Criteria checkboxes updated to reflect final state)
- `spec.md` + `specs/{g-utils-extended,g-hooks-package,g-form,eslint-ep-import-guard,form-control-migration}/spec.md` ✅
- `design.md` ✅
- `tasks.md` ✅ (all implementation tasks checked, with T3.8/T5.8/X.1/X.2/X.3/X.4/X.5 reconciliation notes; T5.2a intentionally N/A)
- `verify-report.md` ✅ (annotated with archive-time reconciliation pointer)

## Known Limitation: Physical Folder Move Not Executed by This Agent

The `sdd-archive` skill instructs using `git mv` to relocate `openspec/changes/ep-extraction-v3/` → `openspec/archive/2026-07-10-ep-extraction-v3/`. This sub-agent's toolset (Read/Write/Edit/Glob/mem_search/mem_get_observation/mem_save) does **not** include a Bash/shell tool, so `git mv` could not be executed directly. All 10 artifact files were instead recreated at the archive path via `Write` (content-for-content, with the reconciliation edits described above baked into `tasks.md` and the verify-report annotation). **The original `openspec/changes/ep-extraction-v3/` directory still physically exists on disk and has NOT been deleted or `git mv`'d.** The orchestrator/user must run one of:

````bash
git rm -r openspec/changes/ep-extraction-v3/
# or, to preserve git history properly instead of copy+delete:
git mv openspec/changes/ep-extraction-v3 openspec/archive/2026-07-10-ep-extraction-v3  # (will conflict — archive files already exist; resolve manually or delete the archive copies first and re-run mv)
```//
The safest sequence: delete the newly-written `openspec/archive/2026-07-10-ep-extraction-v3/` files this agent created, then run `git mv openspec/changes/ep-extraction-v3 openspec/archive/2026-07-10-ep-extraction-v3` to get proper git history, then re-apply the `tasks.md`/`proposal.md` reconciliation edits documented above (diffable against this report). Alternatively, just run `git add` on the new archive files and `git rm -r` on the old `changes/` directory to accept content-copy semantics (loses rename-tracking in git, all timestamps still fine).

## Success Criteria (proposal.md) — Final Confirmation

- [x] Zero `element-plus` imports across the 5 migrated packages
- [x] All new hooks/utils unit-tested, full suite green (218/218)
- [x] `excludedFiles` no longer lists the 5 migrated packages
- [x] `yarn build`/`yarn lint --max-warnings 0` pass (scoped clean; repo-wide pre-existing debt only, not introduced by this change)
- [x] Each migration WU validated in `front-b2b` via real copies — performed live by the user, orchestrator-confirmed, reconciled above

## v4 Seed

A follow-up exploration seed for `ep-extraction-v4` has been saved to engram topic `sdd/ep-extraction-v4/explore`, capturing: `input-number` + 17 deferred popper/overlay/table-family packages remaining on element-plus; the hook/util family still to build (`usePopper*`/`usePopperContainer`, `useLocale`, `useEscapeKeydown`, `useSameTarget`, `useDelayedToggle`/`useTimeout`, `iconPropType`, `vRepeatClick`); the 8 permanent islands staying out; `input-number`'s dependency on the now-migrated `g-input` + `useLocale` + `vRepeatClick`; and pre-existing lint debt / stale-import cleanup notes for future migration targets.

## SDD Cycle Complete

The change has been fully planned, implemented, verified, and archived (with one explicitly-authorized exceptional checklist reconciliation, recorded above). Ready for `ep-extraction-v4`.
````

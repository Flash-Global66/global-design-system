# Proposal: EP Extraction v2 — Own Utilities/Composables Instead of element-plus Internals

## Intent

`components/*` still import element-plus (EP) internals directly in **194 files across 39 packages** (245 incl. root barrels) — utility functions, composables, and constants that are not "using EP as a design base" but silently coupling our public packages to EP's private implementation surface (`element-plus/es/utils/...`, hooks). The `g-button` pilot already proved the extraction pattern works and is merged to `main` clean. A prior attempt (`feat/ds-cambio-2-ep-extraction`) was abandoned for structural conflicts, leaving stale, misleading OpenSpec artifacts on disk that falsely claim this work is done. Meanwhile `icon-button` ships a live bug (`useFormItem` imported from `element-plus` instead of `@flash-global66/g-form`), and nothing stops new EP-internal imports from landing today. This must happen now to stop the bleed and remove hidden EP coupling before the surface grows further.

## Scope

### In Scope

- **WU-0**: Delete stale OpenSpec artifacts from the abandoned branch (untracked): `openspec/changes/cambio-2-ep-extraction/`, `openspec/archive/2026-06-23-cambio-2-ep-extraction/`, `openspec/specs/g-utils-extended/spec.md`.
- Extend `common/g-utils` (v0.2.0 baseline) with the real missing gap: `isArray`, `isNumber`, `isFunction`, `isUndefined`, `isClient`, `ensureArray`, `getProp`, `addUnit`, `throwError`, dom utils, `EVENT_CODE`/event constants, `Arrayable<T>`, `ComponentSize`.
- Create `common/g-hooks` (does not exist today): `useId` (SSR-safe), `useGlobalSize`, `useProp`, `useFormItem` — algorithms copied exactly from EP to avoid behavior drift.
- Migrate `g-form` (8 files) off direct EP imports onto `g-utils`/`g-hooks`.
- Migrate remaining `src/**`-based component packages that only use EP utilities/composables/constants (not full EP components) — subset of the 39, excluding the 7 flat-structure islands below.
- Fix `icon-button`'s `useFormItem` import to use `@flash-global66/g-form`/`g-hooks` instead of `element-plus`.
- Add ESLint `no-restricted-imports` guard for `element-plus`/`element-plus/*` on `components/*/src/**` and `common/*/src/**`, with an override excluding the island packages — added LAST so migrated code is already clean.

### Out of Scope (Non-Goals)

- The 7 flat-structure wrapper packages that wrap whole EP **components** (`badge`, `menu`, `config-provider`, `popover`, `radio-group`, `form-item`, `skeleton`) — per `AGENTS.md`, EP is our design base and these wrap real EP components; they are not reimplemented.
- Removing `element-plus` from `peerDependencies` where a package still legitimately wraps an EP component.
- Reimplementing whole EP components anywhere.
- Complex EP-heavy components not yet triaged (e.g. `select`, `table`, `date-picker`) unless found to be utility-only during WU execution.

## Capabilities

### New Capabilities

- `g-hooks-package`: new shared composables package (`useId`, `useGlobalSize`, `useProp`, `useFormItem`).
- `eslint-ep-import-guard`: lint rule blocking new `element-plus` imports outside island exceptions.

### Modified Capabilities

- `g-utils-package`: extend with the missing util/type/constant gap listed above.

## Approach

Sequential, dependency-ordered: WU-0 cleanup → `g-utils` extension → `g-hooks` creation → `g-form` migration (transversal dependency) → remaining utility-only components → ESLint guard last (so the repo passes lint once code is already clean). Reuse the abandoned branch's symbol-level design (signatures, SSR-safety rationale) as non-binding reference only; re-verify each against the current `g-utils` v0.2.0 baseline before implementing.

## Affected Areas

| Area                                                                                                                                  | Impact   | Description                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------ |
| `openspec/changes/cambio-2-ep-extraction/`, `openspec/archive/2026-06-23-cambio-2-ep-extraction/`, `openspec/specs/g-utils-extended/` | Removed  | Stale, untracked, misleading artifacts from abandoned branch |
| `common/g-utils/src/**`                                                                                                               | Modified | New util/type/constant files                                 |
| `common/g-hooks/`                                                                                                                     | New      | New shared composables package                               |
| `components/form/src/**` (8 files)                                                                                                    | Modified | EP imports replaced                                          |
| `components/icon-button/src/use-icon-button.ts`                                                                                       | Modified | Bug fix: EP `useFormItem` → `g-form`/`g-hooks`               |
| `components/*/src/**` (subset of 39)                                                                                                  | Modified | EP utility/composable/constant imports replaced              |
| `.eslintrc.cjs`                                                                                                                       | Modified | `no-restricted-imports` guard added                          |

## Risks

| Risk                                                                            | Likelihood      | Mitigation                                                               |
| ------------------------------------------------------------------------------- | --------------- | ------------------------------------------------------------------------ |
| Copied EP algorithms drift from original behavior (e.g. `useId` SSR, `getProp`) | Medium          | Copy exactly, no "improvements"; dedicated unit coverage per util/hook   |
| `g-form` regression (transversal dependency for `icon-button` and others)       | Medium          | Migrate `g-form` early, verify consumers immediately after               |
| Single large PR exceeds review budget                                           | High (accepted) | User-approved `size:exception`; sequence commits by WU for reviewability |
| ESLint guard blocks unrelated in-flight work if island-exclusion glob is wrong  | Low             | Land guard last, after migration is verified clean                       |

## Rollback Plan

Revert the single PR (all WUs land as ordered commits on one branch/PR). Since `g-utils`/`g-hooks` are additive and imports are swapped file-by-file, reverting is a straight `git revert` of the merge commit; no data migration or external state involved.

## Dependencies

- None external. Internal ordering: `g-utils` → `g-hooks` → `g-form` → remaining components → ESLint guard.

## Success Criteria

- [ ] Zero `from ['"]element-plus` matches under `components/*/src/**` and `common/*/src/**`, except the 7 explicitly excluded island packages.
- [ ] `icon-button` no longer imports `useFormItem` from `element-plus`.
- [ ] `yarn build` succeeds for all 41 buildable packages.
- [ ] All existing tests remain green (no regressions introduced).
- [ ] `yarn lint` passes with the new `no-restricted-imports` rule active (`--max-warnings 0`).

## Proposal question round

Per the orchestrator's decisions already captured (business problem, scope boundaries, PR/delivery strategy), no additional question round was run for this proposal. Open items still worth explicit user confirmation before `sdd-spec`/`sdd-tasks`:

- Whether to fully delete the WU-0 stale OpenSpec artifacts (assumed: yes, delete) vs. archive them with a "SUPERSEDED" marker instead.
- Whether every one of the ~39 `src/**` packages beyond `g-form`/`icon-button` is confirmed utility-only in scope, or some (e.g. `select`, `table`, `date-picker`) should be triaged out during `sdd-tasks` if found to embed real EP component usage.

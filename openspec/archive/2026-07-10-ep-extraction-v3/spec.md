# Spec: ep-extraction-v3

> Artifact store: hybrid. Continues `ep-extraction-v2`. Branch: `feat/ds-ep-extraction-v2`.
> Consolidated view of the domain deltas below. Per-domain files live at `openspec/changes/ep-extraction-v3/specs/<domain>/spec.md`.
> Corrected 2026-07-08: previous draft mis-specified several g-utils symbols as ADDED when v2 already shipped them, misplaced `useFormSize` in `g-hooks`, and omitted `ValidateComponentsMap`'s real (input-local) placement. See "Corrections" at the end.

## Domain: g-utils-extended (Modified Capability — delta)

**ADDED**: `componentSizes` (runtime `['', 'default', 'small', 'large']`), `isValidComponentSize`, `isPromise`, `mutable`/`Mutable` — all verified absent from `common/g-utils/src` via grep. Each ships a Vitest unit test; full suite green via `yarn test:run`.

**Non-Goals**: `isBoolean`, `isObject`, `isString`, `buildProps`, `definePropType`, `debugWarn`, `withInstall`, `SFCWithInstall` already exist since `ep-extraction-v2` — reused, not re-added. `ValidateComponentsMap` is NOT here (input-local, DS-icon-based — see `form-control-migration`). `INPUT_EVENT` stays out (only `input-number` uses it).

Full requirements/scenarios: `specs/g-utils-extended/spec.md`.

## Domain: g-hooks-package (Modified Capability — delta)

**ADDED**: `useAriaProps` (checkbox/radio/switch/segmented/input), `useSizeProp` (input, a `buildProp`'d prop definition, not a hook fn), input sub-family `useComposition`/`useCursor`/`useFocusController`/own-code EP-flavored `useAttrs` (input only). Each ships a Vitest unit test; full suite green.

**Non-Goals**: `useFormSize` is NOT added here — see `g-form` domain (avoids a `g-hooks → g-form` cycle). `usePopper*`/`useSameTarget`/`useEscapeKeydown` deferred to v4.

Full requirements/scenarios: `specs/g-hooks-package/spec.md`.

## Domain: g-form (New Capability)

Purpose: hosts form-context-derived composables; new domain introduced by this change specifically to host `useFormSize` next to the existing `useFormItem`/`useFormItemInputId`/`useFormDisabled` (pre-existing, out of scope here).

**ADDED**: `useFormSize` — resolves size via **`prop > fallback > useGlobalSize() > 'default'`**, with `ignore.prop`/`ignore.global` flags. **No form-context size tier**: `g-form`'s `formProps`/`formItemProps` expose no `size` field in this version, so there is nothing to read at that tier. This is a pure refactor of existing (already form-context-tier-less) EP behavior, not a new feature.

**Non-Goals**: adding a `size` prop to `formProps`/`formItemProps` or reinstating a form-context tier (documented future enhancement, explicitly out of v3 scope — scope-creep risk).

Full requirements/scenarios: `specs/g-form/spec.md`.

## Domain: eslint-ep-import-guard (Modified Capability — delta)

**MODIFIED** `island-override-exclusion`: `checkbox`, `radio`, `switch`, `segmented`, `input` removed from `excludedFiles` — guarded like any other component. `input-number` and the remaining deferred packages stay excluded.

Full requirements/scenarios: `specs/eslint-ep-import-guard/spec.md`.

## Domain: form-control-migration (New Capability)

Purpose: migrate `checkbox`, `radio`, `switch`, `segmented`, `input` off `element-plus` internal imports onto own hooks/utils, without changing public API. `input-number` out of scope.

Key requirements: zero EP imports per package; public API unchanged; `useNamespace`/`useId`/`useFormItem`-family re-pointed to existing extractions; **`switch`/`segmented` use `useFormSize` (`g-form`)**, **`input` uses `useSizeProp` (`g-hooks`)** — not the reverse; `input` additionally wires `useComposition`/`useCursor`/`useFocusController`/`useAttrs`; `ValidateComponentsMap` is authored **input-local** against `@flash-global66/g-icon-font` (dropped if the WU-5 usage audit finds it unused, not ported); `input-number` untouched; migration gated by green tests before each ESLint exclude removal.

Full requirements/scenarios: `specs/form-control-migration/spec.md`.

## Non-Goals (apply to all domains above)

- Any DOM/integration test (unit-only policy)
- Changing public API (props/emits/slots) of any of the 5 migrated packages
- Migrating `input-number` or any popper/overlay-dependent package
- Removing `element-plus` from any package's `peerDependencies`
- Reimplementing `useNamespace`, `useId`, `useFormItem`, `useFormItemInputId`, `useFormDisabled` (already extracted; reused as-is)
- Reimplementing `isBoolean`, `isObject`, `isString`, `buildProps`, `definePropType`, `debugWarn`, `withInstall`, `SFCWithInstall` (already extracted in v2; reused as-is)
- Adding a `g-icon-font` dependency to `g-utils`/`g-hooks`

## Corrections vs. previous draft

1. **g-utils ADDED shrunk**: removed `additional-type-guards`, `prop-builder-utilities`, `install-helper`, and the `debugWarn` half of `dev-warning-and-size-validation` — all already shipped in v2 (verified by grep against `common/g-utils/src`). Real ADDED delta is only `componentSizes`/`isValidComponentSize`/`isPromise`/`mutable`/`Mutable`.
2. **`mutable`/`Mutable` reclassified as ADDED, not reused.** Grep against `common/g-utils/src` and the wider `common/` tree found zero matches for `mutable` or `Mutable` — they do not exist yet. This matches `design.md`'s own discovery table (WU-1 includes `mutable`/`Mutable`) and is now the source of truth over any instruction claiming they already exist.
3. **`useFormSize` moved out of `g-hooks-package` into a new `g-form` domain**, matching design decision 2.1 (avoids `g-hooks → g-form` cycle). The old `form-size-resolution-precedence` requirement (4-tier, including a form-context tier) is replaced by a 3-tier `prop > fallback > global > default` requirement — the DS has no form-level `size` today, so the 4-tier scenario never reflected real behavior.
4. **`ValidateComponentsMap` moved from `g-utils-extended` to `form-control-migration`**, input-local, re-authored against `@flash-global66/g-icon-font` (not byte-copyable from EP, which references `@element-plus/icons-vue`). Flagged for a confirm-and-drop-if-unused check during WU-5.

## References

- Proposal: `openspec/archive/2026-07-10-ep-extraction-v3/proposal.md` (Engram #252)
- Design: `openspec/archive/2026-07-10-ep-extraction-v3/design.md` (decisions 2.1, 2.3)
- Baseline specs: `openspec/specs/g-utils-extended/spec.md`, `openspec/specs/g-hooks-package/spec.md`, `openspec/specs/eslint-ep-import-guard/spec.md`, `openspec/specs/g-form/spec.md`, `openspec/specs/form-control-migration/spec.md`
- Prior change: `openspec/archive/2026-07-08-ep-extraction-v2/`

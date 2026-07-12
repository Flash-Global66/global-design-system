# Technical Design: EP Extraction v4 — Popper/Overlay Family

> Artifact store: hybrid. Design phase of `ep-extraction-v4`. Reads `proposal.md` (same dir) / engram `sdd/ep-extraction-v4/proposal` (obs #275) and exploration `sdd/ep-extraction-v4/explore` (obs #269).
> Scope locked by the proposal: migrate 13 packages off EP internals — `focus-trap, slot, overlay, scrollbar, popper, tooltip, select, dropdown, dialog, date-picker, time-picker, input-tag, inline` — building ~19 hooks/directives just-in-time. Table family + `input-number` are out (deferred to v5). The 8 permanent islands are never in scope.

## 1. Technical Approach

Same discipline v3 proved: copy EP algorithms **exactly** (no "improvements") into own-code packages, cover each new symbol with a Vitest unit test **before** wiring it (strict TDD, `yarn test:run`, unit-only), re-point each package's imports mechanically, and delete its `.eslintrc.cjs` `excludedFiles` entry only after it is lint-clean under `eslint --max-warnings 0`. Every migrated package follows the v3 packaging convention: `g-utils`/`g-hooks` in `dependencies`; `g-form`/`g-icon-font`/`element-plus`/`vue` in `peerDependencies` (the v3 packaging-bug root cause).

The layering established by v2/v3 stays strictly one-directional, and every new symbol lands in the **lowest layer that can host it without creating a back-edge** — the single rule that resolves all four open questions below:

```
g-utils   (leaf — pure helpers/types/constants/directives, useNamespace; no internal DS deps)
   ▲
g-hooks   (deps: g-utils) — generic Vue composables, NO form-context coupling
   ▲
g-form    (deps: g-hooks, g-utils) — form-context-derived composables only
   ▲
components/{focus-trap,slot,overlay,scrollbar,popper,tooltip,select,dropdown,
            dialog,date-picker,time-picker,input-tag,inline}
```

Hooks are built **just-in-time** (proposal decision 2): each new hook is authored in the WU of the **first consuming package in topological order**; later consumers re-point. Two mechanically distinct kinds of work run through the slice and are treated differently:

- **Re-point only** — swap an EP specifier for an already-shipped DS symbol. Low risk, still needs a per-package pass (v3 proved untouched packages don't auto-consume existing hooks).
- **Deep migration** — copy a genuinely-missing EP algorithm into `g-utils`/`g-hooks` with a unit test first, then wire it. This is where the risk lives.

## 2. Resolved Open Questions (the four the proposal deferred to design)

### 2.1 DS-native config shim contract — HIGHEST RISK (proposal decision 1)

**Grounding fact that shrinks the risk dramatically.** `dialog` reads **exactly one** config key through `useGlobalConfig`, verified in `components/dialog/src/hooks/use-dialog.ts:60-61`:

```ts
const defaultNamespace = 'gui';
const namespace = useGlobalConfig('namespace', defaultNamespace);
```

`namespace` is the _only_ key dialog consumes. It does **not** read `locale`, `zIndex`, `size`, `emptyValues`, or message defaults through this channel (zIndex comes from EP's separate `useZIndex`, migrated independently in WU-5). So the shim surface is a single string key with a hard default of `"gui"`.

**How EP's `useGlobalConfig` actually resolves** (`node_modules/element-plus/es/components/config-provider/src/hooks/use-global-config.mjs:12-22`):

```ts
const globalConfig = ref(); // module-level fallback, empty by default
function useGlobalConfig(key, defaultValue) {
  const config = getCurrentInstance()
    ? inject(configProviderContextKey, globalConfig) // ancestor provider OR module fallback
    : globalConfig;
  return computed(() => config.value?.[key] ?? defaultValue);
}
```

**What the DS `config-provider` island actually provides.** `components/config-provider/ConfigProvider.vue` wraps EP's `<el-config-provider>` and hardcodes `namespace="gui"` (it comes after `v-bind="{...$attrs, ...$props}"`, so it wins — a consumer cannot override it). Therefore, in EP's world:

- dialog **inside** `GConfigProvider` → injects EP's `configProviderContextKey` → `namespace === "gui"`.
- dialog **outside** any provider → `globalConfig` is empty → falls back to the call-site default `"gui"`.

**Both paths resolve `namespace` to `"gui"` today.** This is the key that makes the migration safe.

**Decision — build a DS-native shim that establishes its OWN provider + injection key, with a hard fallback default; do NOT read EP's island context.** Reading EP's `configProviderContextKey` cross-boundary would re-introduce exactly the coupling v4 removes (and keep dialog's ESLint exclude alive). Instead:

```ts
// g-hooks/src/composables/useGlobalConfig.ts
import { getCurrentInstance, inject, computed, ref, provide, unref } from 'vue';
import type { InjectionKey, Ref, MaybeRef } from 'vue';

export interface GlobalConfigContext {
  namespace?: string;
  // reserved for future keys (locale, zIndex, size); dialog uses only `namespace` today
}

export const gConfigProviderContextKey: InjectionKey<Ref<GlobalConfigContext>> =
  Symbol('gConfigProviderContextKey');

const globalConfig = ref<GlobalConfigContext>({}); // module-level fallback, EP-faithful

export function useGlobalConfig<K extends keyof GlobalConfigContext>(
  key: K,
  defaultValue: GlobalConfigContext[K],
): Ref<GlobalConfigContext[K]>;
export function useGlobalConfig(): Ref<GlobalConfigContext>;
export function useGlobalConfig(
  key?: keyof GlobalConfigContext,
  defaultValue?: unknown,
) {
  const config = getCurrentInstance()
    ? inject(gConfigProviderContextKey, globalConfig)
    : globalConfig;
  if (key) return computed(() => config.value?.[key] ?? defaultValue);
  return config;
}

// optional companion for future DS providers; NOT used by v4, ships for completeness
export function provideGlobalConfig(config: MaybeRef<GlobalConfigContext>) {
  provide(
    gConfigProviderContextKey,
    computed(() => unref(config)),
  );
}
```

**Resolution order (precise contract):**

1. Nearest ancestor that called `provideGlobalConfig` (DS-native `gConfigProviderContextKey`).
2. Else the module-level `globalConfig` ref (empty unless a global `provideGlobalConfig(..., global)` ran — not wired in v4).
3. Else the call-site `defaultValue` (`"gui"` for dialog).

**Why this cannot regress dialog.** The DS `config-provider` island still provides EP's `configProviderContextKey`, **not** `gConfigProviderContextKey`. So the DS shim's inject always misses the island and falls through to step 3 → `"gui"` — byte-identical to today's resolved value, because the island hardcodes `namespace="gui"` anyway. The shim is behaviorally equivalent in every mounting context (inside island, outside island, SSR/no-instance path preserved via the `getCurrentInstance()` guard). We do **not** modify the permanent `config-provider` island (out of scope), and we do not need to: the default carries the contract.

**Test contract (author first):** `useGlobalConfig('namespace', 'gui')` returns `'gui'` with no provider; returns the provided value when an ancestor `provideGlobalConfig({ namespace: 'x' })` exists; the no-arg overload returns the whole context ref; the no-`getCurrentInstance` path returns the module ref without throwing. Validate `dialog` in `front-b2b` (real copy, never symlink) before removing its ESLint exclude.

**Placement:** `g-hooks` (only Vue + g-utils; no form context → no cycle).

### 2.2 `useForwardRef` vs `useForwardRefDirective` — UNIFY into one g-hooks module (not a preference — a correctness requirement)

The open question framed EP as "splitting" these because `popper/trigger.vue` imports `useForwardRef` while `slot/only-child.tsx` imports `useForwardRefDirective` + `FORWARD_REF_INJECTION_KEY`. That is a **consumption** split, not a **definition** split. In EP all three live in **one module** and share **one symbol** (`node_modules/element-plus/es/hooks/use-forward-ref/index.mjs`):

```ts
const FORWARD_REF_INJECTION_KEY = Symbol('elForwardRef');
const useForwardRef = forwardRef => {
  provide(FORWARD_REF_INJECTION_KEY, { setForwardRef });
};
const useForwardRefDirective = setForwardRef => ({
  mounted,
  updated,
  unmounted,
});
```

The provide/inject handshake is: `popper/trigger` calls `useForwardRef` (which `provide`s the key) and `slot/only-child` `inject`s the **same** `FORWARD_REF_INJECTION_KEY` to receive `setForwardRef`. **If the two functions did not share the identical symbol instance, the handshake would silently break.** Splitting them across two packages/modules would risk two distinct `Symbol()`s.

**Decision:** one g-hooks module `useForwardRef.ts` exporting all three (`useForwardRef`, `useForwardRefDirective`, `FORWARD_REF_INJECTION_KEY`), mirroring EP's own file layout. `slot` (earlier in topological order) owns building it; `popper` re-points to `@flash-global66/g-hooks`. This guarantees a single shared symbol and matches EP's public shape, so no future consumer API drift.

### 2.3 `useEmptyValues` placement — g-hooks, NOT g-form (the acyclic analysis, and a correction to the open question)

The open question asserted "EP's impl composes with form context." **That is inaccurate** — verified against `node_modules/element-plus/es/hooks/use-empty-values/index.mjs`. `useEmptyValues` injects `emptyValuesContextKey`, which is provided by **config-provider** (`provideGlobalConfig`), **not** by form/form-item context:

```ts
const emptyValuesContextKey = Symbol('emptyValuesContextKey');
const useEmptyValues = (props, defaultValue) => {
  const config = getCurrentInstance()
    ? inject(emptyValuesContextKey, ref({}))
    : ref({});
  const emptyValues = computed(
    () => props.emptyValues || config.value.emptyValues || DEFAULT_EMPTY_VALUES,
  );
  // valueOnClear cascade: prop > config > defaultValue > undefined
};
```

Its only real dependencies are `buildProps`, `isFunction`, `debugWarn` (all in **g-utils**) plus Vue primitives. It has **zero form-context coupling**, so — unlike v3's `useFormSize`, which _had_ to sit in `g-form` because it read `formContextKey`/`formItemContextKey` — there is no cycle risk here. `g-hooks → g-utils` only.

**Decision:** `useEmptyValues` + `useEmptyValuesProps` live in **`g-hooks`** (a new `useEmptyValues.ts`), owning a DS-native `gEmptyValuesContextKey`. Exactly like the config shim (§2.1), the DS `config-provider` island provides EP's key, not the DS key, so `inject(gEmptyValuesContextKey, ref({}))` always falls back to `ref({})` → effective resolution is `props.emptyValues || DEFAULT_EMPTY_VALUES`, which is the current behavior. `select` (WU-8, first consumer) owns it; `time-picker` (WU-11) re-points.

> Symmetry note: `useGlobalConfig` (§2.1) and `useEmptyValues` are the two hooks whose EP source of truth is the config-provider island. Both get a DS-owned injection key + hard defaults, both fall through to defaults because the island still wraps EP. Keep their injection keys distinct and co-located conceptually (config family) but do NOT couple dialog to select — they are independent modules.

### 2.4 Stale `radio-group → radio/radio.type` reference — CONFIRMED latent bug; document, do NOT fix in v4

Verified: `components/radio-group/RadioGroup.vue:15` imports `{ TypeRadioSize, EnumRadioSize } from '../radio/radio.type'`. That file **does not exist** (`components/radio/radio.type.*` → no files), and grep for `TypeRadioSize`/`EnumRadioSize` across `components/radio` returns **zero matches** — the v3 radio migration did not carry those symbols forward. This is a genuine broken import. It currently survives only because `radio-group` is a permanent island fully excluded from the ESLint/type gate (`.eslintrc.cjs:35` → `components/radio-group/**`) and is not built/tested in the guarded set.

**Recommendation (fix-where):** this is **out of v4 scope** and v4 naturally does **not** inherit it — v4 touches neither `radio-group` (permanent island) nor re-introduces the reference. Do **NOT** fix it inside any v4 migration WU (that would smuggle an unrelated island change into a popper-family PR and muddy the diff). Action: log it as a standalone tracked defect (separate chore/PR against `radio-group` + `radio`), owner to decide whether `radio` should re-export a `RadioSize` type or `radio-group` should inline its own. Design flags it; design does not fix it.

## 3. Per-Package Migration Classification (drives the task breakdown)

Classification verified against real imports (§Grep of `from 'element-plus'` across the 13 packages, 83 occurrences / 43 files).

| Package         | Class                 | New symbols it must build (JIT owner)                                                                                                                        | Key re-points                                                                                                                                                                                                                                    |
| --------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **scrollbar**   | re-point only         | —                                                                                                                                                            | `useAriaProps`(g-hooks), `useNamespace`/`isClient`/`throwError`/`buildProps`(g-utils)                                                                                                                                                            |
| **inline**      | re-point only         | —                                                                                                                                                            | `useFormSize`(g-form), `useAriaProps`(g-hooks), `useNamespace`/prop-builders/guards(g-utils) — smallest WU                                                                                                                                       |
| **input-tag**   | re-point only         | —                                                                                                                                                            | `useCalcInputWidth`(from select), `useComposition`/`useFocusController`(g-hooks), `useNamespace`/`NOOP`/`isUndefined`                                                                                                                            |
| **focus-trap**  | deep                  | `useEscapeKeydown`(g-hooks), `isFocusable`(g-utils)                                                                                                          | `isString`/`isElement`/`EVENT_CODE`                                                                                                                                                                                                              |
| **slot**        | deep                  | forward-ref family: `useForwardRef`+`useForwardRefDirective`+`FORWARD_REF_INJECTION_KEY`(g-hooks)                                                            | `NOOP`/`debugWarn`/`isObject`/`useNamespace`                                                                                                                                                                                                     |
| **overlay**     | deep                  | `useSameTarget`(g-hooks, shared w/ dialog), `PatchFlags`(g-utils)                                                                                            | `buildProps`/`definePropType`                                                                                                                                                                                                                    |
| **popper**      | deep (core)           | `usePopper`(g-hooks), `useZIndex`(g-hooks)                                                                                                                   | `useForwardRef`(from slot), `useNamespace`/`isClient`/`isNumber`/`isElement`/`isFocusable`(from focus-trap)/`buildProps`/`NOOP`; deps `g-slot`/`g-focus-trap`/`g-form`                                                                           |
| **tooltip**     | deep                  | `useDelayedToggle`+`useDelayedToggleProps`(g-hooks), `createModelToggleComposable`(g-hooks), `usePopperContainer`+`usePopperContainerId`(g-hooks)            | `useId`(g-hooks), `composeEventHandlers`/`EVENT_CODE`; deps `g-popper`/`g-focus-trap`/`g-teleport`/`g-icon-button`/`g-slot`                                                                                                                      |
| **select**      | deep + order-hazard   | `useEmptyValues`+`useEmptyValuesProps`(g-hooks), `useCalcInputWidth`(g-hooks, shared w/ input-tag), `ClickOutside`(g-utils directive, shared w/ date-picker) | **re-point `TooltipInstance`/`useTooltipContentProps` to `@flash-global66/g-tooltip`** (currently straight from EP); `EVENT_CODE`/`CHANGE_EVENT`/`UPDATE_MODEL_EVENT`                                                                            |
| **dropdown**    | deep + widest fan-out | `whenMouse`(g-hooks), `useLocale`(g-hooks, shared w/ date-picker+time-picker)                                                                                | `composeRefs`(from dialog), `composeEventHandlers`/`useId`/`addUnit`/`ensureArray`/`EVENT_CODE`; deps focus-trap/roving-focus-group(clean)/collection(clean)/tooltip/scrollbar/icon-font/slot/popper — **its own WU, never bundled with select** |
| **dialog**      | deep + highest-risk   | DS config shim `useGlobalConfig`(g-hooks, §2.1), `useDraggable`(g-hooks), `composeRefs`(g-utils, shared w/ dropdown)                                         | `useSameTarget`(from overlay), `useZIndex`/`useId`(from popper family), `addUnit`/`isClient`/`isBoolean`; deps `g-focus-trap`/`g-overlay`/`g-teleport`/`g-icon-font`/`g-button`                                                                  |
| **date-picker** | deep + lint debt      | `castArray`(g-utils)                                                                                                                                         | `useLocale`(from dropdown), `ClickOutside`(from select), `isArray`/`isFunction`/`useNamespace`/`EVENT_CODE`; **fix pre-existing `no-unused-vars` in-place** (decision 3)                                                                         |
| **time-picker** | deep                  | `getStyle`(g-utils), `vRepeatClick`(g-utils directive)                                                                                                       | `useEmptyValues`(from select), `useLocale`(from dropdown), `useFocusController`(g-hooks — currently still imported from EP!); deps `g-form`/`g-input`/`g-icon-font`/`g-tooltip`                                                                  |

Constraints honored on every package: **zero public API change** (props/emits/slots untouched — only internal import specifiers move); source-only packages stay `buildable:false`; each migration WU validated in `front-b2b` with **real copies** in `node_modules` (never symlinks — symlinks strip base CSS / Tailwind `@apply`); build via `node scripts/build-components.js`; lint `eslint --max-warnings 0`; env Node v20.19.3 + dummy `GBP_PACKAGE_TOKEN`.

## 4. Hook-by-Hook Design (~19 symbols, EP-faithful signatures, JIT ownership)

Each row: layer, EP source module, owning WU. Signatures mirror EP exactly so migration is import-swap only. `(exists)` symbols are re-points, listed in §3, not rebuilt.

**g-utils additions (pure helpers/types/directives — leaf layer):**

| Symbol                     | EP source                                  | Owner WU    | Notes                                                                 |
| -------------------------- | ------------------------------------------ | ----------- | --------------------------------------------------------------------- |
| `isFocusable`              | `utils/dom/aria.mjs`                       | focus-trap  | boolean predicate; distinct from existing `isElement`                 |
| `PatchFlags`               | Vue-internal re-export (`utils/vnode.mjs`) | overlay     | small enum/const mirror                                               |
| `composeRefs`              | `utils/vue/refs.mjs`                       | dialog      | distinct from existing `composeEventHandlers`; dropdown re-points     |
| `castArray`                | `utils/arrays.mjs`                         | date-picker | distinct from existing `ensureArray` (EP semantics differ on nullish) |
| `getStyle`                 | `utils/dom/style.mjs`                      | time-picker | computed-style reader                                                 |
| `ClickOutside` (directive) | `directives/click-outside`                 | select      | shared w/ date-picker; unit-testable handler map                      |
| `vRepeatClick` (directive) | `directives/repeat-click`                  | time-picker | shared w/ input-number (v5)                                           |

**g-hooks additions (generic composables — deps g-utils + Vue only, no form context):**

| Symbol                                                                            | EP source                          | Owner WU   | Signature sketch                                                                                   |
| --------------------------------------------------------------------------------- | ---------------------------------- | ---------- | -------------------------------------------------------------------------------------------------- |
| `useEscapeKeydown`                                                                | `hooks/use-escape-keydown`         | focus-trap | `(handler: (e: KeyboardEvent) => void) => void`                                                    |
| `useForwardRef` + `useForwardRefDirective` + `FORWARD_REF_INJECTION_KEY`          | `hooks/use-forward-ref`            | slot       | one module, one shared symbol (§2.2)                                                               |
| `useSameTarget`                                                                   | `hooks/use-same-target`            | overlay    | `(handleClick?: (e: MouseEvent) => void) => { onClick, onMousedown, onMouseup }`; dialog re-points |
| `usePopper`                                                                       | `components/popper/.../use-popper` | popper     | `(refEl, popperEl, opts) => { state, styles, attributes, update, forceUpdate, instanceRef }`       |
| `useZIndex`                                                                       | `hooks/use-z-index`                | popper     | `(zIndexOverrides?) => { initialZIndex, currentZIndex, nextZIndex }`; dialog re-points             |
| `usePopperContainer` + `usePopperContainerId`                                     | `hooks/use-popper-container`       | tooltip    | container id + teleport target composables                                                         |
| `useDelayedToggle` + `useDelayedToggleProps`                                      | `hooks/use-delayed-toggle`         | tooltip    | `({ showAfter, hideAfter, autoClose, open, close }) => { onOpen, onClose }`                        |
| `createModelToggleComposable`                                                     | `hooks/use-model-toggle`           | tooltip    | factory returning `use<Name>ModelToggle` + props/emits                                             |
| `useGlobalConfig` (DS shim) + `provideGlobalConfig` + `gConfigProviderContextKey` | reimplemented (§2.1)               | dialog     | single-key overload + whole-context overload                                                       |
| `useDraggable`                                                                    | `hooks/use-draggable`              | dialog     | `(targetRef, dragRef, draggable, overflow?) => void`                                               |
| `useEmptyValues` + `useEmptyValuesProps` + `gEmptyValuesContextKey`               | `hooks/use-empty-values` (§2.3)    | select     | `(props, defaultValue?) => { emptyValues, valueOnClear, isEmptyValue }`                            |
| `useCalcInputWidth`                                                               | `hooks/use-calc-input-width`       | select     | `() => { calculatorRef, inputStyle }`; input-tag re-points                                         |
| `whenMouse`                                                                       | `hooks/.../when-mouse`             | dropdown   | `(handler) => (e: PointerEvent) => void` guard                                                     |
| `useLocale`                                                                       | `hooks/use-locale`                 | dropdown   | `(localeOverrides?) => { lang, locale, t }`; date-picker/time-picker re-point                      |

> `usePopper`, `useDraggable`, and `createModelToggleComposable` are the highest-drift copies (largest algorithms). Copy byte-exact, no improvements, dedicated unit test before wiring — the copied-algorithm-drift risk from the proposal lands here.

## 5. Topological Build Order & Work Units (chained PRs, `stacked-to-main`, ≤400 lines, publish per WU)

JIT ownership is folded into each migration WU — no speculative foundation-first hook PR. The earlier package in the order owns any shared hook; later ones re-point (dependencies noted).

| WU    | Deliverable (migrate package + build its JIT hooks + remove its ESLint exclude) | Depends on       | Owns (built here)                                                         | Re-points                                                               |
| ----- | ------------------------------------------------------------------------------- | ---------------- | ------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| WU-1  | **focus-trap**                                                                  | —                | `useEscapeKeydown`, `isFocusable`                                         | —                                                                       |
| WU-2  | **slot**                                                                        | —                | forward-ref family (one module)                                           | —                                                                       |
| WU-3  | **overlay**                                                                     | —                | `useSameTarget`, `PatchFlags`                                             | —                                                                       |
| WU-4  | **scrollbar** (pure re-point)                                                   | —                | —                                                                         | `useAriaProps` etc.                                                     |
| WU-5  | **popper** (core)                                                               | WU-1, WU-2       | `usePopper`, `useZIndex`                                                  | `useForwardRef`(WU-2), `isFocusable`(WU-1)                              |
| WU-6  | **tooltip**                                                                     | WU-5             | `useDelayedToggle*`, `createModelToggleComposable`, `usePopperContainer*` | —                                                                       |
| WU-7  | **dialog** (highest-risk)                                                       | WU-3, WU-5       | config shim `useGlobalConfig`, `useDraggable`, `composeRefs`              | `useSameTarget`(WU-3), `useZIndex`(WU-5)                                |
| WU-8  | **select**                                                                      | WU-6             | `useEmptyValues*`, `useCalcInputWidth`, `ClickOutside`                    | **`g-tooltip`**(WU-6) for `TooltipInstance`/`useTooltipContentProps`    |
| WU-9  | **dropdown** (widest fan-out, dedicated)                                        | WU-6, WU-4, WU-7 | `whenMouse`, `useLocale`                                                  | `composeRefs`(WU-7), tooltip/scrollbar                                  |
| WU-10 | **date-picker** (+ in-place lint-debt fix)                                      | WU-9, WU-8       | `castArray`                                                               | `useLocale`(WU-9), `ClickOutside`(WU-8)                                 |
| WU-11 | **time-picker**                                                                 | WU-6, WU-9, WU-8 | `getStyle`, `vRepeatClick`                                                | `useEmptyValues`(WU-8), `useLocale`(WU-9), `useFocusController`(exists) |
| WU-12 | **input-tag** (pure re-point)                                                   | WU-8             | —                                                                         | `useCalcInputWidth`(WU-8)                                               |
| WU-13 | **inline** (pure re-point, smallest)                                            | —                | —                                                                         | `useFormSize`(g-form, exists)                                           |

**Critical-path chain:** WU-1/WU-2 → WU-5 (popper) → WU-6 (tooltip) → WU-8 (select) / WU-9 (dropdown) → WU-10/WU-11. **dialog (WU-7)** sits on a parallel branch off overlay+popper, independent of the tooltip chain.

**Parallelism:** WU-1..WU-4 (near-leaves) are mutually independent and can be developed concurrently; scrollbar (WU-4) and inline (WU-13) are fully independent of the popper chain and can land any time after their trivial deps. Once popper (WU-5) lands, the tooltip branch (WU-6→WU-8/WU-9), the dialog branch (WU-7), and the picker branch (WU-10/WU-11) proceed in parallel. dropdown (WU-9) stays its own PR and is never bundled with select (proposal risk).

**Chain strategy:** `stacked-to-main` (v3 precedent) — each WU is its own PR merging to `main` in order; each child PR body carries the dependency diagram marking the current PR with a locator and states start/end/prior-deps/out-of-scope (chained-pr skill). Incremental Lerna publish per merged WU; `front-b2b`/`front-admin` consume the migration incrementally with real-copy validation on `ander/update/version-packages`.

**Test strategy:** strict TDD, Vitest, unit-only, `yarn test:run`. Every new symbol lands red→green with its unit test authored first (config shim resolution §2.1; forward-ref shared-symbol handshake §2.2; `useEmptyValues` cascade §2.3; `usePopper`/`useDraggable`/`createModelToggleComposable` byte-exact behavior). No DOM/integration/mounted tests beyond what unit scope allows.

## 6. Design-Level Risks

| Risk                                                                                       | Mitigation                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Config shim regresses dialog `namespace`                                                   | Only key consumed is `namespace`, default `"gui"`; island hardcodes `"gui"`; shim falls through to default in every context → byte-identical. Unit-test all three resolution branches; validate dialog in b2b before removing exclude. |
| Forward-ref handshake breaks from a duplicated symbol                                      | Single g-hooks module owns the one shared `FORWARD_REF_INJECTION_KEY`; slot builds, popper re-points to the same export.                                                                                                               |
| `select` re-point ordering hazard                                                          | Sequence WU-8 strictly after WU-6; re-point `TooltipInstance`/`useTooltipContentProps` to `@flash-global66/g-tooltip`, not an EP subpath.                                                                                              |
| Copied heavy algorithms drift (`usePopper`, `useDraggable`, `createModelToggleComposable`) | Byte-exact copy, no improvements, dedicated unit test before wiring.                                                                                                                                                                   |
| date-picker lint-debt widens diff                                                          | Scope `no-unused-vars` cleanup to touched files inside WU-10; keep `--max-warnings 0` green without a separate chore.                                                                                                                  |
| Already-extracted hooks not auto-consumed (time-picker → `useFocusController` from EP)     | Every WU gets an explicit re-point pass even where no new hook work exists.                                                                                                                                                            |
| Stale radio-group→radio.type latent bug                                                    | Documented in §2.4; tracked as a standalone defect; NOT fixed inside any v4 WU.                                                                                                                                                        |

## 7. Dependency Graph (final, acyclic)

```
                         g-utils
   (isFocusable, PatchFlags, composeRefs, castArray, getStyle,
    ClickOutside, vRepeatClick  + existing v2/v3 helpers)
        ▲                                              ▲
        │                                              │
     g-hooks                                        g-form
 (useEscapeKeydown, forward-ref family, useSameTarget,     (useFormSize — exists;
  usePopper, useZIndex, usePopperContainer*,                inline/time-picker re-point)
  useDelayedToggle*, createModelToggleComposable,
  useGlobalConfig(DS shim), useDraggable,
  useEmptyValues*, useCalcInputWidth, whenMouse, useLocale
  + existing useId/useFocusController/useAriaProps/...)
        ▲                                              ▲
        └──────────────────────┬───────────────────────┘
                               │
   components/{focus-trap, slot, overlay, scrollbar, popper, tooltip,
               select, dropdown, dialog, date-picker, time-picker,
               input-tag, inline}
```

No back-edges. The two config-provider-sourced hooks (`useGlobalConfig`, `useEmptyValues`) sit in `g-hooks` with DS-owned injection keys and hard defaults — placeable there precisely because neither reads form context (unlike v3's `useFormSize`). The DS `config-provider` island is untouched and continues wrapping real EP.

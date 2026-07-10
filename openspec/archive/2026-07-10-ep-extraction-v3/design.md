# Technical Design: EP Extraction v3 — First Form-Control Slice

> Artifact store: hybrid. Design phase of `ep-extraction-v3`. Reads `proposal.md` (same dir) / engram `sdd/ep-extraction-v3/proposal`.
> Scope locked: build the hooks/utils the 5 packages actually import, migrate `checkbox, radio, switch, segmented, input`. `input-number` deferred to v4.

## 1. Technical Approach

Copy EP algorithms **exactly** (no "improvements") into own-code packages, cover each with Vitest unit tests **before** wiring it into a component (strict TDD), then re-point the 5 packages' imports mechanically and delete their `.eslintrc.cjs` `excludedFiles` entries only after each is lint-clean under `--max-warnings 0`.

The dependency layering is already established by v2 and stays strictly one-directional:

```
g-utils        (leaf — no internal DS deps; pure helpers, types, constants, useNamespace)
   ▲
g-hooks        (deps: g-utils)  — generic Vue composables, no form-context coupling
   ▲
g-form         (deps: g-hooks, g-utils) — form-context-derived composables
   ▲
components/{checkbox,radio,switch,segmented,input}  (deps: g-utils, g-hooks, g-form)
```

This graph is **acyclic** and every new symbol lands in the lowest layer that can host it without creating a back-edge. That single rule resolves Decision 1 and Decision 3 below.

### 1.1 Discovery that reshapes the slice (verified against `main`)

The proposal's "build in g-utils" list was written against the pre-v2 state. Grepping `common/g-utils/src` shows **v2 already shipped most of it**. Do NOT rebuild these — they exist and are tested:

| Proposal said "build"                         | Actual state on `main`                     | Location                      |
| --------------------------------------------- | ------------------------------------------ | ----------------------------- |
| `isBoolean` / `isString` / `isObject`         | EXISTS                                     | `utils/validators.util.ts`    |
| `buildProps` / `buildProp` / `definePropType` | EXISTS                                     | `utils/props.util.ts`         |
| `debugWarn` / `throwError`                    | EXISTS                                     | `utils/error.util.ts`         |
| `withInstall` / `SFCWithInstall`              | EXISTS                                     | `utils/install.util.ts`       |
| `ComponentSize` type                          | EXISTS (`'large' \| 'default' \| 'small'`) | `types/component.type.ts`     |
| `isNumber` / `addUnit`                        | EXISTS                                     | `utils/number.util.ts`        |
| `isArray`                                     | EXISTS                                     | `utils/array.util.ts`         |
| `isClient`                                    | EXISTS                                     | `utils/dom.util.ts`           |
| `NOOP`                                        | EXISTS                                     | `utils/function.util.ts`      |
| `isUndefined` / `isPropAbsent`                | EXISTS                                     | `utils/object.util.ts`        |
| `UPDATE_MODEL_EVENT` / `CHANGE_EVENT`         | EXISTS                                     | `constants/event.constant.ts` |
| `useNamespace`                                | EXISTS + tested                            | `composables/useNamespace.ts` |

**What is genuinely still MISSING in g-utils** (this is the real WU-1, much smaller than the proposal implied):

- `isValidComponentSize` (used by switch, input) — NOT present.
- `componentSizes` constant (backing `useSizeProp` + `isValidComponentSize`) — NOT present.
- `mutable` type/util (used by `input.ts`) — NOT present.
- `isPromise` (used by `switch.vue`) — NOT present.
- `ValidateComponentsMap` (used by `input.vue`) — NOT present, and it is **NOT a byte-copy candidate** (see Decision 3.4).

> `INPUT_EVENT` is intentionally **NOT** in scope for v3: grep confirms it is consumed only by `input-number` (deferred to v4), not by `input`. `switch` already imports `INPUT_EVENT` from its **local** `./constants` (not from `element-plus`), so it needs no g-utils addition. Do not add `INPUT_EVENT` in v3.

This shrinks WU-1 to 4 small additions and keeps every WU comfortably under the 400-line budget.

## 2. Resolved Architecture Decisions

### 2.1 Decision 1 — `useFormSize` placement: **put it in `g-form`** (option a)

**Chosen:** `useFormSize` lives in `@flash-global66/g-form` next to its structural twin `useFormDisabled`.

**Why this is the only acyclic choice.** `useFormSize` must read the form/form-item injection context to honor size precedence. Those injection keys (`formContextKey`, `formItemContextKey`) live in `g-form` (`components/form/src/constants.ts`). `g-form` already depends on `g-hooks` (it imports `useProp`/`useId`). Therefore `g-hooks` importing those keys from `g-form` would create the cycle `g-hooks → g-form → g-hooks`. Hosting the hook in `g-form` keeps the edge one-directional.

`useFormDisabled` (already in `g-form/src/hooks/use-form-common-props.ts`) is the exact precedent: it composes `useProp` (from `g-hooks`) with `inject(formContextKey)` (from `g-form`). `useFormSize` is the size-domain sibling and belongs in the same file. The **generic tiers stay generic**: `useProp` and `useGlobalSize` remain in `g-hooks` and are _composed_ by `useFormSize` — so `g-hooks` never learns about form context.

**Behavior — `prop > global config` only (pure refactor, no new feature).** DS `g-form` has **no `size` prop today** (verified: `formProps` in `components/form/src/form.ts` exposes only `disabled` + validation; `FormContext`/`FormItemContext` carry no `size`). Form-level size inheritance simply does not exist in the DS, so EP's `useFormSize` in these components already resolves the form tier to `undefined` and the effective behavior is `prop > global`. **v3 preserves this exactly.** `useFormSize` lives in `g-form` (acyclic placement, correct) and resolves:

```
explicit prop (useProp<ComponentSize>('size')) > fallback > useGlobalSize() > 'default'
```

with **no form-context size tier**. This is a migration, not a feature: we do NOT add a `size` prop to `formProps`/`formItemProps` (rejected as scope creep — it would introduce behavior that does not exist today).

> **Future enhancement (out of v3 scope):** if form-level size inheritance is ever wanted, add an optional `size?: ComponentSize` to `formProps`/`formItemProps` and reinstate the `formItem?.size > form?.size` tiers in `useFormSize`. This is a deliberate deferral, not an oversight.

**Rejected alternatives:**

- **(b) Move the injection keys into `g-hooks`/`g-utils`.** Requires refactoring g-form's whole context system (form-item, validation, disabled all depend on those keys), high blast radius, out of slice scope, and inverts domain ownership (form context is a form concern).
- **(c) Pass form size as a param.** Breaks the "mechanical migration" goal: segmented/switch currently call `useFormSize()` with no plumbing; forcing every call site to `inject` and pass the context would be a non-mechanical, error-prone rewrite of the exact code we want to swap by import path only.

### 2.2 Decision 2 — Hook / util API signatures (EP-faithful, so migration is import-swap only)

All signatures below mirror the exact EP shapes the 5 packages already call, so migration changes only the module specifier.

**`g-utils` additions (WU-1):**

```ts
// types/component.type.ts (or a new size.type.ts)
export const componentSizes = ['', 'default', 'small', 'large'] as const;
// NOTE fidelity: the runtime values array mirrors EP (includes '') so that
// isValidComponentSize / useSizeProp accept the same set EP accepted at runtime,
// even though the exported ComponentSize *type* stays 'large' | 'default' | 'small'.

// utils/validators.util.ts
export const isValidComponentSize = (val: string): boolean =>
  ['', 'default', 'small', 'large'].includes(val);
export const isPromise = <T = any>(val: unknown): val is Promise<T> =>
  isObject(val) &&
  isFunction((val as any).then) &&
  isFunction((val as any).catch);

// types/utils.type.ts  (Mutable is an EP type helper; `mutable` is its identity cast)
export type Mutable<T> = { -readonly [P in keyof T]: T[P] };
export const mutable = <T extends readonly any[] | Record<string, unknown>>(
  val: T,
) => val as Mutable<T>;
```

**`g-hooks` shared form-control hooks (WU-2):**

```ts
// useAriaProps.ts — returns { ariaProps } with a buildProp'd String entry per requested aria key
export const useAriaProps: <Arias extends Array<keyof AriaAttributes>>(
  arias: Arias,
) => { ariaProps: Pick<AriaProps, Arias[number]> };

// useSizeProp.ts — a buildProp'd prop DEFINITION constant (not a function), mirroring EP
export const useSizeProp: EpProp<
  StringConstructor,
  (typeof componentSizes)[number],
  false
>;
// = buildProp({ type: String, values: componentSizes, required: false } as const)
```

**`g-form` (WU-2):**

```ts
// hooks/use-form-common-props.ts — sibling of useFormDisabled
export const useFormSize: (
  fallback?: MaybeRef<ComponentSize | undefined>,
  ignore?: Partial<Record<'prop' | 'global', boolean>>,
) => ComputedRef<ComponentSize>;
// resolution (pure refactor — no form-context tier, since g-form has no size prop):
//   prop(useProp<ComponentSize>('size')) > unref(fallback) > useGlobalSize() > 'default'
```

**`g-hooks` input sub-family (WU-4):**

```ts
// useComposition.ts
export const useComposition: (opts: {
  afterComposition: (event: CompositionEvent) => void;
  emit?: SetupContext['emit'];
}) => {
  isComposing: Ref<boolean>;
  handleComposition: (event: CompositionEvent) => void;
  handleCompositionStart: (event: CompositionEvent) => void;
  handleCompositionUpdate: (event: CompositionEvent) => void;
  handleCompositionEnd: (event: CompositionEvent) => void;
};

// useCursor.ts
export const useCursor: (
  input: Ref<HTMLInputElement | HTMLTextAreaElement | undefined>,
) => [record: () => void, restore: () => void];

// useFocusController.ts
export const useFocusController: <T extends { focus: () => void }>(
  target: Ref<T | undefined>,
  opts?: {
    afterFocus?: () => void;
    beforeBlur?: (event: FocusEvent) => boolean | undefined;
    afterBlur?: () => void;
  },
) => {
  wrapperRef: ShallowRef<HTMLElement | undefined>;
  isFocused: Ref<boolean>;
  handleFocus: (event: FocusEvent) => void;
  handleBlur: (event: FocusEvent) => void;
  handleClick: () => void;
};

// useAttrs.ts — EP-flavored merged attrs (distinct from Vue's useAttrs)
export const useAttrs: (params?: {
  excludeListeners?: boolean;
  excludeKeys?: ComputedRef<string[]>;
}) => ComputedRef<Record<string, unknown>>;
// DEFAULT_EXCLUDE_KEYS = ['class', 'style']; LISTENER_PREFIX = /^on[A-Z]/
```

### 2.3 Decision 3 — Input sub-family placement: **`g-hooks`** (except `ValidateComponentsMap`)

`useComposition`, `useCursor`, `useFocusController`, and the EP-flavored `useAttrs` go in **`g-hooks`**, not input-local.

**Why g-hooks (the proposal's "prefer g-hooks if reusable by v4" test):** all four are pure Vue composables with **no form-context coupling** (only `g-utils` + Vue), so no cycle risk (`g-hooks → g-utils` only). And each is consumed by v4's deferred packages: `input-tag` and `select`'s filter input reuse `useComposition`/`useCursor`/`useFocusController`; `useAttrs` is a generic attr-merge used across many wrappers. Extracting to `g-hooks` now avoids a second extraction in v4.

**Exception — `ValidateComponentsMap` is NOT a byte-copy and does NOT go in g-utils.** In EP it maps validate states to `@element-plus/icons-vue` components (`Loading`/`CircleCheck`/`CircleClose`). The DS renders icons via `@flash-global66/g-icon-font` (`IconString`/`GIconFont`), so this map must be **re-authored against DS icons**, not copied. Putting it in `g-utils` would force `g-utils` to depend on `g-icon-font`, polluting the leaf layer. **Decision: keep `ValidateComponentsMap` input-local** (`components/input/src/`), authored against DS icons, migrated inside WU-5. First action in WU-5: confirm whether `input.vue` still _uses_ the symbol (grep shows only the import line) — if unused, drop the import entirely; if used, re-author with DS icons. This is a proposal deviation (proposal placed it in g-utils) and the one non-mechanical piece of the input migration.

### 2.4 Decision 4 — WU sequencing (chained PRs, `stacked-to-main`, ≤400 lines, publish per WU)

Refined from the proposal to reflect the discoveries (smaller WU-1; `useFormSize` in g-form so WU-2 publishes g-hooks **+ g-form**):

| WU   | Deliverable                                                                                                                   | Depends on | Publishes       | Est. lines |
| ---- | ----------------------------------------------------------------------------------------------------------------------------- | ---------- | --------------- | ---------: |
| WU-1 | `g-utils`: `isValidComponentSize`, `componentSizes`, `isPromise`, `mutable`/`Mutable` + unit tests                            | —          | g-utils         |       ~150 |
| WU-2 | `g-hooks`: `useAriaProps`, `useSizeProp` + tests; **`g-form`: `useFormSize` (`prop > global`, no form-context tier) + tests** | WU-1       | g-hooks, g-form |       ~300 |
| WU-3 | Migrate the 4 light controls (checkbox, radio, switch, segmented) + remove their 4 ESLint excludes                            | WU-1, WU-2 | 4 controls      |       ~260 |
| WU-4 | `g-hooks` input sub-family: `useComposition`, `useCursor`, `useFocusController`, EP `useAttrs` + tests                        | WU-1       | g-hooks         |       ~380 |
| WU-5 | Migrate `input` (incl. `ValidateComponentsMap` decision) + remove its ESLint exclude                                          | WU-2, WU-4 | input           |       ~220 |

**Ordering rationale:** foundations before consumers. WU-1 (utils) unblocks everything. WU-2 ships the shared hooks + `useFormSize`; note **WU-2 must publish g-form** because switch and segmented both consume `useFormSize`. WU-3 migrates the 4 controls that need only WU-1+WU-2. WU-4 is the heaviest (4 input hooks) and is isolated so it never blocks the light controls. WU-5 migrates `input` last on top of clean hooks.

**Parallelism:** WU-4 depends only on WU-1, so it can be developed **in parallel with WU-2/WU-3** (independent of the shared-hook and light-control work). Within WU-3 the four packages are independent files and can be migrated concurrently, but ship as one PR. WU-5 requires both WU-2 (useSizeProp/useAriaProps, useFormSize not needed by input but useSizeProp is) and WU-4.

**Chain strategy:** `stacked-to-main` — each WU is its own PR merging to `main` in order; each child PR body carries the dependency diagram marking the current PR with `📍` and states start/end/prior-deps/out-of-scope (chained-pr skill). Incremental Lerna publish per merged WU so `front-b2b` consumes the migration incrementally.

### 2.5 Decision 5 — Test strategy (strict TDD, Vitest, unit-only, `yarn test:run`)

Every new symbol lands red→green with a unit test authored first. Concrete first tests:

- **`isValidComponentSize`**: `true` for `''`, `'default'`, `'small'`, `'large'`; `false` for `'medium'`, `'xl'`, `undefined`-coerced.
- **`componentSizes`**: equals `['', 'default', 'small', 'large']`.
- **`isPromise`**: `true` for a real `Promise` and a `{then, catch}` thenable; `false` for `{}`, `null`, functions.
- **`mutable`/`Mutable`**: runtime identity (returns the same ref); type test that `readonly` is stripped.
- **`useAriaProps`**: returns `{ ariaProps }` containing exactly one buildProp'd `String` entry per requested aria key; unknown keys excluded.
- **`useSizeProp`**: prop def with `type === String`, `required === false`, `values` deep-equal `componentSizes`; validator accepts each valid size, rejects `'huge'`.
- **`useFormSize`**: mounted-component tests asserting `prop > fallback > useGlobalSize() > 'default'` — explicit prop wins; `fallback` beats global when prop absent; with no prop/fallback falls back to `useGlobalSize()` → `'default'`; `ignore.prop`/`ignore.global` flags neutralize each tier. (No form-context tier is asserted — it does not exist in v3.)
- **`useComposition`**: `compositionstart`/`update` set `isComposing = true`; `compositionend` sets it `false` and invokes `afterComposition`; verify the EP Firefox guard on `update`.
- **`useCursor`**: `record()` then mutate value then `restore()` reinstates `selectionStart`/`selectionEnd`; no-throw when the ref is `undefined`.
- **`useFocusController`**: `handleFocus` sets `isFocused = true` + fires `afterFocus`; `handleBlur` respects `beforeBlur` veto (returns `true` ⇒ blur suppressed) and otherwise clears focus + fires `afterBlur`; `handleClick` calls `target.focus()`.
- **`useAttrs`**: computed excludes `class`/`style` + provided `excludeKeys`; `excludeListeners: true` strips `on[A-Z]*` handlers; passes everything else through reactively.

## 3. Per-Package Migration (mechanical import re-point)

Each row lists the import specifier swaps; algorithms are unchanged. Remove the package's `excludedFiles` entry only after it is lint-clean.

| Package       | `element-plus` → own code                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **checkbox**  | `useNamespace`→g-utils; `useAriaProps`→g-hooks; `debugWarn`/`isArray`/`isBoolean`/`isObject`/`isString`/`isNumber`/`isPropAbsent`/`isUndefined`→g-utils; `UPDATE_MODEL_EVENT`→g-utils constants; `useFormDisabled`→g-form                                                                                                                                                                                                                 |
| **radio**     | `useId`→g-hooks; `useNamespace`→g-utils; `useAriaProps`→g-hooks; `buildProps`/`isBoolean`/`isNumber`/`isString`/`isPropAbsent`→g-utils; `UPDATE_MODEL_EVENT`/`CHANGE_EVENT`→g-utils constants                                                                                                                                                                                                                                             |
| **switch**    | `useAriaProps`/`useSizeProp`→g-hooks; `useFormDisabled`/`useFormSize`→g-form; `useNamespace`→g-utils; `addUnit`/`debugWarn`/`isBoolean`/`isPromise`/`throwError`/`isValidComponentSize`/`buildProps`/`definePropType`/`isNumber`/`isString`→g-utils; `ComponentSize` type→g-utils. (`INPUT_EVENT`/`CHANGE_EVENT`/`UPDATE_MODEL_EVENT` are already imported from local `./constants` — unchanged.)                                         |
| **segmented** | `useFormSize`→g-form; `useId`→g-hooks; `useNamespace`→g-utils; `buildProps`/`definePropType`/`isBoolean`/`isNumber`/`isString`/`isObject`/`debugWarn`→g-utils                                                                                                                                                                                                                                                                             |
| **input**     | `useAttrs`/`useComposition`/`useCursor`/`useFocusController`→g-hooks; `useAriaProps`/`useSizeProp`→g-hooks; `useNamespace`→g-utils; `NOOP`/`debugWarn`/`isClient`/`isObject`/`mutable`/`isString`/`definePropType`/`buildProps`→g-utils; `UPDATE_MODEL_EVENT`→g-utils constants; `useFormItem`/`useFormItemInputId`/`useFormDisabled` already g-form; **`ValidateComponentsMap`→input-local (re-author with DS icons or drop if unused)** |

**Constraints honored:** no public API change to any of the 5 components (props/emits/slots untouched — only internal imports move); source-only packages stay `buildable:false`; each migration WU validated in `front-b2b` with **real copies** in `node_modules` (never symlinks — symlinks strip base CSS / Tailwind `@apply`); build via `node scripts/build-components.js`; lint `eslint --max-warnings 0`; env node v20.19.3 + dummy `GBP_PACKAGE_TOKEN`.

## 4. Risks (design-level)

| Risk                                                                       | Mitigation                                                                                                                                                          |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Someone re-adds form-level size inheritance during migration (scope creep) | `useFormSize` resolves `prop > global` ONLY; no `size` prop added to g-form. Pure refactor — behavior preserved exactly. Future enhancement is explicitly out of v3 |
| `ValidateComponentsMap` can't be byte-copied (EP icons vs g-icon-font)     | Input-local re-author against DS icons; verify it's still used before porting (grep shows import only)                                                              |
| `componentSizes` includes `''` but `ComponentSize` type omits it           | Keep runtime values array EP-faithful (incl. `''`) for validator parity; type stays as-is — documented fidelity note in code                                        |
| Copied composition/cursor/focus algorithms drift                           | Byte-exact copy + dedicated unit tests before wiring (WU-4 precedes WU-5)                                                                                           |
| WU-2 must publish g-form (not just g-hooks) or switch/segmented break      | Publish set for WU-2 = g-hooks + g-form; noted in sequencing table                                                                                                  |

## 5. Dependency Graph (final, acyclic)

```
                 g-utils
                (componentSizes, isValidComponentSize,
                 isPromise, mutable/Mutable  + existing v2 helpers)
                    ▲            ▲
                    │            │
     ┌──────────────┘            └───────────────┐
   g-hooks                                      g-form
  (useAriaProps, useSizeProp,                 (useFormSize  ← composes
   useComposition, useCursor,                  useProp + useGlobalSize from g-hooks;
   useFocusController, useAttrs                 resolves prop > global,
   + existing useId/useProp/useGlobalSize)      no form-context size tier)
                    ▲                                   ▲
                    └──────────────┬────────────────────┘
                                   │
        components/{checkbox, radio, switch, segmented, input}
```

No back-edges. `useFormSize` is the only contested node and is placed in `g-form` precisely to avoid the `g-hooks → g-form` cycle.

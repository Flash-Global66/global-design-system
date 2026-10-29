# g-menu 0.1.1: the collapsed sub-menu popup grows to fit its items instead of inheriting the tooltip box (BMB-4217)

> **Rama:** `fix/BMB-4217-menu-popup-width`
> **Base:** `485dc0ba`
> **HU:** `BMB-4217`

The diff from `Base` includes this `proposal.md`, its `tasks.md` and `specs/`: they're the change, not extra work.

## Qué encontré

**There is no `.codegraph/` in this repo**, so this was decided with `grep`, direct reads and measurements in Storybook (`localhost:6006`, story `feedback-menu--collapsed-with-badges`), not with the graph. The org MCP `g66` wasn't needed: everything lives in this repo.

**The dev's diagnosis checks out against the code:**

- `components/menu/MenuSub.vue:15-29` renders the popup inside `<g-tooltip>` without `is-component`.
- `components/tooltip/src/tooltip.vue:25-29` builds the popper class per instance. Without `isComponent` it adds `ns.e('tooltip')` (`gui-popper__tooltip`); with it, the class is only `popperClass`.
- `components/tooltip/src/tooltip.styles.scss:11` gives `.gui-popper__tooltip` the rule `p-md bg-everBlue-50 border-none rounded-md max-w-56 pt-sm shadow-md !important`. Those styles are for text tooltips.
- `components/tooltip/src/content.ts:82` declares the `isComponent` prop. It already exists and is used by `components/dropdown/src/dropdown.vue:10` and `components/select/src/select.vue:14`.

**Measured in Storybook on `485dc0ba`, with the "Integraciones" popup open:**

|                                              | Today (`gui-popper__tooltip`)               | Class removed in the DOM (what `is-component` produces) |
| -------------------------------------------- | ------------------------------------------- | ------------------------------------------------------- |
| popper width                                 | 224px (`max-width: 224px`)                  | 200px, the list's `min-width`                           |
| popper padding                               | `12px 16px 16px`                            | `0`                                                     |
| popper background                            | `rgb(233,237,248)` (everBlue-50)            | `rgb(255,255,255)`                                      |
| radius / shadow                              | 8px / `0 3px 6px .16`                       | 8px / `0 1px 3px .12`                                   |
| item relabeled "Programa de Referidos largo" | item stuck at 176px, text overflows the box | popper grows to 325px, nothing overflows                |

So the overflow already happens with short labels: a 200px list inside 192px of usable width (224 minus 2×16 padding).

**Blast radius of `is-component`:** it is a prop on one `<g-tooltip>` instance. It only changes that instance's popper class (`tooltip.vue:25-29`). The other `<g-tooltip>` in g-menu is the collapsed item's label tooltip (`components/menu/MenuItem.vue:15`). It doesn't receive the prop and keeps `gui-popper__tooltip`. No file in `components/tooltip/` changes, so no other consumer of `GTooltip` is affected.

**Look decision (answered by the dev):** the popup ends up as a white card, the same one `is-component` produces in dropdown and select, with no extra CSS. The dev's condition: the change must be safe, apply only to the menu, and break nothing else that uses the tooltip.

**Rules (`calcifer rules`):** the same set as `menu-collapse-fix`. The package is still legacy (no `src/`), so `ds-sfc-trio`/`ds-types-location` don't apply here. `code-comments` and `jsdoc` do apply to the `.vue`/`.ts` files.

**Baseline on `485dc0ba`:** 5 test files with 76 tests pass in `components/menu`, `eslint components/menu` exits 0, and `yarn styles:check` exits 0.

## Qué propongo, y qué queda afuera

The sub-menu popup in popup mode (vertical+collapse, and horizontal) stops inheriting the text-tooltip box. It grows to the width of its items and shows as a white card. The collapsed item's label tooltip is unchanged. Collapsed Storybook gains items that reproduce the real case: a long label and an item with a badge.

Version: the `fix(menu)` commit makes lerna publish `@flash-global66/g-menu@0.1.1` after the merge to `release`, with no new public props.

**Out of scope:**

- Any file in `components/tooltip/` or in another component. The `max-w-56 !important` on `gui-popper__tooltip` stays as it is for tooltips.
- Restyling the popup beyond what `is-component` gives (no extra CSS in `menu.styles.scss`). The dev chose the white card.
- The collapsed item's label tooltip (`MenuItem.vue`).
- The three suggestions from the PR #359 review: duplicated `--gui-menu-width-collapse`, possible focus loss after keyboard activation in the popup, and the empty SCSS rule.
- front-b2b: the bump to 0.1.1 is theirs once this is published.

## Con qué restricciones

- **Only g-menu.** `git diff` from `Base` touches nothing under `components/` outside `components/menu/`.
- `code-comments.md`: no line comment unless it states a why the code can't say. `is-component` needs none, because dropdown and select use it the same way.
- `ds-git-flow`: Conventional Commits with no ticket prefix, PR against `release`, merge commit.
- `ds-package-lifecycle`: no manual edit to `CHANGELOG.md` or `version`.
- **Claude doesn't commit unless the dev asks.** The apply hands over each task's commit command.

## Cómo se verifica

This change **alters behavior**: the popup's width and look in popup mode. It adds one requirement to `specs/g-menu/spec.md` (ADDED, since the current spec has 7 requirements and none on the popup box).

**Scenarios for the spec delta, and which task covers each:**

- **Requirement "Sub-menu popup fits its content" (SHALL grow to its items' width and SHALL NOT carry the text-tooltip class)**:
  - scenario "Collapsed popup shows long and badged items whole" → task 1 (code and spec), task 2 (story for the browser check)
  - scenario "Collapsed item label tooltip keeps its box" → task 1 (guard in `MenuItem.spec.ts`)

**Commands** (run on `485dc0ba` before writing them):

| Comando                                                                                     | Qué mide                                                               | Hoy                               | Esperado                                                                |
| ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- | --------------------------------- | ----------------------------------------------------------------------- |
| `npx vitest run --project unit components/menu 2>&1 \| grep -E "Test Files\|Tests "`        | test files and tests in the package                                    | `5 passed (5)` / `76 passed (76)` | `Test Files 5 passed`; `Tests` with 0 failed and **at least 78** passed |
| `grep -c "is-component" components/menu/MenuSub.vue`                                        | lines in MenuSub passing `is-component`                                | `0`                               | `≥ 1`                                                                   |
| `grep -c "gui-popper__tooltip" components/menu/tests/MenuSub.spec.ts`                       | lines in the MenuSub spec asserting about the tooltip class            | `0`                               | `≥ 1`                                                                   |
| `grep -c "gui-popper__tooltip" components/menu/tests/MenuItem.spec.ts`                      | lines in the MenuItem spec asserting the label tooltip keeps its class | `0`                               | `≥ 1`                                                                   |
| `git diff --name-only 485dc0ba..HEAD -- components \| grep -v '^components/menu/' \| wc -l` | changed files under `components/` outside g-menu (tooltip included)    | `0`                               | `0`                                                                     |
| `npx eslint components/menu; echo $?`                                                       | lint of the package                                                    | `0`                               | `0`                                                                     |
| `yarn styles:check >/dev/null 2>&1; echo $?`                                                | public SCSS compiles and is registered                                 | `0`                               | `0`                                                                     |

**Change-level criterion (Storybook browser check, `feedback-menu--collapsed-with-badges`, collapsed):**

- Hovering "Integraciones" opens a popper with no `gui-popper__tooltip` class. Its width is ≥ the widest item's `scrollWidth`, and no `.gui-menu-item` has its right edge beyond the popper's right edge. "Programa de Referidos" and "API transaccional" with "Nuevo" are readable whole.
- Hovering a first-level item (Home) still opens the label tooltip with `gui-popper__tooltip` and the readable label (0.1.0 behavior).
- With the keyboard on a sub-menu title, Enter, Space or ArrowRight opens the popup and Escape closes it.

If no browser-verify run covers them, those points are `no_verificado`, and they rest on the specs and the greps.

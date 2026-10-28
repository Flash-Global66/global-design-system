# Fix the collapsed g-menu: collapse modifier, collapse animation, and keyboard access

> **Rama:** `fix/BMB-4217-menu-collapse-modifier`
> **Base:** `6ab47d43`
> **HU:** `BMB-4217`

The diff from `Base` includes this `proposal.md`, its `tasks.md` and `specs/`: they're the change, not extra work.

## Qué encontré

**There is no `.codegraph/` in this repo**, so this investigation used `grep`, direct reads, and the browser instead of the graph. The org MCP `g66` wasn't needed: the second repo involved (`front-b2b`) is cloned next to this one and was read directly.

**Root cause (confirmed by reading code and in the browser).** `components/menu/Menu.vue:6` emits `ns.is('collapse', collapse)`, which renders the class `is-collapse`. All the collapsed-mode CSS in `components/menu/menu.styles.scss` targets `.gui-menu--collapse`:

- the element-plus base (`@include m(collapse)`)
- the DS rules (`.gui-menu--collapse { width: 44px … }`)
- the active dot, which only shows under `.gui-menu:not(.gui-menu--collapse)`

The original `ElMenu` 2.9.7 uses the modifier: `front-docs-b2b/node_modules/element-plus/es/components/menu/src/menu.mjs:330` → `[nsMenu.m("collapse")]: props.collapse`. The regression came in with `8ed599da` (ep-extraction-v6 WU7) and has shipped since g-menu 0.0.9. front-b2b pins `0.0.10` (`front-b2b/package.json:73`).

**The test locks the bug in.** `components/menu/tests/Menu.spec.ts:54-56` asserts `toHaveClass('is-collapse')`.

**Browser evidence (Storybook `feedback-menu--default`, after clicking "Collapse").**

- Current state: the `ul` has class `gui-menu gui-menu--vertical is-collapse` and is 288px wide. Sub-menu titles are 288px with `padding-right: 44px`, and their label and chevron are visible.
- With `gui-menu--collapse` injected via `evaluate` (DOM altered on purpose to test the hypothesis): the `ul` is 44px, titles and items are 44px with the icon centered (offset 0px), and label and chevron are hidden.
- The sub-menu popup opens on hover.
- The active sub-menu shows as a 44px pill with `border-radius: 9999px`.
- Expanding again restores the layout with no cut-off elements (`scrollWidth === clientWidth`), and the console has no errors.

**Why plain items looked fine and sub-menus didn't.** `MenuItem.vue:12` and `MenuSub.vue:18` decide their branch (tooltip/popup) from `props.collapse` / `isMenuPopup`, not from the class. So the JS works and only the CSS hook is broken.

**Collapse animation.** `Menu.vue` documents `collapseTransition` as a no-op: it's in the file-level JSDoc and in the prop marked `@deprecated`. The original (`element-plus/es/components/menu/src/menu-collapse-transition.mjs`) wraps the `ul` in a `<Transition mode="out-in">`:

- the `ul` is keyed with `String(collapse)`, so it remounts on every toggle
- on leave it measures the target width by toggling `--collapse`, fixes `el.style.width`, and adds `horizontal-collapse-transition`
- on enter it fades opacity with `gui-opacity-transition`

Both classes already exist in `common/g-utils/styles/transition.scss:101` and `:122`, and `menu.styles.scss` already imports them (`@use '@flash-global66/g-utils/transition'`). `MenuSub.vue` already inlines `ElCollapseTransition` with the same technique, so there's an internal precedent.

**Keyboard.** Nothing in the menu is reachable by keyboard today:

- `MenuItem.vue:4` sets `tabindex="-1"`.
- The sub-menu title (`MenuSub.vue:32` and `:80`) has no `tabindex`.
- `handleMouseenter` returns early on `focus` (`MenuSub.vue:326`).
- `handleClick` ignores clicks in vertical collapsed mode (`MenuSub.vue:295-306`), so collapsed sub-menus only open on hover.
- There are no `keydown` handlers.

The base CSS removes the outline on `:focus` (`menu.styles.scss`, `&:hover, &:focus { outline: none }` in `menu-item` and `sub-menu__title`).

**The consumer.** `front-b2b/src/shared/layouts/components/MenuRoute/index.vue` passes `:collapse-transition="false"`. Its sub-menu titles carry badges inside `span`s (COMEX with `GBadge`, Integraciones with `GBadgeNew` absolutely positioned). The current story (`stories/menu.stories.ts`) has no badges, so it doesn't reproduce that case.

**Baseline measured on this branch:** 5 test files and 32 tests pass. ESLint on `components/menu` and the story exits 0. `yarn styles:check` exits 0.

## Qué propongo, y qué queda afuera

The collapsed menu renders as designed:

- 44px wide, one centered icon per item
- no labels, chevrons, or badges
- collapsed sub-menus reachable through their popup, both by mouse and by keyboard
- the active item highlighted in both states

Toggling animates the width when `collapseTransition` is `true` (the default) and switches instantly when it's `false`. A new story reproduces the front-b2b case with badges, starting collapsed.

**Out of scope:**

- **Anything in front-b2b**: bumping g-menu to the published version, removing `:collapse-transition="false"` if they want the animation, adjusting the `Sidebar`, removing the duplicate `@use`. The dev takes care of it after this package is published.
- **Full WAI-ARIA arrow-key navigation (roving tabindex) across the whole menu.** This plan makes every item and title reachable with Tab and operable with Enter/Space, popups open with Enter/Space/ArrowRight and close with Escape. Up/down arrow navigation between items stays out.
- **The horizontal mode's ellipsis/overflow** and the hover-darkening (`useMenuColor`), both cut on purpose in the migration.
- **Any change to the published package API.** No props are added or removed. `collapseTransition` stops being a no-op but keeps its signature and default.

## Con qué restricciones

- **Legacy package, not the archetype.** `components/menu` has no `src/`, so `ds-component-layers`, `ds-sfc-trio`, and `ds-styles-bem` don't apply (`calcifer rules components/menu/Menu.vue`). Only the tests fall under `ds-component-layers`, and they're already in `components/menu/tests/`. Don't migrate to the archetype in this change.
- **`code-comments.md` / `jsdoc.md`.** The file-level JSDoc in `Menu.vue` and the `@deprecated no-op` on `collapseTransition` describe a cut that this change undoes. They get updated or removed in the same diff. Don't add comments that narrate code.
- **`function-declarations.md`.** New named functions use `function`. Arrow functions are only for inline callbacks. Existing code (all `const x = () =>`) isn't refactored.
- **`side-effect-cleanup.md`.** Any timer or listener added for keyboard support gets cleaned up in the same closure.
- **`accessibility.md`.** Every interactive element is reachable and operable without a mouse, with a visible focus indicator (`:focus-visible`).
- **`ds-styles-delivery.md`.** `menu.styles.scss` is a public contract that the consumer compiles. `yarn styles:check` has to keep exiting 0.
- **Versioning (`ds-package-lifecycle`).** Commits use `fix(menu)` / `feat(menu)` / `docs(stories)`. Lerna computes the bump, and nobody edits `CHANGELOG.md` or `version` by hand.
- **Commits.** Claude doesn't commit. The apply leaves each task ready and hands over the exact command.

## Encontrado de paso

- `front-b2b/src/assets/styles/ui-framework-b2b/index.scss:8-9` imports `@flash-global66/g-menu/menu.styles.scss` twice. It doesn't cause this bug; it belongs to the front-b2b PR.
- `stories/menu.stories.ts:40-42` has a `hola()` function with a `console.log` that nothing uses. Task 4 removes it because it touches that file anyway.

## Cómo se verifica

This change **does alter behavior**: the collapsed menu goes back to rendering as designed, collapsing animates, and it gains keyboard access. The delta is in `specs/g-menu/spec.md`.

| Comando                                                                              | Qué mide                                                             | Baseline hoy                      | Esperado                                                                                                       |
| ------------------------------------------------------------------------------------ | -------------------------------------------------------------------- | --------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `npx vitest run --project unit components/menu 2>&1 \| grep -E "Test Files\|Tests "` | test files and tests in the package                                  | `5 passed (5)` / `32 passed (32)` | `Test Files` with 0 failed; `Tests` with 0 failed and **more than 32** passed (the new specs add to the count) |
| `grep -c "is('collapse'" components/menu/Menu.vue`                                   | uses of the wrong state class in the component                       | `1`                               | `0`                                                                                                            |
| `grep -rn "is-collapse" components/menu \| wc -l`                                    | lines in the package (code and tests) still mentioning `is-collapse` | `2`                               | `0`                                                                                                            |
| `npx eslint components/menu stories/menu.stories.ts --max-warnings 0; echo $?`       | lint on every touched file                                           | `0`                               | `0`                                                                                                            |
| `yarn styles:check >/dev/null 2>&1; echo $?`                                         | the public SCSS still compiles                                       | `0`                               | `0`                                                                                                            |

**Criterion for the whole change (Storybook, browser-verify after the apply).** In the new collapsed story:

- the `ul[role=menubar]` has `gui-menu--collapse` and is 44px wide
- every first-level title and item is 44px with its icon centered
- no label, chevron, or badge is visible
- Tab reaches every item and title with a visible focus indicator, and Enter on a sub-menu opens its popup and moves focus inside; Escape closes it and returns focus
- with `collapseTransition` on, the width animates (the `horizontal-collapse-transition` class shows up during the toggle), and expanding again leaves no element with `scrollWidth > clientWidth`
- the console shows no errors

The front-b2b check with the published version is the dev's step after the merge, and it's outside this plan's verify.

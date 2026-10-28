# Tareas · fix the collapsed g-menu

Constraints every sub-agent receives (detail in `proposal.md`): legacy package without `src/`, don't migrate it to the archetype; no inline comments, and the JSDoc that describes the `collapseTransition` cut gets updated in the same diff; new named functions with `function`; any timer or listener is cleaned up in the same closure; visible `:focus-visible` on every interactive element; `CHANGELOG.md` and `version` are never edited by hand; don't add or remove public props; `yarn styles:check` keeps exiting 0. Package tests: `npx vitest run --project unit components/menu`.

---

- [x] **1 · Use the BEM modifier for collapse in GMenu**
  - archivos: `components/menu/Menu.vue`, `components/menu/tests/Menu.spec.ts`
  - depende de: ninguna
  - listo cuando: TDD, spec red first. With `collapse: true` the `ul` has class `gui-menu--collapse` and doesn't have `is-collapse`. With `collapse: false` it has neither. The spec at `Menu.spec.ts:54-56` that asserts `is-collapse` is replaced, not duplicated. The other existing cases stay green.
  - commit: `fix(menu): use the gui-menu--collapse modifier so the collapsed styles apply`

- [x] **2 · Port the collapse width animation (collapseTransition)**
  - archivos: `components/menu/Menu.vue`, `components/menu/tests/Menu.spec.ts`, `components/menu/tests/Integration.spec.ts`
  - depende de: 1
  - listo cuando:
    - With `collapseTransition` `true` (the default), toggling `collapse` remounts the `ul`, keyed by `String(collapse)`, inside a `Transition` in `out-in` mode, using the hooks of `element-plus/es/components/menu/src/menu-collapse-transition.mjs` (2.9.7): leave fixes the inline `width` and adds `horizontal-collapse-transition`; enter applies `gui-opacity-transition` and cleans up its inline styles when done.
    - With `false`, the `ul` changes state without that class or inline width.
    - The specs cover both paths.
    - The file-level JSDoc in `Menu.vue` and the prop's `@deprecated` no longer describe the cut.
  - commit: `feat(menu): animate the width when the menu collapses or expands`

- [x] **3 · Keyboard access to items and sub-menus**
  - archivos: `components/menu/MenuItem.vue`, `components/menu/MenuSub.vue`, `components/menu/menu.styles.scss`, `components/menu/tests/MenuItem.spec.ts`, `components/menu/tests/MenuSub.spec.ts`, `components/menu/tests/Integration.spec.ts`
  - depende de: ninguna
  - listo cuando:
    - **Items.** A non-disabled `GMenuItem` is focusable (`tabindex="0"`, `-1` when disabled), and Enter/Space trigger the same `handleClick` as a click (it emits `click` and calls `handleMenuItemClick`).
    - **Sub-menu titles.** The title is focusable. In inline mode Enter/Space toggle it. In popup mode (vertical+collapse or horizontal) Enter/Space/ArrowRight open the popup and move focus to its first focusable item.
    - **Closing the popup.** Escape inside the popup or on the title closes it and returns focus to the title. Moving focus outside the title and the popup closes it.
    - **Focus ring.** `menu.styles.scss` shows a visible `:focus-visible` indicator on `.gui-menu-item` and `.gui-sub-menu__title` without changing `:hover`.
    - **Disabled.** A disabled sub-menu or item doesn't respond to the keyboard.
    - **Accessible name in collapse.** Collapsed, every first-level `GMenuItem` with a `title` slot exposes its title text as its accessible name (today the title only lives in the tooltip and axe reports `aria-command-name` on 9 items in front-b2b). The focusable element of every first-level `GSubMenu` does the same. The rule in `menu.styles.scss` that hides the title `span`s in `.gui-menu--collapse` uses a visually-hidden technique, not `display: none`, which would drop the name once task 1 makes that rule apply. Expanded, names don't duplicate.
    - Specs cover each behavior, including `getByRole('menuitem', { name })` in collapse for an item and a sub-menu. The existing cases in `MenuItem.spec.ts`, `MenuSub.spec.ts` and `Integration.spec.ts` stay green.
  - commit: `feat(menu): keyboard access and accessible names for items and sub-menus, collapsed included`

- [ ] **4 · Collapsed story with front-b2b's real content**
  - archivos: `stories/menu.stories.ts`
  - depende de: ninguna
  - listo cuando:
    - A new exported story starts collapsed and has an item with an icon, a sub-menu with a counter badge (`GBadge` from `@flash-global66/g-badge`), and a sub-menu whose title carries a "Nuevo" label inside a `span` with `w-full`/`pr-10`, like `front-b2b/src/shared/layouts/components/MenuRoute/index.vue`.
    - The toggle button still works, and there's a control for `collapseTransition`.
    - The unused `hola()` function is gone.
    - `Default` is kept.
    - `npx eslint stories/menu.stories.ts --max-warnings 0` exits 0.
    - Every import resolves against the package's `exports` (`GBadge` comes from `@flash-global66/g-badge`, because that package only exports `.`), and with Storybook running `curl -s -o /dev/null -w "%{http_code}" http://localhost:6006/stories/menu.stories.ts` returns `200`. Lint doesn't check this: ESLint doesn't resolve `exports`, which is why the first apply passed with the story broken (404).
  - commit: `fix(stories): import GBadge through its package entry so the menu stories load`

Tasks 1 and 2 share `Menu.vue` and its spec; tasks 2 and 3 share `Integration.spec.ts`. They ran in two waves (1, 3, 4 → 2).

Re-plan after verify round 1: task 2's fence was widened to `Integration.spec.ts` during the apply, with the dev's approval, to re-query a node that the `ul` remount leaves stale. Its `listo cuando` didn't change.

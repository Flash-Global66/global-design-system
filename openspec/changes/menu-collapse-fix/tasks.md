# Tareas · fix the collapsed g-menu

Constraints every sub-agent receives (detail in `proposal.md`): legacy package without `src/`, don't migrate it to the archetype; no inline comments, and the JSDoc that describes the `collapseTransition` cut gets updated in the same diff; new named functions with `function`; any timer or listener is cleaned up in the same closure; visible `:focus-visible` on every interactive element; `CHANGELOG.md` and `version` are never edited by hand; don't add or remove public props; `yarn styles:check` keeps exiting 0. Package tests: `npx vitest run --project unit components/menu`.

---

- [x] **1 · Use the BEM modifier for collapse in GMenu**
  - archivos: `components/menu/Menu.vue`, `components/menu/tests/Menu.spec.ts`
  - depende de: ninguna
  - listo cuando: TDD, spec red first. With `collapse: true` the `ul` has class `gui-menu--collapse` and doesn't have `is-collapse`. With `collapse: false` it has neither. The spec at `Menu.spec.ts:54-56` that asserts `is-collapse` is replaced, not duplicated. The other existing cases stay green.
  - commit: `fix(menu): use the gui-menu--collapse modifier so the collapsed styles apply`

- [ ] **2 · `collapseTransition` back to a documented no-op**
  - archivos: `components/menu/Menu.vue`, `components/menu/tests/Menu.spec.ts`
  - depende de: ninguna
  - listo cuando:
    - `Menu.vue` no longer has `<transition>`, `transitionHooks`, the transition hooks, `horizontal-collapse-transition`, `gui-opacity-transition`, or a `key` on the `ul`.
    - Toggling `collapse` changes the state of the **same** `ul`, whatever `collapseTransition` is set to.
    - The `collapseTransition` prop keeps its type and default `true`, carries `@deprecated no-op`, and the file-level JSDoc explains why it isn't ported (heavy two-phase animation with a remount; front-b2b passes `false`).
    - In `Menu.spec.ts`, the `collapse width animation` describe is replaced by one case asserting the `ul` keeps its identity and gets no inline width or transition class when toggled with `collapseTransition` at its default.
    - The existing cases in `Menu.spec.ts` and `Integration.spec.ts` stay green.
  - commit: `fix(menu): drop the collapse animation and keep collapseTransition as a documented no-op`

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
    - The toggle button still works, and the stories carry no `collapseTransition` control or binding (it's a no-op): `grep -c "collapseTransition\|collapse-transition" stories/menu.stories.ts` returns 0.
    - The unused `hola()` function is gone.
    - `Default` is kept.
    - `npx eslint stories/menu.stories.ts --max-warnings 0` exits 0.
    - Every import resolves against the package's `exports` (`GBadge` comes from `@flash-global66/g-badge`, because that package only exports `.`), and with Storybook running `curl -s -o /dev/null -w "%{http_code}" http://localhost:6006/stories/menu.stories.ts` returns `200`. Lint doesn't check this: ESLint doesn't resolve `exports`, which is why the first apply passed with the story broken (404).
  - commit: `docs(stories): drop the collapseTransition control from the menu stories`

- [ ] **5 · The collapsed menu box fits the menu**
  - archivos: `components/menu/Menu.vue`, `components/menu/menu.styles.scss`, `components/menu/tests/Menu.spec.ts`
  - depende de: 2
  - listo cuando:
    - With `collapse: true` the root `div` has `gui-menu-wrapper` and `gui-menu-wrapper--collapse`; with `false`, only `gui-menu-wrapper`.
    - `menu.styles.scss` gives `.gui-menu-wrapper--collapse` `width: fit-content` and doesn't change the expanded wrapper.
    - `Menu.spec.ts` covers both classes.
    - `yarn styles:check` exits 0.
  - commit: `fix(menu): the collapsed menu box shrinks to the menu width`

Tasks 1, 2 and 5 share `Menu.vue` and its spec; task 3 also touched `Integration.spec.ts`. The second re-plan runs 2 and 4 in parallel, then 5.

Re-plan after verify round 1: during the first apply, task 2's fence was widened to `Integration.spec.ts`, with the dev's approval, to re-query a node that the `ul` remount left stale. That re-query is harmless without the remount and stays.

Second re-plan (after verify round 2 and the review): the dev decided to drop the collapse animation (heavy two-phase `out-in` with a full `ul` remount; front-b2b never runs it) and to make the collapsed wrapper fit the menu, because the consumer's background box didn't contract. Task 2 is redefined as the revert, task 4 loses its `collapseTransition` control, and task 5 is new. Collapsing is now instant; the BMB-4217 criterion "la transición es fluida" is read as "no jumps or clipped elements".

# Verificación · menu-collapse-fix

```yaml
veredicto: no pasa
ronda: 1
fecha: 2026-10-28
vuelve_a: plan
tareas_a_medias: []
cumplidas: 4/4
a_medias: 0
de_mas: 5
escenarios: 9/11
comandos:
  - cmd: npx vitest run --project unit components/menu 2>&1 | grep -E "Test Files|Tests "
    exit: 0
    esperado: 'Test Files 0 failed; Tests 0 failed y más de 32 passed (baseline 5 / 32)'
    obtenido: 'Test Files 5 passed (5); Tests 72 passed (72)'
    coincide: true
  - cmd: grep -c "is('collapse'" components/menu/Menu.vue
    exit: 1
    esperado: '0'
    obtenido: '0 (grep -c sale con exit 1 cuando no hay coincidencias; el plan declaró la salida, no el exit)'
    coincide: true
  - cmd: grep -rn "is-collapse" components/menu | wc -l
    exit: 0
    esperado: '0'
    obtenido: '4 (Menu.spec.ts:56, 60, 63, 67, todas en tests; 0 fuera de tests/)'
    coincide: false
  - cmd: npx eslint components/menu stories/menu.stories.ts --max-warnings 0; echo $?
    exit: 0
    esperado: '0'
    obtenido: '0'
    coincide: true
  - cmd: yarn styles:check >/dev/null 2>&1; echo $?
    exit: 0
    esperado: '0'
    obtenido: '0'
    coincide: true
  - cmd: calcifer check (contra origin/release, 12 archivos en el diff)
    exit: 0
    esperado: 'no_declarado (no figura en «Cómo se verifica»; lo pidió el orquestador)'
    obtenido: 'eslint limpio, check-architecture limpio, 4 archivos de test: 70 passed. 9 de 12 archivos revisados; proposal.md, tasks.md y specs/ quedaron fuera de todo validador'
    coincide: no_declarado
  - cmd: 'Criterio del cambio completo (Storybook / browser-verify: ul 44px, iconos centrados, Tab y foco visible, Enter/Escape en el popup, axe sin aria-command-name, clase horizontal-collapse-transition durante el toggle, sin scrollWidth > clientWidth, consola sin errores)'
    exit: null
    esperado: 'todos los puntos del criterio'
    obtenido: 'no se corrió en navegador real; solo jsdom'
    coincide: no_verificado
```

**Verdict: no pasa.** A declared command doesn't return what the plan said (`grep -rn "is-collapse" components/menu | wc -l` gives 4, not 0). The failure is in **the criterion, not the implementation**, so it routes back to `plan`.

## Qué se cumplió (4/4)

1. **Task 1 · BEM modifier.**
   - `components/menu/Menu.vue` uses `:class="[ns.b(), ns.m(mode), { [ns.m('collapse')]: collapse }]"`.
   - `components/menu/tests/Menu.spec.ts:56` and `:63` cover `collapse=true` (`gui-menu--collapse`, no `is-collapse`) and `collapse=false` (neither class).
   - The old spec was replaced, not duplicated, and `is('collapse'` no longer appears in `Menu.vue`.
   - TDD (red spec first) couldn't be checked from history: there is one commit per task (`no_verificado`).
2. **Task 2 · Width animation.**
   - In `Menu.vue`, `<transition mode="out-in">` wraps the `ul`, with `key = collapseTransition ? String(collapse) : undefined`.
   - Hooks: `onBeforeEnter`, `onEnter`, `onAfterEnter`, `onBeforeLeave` and `onLeave`. Leave sets `width`/`overflow` and adds `horizontal-collapse-transition`. Enter applies `gui-opacity-transition` and cleans up after itself.
   - The file-level JSDoc and the `@deprecated` no longer describe the cut.
   - Specs: `Menu.spec.ts:191-256` cover both the transition path and the `false` path.
3. **Task 3 · Keyboard and accessible name.**
   - **Items:** `MenuItem.vue` sets `tabindex` 0/-1 and `aria-disabled`, and `handleKeydown` sends Enter/Space to `handleClick`. Specs: `MenuItem.spec.ts:118-214`.
   - **Sub-menus:** `MenuSub.vue` adds `handleTitleKeydown`, `handlePopupKeydown`, `handleFocusout`, `openPopupAndFocusFirstItem` and `closePopupAndFocusTitle`. Specs: `MenuSub.spec.ts:222-403`. Integration: `Integration.spec.ts:164`, `:186` and `:209`.
   - **Focus:** `menu.styles.scss:491` puts `:focus-visible` on `.gui-menu-item` and `.gui-sub-menu__title` without touching `:hover`.
   - **Collapsed name:** the item gets `gui-menu-item__sr-label`, and the sub-menu title is focusable with `role="menuitem"`. The `display:none` on `> span` was replaced by the `menu-visually-hidden` mixin.
   - **Name specs:** `MenuItem.spec.ts:216` and `MenuSub.spec.ts:405`, with `getByRole('menuitem', { name })`.
4. **Task 4 · Story.**
   - In `stories/menu.stories.ts`, `CollapsedWithBadges` starts collapsed and has three entries: an item with an icon, a sub-menu with a `GBadge`, and a sub-menu with "Nuevo" inside a `span` with `w-full pr-10`.
   - Toggle and the `collapseTransition` control are there, `hola()` is gone and `Default` is kept. ESLint passes.

## Qué quedó a medias

No task. The `listo cuando` criteria are met as far as jsdom can measure them.

**Plan finding (`plan` route): the `is-collapse` command is badly specified.**

- Outside `components/menu/tests/` there are 0 occurrences.
- The 4 lines are `Menu.spec.ts:56`, `:60`, `:63` and `:67`. They assert `not.toHaveClass('is-collapse')`, which task 1's `listo cuando` and the spec scenario "does not have `is-collapse`" require word for word.
- Two criteria of the same plan contradict each other, so no re-implementation can fix it.
- What needs fixing is the command in «Cómo se verifica» and its baseline: the baseline "2" came from the old spec, which asserted the wrong class.

## Qué se hizo de más

1. **`components/menu/tests/Integration.spec.ts` in task 2's commit (`f9be072d`).** It is declared in task 3, not in task 2.
   - **Legitimate**, not the plan bending to fit: the criterion wasn't touched. The case only queries the node again after the `rerender`, because the `ul` remounts.
   - What's missing is the record: `tasks.md` wasn't updated.
   - It also contradicts the claim that tasks 2 and 3 don't share files.
2. **`aria-disabled="true"`** on `MenuItem` and on the `MenuSub` title. The plan asked for `tabindex`, not this attribute.
3. **Public ARIA restructure of the sub-menu** (a deliberate decision). `role="menuitem"` moved from the `li` to the title `div`, and the `li` is now `role="none"`. `<g-tooltip role="menu">` sets `aria-haspopup="menu"`, `aria-expanded` and `aria-controls`; before it was `aria-haspopup="true"`. Minor: `ul role="none"` in the popup and `tabindex="-1"` on its container.
4. **Enter/Space on the sub-menu title emit `click`** (a deliberate decision). Not in the plan; covered by `MenuSub.spec.ts`.
5. **Minor changes in the story and SCSS.**
   - **Story:** `GBadge` is registered in `Default` without being used, and `Default` now receives `:collapse-transition="args.collapseTransition"`.
   - **SCSS:** a new explicit chevron rule in collapse, and the `> span` rule at line ~175 also moved to `menu-visually-hidden`.

## Escenarios del delta (11)

| #   | Scenario                                       | Evidence                                                                                                                                                        |
| --- | ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Collapsed menu carries the modifier            | `Menu.spec.ts:56`                                                                                                                                               |
| 2   | Expanded menu has no collapse class            | `Menu.spec.ts:63`                                                                                                                                               |
| 3   | Toggling with the transition enabled           | `Menu.spec.ts:191` and `:223`                                                                                                                                   |
| 4   | Toggling with the transition disabled          | `Menu.spec.ts:256`                                                                                                                                              |
| 5   | Activating an item with the keyboard           | `MenuItem.spec.ts:118-166`                                                                                                                                      |
| 6   | Opening a collapsed sub-menu with the keyboard | `MenuSub.spec.ts` (popup mode), `Integration.spec.ts:186`                                                                                                       |
| 7   | Closing the popup with Escape                  | `MenuSub.spec.ts:318`, `:338`                                                                                                                                   |
| 8   | Disabled elements ignore the keyboard          | `MenuItem.spec.ts:119`, `:182`; `MenuSub.spec.ts:279`, `:390`                                                                                                   |
| 9   | Collapsed item named by its title              | **Partial**: the name is tested (`MenuItem.spec.ts:231`); "the text is not visible" is untested (CSS, which jsdom doesn't compute)                              |
| 10  | Collapsed sub-menu named by its title          | **Partial**: the name is tested (`MenuSub.spec.ts:420`, `Integration.spec.ts:209`); "visually hidden but not `display:none`" is only in the SCSS, not in a test |
| 11  | Expanded menu keeps its visible names          | `MenuItem.spec.ts:241`, `MenuSub.spec.ts:427`                                                                                                                   |

## Con qué se probó

- **`calcifer check`:** exit 0 (eslint, check-architecture, 70 tests). It reviewed 9 of the 12 files; `proposal.md`, `tasks.md` and `specs/` fell outside every validator. It compared against `origin/release`.
- **«Cómo se verifica»:** 4 of 5 commands match. `is-collapse` doesn't, because of a criterion error.
- **Not verified:** the whole-change criterion in a real browser, which also covers the visual half of scenarios 9 and 10.
- **Diff `6ab47d43..HEAD`:** 12 files, +1102 / -68.

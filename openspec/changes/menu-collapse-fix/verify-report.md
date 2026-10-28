# Verificación · menu-collapse-fix

```yaml
veredicto: pasa
ronda: 3
fecha: 2026-10-28
tareas_a_medias: []
cumplidas: 5/5
a_medias: 0
de_mas: 4
escenarios: 11/11
comandos:
  - cmd: npx vitest run --project unit components/menu 2>&1 | grep -E "Test Files|Tests "
    exit: 0
    esperado: 'Test Files 5 passed; Tests con 0 failed (el conteo cambia: salen los specs de animación, entran los del wrapper). Hoy 72'
    obtenido: 'Test Files 5 passed (5); Tests 71 passed (71)'
    coincide: true
  - cmd: grep -c "horizontal-collapse-transition\|opacity-transition\|transitionHooks\|<transition" components/menu/Menu.vue
    exit: 1
    esperado: '0 (grep sale con 1 cuando no hay coincidencias)'
    obtenido: '0'
    coincide: true
  - cmd: grep -c "gui-menu-wrapper--collapse" components/menu/Menu.vue components/menu/menu.styles.scss
    exit: 0
    esperado: '>= 1 / >= 1'
    obtenido: 'Menu.vue:1 / menu.styles.scss:1'
    coincide: true
  - cmd: grep -c "collapseTransition\|collapse-transition" stories/menu.stories.ts
    exit: 1
    esperado: '0'
    obtenido: '0'
    coincide: true
  - cmd: grep -c "is('collapse'" components/menu/Menu.vue
    exit: 1
    esperado: '0'
    obtenido: '0'
    coincide: true
  - cmd: grep -rn "is-collapse" components/menu --exclude-dir=tests | wc -l
    exit: 0
    esperado: '0'
    obtenido: '0'
    coincide: true
  - cmd: grep -c "not.toHaveClass('is-collapse')" components/menu/tests/Menu.spec.ts
    exit: 0
    esperado: '>= 1'
    obtenido: '2'
    coincide: true
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
  - cmd: curl -s -o /dev/null -w "%{http_code}" http://localhost:6006/stories/menu.stories.ts
    exit: 0
    esperado: '200'
    obtenido: '200'
    coincide: true
  - cmd: calcifer check
    exit: 0
    esperado: 'no_declarado (no figura en «Cómo se verifica»)'
    obtenido: 'eslint limpio, check-architecture limpio, 4 archivos de test: 69 passed. 9 de 13 archivos revisados; proposal.md, spec.md, tasks.md y verify-report.md quedan fuera de todo validador'
    coincide: no_declarado
  - cmd: 'Criterio del cambio completo (browser-verify DS, run BMB-4217-ds-run-3): wrapper--collapse de 76px, ul 44px, ítems 44x44 con ícono centrado, sin label/chevron/badge visible, teclado, axe sin aria-command-name, mismo ul al alternar, consola limpia'
    exit: null
    esperado: 'wrapper = ul + padding (76px), no los 320px del contenedor; resto de puntos como en ronda 2'
    obtenido: 'S03 wrapper-fits PASSED: wrapper 76x276, ul 44, contenedor 320. S01 modifier-geometry PASSED (ul.gui-menu--collapse 44, 0 matches de .is-collapse, ítems 44x44, offset del ícono 0). S05/S06/S07/S09/S10 PASSED, axe 0 violaciones, consola 0 errores y red todo 200. Engine INCONCLUSIVE: 74 PASSED, 12 INCONCLUSIVE, 7 NOT_RUN (X1), 0 FAILED, 0 BLOCKED'
    coincide: true
  - cmd: 'Criterio front-b2b (run BMB-4217-run-2): Sidebar colapsado ~84px, ul 44px, sin label/chevron/badge visible; expandido 300px'
    exit: null
    esperado: 'Sidebar ~84px colapsado, 300px expandido, ul 44px'
    obtenido: 'ul 44 y wrapper 44 sin padding propio, etiquetas 1x1, chevrons sin caja, badges fuera de pantalla (x=-39), expandido 300. Sidebar 84 con scrollbar overlay (6 toggles 300/84) y 99 con scrollbar clásico (44 + 40 + 15). Engine FAILED en box-geometry. Es evidencia de la sesión front-b2b: la leí, no la reproduje (requiere login contra ci-api)'
    coincide: true
```

**Verdict: pasa.** The 10 commands in «Cómo se verifica» return what was declared, and each of the 5 tasks meets its `listo cuando`.

The one delicate point is the front-b2b criterion (~84px against the 99px measured). It is judged met in what the package controls; the criterion's wording is what fails (see the judgments).

## Qué se cumplió (5/5)

1. **Task 1 · BEM modifier.**
   - `components/menu/Menu.vue:10` and `components/menu/tests/Menu.spec.ts:54-66`.
   - The greps come back at 0, 0 and 2.
   - In the browser, S01 measures `ul.gui-menu--collapse` at 44px with no `.is-collapse`.
2. **Task 2 · `collapseTransition` as a documented no-op.**
   - `Menu.vue` has no `<transition>`, hooks, `key` or animation classes.
   - The prop keeps `@deprecated no-op` (`Menu.vue:117-123`), and the file-level JSDoc explains it (`:55-60`).
   - `Menu.spec.ts:218` covers it: same `ul`, with no inline width and no transition class.
3. **Task 3 · Keyboard and accessible name.**
   - Diff unchanged since round 2.
   - 71 tests green, S05–S11 in the browser, and `aria-command-name` at 0.
4. **Task 4 · Story.**
   - `stories/menu.stories.ts`: `CollapsedWithBadges`, `GBadge` imported from `@flash-global66/g-badge`, `Default` kept.
   - The `collapseTransition` grep returns 0, ESLint 0 and the `curl` 200.
5. **Task 5 · Box that fits the menu.**
   - `Menu.vue:2-5`, plus `.gui-menu-wrapper--collapse { @apply w-fit }` in `menu.styles.scss`.
   - Specs at `Menu.spec.ts:68-96`, and `styles:check` exits 0.
   - In the browser, S03 measures 76px = 44 + 32.

## Qué quedó a medias

Nothing. `tareas_a_medias` is empty, as in round 2: no task recurs.

## Qué se hizo de más (4)

The same four as round 2, already judged legitimate:

1. `aria-disabled="true"` on `MenuItem.vue` and on the `MenuSub.vue` title.
2. The ARIA restructure of the sub-menu.
3. Enter/Space on the sub-menu title emit `click`.
4. Minor SCSS and story tweaks.

`:collapse-transition` in `Default` went away with the animation.

## Escenarios (11/11, none contradicted)

| #   | Scenario                                                 | Evidence                                                                                                    |
| --- | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| 1   | Collapsed menu carries the modifier                      | `Menu.spec.ts:54`; S01                                                                                      |
| 2   | Expanded menu has no collapse class                      | `Menu.spec.ts:61`; S02                                                                                      |
| 3   | Collapsed box fits the menu                              | `Menu.spec.ts:68,82`; S03 (76 = 44 + 32); front-b2b wrapper at 44 with no padding of its own                |
| 4   | Expanded box keeps its width and toggling keeps the menu | `Menu.spec.ts:75,218`; S02 (wrapper 320). S04 was observed with `evaluate`, which the engine doesn't credit |
| 5   | Activating an item with the keyboard                     | `MenuItem.spec.ts:119-182`; S05                                                                             |
| 6   | Opening a collapsed sub-menu with the keyboard           | `MenuSub.spec.ts`, `Integration.spec.ts:186`; S06                                                           |
| 7   | Closing the popup with Escape                            | `MenuSub.spec.ts:318,338`; S07                                                                              |
| 8   | Disabled elements ignore the keyboard                    | `MenuItem.spec.ts:119,182`, `MenuSub.spec.ts:279,390`; S08                                                  |
| 9   | Collapsed item named by its title                        | `MenuItem.spec.ts:231`; S09                                                                                 |
| 10  | Collapsed sub-menu named by its title                    | `MenuSub.spec.ts:420`, `Integration.spec.ts:209`; S10                                                       |
| 11  | Expanded menu keeps its visible names                    | `MenuItem.spec.ts:241`, `MenuSub.spec.ts:427`; S11                                                          |

In scenarios 9 and 10, "not `display:none`" is still an inference: the name is preserved and the SCSS uses the visually-hidden mixin, but the probe doesn't expose `display`.

## Juicios

1. **Re-plan `cadda39b`: legitimate.**
   - It's a product decision by the dev, backed by evidence (a heavy animation, and a 320px wrapper against a 44px `ul`). It doesn't bend the plan to make the code pass.
   - "Collapse width animation" was dropped from the delta because this change added it and it was never archived.
   - BMB-4217's criterion "la transición es fluida" is reread as "no jumps or clipped elements". **The dev should confirm this with product:** it's the one place where the meaning of a Jira acceptance criterion changes.
   - Leftovers, none blocking:
     - `proposal.md:91` still says the JSDoc "describe a cut that this change undoes".
     - `proposal.md:33-39` describes the element-plus original as investigation context.
     - `Menu.vue:57-59` tells the story of the attempted port.
     - `.horizontal-collapse-transition` in `menu.styles.scss:381` was there before this change.
2. **front-b2b criterion ("about 84px" against the 99px measured): met in what the package controls; the criterion's wording fails.**
   - The package's own numbers match exactly: `ul` 44, wrapper 44, expanded 300 (it was ~287 before the fix).
   - The 99 breaks down deterministically: 44 + 40 of `px-5` + 15 of the classic scrollbar in front-b2b's `overflow-y-auto` container. That scrollbar existed before the fix: expanded is 245 = 260 − 15.
   - The 84 shows up in the same run with overlay scrollbars (6 toggles at 300/84).
   - The criterion didn't anticipate classic scrollbars, which are the common case on Windows and on macOS with a mouse. That's a finding about the plan, recorded for the archive. It doesn't stop the close.
   - Evidence from another session: it was read, not reproduced (it needs a login against ci-api).
3. **New findings from front-b2b:**
   - F11 (MINOR, `aria-controls` points to an id that doesn't exist while the popup is closed) is the same as F4 in Storybook. Follow-up.
   - F12 (ADVISORY, badges at x=−39) is robustness; the "not visible" criterion is met.
4. **Run 3 findings:**
   - F1 and F2 resolved.
   - F3 didn't reproduce.
   - F5 and F6 are intermittent or out of scope.
5. **X1:** NOT_RUN, because the budget ran out. The orchestrator's manual check is not engine evidence. Opening the popup is covered by S06 and the `Integration` spec.

## Con qué se probó

- **`calcifer check`:** exit 0. It covered 9 of 13 files; the 4 `openspec/` files fall outside every validator.
- **Commands:** 10 of 10 match.
- **Browser:**
  - `BMB-4217-ds-run-3` gave INCONCLUSIVE with no FAILED. The 12 INCONCLUSIVE are declarative checks, axe `incomplete` and `evaluate`, not doubts about behavior.
  - front-b2b's `BMB-4217-run-2` gave FAILED only on `box-geometry`.
- **TDD order:** it can't be checked from history.

# Verificación · menu-collapse-fix

```yaml
veredicto: pasa
ronda: 2
fecha: 2026-10-28
tareas_a_medias: []
cumplidas: 4/4
a_medias: 0
de_mas: 4
escenarios: 11/11
comandos:
  - cmd: npx vitest run --project unit components/menu 2>&1 | grep -E "Test Files|Tests "
    exit: 0
    esperado: 'Test Files con 0 failed; Tests con 0 failed y al menos 72 passed'
    obtenido: 'Test Files 5 passed (5); Tests 72 passed (72)'
    coincide: true
  - cmd: grep -c "is('collapse'" components/menu/Menu.vue
    exit: 1
    esperado: '0 (grep sale con 1 cuando no hay coincidencias, y el plan lo aclara)'
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
  - cmd: 'calcifer check'
    exit: 0
    esperado: 'no_declarado (no figura en «Cómo se verifica»)'
    obtenido: 'eslint limpio, check-architecture limpio, 4 archivos de test: 70 passed. 9 de 13 archivos revisados; proposal.md, spec.md, tasks.md y verify-report.md quedan fuera de todo validador'
    coincide: no_declarado
  - cmd: 'Criterio del cambio completo, punto 1: ul[role=menubar] con gui-menu--collapse y 44px, sin is-collapse'
    exit: null
    esperado: 'ul 44px con el modificador'
    obtenido: 'run BMB-4217-ds-run-2, S01 modifier-geometry (PASSED, confirmado): 1 match de ul.gui-menu--collapse, 44x236; 0 matches de .is-collapse'
    coincide: true
  - cmd: 'Criterio del cambio completo, punto 2: items y títulos de primer nivel de 44px con el ícono centrado'
    exit: null
    esperado: 'ítems 44x44, ícono centrado'
    obtenido: 'S01 modifier-geometry (PASSED): 4 ítems 44x44, offset del ícono 0'
    coincide: true
  - cmd: 'Criterio del cambio completo, punto 3: ninguna etiqueta, chevron ni badge visible (mitad visual de los escenarios 9 y 10)'
    exit: null
    esperado: 'solo íconos visibles'
    obtenido: 'S01 layout-probe (PASSED), S09 item-label-visually-hidden (PASSED) y S10 submenu-label-visually-hidden (PASSED): spans de 1x1 recortados, chevrons sin caja visible, captura solo con íconos. El check declarativo collapsed-icons-only quedó INCONCLUSIVE por el engine (sin aserción de "no visible"), pero la medición está en la evidencia.'
    coincide: true
  - cmd: 'Criterio del cambio completo, punto 4: las etiquetas no son display:none ni visibility:hidden (computed style)'
    exit: null
    esperado: 'medición de computed style'
    obtenido: 'El probe no expone display/visibility. Lo que hay es indirecto: el nombre accesible sigue en el snapshot de Playwright ("Home", "Movimientos", "COMEX 12", "Integraciones Nuevo"), cosa que un display:none rompería. El SCSS usa el mixin menu-visually-hidden. Es una inferencia sólida, no una medición directa del computed style.'
    coincide: true
  - cmd: 'Criterio del cambio completo, punto 5: Tab llega a cada ítem con foco visible; Enter abre el popup con foco dentro; Escape lo cierra y devuelve el foco al título'
    exit: null
    esperado: 'los tres comportamientos'
    obtenido: 'S05 tab-reach (PASSED): 4 paradas con outline de 2px. S06 popup-focus (PASSED): Enter abre el popup y el foco queda en Historial; ArrowRight en COMEX igual. S07 escape-return (PASSED): el foco vuelve al título Movimientos. S07 popup-closed-escape quedó INCONCLUSIVE por el engine, pero la observación a ~7 s está en la evidencia.'
    coincide: true
  - cmd: 'Criterio del cambio completo, punto 6: axe sobre .gui-menu-wrapper colapsado sin aria-command-name, con nombres por título'
    exit: null
    esperado: '0 aria-command-name'
    obtenido: 'axe 4.10.3, S01, S09 y S10: 0 violaciones. Hay un incomplete en aria-valid-attr-value (aria-controls de los popups cerrados, F4), que no es una violación confirmada. Los nombres salen del snapshot (S09 y S10 declarativos PASSED).'
    coincide: true
  - cmd: 'Criterio del cambio completo, punto 7: con collapseTransition activo el toggle muestra horizontal-collapse-transition y al expandir no queda ningún elemento con scrollWidth > clientWidth'
    exit: null
    esperado: 'clase durante el toggle, sin overflow al asentarse'
    obtenido: 'S03 transition-class (observer): leaving ul con horizontal-collapse-transition y width inline, sin residuo inline al asentarse. Ciclos 1 y 3 asentados con scrollWidth = clientWidth (288 y 44), y S02 con horizontalOverflow false. El ciclo 2 quedó sin aislar por un error de receta del executor (stable-cycles INCONCLUSIVE). Con ciclos 1 y 3 y S02 el punto está cubierto.'
    coincide: true
  - cmd: 'Criterio del cambio completo, punto 8: consola sin errores nuevos'
    exit: null
    esperado: '0 errores'
    obtenido: 'console-review en los 13 escenarios: 0 errores, 0 warnings. Red: todo 200.'
    coincide: true
```

**Verdict: pasa.** The 7 commands of «Cómo se verifica» return what was declared, the whole-change criterion has real-browser evidence on every point, and no task is left half done. Two caveats, neither of which sinks the verdict: point 4 ("not display:none") is an inference, and `stable-cycles` is missing cycle 2 (point 7).

Browser evidence: `.agent/browser-verify/runs/BMB-4217-ds-run-2/` (`report.md`, `evaluation.json`), engine verdict INCONCLUSIVE with 79 PASSED, 0 FAILED, 0 BLOCKED and 13 INCONCLUSIVE. The 13 are not doubts about behavior: 8 are declarative checks the engine doesn't credit, 3 are axe scans with one `incomplete`, and 2 are recipe gaps in the run itself. Run 1 (`BMB-4217-ds-run-1`) was fully BLOCKED because of the broken `GBadge` import, which `79d3dff9` fixed.

## Qué se cumplió (4/4)

1. **Task 1 · BEM modifier.**
   - Files: `components/menu/Menu.vue` and `components/menu/tests/Menu.spec.ts`.
   - Evidence: `grep -c "is('collapse'"` returns 0, and in the browser S01 measures `gui-menu--collapse` at 44px with no `is-collapse`.
2. **Task 2 · Width animation.**
   - Files: `Menu.vue` (the `onBeforeEnter`/`onEnter`/`onAfterEnter`/`onBeforeLeave`/`onLeave` hooks) and `Menu.spec.ts`.
   - In the browser: the S03 observer saw the class and the inline width during the transition, with no leftover inline styles afterwards. S04 confirms that with `false` neither appears.
3. **Task 3 · Keyboard and accessible name.**
   - Files: `MenuItem.vue`, `MenuSub.vue`, `menu.styles.scss` and the `MenuItem`, `MenuSub` and `Integration` specs.
   - Keyboard: S05 and S06 cover Tab, Enter and ArrowRight with a 2px focus ring. S07 shows Escape returning focus to the title. In S08 the disabled item has `tabindex=-1` and Tab skips it.
   - Names: S09 and S10 find "Home", "Movimientos", "COMEX 12" and "Integraciones Nuevo". S11 shows no duplicated names when expanded.
4. **Task 4 · Story.**
   - File: `stories/menu.stories.ts`, with the `CollapsedWithBadges` story.
   - The `curl` returns 200, ESLint exits 0, and `GBadge` is imported from `@flash-global66/g-badge`.
   - `storybook-mount` PASSED in all 13 scenarios.

## Qué quedó a medias

Nothing. `tareas_a_medias` is empty, same as round 1, so nothing recurred. TDD ordering still can't be checked from history (one commit per task): `no_verificado`, as in round 1.

## Qué se hizo de más (4)

The same four as round 1, already judged legitimate:

1. `aria-disabled="true"` on `MenuItem.vue` and on the `MenuSub.vue` title.
2. ARIA restructure of the sub-menu: `role="menuitem"` moves to the title, the `li` is `role="none"`, and `g-tooltip role="menu"` supplies `aria-haspopup`/`aria-expanded`/`aria-controls`.
3. Enter and Space on the sub-menu title emit `click`.
4. Minor SCSS and story tweaks: an explicit chevron rule in collapse, the `menu-visually-hidden` mixin on `> span`, and `:collapse-transition` in `Default`.

The `Integration.spec.ts` change in task 2's commit dropped off this list: the re-plan declares it now. The unused `GBadge` in `Default` is gone since `79d3dff9`.

## Escenarios (11/11)

| #   | Scenario                                       | Evidence                                              |
| --- | ---------------------------------------------- | ----------------------------------------------------- |
| 1   | Collapsed menu carries the modifier            | `Menu.spec.ts:56`; S01                                |
| 2   | Expanded menu has no collapse class            | `Menu.spec.ts:63`; S02                                |
| 3   | Toggling with the transition enabled           | `Menu.spec.ts:191` and `:223`; S03 `transition-class` |
| 4   | Toggling with the transition disabled          | `Menu.spec.ts:256`; S04                               |
| 5   | Activating an item with the keyboard           | `MenuItem.spec.ts:118-166`; S05                       |
| 6   | Opening a collapsed sub-menu with the keyboard | `MenuSub.spec.ts`, `Integration.spec.ts:186`; S06     |
| 7   | Closing the popup with Escape                  | `MenuSub.spec.ts:318` and `:338`; S07                 |
| 8   | Disabled elements ignore the keyboard          | `MenuItem.spec.ts`, `MenuSub.spec.ts`; S08            |
| 9   | Collapsed item named by its title              | `MenuItem.spec.ts:231`; S09                           |
| 10  | Collapsed sub-menu named by its title          | `MenuSub.spec.ts:420`, `Integration.spec.ts:209`; S10 |
| 11  | Expanded menu keeps its visible names          | `MenuItem.spec.ts:241`, `MenuSub.spec.ts:427`; S11    |

Scenarios 9 and 10 move from partial to covered. The "not display:none" part is inferred, because the probe doesn't expose computed style.

## Juicios pedidos

1. **Re-plan `4eac1c1c`: legitimate.**
   - It separates what gets measured (0 outside `tests/` plus at least 1 absence assertion) without touching the implementation.
   - Moving the visual half to browser-verify turns a `no_verificado` into something measurable.
   - Declaring `Integration.spec.ts` under task 2 closes the missing record flagged in round 1.
2. **New bullet in task 4 (`12cc7f27`): legitimate.**
   - It was triggered by real evidence: run 1 returned 404 and all 92 checks BLOCKED.
   - It tightens the criterion rather than loosening it, and the procedure was followed: unmark, re-apply in `79d3dff9`, mark again.
3. **F1 severity (`MAJOR` → `ADVISORY`): acceptable, with a reservation.**
   - The finding is confirmed and `resolutionStatus: verified`. The relabel works around an engine limitation: it counts any confirmed non-ADVISORY finding as FAILED.
   - The title keeps "it was MAJOR in run 1". The verdict doesn't depend on that label; it rests on `storybook-mount` PASSED in all 13 scenarios and on the `curl` returning 200.
   - This limitation should be reported to the engine.
4. **Suspected findings from run 2: none blocks.**
   - **F2**: `v-enter-to` stays on the `ul`. `onEnter` in `Menu.vue:364-369` calls `done()` synchronously, same as element-plus 2.9.7. Out of scope: the plan's criterion was about inline styles. Optional follow-up.
   - **F3**: a "Home" tooltip appeared without hover. It didn't reproduce. Out of scope.
   - **F4**: `aria-controls` points to ids that don't exist while the popup is closed. Within reach of the ARIA restructure, but the plan doesn't require zero axe `incomplete`. Follow-up.
   - **F5**: the first menuitem of `Default` has no name of its own in the snapshot. Out of scope, `separate_followup`.

## Con qué se probó

- **`calcifer check`:** exit 0 (eslint, check-architecture, 70 tests). It reviewed 9 of 13 files; `proposal.md`, `spec.md`, `tasks.md` and `verify-report.md` fall outside every validator.
- **«Cómo se verifica»:** 7 of 7 commands match.
- **Browser:** `evaluation.json` and `report.md` of `BMB-4217-ds-run-2`, plus the persisted observation behind every INCONCLUSIVE check.

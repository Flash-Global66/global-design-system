# Verificación · menu-collapse-fix

```yaml
veredicto: pasa
ronda: 4
fecha: 2026-10-28
tareas_a_medias: []
cumplidas: 8/8
a_medias: 0
de_mas: 5
escenarios: 14/16
comandos:
  - cmd: npx vitest run --project unit components/menu 2>&1 | grep -E "Test Files|Tests "
    exit: 0
    esperado: 'Test Files 5 passed; Tests con 0 failed y al menos 76 passed'
    obtenido: 'Test Files 5 passed (5); Tests 76 passed (76)'
    coincide: true
  - cmd: grep -c "gui-menu-wrapper--animated" components/menu/Menu.vue components/menu/menu.styles.scss
    exit: 0
    esperado: '>= 1 / >= 1'
    obtenido: 'Menu.vue:2 / menu.styles.scss:1'
    coincide: true
  - cmd: grep -c "prefers-reduced-motion" components/menu/menu.styles.scss
    exit: 0
    esperado: '>= 1'
    obtenido: '1'
    coincide: true
  - cmd: grep -c "@deprecated" components/menu/Menu.vue
    exit: 1
    esperado: '0 (grep sale con 1 cuando no hay coincidencias)'
    obtenido: '0'
    coincide: true
  - cmd: grep -c "horizontal-collapse-transition\|opacity-transition\|transitionHooks\|<transition" components/menu/Menu.vue
    exit: 1
    esperado: '0'
    obtenido: '0'
    coincide: true
  - cmd: grep -c "gui-menu-wrapper--collapse" components/menu/Menu.vue components/menu/menu.styles.scss
    exit: 0
    esperado: '>= 1 / >= 1'
    obtenido: 'Menu.vue:1 / menu.styles.scss:2'
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
  - cmd: grep -c "ns.be('tooltip', 'label')" components/menu/MenuItem.vue
    exit: 0
    esperado: '>= 1'
    obtenido: '1'
    coincide: true
  - cmd: grep -c "@include b(menu-tooltip)" components/menu/menu.styles.scss
    exit: 0
    esperado: '>= 1'
    obtenido: '1'
    coincide: true
  - cmd: grep -c "gui-menu-tooltip__label" components/menu/tests/MenuItem.spec.ts
    exit: 0
    esperado: '>= 1'
    obtenido: '1'
    coincide: true
  - cmd: grep -c "text-blue-1;\|text-blue-4;" components/menu/menu.styles.scss
    exit: 1
    esperado: '0 (grep sale con 1 sin coincidencias)'
    obtenido: '0'
    coincide: true
  - cmd: grep -c "text-primary-def" components/menu/menu.styles.scss
    exit: 0
    esperado: '>= 2'
    obtenido: '2'
    coincide: true
  - cmd: calcifer check
    exit: 0
    esperado: 'no declarado en «Cómo se verifica»'
    obtenido: 'eslint limpio, check-architecture limpio, 4 archivos de test: 74 passed. ok: 9 de 13 archivos revisados; proposal.md, spec.md, tasks.md y verify-report.md quedan fuera de todo validador'
    coincide: no_declarado
  - cmd: 'Criterio del cambio completo, browser-verify DS (run BMB-4217-ds-run-4, medido sobre 292858d1 = tarea 6): wrapper--collapse 76px, ul 44px, ítems 44x44, sin label/chevron/badge, teclado, axe sin aria-command-name, mismo ul, transición, consola limpia'
    exit: null
    esperado: 'wrapper 76 colapsado y 320 expandido, ul 44, transición de ~200ms en ambos sentidos con el mismo ul, sin aria-command-name, consola sin errores'
    obtenido: 'Engine INCONCLUSIVE: 84 PASSED, 14 INCONCLUSIVE, 1 BLOCKED, 0 FAILED. S03 76=44+32 PASSED; S01/S02 geometría y modifier OK; axe 0 violaciones sin aria-command-name; consola 0 errores. S12: wrapper max-width 0.2s ease-out, 17 frames intermedios al expandir y 22 al colapsar, mismo ul (por browser_evaluate declarado, el engine no lo acredita). S13 no observable en Storybook (ninguna story pasa collapseTransition=false). S14 BLOCKED (el engine no emula prefers-reduced-motion)'
    coincide: true
  - cmd: 'Dos puntos nuevos del criterio browser (tarea 7: contraste de .gui-menu-tooltip__label >= 4.5:1; tarea 8: color de ítem/título activo = --color-primary)'
    exit: null
    esperado: 'contraste >= 4.5:1; rgb(32,52,120) igual a --color-primary'
    obtenido: 'Ninguna corrida de browser-verify los cubre: ds-run-4 se midió sobre 292858d1, anterior a 78f94966 y 505bfda7. Descansan en los greps y en el spec. Las cifras 15.22:1 y rgb(32,52,120) que dio el orquestador no se tratan como prueba'
    coincide: no_verificado
  - cmd: 'Criterio front-b2b (runs BMB-4217-run-3 y BMB-4217-run-3-anim, sesión front-b2b, sobre 292858d1 copiado a node_modules)'
    exit: null
    esperado: 'con :collapse-transition="false": Sidebar ~84px (99 con scrollbar clásico), ul 44px, sin label/chevron/badge, cambio instantáneo; expandido 300px. Exploratorio sin la prop: colapsar encoge suave, expandir salta'
    obtenido: 'Lo leí, no lo reproduje (requiere login contra ci-api). run-3: engine FAILED por calidad, 0 checks FAILED (27 PASSED, 16 INCONCLUSIVE). Q1/Q2 box-geometry PASSED: ul 44, wrapper 44, Sidebar 99 con scrollbar clásico de 15px (F10, MINOR), dentro de 84/99. Q5: instantáneo, 99/44 y 300/245 constantes, sin frames intermedios. run-3-anim: INCONCLUSIVE. El wrapper anima max-width 100%->44px en ~207ms, pero el Sidebar ya mide 99 en el frame 0, así que colapsar no se ve animado. Expandir: Sidebar salta a 300 y el wrapper crece 44->245 en ~203ms, como el criterio anticipaba. F11 y F13 MINOR. Ambas corridas predicen T7/T8'
    coincide: no_verificado
```

**Veredicto: pasa.** Los 18 comandos de la tabla devuelven lo declarado y las 8 tareas cumplen su `listo cuando`. Hay dos medias tareas de navegador sin evidencia, tareas 7 y 8. El proposal las declara `no_verificado`, y no bloquean el cierre.

## Qué se cumplió (8/8)

1. **Tarea 1, modifier BEM.**
   - `components/menu/Menu.vue:12` usa `ns.m('collapse')`.
   - `components/menu/tests/Menu.spec.ts:54-66` tiene dos `not.toHaveClass('is-collapse')`.
   - Los greps dan 0, 0 y 2.
   - Sin cambios desde la ronda 3.
2. **Tarea 2, sin la animación pesada.**
   - `Menu.vue` tiene 0 trazas de `<transition>`, hooks, `key` o clases de animación.
   - La prop `collapseTransition` mantiene su tipo y su default `true`.
   - El spec del mismo `ul` sigue en `Menu.spec.ts`.
3. **Tarea 3, teclado y nombre accesible.**
   - `MenuItem.vue`: `tabindex` 0 o -1, `handleKeydown`, `sr-label`.
   - `MenuSub.vue`: `handleTitleKeydown`, `handlePopupKeydown`, `handleFocusout`, `openPopupAndFocusFirstItem` y `closePopupAndFocusTitle`.
   - `menu.styles.scss`: mixin `menu-visually-hidden` en lugar de `display: none`, y `:focus-visible`.
   - Los specs de `MenuItem`, `MenuSub` e `Integration` están en verde: 74 en `calcifer check` y 76 en la suite completa del paquete.
4. **Tarea 4, story.** `stories/menu.stories.ts` mantiene `CollapsedWithBadges` y `Default`.
   - Los greps de `collapseTransition` dan 0.
   - ESLint sale con 0.
   - El `curl` devuelve 200.
5. **Tarea 5, caja que se ajusta.**
   - `Menu.vue:5` y `.gui-menu-wrapper--collapse { w-fit }`.
   - Specs en `Menu.spec.ts`.
   - `styles:check` sale con 0.
6. **Tarea 6, transición CSS ligera.** Todo el criterio se confirma contra el código.
   - `Menu.vue:6` aplica `gui-menu-wrapper--animated` según `collapseTransition`.
   - `menu.styles.scss` declara `.gui-menu-wrapper--animated` con una sola `transition: max-width 200ms`, `box-sizing: content-box` y `overflow-x: clip`.
   - La variante colapsada usa `max-width: var(--gui-menu-width-collapse)`.
   - `@media (prefers-reduced-motion: reduce)` pone `transition: none`.
   - El colapsado sin animar conserva `w-fit`.
   - `Menu.vue` ya no tiene `@deprecated`, y el JSDoc del archivo se reemplazó por una sola línea.
   - Cuatro specs nuevos en `Menu.spec.ts` (+4) cubren los casos pedidos.
   - La corrida `BMB-4217-ds-run-4` midió sobre este commit (`292858d1`) y muestra el wrapper con `max-width 0.2s ease-out`.
7. **Tarea 7, label legible del tooltip.**
   - `MenuItem.vue` envuelve el slot en `span` con `ns.be('tooltip', 'label')`, y el `@slot title` queda inmediatamente antes del `<slot>`.
   - `menu.styles.scss` aplica `text-2 font-semibold text-primary-txt whitespace-nowrap` bajo `@include b(menu-tooltip)`.
   - `MenuItem.spec.ts` (`describe('collapsed tooltip')`) hace `mouseEnter` y asserta por `document.body` que el label contiene "Home".
   - Los tres greps de la tarea dan 1, 1 y 1.
   - **Media parte no verificada:** "en Storybook el label contrasta ≥ 4.5:1" no tiene corrida de browser. Queda `no_verificado`.
   - "TDD, red first" no se puede comprobar desde el historial (un solo commit).
8. **Tarea 8, color primario activo.**
   - `menu.styles.scss` aplica `text-primary-def` al título de sub-menú activo y al `.is-active` expandido.
   - `text-primary-def` mapea a `var(--color-primary)` (`tailwind.config.cjs:92`).
   - No quedan `text-blue-1;` ni `text-blue-4;`: el grep da 0 y el de `text-primary-def` da 2.
   - `styles:check` sale con 0.
   - **Media parte no verificada:** "el color computado de ambos es igual a `--color-primary`" no tiene corrida de browser. Queda `no_verificado`.

Los mensajes de los commits `78f94966` y `505bfda7` coinciden con la línea `commit:` declarada en cada tarea.

## Qué quedó a medias

Nada. `tareas_a_medias: []`, y ninguna tarea reincide respecto de la ronda 3.

La única brecha es la mitad de navegador de las tareas 7 y 8, y el proposal la declara `no_verificado` de antemano: no hay corrida y la verificación descansa en los greps y el spec. Pasar la ronda con ese hueco abierto es mi lectura del proposal, no una verificación. No es una falla del apply.

## Qué se hizo de más (5)

Las cuatro de la ronda 3, reevaluadas contra el plan actual, más una nueva. Ninguna tumba el veredicto.

1. **`aria-disabled="true"`** en `MenuItem.vue` y en el título de `MenuSub.vue`. La tarea 3 pide que lo deshabilitado no responda al teclado y `tabindex=-1`, no el atributo ARIA. Se mantiene: es coherente con el escenario 8.
2. **Reestructura ARIA del sub-menú.** El `li` pasa a `role="none"`, el título recibe `role="menuitem"` con `aria-haspopup`/`aria-expanded`, el popup lleva `role="menu"` y `tabindex="-1"`. La tarea 3 pide un título enfocable, no esta reestructura. Se mantiene porque era necesaria para el nombre accesible y para la regla del GPopperTrigger.
3. **Enter/Space en el título del sub-menú emiten `click`.** La tarea 3 solo dice que alternan o abren. Se mantiene: es paridad con el click.
4. **Ajustes menores de SCSS.**
   - Regla que oculta el chevron colapsado.
   - `outline: … !important` en `:focus-visible`.
   - Diferencias de estilo en la story.
   - El proposal pide que el menú colapsado no muestre chevrons, pero ninguna tarea lo declara.
5. **Dos comentarios SCSS `//` nuevos, ambos explican un porqué.**
   - Sobre `@include b(menu-tooltip)` (tarea 7): GTooltip fuerza una caja clara pero mantiene el texto blanco de `effect="dark"`.
   - Sobre `.gui-menu-wrapper--animated` (tarea 6): `fit-content` no se puede interpolar.
   - El encabezado de `tasks.md` dice "no inline comments" y los dos lo contradicen a la letra.
   - **Juicio:** `code-comments.md` solo aplica a `.ts`, `.vue` y `.js` (`calcifer rules components/menu/menu.styles.scss` lo confirma, no entra). El archivo ya usa `//` para el porqué, como el de `!important`. Ninguno narra código. Es una ambigüedad menor de la restricción, no una violación de una rule. Se declara pero no se pide arreglo.

## Escenarios (14/16, ninguno contradicho)

| #   | Escenario                                      | Evidencia                                                                                                                                                                                                              |
| --- | ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Colapsado lleva el modifier                    | `Menu.spec.ts:54`; ds-run-4 S01 (ul 44, 0 `.is-collapse`)                                                                                                                                                              |
| 2   | Expandido sin clase de collapse                | `Menu.spec.ts:61`; S02 PASSED (wrapper 320, ul 288)                                                                                                                                                                    |
| 3   | Caja colapsada se ajusta al menú               | `Menu.spec.ts` (casos de `--collapse`); S03 (76 = 44 + 32)                                                                                                                                                             |
| 4   | Expandido mantiene ancho, mismo `ul`           | `Menu.spec.ts` (mismo `ul`); S04, 172 frames con el mismo `ul` por `evaluate` declarado                                                                                                                                |
| 5   | Alternar anima la caja                         | `Menu.spec.ts` (clase `--animated`); S12 con muestreo por frame (76↔320, ~142 ms al expandir y ~183 ms al colapsar); grep de `max-width` en el SCSS; front-b2b run-3-anim (el wrapper anima, el Sidebar salta)        |
| 6   | Salir de la transición                         | `Menu.spec.ts` (`collapseTransition=false` omite `--animated`, y coexiste con `--collapse`). S13 no observable en Storybook, queda `no_verificado` en browser                                                          |
| 7   | Reduced motion desactiva la transición         | Solo `grep -c "prefers-reduced-motion"` = 1 y el SCSS. **Flojo:** S14 quedó BLOCKED porque el engine no emula la media query, y nada ejercita la rama `reduce`. Cuento la evidencia declarada por el plan              |
| 8   | Activar ítem con teclado                       | `MenuItem.spec.ts` (Enter/Space); sin cambios desde la ronda 3                                                                                                                                                         |
| 9   | Abrir sub-menú colapsado con teclado           | `MenuSub.spec.ts`, `Integration.spec.ts`; S06 PASSED                                                                                                                                                                   |
| 10  | Escape cierra el popup                         | `MenuSub.spec.ts`                                                                                                                                                                                                      |
| 11  | Deshabilitados ignoran el teclado              | `MenuItem.spec.ts`, `MenuSub.spec.ts`                                                                                                                                                                                  |
| 12  | Ítem colapsado nombrado por su título          | `MenuItem.spec.ts`; S09 PASSED                                                                                                                                                                                         |
| 13  | Sub-menú colapsado nombrado por su título      | `MenuSub.spec.ts`, `Integration.spec.ts`; S10 PASSED; axe 0 `aria-command-name`                                                                                                                                        |
| 14  | Expandido conserva los nombres visibles        | `MenuItem.spec.ts`, `MenuSub.spec.ts`                                                                                                                                                                                  |
| 15  | Hover en ítem colapsado muestra título legible | **Parcial, no cuento.** `MenuItem.spec.ts` prueba que "Home" se renderiza en `.gui-menu-tooltip__label`, pero no el color ni el contraste ≥ 4.5:1. Sin corrida de browser: contraste `no probado`                      |
| 16  | Ítem y título activos comparten el primario    | **`no probado`.** Ni spec ni browser, solo el grep de `text-primary-def` y el mapeo de token a `--color-primary`. La corrida de front-b2b tampoco lo cubre: allá `menuRoute.style.scss` puede igualar la especificidad |

Los escenarios 1-14 tienen su corrida de browser sobre `292858d1`, anterior a las tareas 7 y 8. `MenuItem.vue` cambió en la tarea 7, pero solo dentro del `#content` del tooltip (el `sr-label` no se tocó). El riesgo es bajo y los specs actuales siguen en verde.

## Juicios sobre las decisiones fuera del plan

1. **Tareas 7 y 8 escritas después del código: el `listo cuando` describe el resultado, no es acomodo.**
   - Es falsable: nombra clases, utilidades, conteos de grep y valores medidos, y cada ítem se contrasta con el código.
   - El proposal agregó los greps de la tarea a la tabla. Eso protege contra el acomodo.
   - Costos honestos:
     - La mitad de comportamiento, es decir contraste y color computado, no tiene evidencia propia del plan.
     - "TDD red first" no se puede probar.
     - El título del spec de la tarea 7 ("owns its text color") promete más de lo que asserta, que es solo el texto. Es calidad, no plan.
   - Un plan hecho después de commits no es TDD ni gobernanza del plan. Es el registro de lo hecho, y el cierre debe leerse así.
2. **La excepción a "Claude no commitea" es válida.** Está declarada en el proposal («Con qué restricciones» → «Commits») y justificada: la pidió el dev en el chat tras una review fresca con 0 hallazgos. Los dos commits coinciden con el mensaje declarado.
3. **Comentario SCSS de la tarea 7:** juzgado en el ítem 5 de «de más». Es válido y no bloquea.
4. **`de_mas`:** reevaluado, no copiado. Los cuatro de la ronda 3 siguen sin ser pedidos por ninguna tarea y siguen siendo legítimos. El quinto, el par de comentarios SCSS, es nuevo.
5. **Puntos de browser:** `no_verificado` donde no hay corrida, como declara el proposal.
   - tarea 7, contraste: sin corrida.
   - tarea 8, color computado: sin corrida.
   - opt-out de `collapseTransition`: sin story, descansa en el spec.
   - reduced-motion: engine BLOCKED.
6. **Hallazgo sobre el plan:** el proposal pide explícitamente `no_verificado` para estos puntos, así que el hueco es consciente. Para cerrar con evidencia, hace falta una corrida nueva de `ds-run-5` sobre `505bfda7`. Hoy `list-plans` seguirá mostrando "verificado" hasta que este reporte se escriba. No bloquea.

## Con qué se probó

- **`calcifer check`:** exit 0, no declarado en el plan. ESLint limpio, `check-architecture` limpio, 74 tests en verde en los 4 archivos del cambio. Cubre 9 de 13 archivos, los 4 de `openspec/` quedan fuera de todo validador.
- **Comandos:** 18 de 18 de la tabla coinciden con lo declarado. Hay un `no_verificado` por los dos puntos de browser de las tareas 7 y 8, y otro por el criterio front-b2b (leído, no reproducido: requiere login contra ci-api).
- **Browser DS:** `BMB-4217-ds-run-4` (0 FAILED, 1 BLOCKED, sobre `292858d1`).
- **Browser front-b2b:** `BMB-4217-run-3` y `-run-3-anim`, también sobre `292858d1` y anteriores a las tareas 7 y 8. `run-3` salió FAILED por calidad (F10 con scrollbar clásico, que es el cierre ya juzgado como problema de redacción del criterio, y F11 y F13 MINOR), con 0 checks fallidos.

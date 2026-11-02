# Verificación · drag-list-component

```yaml
veredicto: pasa
ronda: 9
fecha: 2026-11-02
tareas_a_medias: []
cumplidas: 14/14
a_medias: 0
de_mas: 2
escenarios: 49/49
comandos:
  - cmd: "zsh -lic 'nvm use 20.19.3 && export GBP_PACKAGE_TOKEN=${GBP_PACKAGE_TOKEN:-dummy} && yarn install && yarn build'"
    exit: null
    esperado: 'exit 0'
    obtenido: 'no se corrió, por indicación del orquestador'
    coincide: no_verificado
  - cmd: npx vitest run --project unit components/drag-list
    exit: 0
    esperado: 'Test Files ≥ 17 passed y 0 failed (provisional)'
    obtenido: '19 passed (19) · 197 tests passed (ronda 8: 195; +2 de scroll.util.spec)'
    coincide: true
  - cmd: npx vitest run --project unit
    exit: 0
    esperado: '0 failed'
    obtenido: '101 archivos passed · 903 tests passed · 0 failed (ronda 8: 101/901)'
    coincide: true
  - cmd: npx vue-tsc --noEmit -p components/drag-list/tsconfig.json
    exit: 0
    esperado: 'exit 0'
    obtenido: 'exit 0'
    coincide: true
  - cmd: npx eslint components/drag-list stories/drag-list.stories.ts --ext .vue,.ts --max-warnings 0
    exit: 0
    esperado: 'exit 0'
    obtenido: 'exit 0'
    coincide: true
  - cmd: 'node scripts/check-architecture.mjs | grep -c drag-list'
    exit: 1
    esperado: '0'
    obtenido: '0 (el exit 1 es de grep -c sin coincidencias)'
    coincide: true
  - cmd: node scripts/check-styles.mjs
    exit: 0
    esperado: 'exit 0, y compila un paquete más que en la línea base'
    obtenido: 'compilan y están registrados 45 paquetes (base: 44); assets/scss/index.scss compila'
    coincide: true
  - cmd: 'node -e "…deps fuera de vue/@vueuse/core/@flash-global66/g-*…"'
    exit: 0
    esperado: '0'
    obtenido: '0'
    coincide: true
  - cmd: grep -ci sortable yarn.lock
    exit: 1
    esperado: '0'
    obtenido: '0 (el exit 1 es de grep sin coincidencias)'
    coincide: true
  - cmd: "git diff --name-only 9c5ca2f7 -- . ':!components/drag-list' ':!stories/drag-list.stories.ts' ':!openspec/changes/drag-list-component' ':!yarn.lock' ':!assets/scss/index.scss' | wc -l"
    exit: 0
    esperado: '0'
    obtenido: '0'
    coincide: true
  - cmd: "git diff 9c5ca2f7 -- assets/scss/index.scss | grep -c '^[+-][^+-]'"
    exit: 0
    esperado: '1'
    obtenido: '1'
    coincide: true
  - cmd: "grep -l 'prefers-reduced-motion' …drag-list.style.scss …drag-ghost.style.scss …drop-overlay.style.scss | wc -l"
    exit: 0
    esperado: '3'
    obtenido: '3'
    coincide: true
  - cmd: "awk '/<script/,/<\\/script>/' components/drag-list/src/DragList/index.vue | grep -cE 'computed\\(|function |=>'"
    exit: 1
    esperado: '0'
    obtenido: '0 (el exit 1 es de grep -c sin coincidencias)'
    coincide: true
  - cmd: "git diff --name-only 9c5ca2f7 -- 'components/*/CHANGELOG.md' | wc -l"
    exit: 0
    esperado: '0'
    obtenido: '0'
    coincide: true
  - cmd: GBP_PACKAGE_TOKEN=dummy calcifer check 9c5ca2f7
    exit: 0
    esperado: 'sin hallazgos nuevos (el plan no lo declara; lo pidió el orquestador)'
    obtenido: 'exit 0, pero «SIN REVISAR: ningún validador miró este diff, y son 75 archivos». eslint, check-architecture y test se delegan a CI'
    coincide: no_verificado
```

## Veredicto: pasa

Se verificó el HEAD `73fe6fe2` (detached, igual a la punta de `erik/EM-XX/feat/add-drag-list-component`) contra la Base `9c5ca2f7`. Los 13 comandos ejecutables de «Cómo se verifica» dan lo que declara el plan. El `tareas_a_medias` de la ronda 8 estaba vacío y el de esta también: no hay reincidencias.

Desde la ronda 8 (`5c77762d..HEAD`) cambiaron 6 archivos: `scroll.constant.ts` (nuevo), `scroll.util.ts`, `scroll.util.spec.ts`, `useAutoScroll.spec.ts`, `useDragList.spec.ts` y `tasks.md`.

## Cumplidas (14 de 14)

**Tareas 1 a 6, 8 y de la 10 a la 14.** Su código no cambió desde la ronda 8. La evidencia sigue en verde: 197/197 en el paquete, 903/903 en la suite, y `vue-tsc` y eslint en exit 0.

**Tarea 7.** Cubre `useAutoScroll.ts` y su spec, `scroll.util.ts` y su spec, y `shared/constants/scroll.constant.ts`.

- **La ampliación del review 4 se cumple.**
  - `pickScrollContainer` usa `canScrollOnAxis`, que lee `getComputedStyle(el).overflowX/overflowY` y, además del desborde, exige `auto`, `scroll` u `overlay`.
  - `SCROLLABLE_OVERFLOW_VALUES` vive en `shared/constants/scroll.constant.ts` y no se reexporta, porque `index.ts` no lo nombra.
- **Tests:** `scroll.util.spec.ts` cubre dos casos.
  - Un eje `hidden` que desborda devuelve `null` en horizontal y devuelve el elemento en vertical.
  - Un contenedor `visible` devuelve `null`.
- **El cambio de criterio es legítimo.** Suma un archivo y una ampliación con el comportamiento nuevo y sus tests, y no afloja nada que ya se pidiera.
- **La ubicación respeta `ds-types-location`.** Las constantes van en `constants/`, y van en `shared/` porque las usa `shared/utils`.
- **Los fixtures no rebajan ningún test, solo fijan la precondición.**
  - **Lo de jsdom se comprobó:** con `style.overflow='auto'`, `getComputedStyle` da `visible visible`.
  - **Los negativos de `scroll.util.spec`:** siguen dando `null` por el tamaño o la posición del puntero, no por el overflow.
  - **Los negativos de `useAutoScroll.spec`:** sin fijar `auto` en `createContainer()`, pasarían solos, porque el código descarta los contenedores `visible`. Fijar `auto` es lo que los mantiene honestos.

**Tarea 9.** Cubre `useDragList.ts` y su spec.

- Se quitó `expect(autoScroll.options).not.toHaveProperty('axis')`. Siguen las aserciones que pide el criterio actual: `toContain(panel)` y `toContain(list)`.
- **El cambio de criterio es legítimo.** Esa garantía pasa al typecheck, que es un comando declarado. `UseAutoScrollOptions` no tiene `axis`, así que el control de propiedades sobrantes del objeto literal de `useDragList.ts:259-263` haría fallar `vue-tsc`, que dio exit 0.

## A medias

Ninguna.

## De más

Siguen los dos de las rondas 4 a 8, pedidos por el dev:

1. Los ajustes de layout `gap-sm`, `shrink-0`, `whitespace-nowrap` e `items-stretch`.
2. La story «Horizontal con inicio y fin» (`HorizontalFlow`, `createApproversFlowRender`).

Esta ronda no suma nada nuevo: `scroll.constant.ts` ya figura en los `archivos` de la tarea 7.

## Escenarios (49 de 49 con evidencia)

`specs/g-drag-list/spec.md` no cambió. El único cambio de código restringe qué contenedor se elige, y los 197 tests siguen en verde, así que ningún escenario queda contradicho. «Scroll cerca del borde» sigue probado solo en jsdom, con contenedores en `overflow: auto`.

## Con qué se probó

- **`calcifer check 9c5ca2f7`:** exit 0, pero no revisó ningún archivo (75 sin revisar), porque delega eslint, check-architecture y test a CI. Esos tres se corrieron como comandos del plan y dieron limpio.
- **Comandos de «Cómo se verifica»:** los 13 ejecutables coinciden con lo declarado.
- **Fuera de este veredicto:** «Preparar el entorno» (`no_verificado`), Storybook en el navegador, iOS Safari y `storybook build` (OOM conocido).
- **Para mirar en el navegador:** el único estilo del paquete que declara `overflow` es la lista horizontal del destino (`overflow-x-auto`, en `target-panel.style.scss:27`). Ahora, que los paneles hagan auto-scroll vertical depende de que quien los usa les dé `overflow: auto` o `scroll`. Antes tampoco se desplazaba un contenedor `visible`, así que no es una regresión.

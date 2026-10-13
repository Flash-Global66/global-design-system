# Verificación · drag-list-component

```yaml
veredicto: pasa
ronda: 5
fecha: 2026-10-13
tareas_a_medias: []
cumplidas: 14/14
a_medias: 0
de_mas: 2
escenarios: 49/49
comandos:
  - cmd: "zsh -lic 'nvm use 20.19.3 && export GBP_PACKAGE_TOKEN=${GBP_PACKAGE_TOKEN:-dummy} && yarn install && yarn build'"
    exit: null
    esperado: 'exit 0'
    obtenido: 'no se corrió por indicación del orquestador'
    coincide: no_verificado
  - cmd: npx vitest run --project unit components/drag-list
    exit: 0
    esperado: 'Test Files ≥ 17 passed y 0 failed (provisional)'
    obtenido: '19 passed (19) · 187 tests passed (ronda 4: 178)'
    coincide: true
  - cmd: npx vitest run --project unit
    exit: 0
    esperado: '0 failed'
    obtenido: '98 archivos passed · 799 tests passed · 0 failed'
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
    obtenido: '45 paquetes compilan y están registrados (base: 44); assets/scss/index.scss compila'
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
  - cmd: "git diff --name-only 93d2d0a4 -- . ':!components/drag-list' ':!stories/drag-list.stories.ts' ':!openspec/changes/drag-list-component' ':!yarn.lock' ':!assets/scss/index.scss' | wc -l"
    exit: 0
    esperado: '0'
    obtenido: '0'
    coincide: true
  - cmd: "git diff 93d2d0a4 -- assets/scss/index.scss | grep -c '^[+-][^+-]'"
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
  - cmd: "git diff --name-only 93d2d0a4 -- 'components/*/CHANGELOG.md' | wc -l"
    exit: 0
    esperado: '0'
    obtenido: '0'
    coincide: true
  - cmd: GBP_PACKAGE_TOKEN=dummy calcifer check
    exit: 0
    esperado: 'sin hallazgos nuevos (el plan no lo declara; lo pidió el orquestador)'
    obtenido: 'ok: la rama pasa la validación. 58 de 74 archivos revisados (el nuevo es engine.type.ts); 19 archivos y 187 tests en verde; eslint limpio'
    coincide: true
```

## Veredicto: pasa

- Las 14 tareas cumplen su `listo cuando`, incluidas las ampliaciones «tras el review».
- Todos los comandos que se pudieron correr dan lo que declara el plan.
- Los 49 escenarios tienen evidencia y ninguno queda contradicho.
- No hay reincidencias.
- Se verificó en la rama `claude/draggable-cards-component-5829e2`, HEAD `3e36b846`, contra la base `93d2d0a4`.

## Cumplidas (14 de 14)

**Tareas 2, 3, 4, 5, 7, 10, 12 y 14.** Ninguna cambia de criterio. En sus archivos solo se agregaron anotaciones de tipos, más el parámetro `isOrdered` en `list.util`, que quedó registrado en la tarea 9. La evidencia es la de la ronda 4.

**Tarea 1** (`drag-list.type.ts`, `engine.type.ts` y `drag.constant.ts`)

- `minZoneSize` ya no está en el paquete.
- Fuera de `src/shared/types/` no queda ningún tipo con nombre: el grep da 0.
- Los 12 composables exportados anotan su tipo de retorno.
- `engine.type.ts` no se reexporta: `index.ts` no cambió.
- **Observación sobre el plan:** el criterio original sigue pidiendo «48 px de zona mínima» en `drag.constant.ts`, y la ampliación lo revoca. Cuenta como cumplido porque la ampliación quedó registrada y justificada.

**Tarea 6** (`usePointerDrag.ts`)

- `getScrollContainers` y el scroll en fase de captura desplazan el cache, en lugar de releerlo. Lo prueba un test nuevo.
- **Observación sobre el plan:** el criterio original dice «se invalida con el scroll», y la ampliación lo reemplaza por «se desplaza».

**Tarea 8** (`useKeyboardReorder.ts`)

- `focusIndex` es un `shallowRef` que se dispara con `requestFocus` y `triggerRef`.
- Lo prueba el test «dos Supr seguidos».

**Tarea 9** (`useDragList.ts`)

- El auto-scroll ahora incluye la lista del destino, con eje `x` en horizontal.
- `getPreviewItems` recibe `isOrdered`.
- Hay tests nuevos.

**Tarea 11** (`useTargetPanel.ts` e `index.vue`)

- `handleItemKeydown` filtra con `event.target !== event.currentTarget`.
- `lastIndex` pasó al composable, e `index.vue` ya no importa `computed`.
- Hay tres tests nuevos.

**Tarea 13** (`useDragListFocus.ts`)

- El `watch` usa `{ flush: 'post' }`.
- Hay un test con dos re-renderizados seguidos sobre el mismo índice.
- El comando de «sin lógica» da 0.

**Legitimidad de las correcciones.** Cada una corresponde a su ampliación en `tasks.md`, tiene tests y no se sale de los `archivos:` de su tarea. La excepción es `engine.type.ts`, que nombra explícitamente la ampliación de la tarea 1.

## Puntos que se pidió juzgar

**1. `DragListSlots` y la API pública: el cambio es compatible.**

- `DragListSourceSlotProps` y `DragListTargetSlotProps` son estructuralmente idénticos a los literales que reemplazan.
- `DragListAccessor<DragListKey>` y `DragListAccessor<string>` equivalen a los tipos anteriores de `itemKey` e `itemLabel`.
- `DragListProps` es un export nuevo y aditivo, sin choque de nombres.
- La única resta de API es `DRAG_THRESHOLDS.minZoneSize`. No rompe a nadie, porque el paquete está en 0.0.0 y sin publicar.

**2. `DragGhostProps` nunca fue público.** `index.ts` nunca reexportó `drag-ghost.constant.ts`. Hoy vive en `engine.type.ts`, que tampoco se reexporta.

## A medias

Ninguna.

## De más (2, los mismos de la ronda 4)

1. Los ajustes de layout `gap-sm`, `shrink-0`, `whitespace-nowrap` e `items-stretch` siguen sin un `listo cuando` que los cubra.
2. La story «Horizontal con inicio y fin» y `createApproversFlowRender`.

Los 6 commits de esta ronda no agregan nada de más: todo quedó registrado como «Ampliado tras el review». Un matiz: el filtro de teclado para descendientes del slot no lo pide ningún escenario, porque «Botones del slot» habla del puntero. Igual es coherente con la «tarjeta enfocada» del requisito de teclado, y está registrado.

## Escenarios (49 de 49 con evidencia)

| Escenarios                           | Evidencia                                                                                                                                         |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| 45 sin cambios                       | La misma de la ronda 4, en verde                                                                                                                  |
| «Agregar arrastrando en modo simple» | `useDragList.spec`. La previsualización ahora coincide con lo que se emite: `list.util.spec`, «sin ordered el placeholder del origen va al final» |
| «Sin ordered no hay orden visible»   | `list.util.spec`, «sin ordered arrastrar dentro del destino no reordena». Ya no queda contradicho visualmente                                     |
| «Scroll cerca del borde»             | `useAutoScroll.spec` y el test nuevo de `useDragList.spec`, que confirma la lista del destino entre los contenedores                              |
| «Quitar con teclado»                 | `useKeyboardReorder.spec` y el test nuevo de `useDragListFocus.spec`                                                                              |

## Con qué se probó

- **`calcifer check`:** exit 0 sobre 58 de 74 archivos. Los 16 que quedan afuera son SCSS, `package.json` y `tsconfig.json`; los SCSS los cubre `check-styles`.
- **Comandos de «Cómo se verifica»:** todos coinciden. «Preparar el entorno» queda `no_verificado`.
- **Lo que este veredicto no cubre:**
  - El navegador: las correcciones de auto-scroll horizontal y de foco solo se probaron en jsdom.
  - iOS Safari real.
  - `storybook build`, que falla por el OOM ya conocido del docgen.

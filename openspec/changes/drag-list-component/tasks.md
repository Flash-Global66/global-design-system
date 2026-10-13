# Tareas · paquete nuevo `g-drag-list` (`GDragList`)

Restricciones que recibe todo subagente. El detalle está en `proposal.md` y `design.md`.

- **Arquetipo complejo** (`docs/architecture/component-architecture.md`):
  - `index.vue` es template puro con `<style lang="scss" src>`.
  - Los tipos con nombre van solo en `src/shared/types/drag-list.type.ts`, y las props y constantes solo en `constants/`.
  - El único barrel es `components/drag-list/index.ts`.
- **BEM:** con `useNamespace` y los mixins `b/e/m/when` de `@flash-global66/g-utils/mixins`, nunca clases `gui-*` escritas a mano.
- **Funciones:** `function` para las que tienen nombre, y un objeto de parámetros desde cuatro argumentos.
- **Nombres:** booleanos con `is/has/should/can/did`.
- **Exports y tipos:** named exports, `import type`, sin `any` y con retorno anotado en lo exportado.
- **Comentarios:** ninguno en línea. JSDoc corto en español en utils y composables exportados.
- **Efectos:** listeners con `useEventListener` y el rAF con `useRafFn`.
- **Tests:** TDD estricto y UNIT-ONLY. Spec primero, solo de utils y composables, con `tests/utils/withSetup.ts`.
- **Dependencias:** solo `vue`, `@vueuse/core` y `@flash-global66/g-*`. No se toca `vite.config.base.ts` ni otros paquetes.
- **Tipos fijos:** los tipos públicos se fijan en la tarea 1. Si otra tarea necesita cambiarlos, se detiene y lo reporta.
- **Release:** `CHANGELOG.md` y `version` no se tocan a mano. Commits en Conventional Commits puros, sin prefijo de HU.
- **Entorno:** antes de correr specs, typecheck o lint:

  ```bash
  zsh -lic 'nvm use 20.19.3 && export GBP_PACKAGE_TOKEN=${GBP_PACKAGE_TOKEN:-dummy} && yarn install && yarn build'
  ```

---

- [x] **1 · Paquete y contrato público**
  - archivos: `components/drag-list/package.json`, `components/drag-list/vite.config.ts`, `components/drag-list/tsconfig.json`, `components/drag-list/index.ts`, `components/drag-list/src/DragList/index.vue`, `components/drag-list/src/DragList/drag-list.style.scss`, `components/drag-list/src/DragList/constants/drag-list.constant.ts`, `components/drag-list/src/shared/types/drag-list.type.ts`, `components/drag-list/src/shared/constants/drag.constant.ts`, `components/drag-list/src/shared/constants/texts.constant.ts`, `components/drag-list/tests/DragList/props.spec.ts`, `yarn.lock`
  - depende de: ninguna
  - listo cuando: TDD, primero `props.spec.ts` en rojo. **`package.json`** sigue `component-architecture.md:227-256`: `name @flash-global66/g-drag-list`, `version 0.0.0`. `exports["./styles.scss"]` → `./src/DragList/drag-list.style.scss`. dependencies: `g-utils`, `g-hooks`. peers: `vue ^3.2.0`, `@vueuse/core ^13.0.0`, `g-teleport`, `g-icon-font`. **`dragListProps` / `dragListEmits`** (con `buildProps` y `definePropType`) declaran: Props con default: `modelValue []`, `source []`, `ordered false`, `repeatable false`, `dragToRemove true`, `keyboardRemove false`, `direction 'vertical'`, `disabled false`. Props sin default: `itemKey` (obligatoria), `itemLabel`, `cloneItem`, `startNode`, `endNode` y `texts`. Emits `update:modelValue`, `add`, `remove` y `reorder`, con los payloads de `design.md`. **`drag-list.type.ts`** exporta: `DragListItem`, `DragListKey`, `DragListSourceGroup`, `DragListSource`. `DragListDirection`, `DragListAddVia`, `DragListRemoveVia`, `DragZone`, `DragOrigin`. `DragSession`, `DragListTexts`, `DragListOverlayAction`, `DragListSlots`, `DragListExpose`. **`drag.constant.ts`** tiene los umbrales: 4 px para mouse, 200 ms y la tolerancia de touch, 48 px de zona mínima, y el borde y la velocidad máxima del auto-scroll. **`texts.constant.ts`** tiene `DEFAULT_DRAG_LIST_TEXTS` en español: overlays, anuncios y etiquetas, con las claves `overlayAdd` y `overlayRemove` entre ellas. **`index.vue`** es un shell mínimo que monta. **`index.ts`** sigue a `components/inline/index.ts`. **`yarn install`** registra el workspace en `yarn.lock`. **Verificaciones:** `props.spec.ts` comprueba los defaults; `node scripts/check-architecture.mjs | grep -c drag-list` da `0`; `vue-tsc` del paquete pasa.
  - commit: `feat(drag-list): paquete g-drag-list con su contrato de props, emits y tipos`

- [x] **2 · Utils de lista: agregar, quitar, mover, visibilidad y keys**
  - archivos: `components/drag-list/src/shared/utils/list.util.ts`, `components/drag-list/tests/shared/utils/list.util.spec.ts`
  - depende de: 1
  - listo cuando: hay funciones puras con JSDoc y spec. **Básicas:** `getItemKey(item, itemKey)` y `getItemLabel(item, itemLabel, itemKey)`. `insertItemAt`, `removeItemAt` y `moveItem`. `moveItem` devuelve el mismo arreglo si `from === to`, y ninguna de las tres muta su entrada. **`getVisibleSource({ source, modelValue, itemKey, isRepeatable })`:** En uso único, quita lo que ya está en `modelValue` y conserva el orden de `source`. Con `source` agrupado, omite los grupos que quedan vacíos. Con `isRepeatable`, devuelve `source` tal cual. El spec cubre los escenarios «desaparece del origen», «el buscador no resucita», «vuelve a su posición original» y «grupo vacío». **`getSourceEmptyReason`** devuelve `'empty' | 'all-added' | null`. **Otras:** `findDuplicateKeys` e `isGroupedSource`. **`getPreviewItems({ items, session })`:** Inserta un marcador de placeholder en `session.dropIndex` cuando el arrastre sale del origen y la zona es el destino. Previsualiza el reordenamiento cuando el arrastre sale del destino. Sin sesión activa, devuelve los ítems sin cambios.
  - commit: `feat(drag-list): utils puros de lista y visibilidad del origen`

- [x] **3 · Utils de inserción y de zona**
  - archivos: `components/drag-list/src/shared/utils/drop.util.ts`, `components/drag-list/src/shared/utils/zone.util.ts`, `components/drag-list/tests/shared/utils/drop.util.spec.ts`, `components/drag-list/tests/shared/utils/zone.util.spec.ts`
  - depende de: 1
  - listo cuando: **`calculateDropIndex({ point, rects, axis, draggedIndex })`:** Devuelve el índice por punto medio en el eje `y` o `x`. Ignora el rect de `draggedIndex`. Clampea a `[0, n]`, así que soltar más allá del nodo de fin da `n`. **Spec de `calculateDropIndex`:** Vertical: `[A, C]` más `B` entre ambos da 1. Horizontal: `[A, B]` con el punto entre los medios da 1. Soltar en el mismo lugar da `draggedIndex`. Debajo de todo da `n`. **`resolveDragZone({ center, sourceRect, targetRect, origin, canDropToRemove })`:** Devuelve `'target' | 'source' | null` según el centro del ghost. Si el arrastre sale del destino y `canDropToRemove` es false, nunca devuelve `'source'`. Si sale del origen, nunca devuelve `'source'`. **Spec de `resolveDragZone`:** cubre «la zona se decide por el centro», que con el puntero sobre el origen y el centro sobre el destino da `'target'`.
  - commit: `feat(drag-list): cálculo de índice de inserción y de zona activa`

- [x] **4 · Utils de activación, auto-scroll y overlays**
  - archivos: `components/drag-list/src/shared/utils/activation.util.ts`, `components/drag-list/src/shared/utils/scroll.util.ts`, `components/drag-list/src/shared/utils/overlay.util.ts`, `components/drag-list/tests/shared/utils/activation.util.spec.ts`, `components/drag-list/tests/shared/utils/scroll.util.spec.ts`, `components/drag-list/tests/shared/utils/overlay.util.spec.ts`
  - depende de: 1
  - listo cuando: **`hasExceededDistance(start, current, threshold)`:** 3 px da `false` y 5 px da `true`. **`isTouchMoveWithinTolerance`:** tiene spec. **`isNonDraggableTarget(target, root)`:** da `true` para `button`, `a`, `input`, `select`, `textarea`, `[data-no-drag]` o un descendiente de ellos dentro de `root`. **`calculateAutoScrollDelta({ pointer, rect, edge, maxSpeed, axis })`:** Da 0 fuera del borde. Es negativo hacia el inicio y positivo hacia el final. Su magnitud crece hacia el borde, con tope en `maxSpeed`. **`getOverlayState({ session, canDropToRemove })`** devuelve `{ source, target }`, cada uno con `isVisible` y `action`: Agregar sobre el destino cuando el arrastre sale del origen. Eliminar sobre el origen cuando sale del destino con `canDropToRemove`. Ninguno al reordenar sin `canDropToRemove`. El overlay de una zona se oculta mientras esa zona está activa. Ninguno con la sesión sin activar (el click no hace parpadear).
  - commit: `feat(drag-list): umbrales de activación, auto-scroll y estado de overlays`

- [x] **5 · Anunciador para lector de pantalla**
  - archivos: `components/drag-list/src/shared/composables/useLiveAnnouncer.ts`, `components/drag-list/tests/shared/composables/useLiveAnnouncer.spec.ts`
  - depende de: 1
  - listo cuando: `useLiveAnnouncer(texts)` expone `message` (ref) y `announce(key, params)`. Interpola `{label}`, `{position}` y `{total}` sobre `DragListTexts`. Repetir el mismo mensaje fuerza el re-anuncio (vacía y reasigna en el siguiente tick). El spec cubre «agregado en posición 2 de 2» con el label, y el re-anuncio.
  - commit: `feat(drag-list): anunciador aria-live con textos configurables`

- [x] **6 · Motor de puntero**
  - archivos: `components/drag-list/src/shared/composables/usePointerDrag.ts`, `components/drag-list/tests/shared/composables/usePointerDrag.spec.ts`
  - depende de: 3, 4
  - listo cuando: `usePointerDrag({ sourceEl, targetEl, getTargetItemEls, direction, canDropToRemove, isDisabled, onDrop, onCancel })`: **Eventos:** Registra `pointerdown` en los paneles y `pointermove`, `pointerup`, `pointercancel` y `keydown` (Esc) en `document`, con `useEventListener`. Usa `setPointerCapture`. **Activación:** Mouse y lápiz: con `hasExceededDistance` sobre 4 px. Touch: con long-press de 200 ms dentro de la tolerancia. Si el dedo se mueve antes, no activa y no llama a `preventDefault`. Recién al activar registra `touchmove` con `{ passive: false }` y `preventDefault`. Lo quita al terminar. Ignora `isNonDraggableTarget` y `isDisabled`. **Estado:** Expone `session`: `origin`, `item`, `fromIndex`, `pointer`, `ghostOffset`, `isActivated`, `zone` y `dropIndex`. `zone` y `dropIndex` se calculan con `resolveDragZone` y `calculateDropIndex` sobre rects cacheados al activar. El cache se invalida con el scroll de los paneles. **Cierre:** Al soltar con zona, llama a `onDrop({ origin, zone, fromIndex, toIndex, item })`. Sin zona, con Esc o con `pointercancel`, llama a `onCancel()`. En todos los casos limpia la sesión. **Spec** (con eventos sintéticos en jsdom): umbral de mouse, scroll touch sin activar, botón del slot sin arrastre, Esc, `pointercancel` y resolución de zona con `onDrop`.
  - commit: `feat(drag-list): motor de arrastre con pointer events`

- [x] **7 · Auto-scroll**
  - archivos: `components/drag-list/src/shared/composables/useAutoScroll.ts`, `components/drag-list/tests/shared/composables/useAutoScroll.spec.ts`
  - depende de: 4
  - listo cuando: `useAutoScroll({ containers, pointer, axis, isActive })`: Con `useRafFn`, aplica `calculateAutoScrollDelta` en cada frame al contenedor bajo el puntero. Se pausa cuando `isActive` pasa a false o el delta es 0. El spec cubre «scroll cerca del borde» (sube `scrollTop`) y la detención.
  - commit: `feat(drag-list): auto-scroll de paneles durante el arrastre`

- [x] **8 · Teclado**
  - archivos: `components/drag-list/src/shared/composables/useKeyboardReorder.ts`, `components/drag-list/tests/shared/composables/useKeyboardReorder.spec.ts`
  - depende de: 2
  - listo cuando: `useKeyboardReorder({ items, direction, isOrdered, canRemove, isDisabled, onMove, onRemove, onAnnounce })` expone `handleKeydown(event, index)`, `grabbedIndex` y `focusIndex`. **Tomar y mover:** `Espacio` o `Enter` toma la tarjeta, solo con `isOrdered`. `↑`/`↓` mueven en vertical y `←`/`→` en horizontal. `Espacio` o `Enter` suelta y llama una sola vez a `onMove(from, to)` si cambió de posición. `Esc` restaura sin llamar. **Quitar:** `Supr` o `Retroceso` llaman a `onRemove(index)` solo con `canRemove` y sin tarjeta tomada. **Foco:** `focusIndex` queda en la tarjeta movida, o en la siguiente después de quitar. **Spec:** Del foco en `A` dentro de `[A, B, C]`, la secuencia `Espacio` → `↓` → `↓` → `Espacio` da `onMove(0, 2)`. Esc no emite. Con y sin `canRemove`. La independencia de `dragToRemove` se resuelve en la tarea 9.
  - commit: `feat(drag-list): reordenar y quitar con teclado`

- [ ] **9 · Orquestador `useDragList`**
  - archivos: `components/drag-list/src/DragList/useDragList.ts`, `components/drag-list/tests/DragList/useDragList.spec.ts`
  - depende de: 2, 3, 4, 5, 6, 7, 8
  - listo cuando: `useDragList(props, emit)`: **Expone:** `ns`, `texts` (defaults más `props.texts`), `visibleSource`, `emptyReason`, `previewItems`, `overlayState`, `session`. Los refs de los paneles, `announcement` y los handlers de teclado. `add(item, index?, via)`, `remove(keyOrIndex, via)` y `move(from, to)`. **Emits** con los payloads de la spec: `add`: `update:modelValue` más `add(item, index, via)`, con `via` en `'drag' | 'button' | 'api'`. `remove`: `update:modelValue` más `remove(item, index, via)`. `move`: `update:modelValue` más `reorder(item, from, to)`. **Guardas:** `disabled` no emite. En uso único no duplica. Con `repeatable` agrega `cloneItem(item)`. Sin `ordered`, agrega al final y `move` no emite. `moveUp` en el primero y `moveDown` en el último no emiten. Con `keyboardRemove` y `:drag-to-remove="false"`, quitar con teclado funciona. **`console.warn`** de keys duplicadas en desarrollo. **Conexión del motor:** `onDrop` se traduce a add, remove o move, y soltar en el mismo lugar no emite. **Anuncios** en cada acción. **Handlers de slot:** `add`, `remove`, `moveUp` y `moveDown`. **Spec:** cubre los escenarios de la spec de transferencia, uso único, repetible, flujo ordenado, quitar arrastrando, teclado y deshabilitado, más «Nombre accesible desde itemLabel» y «Textos sobrescritos» (merge parcial de `texts`).
  - commit: `feat(drag-list): orquestador de estado, emits y guardas`

- [x] **10 · Panel de origen y overlay**
  - archivos: `components/drag-list/src/components/SourcePanel/index.vue`, `components/drag-list/src/components/SourcePanel/useSourcePanel.ts`, `components/drag-list/src/components/SourcePanel/source-panel.style.scss`, `components/drag-list/src/components/DropOverlay/index.vue`, `components/drag-list/src/components/DropOverlay/useDropOverlay.ts`, `components/drag-list/src/components/DropOverlay/drop-overlay.style.scss`, `components/drag-list/tests/components/SourcePanel/useSourcePanel.spec.ts`, `components/drag-list/tests/components/DropOverlay/useDropOverlay.spec.ts`
  - depende de: 1
  - listo cuando: **`SourcePanel`** dibuja: `#source-header`. Lista plana o grupos, con `#source-group-header`. Cada ítem con `#source-item` (`item`, `canAdd`, `add`). `#source-empty` (`reason`). El modificador `is-active-zone` en tono de error. **`DropOverlay`:** `pointer-events: none`, `aria-hidden="true"`, posición absoluta sobre el panel. Ícono `regular plus` o `regular trash` según `action`. Slot `#drop-overlay` y transición de opacidad anulada con `prefers-reduced-motion`. **Specs de los composables:** clases BEM y modificadores `is-*`. **`vue-tsc`** del paquete pasa.
  - commit: `feat(drag-list): panel de origen y overlay de ayuda`

- [x] **11 · Panel de destino, nodos y conectores**
  - archivos: `components/drag-list/src/components/TargetPanel/index.vue`, `components/drag-list/src/components/TargetPanel/useTargetPanel.ts`, `components/drag-list/src/components/TargetPanel/target-panel.style.scss`, `components/drag-list/src/components/FlowNode/index.vue`, `components/drag-list/src/components/FlowNode/useFlowNode.ts`, `components/drag-list/src/components/FlowNode/flow-node.style.scss`, `components/drag-list/src/components/FlowConnector/index.vue`, `components/drag-list/src/components/FlowConnector/useFlowConnector.ts`, `components/drag-list/src/components/FlowConnector/flow-connector.style.scss`, `components/drag-list/tests/components/TargetPanel/useTargetPanel.spec.ts`, `components/drag-list/tests/components/FlowNode/useFlowNode.spec.ts`, `components/drag-list/tests/components/FlowConnector/useFlowConnector.spec.ts`
  - depende de: 1
  - listo cuando: **`TargetPanel`:** Dibuja `<ol>` con `ordered` y `<ul>` sin él. Cada ítem es un `<li tabindex="0">` con `#target-item`: `item`, `index`, `position` (base 1), `isFirst`, `isLast`, `remove`, `moveUp` y `moveDown`. Marca `is-placeholder` y `is-active-zone` y dibuja `#empty`. Dibuja los nodos de inicio y fin solo con `ordered`, con el slot por encima de la prop, fuera de la zona de inserción. Usa `touch-action: manipulation`. **`useTargetPanel`** decide los conectores: Uno antes de la tarjeta `i` si `i > 0` o si hay inicio. Uno final si hay fin y al menos una tarjeta. Ninguno con la lista vacía. El spec cubre «cantidad de conectores», «destino vacío sin flechas», «conexión automática de la primera tarjeta» y «el slot reemplaza a la prop». **`FlowConnector`** es `aria-hidden` y gira con `direction="horizontal"`. **Layout:** flex en columna u horizontal según `direction`. **`vue-tsc`** del paquete pasa.
  - commit: `feat(drag-list): panel de destino con flujo, nodos y conectores`

- [x] **12 · Ghost**
  - archivos: `components/drag-list/src/components/DragGhost/index.vue`, `components/drag-list/src/components/DragGhost/useDragGhost.ts`, `components/drag-list/src/components/DragGhost/drag-ghost.style.scss`, `components/drag-list/tests/components/DragGhost/useDragGhost.spec.ts`
  - depende de: 1
  - listo cuando: Dibuja el slot recibido dentro de `g-teleport` a `body`, solo con la sesión activada. Usa `position: fixed`, `transform: translate3d(x, y, 0)` desde `pointer - ghostOffset`, el `z-index` de `useZIndex`, opacidad reducida, sombra y `aria-hidden="true"`. El spec del composable cubre el style calculado y que no se renderice sin sesión. `vue-tsc` del paquete pasa.
  - commit: `feat(drag-list): tarjeta fantasma teletransportada`

- [ ] **13 · Ensamblar `GDragList`**
  - archivos: `components/drag-list/src/DragList/index.vue`, `components/drag-list/src/DragList/drag-list.style.scss`
  - depende de: 9, 10, 11, 12
  - listo cuando: **`index.vue`** es template puro: Instancia `useDragList` y compone `SourcePanel`, `TargetPanel`, un `DropOverlay` por panel y `DragGhost`. Reenvía todos los slots tipados con `defineSlots<DragListSlots>()`. Tiene una región `aria-live="polite"` visualmente oculta y `aria-disabled` en los paneles. Llama a `defineExpose({ add, remove, move })`. **Layout:** Con `vertical`, los paneles van lado a lado. Con `horizontal`, el origen va arriba del destino. La zona de quitar mide al menos 48 px. **`drag-list.style.scss`:** Agrega con `@use` los `.style.scss` de los subcomponentes. Anula las transiciones con `prefers-reduced-motion`. **Verificaciones:** `vue-tsc` del paquete pasa, y `check-styles` compila `g-drag-list`.
  - commit: `feat(drag-list): ensamblado del componente con slots, región live y expose`

- [ ] **14 · Story**
  - archivos: `stories/drag-list.stories.ts`
  - depende de: 13
  - listo cuando: hay stories con docs en español, siguiendo `stories/drawer.stories.ts`: «Simple». «Flujo con fin», que es el caso de la imagen: Aprobadores con `g-avatar`. Buscador `g-search-input` y grupos A/B/C resueltos del lado del consumidor. El «+» con `g-icon-button`, y editar y borrar en el slot. `end-node="Cierre del informe"`. «Inicio y fin». «Horizontal». «Repetible». «Deshabilitado». Storybook compila y se ven en el navegador.
  - commit: `docs(drag-list): stories de los modos del componente`

## Orden de ejecución

1. **La 1 va sola.** Fija el contrato.
2. **En paralelo:** 2, 3, 4, 5, 10, 11 y 12, porque tocan archivos disjuntos.
3. **Después:**
   - la 6 espera a la 3 y a la 4;
   - la 7, a la 4;
   - la 8, a la 2.
4. **La 9** espera de la 2 a la 8.
5. **La 13** espera a la 9, la 10, la 11 y la 12.
6. **La 14** espera a la 13.

# Diseño · `GDragList`

Las decisiones que no se deducen leyendo las tareas, con su porqué.

## 1. El motor solo calcula estado; Vue dibuja todo

```
pointerdown ─► usePointerDrag ─► session { origin, item, fromIndex, pointer, isActivated, zone, dropIndex }
                                   │
              ┌────────────────────┼─────────────────────────┐
              ▼                    ▼                         ▼
   getPreviewItems()        getOverlayState()          DragGhost (teleport)
   (placeholder/reorden)    (qué overlay y dónde)      (mismo slot, fixed)
              │
pointerup ─► onDrop({ origin, zone, fromIndex, toIndex, item })
              ▼
         useDragList: add / remove / move ─► emits
```

- **Ni el motor ni ninguna otra pieza mueve nodos del DOM.** La previsualización (placeholder o reordenamiento) es una lista derivada con funciones puras, y Vue la renderiza.
- **Así se evita el problema de SortableJS**, que mueve el DOM por su cuenta y obliga a revertirlo para que Vue no se desincronice.
- **Casi toda la lógica queda en utils puros**, que es lo que permite TDD con la política UNIT-ONLY.

## 2. Qué se tomó de SortableJS (comportamiento, no código)

| SortableJS                                | Acá                                                                                                                      |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `group.pull: 'clone'`, `put: false`       | El origen nunca recibe tarjetas (salvo para quitar). Lo agregado es el mismo ítem, o `cloneItem(item)` con `repeatable`. |
| `swapThreshold`                           | Punto medio en el eje de `direction`, sobre rects **originales** cacheados al activar (sección 3).                       |
| `delayOnTouchOnly`, `touchStartThreshold` | Long-press de 200 ms con tolerancia, solo en touch.                                                                      |
| `fallbackTolerance`                       | 4 px para mouse y lápiz.                                                                                                 |
| `filter`                                  | `isNonDraggableTarget`: button, a, input, select, textarea, `[data-no-drag]`.                                            |
| AutoScroll                                | `calculateAutoScrollDelta` más `useAutoScroll` con `useRafFn`.                                                           |
| `ghostClass` / `chosenClass`              | Modificadores BEM `is-placeholder`, `is-dragging` e `is-active-zone`.                                                    |

Como no se copia código, no aplica el aviso MIT. El crédito como inspiración va en la documentación del paquete.

## 3. Índice de inserción sobre la lista original

- **Cómo se calcula:** al activar el arrastre se cachean los rects de las tarjetas del destino. `calculateDropIndex` compara el puntero contra sus puntos medios, sin contar la tarjeta arrastrada.
- **Por qué no sobre la previsualización:** si se calculara sobre la lista ya previsualizada, el placeholder desplaza tarjetas, cambia los puntos medios y el índice oscila (el clásico «parpadeo» del reordenamiento).
- **Cuándo se invalida el cache:** con el scroll de los paneles, que también dispara el auto-scroll, y con resize.

## 4. Zona por el centro del ghost

- **Cómo se decide:** `resolveDragZone` usa el centro del ghost contra los rects de los paneles, no el elemento bajo el puntero.
- **Ventaja 1:** no hay parpadeo en el borde entre paneles.
- **Ventaja 2:** los overlays pueden tener `pointer-events: none` sin afectar la detección.

Las zonas son excluyentes:

| Zona           | Qué pasa al soltar              |
| -------------- | ------------------------------- |
| Destino        | Inserta o reordena              |
| Origen         | Quita (solo con `dragToRemove`) |
| Fuera de ambas | Cancela                         |

## 5. Touch sin romper el scroll

- **Las tarjetas llevan `touch-action: manipulation`, nunca `none`.** Con `none` no se podría hacer scroll sobre listas largas.
- **Durante el long-press el gesto sigue siendo scroll nativo.** Si el dedo se mueve más allá de la tolerancia antes de los 200 ms, no se activa el arrastre.
- **Recién al activarse se registra `touchmove` con `{ passive: false }`** y se llama a `preventDefault`. Es lo único que iOS Safari respeta una vez que el gesto empezó.
- **Es el punto de mayor riesgo:** se verifica en un dispositivo real.

## 6. Textos: constante del paquete más prop `texts`, no `useLocale`

- **Por qué no `useLocale`:** el de g-hooks cae al inglés por defecto, y `common/lang/es.ts` no está cableado a ningún componente (date-picker usa su propio `lang/es`).
- **Cómo queda:** los defaults en español viven en `texts.constant.ts`, y `texts: Partial<DragListTexts>` los sobrescribe.
- **El overlay** además se reemplaza entero con `#drop-overlay`.

## 7. Props runtime con `buildProps`, sin SFC genérico

- **Qué se hizo:** se sigue la convención del DS (`constants/` con `buildProps`), con `DragListItem = Record<string, unknown>`.
- **Qué se perdió:** el consumidor recibe `item` sin su tipo concreto en los slots.
- **Por qué se descartó `<script setup generic="T">`:** no tiene precedente en el DS y obliga a props por tipo, fuera del patrón de `constants/`.
- **Se puede revisar después** sin cambiar la API de runtime.

## 8. `via` en los eventos

| Evento   | Valores                                     |
| -------- | ------------------------------------------- |
| `add`    | `'drag' \| 'button' \| 'api'`               |
| `remove` | `'drag' \| 'button' \| 'keyboard' \| 'api'` |

Agregar «con teclado» es presionar el botón del slot, así que ya llega como `'button'`.

## 9. Uso único: el filtrado lo hace el componente

`visibleSource` es `source` menos los `itemKey` que están en `modelValue`, y se recalcula ante cualquier cambio de las dos props. Por eso el buscador del consumidor nunca vuelve a mostrar algo ya agregado. Al quitar una tarjeta, reaparece en la posición que tiene en `source`.

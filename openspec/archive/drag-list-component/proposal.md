# Componente nuevo `GDragList`: transferir tarjetas por drag & drop, con flujo ordenado opcional (`@flash-global66/g-drag-list` 0.0.0 → 0.1.0 vía pipeline)

> **Rama:** `erik/EM-XX/feat/add-drag-list-component`
> **Base:** `9c5ca2f7`
> **HU:** pendiente

Todavía no hay HU: el proyecto que lo origina no la creó. Cuando exista, se agrega la línea `HU:` y la rama se renombra según `ds-git-flow`. La base es `origin/release`: era `93d2d0a4` y pasó a `9c5ca2f7` cuando se mergeó `release` en la rama (`ca1e8d6c`); el `EM-XX` del nombre es provisorio.

El diff desde `Base` incluye este `proposal.md`, su `tasks.md`, `design.md` y `specs/`: son el cambio, no trabajo de más.

Fase **proposal**: intención, alcance, enfoque y riesgos. Todavía no hay código.

## Qué encontré

**Este repo no tiene `.codegraph/`.** Todo lo de abajo sale de `grep` y de leer los archivos directamente.

- **`main` ya no existe en el remoto.** La base y el HEAD por defecto es `release` (`git ls-remote --symref origin HEAD` → `refs/heads/release`).
- **No hay ninguna librería de drag & drop** en el `package.json` raíz ni en ningún `components/*` o `common/*`. Se buscaron sortablejs, vuedraggable, vue-draggable-plus, @vueuse/integrations, dnd-kit e interactjs: 0 resultados.
- **El único precedente de reordenar es `g-input-tag`.** Usa HTML5 DnD nativo (`components/input-tag/src/composables/use-drag-tag.ts`, `src/input-tag.vue:22-27`) y emite `'drag-tag'(oldIndex, newIndex, value)`. El DnD nativo de HTML5 **no dispara con touch**, así que no sirve como base.
- **`useDraggable` de g-hooks** (`common/g-hooks/src/composables/useDraggable.ts`) mueve un elemento suelto, el diálogo, con `transform`. No ordena listas, pero sirve de antecedente para manejar punteros en el DS.
- **No hay stepper, timeline ni conectores en el DS.**
- **Piezas que ya existen y que el consumidor puede usar dentro de los slots:** `g-avatar`, `g-search-input`, `g-icon-button` (`"regular plus"`, `"regular pen"`, `"regular trash"`) y `g-tag`/`g-chip`. El componente **no depende** de ellas.
- **Arquetipo:** `docs/architecture/component-architecture.md`, en su variante compleja (referencia: `components/table/`).
- **`aria-live` casi no se usa** (solo `button` y `date-picker`), y no hay un anunciador compartido.
- **SortableJS 1.15.7** es MIT y pesa unos 640 KB desempaquetado, porque trae varios builds. Está escrito en JS de la era ES5, con parches para navegadores viejos, y mueve el DOM por su cuenta.
- **El proceso de release no cambia:** lerna en modo `independent`, Conventional Commits sin prefijo de HU, y merge commit a `release`.

## Requisitos acordados con el dev

1. **Dos modos.**
   - Sin `ordered`, el componente transfiere elementos de una lista origen a una lista destino.
   - Con `ordered`, además el destino es un flujo: numerado, reordenable por arrastre y con conectores visuales en formato de linked list.
2. **Agregar al destino tiene tres vías:** arrastrar, un botón dentro del slot de origen (el «+») y teclado. Las tres emiten `add`.
3. **Nodos fijos de inicio y fin (solo en modo ordenado), opcionales,** declarados por prop o por slot.
   - Son solo visuales: no se arrastran, no cuentan en el orden y no son parte del `v-model`.
   - Apenas entra la primera tarjeta, queda conectada a los dos.
4. **El «canvas» es una lista lineal**, vertical por defecto (arriba → abajo).
   - En pantallas chicas puede ir horizontal (izquierda → derecha).
   - En ese caso, el origen queda arriba, se arrastra hacia abajo para agregar y se reordena horizontalmente en el destino.
5. **Uso único o repetible:** una prop lo define, y **por defecto es de uso único**.
   - En uso único, el elemento agregado **desaparece del origen**.
   - Tampoco vuelve a aparecer cuando el buscador del consumidor cambia `source`.
6. **El buscador y la agrupación (A, B, C…) los resuelve el consumidor.**
   - El buscador filtra solo el origen y nunca quita nada del destino.
   - La agrupación se dibuja con slots.
7. **Arrastrar de vuelta al origen para quitar** está permitido, **activo por defecto**, siempre que no haya ambigüedad entre las zonas ni falte espacio para soltar en pantallas chicas.
8. **Accesibilidad WCAG 2.2 AA y touch.** Las funciones principales tienen que funcionar con mouse, touch, lápiz, teclado y lector de pantalla.
9. **El motor de drag & drop es código propio del DS**, en Vue 3 y TypeScript, sin dependencias externas nuevas. Toma a SortableJS como referencia de comportamiento y se apoya, en lo posible, en lo que el proyecto ya usa.
10. **Overlays de ayuda durante el arrastre:**
    - Al arrastrar desde el origen, el destino muestra «Arrastra aquí para agregar».
    - Al arrastrar desde el destino (con `dragToRemove`), el origen muestra «Arrastra aquí para eliminar» con un ícono de papelera.
    - Los overlays no interfieren con el arrastre: **desaparecen cuando el elemento entra en la zona que señalan.**

## Qué propongo

Un paquete nuevo, `@flash-global66/g-drag-list`, con el componente `GDragList`.

### API

```vue
<g-drag-list
  v-model="flow"
  :source="approverGroups"
  item-key="id"
  ordered
  direction="vertical"
  end-node="Cierre del informe"
  @add="onAdd"
  @remove="onRemove"
  @reorder="onReorder"
>
  <template #source-header>…buscador, título…</template>
  <template #source-group-header="{ group }">{{ group.label }}</template>
  <template #source-item="{ item, canAdd, add }">…«+» llama a add()…</template>
  <template #source-empty="{ reason }">…'empty' | 'all-added'…</template>
  <template #target-header>Flujo de revisión</template>
  <template #target-item="{ item, index, position, remove, moveUp, moveDown, isFirst, isLast }">…</template>
  <template #start>…</template>
  <template #end>…</template>
  <template #connector="{ direction }">…</template>
  <template #empty>Arrastra aquí…</template>
  <template #drop-overlay="{ action }">…'add' | 'remove'…</template>
</g-drag-list>
```

**Props**

| Prop                    | Tipo                                 | Default            | Notas                                                                                                                                                               |
| ----------------------- | ------------------------------------ | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `modelValue`            | `T[]`                                | `[]`               | El destino. En modo ordenado, el orden del arreglo **es** el orden del flujo.                                                                                       |
| `source`                | `T[] \| SourceGroup<T>[]`            | `[]`               | `SourceGroup = { key, label?, items }`. El consumidor lo entrega ya filtrado por su buscador.                                                                       |
| `itemKey`               | `string \| (item: T) => PropertyKey` | — (obligatoria)    | Identidad del elemento. Se usa para ocultar lo ya agregado y para el `key` de Vue.                                                                                  |
| `itemLabel`             | `string \| (item: T) => string`      | valor de `itemKey` | Nombre accesible del elemento, que se usa en los anuncios para lector de pantalla.                                                                                  |
| `texts`                 | `Partial<DragListTexts>`             | —                  | Sobrescribe los textos por defecto en español: overlays, anuncios y etiquetas.                                                                                      |
| `ordered`               | `boolean`                            | `false`            | Activa la numeración, el reordenamiento, los conectores y los nodos de inicio y fin.                                                                                |
| `repeatable`            | `boolean`                            | `false`            | En `false` (uso único), el componente **no dibuja** en el origen los elementos cuyo `itemKey` ya está en `modelValue`.                                              |
| `cloneItem`             | `(item: T) => T`                     | —                  | Obligatoria si `repeatable` es `true`. Genera una instancia con `itemKey` propio. En desarrollo se avisa por consola si hay keys duplicadas.                        |
| `dragToRemove`          | `boolean`                            | `true`             | Permite quitar arrastrando una tarjeta del destino al origen.                                                                                                       |
| `keyboardRemove`        | `boolean`                            | `false`            | Permite quitar la tarjeta enfocada con `Supr` o `Retroceso`. Es opt-in para evitar borrados por una tecla presionada por error. Es independiente de `dragToRemove`. |
| `direction`             | `'vertical' \| 'horizontal'`         | `'vertical'`       | Con `vertical`, los paneles van lado a lado y el flujo baja. Con `horizontal`, los paneles van apilados y el flujo va de izquierda a derecha.                       |
| `startNode` / `endNode` | `string`                             | —                  | Texto de la pill de inicio o de fin. Los slots `#start` / `#end` la reemplazan. Solo aplican con `ordered`.                                                         |
| `disabled`              | `boolean`                            | `false`            | Bloquea arrastrar, agregar, quitar y mover.                                                                                                                         |

**Emits** (en kebab-case, como `drag-tag` y `action-click`):

| Emit                | Payload                                                                    |
| ------------------- | -------------------------------------------------------------------------- |
| `update:modelValue` | `(items: T[])`                                                             |
| `add`               | `(item: T, index: number, via: 'drag' \| 'button' \| 'api')`               |
| `remove`            | `(item: T, index: number, via: 'drag' \| 'button' \| 'keyboard' \| 'api')` |
| `reorder`           | `(item: T, from: number, to: number)`                                      |

**Expuesto por `ref`:** `add(item, index?)`, `remove(key)` y `move(from, to)`.

### Uso único: ocultar sin que el buscador lo «resucite»

- El filtrado lo hace **el componente**, no el consumidor. Lo que se dibuja en el origen es `source` menos los elementos cuyo `itemKey` está en `modelValue`.
  - Como el cálculo es reactivo sobre las dos entradas, el resultado es el mismo cada vez que el buscador del consumidor cambia `source`.
  - Lo ya agregado nunca vuelve a aparecer.
- Al quitar una tarjeta del destino, reaparece sola en el origen, **en su posición original**: el orden sigue siendo el de `source`.
- Un grupo que se queda sin elementos visibles no se dibuja, ni siquiera su `#source-group-header`.
- `#source-empty` recibe `reason`, para que el consumidor muestre el mensaje que corresponda:
  - `'all-added'`: hay elementos, pero todos ya están en el destino.
  - `'empty'`: `source` llegó vacío, por ejemplo porque el buscador no encontró nada.

### Arrastrar de vuelta para quitar, sin ambigüedad

- **Zonas excluyentes.** Las tres zonas no se superponen, porque los paneles son hermanos en un layout flex/grid sin solapamiento:

  | Zona           | Qué pasa al soltar                        |
  | -------------- | ----------------------------------------- |
  | Destino        | Inserta o reordena                        |
  | Origen         | Quita (solo con `dragToRemove`)           |
  | Fuera de ambas | Cancela: la tarjeta vuelve a donde estaba |

- **El origen entero es la zona de quitar.** Mientras se arrastra desde el destino, todo el panel de origen es un único blanco grande (ver «Overlays»). No hay que apuntar entre elementos, así que el margen de acción no depende del tamaño de las tarjetas.
- **La zona activa se decide por el centro del elemento arrastrado**, no por el puntero. Esto evita parpadeos en el borde entre paneles. La zona activa tiene feedback visual claro.
- **Pantallas chicas** (`direction="horizontal"`, con el origen arriba):
  - La zona de quitar mide al menos 48 px de alto aunque el origen tenga scroll.
  - El auto-scroll de los contenedores se activa cerca de sus bordes.
- **Soltar fuera de las dos zonas cancela**, así que un arrastre interrumpido nunca borra nada. Para quitar hay que soltar _dentro_ del origen.
- **Siempre hay alternativa sin arrastrar** (WCAG 2.5.7): `remove` en el slot. El consumidor puede apagar el gesto con `:drag-to-remove="false"`.

### Overlays de ayuda durante el arrastre

| Arrastre desde               | Overlay en | Texto (default de `texts.constant.ts`)          | Ícono           |
| ---------------------------- | ---------- | ----------------------------------------------- | --------------- |
| Origen                       | Destino    | «Arrastra aquí para agregar»                    | `regular plus`  |
| Destino (con `dragToRemove`) | Origen     | «Arrastra aquí para eliminar»                   | `regular trash` |
| Destino (reordenar)          | —          | Sin overlay: el placeholder ya indica dónde cae | —               |

- **Ciclo de vida:** el overlay aparece al **activarse** el arrastre (no con el primer `pointerdown`, para no parpadear con un click). Se oculta mientras el elemento está dentro de su zona y vuelve a aparecer si sale. Al terminar o cancelar el arrastre, se quita.
- **No interfiere con el arrastre:**
  - Lleva `pointer-events: none`, así que no captura eventos ni cambia la zona activa. La zona se decide con los rects del panel, no con el elemento bajo el puntero.
  - Cubre el panel sin alterar su layout: va en posición absoluta y no mueve tarjetas ni scroll.
  - Al ocultarse en la zona, deja ver el placeholder o el estado de la zona.
- **Feedback cuando el overlay se oculta:** la zona activa conserva un estado visual propio, para que se siga sabiendo qué pasa al soltar.
  - Destino: borde resaltado y placeholder en la posición de inserción.
  - Origen: borde y fondo en el tono de error del DS.
- **Accesibilidad:** el overlay es decorativo (`aria-hidden`). La misma información la anuncia la región `aria-live`, por ejemplo: «Arrastrando Sofia Morales. Suelta en el flujo para agregar».
- **Personalización:** el slot `#drop-overlay="{ action }"` reemplaza el contenido. Los textos por defecto salen de `texts.constant.ts` y se sobrescriben con la prop `texts` (ver `design.md` §6).
- **`prefers-reduced-motion`:** aparece y desaparece sin transición.

### Motor de drag & drop propio (Pointer Events + Vue 3), con SortableJS como referencia

**Decidido:** un motor chico en TypeScript sobre Pointer Events, a la medida de este componente. SortableJS se usa como **referencia de comportamiento**, no como código a copiar:

|                     | Copiar SortableJS                                                                                                                 | Motor propio                                                                                                                                                                    |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tamaño a mantener   | Miles de líneas de JS en estilo ES5, con plugins (MultiDrag, Swap, OnSpill) y parches para navegadores viejos que no necesitamos. | Unas 500-700 líneas de TypeScript, solo con los casos que usamos.                                                                                                               |
| Convivencia con Vue | **Mueve nodos del DOM por su cuenta**. Hay que revertir cada movimiento para que Vue no se desincronice.                          | El arrastre solo calcula estado (`dragging`, `activeZone`, `dropIndex`) y **Vue dibuja el placeholder**. No hay dos dueños del DOM.                                             |
| Tests               | Difícil de testear de forma unitaria.                                                                                             | El cálculo del índice de inserción, los umbrales, la velocidad de auto-scroll y la resolución de zona son funciones puras. Encaja con la política UNIT-ONLY y con TDD estricto. |
| Licencia y origen   | MIT: obliga a conservar el aviso de copyright, y dejamos de recibir los arreglos del upstream.                                    | Código 100% propio.                                                                                                                                                             |
| Costo               | Inicial bajo, mantenimiento alto.                                                                                                 | Inicial mayor: hay que resolver touch e iOS (ver riesgos).                                                                                                                      |

**Qué se toma de SortableJS**, reescrito como composables de Vue 3:

| Concepto de SortableJS                          | En `GDragList`                                                                                                   |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `group: { pull: 'clone', put: false }`          | El origen nunca recibe tarjetas (salvo para quitar) y no pierde la suya al arrastrarla: es un clon.              |
| `swapThreshold` / `invertSwap`                  | Umbral de inserción por punto medio, en el eje de `direction`. Evita que el placeholder salte de un lado a otro. |
| `delayOnTouchOnly` + `touchStartThreshold`      | Long-press solo en touch, con tolerancia de movimiento.                                                          |
| `fallbackTolerance`                             | Umbral de 4 px para mouse y lápiz.                                                                               |
| `filter` / `preventOnFilter`                    | Exclusión de `button, a, input, [data-no-drag]`.                                                                 |
| AutoScroll (`scrollSensitivity`, `scrollSpeed`) | `useAutoScroll`, con velocidad proporcional a la cercanía al borde.                                              |
| `ghostClass` / `chosenClass` / `dragClass`      | Modificadores BEM (`is-dragging`, `is-placeholder`, `is-active-zone`).                                           |

Como se reimplementan las ideas y no se copia código, no hace falta arrastrar el aviso MIT. Igual se le da crédito a SortableJS como inspiración en la documentación del paquete.

**Dependencias:** solo lo que el proyecto ya usa.

- **`@vueuse/core`** (13, ya presente en g-hooks, select e input-tag):
  - `useEventListener`, para registrar y limpiar los listeners solos.
  - `useRafFn`, para el auto-scroll.
  - `usePreferredReducedMotion`.
  - `useResizeObserver`, para invalidar los rects.
- **g-hooks:**
  - `useId`, para los ids de aria y de la región live.
  - `useZIndex`, para el ghost.
- **g-utils:** `useNamespace`, para BEM.
- **g-teleport:** el ghost va a `body`, para que `position: fixed` no se rompa dentro de ancestros con `transform`.
- **g-icon-font:** los íconos de los overlays.

Qué cubre el motor:

- **Una sola API para todos los punteros:** `pointerdown/move/up/cancel` sirven para mouse, touch y lápiz, con `setPointerCapture`.
- **Activación por tipo de puntero:**
  - Mouse y lápiz: después de moverse 4 px.
  - Touch: con long-press de unos 200 ms y tolerancia de movimiento. Antes de eso, el gesto es scroll normal.
- **Ghost:** un clon flotante de la tarjeta que sigue al puntero, con `position: fixed` y `transform`.
- **Índice de inserción:** se calcula por el punto medio de cada tarjeta del destino, en el eje que indica `direction`. Las medidas se cachean al empezar el arrastre y se refrescan con el scroll.
- **Auto-scroll** de los dos paneles con `requestAnimationFrame` cerca de los bordes.
- **`prefers-reduced-motion`:** sin animación.
- **Los botones de los slots no inician un arrastre:** se excluyen `button, a, input, [data-no-drag]`.

**Teclado** (motor aparte, mismo estado):

- Una tarjeta del destino con foco se «toma» con `Espacio` o `Enter`.
- Las flechas la mueven y `Espacio` o `Enter` la suelta.
- `Esc` cancela.
- `Supr` o `Retroceso` la quitan, solo con `keyboardRemove`.
- El foco sigue a la tarjeta después de moverla.
- Agregar desde el origen se hace con el `add` del slot, que es un botón y por lo tanto alcanzable con teclado.

### Conectores

- Cada wrapper de tarjeta del destino dibuja su conector «previo» cuando `index > 0` o cuando hay nodo de inicio. Hay además un conector final antes del nodo de fin. Al reordenar, las flechas quedan correctas solas.
- Con `direction="horizontal"` el conector gira.
- Los nodos de inicio y fin viven fuera de la zona de inserción.
- Con el destino vacío se muestran inicio, el `#empty` y fin, sin flechas.

### Accesibilidad (WCAG 2.2 AA)

| Criterio                                    | Cómo se cumple                                                                                                                                                                                                                             |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **2.5.7 Dragging Movements**                | Alternativa de un solo toque para todo lo que se hace arrastrando: `add`, `remove`, `moveUp` y `moveDown`.                                                                                                                                 |
| **2.1.1 Keyboard**                          | El modo teclado descrito arriba.                                                                                                                                                                                                           |
| **4.1.3 Status Messages**                   | Un `aria-live="polite"` anuncia lo que pasa: «Sofia Morales agregado en posición 2 de 3», «movido a posición 1», «quitado». Los textos son defaults del paquete, sobrescribibles con `texts`, y el label de cada ítem sale de `itemLabel`. |
| **1.3.1 Info and Relationships**            | El destino es `<ol>` en modo ordenado y `<ul>` en modo simple. Los conectores llevan `aria-hidden`.                                                                                                                                        |
| **2.5.8 Target Size / 2.4.7 Focus Visible** | Las áreas de interacción del componente miden al menos 24×24 px y el foco se ve con los tokens del DS.                                                                                                                                     |

### Estructura (arquetipo complejo)

```
components/drag-list/
  index.ts
  src/DragList/{index.vue, useDragList.ts, drag-list.style.scss, types/, constants/}
  src/components/{SourcePanel, TargetPanel, FlowNode, FlowConnector, DragGhost, DropOverlay}/
  src/shared/composables/{usePointerDrag.ts, useAutoScroll.ts, useKeyboardReorder.ts, useLiveAnnouncer.ts}
  src/shared/utils/{list.util.ts, drop-index.util.ts, zone.util.ts, overlay.util.ts}
  src/shared/types/
  tests/   (espeja src/)
stories/drag-list.stories.ts
```

Las stories cubren cinco casos: modo simple, ordenado con fin (el caso de la imagen), ordenado con inicio y fin, horizontal, y repetible. El ejemplo incluye buscador y agrupación por letra hechos del lado del consumidor.

## Qué queda afuera

- **Lienzo 2D o grafo con conexiones libres.** Es un editor de nodos y no corresponde a este componente.
- **Árboles o flujos con ramas.**
- **Buscador, filtrado de texto y agrupación dentro del componente.** El componente solo oculta lo ya agregado.
- **Arrastrar entre varias instancias del componente, y la selección múltiple.**
- **Límite máximo en el destino** (`max`). Se puede sumar después sin romper la API.
- **Persistencia y llamadas a la API.**
- **Editar `version` o `CHANGELOG.md` a mano, mergear a `release` o publicar.**

## Preguntas abiertas

1. **HU de Jira:** cuando exista, se completa este encabezado y se renombra la rama.

## Riesgos

- **Touch en iOS Safari.** Para que el long-press no compita con el scroll hay que llamar a `preventDefault` en `touchmove` (con `passive: false`) recién después de activar el arrastre, y usar `touch-action` solo donde haga falta. Es el punto más delicado del motor propio y hay que verificarlo en un dispositivo real.
- **Medidas durante el arrastre.** El índice de inserción depende de los rects cacheados. Hay que invalidarlos con el scroll, al hacer resize y cuando entra el placeholder.
- **Los tests no cubren el arrastre.** Con la política UNIT-ONLY se testean las funciones puras y los composables. El arrastre real con mouse, touch y teclado se verifica en Storybook con browser-verify, y el de iOS a mano.
- **Duplicados con `repeatable`.** Por eso `cloneItem` es obligatoria en ese modo, con un aviso en desarrollo.

## Cómo se verifica

**Este cambio agrega una capacidad.** Lleva criterio a nivel del cambio entero y delta en `specs/g-drag-list/spec.md`.

**Entorno.** Medido en este worktree: en `node_modules/.bin` faltan `vitest` y `eslint`, y `check-styles` da 44 fallos por links de workspace. Antes del apply y del verify hay que correr:

```bash
zsh -lic 'nvm use 20.19.3 && export GBP_PACKAGE_TOKEN=${GBP_PACKAGE_TOKEN:-dummy} && yarn install && yarn build'
```

→ exit 0.

| Qué mide                                                                            | Comando                                                                                                                                                                                                                                        | Resultado esperado                                                                                                                                            |
| ----------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- | ------------------------------------------------------------------------------------------- |
| archivos de spec del paquete                                                        | `npx vitest run --project unit components/drag-list`                                                                                                                                                                                           | `Test Files` ≥ 17 passed y 0 failed. **Provisional**: es la suma de los spec que declaran las tareas, y la ronda 1 del verify la reemplaza por el número real |
| suite completa sin regresiones                                                      | `npx vitest run --project unit`                                                                                                                                                                                                                | 0 failed                                                                                                                                                      |
| typecheck del paquete                                                               | `npx vue-tsc --noEmit -p components/drag-list/tsconfig.json`                                                                                                                                                                                   | exit 0                                                                                                                                                        |
| lint de lo tocado                                                                   | `npx eslint components/drag-list stories/drag-list.stories.ts --ext .vue,.ts --max-warnings 0`                                                                                                                                                 | exit 0                                                                                                                                                        |
| líneas de violación de arquitectura del paquete                                     | `node scripts/check-architecture.mjs \| grep -c drag-list`                                                                                                                                                                                     | `0` (línea base medida: `0`)                                                                                                                                  |
| SCSS publicado                                                                      | `node scripts/check-styles.mjs`                                                                                                                                                                                                                | exit 0 después del install. La cantidad de paquetes que compilan sube en 1 respecto de la línea base post-install                                             |
| dependencias fuera de lo permitido (cantidad de nombres)                            | `node -e "const p=require('./components/drag-list/package.json');console.log(Object.keys({...p.dependencies,...p.peerDependencies}).filter(n=>n!=='vue'&&n!=='@vueuse/core'&&!n.startsWith('@flash-global66/g-')).length)"`                    | `0`                                                                                                                                                           |
| líneas con «sortable» en el lockfile                                                | `grep -ci sortable yarn.lock`                                                                                                                                                                                                                  | `0` (línea base medida: `0`)                                                                                                                                  |
| archivos tocados fuera del change (salvo el registro de estilos)                    | `git diff --name-only 9c5ca2f7 -- . ':!components/drag-list' ':!stories/drag-list.stories.ts' ':!openspec/changes/drag-list-component' ':!yarn.lock' ':!assets/scss/index.scss' \| wc -l`                                                      | `0`                                                                                                                                                           |
| líneas cambiadas en el registro de estilos                                          | `git diff 9c5ca2f7 -- assets/scss/index.scss \| grep -c '^[+-][^+-]'`                                                                                                                                                                          | `1`: solo la línea agregada `@use "@flash-global66/g-drag-list/styles.scss" as *;`, que check-styles exige para registrar el paquete (ronda 1 del verify)     |
| movimiento reducido en el estilo raíz (archivos)                                    | `grep -l 'prefers-reduced-motion' components/drag-list/src/DragList/drag-list.style.scss components/drag-list/src/components/DragGhost/drag-ghost.style.scss components/drag-list/src/components/DropOverlay/drop-overlay.style.scss \| wc -l` | `3`: el raíz, el ghost (vive fuera del bloque raíz por el teleport) y el overlay                                                                              |
| `index.vue` raíz sin lógica (líneas del script con `computed(`, `function ` o `=>`) | `awk '/<script/,/<\/script>/' components/drag-list/src/DragList/index.vue \| grep -cE 'computed\(                                                                                                                                              | function                                                                                                                                                      | =>'` | `0` (en la ronda 1 daba `4`: `getKey`, `rootClass` y los dos envoltorios de `defineExpose`) |
| sin bump manual (archivos)                                                          | `git diff --name-only 9c5ca2f7 -- 'components/*/CHANGELOG.md' \| wc -l`                                                                                                                                                                        | `0`                                                                                                                                                           |

**Criterio del cambio entero.** Se verifica con browser-verify sobre Storybook (`yarn storybook`, story «Flujo con fin»):

1. **Agregar arrastrando.** Arrastrar «Sofia Morales» del origen al destino:
   - Al empezar el arrastre aparece sobre el destino «Arrastra aquí para agregar».
   - El overlay se oculta al entrar en el destino y aparece un hueco en la posición de inserción.
   - Al soltar, la tarjeta queda conectada con flecha a «Cierre del informe» y **desaparece del origen**.
2. **El buscador no la trae de vuelta.** Escribir en el buscador del consumidor: «Sofia Morales» no vuelve a aparecer.
3. **Agregar con el botón.** El «+» de «Carlos Herrera» lo agrega al final: hay dos tarjetas, dos flechas y el fin.
4. **Reordenar.** Arrastrar «Carlos Herrera» por encima de «Sofia Morales» invierte el orden y las flechas siguen correctas.
5. **Quitar arrastrando.** Arrastrar una tarjeta del destino al origen:
   - Aparece «Arrastra aquí para eliminar» con papelera.
   - Al soltar, la tarjeta se quita y reaparece en el origen en su posición original.
   - Soltar fuera de los dos paneles no cambia nada.
6. **Teclado.** Con Tab hasta una tarjeta del destino, la secuencia `Espacio` → `↑` → `Espacio` la mueve, y la región live anuncia la posición nueva.
7. **Consola y vista horizontal.** No hay errores en consola. En la story «Horizontal», con viewport de 375 px, arrastrar con touch funciona y deslizar sin mantener presionado hace scroll.

El touch en iOS Safari real se verifica a mano y se deja registrado en el verify-report.

**Versión:** después del merge a `release`, el pipeline publica `@flash-global66/g-drag-list@0.1.0`. No se verifica acá, porque ese merge queda fuera del alcance.

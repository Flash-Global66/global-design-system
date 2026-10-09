## ADDED Requirements

### Requirement: Transferencia del origen al destino

`GDragList` SHALL permitir llevar un elemento del origen al destino de tres maneras: arrastrándolo, con la función `add` que recibe el slot `#source-item` y con el método expuesto `add(item, index?)`. Cada transferencia SHALL emitir `update:modelValue` con el nuevo arreglo y `add(item, index, via)`, donde `via` es `'drag'`, `'button'` o `'api'`, según la vía.

#### Scenario: Agregar arrastrando en modo simple

- **GIVEN** un `GDragList` sin `ordered`, con `modelValue` `[A]` y `B` en el origen
- **WHEN** el usuario arrastra `B` y lo suelta en cualquier punto del destino
- **THEN** se emite `update:modelValue` con `[A, B]` y `add(B, 1, 'drag')`

#### Scenario: Agregar con el botón del slot

- **GIVEN** un `GDragList` con `modelValue` `[]` y un botón «+» en `#source-item` que llama a `add()`
- **WHEN** el usuario hace click en el «+» de `A`
- **THEN** se emite `update:modelValue` con `[A]` y `add(A, 0, 'button')`, y no se inicia ningún arrastre

#### Scenario: Agregar desde afuera con el método expuesto

- **GIVEN** un `GDragList` montado con `ref` y `modelValue` `[A, C]`, en modo `ordered`
- **WHEN** el consumidor llama a `add(B, 1)`
- **THEN** se emite `update:modelValue` con `[A, B, C]` y `add(B, 1, 'api')`

#### Scenario: El origen no pierde el elemento por arrastrarlo

- **GIVEN** un `GDragList` con `repeatable`
- **WHEN** el usuario arrastra `A` del origen al destino
- **THEN** `A` sigue en el origen en su posición, y en el destino entra el resultado de `cloneItem(A)`

### Requirement: Uso único por defecto

Con `repeatable` en `false` (el default), `GDragList` SHALL dejar de dibujar en el origen todo elemento cuyo `itemKey` esté en `modelValue`. El cálculo SHALL hacerse dentro del componente sobre `source` y `modelValue`, de modo que cualquier cambio de `source` hecho por el consumidor (por ejemplo, su buscador) nunca vuelva a mostrar un elemento ya agregado.

#### Scenario: El elemento agregado desaparece del origen

- **GIVEN** un `GDragList` con `source` `[A, B, C]` y `modelValue` `[]`
- **WHEN** se agrega `B`
- **THEN** el origen dibuja solo `A` y `C`

#### Scenario: El buscador no resucita lo agregado

- **GIVEN** un `GDragList` con `modelValue` `[B]`
- **WHEN** el consumidor reemplaza `source` por `[B, D]` porque su buscador filtró
- **THEN** el origen dibuja solo `D`, y `modelValue` sigue siendo `[B]`

#### Scenario: Al quitarlo, vuelve a su posición original

- **GIVEN** un `GDragList` con `source` `[A, B, C]` y `modelValue` `[B]`
- **WHEN** se quita `B` del destino
- **THEN** el origen dibuja `A, B, C` en ese orden

#### Scenario: Un grupo vacío no se dibuja

- **GIVEN** un `source` agrupado `[{ key: 'A', items: [A1] }, { key: 'B', items: [B1] }]` y `modelValue` `[A1]`
- **WHEN** se renderiza el origen
- **THEN** no se renderiza `#source-group-header` del grupo `A`, y el grupo `B` se dibuja completo

#### Scenario: Origen vacío con motivo

- **GIVEN** un `GDragList` con un slot `#source-empty`
- **WHEN** `source` tiene elementos pero todos están en `modelValue`
- **THEN** `#source-empty` recibe `reason: 'all-added'`
- **AND WHEN** `source` llega vacío
- **THEN** `#source-empty` recibe `reason: 'empty'`

#### Scenario: Agregar dos veces no duplica

- **GIVEN** un `GDragList` en uso único con `modelValue` `[A]`
- **WHEN** el consumidor llama a `add(A)`
- **THEN** no se emite `update:modelValue` ni `add`

### Requirement: Modo repetible

Con `repeatable` en `true`, `GDragList` SHALL mantener visibles en el origen todos los elementos y SHALL insertar en el destino el resultado de `cloneItem(item)`. Si en desarrollo se detectan `itemKey` duplicados en `modelValue`, el componente SHALL emitir un `console.warn` que identifique la key repetida.

#### Scenario: Agregar el mismo elemento dos veces

- **GIVEN** un `GDragList` con `repeatable` y un `cloneItem` que genera ids nuevos
- **WHEN** se agrega `A` dos veces
- **THEN** `modelValue` tiene dos elementos con `itemKey` distintos, y `A` sigue en el origen

#### Scenario: Aviso por keys duplicadas

- **GIVEN** un `GDragList` con `repeatable`, en modo desarrollo, y un `modelValue` con dos elementos de igual `itemKey`
- **WHEN** se monta el componente
- **THEN** se emite un `console.warn` que menciona esa key

### Requirement: Flujo ordenado

Con `ordered`, `GDragList` SHALL tratar el orden de `modelValue` como el orden del flujo, dibujar el destino como `<ol>` y pasar a `#target-item` la `position` (base 1), además de `index`, `isFirst`, `isLast`, `remove`, `moveUp` y `moveDown`. Insertar y reordenar arrastrando SHALL respetar la posición donde se suelta el elemento. Cada reordenamiento SHALL emitir `reorder(item, from, to)`.

#### Scenario: Insertar en una posición intermedia

- **GIVEN** un `GDragList` `ordered` con `modelValue` `[A, C]`
- **WHEN** el usuario arrastra `B` del origen y lo suelta entre `A` y `C`
- **THEN** se emite `update:modelValue` con `[A, B, C]` y `add(B, 1, 'drag')`

#### Scenario: Reordenar arrastrando

- **GIVEN** un `GDragList` `ordered` con `modelValue` `[A, B, C]`
- **WHEN** el usuario arrastra `C` y lo suelta antes de `A`
- **THEN** se emite `update:modelValue` con `[C, A, B]` y `reorder(C, 2, 0)`

#### Scenario: Mover con las funciones del slot

- **GIVEN** un `GDragList` `ordered` con `modelValue` `[A, B]`
- **WHEN** se llama a `moveUp` desde el slot de `B`
- **THEN** se emite `update:modelValue` con `[B, A]` y `reorder(B, 1, 0)`
- **AND WHEN** se llama a `moveUp` desde el slot del primer elemento
- **THEN** no se emite nada

#### Scenario: Soltar en el mismo lugar no reordena

- **GIVEN** un `GDragList` `ordered` con `modelValue` `[A, B]`
- **WHEN** el usuario arrastra `A` y lo suelta en su posición original
- **THEN** no se emite `update:modelValue` ni `reorder`

#### Scenario: Sin ordered no hay orden visible

- **GIVEN** un `GDragList` sin `ordered`
- **WHEN** se renderiza el destino
- **THEN** es un `<ul>`, no hay conectores ni nodos de inicio y fin, y arrastrar dentro del destino no lo reordena

### Requirement: Nodos de inicio y fin

Con `ordered`, `GDragList` SHALL dibujar un nodo de inicio antes de la primera tarjeta cuando haya `startNode` o slot `#start`, y un nodo de fin después de la última cuando haya `endNode` o slot `#end`. Los slots SHALL tener prioridad sobre las props. Los nodos SHALL quedar fuera de `modelValue`, no se podrán arrastrar y no aceptarán inserciones antes del inicio ni después del fin. Sin `ordered`, SHALL ignorarse.

#### Scenario: Conexión automática de la primera tarjeta

- **GIVEN** un `GDragList` `ordered` con `startNode="Inicio"`, `endNode="Cierre del informe"` y `modelValue` `[]`
- **WHEN** se agrega `A`
- **THEN** se dibujan, en orden, el inicio, un conector, `A`, un conector y el fin

#### Scenario: Destino vacío sin flechas

- **GIVEN** un `GDragList` `ordered` con `startNode`, `endNode` y `modelValue` `[]`
- **WHEN** se renderiza el destino
- **THEN** se dibujan el inicio, el slot `#empty` y el fin, sin ningún conector

#### Scenario: Cantidad de conectores

- **GIVEN** un `GDragList` `ordered` con `n ≥ 1` tarjetas
- **WHEN** se renderiza el destino
- **THEN** hay `n − 1` conectores entre tarjetas, más uno si hay inicio y otro si hay fin

#### Scenario: No se inserta por fuera de los nodos

- **GIVEN** un `GDragList` `ordered` con `endNode` y `modelValue` `[A]`
- **WHEN** el usuario suelta `B` debajo del nodo de fin
- **THEN** `B` queda último entre las tarjetas (`[A, B]`) y el nodo de fin sigue al final

#### Scenario: El slot reemplaza a la prop

- **GIVEN** un `GDragList` `ordered` con `endNode="X"` y slot `#end`
- **WHEN** se renderiza el destino
- **THEN** se dibuja el contenido del slot y no el texto `X`

### Requirement: Dirección del flujo

`GDragList` SHALL aceptar `direction` con los valores `'vertical'` (default) y `'horizontal'`.

- Con `vertical`, los paneles van lado a lado, el destino se apila de arriba hacia abajo y los conectores apuntan hacia abajo.
- Con `horizontal`, el origen va arriba del destino, el destino se dispone de izquierda a derecha y los conectores apuntan a la derecha.

El cálculo del índice de inserción SHALL usar el eje de `direction`.

#### Scenario: Inserción en horizontal

- **GIVEN** un `GDragList` `ordered` con `direction="horizontal"` y `modelValue` `[A, B]`
- **WHEN** el usuario suelta `C` a la derecha del punto medio de `A` y a la izquierda del de `B`
- **THEN** se emite `update:modelValue` con `[A, C, B]`

### Requirement: Quitar arrastrando de vuelta al origen

Con `dragToRemove` en `true` (el default), soltar una tarjeta del destino dentro del panel de origen SHALL quitarla y emitir `remove(item, index, 'drag')`. El panel de origen completo SHALL ser la zona de quitar. Soltar fuera del origen y del destino SHALL cancelar la operación sin cambios. Con `dragToRemove` en `false`, el origen no SHALL ser zona de destino para tarjetas del destino. La función `remove` del slot y el método expuesto `remove(key)` SHALL funcionar siempre.

#### Scenario: Quitar arrastrando

- **GIVEN** un `GDragList` con `modelValue` `[A, B]`
- **WHEN** el usuario arrastra `A` y lo suelta en cualquier punto del origen
- **THEN** se emite `update:modelValue` con `[B]` y `remove(A, 0, 'drag')`

#### Scenario: Soltar fuera cancela

- **GIVEN** un `GDragList` con `modelValue` `[A, B]`
- **WHEN** el usuario arrastra `A` y lo suelta fuera de los dos paneles
- **THEN** no se emite nada y `A` vuelve a su lugar

#### Scenario: Gesto apagado

- **GIVEN** un `GDragList` con `:drag-to-remove="false"` y `modelValue` `[A]`
- **WHEN** el usuario arrastra `A` y lo suelta en el origen
- **THEN** no se emite nada, y el origen no muestra overlay ni estado de zona activa

#### Scenario: La zona se decide por el centro del elemento

- **GIVEN** un arrastre desde el destino con el puntero sobre el origen y el centro del ghost todavía sobre el destino
- **WHEN** el usuario suelta
- **THEN** la operación se resuelve como un reordenamiento en el destino, no como quitar

### Requirement: Overlays de ayuda durante el arrastre

Una vez activado un arrastre, `GDragList` SHALL mostrar un overlay sobre el panel que puede recibir la tarjeta:

- «Arrastra aquí para agregar» sobre el destino, cuando el arrastre empieza en el origen.
- «Arrastra aquí para eliminar», con ícono de papelera, sobre el origen, cuando empieza en el destino y `dragToRemove` está activo.

El overlay SHALL ocultarse mientras el elemento arrastrado está dentro de esa zona, volver a mostrarse si sale y quitarse al terminar o cancelar. SHALL tener `pointer-events: none` y `aria-hidden="true"`, y no SHALL alterar el layout ni el scroll del panel. El slot `#drop-overlay` recibe `{ action: 'add' | 'remove' }` y reemplaza el contenido.

#### Scenario: Overlay de agregar

- **GIVEN** un `GDragList` en reposo
- **WHEN** se activa un arrastre desde el origen
- **THEN** el destino muestra el overlay de agregar y el origen no muestra ninguno

#### Scenario: El overlay se oculta al entrar en su zona

- **GIVEN** un arrastre activo desde el origen, con el overlay de agregar visible
- **WHEN** el centro del ghost entra en el destino
- **THEN** el overlay se oculta y el destino muestra su estado de zona activa y el placeholder
- **AND WHEN** el centro del ghost sale del destino
- **THEN** el overlay vuelve a mostrarse

#### Scenario: Overlay de eliminar

- **GIVEN** un `GDragList` con `dragToRemove` activo y una tarjeta en el destino
- **WHEN** se activa un arrastre desde el destino
- **THEN** el origen muestra el overlay de eliminar con el ícono `regular trash`

#### Scenario: Reordenar no muestra overlay

- **GIVEN** un `GDragList` `ordered` con `:drag-to-remove="false"`
- **WHEN** se activa un arrastre desde el destino
- **THEN** ningún panel muestra overlay

#### Scenario: Un click no hace parpadear el overlay

- **GIVEN** un `GDragList` en reposo
- **WHEN** el usuario hace `pointerdown` y `pointerup` sobre una tarjeta sin superar el umbral de activación
- **THEN** no aparece ningún overlay

### Requirement: Activación del arrastre según el tipo de puntero

El motor SHALL usar Pointer Events.

- Con mouse o lápiz, el arrastre SHALL activarse al superar 4 px de desplazamiento desde el `pointerdown`.
- Con touch, SHALL activarse tras unos 200 ms de presión sin moverse más allá de la tolerancia. Si el dedo se mueve antes, el gesto SHALL seguir siendo scroll nativo.

Un `pointerdown` sobre `button`, `a`, `input`, `select`, `textarea` o `[data-no-drag]` no SHALL iniciar un arrastre.

#### Scenario: Umbral con mouse

- **GIVEN** un `pointerdown` de mouse sobre una tarjeta
- **WHEN** el puntero se mueve 3 px
- **THEN** el arrastre no se activa
- **AND WHEN** el puntero llega a 5 px
- **THEN** el arrastre se activa

#### Scenario: Scroll con touch

- **GIVEN** un `pointerdown` de touch sobre una tarjeta del origen
- **WHEN** el dedo se desplaza verticalmente antes de 200 ms
- **THEN** el arrastre no se activa y el panel hace scroll

#### Scenario: Botones del slot

- **GIVEN** una tarjeta del destino con un botón de editar dentro del slot
- **WHEN** el usuario presiona el botón y mueve el puntero 10 px
- **THEN** no se activa ningún arrastre

### Requirement: Auto-scroll

Durante un arrastre activo, cuando el puntero está cerca del borde de un panel con scroll, ese panel SHALL desplazarse en esa dirección, con una velocidad que crece a medida que el puntero se acerca al borde. SHALL detenerse al alejarse del borde o al terminar el arrastre.

#### Scenario: Scroll cerca del borde

- **GIVEN** un destino con scroll vertical y un arrastre activo
- **WHEN** el puntero queda a menos del umbral del borde inferior
- **THEN** el destino se desplaza hacia abajo en cada frame hasta llegar al final o hasta que el puntero se aleje

### Requirement: Operación con teclado

Las tarjetas del destino SHALL ser enfocables.

- Con una tarjeta enfocada en modo `ordered`, `Espacio` o `Enter` SHALL tomarla. Las flechas del eje de `direction` SHALL moverla una posición. `Espacio` o `Enter` SHALL soltarla y emitir `reorder`. `Esc` SHALL devolverla a su posición original sin emitir.
- Con `keyboardRemove` en `true`, `Supr` o `Retroceso` sobre una tarjeta enfocada, sin estar tomada, SHALL quitarla con `via: 'keyboard'`. Con `keyboardRemove` en `false` (el default), esas teclas no SHALL tener efecto. La prop es independiente de `dragToRemove`.
- Después de mover o quitar, el foco SHALL quedar en la tarjeta movida o en la siguiente disponible.

#### Scenario: Reordenar con teclado

- **GIVEN** un `GDragList` `ordered` vertical con `modelValue` `[A, B, C]` y el foco en `A`
- **WHEN** el usuario presiona `Espacio`, `↓`, `↓` y `Espacio`
- **THEN** se emite `update:modelValue` con `[B, C, A]` y `reorder(A, 0, 2)`, y el foco queda en `A`

#### Scenario: Cancelar con Esc

- **GIVEN** la tarjeta `A` tomada con teclado y movida una posición
- **WHEN** el usuario presiona `Esc`
- **THEN** `A` vuelve a su posición original y no se emite nada

#### Scenario: Quitar con teclado

- **GIVEN** un `GDragList` con `keyboard-remove` y el foco en `B` dentro de `[A, B, C]`
- **WHEN** el usuario presiona `Supr`
- **THEN** se emite `remove(B, 1, 'keyboard')` y el foco pasa a `C`

#### Scenario: Sin keyboardRemove, Supr no hace nada

- **GIVEN** un `GDragList` sin `keyboard-remove` y el foco en `B` dentro de `[A, B, C]`
- **WHEN** el usuario presiona `Supr`
- **THEN** no se emite nada y el foco sigue en `B`

#### Scenario: keyboardRemove no depende de dragToRemove

- **GIVEN** un `GDragList` con `keyboard-remove`, `:drag-to-remove="false"` y el foco en `A` dentro de `[A]`
- **WHEN** el usuario presiona `Supr`
- **THEN** se emite `remove(A, 0, 'keyboard')`

### Requirement: Anuncios para lector de pantalla

`GDragList` SHALL tener una región `aria-live="polite"` visualmente oculta. En ella SHALL anunciar el inicio de un arrastre (con la acción posible), cada cambio de posición durante el arrastre con teclado, cada inserción («agregado en posición X de N»), cada reordenamiento, cada eliminación y cada cancelación. Los textos SHALL tener defaults en español definidos en el paquete y SHALL poder sobrescribirse, total o parcialmente, con la prop `texts`. El nombre de cada elemento en los anuncios SHALL salir de `itemLabel`, que es un nombre de campo o una función. Si no se declara, se usa el valor de `itemKey`.

#### Scenario: Anuncio al agregar

- **GIVEN** un `GDragList` `ordered` con `modelValue` `[A]`
- **WHEN** se agrega `B` al final
- **THEN** la región live contiene un mensaje que incluye el nombre accesible de `B`, la posición 2 y el total 2

#### Scenario: Nombre accesible desde itemLabel

- **GIVEN** un `GDragList` con `item-label="name"` y un elemento `{ id: 1, name: 'Sofia Morales' }`
- **WHEN** se agrega ese elemento
- **THEN** el anuncio menciona «Sofia Morales» y no el id

#### Scenario: Textos sobrescritos

- **GIVEN** un `GDragList` con `:texts="{ overlayAdd: 'Suelta para sumar' }"`
- **WHEN** se activa un arrastre desde el origen
- **THEN** el overlay del destino muestra «Suelta para sumar», y los demás textos siguen con su default

### Requirement: Estado deshabilitado

Con `disabled`, `GDragList` SHALL bloquear el arrastre, el teclado, las funciones `add`, `remove`, `moveUp` y `moveDown` del slot y los métodos expuestos. No SHALL emitir eventos de cambio. SHALL indicarlo con `aria-disabled="true"` en los dos paneles.

#### Scenario: Nada cambia deshabilitado

- **GIVEN** un `GDragList` con `disabled` y `modelValue` `[A]`
- **WHEN** el usuario intenta arrastrar, usa el «+» del origen o llama a `remove` desde el slot
- **THEN** no se emite ningún evento y `modelValue` no cambia

### Requirement: Movimiento reducido

Si el usuario tiene activado `prefers-reduced-motion: reduce`, `GDragList` SHALL quitar las transiciones de los overlays, del placeholder y del reacomodo de tarjetas, sin perder ninguna funcionalidad.

#### Scenario: Sin animaciones

- **GIVEN** `prefers-reduced-motion: reduce`
- **WHEN** se reordena una tarjeta
- **THEN** las tarjetas cambian de posición sin transición

### Requirement: Sin dependencias externas nuevas

El paquete `@flash-global66/g-drag-list` SHALL declarar como dependencias solo paquetes `@flash-global66/g-*` y `@vueuse/core`. No SHALL incluir librerías de drag & drop de terceros.

#### Scenario: Revisión del package.json

- **GIVEN** el `components/drag-list/package.json`
- **WHEN** se listan `dependencies` y `peerDependencies`
- **THEN** solo aparecen `vue`, `@vueuse/core` y paquetes `@flash-global66/g-*`

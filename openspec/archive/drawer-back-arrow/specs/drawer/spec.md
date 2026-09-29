## ADDED Requirements

### Requirement: Flecha de volver opcional en el header

El componente `GDrawer` SHALL exponer una prop booleana opcional `showBack`, con default `false`, que
al estar activa renderiza un botón de icono con `arrow-left` a la izquierda de la fila superior del
header y emite el evento `back` al hacer click, sin cerrar el drawer ni alterar su `modelValue`.

#### Scenario: Con la flecha activa, el click emite back y no cierra

- **GIVEN** un `GDrawer` abierto con `show-back`
- **WHEN** el usuario hace click en la flecha del header
- **THEN** el componente emite `back` exactamente una vez, no emite `close` y `modelValue` no cambia

#### Scenario: Sin la prop, el header no cambia

- **GIVEN** un `GDrawer` sin `show-back`
- **WHEN** se renderiza el header
- **THEN** no hay ningún botón de volver y el botón de cerrar sigue alineado a la derecha

#### Scenario: Solo flecha, sin cerrar

- **GIVEN** un `GDrawer` con `show-back` y `show-close: false`
- **WHEN** se renderiza el header
- **THEN** la fila superior se renderiza igual, con la flecha a la izquierda y sin botón de cerrar

### Requirement: El cerrar se mantiene a la derecha

El header del drawer SHALL mantener el botón de cerrar alineado al borde derecho del contenedor,
haya o no haya flecha de volver a su izquierda.

#### Scenario: Convivencia de los dos botones

- **GIVEN** un `GDrawer` con `show-back` y `show-close`
- **WHEN** se renderiza el header
- **THEN** la flecha queda pegada al borde izquierdo y el cerrar al derecho, en la misma fila

### Requirement: La flecha de volver no usa el chrome estándar del botón de icono

El botón de volver SHALL renderizarse sin el fondo de hover ni el ripple que `GIconButton` da por
defecto, y SHALL ajustar su caja al ancho del glifo en vez de conservar los 48px fijos del
componente, de modo que el icono quede alineado con el borde izquierdo del contenido del header.

Es una divergencia deliberada respecto del resto de los botones de icono del design system, y tiene
un costo aceptado: el área táctil queda en ~17.5×48px, por debajo del mínimo recomendado para touch.
Se evaluó compensar con un margen negativo, que alineaba el glifo conservando los 48px, y se eligió
igual el ajuste de caja.

#### Scenario: Sin feedback de hover ni ripple

- **GIVEN** un `GDrawer` con `show-back`
- **WHEN** el usuario pasa el mouse sobre la flecha o la presiona
- **THEN** no aparece fondo de hover ni animación de ripple, a diferencia de los demás botones de icono

#### Scenario: El glifo alineado con el contenido del header

- **GIVEN** un `GDrawer` con `show-back`
- **WHEN** se renderiza el header con un título
- **THEN** el borde izquierdo del icono coincide con el del título, sin el desplazamiento que produce
  una caja de 48px con el glifo centrado

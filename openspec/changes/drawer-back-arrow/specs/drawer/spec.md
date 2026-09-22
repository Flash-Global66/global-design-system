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

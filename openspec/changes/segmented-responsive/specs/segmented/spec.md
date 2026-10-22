## ADDED Requirements

### Requirement: Layout del segmented según el ancho de pantalla

El componente `GSegmented` SHALL adaptar su layout al ancho del viewport sin que el consumidor pase ninguna prop: vertical a todo el ancho por debajo de 768px, horizontal compacto a todo el ancho entre 768px y 991px, y horizontal compacto desde 992px con el ancho que decida la prop `block`.

#### Scenario: Mobile apila las opciones

- **GIVEN** un segmented con cuatro opciones
- **WHEN** el viewport mide menos de 768px
- **THEN** las opciones se muestran una debajo de otra, cada una a todo el ancho, con texto de 14px semibold y padding de 8px vertical por 4px horizontal

#### Scenario: Tablet mantiene la fila en formato compacto

- **GIVEN** un segmented con cuatro opciones
- **WHEN** el viewport mide entre 768px y 991px
- **THEN** las opciones se muestran en una fila que ocupa todo el ancho, repartidas en partes iguales, con texto de 14px semibold y padding de 8px vertical por 4px horizontal

#### Scenario: Desktop usa el estilo compacto de tablet

- **GIVEN** un segmented de tamaño `md` o `sm`
- **WHEN** el viewport mide 992px o más
- **THEN** las opciones se muestran en una fila con texto de 14px semibold, padding de 8px vertical por 4px horizontal y contenedor de 4px, y el ancho del componente lo sigue decidiendo la prop `block`

### Requirement: Indicador de selección en los dos ejes

El indicador de la opción seleccionada SHALL tomar el ancho, el alto y la posición horizontal y vertical de la opción seleccionada, de modo que la cubra tanto en layout horizontal como vertical.

#### Scenario: Selección en layout vertical

- **GIVEN** un segmented apilado en vertical
- **WHEN** se selecciona la segunda opción
- **THEN** el indicador se desplaza verticalmente hasta esa opción y toma su alto

#### Scenario: Selección en layout horizontal

- **GIVEN** un segmented en fila
- **WHEN** se selecciona la segunda opción
- **THEN** el indicador se desplaza horizontalmente hasta esa opción y toma su ancho

### Requirement: Colores del segmented según el diseño B2B_Wallets

El segmented SHALL usar, en todos los tamaños de pantalla, el color de texto secundario para las opciones no seleccionadas, el color primario de marca para la opción seleccionada y el borde `blue-100` en el indicador de la variante `default`.

#### Scenario: Opción seleccionada y no seleccionada

- **GIVEN** un segmented de variante `default` con una opción seleccionada
- **WHEN** se renderiza en cualquier ancho
- **THEN** la opción seleccionada usa `#203478`, las demás `#434a5c`, y el indicador tiene fondo blanco con borde `#c5d0ec`

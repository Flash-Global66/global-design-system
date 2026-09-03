# Delta de especificación · `g-quote`

## ADDED Requirements

### Requirement: Selección de cuenta agrupada por moneda
Cuando el consumidor provee cuentas para un lado de la cotización, `GQuote` SHALL reemplazar el
selector de moneda de ese lado por un selector de cuentas que agrupa las opciones por el
`currencyCode` de cada cuenta, precede cada grupo de un encabezado con ese código, y preserva el
orden en que las cuentas fueron provistas.

#### Scenario: Cuentas de dos monedas distintas
- **GIVEN** un `GQuote` con `fromAccounts` que trae cuatro cuentas `CLP` y tres `COP`, en ese orden
- **WHEN** se abre el selector de origen
- **THEN** el panel muestra un encabezado `CLP` seguido de sus cuatro cuentas y después un
  encabezado `COP` seguido de sus tres, y cada cuenta muestra su nombre y su descripción

#### Scenario: La búsqueda deja una moneda sin cuentas
- **GIVEN** el panel abierto con cuentas `CLP` y `COP`
- **WHEN** se escribe en el buscador un texto que solo coincide con cuentas `CLP`
- **THEN** el encabezado `COP` desaparece junto con sus cuentas, y el encabezado `CLP` queda con
  las cuentas que coinciden

#### Scenario: La búsqueda no coincide con ninguna cuenta
- **GIVEN** el panel abierto con cuentas de dos monedas
- **WHEN** se escribe en el buscador un texto que no coincide con ningún nombre ni descripción
- **THEN** no se muestra ningún encabezado ni ninguna cuenta, y en su lugar se muestra el texto de
  `emptyResultsText`

### Requirement: Distinción visual de la cuenta principal
El selector de cuentas SHALL mostrar bajo el código de moneda un badge que distingue la cuenta
principal de las adicionales: la principal con el copy de `primaryAccountLabel`, y una adicional
con su propio `badgeLabel`.

#### Scenario: La cuenta seleccionada es la principal
- **GIVEN** un `GQuote` cuyo `fromAccountId` apunta a una cuenta con `isPrimary: true`
- **WHEN** se renderiza el selector de origen cerrado
- **THEN** el trigger muestra la bandera y el código de la moneda de esa cuenta, y debajo un badge
  con el copy de `primaryAccountLabel` en los tokens de estado de éxito

#### Scenario: La cuenta seleccionada es adicional
- **GIVEN** un `GQuote` cuyo `fromAccountId` apunta a una cuenta sin `isPrimary`
- **WHEN** se renderiza el selector de origen cerrado
- **THEN** el trigger muestra debajo un badge con el `badgeLabel` de esa cuenta en los tokens de
  información, y no el copy de `primaryAccountLabel`

### Requirement: Notificación de la cuenta elegida sin alterar la moneda
Al elegir una cuenta, `GQuote` SHALL emitir `from-account-change` o `to-account-change` según el
lado, con la cuenta completa como payload, y SHALL dejar `fromCurrency` y `toCurrency` sin
modificar — mantenerlas en sincronía es del consumidor.

#### Scenario: Se elige una cuenta de origen de otra moneda
- **GIVEN** un `GQuote` con `fromCurrency` en `CLP` y el panel de origen abierto
- **WHEN** se elige una cuenta cuyo `currencyCode` es `COP`
- **THEN** se emite `from-account-change` con esa cuenta, y el componente no emite ningún cambio de
  `fromCurrency` por su cuenta

### Requirement: El selector de moneda sobrevive sin cambios
Cuando el consumidor no provee cuentas para un lado, `GQuote` SHALL renderizar en ese lado el
selector de moneda con el mismo comportamiento y las mismas clases que tiene hoy, con el buscador
dentro del trigger.

#### Scenario: Un consumidor existente no pasa cuentas
- **GIVEN** un `GQuote` montado solo con las props que existían antes de este cambio
- **WHEN** se renderiza la card
- **THEN** los dos lados muestran el selector de moneda con su buscador en el trigger, no aparece
  ningún selector de cuentas, y las props y los emits declarados anteriormente siguen existiendo
  con sus mismos defaults

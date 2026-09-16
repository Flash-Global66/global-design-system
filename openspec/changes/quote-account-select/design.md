# Decisiones de diseño · modo «entre cuentas» en Form Quote

## El modo se activa por datos, no por una prop de modo

`fromAccounts` / `toAccounts` no vacío **es** el interruptor. No hay `mode="accounts"`.

**Por qué:** una prop de modo permite estados imposibles —`mode="accounts"` sin cuentas, o cuentas
con `mode="currency"`— y el componente tendría que decidir qué hacer con cada uno. Con los datos
como interruptor esos estados no existen. Además cualquier consumidor actual queda en el modo viejo
sin cambiar una línea, que es la retrocompatibilidad que pide ML-80.

## El selector de cuentas es un sub-componente aparte, no una rama dentro de `quote-input`

`quote-account-select.vue` se queda con el trigger **y** el panel. `quote-input.vue` solo elige cuál
de los dos renderizar.

**Por qué:** el trigger y el panel del modo cuentas no comparten nada con los del modo monedas — el
buscador cambia de lugar, aparece un badge, los ítems tienen dos líneas y hay headers de grupo.
Meter eso como `v-if` dentro de `quote-input.vue` duplicaría el archivo y, peor, cualquier
refactor futuro tocaría el camino de código que los consumidores actuales ya usan en producción.
Con dos componentes, el modo viejo no se toca: es lo único que hace verificable la promesa de
«no romper implementaciones existentes».

## El componente no deriva la moneda de la cuenta

Al elegir una cuenta se emite `from-account-change` / `to-account-change` con la cuenta completa.
`fromCurrency` / `toCurrency` **no** se modifican adentro: es el consumidor el que las actualiza.

**Por qué:** las dos son props (`quote.ts:7-8`, `required: true`), y `GQuote` es un componente
controlado — hoy `from-currency-change` funciona igual. Derivar la moneda adentro rompería ese
patrón y convertiría una prop controlada en estado interno a medias: el consumidor seguiría
mandando `fromCurrency` y el componente lo ignoraría en unos casos y no en otros.

El efecto práctico: `useQuoteInput` sigue resolviendo decimales, locale y separadores desde
`currencies` por `currencyCode` (`use-quote-input.ts:33-47`), sin saber que existen cuentas.

## El badge sale del dato, no de una prop de variante

`isPrimary: true` → badge `bg-success-bg text-success-txt` con el texto de `primaryAccountLabel`.
Si no → badge `bg-blue-50 text-everBlue-500` con el `badgeLabel` de la cuenta.

**Por qué:** cuál cuenta es la principal lo sabe el backend, no el que arma el template. Una prop
de variante obligaría al consumidor a decidirlo por cada ítem y a mantenerlo sincronizado con los
datos. `primaryAccountLabel` queda como prop porque es **copy**, y el copy sí es del consumidor.

## La agrupación preserva el orden de entrada

`groupedAccounts` recorre `accounts` una vez con un `Map` y no ordena por código de moneda.

**Por qué:** ordenar alfabéticamente pondría COP antes de CLP, y el orden de las monedas es una
decisión de producto que el consumidor ya expresó al armar el array. El `Map` en un solo pase es
además lo que pide `algorithmic-complexity.md`: la alternativa —un `.filter()` por cada moneda—
es O(n·m) y no se lee mejor.

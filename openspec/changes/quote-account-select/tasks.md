# Tareas · ML-80 modo «entre cuentas» en Form Quote

Los tres nodos de Figma que gobiernan cada tarea visual, y que todo subagente recibe:

| Nodo | Qué es |
|---|---|
| [`2620:4804`](https://www.figma.com/design/8ABNeRb04rvV672sA2WL9L/B2B_Cotizador?node-id=2620-4804&m=dev) | panel abierto: buscador + headers CLP/COP + ítems |
| [`2603:4677`](https://www.figma.com/design/8ABNeRb04rvV672sA2WL9L/B2B_Cotizador?node-id=2603-4677&m=dev) | trigger cerrado, cuenta **principal** (badge verde) |
| [`2603:4659`](https://www.figma.com/design/8ABNeRb04rvV672sA2WL9L/B2B_Cotizador?node-id=2603-4659&m=dev) | trigger cerrado, cuenta **secundaria** (badge azul con el nombre) |

La tabla de tokens diseño → repo está en el `proposal.md`, sección «Qué encontré». **Ningún hex ni
`px` literal en el SCSS**: todo por `@apply` con los tokens de `tailwind.config.cjs`. El subtítulo
del ítem va con `text-grey-500`, **no** con `text-terciary-txt` — son colores distintos.

---

- [x] **1 · Tipo `QuoteAccount` y props del selector**
  - archivos: `components/quote/src/quote.type.ts`, `components/quote/src/components/quote-account-select.ts`, `components/quote/tests/props/quote-account-select.props.spec.ts`
  - depende de: ninguna
  - listo cuando: `QuoteAccount` declara `id`, `name`, `description`, `currencyCode`, `flagCountryCode`, `isPrimary?` y `badgeLabel?`, y sale del barrel `components/quote/index.ts` sin tocarlo (ya hace `export * from './src/quote.type'`); `quoteAccountSelectProps` declara `accounts`, `accountId`, `currencyCode`, `flagCode`, `isDisabled`, `searchPlaceholder` (default `'Buscar'`), `primaryAccountLabel` (default `'Cuenta principal'`) y `emptyResultsText` (default `'Sin resultados'`); `quoteAccountSelectEmits` declara `account-change`; el spec verifica cada default y que `accounts` arranque en `[]`
  - commit: `feat(quote): tipo QuoteAccount y props del selector de cuentas`

- [x] **2 · Agrupación por moneda, búsqueda y badge**
  - archivos: `components/quote/src/components/use-quote-account-select.ts`, `components/quote/tests/composables/use-quote-account-select.spec.ts`
  - depende de: 1
  - listo cuando: `groupedAccounts` agrupa por `currencyCode` en **un solo pase con `Map`** y preserva el orden de aparición de `accounts` (sin ordenar alfabéticamente); `filteredGroups` filtra sin distinguir mayúsculas por `name` y `description` y **descarta los grupos que quedan vacíos**; `selectedAccount` resuelve la cuenta por `accountId` y devuelve `null` si no está; `badgeLabel` devuelve `primaryAccountLabel` cuando `isPrimary` y el `badgeLabel` de la cuenta si no; `isPrimarySelected` distingue las dos formas del badge; el spec cubre dos monedas, búsqueda que deja un grupo vacío, búsqueda sin resultados y `accountId` inexistente
  - commit: `feat(quote): agrupación y búsqueda de cuentas`

- [x] **3 · El selector: trigger con badge y panel agrupado**
  - archivos: `components/quote/src/components/quote-account-select.vue`, `components/quote/src/quote.styles.scss`, `components/quote/tests/components/quote-account-select.spec.ts`
  - depende de: 2
  - listo cuando: el trigger es `flex-col items-end gap-xs` con la fila `<g-country-flag size="xs">` + código `text-4 font-semibold text-primary-txt` + `regular chevron-down`, y debajo el badge `text-1 font-semibold rounded-xl` en `bg-success-bg text-success-txt` si la cuenta es principal o `bg-blue-50 text-everBlue-500` si no; el panel es `bg-white rounded-md pt-sm pb-xs gap-xxs` con un `<g-input type="search" suffix-icon="regular magnifying-glass">` arriba, un header por moneda (`pt-xs px-md text-3 font-semibold text-primary-txt`) y ítems `gap-xs px-lg py-xs` con `<g-country-flag size="md">`, título `text-4 font-medium text-secondary-txt truncate` y descripción `text-2 text-grey-500`; el ítem de `accountId` lleva `bg-everBlue-50`; el `v-for` usa `:key="account.id"`; sin resultados muestra `emptyResultsText`; la barra de scroll del panel es 4px `bg-grey-200 rounded-2xl`; el SCSS no tiene ni un hex ni un `px` literal; el spec verifica los dos badges, los headers por moneda, el ítem seleccionado y el estado vacío
  - commit: `feat(quote): selector de cuentas agrupado con búsqueda en panel`

- [x] **4 · `quote-input` alterna entre moneda y cuenta**
  - archivos: `components/quote/src/components/quote-input.ts`, `components/quote/src/components/quote-input.vue`, `components/quote/tests/components/quote-input.spec.ts`
  - depende de: 3
  - listo cuando: `quoteInputProps` suma `accounts`, `accountId`, `searchPlaceholder` y `primaryAccountLabel` con sus defaults, y `quoteInputEmits` suma `account-change`; con `accounts` no vacío se renderiza `quote-account-select` y **no** el `g-dropdown` de monedas; con `accounts` vacío el árbol del dropdown de monedas es el de hoy —mismas clases, mismo buscador en el trigger— y ninguna de las 16 props existentes cambió de default; el spec monta los dos modos y afirma la ausencia del otro en cada uno
  - commit: `feat(quote): quote-input alterna entre selector de moneda y de cuenta`

- [x] **5 · Exponer el modo cuentas en `GQuote`**
  - archivos: `components/quote/src/quote.ts`, `components/quote/src/quote.vue`, `components/quote/tests/Quote.spec.ts`
  - depende de: 4
  - listo cuando: `quoteProps` suma `fromAccounts`, `toAccounts`, `fromAccountId`, `toAccountId`, `accountSearchPlaceholder` y `primaryAccountLabel`, y `quoteEmits` suma `from-account-change` y `to-account-change`; cada grupo llega al `quote-input` que le corresponde y el `account-change` de cada uno se re-emite con la cuenta; las **26** props que `quote.ts` declara hoy siguen existiendo con el mismo default y los **10** emits actuales siguen declarados; el spec incluye un caso de retrocompatibilidad que compara las listas de props y emits contra las de hoy, y un caso que confirma que sin `fromAccounts`/`toAccounts` la card renderiza los dos dropdowns de moneda
  - commit: `feat(quote): props y emits del modo entre cuentas en GQuote`

- [ ] **6 · Declarar `g-input` como peer del paquete**
  - archivos: `components/quote/package.json`
  - depende de: 5
  - listo cuando: `@flash-global66/g-input` figura en `peerDependencies` con `^0.3.32`, junto a los cuatro peers que ya están; `version` y `dependencies` quedan sin tocar porque los mueve `lerna version --conventional-commits`
  - commit: `feat(quote): g-input como peerDependency del selector de cuentas`

- [ ] **7 · Story y documentación en Storybook**
  - archivos: `stories/quote.stories.ts`
  - depende de: 6
  - listo cuando: hay una story `EntreCuentas` con nombre `'Entre cuentas'` que pasa cuentas CLP y COP —una principal por moneda y al menos dos adicionales— y mantiene los dos montos con swap; el bloque de docs del `meta` documenta la interfaz `QuoteAccount` campo por campo, las seis props nuevas con su default y los dos emits nuevos; las **seis** stories existentes (`Basic`, `WithAvailableBalance`, `InsufficientBalance`, `Disabled`, `SingleInput`, `NoSwap`) siguen declaradas y sin cambios en sus `args`
  - commit: `docs(quote): story y documentación del modo entre cuentas`

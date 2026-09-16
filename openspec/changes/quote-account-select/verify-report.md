# Verificación · quote-account-select

```yaml
veredicto: pasa
ronda: 1
fecha: 2026-09-03
tareas_a_medias: []
cumplidas: 7/7
a_medias: 0
de_mas: 4
escenarios: 5/7
comandos:
  - cmd: calcifer check
    exit: 0
    esperado: "no declarado por el plan"
    obtenido: "0 hallazgos · avisa SIN REVISAR: ningún validador cubre estos 20 archivos"
    coincide: no_declarado
  - cmd: '"$MAIN/node_modules/.bin/vue-tsc" --project components/quote/tsconfig.json --noEmit'
    exit: 0
    esperado: "exit=0 y 0 líneas de salida"
    obtenido: "exit=0 y 0 líneas de salida"
    coincide: true
  - cmd: '"$MAIN/node_modules/.bin/vitest" run --root .'
    exit: 0
    esperado: "≥73 archivos y ≥496 tests, todos passed, 0 failed"
    obtenido: "73 passed (73) archivos · 531 passed (531) tests · 0 failed"
    coincide: true
  - cmd: '"$MAIN/node_modules/.bin/vitest" run --root . components/quote'
    exit: 0
    esperado: "5 passed (5) archivos, 0 failed"
    obtenido: "5 passed (5) archivos · 35 passed (35) tests · 0 failed"
    coincide: true
  - cmd: 'git diff --name-only --diff-filter=ACMR 2462886..HEAD -- "*.vue" "*.ts" | tr "\n" "\0" | xargs -0 "$MAIN/node_modules/.bin/eslint" --max-warnings 0'
    exit: 0
    esperado: "exit=0, sin salida"
    obtenido: "exit=0, sin salida (14 archivos)"
    coincide: true
  - cmd: 'git diff 2462886..HEAD -- components/quote/src/quote.styles.scss | rg "^\+" | rg -c "#[0-9a-fA-F]{6}|[0-9]+px"'
    exit: 1
    esperado: "0 (rg sale con 1 cuando no encuentra nada, y eso es el bueno)"
    obtenido: "0 coincidencias, exit=1"
    coincide: true
```

---

## cumplidas: 7 de 7

**1 · Tipo `QuoteAccount` y props** — `components/quote/src/quote.type.ts:15-25` declara los 7 campos; `components/quote/index.ts` **no está en el diff**, así que sale por el `export *` que ya existía. `components/quote/src/components/quote-account-select.ts:6-21` declara las 8 props con sus defaults exactos y el emit `account-change`. Lo prueba `components/quote/tests/props/quote-account-select.props.spec.ts` (2 tests, cada default + `accounts` en `[]`).

**2 · Agrupación, búsqueda y badge** — `components/quote/src/components/use-quote-account-select.ts:45-56` agrupa en **un solo pase con `Map`** y `Array.from(groups, …)` preserva el orden de inserción; `:58-71` filtra con `toLowerCase()` sobre `name` y `description` y descarta grupos vacíos con `.filter((group) => group.accounts.length > 0)`; `:73-84` resuelven `selectedAccount`/`badgeLabel`/`isPrimarySelected`. Los 4 casos que pide el criterio están en `tests/composables/use-quote-account-select.spec.ts` (11 tests): dos monedas, `'pesos'` que vacía CLP, `'no existe'`, y `accountId: 'no-existe'` → `null`.

**3 · Selector con badge y panel agrupado** — `components/quote/src/components/quote-account-select.vue` + `components/quote/src/quote.styles.scss:257-338`. Verifiqué clase por clase: trigger `flex flex-col items-end … gap-xs`, código `text-4 font-semibold text-primary-txt`, badge `text-1 font-semibold rounded-xl` con `bg-blue-50 text-everBlue-500` y `when(primary)` → `bg-success-bg text-success-txt`, panel `bg-white rounded-md pt-sm pb-xs gap-xxs`, header `pt-xs px-md text-3 font-semibold text-primary-txt`, ítem `gap-xs px-lg py-xs`, título `text-4 font-medium text-secondary-txt truncate`, descripción `text-2 text-grey-500`, `when(selected)` → `bg-everBlue-50`, `:key="account.id"` (`quote-account-select.vue:50`). Scroll: `&::-webkit-scrollbar { @apply w-1 }` = 4px — `tailwind.config.cjs` solo extiende `width: { fit }`, así que `w-1` es el `0.25rem` del scale por defecto — con thumb `bg-grey-200 rounded-2xl` (`rounded-2xl = 6.25rem = 100px`, `tailwind.config.cjs:87`). Cero hex y cero px literal, confirmado por comando. Los 4 casos del spec están en `tests/components/quote-account-select.spec.ts` (6 tests).

  **El desvío del icono lo doy por cumplido, y no es una concesión.** El criterio pide `suffix-icon="regular magnifying-glass"` y el código pone `regular search`. Fui a ver el glifo: `components/icon-font/src/lib/far-regular-pro.ts:17` es `export const faSearch = { iconName: 'magnifying-glass', icon: [512, 512, ["search"], "f002", …] }` — **`search` es el alias del mismo glifo `magnifying-glass`**, no otro icono. El píxel que se renderiza es exactamente el que el criterio pedía. Y `magnifying-glass` no está en la allowlist (`rg magnifying components/icon-font/src/icon-sets.ts` → exit 1), mientras `search` sí (`icon-sets.ts:139`); como `components/input/src/input.ts:128` tipa `suffixIcon: definePropType<IconString>(String)` e `IconString` se construye de `ICON_SETS` (`components/icon-font/src/types.ts:5-7`), el literal del criterio **rompería el `vue-tsc` que el propio plan declara en exit=0**. Un plan no puede exigir las dos cosas: gana el gate. → **hallazgo sobre el plan, no sobre el apply** (abajo).

**4 · `quote-input` alterna** — `components/quote/src/components/quote-input.ts` suma las 4 props y el emit; el `.vue` mete `<quote-account-select v-if="accounts.length">` y le agrega `v-else` al `g-dropdown` de monedas, sin tocar ni una clase del árbol viejo (el diff de ese archivo son **14 líneas, todas `+`** salvo el `import type` extendido). Conté las props: **16 antes → 20 ahora**, como declara el criterio. `tests/components/quote-input.spec.ts` (8 tests) monta los dos modos y afirma la ausencia del otro en cada uno, y revalida los 13 defaults preexistentes.

**5 · Modo cuentas en `GQuote`** — `components/quote/src/quote.ts` suma las 6 props y los 2 emits; `quote.vue:32-40` y `:78-86` cablean cada grupo a su `quote-input` y re-emiten. Los números del criterio dan exacto: props **26 → 32**, emits **10 → 12**. `tests/Quote.spec.ts` (8 tests) trae el caso de retrocompatibilidad con las tablas `EXISTING_PROPS_DEFAULTS` (24 con default + `fromCurrency`/`toCurrency` requeridas = 26) y `EXISTING_EMITS` (10), y el caso sin cuentas que espera `querySelectorAll('.gui-quote-input__currency')` con longitud 2.

**6 · Peer `g-input`** — `components/quote/package.json`: **una sola línea añadida**, `"@flash-global66/g-input": "^0.3.32"` en `peerDependencies`. `version` y `dependencies` sin tocar (grep sobre el diff: vacío).

**7 · Story y docs** — `stories/quote.stories.ts`: `EntreCuentas` con `name: 'Entre cuentas'`, 3 cuentas CLP + 2 COP (una principal por moneda, 3 adicionales), `:from-amount`/`:to-amount` y `@swap="handleSwap"`. El bloque de docs del `meta` documenta `QuoteAccount` campo por campo, las 6 props con su default y los 2 emits. Las seis stories siguen declaradas (`Basic`, `WithAvailableBalance`, `InsufficientBalance`, `Disabled`, `SingleInput`, `NoSwap`) y **no cambió ni una línea de sus `args`**: en todo el diff sin `openspec/` hay exactamente **3 líneas `-`**, y las tres son `import type` que se extendieron.

## a medias: ninguna

## de más: 4

Ninguna es un archivo entero — todo el diff mapea a una tarea. Son cuatro cosas **dentro** de archivos declarados que ningún `listo cuando` cubre:

1. **`use-quote-account-select.ts:97-110`** — expone 7 miembros que el criterio de la 2 no lista: `searchQuery`, `isDropdownOpen`, `dropdownRef`, `dropdownPopperId`, `triggerId`, `handleAccountSelect`, `onDropdownVisibleChange`, más el efecto de `onDropdownVisibleChange` de limpiar la búsqueda al cerrar (`:90-95`). Es la máquina que el criterio de la 3 necesitaba (buscador y estado vacío en el panel), pero nadie la revisó contra un criterio propio. Sí tiene tests (2 de los 11).
2. **`quote-account-select.vue:16-21`** — el fallback del trigger a la cuenta seleccionada (`flagCode ?? selectedAccount?.flagCountryCode`, `currencyCode || selectedAccount?.currencyCode`) y su test dedicado. Es la única **conducta nueva** de la lista, no un enabler. El `||` en `currencyCode` está bien: esa prop tiene `default: ''` y `modern-operators.md` manda `||` cuando el fallback también debe cubrir `''`.
3. **`quote.styles.scss:293`** — `max-h-60 overflow-y-auto` en `e("list")`. Sin contenedor scrolleable el criterio de los 4px sería CSS muerto, pero el criterio no lo pide.
4. **`quote.styles.scss:281-283` y `:302-305`** — el bloque `e("dropdown-popper")` (`rounded-md shadow-md`) y el override `.gui-dropdown-menu__item { padding: 0; min-height: unset; }`. Este último es además el **único CSS crudo** del bloque nuevo: pasa el comando (no tiene hex ni px) pero se sale del *«todo por `@apply`»* que el proposal declara en «Con qué restricciones».

## escenarios: 5 de 7 con evidencia completa

| Escenario | Qué lo prueba |
|---|---|
| R1 · Cuentas de dos monedas distintas | **parcial** · `tests/components/quote-account-select.spec.ts` «agrupa los ítems del panel bajo un header por moneda» (`headers` → `['CLP','COP']`) + el test de orden del composable. **El «cada cuenta muestra su nombre y su descripción» no lo asserta ningún test**: hay assert del nombre (`toContain('Cuenta Corriente')`), ninguno del `__item-description`. Los cardinales del escenario (4 CLP / 3 COP) tampoco se reproducen: los tests usan 2 y 1 |
| R1 · La búsqueda deja una moneda sin cuentas | `tests/composables/use-quote-account-select.spec.ts` «la búsqueda que solo matchea COP descarta el grupo CLP vacío» |
| R1 · La búsqueda no coincide con ninguna | `tests/components/quote-account-select.spec.ts` «muestra emptyResultsText…», escribiendo en el input real del panel, + el caso de lista vacía del composable |
| R2 · La cuenta seleccionada es la principal | `tests/components/quote-account-select.spec.ts` «muestra el badge verde…» (`is-primary` + copy) y «el trigger cae a los de la cuenta de accountId» para bandera y código |
| R2 · La cuenta seleccionada es adicional | mismo spec, «muestra el badge azul con el nombre…» (sin `is-primary`, texto `'Marketing Ads'`) |
| R3 · Se elige una cuenta de origen de otra moneda | **parcial** · `tests/Quote.spec.ts` assertea `emitted('from-account-change')` con la cuenta. **La segunda mitad del THEN —«no emite ningún cambio de `fromCurrency` por su cuenta»— no la asserta ningún test**; se sostiene leyendo `quote.vue`, donde `from-currency-change` solo cuelga del dropdown de monedas. El escenario tampoco se ejercita eligiendo una cuenta COP en el panel abierto: el test emite desde el hijo |
| R4 · Un consumidor existente no pasa cuentas | `tests/Quote.spec.ts` «sin fromAccounts/toAccounts renderiza los dos dropdowns de moneda» + los dos casos de retrocompatibilidad de props y emits |

Ninguna evidencia **contradice** un escenario: los dos parciales son huecos de cobertura, no desmentidos. Por eso no tumban el veredicto.

---

## Con qué lo probé

**validación** — `calcifer check` sale en **exit 0 y sin hallazgos**, pero avisa `SIN REVISAR: ningún validador miró este diff, y son 20 archivos`: en este repo delega eslint a `pr-checks.yml` y no trae `check-architecture`. O sea que el exit 0 de `calcifer` **no es cobertura**, y el peso real lo llevan los cinco comandos del plan. Lo digo porque un `check` limpio acá se lee más fuerte de lo que es.

**comandos** — los cinco de «Cómo se verifica» corrieron y los cinco coinciden con lo declarado. La suite entera pasó de las 68/496 del baseline a **73/531**, dentro de la cota inferior que el plan fijó (≥73 y ≥496), y los 5 archivos nuevos son exactos. Confirmo también el entorno: `node_modules.aside/` quedó donde está y `.codegraph/` sigue sin commitear — ninguno de los dos está en el diff (`git status` solo los muestra como `??`).

## Hallazgos sobre el plan

Ninguno frena el cierre, pero los tres van al `tasks.md`/`proposal.md`, no al código:

1. **El criterio de la tarea 3 pide un valor que no existe en la allowlist del repo.** `magnifying-glass` no está en `icon-sets.ts`; el nombre válido para el mismo glifo es `search`. Mientras el `tasks.md` diga `magnifying-glass`, el registro contradice al `vue-tsc` que el propio plan declara en exit=0 — y una tarea tildada cuyo criterio literal no se puede cumplir es justo lo que ensucia el registro. Se corrige el criterio, no el código.
2. **El criterio de la tarea 6 dice «junto a los cuatro peers que ya están» y eran cinco**: `git show 2462886:components/quote/package.json` lista `g-country-flag`, `g-dropdown`, `g-icon-font`, `vue` y `vue-currency-input`. La sustancia se cumplió; el número está mal.
3. **Dos comandos del «Cómo se verifica» no son ejecutables como están escritos.** El de eslint y el del SCSS dicen `HEAD` porque el plan se redactó con el trabajo sin commitear: contra `HEAD` el diff es vacío y los dos dan un falso limpio. Van con `2462886..HEAD`, y el de eslint necesita `| tr '\n' '\0' | xargs -0` en este shell. Si el próximo que verifique los copia tal cual, obtiene verde sin haber medido nada.

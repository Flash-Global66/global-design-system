# ML-80 · Modo «entre cuentas» en Form Quote: selector de cuenta agrupado por moneda

> **Rama:** `claude/b2b-cotizador-design-ml80-d0d651`
> **Base:** `2462886`

El diff desde `Base` incluye este `proposal.md` y su `tasks.md`: son el cambio, no trabajo de más.

## Qué encontré

**El componente ya existe y hoy solo sabe de monedas.** `GQuote` (`components/quote/`) es una card
con dos `quote-input`; cada `quote-input` tiene un input de monto y, a la derecha, un dropdown de
**monedas** cuyo buscador vive **dentro del trigger** — se escribe encima del código de moneda
(`components/quote/src/components/quote-input.vue:58-69`). El filtrado es un `computed` sobre
`props.currencies` (`components/quote/src/components/use-quote-input.ts:22-28`).

**El alcance se decidió con barridos de texto, y el grafo llegó después.** Durante la investigación
este repo **no tenía `.codegraph/`**, así que lo de abajo salió de `rg`/`fd` y no de
`codegraph_impact` — un `grep` y un grafo no contestan lo mismo, y quien lea esto tiene que saber
con cuál se decidió. Lo que se corrió:

| Consulta | Qué contestó |
|---|---|
| `rg -l -i "form.?quote"` sobre el repo | **un solo archivo**: `stories/quote.stories.ts`. Nada más en el repo consume `GQuote` |
| `fd . components/quote -t f` | 13 archivos, `CHANGELOG` incluido. El componente entero cabe en 1341 líneas |
| `rg -n -i "group\|optgroup" components/select/src` | solo `group-item.vue`; `g-select` tiene grupos pero **no** buscador en panel ni la forma bandera+título+subtítulo del diseño |

**Después de escribir el plan apareció el índice**: `.codegraph/` con 647 archivos. Los subagentes
de apply **arrancan por `codegraph_explore` / `codegraph_impact`, no por `grep`**. Lo primero que
contestó, y que el grep no daba: `Currency` (`components/quote/src/quote.type.ts:3`) tiene **17
callers** repartidos entre `quote-input.ts`, `use-quote-input.ts`, `quote.ts` y `use-quote.ts`, y
**ningún test a tres saltos de distancia** — que es la confirmación independiente de que el paquete
está sin cobertura. `QuoteAccount` es un tipo nuevo, así que no hereda ninguno de esos 17.

Los consumidores reales son **externos** (`fe-b2b` en CodeCommit, `front-b2b`), y consumen el
paquete `@flash-global66/g-quote` por npm. El contrato a no romper son las **props, los emits y las
clases BEM**, que `docs/architecture/component-architecture.md:19` declara explícitamente como
contrato de producción.

**El diseño encaja casi entero en tokens que ya existen.** Contrastado nodo por nodo contra
`tailwind.config.cjs`:

| Diseño (Figma) | Token del repo |
|---|---|
| trigger: bandera 16px | `<g-country-flag size="xs">` — `FLAG_SIZES.xs = 16px` (`country-flag.constants.ts:29`). **Es lo que ya usa** `quote-input.vue:52` |
| trigger: código 16px/24px SemiBold `#0d1f4c` | `text-4 font-semibold text-primary-txt` — **idéntico a hoy** (`quote.styles.scss` `e("currency-code")`) |
| badge principal: bg `#e6faf5` / txt `#01946b` | `bg-success-bg text-success-txt` (green.50 / green.700, `tailwind.config.cjs:416,436`) |
| badge secundaria: bg `#ecf0f9` / txt `#1f49b6` | `bg-blue-50 text-everBlue-500` (`tailwind.config.cjs:238,134`) |
| badge: h 16px, px 7px, radius 24px, texto 10px/16px | `rounded-xl` (24px, `:87`) + `text-1` (10px/16px, `:25`) |
| panel: pt 12px / pb 8px / gap 4px / radius 8px | `pt-sm pb-xs gap-xxs rounded-md` |
| header de grupo: pt-8 px-16, 14px/22px SemiBold `#0d1f4c` | `pt-xs px-md text-3 font-semibold text-primary-txt` |
| ítem: gap 8px, px 24px, py 8px | `gap-xs px-lg py-xs` |
| ítem: bandera 32px | `<g-country-flag size="md">` — **lo que ya usa** el dropdown actual (`quote-input.vue:98`) |
| ítem título: 16px/24px Medium `#434a5c` | `text-4 font-medium text-secondary-txt` (grey.700, `:431`) |
| ítem seleccionado: bg `#e9edf8` | `bg-everBlue-50` — **ya existe** la regla en `quote.styles.scss` `e("dropdown")` `is(active)` |
| scroll: 4px, `#b5bac5`, radius 100px | `bg-grey-200` + `rounded-2xl` (100px, `:88`) |
| buscador del panel | Code Connect apunta a `components/input` → `@flash-global66/g-input@0.3.32`, con `suffixIcon`; el icono `regular magnifying-glass` existe (`far-regular-pro.ts`) |

**Y una trampa de token, la única.** El subtítulo del ítem («Cuenta electrónica...0061») usa en
Figma la variable `--textcolor/terciary-txt = #5f6881`. En este repo `text-terciary-txt` resuelve a
**grey.400 = `#7F869A`** (`tailwind.config.cjs:432`); `#5f6881` es **grey.500**. La variable de
Figma y el token del repo **no son el mismo color**. Se usa `text-grey-500` para respetar el pixel
del diseño, y **no** `text-disabled-txt` — que también es grey.500 pero significa otra cosa.

**El trigger del diseño es el de hoy más un badge debajo.** Los nodos `2603:4677` (principal) y
`2603:4659` (secundaria) son un `flex-col items-end gap-xs`: arriba la fila bandera+código+chevron
que ya existe, abajo el badge. Eso hace el cambio **aditivo**, no una reescritura.

**Los tests van en `components/<name>/tests/`** (`vitest.config.ts:12`), y `components/quote/` **no
tiene ninguno hoy**. El patrón canónico está en `components/button/tests/`: `Button.spec.ts` +
`composables/` + `props/`.

**La versión y el CHANGELOG los escribe la automatización, no nosotros.** `lerna.json` usa
`version: independent` con `conventionalCommits: true`, y `publish-package.yml:108` corre
`lerna version --conventional-commits` en el push a `main`. Los CHANGELOG de `quote` dicen
literalmente *«Version bump only for package»*: son generados. Tocar `version` a mano pelea con eso.

## Qué propongo, y qué queda afuera

**Un modo «cuentas» aditivo sobre `GQuote`, activado por datos.** Si el consumidor pasa
`fromAccounts`/`toAccounts` no vacío, ese `quote-input` cambia su selector de monedas por un
selector de **cuentas** agrupado por moneda con buscador en el panel; si no los pasa, el componente
se comporta exactamente como hoy. Cero props obligatorias nuevas, cero emits renombrados, cero
clases BEM existentes modificadas.

La pieza nueva es un sub-componente autocontenido, `quote-account-select.vue`, que se queda con
**todo**: el trigger (bandera + código + chevron + badge) y el panel (buscador + headers + ítems).
`quote-input.vue` solo elige cuál de los dos renderizar. Así el archivo que hoy tiene 160 líneas no
se duplica, y el modo viejo no comparte código con el nuevo — que es la única forma barata de
garantizar la retrocompatibilidad que el ticket pide.

El componente sigue siendo **controlado y tonto**: emite `from-account-change` / `to-account-change`
con la cuenta elegida y no toca `fromCurrency`/`toCurrency`. Mantener las dos en sincronía es del
consumidor, igual que hoy pasa con `from-currency-change`.

El badge tiene dos formas y salen del dato, no de una prop nueva: `isPrimary: true` → badge verde
con el texto de `primaryAccountLabel` (default `'Cuenta principal'`); si no, badge azul con el
`badgeLabel` de la cuenta.

**Qué queda afuera, explícitamente:**

- **La pantalla de ML-13.** Acá solo se toca el Design System. ML-80 la desbloquea, no la implementa.
- **El selector de monedas actual.** Decidido con el dev: el buscador en panel es **solo** del modo
  cuentas. El dropdown de monedas no cambia ni de markup ni de comportamiento.
- **Migrar `components/quote/` a la arquitectura canónica** de `docs/architecture/component-architecture.md`
  (`PascalCase`, `props/`, `composables/`, `constants/`, `styles/`). Hoy el paquete usa kebab-case y
  `src/quote.styles.scss`; migrarlo es el trabajo del change `standardize-component-architecture`
  que ya está abierto en `openspec/changes/`. Este plan **sigue la convención local del paquete**
  para que el diff sea el cambio y no la migración.
- **Bump de versión y entrada de CHANGELOG.** Los genera `lerna version --conventional-commits`.
- **Saldo por cuenta.** El diseño no lo muestra en estos nodos; `availableBalance` sigue siendo un
  string que manda el consumidor.
- **Descargar los SVG de banderas de Figma.** Las banderas salen de `g-country-flag`, que ya las
  tiene por código ISO. Los assets del MCP expiran en 7 días y no se commitean.

## Con qué restricciones

**El diseño es la fuente, y los tres nodos son estos.** Todo subagente de apply los recibe:

| Nodo | Qué es |
|---|---|
| [`2620:4804`](https://www.figma.com/design/8ABNeRb04rvV672sA2WL9L/B2B_Cotizador?node-id=2620-4804&m=dev) | panel abierto: buscador + headers CLP/COP + ítems |
| [`2603:4677`](https://www.figma.com/design/8ABNeRb04rvV672sA2WL9L/B2B_Cotizador?node-id=2603-4677&m=dev) | trigger cerrado, cuenta **principal** (badge verde) |
| [`2603:4659`](https://www.figma.com/design/8ABNeRb04rvV672sA2WL9L/B2B_Cotizador?node-id=2603-4659&m=dev) | trigger cerrado, cuenta **secundaria** (badge azul con el nombre) |

**Los valores vienen de la tabla de tokens de «Qué encontré», no de hex sueltos.** Ningún `#rrggbb`
ni `px` literal en el SCSS: todo por `@apply` con los tokens de `tailwind.config.cjs`, que es lo que
hace hoy `quote.styles.scss`. Y el subtítulo va con `text-grey-500`, no con `text-terciary-txt`.

**Rules de la capa que aplican** (las inyecta Calcifer al abrir cada archivo, y valen igual):

- `exports-imports.md` — named exports, `import type` para tipos, **sin** `export default` en código
  nuevo. Ojo: `components/quote/index.ts:8` tiene un `export default GQuote` heredado; **no se toca**,
  es contrato publicado.
- `function-declarations.md` — `function` para funciones con nombre; arrow solo en callbacks inline.
- `naming.md` — booleanos con `is`/`has`/`should`; funciones que arrancan con verbo.
- `typescript-types.md` — `interface` para la forma de objeto, retorno anotado en lo exportado, sin `any`.
- `render-performance.md` — **`:key` estable**: `account.id`, nunca el índice del `v-for`.
- `algorithmic-complexity.md` — la agrupación por moneda es **un pase** con `Map`, no un `.filter()`
  por grupo dentro de un loop de monedas.
- `clean-code.md` / `code-comments.md` — sin valores mágicos sueltos, sin comentarios que traduzcan
  la línea de al lado.
- `component-architecture.md:19` — las clases BEM son contrato: ninguna existente se renombra.

**El worktree no tiene `node_modules`.** Medido: `yarn test` falla con
`Environment variable not found (GBP_PACKAGE_TOKEN)` y no hay `node_modules/` acá. Los comandos de
verificación de abajo corren con los binarios del checkout principal
(`/Users/brayan.basallo/Desktop/global66/global-design-system/node_modules/.bin/`), y así se midió
el baseline. Lo que **no** se puede correr así es `yarn build` (`node scripts/build-components.js
quote` muere con `command not found: vite`): el build de Vite necesita un `yarn install` en el
worktree. El type-check sí corre, con `vue-tsc` por ruta, y es el gate que reemplaza al build.

## Encontrado de paso

- **`scripts/scss-parity.mjs` está rojo desde antes de este cambio.** Sale con `exit 1` y escupe
  `ERROR compilando "tooltip"` y `"time-picker"` — `Can't find stylesheet to import` sobre
  `@flash-global66/g-utils/tooltip-v2`. Por eso **no se usa como criterio**: no distinguiría un
  problema nuevo de la deuda que ya está. No se atiende acá porque es de otros dos paquetes.
- **`components/quote/` no sigue la arquitectura canónica del propio repo.** Archivos en kebab-case,
  sin `props/`, `composables/`, `constants/` ni `styles/`, contra lo que manda
  `docs/architecture/component-architecture.md:26-56`. Es el trabajo del change
  `standardize-component-architecture` (`openspec/changes/`, que hoy solo tiene `explore.md`), no de
  esta HU.
- **`components/quote/` no tiene un solo test.** 68 archivos de spec en el repo y ninguno de este
  paquete, siendo un componente con lógica de cotización y formato de moneda. Este plan agrega los
  del código nuevo; los del código viejo (`use-quote.ts`, el swap, los placeholders por decimales)
  quedan como deuda declarada.

## Cómo se verifica

Este cambio **sí altera lo que el sistema hace**: agrega una capacidad al componente publicado, así
que lleva delta en `specs/g-quote/` y un criterio al nivel del cambio, además del `listo cuando` de
cada tarea.

Todo se corre con los binarios del checkout principal, porque este worktree no tiene
`node_modules`. Con `MAIN=/Users/brayan.basallo/Desktop/global66/global-design-system`:

```bash
"$MAIN/node_modules/.bin/vue-tsc" --project components/quote/tsconfig.json --noEmit; echo "exit=$?"
#   el type-check del paquete, que reemplaza al build de CI
#   AHORA: exit=0 y 0 líneas de salida        →  DESPUÉS: exit=0 y 0 líneas de salida
```

```bash
"$MAIN/node_modules/.bin/vitest" run --root . 2>&1 | tail -4
#   la suite entera: mide que nada de lo que ya pasaba se rompió
#   AHORA: 68 passed (68) archivos, 496 passed (496) tests
#   DESPUÉS: al menos 73 archivos y al menos 496 tests, todos passed, 0 failed
```

> Es una **cota inferior**, no una igualdad: el número exacto de casos por spec lo decide cada
> tarea, y una igualdad se rompería sola con cualquier test que se agregue después. Los 5 archivos
> nuevos sí son exactos, porque las tareas 1 a 5 declaran uno cada una.

```bash
"$MAIN/node_modules/.bin/vitest" run --root . components/quote 2>&1 | tail -4
#   los tests del paquete tocado, aislados
#   AHORA: "No test files found, exiting with code 1" — components/quote no tiene tests hoy
#   DESPUÉS: 5 passed (5) archivos, 0 failed
```

```bash
"$MAIN/node_modules/.bin/eslint" $(git diff --name-only --diff-filter=ACMR HEAD -- '*.vue' '*.ts') --max-warnings 0; echo "exit=$?"
#   el mismo gate que corre pr-checks.yml, sobre los archivos del diff
#   AHORA sobre los 8 archivos actuales de components/quote: exit=0, sin salida
#   DESPUÉS: exit=0, sin salida
```

```bash
git diff HEAD -- components/quote/src/quote.styles.scss | rg "^\+" | rg -c "#[0-9a-fA-F]{6}|[0-9]+px"
#   ni un hex ni un px literal en el SCSS nuevo: todo por token
#   DESPUÉS: 0  (rg sale con 1 cuando no encuentra nada, y eso es el resultado bueno)
```

**El criterio del cambio entero**, que las siete tareas pueden cumplir y la historia igual no
funcionar: montada `GQuote` con `fromAccounts` y `toAccounts` poblados, el panel de cada selector
**agrupa los ítems por moneda con su header**, el buscador del panel filtra por nombre y por
descripción, elegir un ítem emite `from-account-change` / `to-account-change` con esa cuenta, y el
trigger muestra el badge verde para la principal y el azul con el nombre para las adicionales.
Montada **sin** esas props, la card renderiza los dos dropdowns de moneda con el buscador en el
trigger, exactamente como hoy. Los dos extremos los cubre el spec de retrocompatibilidad de la
tarea 5.

**Lo que este plan no puede verificar acá, y quién lo verifica:** `yarn build` (Vite + `vue-tsc` de
todos los paquetes) necesita un `yarn install` en el worktree con `GBP_PACKAGE_TOKEN`. Lo corre
`pr-checks.yml` en el PR, después del lint y antes de los tests. Si el dev quiere el gate local,
`yarn install` en el worktree lo habilita; mientras no esté, el `vue-tsc` por ruta de arriba es el
sustituto y es el que se midió.

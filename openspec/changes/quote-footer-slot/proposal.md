# Slot `footer` dentro de la card de `GQuote` (g-quote 0.3.25 → 0.4.0 vía pipeline)

> **Rama:** `anibal/BMB-3999/feat/add-slot-gquote`
> **Base:** `e9afdc0c`
> **HU:** `BMB-3999`

El diff desde `Base` incluye este `proposal.md` y su `tasks.md`: son el cambio, no trabajo de más.

## Qué encontré

**Sin `.codegraph/` en este repo** (`ls .codegraph` → no existe): todo lo de abajo sale de `grep` y lecturas directas, no del grafo. Es una degradación conocida: el alcance se acotó leyendo los archivos del paquete, no con `codegraph_impact`.

- **No hay trabajo previo.** Ninguna rama (`git branch -a`: `david/feat/quote-component`, `david/fix/quote`, `erik/feat/disable-individual-selects-and-inputs-from-quoter`) contiene `footer` en `components/quote/src`. En `openspec/changes/` solo está `quote-account-select` (ML-80), otro tema.
- **Estructura actual de la card** (`components/quote/src/quote.vue:9-89`): `__card` contiene `__input-from` (l.16) → `__divider` (l.44) → `__input-to` (l.61). Afuera de `__card`, dentro de `__card-group`: `__action` (l.91) y `__error-message` (l.104). `__available` va arriba, fuera de `__card-group` (l.3).
- **Borde de error**: `@include when(error)` le pone `border border-error-bd` a `__card` (`quote.styles.scss:20-22`). Todo hijo de `__card` queda dentro del borde. Con `action="FromError"` también aplica `is-error-with-action` (`border-b-0 rounded-b-none`, l.24-26), y `__action` se pega debajo (`use-quote.ts:39-41`: `hasCardError && (showAction ?? action === 'FromError')`).
- **El padding de `quote-input` no está escrito con tokens**: `px-md` + `padding-top: 24px; padding-bottom: 24px;` literales (`quote.styles.scss:98-101`). La tarea pide «el mismo padding» y «solo tokens». Se cumplen las dos: `24px` = `spacing.lg` y `16px` = `spacing.md` (`tailwind.config.cjs:306-307`). El footer usa `px-md py-lg`: mismos valores, ahora como tokens.
- **Separador**: el divisor interno ya usa `bg-blue-50` (#ecf0f9, `quote.styles.scss:66`, `tailwind.config.cjs:238`). El dev eligió **`border-blue-50`, de lado a lado**, para que la card sea coherente. `blue-50` se puede usar como color de borde porque `borderColor` se define dentro de `extend` (`tailwind.config.cjs:20,69`).
- **Tipado de slots**: **ningún componente del DS usa `defineSlots`** (grep en `components/*/src`: 0). Los que tienen slots condicionales usan `$slots.x` en el template (`select/src/select.vue:49,261,301`). Vue es 3.5.18, así que `defineSlots` está disponible. Como no hay una convención del DS que imitar, se usa `defineSlots` tal como pide la tarea. Consecuencia: al declarar `defineSlots`, **hay que incluir también `action`**, que ya existe. Si se omite, vue-tsc rechaza `<slot name="action">`.
- **El tipo con nombre va al archivo de tipos, no al `<script setup>`** (`ds-sfc-trio.md`, `ds-types-location.md`). El paquete ya tiene `src/quote.type.ts`, y `index.ts` hace `export * from './src/quote.type'`: `QuoteSlots` le llega exportado al consumidor sin tocar `index.ts`.
- **El «bump de versión» NO es una edición manual.** `lerna.json` define `version: independent` + `conventionalCommits: true`, y `publish-package.yml` corre `lerna version --conventional-commits` al hacer push a `release`. `ds-package-lifecycle` prohíbe editar a mano `CHANGELOG.md`, y la versión sale del tipo de commit. En 0.x, un `feat` sube el **minor**: comprobado en `components/button/CHANGELOG.md` (`0.4.0 → 0.5.0` con `### Features`). **g-quote quedará en `0.4.0`.** «No publicar sin confirmación» significa **no mergear el PR a `release`**: ese merge es el que publica.
- **El merge a `release` es merge commit, nunca squash** (`.claude/skills/ds-git-flow/SKILL.md:75`). Cada commit de tarea llega tal cual a lerna, así que su `tipo` cuenta.
- **`GRadioGroup` en la story no toca el `package.json` de g-quote.** El paquete no lo renderiza: lo pone el consumidor en el slot. Se importa en la story desde `../components/radio`, igual que `stories/radio-group.stories.ts:3`.
- **Línea base del entorno local, medida hoy:**
  - `npx vitest run --project unit components/quote` → `Test Files 3 failed | 2 passed (5)`, `Tests 15 passed`. Los 3 fallan por `Failed to resolve entry for package "@flash-global66/g-country-flag"`: su `dist/` no existe (38 de 59 paquetes construidos). El CI corre `yarn build` antes de los tests (`.github/workflows/pr-checks.yml:101-117`). **No es un bug del paquete.**
  - `npx vue-tsc --noEmit -p components/quote/tsconfig.json` → exit 2, **por la misma causa** (`TS2307 … g-country-flag`).
  - `npx eslint <los 4 archivos a tocar> --max-warnings 0` → exit 0.
  - `yarn styles:check` → exit 0 (`44 paquete(s) con ./styles.scss compilan`).
  - `yarn arch:check` → 0 líneas que mencionen `quote`.
  - `Quote.spec.ts` tiene 8 casos `it(`.

## Qué propongo, y qué queda afuera

Un `<div v-if="$slots.footer" :class="ns.e('footer')">` dentro de `__card`, justo después de `__input-to`. Estilo `border-t border-blue-50 px-md py-lg`, slots tipados con `defineSlots<QuoteSlots>()`, una story «Con footer» con `GRadioGroup`, y la sección «Slots» en la doc del componente. Sin el slot, el DOM de la card es idéntico al de hoy. Con el slot, el contenido queda dentro del borde de error.

**Queda afuera:**

- Cualquier cambio en props, emits, `use-quote.ts` o los estilos de `__card`, `__action`, `__available`, `__error-message`.
- Lógica en el footer: no reacciona a `isDisabled`, `singleInput` ni al estado de error. Qué muestra y cómo se deshabilita lo decide el consumidor.
- Editar a mano `components/quote/package.json` (`version`) o `CHANGELOG.md`: lo hace lerna.
- Publicar, mergear o abrir el PR.
- Migrar g-quote al arquetipo del DS (ver «Encontrado de paso»).
- El trabajo en front-b2b (BMB-3760): subir el rango a `^0.4.0` y poner los radios en el slot.

## Con qué restricciones

- **`ds-styles-bem.md`**: el estilo se declara con `@include e("footer")` dentro del `@include b("quote")` existente, sin selectores a mano. La clase del template sale de `ns.e('footer')`.
- **`ds-sfc-trio.md` / `ds-types-location.md`**: ningún `interface`/`type` con nombre dentro del `<script setup>`. `QuoteSlots` va en `src/quote.type.ts`. El template no lleva `<style>` con reglas.
- **`exports-imports.md` / `typescript-types.md`**: `import type { QuoteSlots }`, sin `any`.
- **`code-comments.md`**: sin comentarios en línea nuevos.
- **`ds-package-lifecycle`**: `CHANGELOG.md` y `version` no se tocan a mano. Commits en Conventional Commits puro, **sin `[BMB-…]` al inicio** porque rompe el parser de lerna.
- **Tokens**: solo clases de la escala del DS (`px-md`, `py-lg`, `border-t`, `border-blue-50`), sin `px` literales.
- **Standing rule del dev**: Claude no commitea. Después de cada tarea se entrega el comando de commit y se espera.
- **Entorno**: los tests y vue-tsc del paquete necesitan `dist/` de sus peers. Antes de verificar hay que correr `yarn build` (con el token cargado: `zsh -lic 'yarn build'`).

## Encontrado de paso

- **El nombre de la rama no sigue `ds-git-flow`.** `anibal/BMB-3999/feat/add-slot-gquote` lleva prefijo de autor y el orden viejo. La convención es `feat/BMB-3999-quote-footer-slot` (`.claude/skills/ds-git-flow/SKILL.md:37-57`). No bloquea: el CI no valida el nombre. Renombrarla la decide el dev antes de abrir el PR.
- **g-quote no está en el arquetipo del DS**: archivos kebab-case en la raíz de `src/` (`use-quote.ts`, `quote.type.ts`) y subcomponentes sin carpeta `PascalCase/` (`src/components/quote-input.vue`). Viola `ds-component-layers`, `ds-naming` y `ds-sfc-trio`, pero `arch:check` no lo marca (0 líneas con `quote`). Es una migración aparte (skill `ds-component-authoring`), y hacerla acá mezclaría un refactor con una feature.
- **`quote-input` tiene el padding vertical en px literales** (`quote.styles.scss:99-101`: `height: 112px`, `padding-top/bottom: 24px`). Hay token equivalente (`py-lg`). La tarea prohíbe tocar estilos existentes, así que no se cambia acá.
- **`g-country-flag` sin `dist/` local**: sin `yarn build`, 3 de 5 specs de quote y vue-tsc fallan. El CI lo cubre, pero localmente confunde. No hace falta arreglarlo, solo saberlo.

## Cómo se verifica

**Este cambio agrega una capacidad** (un slot nuevo con un resultado visible), así que lleva criterio a nivel de cambio y delta en `specs/`.

Primero hay que construir, porque sin `dist/` de los peers los specs no resuelven (medido arriba):

```bash
zsh -lic 'yarn build'
```

→ exit 0.

| Qué mide                                      | Comando                                                                                                                                                       | Resultado esperado                                                                                                                                 |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| specs del paquete (archivos)                  | `npx vitest run --project unit components/quote`                                                                                                              | `Test Files 5 passed (5)`. **Provisional**: hoy da `3 failed \| 2 passed` sin build, y el verify lo reemplaza por el número real después del build |
| casos de `Quote.spec.ts`                      | `npx vitest run --project unit components/quote/tests/Quote.spec.ts`                                                                                          | `Tests` passed **≥ 11** (8 existentes + 3 nuevos) y 0 failed                                                                                       |
| typecheck del paquete                         | `npx vue-tsc --noEmit -p components/quote/tsconfig.json`                                                                                                      | exit 0 después del build (hoy, exit 2 por `TS2307 g-country-flag`)                                                                                 |
| lint de lo tocado                             | `npx eslint components/quote/src/quote.vue components/quote/src/quote.type.ts components/quote/tests/Quote.spec.ts stories/quote.stories.ts --max-warnings 0` | exit 0 (línea base: exit 0)                                                                                                                        |
| SCSS publicado                                | `zsh -lic 'yarn styles:check'`                                                                                                                                | exit 0 (línea base: exit 0, 44 paquetes)                                                                                                           |
| arquitectura                                  | `zsh -lic 'yarn arch:check' 2>&1 \| grep -ci quote`                                                                                                           | 0 (línea base: 0)                                                                                                                                  |
| estilos existentes intactos (líneas quitadas) | `git diff <Base> -- components/quote/src/quote.styles.scss \| grep -c '^-[^-]'`                                                                               | 0                                                                                                                                                  |
| sin bump manual (archivos)                    | `git diff --name-only <Base> -- components/quote/package.json components/quote/CHANGELOG.md \| wc -l`                                                         | 0                                                                                                                                                  |
| props y emits intactos (líneas quitadas)      | `git diff <Base> -- components/quote/src/quote.ts components/quote/src/use-quote.ts \| grep -c '^-[^-]'`                                                      | 0                                                                                                                                                  |

**Criterio del cambio entero** (browser-verify sobre Storybook, `http://localhost:6006/?path=/story/form-quote--with-footer`): el `GRadioGroup` se ve **dentro** de la card blanca, debajo del monto de «Tu contacto recibe», con una línea separadora `#ecf0f9` de lado a lado. En la variante de error, el borde rojo encierra también el footer, y «Cargar dinero» y el mensaje de error siguen debajo de la card. «Disponible» sigue arriba, fuera de la card. En la story «Básico» (sin slot), la card se ve igual que antes.

**Versión**: después del merge a `release`, el pipeline publica `@flash-global66/g-quote@0.4.0`. No se verifica acá, porque ese merge queda fuera del alcance.

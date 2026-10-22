# GSegmented responsive: apilado vertical en mobile y compacto en tablet, según Figma B2B_Wallets

> **Rama:** `claude/segmented-responsive-design-425ecf`
> **Base:** `ee000ea6`

## Qué encontré

- **No hay `.codegraph/`** en este checkout: el alcance se decidió con `rg` y lectura directa, no con el grafo. El MCP `g66` está caído en esta sesión (falló la conexión), así que busqué consumidores con `rg` sobre los repos hermanos del workspace.
- **Nadie trabajó esto antes**: `git branch -a | rg -i segment` solo devuelve la rama actual, y `calcifer list-plans` no tiene changes en esta rama.
- **Figma** (`get_design_context`, nodos `3525:60952` mobile y `3525:60330` tablet):
  - **Mobile**: contenedor `flex-col`, `p 4px`, `bg #ecf0f9` (`blue-50`), `radius 8px`. Cada ítem va **a todo el ancho**, con `px 4px · py 8px · gap 4px`. Texto `14/22 semibold`, no seleccionado `#434a5c`, seleccionado `#203478` sobre blanco con borde `#c5d0ec` (`blue-100`).
  - **Tablet**: mismo estilo pero horizontal, cada ítem `flex: 1`, y el componente ocupa todo el ancho.
  - El ícono de «Secundarias» es contenido del consumidor (slot `default`), no del componente.
- **El componente hoy** (`components/segmented/src/`):
  - Siempre horizontal: `.gui-segmented__group` es `display:flex` sin dirección (`styles/segmented.scss:68-73`).
  - Cada label se corta con ellipsis (`styles/segmented.scss:141-148`, `utils-ellipsis`): esto es lo que se rompe en pantallas angostas.
  - El indicador de selección es un `div` absoluto que **solo se mueve en X**. `updateSelect` calcula `width` y `translateX` (`Segmented.vue:158-161`), y `selectedStyle` fija `height: '100%'` y `translateX` (`Segmented.vue:175-180`). Ya existen `state.height` y `state.translateY` (`Segmented.vue:79-86`), declarados pero sin usar.
  - Ya hay `useResizeObserver(segmentedRef, updateSelect)` (`Segmented.vue:192`): al cruzar un breakpoint el contenedor cambia de tamaño y el indicador se recalcula solo.
  - Colores actuales en `segmented.styles.scss`: `text-nightBlue-900` (l.27), `text-everBlue-900` (l.38) y `border-everBlue-100` (l.61). Ninguno coincide con el diseño.
  - Paddings y tipografía actuales: contenedor `p-2`, ítem `md` `p-4` / `sm` `px-4 py-2`, label `text-4 font-normal`.
- **Breakpoints del DS**: `common/g-utils/styles/tokens.scss:1635-1660` define `$sm: 768px` y `$md: 992px`, con los mapas `$breakpoints` (`'xs'` = `max-width: 767px`) y `$breakpoints-spec` (`'sm-and-down'` = `max-width: 991px`). El mixin `res($key, $map)` está en `common/g-utils/styles/mixins.scss:86`, y `segmented.styles.scss` ya importa `mixins` y `tokens`.
- **Tokens de color** (`tailwind.config.cjs`): `text-secondary-txt` = `grey-700` #434a5c (l.59 y l.431), `text-primary-def` = `nightBlue-500` #203478 (l.92 y l.402), `blue-100` = #c5d0ec (l.239).
- **Consumidores afectados** (porque es automático): `front-b2b`, en onboarding Colombia `steps/User/components/PersonalData.vue` y `steps/LegalRepresentative/components/PersonalData.vue`, y en `paymentLinks/pages/PaymentLinksPage`. También `front-docs-b2b`.
- **Tests**: `components/segmented/tests/` no existe. La suite base del worktree da **76 archivos y 551 tests en verde**. jsdom no evalúa media queries ni Tailwind, así que el CSS responsive no se puede cubrir con unit tests: lo que sí se puede testear es el cálculo del indicador.
- **Lint base**: `Segmented.vue` limpio. `stories/segmented.stories.ts` trae **3 errores** preexistentes (`args` sin usar en l.214, 257 y 292). El CI corre eslint `--max-warnings 0` sobre los archivos cambiados, así que si se toca la story hay que arreglarlos.

## Qué propongo, y qué queda afuera

El segmented se adapta solo, por breakpoint, sin prop nueva (decisión del dev):

| Ancho                | Layout                                        | Estilo              |
| -------------------- | --------------------------------------------- | ------------------- |
| `< 768px` (mobile)   | **vertical**, un ítem por fila, todo el ancho | compacto del diseño |
| `768–991px` (tablet) | horizontal, todo el ancho, ítems `flex:1`     | compacto del diseño |
| `≥ 992px` (desktop)  | horizontal; mismo ancho que antes del cambio  | compacto del diseño |

**Re-plan (2026-10-22, después de la ronda 2 del verify):** el dev definió que el tamaño máximo es el de tablet, así que desktop usa el mismo estilo compacto (14px semibold, ítem 8/4px, contenedor 4px). En desktop no se agrega ninguna regla de ancho. El componente ya ocupaba todo el ancho de su contenedor antes de este cambio: el wrapper `flex flex-col` de `Segmented.vue:2` estira al bloque, con o sin `block` (ver «Encontrado de paso»). La prop `size` deja de distinguir paddings: `sm` y `md` se ven igual.

Los **colores** del diseño (`secondary-txt`, `primary-def`, borde `blue-100`) pasan a todos los tamaños, también desktop (decisión del dev).

El indicador animado pasa a calcular **posición y alto en los dos ejes**, así funciona en vertical sin que el JS sepa del breakpoint.

**Queda afuera:**

- Una prop para activar o desactivar el responsive: se pidió automático.
- Migrar `segmented` al arquetipo (`Segmented/index.vue`, `constants/`, `types/`): el paquete es legacy, pero migrarlo es otro change.
- Tocar `styles/segmented.scss` (la capa de tema), salvo que haga falta para ganar la cascada.
- Cambiar la variante `primary`, el estado disabled o los textos de ayuda.
- Tocar los consumidores de `front-b2b`.
- Editar `CHANGELOG.md`: lo genera lerna.

## Con qué restricciones

- **`ds-styles-bem`**: todo con `@include b/e/m/when` y clases desde `ns.*`, nunca selectores `.gui-segmented__*` escritos a mano.
- **Cascada**: los paddings de ítem viven en `@include m('md')` y `m('sm')` (`.gui-segmented--md .gui-segmented__item`, especificidad 0,2,0). La regla responsive tiene que igualar o superar esa especificidad **y emitirse después**, o no hace nada. Una media query no suma especificidad. Verificar una regla CSS es comprobar que gana la cascada, no que exista. Con el re-plan (tarea 4), los paddings de `m('md')`/`m('sm')` desaparecen y el compacto pasa al `e('item')` base, que le gana a la capa de tema por orden de emisión.
- Los breakpoints salen de `res()` con los mapas de `tokens.scss`, **no de px escritos a mano** (`clean-code`: sin valores mágicos).
- **`code-comments`**: sin comentarios en línea salvo un porqué no deducible.
- **`exports-imports`**: `import type` para lo que es solo tipo.
- **Strict TDD**: el spec del indicador va en rojo antes del cambio en `Segmented.vue`.
- **Commits**: conventional, scope `segmented`, sin atribución de IA (`CLAUDE.md` del usuario). Lerna versiona por el título del squash.
- **Tests**: correr vitest desde el worktree con `node ../../../node_modules/vitest/vitest.mjs`. El `node_modules` del worktree está vacío y resuelve hacia el checkout padre.

## Encontrado de paso

- `styles/segmented.scss:46-51` define `.gui-segmented--vertical`, que ningún código aplica: es heredado de Element Plus y está muerto. No se toca porque no es parte del cambio, y borrarlo es limpieza aparte.
- `Segmented.vue:2`: el wrapper `<div class="flex flex-col gap-xs">` blockifica al `.gui-segmented` (`inline-flex` → `flex`) y lo estira con `align-items: stretch`. Por eso la prop `block` no cambia el ancho del componente: siempre ocupa todo su contenedor. Es preexistente, medido en Storybook a 1100px con la story `Primary` sin `block` (1068px de ancho). No se toca porque cambiar el ancho de todos los consumidores es otra decisión.
- `stories/segmented.stories.ts:214,257,292`: 3 errores de lint preexistentes. Se arreglan solo porque la tarea 3 toca el archivo.

## Cómo se verifica

**Este cambio altera comportamiento visible**: lleva delta en `specs/segmented/spec.md` (ADDED, la capacidad no tiene spec previa en `openspec/specs/`).

El diff desde `Base` incluye este `proposal.md` y su `tasks.md`: son el cambio, no trabajo de más.

| Qué mide                                                     | Comando                                                                                                                                                                                      | Base (medido hoy)                     | Esperado                                                                                                                                                                                     |
| ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| suite completa: ningún fallo nuevo                           | `node ../../../node_modules/vitest/vitest.mjs run 2>&1 \| rg "Test Files\|Tests "`                                                                                                           | `76 passed (76)` · `551 passed (551)` | 0 fallidos; archivos ≥ 77                                                                                                                                                                    |
| spec nuevo del segmented                                     | `node ../../../node_modules/vitest/vitest.mjs run components/segmented 2>&1 \| rg "Test Files"`                                                                                              | no existe (lo crea la tarea 1)        | `1 passed`, 0 fallidos                                                                                                                                                                       |
| lint de los archivos tocados                                 | `node ../../../node_modules/eslint/bin/eslint.js components/segmented/src/Segmented.vue components/segmented/tests/Segmented.spec.ts stories/segmented.stories.ts --max-warnings 0; echo $?` | 3 errores, exit 1                     | exit 0                                                                                                                                                                                       |
| líneas con colores viejos en la capa Tailwind                | `rg -c "nightBlue-900\|everBlue-900\|everBlue-100" components/segmented/src/segmented.styles.scss`                                                                                           | `3`                                   | sin coincidencias (exit 1)                                                                                                                                                                   |
| líneas con `@include res(` en la capa Tailwind               | `rg -c "@include res\(" components/segmented/src/segmented.styles.scss`                                                                                                                      | sin coincidencias                     | ≥ 2                                                                                                                                                                                          |
| líneas con paddings y tipografía de desktop viejos (re-plan) | `rg -c "p-4;\|px-4 py-2\|text-4" components/segmented/src/segmented.styles.scss`                                                                                                             | `3` (medido antes de la tarea 4)      | sin coincidencias (exit 1)                                                                                                                                                                   |
| archivos que tocó el plan                                    | `git diff --name-only ee000ea6..HEAD`                                                                                                                                                        | —                                     | solo `openspec/changes/segmented-responsive/**`, los 2 de `components/segmented/src/`, `components/segmented/tests/Segmented.spec.ts` y `stories/segmented.stories.ts`. Nunca `CHANGELOG.md` |

**Criterio del cambio entero (visual, no automatizable en jsdom):** en Storybook, story `Responsive`, a 375px de ancho se ve como la captura del nodo `3525:60952`: vertical, indicador sobre «Secundarias». A 800px se ve como la del nodo `3525:60330`: horizontal compacto a todo el ancho. A 1100px se ve con el mismo estilo compacto (re-plan). Al cruzar 768px y 992px el indicador se reubica sin quedar desfasado. Se comprueba con `browser-verify` después del verify, porque necesita Storybook levantado.

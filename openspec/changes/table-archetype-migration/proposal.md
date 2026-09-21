# Migrar `components/table` al arquetipo complejo del design system

> **Rama:** `refactor/table-archetype-migration`
> **Base:** `def7f4c8`

El diff desde `Base` incluye este `proposal.md` y su `tasks.md`: son el cambio, no trabajo de más.

## Qué encontré

- **El arquetipo complejo tiene doc y rules recién publicadas.** `docs/architecture/component-architecture.md`
  se reescribió hoy en [PR #326](https://github.com/Flash-Global66/global-design-system/pull/326)
  ("reescribe component-architecture.md con table/inline como ejemplo", mergeado a `release` minutos
  antes de este plan) y usa `table` como el ejemplo canónico del caso complejo. Las rules del kit
  Calcifer (`ds-component-layers.md`, `ds-render-function-exception.md`, `ds-sfc-trio.md`,
  `ds-composables-layers.md`, `ds-types-location.md`, `ds-naming.md`, `ds-styles-bem.md`,
  `ds-package-manifest.md`) llegaron por `ai-context` (5 commits sin sincronizar, `46dacaf5..f0f7e3ca`,
  traídos con `/calcifer:update` en esta sesión) y son consistentes con esa doc — ambas fuentes
  citan a `table` como ejemplo, sin contradicciones entre sí.
- **`table` ya pasó por una migración parcial.** [PR #305](https://github.com/Flash-Global66/global-design-system/pull/305)
  (`feat/ds-archetype-table-migration`, mergeado a `release` el 2026-07-16) reorganizó el elemento
  raíz (`Table/index.vue`) y creó `shared/`, pero dejó deuda explícita: su propio commit
  `9e88ac71` dice "resolve lint debt from archetype migration" y las rules nuevas nombran a `table`
  como el ejemplo de deuda pendiente en tres lugares distintos.
- **Los 4 subcomponentes con render function no califican para la excepción.** `ds-render-function-exception.md`
  y la sección 4.6 de `component-architecture.md` dicen explícitamente que los subcomponentes de un
  elemento en `h()` no heredan la excepción de su raíz: si renderizan markup fijo, van a SFC igual.
  Confirmado con grep: los 4 (`components/table/src/components/{TableHeader,TableBody,TableColumn,TableFooter}/index.ts`)
  usan `defineComponent` + render function, markup fijo, sin factory/virtualización/layout dinámico.
- **`TableHeader/useUtils.ts`** es el ejemplo real citado en `ds-composables-layers.md`: mezcla
  `convertToRows`/`getAllColumns` (funciones puras) con `useUtils` (composable real, con
  `computed`/`inject`) en el mismo archivo — confirmado leyendo el archivo completo.
- **`TableColumn/cell-renderers/types.ts`** es el ejemplo real citado en `ds-types-location.md`:
  nombre genérico (`types.ts`) y ubicación incorrecta (debe ser `shared/types/cellRenderer.type.ts`).
- **`shared/store/helper.ts`** es el ejemplo de destino en `ds-component-layers.md`: hoy `createStore()`
  vive ahí; el nombre correcto es `table.store.ts`. `codegraph_callers` confirma un solo consumidor
  (`Table/useTable.ts:21`), blast radius bajo.
- **`shared/composables/table-layout.ts`** exporta la clase `TableLayout` en kebab-case; por
  `ds-naming.md` debe ser `tableLayout.ts`. `codegraph_impact` confirma 4 archivos que la referencian
  (`table-layout.ts`, `Table/useStyle.ts`, `Table/useTable.ts`, `shared/composables/useLayoutObserver.ts`) —
  todos conocidos, sin sorpresas.
- **Archivo de estilos duplicado**: existen a la vez `Table/table.style.scss` y `Table/styles/table.scss`,
  y el `package.json` (`exports["./styles.scss"]`) ya apunta a `table.style.scss` — confirma que
  `styles/table.scss` es el sobrante de la migración de julio.
- **`Table/defaults.ts:200` usa `export default`** — `ds-types-location.md` lo cita como el caso
  incorrecto real del repo; la excepción EP-derived permite co-localizar el contrato en `defaults.ts`
  pero exige export con nombre, sin excepción.
- **`package.json` tiene 6 dependencias de render directo en `dependencies` en vez de `peerDependencies`**:
  confirmado con grep, `GCheckbox`/`GIconFont`/`GScrollbar`/`GTooltip` se importan y renderizan
  directo en `TableColumn/index.ts`, `TableHeader/index.ts`, `FilterPanel/index.vue`,
  `CellEdit/index.vue` y `Table/index.vue`; `GSelect`/`GInput` se renderizan en los cell-renderers.
- **Cobertura de tests casi nula**: un solo spec (`tests/select-cell-renderer.spec.ts`) para las
  ~50 unidades del paquete, y no espeja `src/` (`ds-component-layers.md`, principio 3).
- **El entorno local sí puede correr `vitest`/`build`.** `GBP_PACKAGE_TOKEN` en `.yarnrc.yml` solo
  gatea la resolución de yarn contra el registry privado; no hace falta para correr scripts ya
  instalados. La razón de fondo por la que `vitest` fallaba antes de esta sesión es que varios
  paquetes nunca se buildearon (`g-form`, `g-teleport`) — no específico de `table`. Se resolvió
  corriendo `GBP_PACKAGE_TOKEN=dummy yarn build` una vez; con eso, `yarn vitest run components/table/tests`
  corre y pasa (2 tests, ver "Cómo se verifica" en `tasks.md`).

## Qué propongo, y qué queda afuera

Reestructurar `components/table` para cumplir las 8 rules del arquetipo complejo, **sin tocar
comportamiento, props públicas, clases CSS emitidas ni el contrato de `index.ts`**. Esto no cambia
lo que el sistema hace — es un refactor estructural puro: no lleva `specs/` en `openspec/`, y el
criterio de éxito es que nada se movió funcionalmente.

**Incluye:**

- Migrar los 4 subcomponentes render-function (`TableHeader`, `TableBody`, `TableColumn`,
  `TableFooter`) a SFC (`index.vue` + composable orquestador + estilo si aplica).
- Separar `CellEdit` y `FilterPanel` a trío completo (composable propio, `FilterPanel` además pasa
  de Options API/`export default` a `<script setup>`).
- Relocar `TdWrapper` (hoy anidado dentro de `TableBody/`) a su propia carpeta `components/TdWrapper/`.
- Relocar `cell-renderers/types.ts` → `shared/types/cellRenderer.type.ts`.
- Renombrar `table-layout.ts` → `tableLayout.ts` y `store/helper.ts` → `store/table.store.ts`.
- Eliminar el `.scss` duplicado en `Table/` y el `export default` de `Table/defaults.ts`.
- Corregir `dependencies`→`peerDependencies` en `package.json` para lo que se renderiza directo.
- Espejar el único test existente a la nueva ruta.

**Queda explícitamente afuera de esta HU:**

- **Reescribir los estilos a mixins BEM (`ds-styles-bem.md`) donde hoy no los usan.** `CellEdit`
  usa clases utilitarias de Tailwind escritas directo en el template, no `useNamespace`/`@include b/e/m`.
  Convertirlo es una tarea de paridad visual con riesgo real de regresión, no una reestructuración
  de archivos — el pedido fue explícito en no cambiar funcionalidad/apariencia. Queda documentado
  como deuda conocida.
- **Backfill de cobertura de tests** para composables que hoy no tienen ningún spec
  (`shared/composables/*`, `shared/store/*`, los nuevos `use*` extraídos). Es un esfuerzo de testing
  aparte, no de estructura.
- Tocar `select` o `date-picker` (los otros dos componentes compuestos sin arquetipo consistente) —
  el arquetipo se valida acá, en `table`; extenderlo a los demás es una HU futura.
- Renombrar los archivos de `cell-renderers/` (`cell-expansion-utils.ts`, `input-cell-renderer.ts`,
  `select-cell-renderer.ts`) a camelCase — no se tocan en esta pasada más que por el import que
  cambia de sitio (`ds-naming.md`, principio 2: no se renombra un archivo solo por casing en un PR
  que no lo toca por otra razón).

## Con qué restricciones

Rules que gobiernan este cambio (`.claude/rules/ds-*.md`, se inyectan solas al tocar cada archivo):
`ds-component-layers.md`, `ds-render-function-exception.md`, `ds-sfc-trio.md`,
`ds-composables-layers.md`, `ds-types-location.md`, `ds-naming.md`, `ds-styles-bem.md` (solo para lo
que ya usa BEM — no fuerza conversión, ver arriba), `ds-package-manifest.md`. Doc de referencia:
`docs/architecture/component-architecture.md`. Procedimiento de migración: skill `ds-component-authoring`.

## Encontrado de paso

- **Varios paquetes del monorepo nunca se buildearon en este checkout** (`g-form`, `g-teleport`).
  No es específico de `table`. Se resuelve corriendo `GBP_PACKAGE_TOKEN=dummy yarn build` una vez —
  no hace falta tocar `.yarnrc.yml` ni el registry real. Vale la pena que alguien entienda por qué
  el checkout quedó así, pero es una pregunta de onboarding del repo, no de esta migración.
- **Este repo no tiene `browser-verify.json`** (solo `fe-b2b` y `fe-admin`, los consumidores, lo
  tienen) y el MCP `mcp__plugin_calcifer_playwright__*` de Calcifer no está conectado en esta
  sesión. Para verificar `table` visualmente sin esa infraestructura, la alternativa es el browser
  propio de la sesión (`mcp__Claude_Browser__*`) apuntado a Storybook local — ver `tasks.md`. Armar
  un `browser-verify.json` para este repo es una mejora de infraestructura aparte.
- **`shared/utils/table.util.ts` importa y renderiza `GTooltip` directo** (`createTablePopper`) — un
  archivo de capa `utils/` renderizando un componente es una inconsistencia de capa, pero no se toca
  acá porque no es parte del árbol de archivos que esta migración reestructura.
- El plan abierto `standardize-component-architecture` (0 tareas, solo `explore.md` del programa
  completo de 59+ componentes) sigue sin tocar — por decisión explícita, este plan es independiente
  y acotado solo a `table`.

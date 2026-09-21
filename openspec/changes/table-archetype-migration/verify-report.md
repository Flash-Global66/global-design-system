# Verificación · table-archetype-migration

```yaml
veredicto: no pasa
ronda: 1
fecha: 2026-09-21
vuelve_a: apply
tareas_a_medias: [10]
cumplidas: 9/10
a_medias: 1
de_mas: 5
comandos:
  - cmd: 'find components/table/src -iname "*helper*" | wc -l'
    exit: 0
    esperado: '0'
    obtenido: '0'
    coincide: true
  - cmd: 'grep -l "defineComponent" .../{TableHeader,TableBody,TableColumn,TableFooter}/index.ts | wc -l'
    exit: 0
    esperado: '0 (esos 4 archivos ya no existen)'
    obtenido: '0'
    coincide: true
  - cmd: 'ls components/table/src/components/{TableHeader,TableBody,TableColumn,TableFooter}/index.vue | wc -l'
    exit: 0
    esperado: '4'
    obtenido: '4'
    coincide: true
  - cmd: 'find components/table/src/Table/styles components/table/src/components/TableColumn/styles -type f | wc -l'
    exit: 0
    esperado: '0'
    obtenido: '0'
    coincide: true
  - cmd: 'grep -c "^export default" components/table/src/Table/defaults.ts'
    exit: 1
    esperado: '0'
    obtenido: '0'
    coincide: true
  - cmd: 'test -f .../cell-renderers/types.ts ; test -f .../shared/types/cellRenderer.type.ts'
    exit: 0
    esperado: 'movido / existe'
    obtenido: 'movido / existe'
    coincide: true
  - cmd: 'test -f .../TableBody/td-wrapper.vue ; test -f .../TdWrapper/index.vue'
    exit: 0
    esperado: 'movido / existe'
    obtenido: 'movido / existe'
    coincide: true
  - cmd: 'node -e "... rendered.filter(d => p.dependencies[d]).length"'
    exit: 0
    esperado: '0'
    obtenido: '0'
    coincide: true
  - cmd: 'git diff def7f4c8..HEAD -- components/table/index.ts'
    exit: 0
    esperado: 'vacío, o solo una ruta interna de import, nunca un nombre exportado'
    obtenido: 'ruta interna de import + pasada de prettier; 0 nombres exportados cambiados'
    coincide: true
  - cmd: 'test -f components/table/tests/components/TableColumn/cell-renderers/select-cell-renderer.spec.ts'
    exit: 0
    esperado: 'ok'
    obtenido: 'ok'
    coincide: true
  - cmd: 'GBP_PACKAGE_TOKEN=dummy yarn vitest run components/table/tests --reporter=basic'
    exit: 0
    esperado: '1 archivo, 2 tests passed'
    obtenido: '1 archivo, 2 tests passed (sobre working tree, no sobre HEAD — ver tarea 10)'
    coincide: true
  - cmd: 'verificación visual en Storybook (pasos 1-3)'
    exit: null
    esperado: 'misma story, 0 errores nuevos en consola'
    obtenido: 'no ejecutable: exige una captura tomada antes de migrar, que ya no se puede reproducir'
    coincide: no_verificado
  - cmd: 'calcifer check'
    exit: 1
    esperado: 'no declarado por el plan'
    obtenido: 'eslint limpio; test no corrió por calcifer (falta GBP_PACKAGE_TOKEN en .yarnrc.yml)'
    coincide: no_verificado
  - cmd: 'vue-tsc --noEmit -p tsconfig.json (extra, no declarado por el plan)'
    exit: 0
    esperado: 'no declarado por el plan'
    obtenido: 'sin errores'
    coincide: no_verificado
  - cmd: 'vite build (extra, no declarado por el plan)'
    exit: 0
    esperado: 'no declarado por el plan'
    obtenido: '60 modules transformed, build ok'
    coincide: no_verificado
```

## Qué se cumplió

| #   | Tarea                                                       | Evidencia                                                                                                                                                                                                                                                   |
| --- | ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Renombrar `table-layout.ts`/`store/helper.ts`               | `tableLayout.ts` y `store/table.store.ts` existen; los viejos no; 4 imports actualizados; `vue-tsc --noEmit` limpio                                                                                                                                         |
| 2   | Limpiar `Table/`: scss duplicado y `export default`         | `Table/styles/` no existe; `Table/defaults.ts:202` es `export const tableProps`, 0 `export default`                                                                                                                                                         |
| 3   | Migrar `TableHeader` a SFC                                  | `TableHeader/index.vue` con el mismo bloque de props que el `index.ts` base, campo por campo; `useUtils.ts` separado en `useTableHeader.ts` (reactivo) + `shared/utils/tableColumn.util.ts` (puro)                                                          |
| 4   | Migrar `TableBody` a SFC y separar `TdWrapper`              | `TableBody/index.vue` + `useTableBody.ts`; `td-wrapper.vue` movido a `TdWrapper/index.vue`                                                                                                                                                                  |
| 5   | Migrar `TableColumn` a SFC y relocar `cellRenderer.type.ts` | `TableColumn/index.vue` + `tableColumn.style.scss`; `cell-renderers/types.ts` eliminado; `shared/types/cellRenderer.type.ts` exporta `RenderCellData`/`CellRenderer`; en los 4 archivos de `cell-renderers/` el único delta semántico es la ruta del import |
| 6   | Migrar `TableFooter` a SFC                                  | `TableFooter/index.vue` + `useTableFooter.ts`; `vite build` limpio                                                                                                                                                                                          |
| 7   | Separar lógica de `CellEdit` a composable                   | `index.vue` queda con template + `<script setup>` mínimo; clases Tailwind del template idénticas a `def7f4c8`                                                                                                                                               |
| 8   | Migrar `FilterPanel` a `<script setup>` con composable      | Sin `defineComponent`/`export default`; clases `ns.b()/ns.e()/ns.is()` intactas                                                                                                                                                                             |
| 9   | Corregir `dependencies`→`peerDependencies`                  | Los 6 (`g-checkbox`, `g-icon-font`, `g-input`, `g-scrollbar`, `g-select`, `g-tooltip`) en `peerDependencies`; `g-hooks`/`g-popper`/`g-utils` correctamente en `dependencies`                                                                                |

## Qué quedó a medias

**Tarea 10 · el import relativo que la ubicación nueva requiere no está commiteado.**

El `listo cuando` exige que el spec funcione desde su nueva ubicación. El `git mv` se commiteó
(`27cce8cc`), pero el import (`'../src/components/TableColumn/cell-renderers/select-cell-renderer'`)
quedó apuntando a una ruta que ya no existe desde la carpeta nueva. La corrección
(`'../../../../src/...'`) está hecha, pero solo en el working tree, sin commitear — un checkout
limpio de `HEAD` da rojo. No estaba en ningún `tareas_a_medias` anterior (ronda 1) → `vuelve_a: apply`.

## Qué se hizo de más

1. **Commit `cf902d5d`** ("cerrar imports colgantes tras la migración a SFC") — 7 imports/paths de
   integración entre tareas paralelas (`Table/index.vue`, `components/table/index.ts`,
   `Table/useTable.ts`, `useLayoutObserver.ts`, `tableLayout.ts`, `FilterPanel/useFilterPanel.ts`,
   `Table/table.style.scss`). Ningún ítem del plan lo pidió explícitamente; era necesario para que
   las 4 migraciones paralelas de la ola 1 quedaran integradas, y está declarado como tal.
2. **Pasada de prettier** sobre `components/table/index.ts` y los 4 archivos de `cell-renderers/`
   que el plan solo iba a tocar por una ruta de import — cero cambios semánticos, confirmado
   comparando exports antes/después.
3. **Archivos nuevos fuera del `archivos:` declarado**: `shared/types/tableHeader.type.ts` (tarea 3),
   `shared/types/cellEdit.type.ts` (tarea 7) — exigidos por `ds-types-location.md` (prohíbe
   `interface` con nombre en un `.vue`), desvío legítimo. `TableFooter/defaults.ts` (tarea 6) — no
   forzado por ninguna rule, extracción razonable del contrato de props pero sin criterio explícito.
4. **`:key` del `v-for` en `TableFooter/index.vue`**: de `cellIndex` a `column.id`. Aceptable —
   `render-performance.md` gobierna el archivo y gana sobre "no cambiar funcionalidad" en tanto no
   toque props/clases/contrato público — pero es un cambio de reconciliación de Vue que el plan no
   pidió.
5. **Limpieza de working tree ajena al plan** (descubierta por el verify, revertida antes de este
   commit): `.storybook/manager.js`, `.storybook/preview.js`, `package.json` raíz (3 devDependencies
   de Storybook) y `.storybook/changelog/` habían quedado modificados por el `yarn build` completo
   del workspace que se corrió para dejar el entorno de test listo (regenera la UI de changelog de
   Storybook) — no es parte de esta migración. Se descartaron con `git checkout --` antes de dejar
   el reporte, y no llegaron a ningún commit de este plan.

## Observación para el plan (no bloquea este veredicto)

`ds-types-location.md` prohíbe `export default` también en `use*.ts`, y hoy quedan 16 ocurrencias en
`components/table/src`, incluidas dos en archivos que la propia tarea 3 tocó
(`TableHeader/useEvent.ts:226`, `TableHeader/useStyle.ts:121`) y una en un archivo que la tarea 5
creó de cero (`TableColumn/useTableColumn.ts:185`). Ninguna tarea del plan lo declaró como criterio,
así que no cuenta como incumplimiento — pero es una brecha entre lo que `proposal.md` promete
("cumplir las 8 rules") y lo que `tasks.md` efectivamente pidió verificar.

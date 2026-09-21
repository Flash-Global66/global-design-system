# Verificación · table-archetype-migration

```yaml
veredicto: pasa
ronda: 2
fecha: 2026-09-21
tareas_a_medias: []
cumplidas: 10/10
a_medias: 0
de_mas: 4
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
    obtenido: '0 (exit 1 es grep sin coincidencias, no un fallo)'
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
    obtenido: '1 archivo, 2 tests passed (working tree == HEAD para components/table)'
    coincide: true
  - cmd: 'verificación visual en Storybook (pasos 1-3)'
    exit: null
    esperado: 'misma story, 0 errores nuevos en consola'
    obtenido: 'no ejecutable: exige una captura tomada antes de migrar, que ya no se puede reproducir'
    coincide: no_verificado
  - cmd: 'calcifer check'
    exit: 1
    esperado: 'no declarado por el plan'
    obtenido: 'eslint limpio; el paso test no corrió por falta de GBP_PACKAGE_TOKEN en el entorno de calcifer, no por el diff'
    coincide: no_verificado
  - cmd: 'vue-tsc --noEmit -p tsconfig.json (extra, no declarado por el plan)'
    exit: 2
    esperado: 'no declarado por el plan'
    obtenido: '218 errores, 0 en components/table; todos son matchers de jest-dom en tests de otros 14 componentes que este diff no toca'
    coincide: no_verificado
```

## Qué se cumplió

| #   | Tarea                                                       | Evidencia                                                                                                                                                                                |
| --- | ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Renombrar `table-layout.ts`/`store/helper.ts`               | `shared/composables/tableLayout.ts` y `shared/store/table.store.ts` existen; `table-layout.ts` no; `find -iname "*helper*"` = 0                                                          |
| 2   | Limpiar `Table/`: scss duplicado y `export default`         | `Table/styles/` no existe; `Table/defaults.ts:202` es `export const tableProps`; 0 `export default`                                                                                      |
| 3   | Migrar `TableHeader` a SFC                                  | `index.vue` + `useEvent.ts` + `useStyle.ts` + `useTableHeader.ts`; `index.ts`/`useUtils.ts` borrados; puras en `shared/utils/tableColumn.util.ts`                                        |
| 4   | Migrar `TableBody` a SFC y separar `TdWrapper`              | `TableBody/index.vue` + `useTableBody.ts`; `td-wrapper.vue` → `TdWrapper/index.vue`                                                                                                      |
| 5   | Migrar `TableColumn` a SFC y relocar `cellRenderer.type.ts` | `TableColumn/index.vue` + `tableColumn.style.scss`; `cell-renderers/types.ts` borrado; `shared/types/cellRenderer.type.ts` existe                                                        |
| 6   | Migrar `TableFooter` a SFC                                  | `index.vue` + `useTableFooter.ts` + `defaults.ts`                                                                                                                                        |
| 7   | Separar lógica de `CellEdit` a composable                   | `useCellEdit.ts` existe; `index.vue` sin `ref(`/`computed(`/`watch(`                                                                                                                     |
| 8   | Migrar `FilterPanel` a `<script setup>` con composable      | `index.vue` sin `defineComponent`/`export default`; `useFilterPanel.ts` existe                                                                                                           |
| 9   | Corregir `dependencies`→`peerDependencies`                  | Los 6 renderizados en `peerDependencies`; `dependencies` solo `g-hooks`/`g-popper`/`g-utils`                                                                                             |
| 10  | Espejar el test existente                                   | `git show HEAD:...select-cell-renderer.spec.ts` trae el import correcto (`'../../../../src/...'`); diff del spec es un rename con una sola línea cambiada; suite verde en HEAD (2 tests) |

## Qué quedó a medias

Ninguna. La tarea 10 (única en el `tareas_a_medias` de la ronda 1) quedó cumplida en `4498168b`.

## Qué se hizo de más

Los mismos 4 de la ronda 1 — nada nuevo se sumó (`4498168b` es la propia tarea 10, `00b76800` es el
registro del reporte de la ronda 1):

1. **Commit `cf902d5d`** — 7 imports/paths de integración entre las 4 migraciones paralelas de la
   ola 1, que ningún ítem del plan pidió explícitamente pero eran necesarios para que quedaran
   integradas.
2. **Pasada de prettier** sobre `components/table/index.ts` y los 4 archivos de `cell-renderers/`
   que el plan solo iba a tocar por una ruta de import — sin cambios semánticos.
3. **Archivos fuera del `archivos:` declarado**: `shared/types/tableHeader.type.ts` y
   `shared/types/cellEdit.type.ts` (exigidos por `ds-types-location.md`, desvío legítimo) y
   `TableFooter/defaults.ts` (sin rule que lo fuerce, sin criterio explícito que lo cubra).
4. **`:key` del `v-for` en `TableFooter/index.vue`**: de `cellIndex` a `column.id` — gobernado por
   `render-performance.md`, no toca contrato público, pero el plan no lo pidió.

No se cuentan los restos sin commitear en el working tree de la sesión ajena (`.storybook/*`,
`package.json` raíz, `stories/button.stories.ts`, `.codegraph/`, `.cursor/`): confirmado que no
aparecen en `git diff def7f4c8..HEAD`.

## Con qué se probó

- **`calcifer check`**: exit 1, pero no por el diff — eslint limpio, y el paso `test` no corrió por
  falta de `GBP_PACKAGE_TOKEN` en el arnés de `calcifer` (la misma suite corre verde con el token).
- **Comandos del plan**: los 10 del checklist estructural coinciden; el vitest funcional coincide.
- **`vue-tsc --noEmit`** (extra, no declarado por el plan): 218 errores, 0 en `components/table` —
  todos matchers de `jest-dom` en tests de otros 14 componentes fuera de este diff.

## Observaciones para el plan (no bloquean este veredicto)

1. La verificación visual en Storybook es inverificable por construcción: su paso 1 exige una
   captura tomada _antes_ de migrar, que nadie tomó y ya no se puede reproducir.
2. `ds-types-location.md` prohíbe `export default` también en `use*.ts`; quedan 16 en
   `components/table/src`, incluidos dos tocados por la tarea 3 y uno creado por la tarea 5.
   Ninguna tarea lo declaró como criterio — no es incumplimiento, es una brecha entre lo que
   `proposal.md` promete y lo que `tasks.md` pidió verificar.

# Verificación · table-archetype-migration

```yaml
veredicto: pasa
ronda: 3
fecha: 2026-09-21
tareas_a_medias: []
cumplidas: 10/10
a_medias: 0
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
    obtenido: '2 archivos, 3 tests passed — el archivo y los 2 tests declarados pasan verbatim; el 3º es el test de regresión del fix 610de344 ("de más"), el número declarado quedó desactualizado'
    coincide: true
  - cmd: 'verificación visual en Storybook (pasos 1-3)'
    exit: null
    esperado: 'misma story, 0 errores nuevos en consola'
    obtenido: 'no ejecutable: exige una captura tomada antes de migrar, que ya no se puede reproducir'
    coincide: no_verificado
  - cmd: 'calcifer check'
    exit: 0
    esperado: 'no declarado por el plan'
    obtenido: 'eslint limpio; el paso test no corrió por falta de GBP_PACKAGE_TOKEN en el arnés de calcifer'
    coincide: no_verificado
  - cmd: 'GBP_PACKAGE_TOKEN=dummy yarn vitest run (suite completa, extra)'
    exit: 0
    esperado: 'no declarado por el plan'
    obtenido: '77 archivos, 552 tests passed'
    coincide: no_verificado
  - cmd: 'repro propia de la regresión de TableColumn (extra)'
    exit: 0
    esperado: 'no declarado por el plan'
    obtenido: '3/3: acceso anidado + columna plana → 2 th; columna agrupada descubre Grupo/A/B; sin slot no tira. El spec permanente falla con el TypeError original si se restaura el index.vue pre-fix'
    coincide: no_verificado
  - cmd: 'vue-tsc --noEmit -p tsconfig.json (extra, no declarado por el plan)'
    exit: 2
    esperado: 'no declarado por el plan'
    obtenido: '0 errores en components/table; el resto son matchers de jest-dom en tests de otros componentes fuera del diff'
    coincide: no_verificado
```

Sin `specs/` en el change: la línea de escenarios se omite.

## Qué se cumplió

Las 10 evidencias de la ronda 2 se revalidaron y siguen en pie. Sobre la tarea 5, que es la que
toca el fix de esta ronda: su `listo cuando` es puramente estructural y los tres puntos siguen
cumplidos — `TableColumn/index.vue` existe y sigue siendo SFC con `<script setup>`,
`cell-renderers/types.ts` está borrado, y `shared/types/cellRenderer.type.ts` exporta
`RenderCellData` y `CellRenderer`. El fix de `610de344` cambió el **contenido** del render, no
ninguno de los tres hechos que el criterio declara — no reabre la tarea 5.

## Qué quedó a medias

Ninguna.

## Qué se hizo de más

Los 4 ya juzgados legítimos en la ronda 2 (`shared/types/tableHeader.type.ts`,
`shared/types/cellEdit.type.ts`, `TableFooter/defaults.ts`, el `:key` de `TableFooter/index.vue`, y
el commit de integración `cf902d5d`), más uno nuevo:

5. **Commit `610de344`** — `TableColumn/index.vue` (restaura el try/catch + filtrado de hijos que
   `TableColumn/index.ts` tenía antes de la migración, vía `<component :is="renderColumnChildren" />`
   dentro de `<script setup>`) y `components/table/tests/components/TableColumn/index.spec.ts`
   (test de regresión nuevo). Ningún ítem del plan lo pidió — salió de `/calcifer:review`, que
   encontró y reprodujo una regresión real de comportamiento (un `TypeError` no capturado en
   cualquier cell template con acceso anidado a la fila). Es "de más" legítimo: tiene justificación
   en el commit, un comentario en el código, y su propio test — verificado de forma independiente
   por el subagente de review (4/4 casos) y por esta ronda (repro propia: 3/3, más restaurar el
   `index.vue` pre-fix y confirmar que el spec permanente sí falla con el `TypeError` original).

## Con qué se probó

- **`calcifer check`**: exit 0, eslint limpio sobre los 54 archivos del diff. El paso `test` no
  corrió por `GBP_PACKAGE_TOKEN` ausente en el arnés — se suplió corriendo la suite completa con el
  token: 77 archivos, 552 tests passed.
- **Repro propia de la regresión, no solo lo reportado**: se restauró el `index.vue` pre-fix
  (`git show 610de344^:...`) sobre el working tree y se corrió el spec permanente — **falla** con
  el mismo `TypeError` que encontró el review. Se restauró el fix (`git checkout --`) y se confirmó
  `git status` limpio. Además, una spec temporal propia (acceso anidado, columna agrupada, sin
  slot) dio 3/3 en verde.
- **`vue-tsc --noEmit`**: 0 errores en `components/table`.

## Observaciones para el plan (no bloquean este veredicto)

1. El `listo cuando` de tareas que migran un render a SFC (3, 4, 5, 6) es puramente estructural
   ("existe `index.vue`", "mismo comportamiento" sin nada que lo mida) — por eso la ronda 2 dio
   `pasa` con la regresión de `TableColumn` adentro. Un criterio de comportamiento (un test, o al
   menos "la story monta sin errores en consola") habría atrapado esto antes del review.
2. La verificación visual en Storybook sigue siendo inverificable por construcción (exige una
   captura previa a la migración que nadie tomó) — es la tercera ronda que va `no_verificado` por
   el mismo motivo, y es justo el hueco por donde pasó la regresión.
3. El número declarado del vitest (`1 archivo, 2 tests`) quedó desactualizado en cuanto se agregó
   el test de regresión — un criterio con conteo exacto se rompe con cualquier test nuevo legítimo.
4. Sigue en pie la observación de la ronda 2 sobre `export default` en `use*.ts` (`ds-types-location.md`),
   incluido `TableColumn/useTableColumn.ts:185` — ninguna tarea lo declaró como criterio.

# Tareas · Migrar `components/table` al arquetipo complejo

Este cambio no altera comportamiento — no hay `specs/` delta. El criterio es estructural.

- [x] **1 · Renombrar `table-layout.ts` y `store/helper.ts` (ds-naming)**
  - archivos: `components/table/src/shared/composables/table-layout.ts` (→ `tableLayout.ts`),
    `components/table/src/shared/store/helper.ts` (→ `table.store.ts`),
    `components/table/src/shared/store/index.ts`,
    `components/table/src/Table/useStyle.ts`, `components/table/src/Table/useTable.ts`,
    `components/table/src/shared/composables/useLayoutObserver.ts`
  - depende de: ninguna
  - listo cuando: no queda ningún archivo con "helper" en el nombre bajo `components/table/src`;
    `table-layout.ts` no existe, `tableLayout.ts` sí; los 4 archivos que lo importaban compilan sin
    cambiar su lógica
  - commit: `refactor(table): renombrar table-layout y store helper a ds-naming`

- [x] **2 · Limpiar `Table/`: scss duplicado y `export default`**
  - archivos: `components/table/src/Table/table.style.scss`,
    `components/table/src/Table/styles/table.scss` (eliminar carpeta `styles/`),
    `components/table/src/Table/defaults.ts`
  - depende de: ninguna
  - listo cuando: `components/table/src/Table/styles/` no existe; `Table/defaults.ts` no tiene
    `export default` (el objeto de props pasa a `export const tableProps`, con el mismo contenido)
  - commit: `refactor(table): eliminar scss duplicado y export default en Table/defaults.ts`

- [x] **3 · Migrar `TableHeader` a SFC**
  - archivos: `components/table/src/components/TableHeader/index.ts` (→ `index.vue`),
    `useEvent.ts`, `useStyle.ts`, `useUtils.ts` (se separa: `convertToRows`/`getAllColumns` pasan a
    `components/table/src/shared/utils/tableColumn.util.ts`, la parte reactiva pasa a un
    `useTableHeader.ts` que orquesta `useEvent`+`useStyle`+lo reactivo de `useUtils`)
  - depende de: ninguna
  - listo cuando: `TableHeader/index.ts` no existe; `TableHeader/index.vue` monta el mismo template
    (mismas props, emits, slots); ningún archivo de `TableHeader/` mezcla función pura con composable
    reactivo en el mismo archivo
  - commit: `refactor(table): migrar TableHeader a SFC`

- [x] **4 · Migrar `TableBody` a SFC y separar `TdWrapper`**
  - archivos: `components/table/src/components/TableBody/index.ts` (→ `index.vue`), `useEvents.ts`,
    `useRender.ts`, `useStyles.ts`, `defaults.ts`, `td-wrapper.vue` (→
    `components/table/src/components/TdWrapper/index.vue`)
  - depende de: ninguna
  - listo cuando: `TableBody/index.vue` existe con el mismo comportamiento; `td-wrapper.vue` ya no
    vive dentro de `TableBody/`, sino en su propia carpeta `TdWrapper/` (PascalCase, trío completo)
  - commit: `refactor(table): migrar TableBody a SFC y separar TdWrapper`

- [x] **5 · Migrar `TableColumn` a SFC y relocar `cellRenderer.type.ts`**
  - archivos: `components/table/src/components/TableColumn/index.ts` (→ `index.vue`), `defaults.ts`,
    `useRender.ts`, `useWatcher.ts`, `styles/table-column.scss` (→ `tableColumn.style.scss` junto a
    `index.vue`, eliminando la carpeta `styles/`), `cell-renderers/types.ts` (→
    `components/table/src/shared/types/cellRenderer.type.ts`), y el import de `types.ts` en
    `cell-renderers/{index.ts,input-cell-renderer.ts,select-cell-renderer.ts,cell-expansion-utils.ts}`
    (solo se actualiza la ruta del import, no se renombran esos 4 archivos)
  - depende de: ninguna
  - listo cuando: `TableColumn/index.vue` existe; no queda `types.ts` suelto en `cell-renderers/`;
    `shared/types/cellRenderer.type.ts` exporta `RenderCellData` y `CellRenderer`
  - commit: `refactor(table): migrar TableColumn a SFC y relocar cellRenderer.type.ts`

- [x] **6 · Migrar `TableFooter` a SFC**
  - archivos: `components/table/src/components/TableFooter/index.ts` (→ `index.vue`),
    `useMapState.ts`, `useStyle.ts`
  - depende de: ninguna
  - listo cuando: `TableFooter/index.vue` existe con el mismo comportamiento
  - commit: `refactor(table): migrar TableFooter a SFC`

- [x] **7 · Separar lógica de `CellEdit` a composable**
  - archivos: `components/table/src/components/CellEdit/index.vue`, nuevo `useCellEdit.ts`
  - depende de: ninguna
  - listo cuando: toda la lógica reactiva (`ref`/`computed`/`watch`/handlers) vive en `useCellEdit.ts`;
    `index.vue` queda con template + `<script setup>` que solo llama al composable; las clases
    Tailwind del template no se tocan (fuera de alcance, ver `proposal.md`)
  - commit: `refactor(table): separar lógica de CellEdit a composable`

- [x] **8 · Migrar `FilterPanel` a `<script setup>` con composable**
  - archivos: `components/table/src/components/FilterPanel/index.vue`, nuevo `useFilterPanel.ts`
  - depende de: ninguna
  - listo cuando: `FilterPanel` ya no usa `defineComponent`/`export default`/Options API; la lógica
    de `setup()` vive en `useFilterPanel.ts`; las clases `ns.b()/ns.e()/ns.is()` (ya BEM-compliant)
    no cambian
  - commit: `refactor(table): migrar FilterPanel a script setup con composable`

- [x] **9 · Corregir `dependencies`→`peerDependencies` en package.json**
  - archivos: `components/table/package.json`
  - depende de: ninguna
  - listo cuando: `@flash-global66/g-checkbox`, `g-icon-font`, `g-scrollbar`, `g-tooltip`, `g-select`,
    `g-input` están en `peerDependencies` (se renderizan directo en el template de algún elemento);
    solo lo que se usa sin renderizar (`g-hooks`, `g-utils`, y `g-popper` si se confirma que no se
    renderiza directo) queda en `dependencies`
  - commit: `fix(table): mover dependencias renderizadas a peerDependencies`

- [ ] **10 · Espejar el test existente**
  - archivos: `components/table/tests/select-cell-renderer.spec.ts` (→
    `components/table/tests/components/TableColumn/cell-renderers/select-cell-renderer.spec.ts`)
  - depende de: 5 (para no mover el spec dos veces si el import que testea cambia de ruta)
  - listo cuando: el spec vive en la ruta que espeja `src/`; su contenido y aserciones no cambian,
    solo su ubicación y los imports relativos que la ubicación nueva requiere
  - commit: `test(table): espejar select-cell-renderer.spec.ts a tests/`

## Cómo se verifica

**Nivel de cambio (checklist agregado de las 8 rules, todo debe dar 0/vacío):**

```bash
# 1. Ningún archivo *helper* bajo components/table/src (hoy: 1)
find components/table/src -iname "*helper*" | wc -l
# hoy: 1 (shared/store/helper.ts) → objetivo: 0

# 2. Ningún subcomponente en render-function sin justificación (hoy: 4)
grep -l "defineComponent" \
  components/table/src/components/TableHeader/index.ts \
  components/table/src/components/TableBody/index.ts \
  components/table/src/components/TableColumn/index.ts \
  components/table/src/components/TableFooter/index.ts 2>/dev/null | wc -l
# hoy: 4 (los 4 index.ts existen y usan defineComponent) → objetivo: 0 (esos 4 archivos ya no existen)

# 3. Los 4 subcomponentes tienen su index.vue
ls components/table/src/components/{TableHeader,TableBody,TableColumn,TableFooter}/index.vue | wc -l
# hoy: 0 → objetivo: 4

# 4. Sin scss duplicado
find components/table/src/Table/styles components/table/src/components/TableColumn/styles -type f 2>/dev/null | wc -l
# hoy: 2 (Table/styles/table.scss, TableColumn/styles/table-column.scss) → objetivo: 0

# 5. Sin export default en defaults.ts
grep -c "^export default" components/table/src/Table/defaults.ts
# hoy: 1 (línea 200) → objetivo: 0

# 6. types.ts relocado
test -f components/table/src/components/TableColumn/cell-renderers/types.ts && echo "sigue ahí" || echo "movido"
test -f components/table/src/shared/types/cellRenderer.type.ts && echo "existe" || echo "falta"
# hoy: "sigue ahí" / "falta" → objetivo: "movido" / "existe"

# 7. TdWrapper en su propia carpeta
test -f components/table/src/components/TableBody/td-wrapper.vue && echo "sigue anidado" || echo "movido"
test -f components/table/src/components/TdWrapper/index.vue && echo "existe" || echo "falta"
# hoy: "sigue anidado" / "falta" → objetivo: "movido" / "existe"

# 8. package.json: 0 deps de render directo mal ubicadas
node -e "const p=require('./components/table/package.json'); const rendered=['@flash-global66/g-checkbox','@flash-global66/g-icon-font','@flash-global66/g-scrollbar','@flash-global66/g-tooltip','@flash-global66/g-select','@flash-global66/g-input']; console.log(rendered.filter(d => p.dependencies && p.dependencies[d]).length)"
# hoy: 6 → objetivo: 0

# 9. Contrato público sin cambios (index.ts no debería tener diff, o solo rutas internas)
git diff def7f4c8..HEAD -- components/table/index.ts
# objetivo: vacío, o solo cambia una ruta interna de import, nunca un nombre exportado

# 10. Test espejado y en su lugar
test -f components/table/tests/components/TableColumn/cell-renderers/select-cell-renderer.spec.ts && echo "ok" || echo "falta"
# hoy: "falta" → objetivo: "ok"
```

**Verificación funcional real, con el paquete ya buildeado:**

```bash
GBP_PACKAGE_TOKEN=dummy yarn vitest run components/table/tests --reporter=basic
# hoy (dependencias ya buildeadas, corrido en esta sesión): 1 archivo, 2 tests passed
# objetivo tras las 10 tareas: el mismo archivo (ruta espejada por la tarea 10), 2 tests passed
```

**Verificación visual en Storybook, con el browser de la sesión** (alternativa a `browser-verify`,
bloqueada en este repo — ver `proposal.md`, "Encontrado de paso"):

1. Antes de tocar nada: levantar `yarn storybook` (puerto 6006), navegar a la story de `table`
   (`stories/table.stories.ts`), tomar una captura y anotar: filas visibles, orden de columnas, un
   sort, un filtro abierto, y un `cell-edit` en modo edición.
2. Después de aplicar las tareas: repetir la misma story, mismas interacciones, comparar contra la
   captura del paso 1. Revisar la consola del browser — 0 errores nuevos.
3. Esto reemplaza a `browser-verify` para el propósito de esta HU (confirmar que el refactor no
   rompió nada visible), pero no genera el reporte `PASS/FAILED/BLOCKED` de esa skill, porque exige
   el MCP de Playwright de Calcifer, no disponible en esta sesión.

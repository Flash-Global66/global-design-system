import type { Ref } from 'vue';
import { useEditableCell } from './useEditableCell';
import type {
  TableCellSelectCellOptions,
  UseTableCellSelectOptions,
} from '../types/tableCellSelect.type';

/**
 * Composable para celdas tipo select en GTable.
 * Reutiliza useEditableCell para el estado de edición y añade las opciones del select.
 * Devuelve cellOptions listos para pasar a GTableColumn con cell-type="select" y :cell-options="cellOptions".
 * La UI del select (GSelect) se renderiza siempre desde el UI system; no hace falta pasar ningún template ni slot.
 *
 * @example
 * // Opciones estáticas (mismo listado para todas las filas)
 * const { cellOptions } = useTableCellSelect(tableData, { options: statusOptions, useRowIndex: true })
 *
 * // Opciones dinámicas por fila
 * const { cellOptions } = useTableCellSelect(tableData, {
 *   getOptions: (row) => getOptionsForProduct(row.product),
 *   rowKey: 'id',
 * })
 */
export function useTableCellSelect<T extends Record<string, unknown>>(
  dataRef: Ref<T[]>,
  config: UseTableCellSelectOptions,
): { cellOptions: TableCellSelectCellOptions } {
  const {
    options = [],
    getOptions,
    label,
    useRowIndex,
    rowKey,
    expandColspan,
    expandDirection,
  } = config;
  const { getEditing, toggle, setEditing } = useEditableCell(dataRef, {
    useRowIndex,
    rowKey,
  });

  const cellOptions: TableCellSelectCellOptions = {
    options,
    getOptions,
    label,
    getEditing,
    toggle,
    setEditing,
    expandColspan,
    expandDirection,
  };

  return { cellOptions };
}

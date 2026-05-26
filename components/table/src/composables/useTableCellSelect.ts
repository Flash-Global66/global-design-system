import type { Ref } from 'vue'
import { useEditableCell } from './useEditableCell'

export interface TableCellSelectOption {
  value: string | number
  title?: string
  label?: string
  description?: string
  icon?: string
}

export type TableCellSelectGetOptions = (row: unknown) => TableCellSelectOption[]

export interface UseTableCellSelectOptions {
  /** Opciones estáticas del select (formato { value, title } o { value, label }). Se ignora si se provee getOptions. */
  options?: TableCellSelectOption[]
  /** Función que devuelve las opciones por fila. Tiene prioridad sobre options. */
  getOptions?: TableCellSelectGetOptions
  /** Label del select que se muestra sobre el componente en modo edición */
  label?: string
  /** Si true, la clave de edición usa el índice de fila (default cuando no hay rowKey) */
  useRowIndex?: boolean
  /** Propiedad de la fila usada como clave única; si se define, tiene prioridad sobre useRowIndex */
  rowKey?: string
  /** Número de columnas que abarca el overlay al expandir (>= 1) */
  expandColspan?: number
  /** Dirección de expansión del overlay: 'left' | 'right' */
  expandDirection?: 'left' | 'right'
}

export interface TableCellSelectCellOptions {
  options: TableCellSelectOption[]
  /** Función que devuelve las opciones por fila. Si está presente, el renderer la usa en lugar de options. */
  getOptions?: TableCellSelectGetOptions
  label?: string
  getEditing: (row: unknown, prop: string, index?: number) => boolean
  toggle: (row: unknown, prop: string, index?: number) => void
  setEditing: (key: string | null) => void
  /** Número de columnas que abarca el overlay al expandir (>= 1) */
  expandColspan?: number
  /** Dirección de expansión del overlay: 'left' | 'right' */
  expandDirection?: 'left' | 'right'
}

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
  config: UseTableCellSelectOptions
): { cellOptions: TableCellSelectCellOptions } {
  const { options = [], getOptions, label, useRowIndex, rowKey, expandColspan, expandDirection } =
    config
  const { getEditing, toggle, setEditing } = useEditableCell(dataRef, {
    useRowIndex,
    rowKey
  })

  const cellOptions: TableCellSelectCellOptions = {
    options,
    getOptions,
    label,
    getEditing,
    toggle,
    setEditing,
    expandColspan,
    expandDirection
  }

  return { cellOptions }
}

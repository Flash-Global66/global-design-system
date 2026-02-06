import { ref, type Ref } from 'vue'

export interface UseEditableCellOptions {
  useRowIndex?: boolean
  rowKey?: string
}

export interface EditableCellApi {
  getEditing: (row: unknown, prop: string, index?: number) => boolean
  toggle: (row: unknown, prop: string, index?: number) => void
  setEditing: (key: string | null) => void
}

/**
 * Composable interno que centraliza el estado "qué celda está en edición".
 * Devuelve getEditing, toggle y setEditing para que los wrappers por tipo
 * (useTableCellSelect, useTableCellInput, etc.) lo reutilicen.
 *
 * @internal Usado por useTableCellSelect, useTableCellInput, etc.
 */
export function useEditableCell<T extends Record<string, unknown>>(
  _dataRef: Ref<T[]>,
  options: UseEditableCellOptions = {}
): EditableCellApi {
  const editingCell = ref<string | null>(null)
  const { useRowIndex = true, rowKey } = options

  const getKey = (row: unknown, prop: string, index?: number): string => {
    if (rowKey && row && typeof row === 'object' && rowKey in row) {
      const keyVal = (row as Record<string, unknown>)[rowKey]
      return `${keyVal}-${prop}`
    }
    return `${index ?? -1}-${prop}`
  }

  const getEditing = (row: unknown, prop: string, index?: number): boolean =>
    editingCell.value === getKey(row, prop, index)

  const toggle = (row: unknown, prop: string, index?: number): void => {
    const key = getKey(row, prop, index)
    editingCell.value = editingCell.value === key ? null : key
  }

  const setEditing = (key: string | null): void => {
    editingCell.value = key
  }

  return { getEditing, toggle, setEditing }
}

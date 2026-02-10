import type { Ref } from 'vue'
import { useEditableCell } from './useEditableCell'
import { useTableCellValidation, type TableCellRule, type TableCellValidationApi } from './useTableCellValidation'

export interface UseTableCellInputOptions {
  /** Label del input */
  label?: string
  /** Placeholder cuando está vacío */
  placeholder?: string
  /** Texto accionable que se muestra cuando la celda está vacía. Al hacer click, activa el modo edición */
  emptyActionText?: string
  /** Tipo de input: text, number, etc. */
  type?: string
  /** Número de filas para textarea cuando está en modo edición. Si se especifica, el input se expande a múltiples filas y la fila completa crece verticalmente */
  rows?: number
  /** Si true, la clave de edición usa el índice de fila (default cuando no hay rowKey) */
  useRowIndex?: boolean
  /** Propiedad de la fila usada como clave única; si se define, tiene prioridad sobre useRowIndex */
  rowKey?: string
  /** Formateador opcional para el valor mostrado (recibe value, retorna string) */
  formatter?: (value: string | number, ...args: unknown[]) => string
  /** Parser opcional para el valor editado (recibe string, retorna string | number) */
  parser?: (value: string, ...args: unknown[]) => string | number
  /** Mensaje de error estático opcional (se ignora si hay rules configuradas) */
  messageError?: string
  /** Ancho expandido cuando está editando (en px). Si se proporciona, el wrapper se expande a este ancho */
  expandedWidth?: number | ((row: unknown, prop: string, index?: number) => number | undefined)
  /** Offset izquierdo cuando está editando (en px). Si se proporciona, el wrapper se mueve hacia la izquierda */
  leftOffset?: number | ((row: unknown, prop: string, index?: number) => number | undefined)
  /** Clases adicionales cuando está editando. Puede ser un string, objeto de clases, o función que retorna clases */
  editingClasses?: string | Record<string, boolean> | ((row: unknown, prop: string, index?: number) => string | Record<string, boolean>)
  /** Estilos adicionales cuando está editando. Puede ser un objeto de estilos o función que retorna estilos */
  editingStyles?: Record<string, string> | ((row: unknown, prop: string, index?: number) => Record<string, string>)
  /** Número de columnas que abarca el overlay al expandir (>= 1) */
  expandColspan?: number
  /** Dirección de expansión del overlay: 'left' | 'right' */
  expandDirection?: 'left' | 'right'
  /**
   * Reglas de validación (compatibles con async-validator y GForm).
   * @example
   * rules: [
   *   { required: true, message: 'Campo requerido', trigger: 'blur' },
   *   { type: 'email', message: 'Email inválido', trigger: 'change' }
   * ]
   */
  rules?: TableCellRule[]
  /** Callback cuando la validación falla */
  onValidationFailed?: (errors: unknown[], row: unknown, prop: string, index?: number) => void
  /** Callback cuando la validación es exitosa */
  onValidationSuccess?: (row: unknown, prop: string, index?: number) => void
}

export interface TableCellInputCellOptions {
  getEditing: (row: unknown, prop: string, index?: number) => boolean
  toggle: (row: unknown, prop: string, index?: number) => void
  setEditing: (key: string | null) => void
  label?: string
  placeholder?: string
  /** Texto accionable que se muestra cuando la celda está vacía */
  emptyActionText?: string
  type?: string
  rows?: number
  formatter?: (value: string | number, ...args: unknown[]) => string
  parser?: (value: string, ...args: unknown[]) => string | number
  /** Mensaje de error estático (ignorado si hay validación dinámica) */
  messageError?: string
  /** Ancho expandido cuando está editando (en px) */
  expandedWidth?: number | ((row: unknown, prop: string, index?: number) => number | undefined)
  /** Offset izquierdo cuando está editando (en px) */
  leftOffset?: number | ((row: unknown, prop: string, index?: number) => number | undefined)
  /** Clases adicionales cuando está editando */
  editingClasses?: string | Record<string, boolean> | ((row: unknown, prop: string, index?: number) => string | Record<string, boolean>)
  /** Estilos adicionales cuando está editando */
  editingStyles?: Record<string, string> | ((row: unknown, prop: string, index?: number) => Record<string, string>)
  /** Número de columnas que abarca el overlay al expandir (>= 1) */
  expandColspan?: number
  /** Dirección de expansión del overlay: 'left' | 'right' */
  expandDirection?: 'left' | 'right'
  /** API de validación (si hay rules configuradas) */
  validation?: TableCellValidationApi
  /** Reglas de validación */
  rules?: TableCellRule[]
}

/**
 * Composable para celdas tipo input en GTable.
 * Reutiliza useEditableCell para el estado de edición y añade opciones del input.
 * Soporta validación con reglas compatibles con async-validator y GForm.
 * Devuelve cellOptions listos para pasar a GTableColumn con cell-type="input" y :cell-options="cellOptions".
 * La UI (GInput) se renderiza desde el UI system; no hace falta template ni slot.
 *
 * @example
 * // Sin validación
 * const tableData = ref([...])
 * const { cellOptions } = useTableCellInput(tableData, { placeholder: 'Opcional', useRowIndex: true })
 *
 * @example
 * // Con validación
 * const { cellOptions } = useTableCellInput(tableData, {
 *   label: 'Email',
 *   rules: [
 *     { required: true, message: 'Email es requerido', trigger: 'blur' },
 *     { type: 'email', message: 'Email inválido', trigger: 'blur' }
 *   ],
 *   useRowIndex: true
 * })
 * // <g-table-column prop="email" label="Email" cell-type="input" :cell-options="cellOptions" />
 */
export function useTableCellInput<T extends Record<string, unknown>>(
  dataRef: Ref<T[]>,
  config: UseTableCellInputOptions
): { cellOptions: TableCellInputCellOptions; validation?: TableCellValidationApi } {
  const {
    label,
    placeholder,
    emptyActionText,
    type,
    rows,
    useRowIndex,
    rowKey,
    formatter,
    parser,
    messageError,
    expandedWidth,
    leftOffset,
    editingClasses,
    editingStyles,
    expandColspan,
    expandDirection,
    rules,
    onValidationFailed,
    onValidationSuccess
  } = config

  const { getEditing, toggle, setEditing } = useEditableCell(dataRef, {
    useRowIndex,
    rowKey
  })

  let validation: TableCellValidationApi | undefined
  if (rules && rules.length > 0) {
    validation = useTableCellValidation({
      rules,
      onValidationFailed,
      onValidationSuccess
    })
  }

  const cellOptions: TableCellInputCellOptions = {
    getEditing,
    toggle,
    setEditing,
    label,
    placeholder,
    emptyActionText,
    type,
    rows,
    formatter,
    parser,
    messageError,
    expandedWidth,
    leftOffset,
    editingClasses,
    editingStyles,
    expandColspan,
    expandDirection,
    validation,
    rules
  }

  return { cellOptions, validation }
}

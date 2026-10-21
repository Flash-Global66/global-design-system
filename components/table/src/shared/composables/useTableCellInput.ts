import type { Ref } from 'vue';
import { useEditableCell } from './useEditableCell';
import { useTableCellValidation } from './useTableCellValidation';
import type { TableCellValidationApi } from '../types/tableCellValidation.type';
import type {
  TableCellInputCellOptions,
  UseTableCellInputOptions,
} from '../types/tableCellInput.type';

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
  config: UseTableCellInputOptions,
): {
  cellOptions: TableCellInputCellOptions;
  validation?: TableCellValidationApi;
} {
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
    onValidationSuccess,
    preventCloseOnError,
  } = config;

  const { getEditing, toggle, setEditing } = useEditableCell(dataRef, {
    useRowIndex,
    rowKey,
  });

  let validation: TableCellValidationApi | undefined;
  if (rules && rules.length > 0) {
    validation = useTableCellValidation({
      rules,
      onValidationFailed,
      onValidationSuccess,
    });
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
    rules,
    preventCloseOnError,
  };

  return { cellOptions, validation };
}

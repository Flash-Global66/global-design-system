import type { ComponentPublicInstance, Ref, VNode } from 'vue';
import type { TableColumnCtx } from '../../../shared/types/tableColumn.type';
import type { TableCellValidationApi } from '../../../shared/types/tableCellValidation.type';

export interface RenderCellData {
  row: unknown;
  $index: number;
  column: TableColumnCtx<unknown>;
  cellIndex?: number;
  [key: string]: unknown;
}

export type TableEmit = (event: string, ...args: unknown[]) => void;

export type CellRendererTable = ComponentPublicInstance & {
  emit: TableEmit;
};

export type CellRenderer = (
  column: TableColumnCtx<unknown>,
  data: RenderCellData,
  cellOptions?: Record<string, unknown>,
  table?: CellRendererTable,
) => VNode | null;

export interface SelectOption {
  value: string | number;
  title?: string;
  label?: string;
  description?: string;
}

export interface InputCellConfig {
  prop: string;
  row: Record<string, unknown>;
  idx: number;
  colIndex: number;
  displayValue: string;
  isEditing: boolean;
  label: string;
  placeholder: string;
  emptyActionText: string;
  type: string;
  rows: number | undefined;
  formatter:
    | ((value: string | number, ...args: unknown[]) => string)
    | undefined;
  parser: ((value: string, ...args: unknown[]) => string | number) | undefined;
  messageError: string | undefined;
  isEmpty: boolean;
  expandColspan: number | undefined;
  expandDirection: 'left' | 'right' | undefined;
  validation: TableCellValidationApi | undefined;
  isValidationError: boolean;
  isValidating: boolean;
  validationMessage: string;
  expandedWidthOption:
    | number
    | ((row: unknown, prop: string, index?: number) => number | undefined)
    | undefined;
  leftOffsetOption:
    | number
    | ((row: unknown, prop: string, index?: number) => number | undefined)
    | undefined;
  editingClasses:
    | string
    | Record<string, boolean>
    | ((
        row: unknown,
        prop: string,
        index?: number,
      ) => string | Record<string, boolean>)
    | undefined;
  editingStyles:
    | Record<string, string>
    | ((row: unknown, prop: string, index?: number) => Record<string, string>)
    | undefined;
  setEditing: (key: string | null) => void;
  toggle: (row: unknown, prop: string, index?: number) => void;
  preventCloseOnError?: boolean;
  table?: { emit: TableEmit };
  column?: TableColumnCtx<unknown>;
  isAnyValidating: Ref<boolean>;
}

/**
 * Estado reactivo de las celdas `cell-type="input"`, aislado por instancia de tabla —
 * ver `useInputCellState`.
 */
export interface InputCellState {
  defaultEditingState: Ref<string | null>;
  isAnyValidating: Ref<boolean>;
}

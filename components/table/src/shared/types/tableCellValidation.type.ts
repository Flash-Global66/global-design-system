import type { RuleItem, ValidateError } from 'async-validator';

/**
 * Regla de validación para celdas de tabla.
 * Extiende RuleItem de async-validator añadiendo trigger.
 */
export interface TableCellRule extends RuleItem {
  /** Evento que dispara la validación: 'blur', 'change', o ambos */
  trigger?: 'blur' | 'change' | ('blur' | 'change')[];
}

export type TableCellValidateState = '' | 'error' | 'validating' | 'success';

export interface ValidationResult {
  valid: boolean;
  errors: ValidateError[] | null;
  message: string;
}

export interface CellValidationState {
  state: TableCellValidateState;
  message: string;
}

export interface UseTableCellValidationOptions {
  /** Reglas de validación */
  rules?: TableCellRule[];
  /** Callback cuando la validación falla */
  onValidationFailed?: (
    errors: ValidateError[],
    row: unknown,
    prop: string,
    index?: number,
  ) => void;
  /** Callback cuando la validación es exitosa */
  onValidationSuccess?: (row: unknown, prop: string, index?: number) => void;
}

export interface TableCellValidationApi {
  /** Valida un valor contra las reglas */
  validate: (
    value: unknown,
    row: unknown,
    prop: string,
    trigger?: string,
    index?: number,
  ) => Promise<ValidationResult>;
  /** Obtiene el estado de validación de una celda */
  getValidationState: (
    row: unknown,
    prop: string,
    index?: number,
  ) => CellValidationState;
  /** Limpia el estado de validación de una celda */
  clearValidation: (row: unknown, prop: string, index?: number) => void;
  /** Limpia todos los estados de validación */
  clearAllValidation: () => void;
  /** Las reglas de validación */
  rules: TableCellRule[];
}

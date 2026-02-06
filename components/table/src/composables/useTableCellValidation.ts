import { reactive } from 'vue'
import AsyncValidator from 'async-validator'
import type { RuleItem, ValidateError } from 'async-validator'

/**
 * Regla de validación para celdas de tabla.
 * Extiende RuleItem de async-validator añadiendo trigger.
 */
export interface TableCellRule extends RuleItem {
  /** Evento que dispara la validación: 'blur', 'change', o ambos */
  trigger?: 'blur' | 'change' | ('blur' | 'change')[]
}

export type TableCellValidateState = '' | 'error' | 'validating' | 'success'

export interface ValidationResult {
  valid: boolean
  errors: ValidateError[] | null
  message: string
}

export interface CellValidationState {
  state: TableCellValidateState
  message: string
}

export interface UseTableCellValidationOptions {
  /** Reglas de validación */
  rules?: TableCellRule[]
  /** Callback cuando la validación falla */
  onValidationFailed?: (errors: ValidateError[], row: unknown, prop: string, index?: number) => void
  /** Callback cuando la validación es exitosa */
  onValidationSuccess?: (row: unknown, prop: string, index?: number) => void
}

export interface TableCellValidationApi {
  /** Valida un valor contra las reglas */
  validate: (value: unknown, row: unknown, prop: string, trigger?: string, index?: number) => Promise<ValidationResult>
  /** Obtiene el estado de validación de una celda */
  getValidationState: (row: unknown, prop: string, index?: number) => CellValidationState
  /** Limpia el estado de validación de una celda */
  clearValidation: (row: unknown, prop: string, index?: number) => void
  /** Limpia todos los estados de validación */
  clearAllValidation: () => void
  /** Las reglas de validación */
  rules: TableCellRule[]
}

/**
 * Composable para validación de celdas editables en GTable.
 * Usa async-validator internamente, compatible con el sistema de validación de GForm.
 *
 * @example
 * const { validate, getValidationState, clearValidation } = useTableCellValidation({
 *   rules: [
 *     { required: true, message: 'Campo requerido', trigger: 'blur' },
 *     { type: 'email', message: 'Email inválido', trigger: 'change' }
 *   ]
 * })
 */
export function useTableCellValidation(
  options: UseTableCellValidationOptions = {}
): TableCellValidationApi {
  const { rules = [], onValidationFailed, onValidationSuccess } = options

  const validationStates = reactive<Map<string, CellValidationState>>(new Map())

  const getCellKey = (row: unknown, prop: string, index?: number): string => {
    if (row && typeof row === 'object') {
      const rowObj = row as Record<string, unknown>
      if ('id' in rowObj) return `${rowObj.id}-${prop}`
      if ('_id' in rowObj) return `${rowObj._id}-${prop}`
    }
    return `${index ?? -1}-${prop}`
  }

  const getFilteredRules = (trigger?: string): RuleItem[] => {
    if (!trigger) return rules.map(({ trigger: _, ...rule }) => rule)

    return rules
      .filter((rule) => {
        if (!rule.trigger) return true
        if (Array.isArray(rule.trigger)) {
          return rule.trigger.includes(trigger as 'blur' | 'change')
        }
        return rule.trigger === trigger
      })
      .map(({ trigger: _, ...rule }) => rule)
  }

  const validate = async (
    value: unknown,
    row: unknown,
    prop: string,
    trigger?: string,
    index?: number
  ): Promise<ValidationResult> => {
    const cellKey = getCellKey(row, prop, index)
    const filteredRules = getFilteredRules(trigger)

    if (filteredRules.length === 0) {
      validationStates.set(cellKey, { state: 'success', message: '' })
      return { valid: true, errors: null, message: '' }
    }

    validationStates.set(cellKey, { state: 'validating', message: '' })

    const validator = new AsyncValidator({
      [prop]: filteredRules
    })

    try {
      await validator.validate({ [prop]: value }, { firstFields: true })

      validationStates.set(cellKey, { state: 'success', message: '' })
      onValidationSuccess?.(row, prop, index)

      return { valid: true, errors: null, message: '' }
    } catch (error) {
      const { errors } = error as { errors: ValidateError[] }
      const message = errors?.[0]?.message ?? `${prop} es inválido`

      validationStates.set(cellKey, { state: 'error', message })
      onValidationFailed?.(errors, row, prop, index)

      return { valid: false, errors, message }
    }
  }

  const getValidationState = (row: unknown, prop: string, index?: number): CellValidationState => {
    const cellKey = getCellKey(row, prop, index)
    return validationStates.get(cellKey) ?? { state: '', message: '' }
  }

  const clearValidation = (row: unknown, prop: string, index?: number): void => {
    const cellKey = getCellKey(row, prop, index)
    validationStates.delete(cellKey)
  }

  const clearAllValidation = (): void => {
    validationStates.clear()
  }

  return {
    validate,
    getValidationState,
    clearValidation,
    clearAllValidation,
    rules
  }
}

import { h, Transition, ref, type VNode } from 'vue'
import { GInput } from '@flash-global66/g-input'
import type { TableColumnCtx } from '../defaults'
import type { RenderCellData } from './types'
import type { TableCellValidationApi } from '../../composables/useTableCellValidation'
import {
  calculateExpandedWidthSync,
  calculateLeftOffset,
  setActiveTableFromEvent,
  setCellOverflow
} from './cell-expansion-utils'

const defaultEditingState = ref<string | null>(null)

type TableEmit = (event: string, ...args: unknown[]) => void

interface InputCellConfig {
  prop: string
  row: Record<string, unknown>
  idx: number
  colIndex: number
  displayValue: string
  isEditing: boolean
  label: string
  placeholder: string
  emptyActionText: string
  type: string
  rows: number | undefined
  formatter: ((value: string | number, ...args: unknown[]) => string) | undefined
  parser: ((value: string, ...args: unknown[]) => string | number) | undefined
  messageError: string | undefined
  isEmpty: boolean
  expandColspan: number | undefined
  expandDirection: 'left' | 'right' | undefined
  validation: TableCellValidationApi | undefined
  isValidationError: boolean
  validationMessage: string
  expandedWidthOption: number | ((row: unknown, prop: string, index?: number) => number | undefined) | undefined
  leftOffsetOption: number | ((row: unknown, prop: string, index?: number) => number | undefined) | undefined
  editingClasses: string | Record<string, boolean> | ((row: unknown, prop: string, index?: number) => string | Record<string, boolean>) | undefined
  editingStyles: Record<string, string> | ((row: unknown, prop: string, index?: number) => Record<string, string>) | undefined
  setEditing: (key: string | null) => void
  toggle: (row: unknown, prop: string, index?: number) => void
  table?: { emit: TableEmit }
  column?: TableColumnCtx<unknown>
}

function getColumnIndex(column: TableColumnCtx<unknown>, data: RenderCellData): number {
  let colIndex = data.cellIndex
  if (colIndex === undefined && typeof column.getColumnIndex === 'function') {
    colIndex = column.getColumnIndex()
  }
  if (colIndex === undefined) {
    colIndex = column.no ?? 0
  }
  return colIndex
}

function computeExpansionMetrics(
  config: InputCellConfig,
  cacheKey: string
): { width: number | undefined; leftOffset: number | undefined } {
  if (!config.isEditing) {
    return { width: undefined, leftOffset: undefined }
  }

  let width: number | undefined
  if (config.expandedWidthOption) {
    width = typeof config.expandedWidthOption === 'function'
      ? config.expandedWidthOption(config.row, config.prop, config.idx)
      : config.expandedWidthOption
  } else {
    width = calculateExpandedWidthSync(config.prop, config.colIndex, cacheKey, config.expandColspan, config.expandDirection)
  }

  let leftOffset: number | undefined
  if (config.leftOffsetOption) {
    leftOffset = typeof config.leftOffsetOption === 'function'
      ? config.leftOffsetOption(config.row, config.prop, config.idx)
      : config.leftOffsetOption
  } else {
    leftOffset = calculateLeftOffset(config.colIndex, cacheKey, config.expandDirection, config.expandColspan)
  }

  return { width, leftOffset }
}

function createTextareaEditVNode(
  config: InputCellConfig,
  inputWrapperClass: string,
  handleBlur: () => Promise<void>
): VNode {
  const { label, displayValue, placeholder, isValidationError, messageError, rows, formatter, parser } = config
  const table = config.table
  const column = config.column

  const setValue = (v: string | number) => {
    const oldValue = config.prop ? config.row[config.prop] : undefined
    if (config.prop) {
      config.row[config.prop] = v
    }
    if (table?.emit && column) {
      table.emit('cell-edit-change', config.row, column, v, oldValue)
    }
    if (config.validation) {
      config.validation.validate(v, config.row, config.prop, 'change', config.idx).then((result) => {
        if (table?.emit && column) {
          table.emit('cell-edit-validate', config.row, column, { valid: result.valid, message: result.message })
        }
      })
    }
  }

  return h(
    'div',
    { class: `${inputWrapperClass} gui-table-cell-input-textarea-wrapper` },
    [
      label ? h('label', { class: 'gui-table-cell-input-label' }, label) : null,
      h('textarea', {
        class: `gui-table-cell-input-textarea ${isValidationError ? 'gui-table-cell-input-textarea--error' : ''}`,
        rows: rows,
        value: displayValue,
        placeholder,
        'aria-label': label || placeholder || 'Textarea input',
        'aria-invalid': isValidationError,
        onInput: (e: Event) => {
          const target = e.target as HTMLTextAreaElement
          let value = target.value
          if (formatter) {
            value = formatter(value)
          }
          if (parser) {
            const parsed = parser(value)
            setValue(typeof parsed === 'number' ? String(parsed) : parsed)
          } else {
            setValue(value)
          }
        },
        onBlur: handleBlur,
        onKeydown: (e: KeyboardEvent) => {
          if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
            e.preventDefault()
            handleBlur()
          }
        },
        onVnodeMounted: (vnode: VNode) => {
          const el = vnode.el as HTMLElement | null
          if (el && typeof el.focus === 'function') {
            el.focus()
          }
        }
      }),
      messageError ? h('div', { class: 'gui-table-cell-input-error' }, messageError) : null
    ].filter(Boolean)
  )
}

function createInputEditVNode(
  config: InputCellConfig,
  inputWrapperClass: string,
  handleBlur: () => Promise<void>
): VNode {
  const { label, displayValue, placeholder, type, isValidationError, messageError, formatter, parser } = config
  const table = config.table
  const column = config.column

  const setValue = (v: string | number) => {
    const oldValue = config.prop ? config.row[config.prop] : undefined
    if (config.prop) {
      config.row[config.prop] = v
    }
    if (table?.emit && column) {
      table.emit('cell-edit-change', config.row, column, v, oldValue)
    }
    if (config.validation) {
      config.validation.validate(v, config.row, config.prop, 'change', config.idx).then((result) => {
        if (table?.emit && column) {
          table.emit('cell-edit-validate', config.row, column, { valid: result.valid, message: result.message })
        }
      })
    }
  }

  return h(
    'div',
    { class: inputWrapperClass },
    [
      h(GInput as unknown as string, {
        label,
        modelValue: displayValue,
        placeholder,
        type: type === 'textarea' ? 'text' : type,
        formatter,
        parser,
        messageError,
        class: `w-full ${isValidationError ? 'gui-table-cell-input--error' : ''}`,
        'aria-invalid': isValidationError,
        'onUpdate:modelValue': (v: string | number) => setValue(v),
        onBlur: handleBlur,
        onKeydown: (e: KeyboardEvent) => {
          if (e.key === 'Enter') handleBlur()
        },
        onVnodeMounted: (vnode: VNode) => {
          if (vnode.el) {
            const el = vnode.el as HTMLElement
            const input = el.tagName === 'INPUT' ? el : el.querySelector('input')
            if (input && typeof (input as HTMLElement).focus === 'function') {
              (input as HTMLElement).focus()
            }
          }
        }
      })
    ]
  )
}

function createReadVNode(
  config: InputCellConfig
): VNode {
  const { displayValue, emptyActionText, isEmpty, isValidationError, validationMessage, isEditing } = config
  const table = config.table
  const column = config.column

  const errorReadClass = isValidationError ? 'gui-table-cell-input-read--error' : ''

  return h(
    'div',
    {
      class: `w-full h-full flex items-center justify-center cursor-pointer px-xs ${errorReadClass}`,
      role: 'button',
      tabIndex: 0,
      onClick: (e: MouseEvent) => {
        setActiveTableFromEvent(e)
        config.toggle(config.row, config.prop, config.idx)
        if (table?.emit && column) {
          table.emit('cell-edit-open', config.row, column)
        }
      },
      onKeydown: (e: KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          setActiveTableFromEvent(e)
          config.toggle(config.row, config.prop, config.idx)
          if (table?.emit && column) {
            table.emit('cell-edit-open', config.row, column)
          }
        }
      }
    },
    [
      h('div', { class: 'flex flex-col items-center w-full' }, [
        isEmpty && emptyActionText
          ? h(
              'span',
              { class: `font-medium text-3 line-clamp-2 text-center px-xs ${isValidationError ? 'text-error-def' : 'text-gray-500'}` },
              emptyActionText
            )
          : h(
              'span',
              { class: `font-medium text-3 line-clamp-2 text-center px-xs ${isValidationError ? 'text-error-def' : 'text-primary-txt'}` },
              displayValue
            ),
        isValidationError && validationMessage && !isEditing
          ? h('span', { class: 'text-error-def text-2 mt-xxs text-center px-xs' }, validationMessage)
          : null
      ].filter(Boolean))
    ]
  )
}

function computeWrapperClasses(
  config: InputCellConfig,
  cellWrapperClass: string,
  computedEditingClasses: string | Record<string, boolean> | undefined
): string {
  let wrapperClass = config.isEditing
    ? `${cellWrapperClass} gui-table-cell-input-wrapper gui-table-cell-input-editing hover:bg-everBlue-100 hover:bg-opacity-30`
    : `${cellWrapperClass} gui-table-cell-input-wrapper gui-table-cell-input-reading hover:bg-everBlue-100 hover:bg-opacity-30`

  if (config.isValidationError) {
    wrapperClass = `${wrapperClass} gui-table-cell-input-wrapper--error`
  }

  if (config.isEditing && computedEditingClasses) {
    if (typeof computedEditingClasses === 'string') {
      wrapperClass = `${wrapperClass} ${computedEditingClasses}`
    } else if (typeof computedEditingClasses === 'object') {
      const classEntries = Object.entries(computedEditingClasses)
        .filter(([, value]) => value)
        .map(([key]) => key)
      wrapperClass = `${wrapperClass} ${classEntries.join(' ')}`
    }
  }

  return wrapperClass
}

function computeWrapperStyles(
  config: InputCellConfig,
  computedExpandedWidth: number | undefined,
  computedLeftOffset: number | undefined,
  computedEditingStyles: Record<string, string> | undefined
): Record<string, string> {
  const wrapperStyle: Record<string, string> = {}

  if (config.isEditing && computedLeftOffset !== undefined) {
    wrapperStyle.left = `-${computedLeftOffset}px`
  }

  if (config.isEditing) {
    wrapperStyle.zIndex = '10'
  }

  if (config.isEditing && computedExpandedWidth !== undefined) {
    wrapperStyle.width = `${computedExpandedWidth}px`
  }

  if (computedEditingStyles) {
    Object.assign(wrapperStyle, computedEditingStyles)
  }

  return wrapperStyle
}

export function renderInputCell(
  column: TableColumnCtx<unknown>,
  data: RenderCellData,
  cellOptions?: Record<string, unknown>,
  table?: { emit: TableEmit }
): VNode {
  const co = cellOptions as Record<string, unknown> | undefined
  const prop = column.property
  const row = data.row as Record<string, unknown>
  const idx = data.$index
  const colIndex = getColumnIndex(column, data)

  const val = prop ? row[prop] : undefined
  const displayValue = val !== undefined && val !== null ? String(val) : ''

  const columnEmptyActionText = (column as unknown as Record<string, unknown>).emptyActionText as string | undefined

  let getEditing: (r: unknown, p: string, i?: number) => boolean
  let toggle: (r: unknown, p: string, i?: number) => void
  let setEditing: (key: string | null) => void

  if (co && typeof co.getEditing === 'function' && typeof co.toggle === 'function' && typeof co.setEditing === 'function') {
    getEditing = co.getEditing as (r: unknown, p: string, i?: number) => boolean
    toggle = co.toggle as (r: unknown, p: string, i?: number) => void
    setEditing = co.setEditing as (key: string | null) => void
  } else {
    const getKey = (r: unknown, p: string, i?: number): string => `${i ?? -1}-${p}`
    getEditing = (r: unknown, p: string, i?: number) => defaultEditingState.value === getKey(r, p, i)
    toggle = (r: unknown, p: string, i?: number) => {
      const key = getKey(r, p, i)
      defaultEditingState.value = defaultEditingState.value === key ? null : key
    }
    setEditing = (key: string | null) => {
      defaultEditingState.value = key
    }
  }

  const validation = co?.validation as TableCellValidationApi | undefined
  const hasValidation = validation && validation.rules && validation.rules.length > 0
  const validationState = hasValidation ? validation.getValidationState(row, prop, idx) : null
  const isValidationError = validationState?.state === 'error'
  const validationMessage = validationState?.message || ''

  const isEditing = getEditing(row, prop, idx)
  const columnInputLabel = (column as unknown as Record<string, unknown>).inputLabel as string | undefined
  const label = (co?.label as string) ?? columnInputLabel ?? ''
  const placeholder = (co?.placeholder as string) ?? ''
  const emptyActionText = (co?.emptyActionText as string) ?? columnEmptyActionText ?? placeholder ?? 'Click to add'
  const type = (co?.type as string) ?? 'text'
  const rows = co?.rows as number | undefined
  const formatter = co?.formatter as ((value: string | number, ...args: unknown[]) => string) | undefined
  const parser = co?.parser as ((value: string, ...args: unknown[]) => string | number) | undefined
  const staticMessageError = co?.messageError as string | undefined
  const messageError = isValidationError ? validationMessage : staticMessageError
  const isEmpty = !displayValue || displayValue.trim() === ''

  const expandColspanOption = co?.expandColspan as number | undefined
  const columnExpandColspan = (column as unknown as Record<string, unknown>).expandColspan as number | string | undefined
  const expandColspan = expandColspanOption ?? (columnExpandColspan ? Number(columnExpandColspan) : undefined)
  const expandDirectionOption = co?.expandDirection as 'left' | 'right' | undefined
  const columnExpandDirection = (column as unknown as Record<string, unknown>).expandDirection as string | undefined
  const expandDirection = expandDirectionOption ?? (columnExpandDirection === 'left' || columnExpandDirection === 'right' ? columnExpandDirection : undefined)

  const config: InputCellConfig = {
    prop,
    row,
    idx,
    colIndex,
    displayValue,
    isEditing,
    label,
    placeholder,
    emptyActionText,
    type,
    rows,
    formatter,
    parser,
    messageError,
    isEmpty,
    expandColspan,
    expandDirection,
    validation,
    isValidationError,
    validationMessage,
    expandedWidthOption: co?.expandedWidth as number | ((row: unknown, prop: string, index?: number) => number | undefined) | undefined,
    leftOffsetOption: co?.leftOffset as number | ((row: unknown, prop: string, index?: number) => number | undefined) | undefined,
    editingClasses: co?.editingClasses as string | Record<string, boolean> | ((row: unknown, prop: string, index?: number) => string | Record<string, boolean>) | undefined,
    editingStyles: co?.editingStyles as Record<string, string> | ((row: unknown, prop: string, index?: number) => Record<string, string>) | undefined,
    setEditing,
    toggle,
    table,
    column
  }

  const cacheKey = `${prop}-${colIndex}`
  const { width: computedExpandedWidth, leftOffset: computedLeftOffset } = computeExpansionMetrics(config, cacheKey)

  const computedEditingClasses = isEditing && config.editingClasses
    ? (typeof config.editingClasses === 'function' ? config.editingClasses(row, prop, idx) : config.editingClasses)
    : undefined
  const computedEditingStyles = isEditing && config.editingStyles
    ? (typeof config.editingStyles === 'function' ? config.editingStyles(row, prop, idx) : config.editingStyles)
    : undefined

  const handleBlur = async () => {
    if (hasValidation && validation) {
      const currentValue = prop ? row[prop] : undefined
      const result = await validation.validate(currentValue, row, prop, 'blur', idx)
      if (table?.emit && column) {
        table.emit('cell-edit-validate', row, column, { valid: result.valid, message: result.message })
      }
    }
    if (table?.emit && column) {
      table.emit('cell-edit-close', row, column)
    }
    setEditing(null)
  }

  const cellWrapperClass = isEditing && rows !== undefined && rows > 0
    ? 'absolute top-0 left-0 h-full w-full flex items-start justify-center transition-all duration-200 ease-in'
    : 'absolute top-0 left-0 h-full w-full flex items-center justify-center transition-all duration-200 ease-in'

  const inputWrapperClass = computedExpandedWidth !== undefined ? 'w-full px-xs' : 'w-11/12 px-xs'

  const editVNode = rows !== undefined && rows > 0
    ? createTextareaEditVNode(config, inputWrapperClass, handleBlur)
    : createInputEditVNode(config, inputWrapperClass, handleBlur)

  const readVNode = createReadVNode(config)

  const wrapperClass = computeWrapperClasses(config, cellWrapperClass, computedEditingClasses)
  const wrapperStyle = computeWrapperStyles(config, computedExpandedWidth, computedLeftOffset, computedEditingStyles)

  return h(
    'div',
    {
      class: wrapperClass,
      style: Object.keys(wrapperStyle).length > 0 ? wrapperStyle : undefined,
      onVnodeMounted: (vnode: VNode) => {
        if (vnode.el) setCellOverflow(vnode.el as HTMLElement, isEditing)
      },
      onVnodeUpdated: (vnode: VNode) => {
        if (vnode.el) setCellOverflow(vnode.el as HTMLElement, isEditing)
      }
    },
    [
      h(
        Transition,
        { name: 'gui-table-cell-edit', mode: 'out-in' },
        { default: () => (isEditing ? editVNode : readVNode) }
      )
    ]
  )
}

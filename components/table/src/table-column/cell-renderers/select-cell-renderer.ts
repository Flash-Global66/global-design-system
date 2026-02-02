import { h, Transition, nextTick, type VNode } from 'vue'
import { GSelect } from '@flash-global66/g-select'
import type { TableColumnCtx } from '../defaults'
import type { RenderCellData } from './types'
import {
  calculateExpandedWidthSync,
  calculateLeftOffset,
  setActiveTableFromEvent,
  setCellOverflow
} from './cell-expansion-utils'

interface SelectOption {
  value: string | number
  title?: string
  label?: string
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

function getSelectedLabel(options: SelectOption[], value: unknown): string {
  const strValue = String(value ?? '')
  const option = options.find((o) => String(o.value) === strValue)
  return option?.title ?? option?.label ?? strValue
}

type TableEmit = (event: string, ...args: unknown[]) => void

export function renderSelectCell(
  column: TableColumnCtx<unknown>,
  data: RenderCellData,
  cellOptions?: Record<string, unknown>,
  table?: { emit: TableEmit }
): VNode | null {
  const opts = (cellOptions?.options as SelectOption[]) || []
  const co = cellOptions as Record<string, unknown> | undefined
  const getEditing = co?.getEditing as ((r: unknown, p: string, i?: number) => boolean) | undefined
  const toggle = co?.toggle as ((r: unknown, p: string, i?: number) => void) | undefined
  const setEditing = co?.setEditing as ((key: string | null) => void) | undefined
  const prop = column.property
  const row = data.row
  const idx = data.$index
  const val = prop ? (row as Record<string, unknown>)[prop] : undefined
  const isEditing = getEditing?.(row, prop, idx) ?? false
  const selectedOptionLabel = getSelectedLabel(opts, val)

  const columnInputLabel = (column as unknown as Record<string, unknown>).inputLabel as string | undefined
  const fieldLabel = (co?.label as string) ?? columnInputLabel ?? undefined
  const columnEmptyActionText = (column as unknown as Record<string, unknown>).emptyActionText as string | undefined
  const emptyActionText = (co?.emptyActionText as string) ?? columnEmptyActionText ?? ''
  const isEmpty =
    val === undefined ||
    val === null ||
    (typeof val === 'string' && val.trim() === '')
  const displayText = isEmpty ? emptyActionText : selectedOptionLabel

  if (getEditing && toggle && setEditing) {
    const colIndex = getColumnIndex(column, data)

    const expandColspanOption = co?.expandColspan as number | undefined
    const columnExpandColspan = (column as unknown as Record<string, unknown>).expandColspan as number | string | undefined
    const expandColspan = expandColspanOption ?? (columnExpandColspan ? Number(columnExpandColspan) : undefined)
    const expandDirectionOption = co?.expandDirection as 'left' | 'right' | undefined
    const columnExpandDirection = (column as unknown as Record<string, unknown>).expandDirection as string | undefined
    const expandDirection = expandDirectionOption ?? (columnExpandDirection === 'left' || columnExpandDirection === 'right' ? columnExpandDirection : undefined)
    const cacheKey = `${prop}-${colIndex}`

    let computedExpandedWidth: number | undefined = undefined
    let computedLeftOffset: number | undefined = undefined

    if (isEditing) {
      const expandedWidthOption = co?.expandedWidth as number | undefined
      if (expandedWidthOption) {
        computedExpandedWidth = expandedWidthOption
      } else {
        computedExpandedWidth = calculateExpandedWidthSync(prop, colIndex, cacheKey, expandColspan, expandDirection)
      }

      const leftOffsetOption = co?.leftOffset as number | undefined
      if (leftOffsetOption) {
        computedLeftOffset = leftOffsetOption
      } else {
        computedLeftOffset = calculateLeftOffset(colIndex, cacheKey, expandDirection, expandColspan)
      }
    }

    const setValue = (v: string | number) => {
      const oldValue = prop ? (row as Record<string, unknown>)[prop] : undefined
      if (prop) (row as Record<string, unknown>)[prop] = v
      if (table?.emit && column) {
        table.emit('cell-edit-change', row, column, v, oldValue)
      }
    }
    const close = () => {
      if (table?.emit && column) {
        table.emit('cell-edit-close', row, column)
      }
      setEditing(null)
    }

    const editVNode = h(GSelect, {
      class: 'gui-table-cell-select w-full px-xs',
      modelValue: val,
      label: fieldLabel,
      automaticDropdown: true,
      options: opts,
      'onUpdate:modelValue': setValue,
      onBlur: close,
      onKeydown: (e: KeyboardEvent) => {
        if (e.key === 'Enter') close()
      },
      onVnodeMounted: (vnode: VNode) => {
        nextTick(() => {
          const component = vnode.component
          const proxy = component?.proxy as { focus?: () => void } | undefined
          if (proxy && typeof proxy.focus === 'function') {
            proxy.focus()
          } else if (vnode.el) {
            const el = vnode.el as HTMLElement
            const input = el.querySelector('input') || el.querySelector('select') || el
            if (input && typeof (input as HTMLElement).focus === 'function') {
              (input as HTMLElement).focus()
            }
          }
        })
      }
    })

    const readVNode = h(
      'div',
      {
        class: 'gui-table-cell-select-read w-full h-full flex items-center px-xs',
        role: 'button',
        tabIndex: 0,
        onClick: (e: MouseEvent) => {
          setActiveTableFromEvent(e)
          toggle(row, prop, idx)
          if (table?.emit && column) {
            table.emit('cell-edit-open', row, column)
          }
        },
        onKeydown: (e: KeyboardEvent) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setActiveTableFromEvent(e)
            toggle(row, prop, idx)
            if (table?.emit && column) {
              table.emit('cell-edit-open', row, column)
            }
          }
        }
      },
      displayText
    )

    const wrapperStyle: Record<string, string> = {}
    const wrapperClass = 'gui-table-cell-edit-wrapper absolute top-0 left-0 h-full w-full flex items-center justify-center transition-all duration-200 ease-in hover:bg-everBlue-100 hover:bg-opacity-30'

    if (isEditing) {
      wrapperStyle.zIndex = '10'
      if (computedLeftOffset !== undefined) {
        wrapperStyle.left = `-${computedLeftOffset}px`
      }
      if (computedExpandedWidth !== undefined) {
        wrapperStyle.width = `${computedExpandedWidth}px`
      }
    }

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

  return h(
    'select',
    {
      class: 'gui-table-cell-select',
      value: val,
      onChange: (e: Event) => {
        const t = e.target as HTMLSelectElement
        const v = t.value
        if (prop) (row as Record<string, unknown>)[prop] = v
      }
    },
    opts.map((o) =>
      h('option', { value: o.value, key: o.value }, o.title ?? o.label ?? String(o.value))
    )
  )
}

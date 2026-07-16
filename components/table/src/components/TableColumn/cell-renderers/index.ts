import type { TableColumnCtx } from '../defaults'
import type { RenderCellData } from './types'
import { renderSelectCell } from './select-cell-renderer'
import { renderInputCell } from './input-cell-renderer'

type TableInstance = import('vue').ComponentPublicInstance & { emit: (event: string, ...args: unknown[]) => void }

const cellRenderers: Record<string, (column: TableColumnCtx<unknown>, data: RenderCellData, cellOptions?: Record<string, unknown>, table?: TableInstance) => import('vue').VNode | null> = {
  select: renderSelectCell,
  input: renderInputCell
}

export function renderCellByType(
  cellType: string,
  column: TableColumnCtx<unknown>,
  data: RenderCellData,
  cellOptions?: Record<string, unknown>,
  table?: TableInstance
): import('vue').VNode | null {
  const renderer = cellRenderers[cellType]
  return renderer ? renderer(column, data, cellOptions, table) : null
}

export type { RenderCellData, CellRenderer } from './types'
export { renderSelectCell } from './select-cell-renderer'
export { renderInputCell } from './input-cell-renderer'

import type { VNode } from 'vue'
import type { TableColumnCtx } from '../defaults'

export interface RenderCellData {
  row: unknown
  $index: number
  column: TableColumnCtx<unknown>
  cellIndex?: number
  [key: string]: unknown
}

export type CellRenderer = (
  column: TableColumnCtx<unknown>,
  data: RenderCellData,
  cellOptions?: Record<string, unknown>
) => VNode | null

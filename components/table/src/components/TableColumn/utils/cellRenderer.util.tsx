import type { VNode } from 'vue';
import type { TableColumnCtx } from '../../../shared/types/tableColumn.type';
import type {
  CellRenderer,
  CellRendererTable,
  RenderCellData,
} from '../types/cellRenderer.type';
import { renderSelectCell } from './selectCellRenderer.util';
import { renderInputCell } from './inputCellRenderer.util';

const cellRenderers: Record<string, CellRenderer> = {
  select: renderSelectCell,
  input: renderInputCell,
};

/**
 * Pinta la celda según `cellType` (`select`, `input`). Devuelve `null` si el tipo no tiene
 * renderer, para que la columna caiga en su render por defecto.
 */
export function renderCellByType(
  cellType: string,
  column: TableColumnCtx<unknown>,
  data: RenderCellData,
  cellOptions?: Record<string, unknown>,
  table?: CellRendererTable,
): VNode | null {
  const renderer = cellRenderers[cellType];
  return renderer ? renderer(column, data, cellOptions, table) : null;
}

// @ts-nocheck
import type { VNode } from 'vue';
import type {
  TableOverflowTooltipFormatter,
  TableOverflowTooltipOptions,
} from '../utils/table.util';

type CI<T> = { column: TableColumnCtx<T>; $index: number };

type Filters = {
  text: string;
  value: string;
}[];

type FilterMethods<T> = (value, row: T, column: TableColumnCtx<T>) => void;

interface TableColumnCtx<T> {
  id: string;
  realWidth: number;
  type: string;
  label: string;
  className: string;
  labelClassName: string;
  property: string;
  prop: string;
  width: string | number;
  minWidth: string | number;
  renderHeader: (data: CI<T>) => VNode;
  sortable: boolean | string;
  sortMethod: (a: T, b: T) => number;
  sortBy: string | ((row: T, index: number) => string) | string[];
  resizable: boolean;
  columnKey: string;
  rawColumnKey: string;
  align: string;
  headerAlign: string;
  showOverflowTooltip?: boolean | TableOverflowTooltipOptions;
  tooltipFormatter?: TableOverflowTooltipFormatter<T>;
  fixed: boolean | string;
  formatter: (
    row: T,
    column: TableColumnCtx<T>,
    cellValue,
    index: number,
  ) => VNode | string;
  selectable: (row: T, index: number) => boolean;
  reserveSelection: boolean;
  filterMethod: FilterMethods<T>;
  filteredValue: string[];
  filters: Filters;
  filterPlacement: string;
  filterMultiple: boolean;
  filterClassName: string;
  index: number | ((index: number) => number);
  sortOrders: ('ascending' | 'descending' | null)[];
  renderCell: (data: any) => void;
  colSpan: number;
  rowSpan: number;
  children: TableColumnCtx<T>[];
  level: number;
  filterable: boolean | FilterMethods<T> | Filters;
  order: string;
  isColumnGroup: boolean;
  isSubColumn: boolean;
  columns: TableColumnCtx<T>[];
  getColumnIndex: () => number;
  no: number;
  filterOpened?: boolean;
  /** Tipo de celda: 'select' pinta un select cuando no hay slot default */
  cellType?: string;
  /** Opciones por tipo; para 'select': { options: { value, title }[] } */
  cellOptions?: Record<string, unknown>;
  /** Número de columnas que abarca el overlay al expandir (celdas editables); >= 1 */
  expandColspan?: number;
  /** Dirección de expansión del overlay: 'left' | 'right' */
  expandDirection?: 'left' | 'right';
}

export type { Filters, FilterMethods, TableColumnCtx };

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import type { ComponentSize } from '@flash-global66/g-utils';
import type { CSSProperties, ComponentInternalInstance, Ref, VNode } from 'vue';
import type { Nullable } from '@flash-global66/g-utils';
import type { Store } from '../store/mutations.store';
import type { TableColumnCtx } from './tableColumn.type';
import type { TableLayout } from '../store/tableLayout.store';
import type {
  TableOverflowTooltipFormatter,
  TableOverflowTooltipOptions,
} from './tableOverflowTooltip.type';

export type DefaultRow = any;

interface TableRefs {
  tableWrapper: HTMLElement;
  headerWrapper: HTMLElement;
  footerWrapper: HTMLElement;
  fixedBodyWrapper: HTMLElement;
  rightFixedBodyWrapper: HTMLElement;
  bodyWrapper: HTMLElement;
  appendWrapper: HTMLElement;
  [key: string]: any;
}

interface TableState {
  isGroup: Ref<boolean>;
  resizeState: Ref<{
    width: any;
    height: any;
  }>;
  doLayout: () => void;
  debouncedUpdateLayout: () => void;
}

interface TreeProps {
  hasChildren?: string;
  children?: string;
  checkStrictly?: boolean;
}

type HoverState<T> = Nullable<{
  cell: HTMLElement;
  column: TableColumnCtx<T>;
  row: T;
}>;

type RIS<T> = { row: T; $index: number; store: Store<T>; expanded: boolean };

type RenderExpanded<T> = ({
  row,
  $index,
  store,
  expanded: boolean,
}: RIS<T>) => VNode;

type SummaryMethod<T> = (data: {
  columns: TableColumnCtx<T>[];
  data: T[];
}) => (string | VNode)[];

interface Table<T> extends ComponentInternalInstance {
  $ready: boolean;
  hoverState?: HoverState<T>;
  renderExpanded: RenderExpanded<T>;
  store: Store<T>;
  layout: TableLayout<T>;
  refs: TableRefs;
  tableId: string;
  state: TableState;
}

type ColumnCls<T> = string | ((data: { row: T; rowIndex: number }) => string);
type ColumnStyle<T> =
  | CSSProperties
  | ((data: { row: T; rowIndex: number }) => CSSProperties);
type CellCls<T> =
  | string
  | ((data: {
      row: T;
      rowIndex: number;
      column: TableColumnCtx<T>;
      columnIndex: number;
    }) => string);
type CellStyle<T> =
  | CSSProperties
  | ((data: {
      row: T;
      rowIndex: number;
      column: TableColumnCtx<T>;
      columnIndex: number;
    }) => CSSProperties);
type Layout = 'fixed' | 'auto';
interface TableProps<T> {
  data: T[];
  size?: ComponentSize;
  width?: string | number;
  height?: string | number;
  maxHeight?: string | number;
  /**
   * Ancho mínimo en px del área scrollable de la tabla (suma efectiva del `<table>`).
   * Tras el layout normal, si el valor parseado es mayor que el ancho calculado, se fuerza ese mínimo
   * y se activa scroll horizontal cuando el contenedor es más estrecho.
   */
  scrollMinWidth?: string | number;
  fit?: boolean;
  stripe?: boolean;
  border?: boolean;
  rowKey?: string | ((row: T) => string);
  context?: Table<T>;
  showHeader?: boolean;
  showSummary?: boolean;
  sumText?: string;
  summaryMethod?: SummaryMethod<T>;
  rowClassName?: ColumnCls<T>;
  rowStyle?: ColumnStyle<T>;
  cellClassName?: CellCls<T>;
  cellStyle?: CellStyle<T>;
  headerRowClassName?: ColumnCls<T>;
  headerRowStyle?: ColumnStyle<T>;
  headerCellClassName?: CellCls<T>;
  headerCellStyle?: CellStyle<T>;
  highlightCurrentRow?: boolean;
  currentRowKey?: string | number;
  emptyText?: string;
  expandRowKeys?: string[];
  defaultExpandAll?: boolean;
  defaultSort?: Sort;
  tooltipEffect?: string;
  tooltipOptions?: TableOverflowTooltipOptions;
  spanMethod?: (data: {
    row: T;
    rowIndex: number;
    column: TableColumnCtx<T>;
    columnIndex: number;
  }) =>
    | number[]
    | {
        rowspan: number;
        colspan: number;
      }
    | undefined;
  selectOnIndeterminate?: boolean;
  indent?: number;
  treeProps?: TreeProps;
  lazy?: boolean;
  load?: (row: T, treeNode: TreeNode, resolve: (data: T[]) => void) => void;
  className?: string;
  style?: CSSProperties;
  tableLayout?: Layout;
  scrollbarAlwaysOn?: boolean;
  flexible?: boolean;
  showOverflowTooltip?: boolean | TableOverflowTooltipOptions;
  tooltipFormatter?: TableOverflowTooltipFormatter<T>;
  appendFilterPanelTo?: string;
  scrollbarTabindex?: number | string;
}

type TableTooltipData<T = any> = Parameters<
  TableOverflowTooltipFormatter<T>
>[0];

interface Sort {
  prop: string;
  order: 'ascending' | 'descending';
  init?: any;
  silent?: any;
}

interface Filter<T> {
  column: TableColumnCtx<T>;
  values: string[];
  silent: any;
}

interface TreeNode {
  expanded?: boolean;
  loading?: boolean;
  noLazyChildren?: boolean;
  indent?: number;
  level?: number;
  display?: boolean;
}

interface RenderRowData<T> {
  store: Store<T>;
  _self: Table<T>;
  column: TableColumnCtx<T>;
  row: T;
  $index: number;
  treeNode?: TreeNode;
  expanded: boolean;
}

export type {
  SummaryMethod,
  Table,
  TableProps,
  TableRefs,
  ColumnCls,
  ColumnStyle,
  CellCls,
  CellStyle,
  TreeNode,
  RenderRowData,
  Sort,
  Filter,
  TreeProps,
  TableTooltipData,
  Layout,
};

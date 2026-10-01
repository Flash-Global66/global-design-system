// @ts-nocheck
import type { VNode } from 'vue';
import type { Store } from '../../../shared/store/mutations.store';
import type {
  ColumnCls,
  ColumnStyle,
  Table,
} from '../../../shared/types/table.type';
import type { TableOverflowTooltipOptions } from '../../../shared/types/tableOverflowTooltip.type';

interface TableBodyProps<T> {
  store: Store<T>;
  stripe?: boolean;
  context: Table<T>;
  rowClassName: ColumnCls<T>;
  rowStyle: ColumnStyle<T>;
  fixed: string;
  highlight: boolean;
  tooltipEffect?: string;
  tooltipOptions?: TableOverflowTooltipOptions;
}

export interface TableBodyCellDescriptor {
  key: string;
  style: Record<string, unknown>;
  class: string;
  rowspan: number;
  colspan: number;
  onMouseenter: (event: MouseEvent) => void;
  onMouseleave: (event: MouseEvent) => void;
  render: () => VNode;
}

export interface TableBodyRowDescriptor {
  type: 'row';
  key: string | number;
  style: unknown;
  class: string[];
  onDblclick: (event: Event) => void;
  onClick: (event: Event) => void;
  onContextmenu: (event: Event) => void;
  onMouseenter: () => void;
  onMouseleave: () => void;
  cells: TableBodyCellDescriptor[];
}

export interface TableBodyExpandedRowDescriptor {
  type: 'expanded';
  key: string;
  style: Record<string, string>;
  colspan: number;
  cellClass: string;
  render: () => VNode;
}

export type TableBodyTrDescriptor =
  | TableBodyRowDescriptor
  | TableBodyExpandedRowDescriptor;

export type { TableBodyProps };

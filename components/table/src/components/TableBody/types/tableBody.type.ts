// @ts-nocheck
import type { Store } from '../../../shared/store/mutations.store';
import type {
  ColumnCls,
  ColumnStyle,
  Table,
} from '../../../shared/types/table.type';
import type { TableOverflowTooltipOptions } from '../../../shared/utils/table.util';

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

export type { TableBodyProps };

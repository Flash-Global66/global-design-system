import type { VNode } from 'vue';
import type { GTooltipProps } from '@flash-global66/g-tooltip';
import type { TableColumnCtx } from './tableColumn.type';

export type TableOverflowTooltipOptions = Partial<
  Pick<
    GTooltipProps,
    | 'appendTo'
    | 'effect'
    | 'enterable'
    | 'hideAfter'
    | 'offset'
    | 'placement'
    | 'popperClass'
    | 'popperOptions'
    | 'showAfter'
    | 'showArrow'
    | 'transition'
  >
>;

export type TableOverflowTooltipFormatter<T = any> = (data: {
  row: T;
  column: TableColumnCtx<T>;
  cellValue: unknown;
}) => VNode | string;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import type { PropType } from 'vue';
import type { Store } from '../../shared/store';
import type { DefaultRow, Sort, SummaryMethod } from '../../Table/defaults';

export interface TableFooterProps<T> {
  fixed: string;
  store: Store<T>;
  summaryMethod: SummaryMethod<T>;
  sumText: string;
  border: boolean;
  defaultSort: Sort;
}

export const tableFooterProps = {
  fixed: {
    type: String,
    default: '',
  },
  store: {
    required: true,
    type: Object as PropType<TableFooterProps<DefaultRow>['store']>,
  },
  summaryMethod: Function as PropType<
    TableFooterProps<DefaultRow>['summaryMethod']
  >,
  sumText: String,
  border: Boolean,
  defaultSort: {
    type: Object as PropType<TableFooterProps<DefaultRow>['defaultSort']>,
    default: () => {
      return {
        prop: '',
        order: '',
      };
    },
  },
};

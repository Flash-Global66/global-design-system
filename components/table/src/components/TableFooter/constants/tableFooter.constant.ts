// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import type { PropType } from 'vue';
import type { DefaultRow } from '../../../shared/types/table.type';
import type { TableFooterProps } from '../types/tableFooter.type';

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

// @ts-nocheck
import type { PropType } from 'vue';
import type { DefaultRow } from '../../../shared/types/table.type';
import type { TableBodyProps } from '../types/tableBody.type';

export const tableBodyProps = {
  store: {
    required: true,
    type: Object as PropType<TableBodyProps<DefaultRow>['store']>,
  },
  stripe: Boolean,
  tooltipEffect: String,
  tooltipOptions: {
    type: Object as PropType<TableBodyProps<DefaultRow>['tooltipOptions']>,
  },
  context: {
    default: () => ({}),
    type: Object as PropType<TableBodyProps<DefaultRow>['context']>,
  },
  rowClassName: [String, Function] as PropType<
    TableBodyProps<DefaultRow>['rowClassName']
  >,
  rowStyle: [Object, Function] as PropType<
    TableBodyProps<DefaultRow>['rowStyle']
  >,
  fixed: {
    type: String,
    default: '',
  },
  highlight: Boolean,
};

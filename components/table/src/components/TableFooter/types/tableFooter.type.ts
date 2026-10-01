// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import type { Store } from '../../../shared/store/mutations.store';
import type { Sort, SummaryMethod } from '../../../shared/types/table.type';

export interface TableFooterProps<T> {
  fixed: string;
  store: Store<T>;
  summaryMethod: SummaryMethod<T>;
  sumText: string;
  border: boolean;
  defaultSort: Sort;
}

import type { ComponentInternalInstance, Ref } from 'vue';
import type { Sort } from '../../Table/defaults';
import type { Store } from '../store';

export interface TableHeader extends ComponentInternalInstance {
  state: {
    onColumnsChange: (layout: unknown) => void;
    onScrollableChange: (layout: unknown) => void;
  };
  filterPanels: Ref<unknown>;
}

export interface TableHeaderProps<T> {
  fixed: string;
  store: Store<T>;
  border: boolean;
  defaultSort: Sort;
  allowDragLastColumn: boolean;
}

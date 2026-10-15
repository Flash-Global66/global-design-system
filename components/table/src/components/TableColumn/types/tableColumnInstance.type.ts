// @ts-nocheck
import type { ComponentInternalInstance, Ref, VNode } from 'vue';
import type { Table } from '../../../shared/types/table.type';
import type { TableColumnCtx } from '../../../shared/types/tableColumn.type';

type ValueOf<T> = T[keyof T];

interface TableColumn<T> extends ComponentInternalInstance {
  vnode: {
    vParent: TableColumn<T> | Table<T>;
  } & VNode;
  vParent: TableColumn<T> | Table<T>;
  columnId: string;
  columnConfig: Ref<Partial<TableColumnCtx<T>>>;
}

export type { TableColumn, ValueOf };

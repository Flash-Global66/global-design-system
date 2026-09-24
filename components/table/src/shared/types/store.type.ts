import type { Ref } from 'vue';

export interface WatcherPropsData<T> {
  data: Ref<T[]>;
  rowKey: Ref<string>;
}

export type StoreFilter = Record<string, string[]>;

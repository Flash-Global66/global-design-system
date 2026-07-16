import type { InjectionKey } from 'vue';
import type { DefaultRow, Table } from '../../Table/defaults';

export const TABLE_INJECTION_KEY: InjectionKey<Table<DefaultRow>> =
  Symbol.for('GTable');

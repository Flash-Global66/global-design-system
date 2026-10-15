import type { InjectionKey } from 'vue';
import type { DefaultRow, Table } from '../types/table.type';

export const TABLE_INJECTION_KEY: InjectionKey<Table<DefaultRow>> =
  Symbol.for('GTable');

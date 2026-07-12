import type { InjectionKey } from 'vue';
import type { FormContext, FormItemContext } from './types';

export const formContextKey: InjectionKey<FormContext> =
  Symbol.for('formContextKey');
export const formItemContextKey: InjectionKey<FormItemContext> =
  Symbol.for('formItemContextKey');

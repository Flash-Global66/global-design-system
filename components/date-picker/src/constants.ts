import type { InjectionKey, SetupContext } from 'vue';
import type { NamespaceHelpers } from '@flash-global66/g-utils';

interface DatePickerContext {
  slots: SetupContext['slots'];
  pickerNs: NamespaceHelpers;
}

export const ROOT_PICKER_INJECTION_KEY: InjectionKey<DatePickerContext> =
  Symbol.for('rootPickerInjection');

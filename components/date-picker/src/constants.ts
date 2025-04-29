import type { InjectionKey, SetupContext } from "vue";
import type { UseNamespaceReturn } from "element-plus";

interface DatePickerContext {
  slots: SetupContext["slots"];
  pickerNs: UseNamespaceReturn;
}

export const ROOT_PICKER_INJECTION_KEY: InjectionKey<DatePickerContext> =
  Symbol();

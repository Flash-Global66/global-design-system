import { computed, inject, ref, unref } from "vue";
import { useGlobalSize, useProp } from "element-plus";
import { formContextKey, formItemContextKey } from "../constants";

import type { ComponentSize } from "element-plus";
import type { MaybeRef } from "@vueuse/core";

export const useFormDisabled = (fallback?: MaybeRef<boolean | undefined>) => {
  const disabled = useProp<boolean>("disabled");
  const form = inject(formContextKey, undefined);
  return computed(
    () => disabled.value || unref(fallback) || form?.disabled || false
  );
};

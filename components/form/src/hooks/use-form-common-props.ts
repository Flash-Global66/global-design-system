import { computed, inject, unref } from 'vue';
import { useProp } from '@flash-global66/g-hooks';
import { formContextKey } from '../constants';

import type { MaybeRef } from '@vueuse/core';

export const useFormDisabled = (fallback?: MaybeRef<boolean | undefined>) => {
  const disabled = useProp<boolean>('disabled');
  const form = inject(formContextKey, undefined);
  return computed(
    () => disabled.value || unref(fallback) || form?.disabled || false,
  );
};

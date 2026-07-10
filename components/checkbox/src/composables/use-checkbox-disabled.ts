import { computed, inject } from 'vue';
import { useFormDisabled } from '@flash-global66/g-form';
import { isUndefined } from '@flash-global66/g-utils';
import { checkboxGroupContextKey } from '../constants';

import type { CheckboxModel, CheckboxStatus } from './index';

export const useCheckboxDisabled = ({
  model,
  isChecked,
}: Pick<CheckboxModel, 'model'> & Pick<CheckboxStatus, 'isChecked'>) => {
  const checkboxGroup = inject(checkboxGroupContextKey, undefined);

  const isLimitDisabled = computed(() => {
    const max = checkboxGroup?.max?.value;
    const min = checkboxGroup?.min?.value;
    return (
      (!isUndefined(max) && model.value.length >= max && !isChecked.value) ||
      (!isUndefined(min) && model.value.length <= min && isChecked.value)
    );
  });

  const isDisabled = useFormDisabled(
    computed(() => checkboxGroup?.disabled.value || isLimitDisabled.value),
  );

  return {
    isDisabled,
    isLimitDisabled,
  };
};

export type CheckboxDisabled = ReturnType<typeof useCheckboxDisabled>;

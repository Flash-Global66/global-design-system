import { useFormItem, useFormItemInputId } from '@flash-global66/g-form'
import { isArray } from 'element-plus/es/utils/index.mjs'
import { useCheckboxDisabled } from './use-checkbox-disabled'
import { useCheckboxEvent } from './use-checkbox-event'
import { useCheckboxModel } from './use-checkbox-model'
import { useCheckboxStatus } from './use-checkbox-status'
import type { ComponentInternalInstance } from 'vue'

import type { CheckboxProps } from '../checkbox'

export const useCheckbox = (props: CheckboxProps, slots: ComponentInternalInstance['slots']) => {
  const { formItem: elFormItem } = useFormItem()
  const { model, isGroup, isLimitExceeded } = useCheckboxModel(props)
  const { actualValue, currentRipple, hasOwnLabel, isChecked, isFocused } =
    useCheckboxStatus(props, slots, { model })
  const { isDisabled } = useCheckboxDisabled({ model, isChecked })
  const { inputId, isLabeledByFormItem } = useFormItemInputId(props, {
    formItemContext: elFormItem,
    disableIdGeneration: hasOwnLabel,
    disableIdManagement: isGroup
  })
  const { handleChange, onClickRoot } = useCheckboxEvent(props, {
    model,
    isLimitExceeded,
    hasOwnLabel,
    isDisabled,
    isLabeledByFormItem
  })

  const setStoreValue = () => {
    function addToStore() {
      if (isArray(model.value) && !model.value.includes(actualValue.value)) {
        model.value.push(actualValue.value)
      } else {
        model.value = props.trueValue ?? true
      }
    }
    props.checked && addToStore()
  }

  setStoreValue()

  return {
    actualValue,
    currentRipple,
    handleChange,
    hasOwnLabel,
    inputId,
    isChecked,
    isDisabled,
    isFocused,
    isLabeledByFormItem,
    model,
    onClickRoot
  }
}

import { computed, getCurrentInstance, inject, nextTick, watch } from 'vue'
import { useFormItem, useFormItemInputId } from '@flash-global66/g-form/index.js'
import { debugWarn } from 'element-plus/es/utils/index.mjs'
import { checkboxGroupContextKey } from '../constants'

import type { CheckboxProps } from '../checkbox'
import type { CheckboxDisabled, CheckboxModel, CheckboxStatus } from '.'

export const useCheckboxEvent = (
  props: CheckboxProps,
  {
    model,
    isLimitExceeded,
    hasOwnLabel,
    isDisabled,
    isLabeledByFormItem
  }: Pick<CheckboxModel, 'model' | 'isLimitExceeded'> &
    Pick<CheckboxStatus, 'hasOwnLabel'> &
    Pick<CheckboxDisabled, 'isDisabled'> &
    Pick<ReturnType<typeof useFormItemInputId>, 'isLabeledByFormItem'>
) => {
  const checkboxGroup = inject(checkboxGroupContextKey, undefined)
  const { formItem } = useFormItem()
  const { emit } = getCurrentInstance()!

  function getLabeledValue(value: string | number | boolean) {
    return [true, props.trueValue].includes(value)
      ? props.trueValue ?? true
      : props.falseValue ?? false
  }

  function emitChangeEvent(checked: string | number | boolean, e: InputEvent | MouseEvent) {
    emit('change', getLabeledValue(checked), e)
  }

  function handleChange(e: Event) {
    if (isLimitExceeded.value) return

    const target = e.target as HTMLInputElement
    emit('change', getLabeledValue(target.checked), e)
  }

  async function onClickRoot(e: MouseEvent) {
    if (isLimitExceeded.value) return

    if (!hasOwnLabel.value && !isDisabled.value && isLabeledByFormItem.value) {
      // fix: https://github.com/element-plus/element-plus/issues/9981
      const eventTargets: EventTarget[] = e.composedPath()
      const hasLabel = eventTargets.some((item) => (item as HTMLElement).tagName === 'LABEL')
      if (!hasLabel) {
        model.value = getLabeledValue([false, props.falseValue].includes(model.value))
        await nextTick()
        emitChangeEvent(model.value, e)
      }
    }
  }

  const validateEvent = computed(() => checkboxGroup?.validateEvent || props.validateEvent)

  watch(
    () => props.modelValue,
    () => {
      if (validateEvent.value) {
        formItem?.validate('change').catch((err) => debugWarn(err))
      }
    }
  )

  return {
    handleChange,
    onClickRoot
  }
}

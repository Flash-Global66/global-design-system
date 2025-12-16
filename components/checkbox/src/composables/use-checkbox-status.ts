import { computed, isRef, ref, toRaw, watch, onBeforeUnmount } from 'vue'
import { isEqual } from 'lodash-unified'
import { isArray, isBoolean, isObject, isPropAbsent } from 'element-plus/es/utils/index.mjs'

import type { ComponentInternalInstance } from 'vue'
import type { CheckboxProps } from '../checkbox'
import type { CheckboxModel } from './index'

export const useCheckboxStatus = (
  props: CheckboxProps,
  slots: ComponentInternalInstance['slots'],
  { model }: Pick<CheckboxModel, 'model'>
) => {
  const isFocused = ref(false)
  const currentRipple = ref('')
  let rippleTimeoutId: number | null = null

  const actualValue = computed(() => {
    // In version 2.x, if there's no props.value, props.label will act as props.value
    // In version 3.x, remove this computed value, use props.value instead.
    if (!isPropAbsent(props.value)) {
      return props.value
    }
    return props.label
  })

  // Función helper para manejar lógica de arrays
  const checkArrayContainsValue = (array: unknown[], targetValue: unknown): boolean => {
    const rawArray = array.map(toRaw)
    const rawTarget = isRef(targetValue) ? toRaw(targetValue.value) : targetValue

    return isObject(rawTarget)
      ? rawArray.some((item) => isEqual(item, toRaw(rawTarget)))
      : rawArray.includes(rawTarget)
  }

  const hasOwnLabel = computed<boolean>(() => {
    return !!slots.default || !isPropAbsent(actualValue.value)
  })

  const isChecked = computed<boolean>(() => {
    const value = model.value

    if (isBoolean(value)) return value
    if (isArray(value)) return checkArrayContainsValue(value, actualValue.value)
    if (value != null) return value === props.trueValue

    return Boolean(value)
  })

  watch(isChecked, (newValue) => {
    if (rippleTimeoutId !== null) {
      clearTimeout(rippleTimeoutId)
    }

    currentRipple.value = newValue ? 'expand' : 'contract'

    rippleTimeoutId = setTimeout(() => {
      currentRipple.value = ''
      rippleTimeoutId = null
    }, 500)
  })

  onBeforeUnmount(() => {
    if (rippleTimeoutId !== null) {
      clearTimeout(rippleTimeoutId)
      rippleTimeoutId = null
    }
  })

  return {
    actualValue,
    hasOwnLabel,
    isChecked,
    isFocused,
    currentRipple
  }
}

export type CheckboxStatus = ReturnType<typeof useCheckboxStatus>

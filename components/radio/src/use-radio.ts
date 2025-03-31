import { computed, inject, ref, watch } from 'vue'
import { UPDATE_MODEL_EVENT } from 'element-plus'
import { useFormDisabled } from '@flash-global66/g-form'
import { isPropAbsent } from 'element-plus/es/utils/index.mjs'
import { radioGroupKey } from './constants'

import type { SetupContext } from 'vue'
import type { RadioEmits, RadioProps } from './radio'

export const useRadio = (props: RadioProps, emit?: SetupContext<RadioEmits>['emit']) => {
  const radioRef = ref<HTMLInputElement>()
  const currentRipple = ref('')
  const radioGroup = inject(radioGroupKey, undefined)
  const isGroup = computed(() => !!radioGroup)
  const actualValue = computed(() => {
    // In version 2.x, if there's no props.value, props.label will act as props.value
    // In version 3.x, remove this computed value, use props.value instead.
    if (!isPropAbsent(props.value)) {
      return props.value
    }
    return props.label
  })
  const modelValue = computed<RadioProps['modelValue']>({
    get() {
      return isGroup.value ? radioGroup!.modelValue : props.modelValue!
    },
    set(val) {
      if (isGroup.value) {
        radioGroup!.changeEvent(val)
      } else {
        emit && emit(UPDATE_MODEL_EVENT, val)
      }
      const valueChecked = props.modelValue === actualValue.value
      radioRef.value!.checked = valueChecked
      if (!valueChecked) currentRipple.value = 'expand'
    }
  })

  watch(
    () => currentRipple.value,
    () => {
      setTimeout(() => {
        currentRipple.value = ''
      }, 500)
    }
  )

  const disabled = useFormDisabled(computed(() => radioGroup?.disabled))
  const focus = ref(false)
  const tabIndex = computed(() => {
    return disabled.value || (isGroup.value && modelValue.value !== actualValue.value) ? -1 : 0
  })

  return {
    actualValue,
    currentRipple,
    disabled,
    focus,
    isGroup,
    modelValue,
    radioGroup,
    radioRef,
    tabIndex
  }
}

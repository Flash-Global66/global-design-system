<template>
  <div
    :id="groupId"
    ref="radioGroupRef"
    :class="compKls"
    role="radiogroup"
    :aria-label="!isLabeledByFormItem ? ariaLabel || 'radio-group' : undefined"
    :aria-labelledby="isLabeledByFormItem ? formItem!.labelId : undefined"
  >
    <g-radio
      v-if="props.options.length > 0"
      v-for="item in props.options"
      :key="String(item.value)"
      :value="item.value"
      :label="item?.label ?? item.value"
      :disabled="item?.disabled"
    />
    <slot v-else />
  </div>
</template>

<script lang="ts" setup>
import { computed, nextTick, onMounted, provide, reactive, ref, toRefs, watch } from 'vue'
import { useFormItem, useFormItemInputId } from '@flash-global66/g-form'
import { UPDATE_MODEL_EVENT, useId, useNamespace } from 'element-plus'
import { debugWarn } from 'element-plus/es/utils/index.mjs'
import { radioGroupEmits, radioGroupProps } from './radio-group'
import { radioGroupKey } from './constants'
import { GRadio } from '../index'

import type { RadioGroupProps } from './radio-group'
import { klsByType } from './radio-group.types'

defineOptions({
  name: 'GuiRadioGroup'
})

const props = defineProps(radioGroupProps)
const emit = defineEmits(radioGroupEmits)

const ns = useNamespace('radio')
const radioId = useId()
const radioGroupRef = ref<HTMLDivElement>()
const { formItem } = useFormItem()
const { inputId: groupId, isLabeledByFormItem } = useFormItemInputId(props, {
  formItemContext: formItem
})

const changeEvent = (value: RadioGroupProps['modelValue']) => {
  emit(UPDATE_MODEL_EVENT, value)
  nextTick(() => emit('change', value))
}

onMounted(() => {
  const radios = radioGroupRef.value!.querySelectorAll<HTMLInputElement>('[type=radio]')
  const firstLabel = radios[0]
  if (!Array.from(radios).some((radio) => radio.checked) && firstLabel) {
    firstLabel.tabIndex = 0
  }
})

const name = computed(() => {
  return props.name || radioId.value
})

const klsByLayout: klsByType = {
  horizontal: 'flex flex-row gap-4',
  vertical: 'flex flex-col gap-4 items-start'
}

const compKls = computed(() => {
  return [ns.b('group'), klsByLayout[props.layout]]
})

provide(
  radioGroupKey,
  reactive({
    ...toRefs(props),
    changeEvent,
    name
  })
)

watch(
  () => props.modelValue,
  () => {
    if (props.validateEvent) {
      formItem?.validate('change').catch((err) => debugWarn(err))
    }
  }
)
</script>

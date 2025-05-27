<template>
  <component
    :is="tag"
    :id="groupId"
    :class="compKls"
    role="group"
    :aria-label="!isLabeledByFormItem ? ariaLabel || 'checkbox-group' : undefined"
    :aria-labelledby="isLabeledByFormItem ? formItem?.labelId : undefined"
  >
    <g-checkbox
      v-if="props.options.length > 0"
      v-for="item in props.options"
      :key="String(item.value)"
      :value="item.value"
      :label="item?.label ?? item.value"
      :disabled="item?.disabled"
      :checked="item?.checked"
      :isBoxed="props.isBoxed"
    />
    <slot v-else />
  </component>
</template>

<script lang="ts" setup>
import { computed, nextTick, onMounted, provide, toRefs, watch } from 'vue'
import { pick } from 'lodash-unified'
import { GCheckbox } from '../index'
import { UPDATE_MODEL_EVENT, useNamespace } from 'element-plus'
import { debugWarn } from 'element-plus/es/utils/index.mjs'
import { useFormItem, useFormItemInputId } from '@flash-global66/g-form'

import { checkboxGroupEmits, checkboxGroupProps } from './checkbox-group'
import { checkboxGroupContextKey } from './constants'
import type { CheckboxGroupValueType, klsByType } from './checkbox-group.types'

defineOptions({
  name: 'GuiCheckboxGroup'
})

const props = defineProps(checkboxGroupProps)
const emit = defineEmits(checkboxGroupEmits)
const ns = useNamespace('checkbox')

const { formItem } = useFormItem()
const { inputId: groupId, isLabeledByFormItem } = useFormItemInputId(props, {
  formItemContext: formItem
})

const changeEvent = async (value: CheckboxGroupValueType | CheckboxGroupValueType[]) => {
  emit(UPDATE_MODEL_EVENT, value)
  await nextTick()
  emit('change', value)
}

const modelValue = computed({
  get() {
    return props.modelValue
  },
  set(val: CheckboxGroupValueType | CheckboxGroupValueType[]) {
    changeEvent(val)
  }
})

const klsByLayout: klsByType = {
  horizontal: 'flex flex-row gap-4',
  vertical: 'flex flex-col gap-4'
}

const compKls = computed(() => {
  return [ns.b('group'), klsByLayout[props.layout]]
})

provide(checkboxGroupContextKey, {
  ...pick(toRefs(props), ['min', 'max', 'disabled', 'validateEvent']),
  modelValue,
  changeEvent
})

onMounted(() => {
  const checkedValues = props.options
    .filter((item) => item.checked)
    .map((item) => item.value)
  
  if (checkedValues.length > 0) {
    modelValue.value = checkedValues as CheckboxGroupValueType
  }
})

watch(
  () => props.modelValue,
  () => {
    if (props.validateEvent) {
      formItem?.validate?.('change').catch((err) => debugWarn(err))
    }
  }
)
</script>

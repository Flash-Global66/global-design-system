<template>
  <component
    :is="!hasOwnLabel && isLabeledByFormItem ? 'span' : 'label'"
    :class="compKls"
    :aria-controls="indeterminate ? ariaControls : null"
    @click="onClickRoot"
  >
    <span :class="spanKls">
      <input
        v-if="trueValue || falseValue"
        :id="inputId"
        v-model="model"
        :class="ns.e('original')"
        type="checkbox"
        :indeterminate="indeterminate"
        :name="name"
        :tabindex="tabindex"
        :disabled="isDisabled"
        :true-value="trueValue ?? true"
        :false-value="falseValue ?? false"
        @change="handleChange"
        @focus="isFocused = true"
        @blur="isFocused = false"
        @click.stop
      />
      <input
        v-else
        :id="inputId"
        v-model="model"
        :class="ns.e('original')"
        type="checkbox"
        :indeterminate="indeterminate"
        :disabled="isDisabled"
        :value="actualValue"
        :name="name"
        :tabindex="tabindex"
        @change="handleChange"
        @focus="isFocused = true"
        @blur="isFocused = false"
        @click.stop
      />
      <span :class="ns.e('inner')">
        <span class="hover-effect">
          <span class="ripple" :class="currentRipple" />
        </span>
      </span>
    </span>
    <span v-if="hasOwnLabel" :class="ns.e('label')">
      <slot />
      <template v-if="!$slots.default">
        {{ label }}
      </template>
    </span>
  </component>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue'
import { useNamespace } from 'element-plus'
import { checkboxEmits, checkboxProps } from './checkbox'
import { useCheckbox } from './composables'

defineOptions({
  name: 'GuiCheckbox'
})

const props = defineProps(checkboxProps)
defineEmits(checkboxEmits)
const slots = useSlots()

const {
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
} = useCheckbox(props, slots)

const ns = useNamespace('checkbox')

const compKls = computed(() => {
  return [
    ns.b(),
    ns.is('disabled', isDisabled.value),
    ns.is('checked', isChecked.value),
  ]
})

const spanKls = computed(() => {
  return [
    ns.e('input'),
    ns.is('disabled', isDisabled.value),
    ns.is('checked', isChecked.value),
    ns.is('indeterminate', props.indeterminate),
    ns.is('focus', isFocused.value),
  ]
})
</script>

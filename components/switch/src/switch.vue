<template>
  <div :class="switchKls" @click.prevent="switchValue">
    <input
      :id="inputId"
      ref="input"
      :class="ns.e('input')"
      type="checkbox"
      role="switch"
      :aria-checked="checked"
      :aria-disabled="switchDisabled"
      :aria-label="ariaLabel"
      :name="name"
      :true-value="activeValue"
      :false-value="inactiveValue"
      :disabled="switchDisabled"
      :tabindex="tabindex"
      @change="handleChange"
      @keydown.enter="switchValue"
    />
    <span
      v-if="!inlinePrompt && (inactiveIcon || inactiveText)"
      :class="labelLeftKls"
    >
      <g-icon-font v-if="inactiveIcon" :name="inactiveIcon" />
      <span v-if="!inactiveIcon && inactiveText" :aria-hidden="checked">
        {{ inactiveText }}
      </span>
    </span>
    <span ref="core" :class="ns.e('core')" :style="coreStyle">
      <div v-if="inlinePrompt" :class="ns.e('inner')">
        <template v-if="activeIcon || inactiveIcon">
          <g-icon-font :name="checked ? activeIcon : inactiveIcon" :class="ns.is('icon')" />
        </template>
        <template v-else-if="activeText || inactiveText">
          <span :class="ns.is('text')" :aria-hidden="!checked">
            {{ checked ? activeText : inactiveText }}
          </span>
        </template>
      </div>
      <div :class="ns.e('action')">
        <g-icon-font v-if="loading" name="solid spinner" spin :class="ns.is('loading')" />
        <slot v-else-if="checked" name="active-action">
          <g-icon-font v-if="activeActionIcon" :name="activeActionIcon" />
        </slot>
        <slot v-else-if="!checked" name="inactive-action">
          <g-icon-font v-if="inactiveActionIcon" :name="inactiveActionIcon" />
        </slot>
      </div>
    </span>
    <span
      v-if="!inlinePrompt && (activeIcon || activeText)"
      :class="labelRightKls"
    >
      <g-icon-font v-if="activeIcon" :name="activeIcon" />
      <span v-if="!activeIcon && activeText" :aria-hidden="!checked">{{
        activeText
      }}</span>
    </span>
  </div>
</template>

<script lang="ts" setup>
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import {
  addUnit,
  debugWarn,
  isBoolean,
  isPromise,
  throwError,
} from 'element-plus/es/utils/index'
import { GIconFont } from '@flash-global66/g-icon-font'
import {
  useFormDisabled,
  useFormSize,
  useNamespace,
} from 'element-plus'
import {
  useFormItem,
  useFormItemInputId,
} from '@flash-global66/g-form'
import {
  CHANGE_EVENT,
  INPUT_EVENT,
  UPDATE_MODEL_EVENT,
} from './constants'
import { switchEmits, switchProps } from './switch'
import type { CSSProperties } from 'vue'

const COMPONENT_NAME = 'GSwitch'
defineOptions({
  name: COMPONENT_NAME,
})

const props = defineProps(switchProps)
const emit = defineEmits(switchEmits)

const { formItem } = useFormItem()
const switchSize = useFormSize()
const ns = useNamespace('switch')

const { inputId } = useFormItemInputId(props, {
  formItemContext: formItem,
})

const switchDisabled = useFormDisabled(computed(() => props.loading))
const isControlled = ref(props.modelValue !== false)
const input = ref<HTMLInputElement>()
const core = ref<HTMLSpanElement>()

const switchKls = computed(() => [
  ns.b(),
  ns.m(switchSize.value),
  ns.is('disabled', switchDisabled.value),
  ns.is('checked', checked.value),
])

const labelLeftKls = computed(() => [
  ns.e('label'),
  ns.em('label', 'left'),
  ns.is('active', !checked.value),
])

const labelRightKls = computed(() => [
  ns.e('label'),
  ns.em('label', 'right'),
  ns.is('active', checked.value),
])

const coreStyle = computed<CSSProperties>(() => ({
  width: addUnit(props.width),
}))

watch(
  () => props.modelValue,
  () => {
    isControlled.value = true
  }
)

const actualValue = computed(() => {
  return isControlled.value ? props.modelValue : false
})

const checked = computed(() => actualValue.value === props.activeValue)

if (![props.activeValue, props.inactiveValue].includes(actualValue.value)) {
  emit(UPDATE_MODEL_EVENT, props.inactiveValue)
  emit(CHANGE_EVENT, props.inactiveValue)
  emit(INPUT_EVENT, props.inactiveValue)
}

watch(checked, (val) => {
  input.value!.checked = val

  if (props.validateEvent) {
    formItem?.validate?.('change').catch((err) => debugWarn(err))
  }
})

const handleChange = () => {
  const val = checked.value ? props.inactiveValue : props.activeValue
  emit(UPDATE_MODEL_EVENT, val)
  emit(CHANGE_EVENT, val)
  emit(INPUT_EVENT, val)
  nextTick(() => {
    input.value!.checked = checked.value
  })
}

const switchValue = () => {
  if (switchDisabled.value) return

  const { beforeChange } = props
  if (!beforeChange) {
    handleChange()
    return
  }

  const shouldChange = beforeChange()

  const isPromiseOrBool = [
    isPromise(shouldChange),
    isBoolean(shouldChange),
  ].includes(true)
  if (!isPromiseOrBool) {
    throwError(
      COMPONENT_NAME,
      'beforeChange must return type `Promise<boolean>` or `boolean`'
    )
  }

  if (isPromise(shouldChange)) {
    shouldChange
      .then((result) => {
        if (result) {
          handleChange()
        }
      })
      .catch((e) => {
        debugWarn(COMPONENT_NAME, `some error occurred: ${e}`)
      })
  } else if (shouldChange) {
    handleChange()
  }
}

const focus = (): void => {
  input.value?.focus?.()
}

onMounted(() => {
  input.value!.checked = checked.value
})

defineExpose({
  /**
   *  @description manual focus to the switch component
   **/
  focus,
  /**
   * @description whether Switch is checked
   */
  checked,
})
</script>

<template>
  <div
    :class="[containerKls]"
    :style="containerStyle"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div
      ref="wrapperRef"
      :class="ns.e('wrapper')"
      @click="isEvent ? emit('click', $event) : undefined"
    >
      <div ref="prefixRef" :class="ns.e('prefix')">
        <slot name="prefix">
          <g-icon-font
            v-if="prefixIcon"
            :class="[ns.e('icon'), ns.e('prefix-icon')]"
            :name="prefixIcon"
          />
        </slot>
      </div>

      <div v-if="label" :class="[ns.e('label')]" :style="labelStyle">
        {{ label }}
      </div>

      <input
        :id="inputId"
        ref="input"
        :class="[ns.e('inner')]"
        v-bind="attrs"
        :minlength="minlength"
        :maxlength="maxlength"
        :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
        :disabled="inputDisabled"
        :readonly="readonly || loading || isEvent"
        :autocomplete="autocomplete"
        :tabindex="tabindex"
        :aria-label="ariaLabel"
        :placeholder="placeholder"
        :form="form"
        :autofocus="autofocus"
        :role="containerRole"
        @compositionstart="handleCompositionStart"
        @compositionupdate="handleCompositionUpdate"
        @compositionend="handleCompositionEnd"
        @input="handleInput"
        @change="handleChange"
        @keydown="handleKeydown"
      />

      <!-- suffix slot -->
      <slot name="suffix">
        <span :class="ns.e('suffix')">
          <g-icon-font
            v-if="suffixIcon && !showPassword && !loading"
            :class="[ns.e('icon'), ns.e('suffix-icon')]"
            :name="suffixIcon"
          />

          <g-icon-font
            v-if="showPassword"
            :class="[ns.e('icon'), ns.e('icon-password')]"
            :name="passwordIcon"
            @click="handlePasswordVisible"
          />

          <g-icon-font
            v-if="loading"
            :class="[ns.e('icon'), ns.e('icon-loading')]"
            name="regular arrows-rotate"
            spin
            @click="handlePasswordVisible"
          />
        </span>
      </slot>
    </div>
    <slot name="helpText">
      <div v-if="hasHelpInfo" :class="[ns.e('help')]">
        <p :key="isError ? 'error' : 'help'" :class="helpTextKls">
          {{ isError ? error : helpText }}
        </p>
        <span v-if="isWordLimitVisible" :class="ns.e('help-count')">
          {{ textLength }}/{{ maxlength }}
        </span>
      </div>
    </slot>
  </div>
</template>

<script lang="ts" setup>
import {
  computed,
  nextTick,
  onMounted,
  ref,
  shallowRef,
  toRef,
  useAttrs as useRawAttrs,
  useSlots,
  watch
} from 'vue'
import { useResizeObserver } from '@vueuse/core'
import { GIconFont } from '@flash-global66/g-icon-font'
import { isNil } from 'lodash-unified'
import { useFormItem, useFormItemInputId, useFormDisabled } from '@flash-global66/g-form'

import {
  useAttrs,
  useComposition,
  useCursor,
  useFocusController,
  useNamespace,
  UPDATE_MODEL_EVENT
} from 'element-plus'
import {
  NOOP,
  ValidateComponentsMap,
  debugWarn,
  isClient,
  isObject
} from 'element-plus/es/utils/index.mjs'

import { inputEmits, inputProps } from './input'
import type { StyleValue } from 'vue'

type TargetElement = HTMLInputElement

defineOptions({
  name: 'Input',
  inheritAttrs: false
})
const props = defineProps(inputProps)
const emit = defineEmits(inputEmits)

const ns = useNamespace('input')
const rawAttrs = useRawAttrs()
const attrs = useAttrs()
const slots = useSlots()

const leftPrefix = ref<string | undefined>(undefined)
const prefixRef = ref<HTMLElement | null>(null)

const { form: elForm, formItem: elFormItem } = useFormItem()

const isError = computed(() => elFormItem?.shouldShowErrorChild || Boolean(props?.messageError))

const error = computed(() => {
  if (props?.messageError) return props.messageError
  return elFormItem?.validateMessage
})

const containerKls = computed(() => [
  ns.b(),

  ns.is('label', Boolean(props.label)),
  ns.is('disabled', inputDisabled.value),
  ns.is('focus', isFocused.value),
  ns.is('complete', !isFocused.value && Boolean(nativeInputValue.value)),
  ns.is('disabled', inputDisabled.value),
  ns.is('exceed', inputExceed.value),
  ns.is('error', isError.value || elFormItem?.shouldShowError),
  ns.is('event', props.isEvent),
  ns.is('loading', props.loading),
  ns.is('readonly', props.readonly),

  {
    [ns.m('prefix')]: props.prefixIcon || slots.prefix,
    [ns.m('suffix')]: slots.suffix || props.suffixIcon || props.showPassword,
    [ns.is('password')]: props.showPassword,
    [ns.b('hidden')]: props.type === 'hidden'
  },

  rawAttrs.class
])

const helpTextKls = computed(() => [
  ns.e('help-text'),
  {
    [ns.e('help-error')]: isError.value
  }
])

const hasHelpInfo = computed(() => {
  return error.value || props.helpText || elFormItem?.$el
})

const { inputId } = useFormItemInputId(props, {
  formItemContext: elFormItem
})
const inputDisabled = useFormDisabled()

const input = shallowRef<HTMLInputElement>()

const hovering = ref(false)
const passwordVisible = ref(false)

const _ref = computed(() => input.value)

// wrapperRef for type="text", handleFocus and handleBlur for type="textarea"
const { wrapperRef, isFocused, handleFocus, handleBlur } = useFocusController(input, {
  beforeFocus() {
    return inputDisabled.value
  },
  afterBlur() {
    if (props.validateEvent) {
      elFormItem?.validate?.('blur').catch((err) => debugWarn(err))
    }
  }
})

const labelStyle = computed(() => {
  const shouldMoveLabel = Boolean(nativeInputValue.value) || isFocused.value
  return {
    left: !shouldMoveLabel ? `calc(${leftPrefix.value} + 16px)` : undefined,
    zIndex: !shouldMoveLabel ? 10 : undefined
  }
})

const passwordIcon = computed(() => (passwordVisible.value ? 'regular eye' : 'regular eye-slash'))
const containerStyle = computed<StyleValue>(() => [rawAttrs.style as StyleValue])

const nativeInputValue = computed(() => (isNil(props.modelValue) ? '' : String(props.modelValue)))

const isWordLimitVisible = computed(
  () =>
    props.showWordLimit &&
    !!props.maxlength &&
    props.type === 'text' &&
    !inputDisabled.value &&
    !props.readonly &&
    !props.showPassword
)
const textLength = computed(() => nativeInputValue.value.length)
const inputExceed = computed(
  () =>
    // show exceed style if length of initial value greater then maxlength
    !!isWordLimitVisible.value && textLength.value > Number(props.maxlength)
)
const suffixVisible = computed(() => !!props.suffixIcon || props.showPassword)

const [recordCursor, setCursor] = useCursor(input)

const setNativeInputValue = () => {
  const input = _ref.value
  const formatterValue = props.formatter
    ? props.formatter(nativeInputValue.value)
    : nativeInputValue.value
  if (!input || input.value === formatterValue) return
  input.value = formatterValue
}

const handleInput = async (event: Event) => {
  recordCursor()

  let { value } = event.target as TargetElement

  if (props.formatter) {
    value = props.parser ? props.parser(value) : value
  }

  // should not emit input during composition
  // see: https://github.com/ElemeFE/element/issues/10516
  if (isComposing.value) return

  // hack for https://github.com/ElemeFE/element/issues/8548
  // should remove the following line when we don't support IE
  if (value === nativeInputValue.value) {
    setNativeInputValue()
    return
  }

  emit(UPDATE_MODEL_EVENT, value)
  emit('input', value)

  // ensure native input value is controlled
  // see: https://github.com/ElemeFE/element/issues/12850
  await nextTick()
  setNativeInputValue()
  setCursor()
}

const handleChange = (event: Event) => {
  emit('change', (event.target as TargetElement).value)
}

const { isComposing, handleCompositionStart, handleCompositionUpdate, handleCompositionEnd } =
  useComposition({ emit, afterComposition: handleInput })

const handlePasswordVisible = () => {
  recordCursor()
  passwordVisible.value = !passwordVisible.value
  // The native input needs a little time to regain focus
  setTimeout(setCursor)
}

const focus = () => input.value?.focus()

const blur = () => input.value?.blur()

const handleMouseLeave = (evt: MouseEvent) => {
  hovering.value = false
  emit('mouseleave', evt)
}

const handleMouseEnter = (evt: MouseEvent) => {
  hovering.value = true
  emit('mouseenter', evt)
}

const handleKeydown = (evt: KeyboardEvent) => {
  emit('keydown', evt)
}

const select = () => {
  input.value?.select()
}

const clear = () => {
  emit(UPDATE_MODEL_EVENT, '')
  emit('change', '')
  emit('clear')
  emit('input', '')
}

watch(
  () => props.modelValue,
  () => {
    if (props.validateEvent) {
      elFormItem?.validate?.('change').catch((err) => debugWarn(err))
    }
  }
)

// native input value is set explicitly
// do not use v-model / :value in template
// see: https://github.com/ElemeFE/element/issues/14521
watch(nativeInputValue, () => setNativeInputValue())

// when change between <input> and <textarea>,
// update DOM dependent value and styles
// https://github.com/ElemeFE/element/issues/14857
watch(
  () => props.type,
  async () => {
    await nextTick()
    setNativeInputValue()
  }
)

onMounted(() => {
  if (!props.formatter && props.parser) {
    debugWarn(ns.b(), 'If you set the parser, you also need to set the formatter.')
  }
  setNativeInputValue()
})

const updatePrefixPosition = () => {
  if (!props.prefixIcon && !slots.prefix) {
    leftPrefix.value = '0'
    return
  }

  requestAnimationFrame(() => {
    const leftRef = prefixRef.value?.getBoundingClientRect().width
    leftPrefix.value = `${leftRef}px`
  })
}

useResizeObserver(prefixRef, updatePrefixPosition)

defineExpose({
  /** @description HTML element, input or textarea */
  ref: _ref,

  /** @description is input composing */
  isComposing,

  /** @description HTML input element native method */
  focus,
  /** @description HTML input element native method */
  blur,
  /** @description HTML input element native method */
  select,
  /** @description clear input value */
  clear
})
</script>

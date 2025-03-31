<template>
  <div class="flex flex-col gap-xs">
    <div
      v-if="options.length"
      :class="segmentedCls"
      :id="inputId"
      ref="segmentedRef"
      role="radiogroup"
      :aria-label="!isLabeledByFormItem ? ariaLabel || 'segmented' : undefined"
      :aria-labelledby="isLabeledByFormItem ? formItem!.labelId : undefined"
    >
      <div :class="[ns.e('group')]">
        <div
          :style="selectedStyle"
          :class="selectedCls"
        />
        <label
          v-for="(item, index) in options"
          :key="index"
          :class="getItemCls(item)"
        >
          <input
            :class="ns.e('item-input')"
            type="radio"
            :name="name"
            :disabled="getDisabled(item)"
            :checked="getSelected(item)"
            @change="handleChange(item)"
          />
          <div :class="ns.e('item-label')">
            <slot :item="item">{{ getLabel(item) }}</slot>
          </div>
        </label>
      </div>
    </div>
    <div v-if="hasHelpInfo" :class="helpTextKls">
      <p v-if="isError">{{ error }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  CHANGE_EVENT,
  UPDATE_MODEL_EVENT,
  useFormSize,
  useId,
  useNamespace,
} from "element-plus";
import { useFormItemInputId, useFormItem, useFormDisabled } from '@flash-global66/g-form';
import { computed, reactive, ref, watch } from "vue";
import { OptionSegmented } from "./segmented.type";
import { useActiveElement, useResizeObserver } from "@vueuse/core";
import { segmentedEmits, segmentedProps } from "./segmented";
import { isObject } from "element-plus/es/utils/types.mjs";
import { debugWarn } from "element-plus/es/utils/index.mjs";

const props = defineProps(segmentedProps)
const emit = defineEmits(segmentedEmits)

const ns = useNamespace('segmented')
const segmentedId = useId()
const segmentedSize = useFormSize()
const _disabled = useFormDisabled()
const { formItem } = useFormItem()
const { inputId, isLabeledByFormItem } = useFormItemInputId(props, {
  formItemContext: formItem,
})

const segmentedRef = ref<HTMLElement | null>(null)
const activeElement = useActiveElement()

const state = reactive({
  isInit: false,
  width: 0,
  height: 0,
  translateX: 0,
  translateY: 0,
  focusVisible: false,
})

const isError = computed(() => formItem?.shouldShowErrorChild || Boolean(props?.messageError))

const helpTextKls = computed(() => [
  ns.e('help'),
  {
    [ns.e('help-error')]: isError.value
  }
])

const error = computed(() => {
  if (props?.messageError) return props.messageError
  return formItem?.validateMessage
})

const hasHelpInfo = computed(() => {
  return error.value || formItem?.$el
})

const handleChange = (item: OptionSegmented) => {
  const value = getValue(item)
  emit(UPDATE_MODEL_EVENT, value)
  emit(CHANGE_EVENT, value)
}

const getValue = (item: OptionSegmented) => {
  return isObject(item) ? item?.value : item
}

const getLabel = (item: OptionSegmented) => {
  return isObject(item) ? item?.label : item
}

const getDisabled = (item: OptionSegmented | undefined) => {
  return !!(_disabled.value || (isObject(item) ? item?.disabled : false))
}

const getSelected = (item: OptionSegmented) => {
  return props.modelValue === getValue(item)
}

const getOption = (value: any) => {
  return props.options.find((item) => getValue(item) === value)
}

const getItemCls = (item: OptionSegmented) => {
  return [
    ns.e('item'),
    ns.is('selected', getSelected(item)),
    ns.is('disabled', getDisabled(item)),
    props.classItem,
  ]
}

const updateSelect = () => {
  if (!segmentedRef.value) return
  const selectedItem = segmentedRef.value.querySelector(
    '.is-selected'
  ) as HTMLElement
  const selectedItemInput = segmentedRef.value.querySelector(
    '.is-selected input'
  ) as HTMLElement
  if (!selectedItem || !selectedItemInput) {
    state.width = 0
    state.height = 0
    state.translateX = 0
    state.translateY = 0
    state.focusVisible = false
    return
  }
  const rect = selectedItem.getBoundingClientRect()
  state.isInit = true
  state.width = rect.width
  state.translateX = selectedItem.offsetLeft
  try {
    // This will failed in test
    state.focusVisible = selectedItemInput.matches(':focus-visible')
  } catch {}
}

const segmentedCls = computed(() => {
  return[
    ns.b(),
    ns.m(segmentedSize.value),
    ns.is('block', props.block),
  ]
})

const selectedStyle = computed(() => ({
  width: `${state.width}px`,
  height: '100%',
  transform: `translateX(${state.translateX}px)`,
  display: state.isInit ? 'block' : 'none',
}))

const selectedCls = computed(() => [
  ns.e('item-selected'),
  ns.is('disabled', getDisabled(getOption(props.modelValue))),
  ns.is('focus-visible', state.focusVisible),
])

const name = computed(() => {
  return props.name || segmentedId.value
})

useResizeObserver(segmentedRef, updateSelect)

watch(activeElement, updateSelect)

watch(
  () => props.modelValue,
  () => {
    updateSelect()
    if (props.validateEvent) {
      formItem?.validate?.('change').catch((err) => debugWarn(err))
    }
  },
  {
    flush: 'post',
  }
)
</script>

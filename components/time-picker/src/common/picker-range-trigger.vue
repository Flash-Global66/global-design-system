<template>
  <div
    ref="wrapperRef"
    :class="[nsDate.is('active', isFocused), $attrs.class]"
    :style="($attrs.style as CSSProperties)"
    @click="handleClick"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @touchstart.passive="handleTouchStart"
  >
    <slot name="prefix" />
    <div v-if="modelValue" :class="[nsInput.e('label')]" :style="labelStyle">
      {{ label }}
    </div>
    <input
      v-bind="attrs"
      :id="id && id[0]"
      ref="inputRef"
      :name="name && name[0]"
      :placeholder="startPlaceholder"
      :value="modelValue && modelValue[0]"
      :class="nsRange.b('input')"
      @input="handleStartInput"
      @change="handleStartChange"
    />
    <slot name="range-separator" />
    <input
      v-bind="attrs"
      :id="id && id[1]"
      ref="endInputRef"
      :name="name && name[1]"
      :placeholder="endPlaceholder"
      :value="modelValue && modelValue[1]"
      :class="nsRange.b('input')"
      @input="handleEndInput"
      @change="handleEndChange"
    />
    <slot name="suffix" />
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { useAttrs, useFocusController, useNamespace } from "element-plus";
import { timePickerRangeTriggerProps } from "./props";
import type { CSSProperties } from "vue";
import { useResizeObserver } from "@vueuse/core";
import { isNil } from "lodash-unified";

defineOptions({
  name: "PickerRangeTrigger",
  inheritAttrs: false,
});

const props = defineProps(timePickerRangeTriggerProps);
const emit = defineEmits([
  "mouseenter",
  "mouseleave",
  "click",
  "touchstart",
  "focus",
  "blur",
  "startInput",
  "endInput",
  "startChange",
  "endChange",
]);

const attrs = useAttrs();
const nsInput = useNamespace("input");
const nsDate = useNamespace("date");
const nsRange = useNamespace("range");
const leftPrefix = ref<string | undefined>(undefined);
const prefixRef = ref<HTMLElement | null>(null);

const inputRef = ref<HTMLInputElement>();
const endInputRef = ref<HTMLInputElement>();

const { wrapperRef, isFocused } = useFocusController(inputRef);

const handleClick = (evt: MouseEvent) => {
  emit("click", evt);
};

const handleMouseEnter = (evt: MouseEvent) => {
  emit("mouseenter", evt);
};

const handleMouseLeave = (evt: MouseEvent) => {
  emit("mouseleave", evt);
};

const handleTouchStart = (evt: TouchEvent) => {
  emit("mouseenter", evt);
};

const handleStartInput = (evt: Event) => {
  emit("startInput", evt);
};

const handleEndInput = (evt: Event) => {
  emit("endInput", evt);
};

const handleStartChange = (evt: Event) => {
  emit("startChange", evt);
};

const handleEndChange = (evt: Event) => {
  emit("endChange", evt);
};

const focus = () => {
  inputRef.value?.focus();
};

const blur = () => {
  inputRef.value?.blur();
  endInputRef.value?.blur();
};

const labelStyle = computed(() => {
  const shouldMoveLabel = Boolean(nativeInputValue.value) || isFocused.value;
  return {
    left: !shouldMoveLabel ? `calc(${leftPrefix.value} + 16px)` : undefined,
    zIndex: !shouldMoveLabel ? 10 : undefined,
  };
});

const nativeInputValue = computed(() =>
  isNil(props.modelValue) ? "" : String(props.modelValue)
);

const updatePrefixPosition = () => {
  requestAnimationFrame(() => {
    const leftRef = prefixRef.value?.getBoundingClientRect().width;
    leftPrefix.value = `${leftRef}px`;
  });
};

useResizeObserver(prefixRef, updatePrefixPosition);

defineExpose({
  focus,
  blur,
});
</script>

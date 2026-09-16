import { computed, reactive, ref, useAttrs, useSlots } from 'vue';
import { useNamespace } from '@flash-global66/g-utils';
import { useResizeObserver } from '@vueuse/core';

import type { ComputedRef, Ref, StyleValue } from 'vue';
import type { InputTagProps } from '../input-tag';

interface UseInputTagDomOptions {
  props: InputTagProps;
  isFocused: Ref<boolean>;
  hovering: Ref<boolean>;
  disabled: ComputedRef<boolean>;
  inputValue: Ref<string>;
  size: ComputedRef<string>;
}

export function useInputTagDom({
  props,
  isFocused,
  hovering,
  disabled,
  inputValue,
  size,
}: UseInputTagDomOptions) {
  const attrs = useAttrs();
  const slots = useSlots();
  const ns = useNamespace('input-tag');

  const collapseItemRef = ref<HTMLElement>();
  const innerRef = ref<HTMLElement>();

  const containerKls = computed(() => [
    ns.b(),
    ns.is('focused', isFocused.value),
    ns.is('complete', Boolean(props.modelValue?.length || inputValue.value)),
    ns.is('hovering', hovering.value),
    ns.is('disabled', disabled.value),
    ns.m(size.value),
    attrs.class,
  ]);
  const containerStyle = computed<StyleValue>(() => [
    attrs.style as StyleValue,
  ]);
  const inputAttrs = computed(() => {
    const result: Record<string, unknown> = {};
    for (const key in attrs) {
      if (key === 'class' || key === 'style') continue;
      result[key] = attrs[key];
    }
    return result;
  });
  const innerKls = computed(() => [
    ns.e('inner'),
    ns.is('draggable', Boolean(props.draggable)),
    ns.is('left-space', !props.modelValue?.length && !slots.prefix),
    ns.is('right-space', !props.modelValue?.length && !slots.suffix),
  ]);
  const showClear = computed(() => {
    return Boolean(
      props.clearable &&
        !disabled.value &&
        !props.readonly &&
        (props.modelValue?.length || inputValue.value) &&
        (isFocused.value || hovering.value),
    );
  });
  const showSuffix = computed(() => {
    return Boolean(slots.suffix || showClear.value);
  });

  const states = reactive({
    innerWidth: 0,
    collapseItemWidth: 0,
  });

  const getGapWidth = () => {
    if (!innerRef.value) return 0;
    const style = window.getComputedStyle(innerRef.value);
    return Number.parseFloat(style.gap || '6px');
  };

  const resetInnerWidth = () => {
    if (!innerRef.value) return;
    states.innerWidth = Number.parseFloat(
      window.getComputedStyle(innerRef.value).width,
    );
  };

  const resetCollapseItemWidth = () => {
    if (!collapseItemRef.value) return;
    states.collapseItemWidth =
      collapseItemRef.value.getBoundingClientRect().width;
  };

  const tagStyle = computed(() => {
    if (!props.collapseTags) return {};
    const gapWidth = getGapWidth();
    const MINIMUM_INPUT_WIDTH = 11;
    const inputSlotWidth = gapWidth + MINIMUM_INPUT_WIDTH;

    const maxWidth =
      collapseItemRef.value && props.maxCollapseTags === 1
        ? states.innerWidth -
          states.collapseItemWidth -
          gapWidth -
          inputSlotWidth
        : states.innerWidth - inputSlotWidth;

    return { maxWidth: `${Math.max(maxWidth, 0)}px` };
  });

  useResizeObserver(innerRef, resetInnerWidth);
  useResizeObserver(collapseItemRef, resetCollapseItemWidth);

  return {
    ns,
    containerKls,
    containerStyle,
    inputAttrs,
    innerKls,
    showClear,
    showSuffix,
    tagStyle,
    collapseItemRef,
    innerRef,
  };
}

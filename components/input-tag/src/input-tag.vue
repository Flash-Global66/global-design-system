<template>
  <div :class="ns.e('container')">
    <div
      ref="wrapperRef"
      :class="[
        containerKls,
        ns.is('error', isError || formItem?.shouldShowError),
      ]"
      :style="containerStyle"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <div v-if="$slots.prefix" :class="ns.e('prefix')">
        <slot name="prefix" />
      </div>
      <div ref="innerRef" :class="innerKls">
        <div
          v-for="(item, index) in showTagList"
          :key="`${index}-${item}`"
          :class="[
            ns.e('tag-wrapper'),
            closable && draggable ? ns.is('draggable', true) : '',
          ]"
          :draggable="closable && draggable ? true : undefined"
          @dragstart="(event: DragEvent) => handleDragStart(event, index)"
          @dragover="(event: DragEvent) => handleDragOver(event, index)"
          @dragend="handleDragEnd"
          @drop.stop
        >
          <g-tag
            :size="tagSize"
            :closable="closable"
            :type="tagType"
            :effect="tagEffect"
            disable-transitions
            :style="tagStyle"
            @close="handleRemoveTag(index)"
          >
            <slot name="tag" :value="item" :index="index">
              {{ item }}
            </slot>
          </g-tag>
        </div>
        <g-tooltip
          v-if="
            collapseTags && modelValue && modelValue.length > maxCollapseTags
          "
          ref="tagTooltipRef"
          :disabled="!collapseTagsTooltip"
          :fallback-placements="['bottom', 'top', 'right', 'left']"
          :effect="effect"
          placement="bottom"
        >
          <template #default>
            <div ref="collapseItemRef" :class="ns.e('collapse-tag')">
              <g-tag
                :closable="false"
                :size="tagSize"
                :type="tagType"
                :effect="tagEffect"
                disable-transitions
              >
                + {{ modelValue.length - maxCollapseTags }}
              </g-tag>
            </div>
          </template>
          <template #content>
            <div :class="ns.e('input-tag-list')">
              <g-tag
                v-for="(item, index) in collapseTagList"
                :key="`c-${index}-${item}`"
                :size="tagSize"
                :closable="closable"
                :type="tagType"
                :effect="tagEffect"
                disable-transitions
                @close="handleRemoveTag(index + maxCollapseTags)"
              >
                <slot name="tag" :value="item" :index="index + maxCollapseTags">
                  {{ item }}
                </slot>
              </g-tag>
            </div>
          </template>
        </g-tooltip>
        <div :class="ns.e('input-wrapper')">
          <input
            :id="inputId"
            ref="inputRef"
            v-model="inputValue"
            type="text"
            v-bind="inputAttrs"
            :minlength="minlength"
            :maxlength="maxlength"
            :disabled="disabled"
            :readonly="readonly"
            :autocomplete="autocomplete"
            :tabindex="tabindex"
            :placeholder="placeholder"
            :autofocus="autofocus"
            :aria-label="ariaLabel"
            :class="ns.e('input')"
            :style="inputStyle"
            @compositionstart="handleCompositionStart"
            @compositionupdate="handleCompositionUpdate"
            @compositionend="handleCompositionEnd"
            @paste="handlePaste"
            @input="handleInput"
            @keydown="handleKeydown"
            @keyup="handleKeyup"
            @focus="handleFocus"
            @blur="handleBlur"
          />
          <span
            ref="calculatorRef"
            aria-hidden="true"
            :class="ns.e('input-calculator')"
            v-text="inputValue"
          />
        </div>
        <div
          v-show="showDropIndicator"
          ref="dropIndicatorRef"
          :class="ns.e('drop-indicator')"
        />
      </div>
      <div v-if="showSuffix" :class="ns.e('suffix')">
        <slot name="suffix" />
        <g-icon-font
          v-if="showClear"
          :class="[ns.e('icon'), ns.e('clear')]"
          @mousedown.prevent="() => {}"
          @click="handleClear"
          :name="clearIcon"
        />
      </div>
    </div>
    <div v-if="hasHelpInfo" :class="ns.e('help')">
      <slot name="helpText" :error="error" :isError="isError">
        <p :key="isError ? 'error' : 'help'" :class="helpTextKls">
          {{ isError ? error : props.helpText }}
        </p>
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useCalcInputWidth } from '@flash-global66/g-hooks';
import { GTag } from '@flash-global66/g-tag';
import { GTooltip } from '@flash-global66/g-tooltip';
import { GIconFont } from '@flash-global66/g-icon-font';
import { useFormItem, useFormItemInputId } from '@flash-global66/g-form';

import { inputTagEmits, inputTagProps } from './input-tag';
import {
  useDragTag,
  useHovering,
  useInputTag,
  useInputTagDom,
} from './composables';

defineOptions({
  name: 'GInputTag',
  inheritAttrs: false,
});

const props = defineProps(inputTagProps);
const emit = defineEmits(inputTagEmits);

// `useInputTag` expects a generic emit signature; widen the typed defineEmits fn.
const emitFn = emit as unknown as (event: string, ...args: unknown[]) => void;

const { formItem } = useFormItem();
const { inputId } = useFormItemInputId(props, {
  formItemContext: formItem,
});

const {
  inputRef,
  wrapperRef,
  tagTooltipRef,
  isFocused,
  inputValue,
  size,
  tagSize,
  placeholder,
  closable,
  disabled,
  showTagList,
  collapseTagList,
  handleDragged,
  handlePaste,
  handleInput,
  handleKeydown,
  handleKeyup,
  handleRemoveTag,
  handleClear,
  handleCompositionStart,
  handleCompositionUpdate,
  handleCompositionEnd,
  handleFocus,
  handleBlur,
  focus,
  blur,
} = useInputTag({ props, emit: emitFn, formItem });

const { hovering, handleMouseEnter, handleMouseLeave } = useHovering();
const { calculatorRef, inputStyle } = useCalcInputWidth();

const {
  dropIndicatorRef,
  showDropIndicator,
  handleDragStart,
  handleDragOver,
  handleDragEnd,
} = useDragTag({ wrapperRef, handleDragged, afterDragged: focus });

const {
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
} = useInputTagDom({
  props,
  isFocused,
  hovering,
  disabled,
  inputValue,
  size,
});

const isError = computed(() => {
  return Boolean(
    formItem?.shouldShowErrorChild ||
      (formItem?.showMessage === 'child' &&
        formItem?.validateState === 'error'),
  );
});

const error = computed(() => formItem?.validateMessage);

const helpTextKls = computed(() => [
  ns.e('help-text'),
  {
    [ns.e('help-error')]: isError.value,
  },
]);

const hasHelpInfo = computed(() => {
  return error.value || props.helpText || formItem?.$el;
});

defineExpose({
  focus,
  blur,
});
</script>

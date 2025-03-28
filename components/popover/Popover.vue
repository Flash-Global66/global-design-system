<template>
  <div class="gui-popover-wrapper">
    <el-popover
      v-bind="{ ...$attrs, ...$props }"
      @show="(event) => $emit('show', event)"
      @before-enter="(event) => $emit('before-enter', event)"
      @after-enter="(event) => $emit('after-enter', event)"
      @hide="(event) => $emit('hide', event)"
      @before-leave="(event) => $emit('before-leave', event)"
      @after-leave="(event) => $emit('after-leave', event)"
    >

      <!--
        @slot default text content of popover
      -->
      <slot />

      <template #reference>
        <!--
          @slot reference HTML element that triggers popover
        -->
        <slot name="reference" />
      </template>
    </el-popover>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, StyleValue } from 'vue';
import type { Options } from '@popperjs/core';
import {
  ElPopover,
  useTooltipTriggerProps,
  dropdownProps,
  useTooltipContentProps,
} from "element-plus";

type ClassObjectType = Record<string, boolean>
type ClassType = string | ClassObjectType | ClassType[]

export default defineComponent({
  name: 'GPopover',
  components: {
    ElPopover,
  },
  emits: [
    /**
     * triggers when popover shows
     */
    'show',
    /**
     * triggers when the entering transition before
     */
    'before-enter',
    /**
     * triggers when the entering transition ends
     */
    'after-enter',
    /**
     * triggers when popover hides
     */
    'hide',
    /**
     * triggers when the leaving transition before
     */
    'before-leave',
    /**
     * triggers when the leaving transition ends
     */
    'after-leave',
  ],
  props: {
    /**
     * how the popover is triggered
     * `click/hover/contextmenu`
    */
    trigger: useTooltipTriggerProps.trigger,
    /**
     * popover placement <br />
     * `top/top-start/top-end` <br />
     * `bottom/bottom-start/bottom-end` <br />
     * `left/left-start/left-end` <br /> 
     * `right/right-start/right-end`
    */
    placement: dropdownProps.placement,
    /**
     * whether Popover is disabled
    */
    disabled: {
      type: Boolean,
    },
    /**
     * whether popover is visible <br />
     * `visible / v-model:visible`
    */
    visible: {
      type: Boolean as PropType<boolean | null>,
      default: null,
    },
    /**
     * popover transition animation.
    */
    transition: {
      type: String,
      default: 'gui-fade-in-linear',
    },
    /**
     * parameters for 
     * <a href="https://popper.js.org/docs/v2/" target="_blank">popper.js</a>
    */
    'popper-options': {
      type: Object as PropType<Partial<Options>>,
      default: () => ({}),
    },
    /**
     * <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex" target="_blank">
     *  tabindex
     * </a> of Popover
    */
    tabindex: {
      type: [Number, String] as PropType<number | string>,
      default: 0,
    },
    /**
     * popover content, can be replaced with a default slot
    */
    content: {
      type: String,
      default: '',
    },
    /**
     * custom style popper
    */
    'popper-style': {
      type: [String, Array, Object] as PropType<StyleValue>
    },
    /**
     * custom class name for popover
    */
    'popper-class': {
      type: [String, Array, Object] as PropType<ClassType>
    },
    /**
     * whether popover dropdown is teleported to the body
    */
    teleported: {
      type: Boolean,
      default: true,
    },
    /**
     * popover title
    */
    title: String,
    /**
     * popover width
    */
    width: {
      type: [String, Number],
      default: 150,
    },
    /**
     * popover offset
    */
    offset: {
      type: Number,
      default: undefined,
    },
    /**
     * delay of appearance, in millisecond
    */
    'show-after': {
      type: Number,
      default: 0,
    },
    /**
     * delay of disappear, in millisecond
    */
    'hide-after': {
      type: Number,
      default: 200,
    },
    /**
     * timeout in milliseconds to hide tooltip
    */
    'auto-close': {
      type: Number,
      default: 0,
    },
    /**
     * whether a tooltip arrow is displayed or not.
    */
    'show-arrow': {
      type: Boolean,
      default: true,
    },
    /**
     * when popover inactive and persistent is false , popover will be destroyed
     */
    persistent: {
      type: Boolean,
      default: true,
    },
    'onUpdate:visible': {
      type: Function as PropType<(visible: boolean) => void>,
    },
  },
});
</script>

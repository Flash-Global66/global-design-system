<template>
  <el-dropdown
    v-bind="{ ...$attrs, ...$props }"
    @click="(event) => $emit('click')"
    @command="(event) => $emit('command')"
    @visible-change="(event) => $emit('visible-change')"
  >
    <!--
      @slot content of Dropdown. Notice: Must be a valid html dom element (ex. <span>, <button> etc.) or g-component, to attach the trigger listener
    -->
    <template #default>
      <slot />
    </template>

    <template #dropdown>
      <!--
        @slot content of the Dropdown Menu, usually a <g-dropdown-menu> element
      -->
      <slot name="dropdown" />
    </template>
  </el-dropdown>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import {
  ButtonProps,
  ButtonType,
  ElDropdown,
  Placement,
} from "element-plus";
import type { Options } from '@popperjs/core';
import { EffectDropdown, TriggerDropdown } from './dropdown.type';

export default defineComponent({
  name: 'GSkeleton',
  components: {
    ElDropdown,
  },
  emits: [
    /** 
     * if split-button is true, triggers when left button is clicked
     */
    'click',
    /**
     * 	triggers when a dropdown item is clicked <br />
     *  - the command dispatched from the dropdown item
    */
    'command',
    /**
     * triggers when the dropdown appears/disappears <br />
     * - true when it appears, and false otherwise
     */
    'visible-change',
  ],
  props: {
    /**
     * how to trigger `hover/click/contextmenu` <br />
     * `string`
    */
    trigger: {
      type: String as PropType<TriggerDropdown>,
      default: 'hover',
    },
    /**
     * menu button type, refer to `Button` Component, only works when `split-button` is true
    */
    type: {
      type: String as PropType<ButtonType>,
    },
    /**
     * placement of pop menu <br />
     * `top/top-start/top-end/bottom/bottom-start/bottom-end`
     */
    placement: {
      type: String as PropType<Placement>,
      default: 'bottom',
    },
    /**
     * <a href="https://element-plus.org/en-US/component/dropdown.html#dropdown-attributes:~:text=popper%2Doptions-,popper.js,parameters,-Object" target="_blank">popper.js</a> parameters
     * `{ modifiers: [{name: 'computeStyles',options: {gpuAcceleration: false}}] }`
    */
    popperOptions: {
      type: Object as PropType<Partial<Options>>,
      default: () => ({}),
    },
    /**
     * menu size, also works on the split button <br />
     * `large / default / small`
    */
    size: {
      type: String,
      default: '',
    },
    /**
     * whether a button group is displayed
    */
    // splitButton: Boolean,
    /**
     * whether to hide menu after clicking menu-item
    */
    hideOnClick: {
      type: Boolean,
      default: true,
    },
    loop: {
      type: Boolean,
      default: true,
    },
    /**
     * Delay time before show a dropdown (only works when trigger is hover) <br />
    */
    showTimeout: {
      type: Number,
      default: 250,
    },
    /**
     * Delay time before hide a dropdown (only works when trigger is hover)
    */
    hideTimeout: {
      type: Number,
      default: 150,
    },
    /**
     * <a href="https://element-plus.org/en-US/component/dropdown.html#dropdown-attributes:~:text=tabindex-,tabindex,of%20Dropdown,-number" target="_blank">
     * tabindex
     * </a> of Dropdown
     */
    tabindex: {
      type: [Number, String] as PropType<number | string>,
      default: 0,
    },
    /**
     * the max height of menu
    */
    maxHeight: {
      type: [Number, String] as PropType<number | string>,
      default: '',
    },
    /**
     * custom class name for Dropdown's dropdown
    */
    popperClass: {
      type: String,
      default: '',
    },
    /**
     * Whether to disable
    */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * The ARIA role attribute for the dropdown menu. Depending on the use case, you may want to change this to 'navigation'
    */
    role: {
      type: String,
      default: 'menu',
    },
    /**
     * button properties
    */
    buttonProps: {
      type: Object as PropType<ButtonProps>,
    },
    /**
     * whether the dropdown popup is teleported to the body
     */
    teleported: {
      type: Boolean,
      default: true,
    },
  },
});
</script>

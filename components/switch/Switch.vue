<template>
  <el-switch
    v-bind="{ ...$attrs, ...$props }"
    @change="(event) => $emit('change', event)"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ComponentSize, ElSwitch } from "element-plus";

// TYPES
import { TypeSwitchSize } from './switch.type';

export default defineComponent({
  name: 'GSwitch',
  components: {
    ElSwitch,
  },
  emits: [
    /**
     * triggers when the bound value changes
     */
    'change'
  ],
  props: {
    /**
     * @description binding value, it should be equivalent to either `active-value` or `inactive-value`, by default it's `boolean` type
     */
    modelValue: {
      type: [Boolean, String, Number],
      default: false,
    },
    /**
     * @description whether Switch is disabled
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * @description whether Switch is in loading state
     */
    loading: {
      type: Boolean,
      default: false,
    },
    /**
     * @description size of Switch
     */
    size: {
      type: String as PropType<ComponentSize>,
    },
    /**
     * @description width of Switch
     */
    width: {
      type: [String, Number],
      default: '',
    },
    /**
     * @description whether icon or text is displayed inside dot, only the first character will be rendered for text
     */
    inlinePrompt: {
      type: Boolean,
      default: false,
    },
    /**
     * @description component of the icon displayed in action when in `off` state
     */
    // inactiveActionIcon: {
    //   type: iconPropType,
    // },
    /**
     * @description component of the icon displayed in action when in `on` state
     */
    // activeActionIcon: {
    //   type: iconPropType,
    // },
    /**
     * @description component of the icon displayed when in `on` state, overrides `active-text`
     */
    // activeIcon: {
    //   type: iconPropType,
    // },
    /**
     * @description component of the icon displayed when in `off` state, overrides `inactive-text`
     */
    // inactiveIcon: {
    //   type: iconPropType,
    // },
    /**
     * @description text displayed when in `on` state
     */
    activeText: {
      type: String,
      default: '',
    },
    /**
     * @description text displayed when in `off` state
     */
    inactiveText: {
      type: String,
      default: '',
    },
    /**
     * @description switch value when in `on` state
     */
    activeValue: {
      type: [Boolean, String, Number],
      default: true,
    },
    /**
     * @description switch value when in `off` state
     */
    inactiveValue: {
      type: [Boolean, String, Number],
      default: false,
    },
    /**
     * @deprecated background color when in `on` state ( deprecated, use CSS var `--el-switch-on-color` instead )
     */
    activeColor: {
      type: String,
      default: '',
    },
    /**
     * @deprecated background color when in `off` state ( deprecated, use CSS var `--el-switch-off-color` instead )
     */
    inactiveColor: {
      type: String,
      default: '',
    },
    /**
     * @deprecated border color of the switch ( deprecated, use CSS var `--el-switch-border-color` instead )
     */
    borderColor: {
      type: String,
      default: '',
    },
    /**
     * @description input name of Switch
     */
    name: {
      type: String,
      default: '',
    },
    /**
     * @description whether to trigger form validation
     */
    validateEvent: {
      type: Boolean,
      default: true,
    },
    /**
     * @description before-change hook before the switch state changes. If `false` is returned or a `Promise` is returned and then is rejected, will stop switching
     */
    beforeChange: {
      type: Function as PropType<() => Promise<boolean> | boolean>,
    },
    /**
     * @description id for input
     */
    id: String,
    /**
     * @description tabindex for input
     */
    tabindex: {
      type: [String, Number],
    },
    /**
     * @deprecated binding value ( deprecated, use `model-value / v-model` instead )
     */
    value: {
      type: [Boolean, String, Number],
      default: false,
    },
    /**
     * @description native input aria-label
     */
    label: {
      type: String,
      default: undefined,
    },
  },
});
</script>
<template>
  <el-date-picker
    v-bind="{ ...$attrs, ...$props }"
    @pick="(event) => $emit('pick', event)"
    @select-range="(event) => $emit('select-range', event)"
    @set-picker-option="(event) => $emit('set-picker-option', event)"
    @calendar-change="(event) => $emit('calendar-change', event)"
    @panel-change="(event) => $emit('panel-change', event)"
    @keydown="(event) => $emit('keydown', event)"
  >
    <!--
      @slot customize default content
    -->
    <slot />
  </el-date-picker>
</template>

<script lang="ts">
import { defineComponent, Component } from 'vue';
import { ElDatePicker, useSizeProp } from 'element-plus';
import type { ModelValueType, Options, SingleOrRange } from 'element-plus';
import { definePropType } from 'element-plus/es/utils';
import { disabledTimeListsProps } from 'element-plus/es/components/time-picker/src/props/shared';

export default defineComponent({
  name: 'GDatePicker',
  components: {
    ElDatePicker,
  },
  emits: [
    'pick',
    'select-range',
    'set-picker-option',
    'calendar-change',
    'panel-change',
    'keydown',
  ],
  props: {
    /**
     * @description same as `id` in native input
     */
    id: {
      type: definePropType<SingleOrRange<string>>([Array, String]),
    },
    /**
     * @description same as `name` in native input
     */
    name: {
      type: definePropType<SingleOrRange<string>>([Array, String]),
      default: '',
    },
    /**
     * @description custom class name for TimePicker's dropdown
     */
    popperClass: {
      type: String,
      default: '',
    },
    /**
     * @description format of the displayed value in the input box
     */
    format: String,
    /**
     * @description optional, format of binding value. If not specified, the binding value will be a Date object
     */
    valueFormat: String,
    /**
     * @description optional, format of the date displayed value in TimePicker's dropdown
     */
    dateFormat: String,
    /**
     * @description optional, format of the time displayed value in TimePicker's dropdown
     */
    timeFormat: String,
    /**
     * @description type of the picker
     */
    type: {
      type: String,
      default: '',
    },
    /**
     * @description whether to show clear button
     */
    clearable: {
      type: Boolean,
      default: true,
    },
    /**
     * @description Custom clear icon component
     */
    // clearIcon: {
    //   type: definePropType<string | Component>([String, Object]),
    //   default: CircleClose,
    // },
    /**
     * @description whether the input is editable
     */
    editable: {
      type: Boolean,
      default: true,
    },
    /**
     * @description Custom prefix icon component
     */
    prefixIcon: {
      type: definePropType<string | Component>([String, Object]),
      default: '',
    },
    /**
     * @description size of Input
     */
    size: useSizeProp,
    /**
     * @description whether TimePicker is read only
     */
    readonly: Boolean,
    /**
     * @description whether TimePicker is disabled
     */
    disabled: Boolean,
    /**
     * @description placeholder in non-range mode
     */
    placeholder: {
      type: String,
      default: '',
    },
    /**
     * @description [popper.js](https://popper.js.org/docs/v2/) parameters
     */
    popperOptions: {
      type: definePropType<Partial<Options>>(Object),
      default: () => ({}),
    },
    /**
     * @description binding value, if it is an array, the length should be 2
     */
    modelValue: {
      type: definePropType<ModelValueType>([Date, Array, String, Number]),
      default: '',
    },
    /**
     * @description range separator
     */
    rangeSeparator: {
      type: String,
      default: '-',
    },
    /**
     * @description placeholder for the start date in range mode
     */
    startPlaceholder: String,
    /**
     * @description placeholder for the end date in range mode
     */
    endPlaceholder: String,
    /**
     * @description optional, default date of the calendar
     */
    defaultValue: {
      type: definePropType<SingleOrRange<Date>>([Date, Array]),
    },
    /**
     * @description optional, the time value to use when selecting date range
     */
    defaultTime: {
      type: definePropType<SingleOrRange<Date>>([Date, Array]),
    },
    /**
     * @description whether to pick a time range
     */
    isRange: Boolean,
    ...disabledTimeListsProps,
    /**
     * @description a function determining if a date is disabled with that date as its parameter. Should return a Boolean
     */
    disabledDate: {
      type: Function,
    },
    /**
     * @description set custom className
     */
    cellClassName: {
      type: Function,
    },
    /**
     * @description an object array to set shortcut options
     */
    shortcuts: {
      type: Array,
      default: () => [],
    },
    /**
     * @description whether to pick time using arrow buttons
     */
    arrowControl: Boolean,
    /**
     * @description same as `aria-label` in native input
     */
    label: {
      type: String,
      default: undefined,
    },
    /**
     * @description input tabindex
     */
    tabindex: {
      type: definePropType<string | number>([String, Number]),
      default: 0,
    },
    /**
     * @description whether to trigger form validation
     */
    validateEvent: {
      type: Boolean,
      default: true,
    },
    /**
     * @description unlink two date-panels in range-picker
     */
    unlinkPanels: Boolean,
  },
});
</script>

<style lang="scss">
</style>

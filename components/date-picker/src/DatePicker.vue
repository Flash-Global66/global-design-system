<template>
  <CommonPicker
    v-bind="props"
    ref="commonPicker"
    :format="computedFormat"
    :type="props.type"
    @update:model-value="onModelValueUpdated"
  >
    <template #default="scopedProps">
      <Component :is="panelComponent" v-bind="scopedProps">
        <template v-if="slots['prev-month']" #prev-month>
          <slot name="prev-month" />
        </template>
        <template v-if="slots['next-month']" #next-month>
          <slot name="next-month" />
        </template>
        <template v-if="slots['prev-year']" #prev-year>
          <slot name="prev-year" />
        </template>
        <template v-if="slots['next-year']" #next-year>
          <slot name="next-year" />
        </template>
      </Component>
    </template>

    <template v-if="slots['range-separator']" #range-separator>
      <slot name="range-separator" />
    </template>
  </CommonPicker>
</template>

<script lang="ts">
import { computed, defineComponent, provide, reactive, ref, toRef } from "vue";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat.js";
import advancedFormat from "dayjs/plugin/advancedFormat.js";
import localeData from "dayjs/plugin/localeData.js";
import weekOfYear from "dayjs/plugin/weekOfYear.js";
import weekYear from "dayjs/plugin/weekYear.js";
import dayOfYear from "dayjs/plugin/dayOfYear.js";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter.js";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore.js";
import { useNamespace } from "element-plus";
import {
  CommonPicker,
  DEFAULT_FORMATS_DATE,
  DEFAULT_FORMATS_DATEPICKER,
  type DateModelType,
  type SingleOrRange,
} from "@element-plus/components/time-picker";
import { ROOT_PICKER_INJECTION_KEY } from "./constants";
import { datePickerProps } from "./props/date-picker";
import { getPanel } from "./panel-utils";
import type { Component } from "vue";
import type { DatePickerExpose } from "./instance";

dayjs.extend(localeData);
dayjs.extend(advancedFormat);
dayjs.extend(customParseFormat);
dayjs.extend(weekOfYear);
dayjs.extend(weekYear);
dayjs.extend(dayOfYear);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

export default defineComponent({
  name: "ElDatePicker",
  install: null,
  props: datePickerProps,
  emits: ["update:modelValue"],

  setup(props, { expose, emit, slots }) {
    const ns = useNamespace("picker-panel");
    const commonPicker = ref<InstanceType<typeof CommonPicker>>();

    provide("ElPopperOptions", reactive(toRef(props, "popperOptions")));
    provide(ROOT_PICKER_INJECTION_KEY, {
      slots,
      pickerNs: ns,
    });

    const refProps: DatePickerExpose = {
      focus: () => {
        commonPicker.value?.focus();
      },
      blur: () => {
        commonPicker.value?.blur();
      },
      handleOpen: () => {
        commonPicker.value?.handleOpen();
      },
      handleClose: () => {
        commonPicker.value?.handleClose();
      },
    };

    expose(refProps);

    const onModelValueUpdated = (val: SingleOrRange<DateModelType> | null) => {
      emit("update:modelValue", val);
    };

    const computedFormat = computed(() => {
      return (
        props.format ??
        (DEFAULT_FORMATS_DATEPICKER[props.type] || DEFAULT_FORMATS_DATE)
      );
    });

    const panelComponent = computed<Component>(() => getPanel(props.type));

    return {
      props,
      slots,
      commonPicker,
      onModelValueUpdated,
      computedFormat,
      panelComponent,
      CommonPicker,
    };
  },
});
</script>

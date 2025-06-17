<template>
  <g-tooltip
    ref="refPopper"
    :visible="pickerVisible"
    pure
    trigger="click"
    v-bind="$attrs"
    role="dialog"
    teleported
    :transition="`${nsDate.namespace.value}-zoom-in-top`"
    :popper-class="[`${nsDate.namespace.value}-picker__popper`]"
    :popper-options="elPopperOptions"
    :fallback-placements="fallbackPlacements"
    :gpu-acceleration="false"
    :placement="placement"
    :stop-popper-mouse-event="false"
    :hide-after="0"
    persistent
    @before-show="onBeforeShow"
    @show="onShow"
    @hide="onHide"
  >
    <template #default>
      <g-input
        v-if="!isRangeInput"
        :id="(id as string | undefined)"
        ref="inputRef"
        container-role="combobox"
        :model-value="(displayValue as string)"
        :name="name"
        :disabled="pickerDisabled"
        :label="label"
        :class="[nsDate.b('editor'), nsDate.bm('editor', type), $attrs.class]"
        :style="$attrs.style"
        :readonly="
          !editable ||
          readonly ||
          isDatesPicker ||
          isMonthsPicker ||
          isYearsPicker ||
          type === 'week'
        "
        :aria-label="ariaLabel"
        :tabindex="tabindex"
        :validate-event="false"
        :helpText="helpText"
        :messageError="messageError"
        @input="onUserInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @keydown="handleKeydownInput"
        @change="handleChange"
        @mousedown="onMouseDownInput"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
        @touchstart.passive="onTouchStartInput"
        @click.stop
      >
        <template #prefix>
          <g-icon-font
            v-if="triggerIcon"
            :class="nsInput.e('icon')"
            class="pr-2"
            @mousedown.prevent="onMouseDownInput"
            @touchstart.passive="onTouchStartInput"
            :name="triggerIcon"
          />
        </template>
        <span>
          {{ label }}
        </span>
        <div v-if="label" :class="[nsInput.e('label')]" :style="labelStyle">
          {{ label }}
        </div>
        <template #suffix>
          <g-icon-font
            v-if="showClose && clearIcon"
            :class="`${nsInput.e('icon')} clear-icon`"
            @mousedown.prevent="NOOP"
            @click="onClearIconClick"
            name="regular times"
          />
        </template>
      </g-input>
      <picker-range-trigger
        v-else
        :id="(id as string[] | undefined)"
        ref="inputRef"
        :model-value="displayValue"
        :name="(name as string[] | undefined)"
        :disabled="pickerDisabled"
        :readonly="!editable || readonly"
        :label="label"
        :start-placeholder="startPlaceholder"
        :end-placeholder="endPlaceholder"
        :class="rangeInputKls"
        :style="$attrs.style"
        :aria-label="ariaLabel"
        :tabindex="tabindex"
        autocomplete="off"
        role="combobox"
        @click="onMouseDownInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @start-input="handleStartInput"
        @start-change="handleStartChange"
        @end-input="handleEndInput"
        @end-change="handleEndChange"
        @mousedown="onMouseDownInput"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
        @touchstart.passive="onTouchStartInput"
        @keydown="handleKeydownInput"
      >
        <template #prefix>
          <g-icon-font
            v-if="triggerIcon"
            :class="[nsInput.e('icon'), nsRange.e('icon')]"
            :name="triggerIcon"
          />
        </template>
        <template #range-separator>
          <slot name="range-separator">
            <span :class="nsRange.b('separator')">{{ rangeSeparator }}</span>
          </slot>
        </template>
        <template #suffix>
          <g-icon-font
            v-if="clearIcon"
            :class="clearIconKls"
            @mousedown.prevent="NOOP"
            @click="onClearIconClick"
            name="regular times"
          />
        </template>
      </picker-range-trigger>
    </template>
    <template #content>
      <slot
        :visible="pickerVisible"
        :actual-visible="pickerActualVisible"
        :parsed-value="parsedValue"
        :format="format"
        :date-format="dateFormat"
        :time-format="timeFormat"
        :unlink-panels="unlinkPanels"
        :type="type"
        :default-value="defaultValue"
        :show-now="showNow"
        @pick="onPick"
        @select-range="setSelectionRange"
        @set-picker-option="onSetPickerOption"
        @calendar-change="onCalendarChange"
        @panel-change="onPanelChange"
        @mousedown.stop
      />
    </template>
  </g-tooltip>
</template>

<script lang="ts" setup>
import {
  computed,
  inject,
  nextTick,
  onBeforeUnmount,
  provide,
  ref,
  unref,
  useAttrs,
  watch,
} from "vue";
import { isEqual } from "lodash-unified";
import { onClickOutside, unrefElement } from "@vueuse/core";
import {
  useEmptyValues,
  useFocusController,
  useLocale,
  useNamespace,
} from "element-plus";
import { useFormItem } from "@flash-global66/g-form";
import GInput from "@flash-global66/g-input";
import { GIconFont } from "@flash-global66/g-icon-font";
import GTooltip from "@flash-global66/g-tooltip";
import { NOOP, debugWarn, isArray } from "element-plus/es/utils/index";
import { EVENT_CODE } from "element-plus/es/constants/index.mjs";
import { isNil } from "lodash-unified";
import { dayOrDaysToDate, formatter, parseDate, valueEquals } from "../utils";
import { timePickerDefaultProps } from "./props";
import PickerRangeTrigger from "./picker-range-trigger.vue";
import type { InputInstance } from "@flash-global66/g-input";

import type { Dayjs } from "dayjs";
import type { ComponentPublicInstance, Ref } from "vue";
import { useResizeObserver } from "@vueuse/core";
import type { Options } from "@popperjs/core";
import type {
  DateModelType,
  DayOrDays,
  PickerOptions,
  SingleOrRange,
  TimePickerDefaultProps,
  UserInput,
} from "./props";
import type { TooltipInstance } from "@flash-global66/g-tooltip";

defineOptions({
  name: "Picker",
});

const props = defineProps(timePickerDefaultProps);
const emit = defineEmits([
  "update:modelValue",
  "change",
  "focus",
  "blur",
  "clear",
  "calendar-change",
  "panel-change",
  "visible-change",
  "keydown",
]);
const attrs = useAttrs();

const { lang } = useLocale();

const nsDate = useNamespace("date");
const nsInput = useNamespace("input");
const nsRange = useNamespace("range");
const leftPrefix = ref<string | undefined>(undefined);
const prefixRef = ref<HTMLElement | null>(null);

const { form, formItem } = useFormItem();
const elPopperOptions = inject("ElPopperOptions", {} as Options);
const { valueOnClear } = useEmptyValues(props, null);

const refPopper = ref<TooltipInstance>();
const inputRef = ref<InputInstance>();
const pickerVisible = ref(false);
const pickerActualVisible = ref(false);
const valueOnOpen = ref<TimePickerDefaultProps["modelValue"] | null>(null);
let hasJustTabExitedInput = false;

const { isFocused, handleFocus, handleBlur } = useFocusController(inputRef, {
  beforeFocus() {
    return props.readonly || pickerDisabled.value;
  },
  afterFocus() {
    pickerVisible.value = true;
  },
  beforeBlur(event) {
    return (
      !hasJustTabExitedInput && refPopper.value?.isFocusInsideContent(event)
    );
  },
  afterBlur() {
    handleChange();
    pickerVisible.value = false;
    hasJustTabExitedInput = false;
    props.validateEvent &&
      formItem?.validate("blur").catch((err) => debugWarn(err));
  },
});

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
  if (!props.prefixIcon) {
    leftPrefix.value = "0";
    return;
  }

  requestAnimationFrame(() => {
    const leftRef = prefixRef.value?.getBoundingClientRect().width;
    leftPrefix.value = `${leftRef}px`;
  });
};

const rangeInputKls = computed(() => [
  nsDate.b("editor"),
  nsDate.bm("editor", props.type),
  nsInput.e("wrapper"),
  nsDate.is("disabled", pickerDisabled.value),
  nsDate.is("active", pickerVisible.value),
  nsRange.b("editor"),
  attrs.class,
]);

const clearIconKls = computed(() => [
  nsInput.e("icon"),
  nsRange.e("close-icon"),
  !showClose.value ? nsRange.e("close-icon--hidden") : "",
]);

watch(pickerVisible, (val) => {
  if (!val) {
    userInput.value = null;
    nextTick(() => {
      emitChange(props.modelValue);
    });
  } else {
    nextTick(() => {
      if (val) {
        valueOnOpen.value = props.modelValue;
      }
    });
  }
});
const emitChange = (
  val: TimePickerDefaultProps["modelValue"] | null,
  isClear?: boolean
) => {
  // determine user real change only
  if (isClear || !valueEquals(val, valueOnOpen.value)) {
    emit("change", val);
    props.validateEvent &&
      formItem?.validate("change").catch((err) => debugWarn(err));
  }
};
const emitInput = (input: SingleOrRange<DateModelType> | null) => {
  if (!valueEquals(props.modelValue, input)) {
    let formatted;
    if (isArray(input)) {
      formatted = input.map((item) =>
        formatter(item, props.valueFormat, lang.value)
      );
    } else if (input) {
      formatted = formatter(input, props.valueFormat, lang.value);
    }
    emit("update:modelValue", input ? formatted : input, lang.value);
  }
};
const emitKeydown = (e: KeyboardEvent) => {
  emit("keydown", e);
};

const refInput = computed<HTMLInputElement[]>(() => {
  if (inputRef.value) {
    return Array.from<HTMLInputElement>(
      inputRef.value.$el.querySelectorAll("input")
    );
  }
  return [];
});

// @ts-ignore
const setSelectionRange = (start: number, end: number, pos?: "min" | "max") => {
  const _inputs = refInput.value;
  if (!_inputs.length) return;
  if (!pos || pos === "min") {
    _inputs[0].setSelectionRange(start, end);
    _inputs[0].focus();
  } else if (pos === "max") {
    _inputs[1].setSelectionRange(start, end);
    _inputs[1].focus();
  }
};

const onPick = (date: any = "", visible = false) => {
  pickerVisible.value = visible;
  let result;
  if (isArray(date)) {
    result = date.map((_) => _.toDate());
  } else {
    // clear btn emit null
    result = date ? date.toDate() : date;
  }
  userInput.value = null;
  emitInput(result);
};

const onBeforeShow = () => {
  pickerActualVisible.value = true;
};

const onShow = () => {
  emit("visible-change", true);
};

const onHide = () => {
  pickerActualVisible.value = false;
  pickerVisible.value = false;
  emit("visible-change", false);
};

const handleOpen = () => {
  pickerVisible.value = true;
};

const handleClose = () => {
  pickerVisible.value = false;
};

const pickerDisabled = computed(() => {
  return props.disabled || form?.disabled;
});

const parsedValue = computed(() => {
  let dayOrDays: DayOrDays;
  if (valueIsEmpty.value) {
    if (pickerOptions.value.getDefaultValue) {
      dayOrDays = pickerOptions.value.getDefaultValue();
    }
  } else {
    if (isArray(props.modelValue)) {
      dayOrDays = props.modelValue.map((d) =>
        parseDate(d, props.valueFormat, lang.value)
      ) as [Dayjs, Dayjs];
    } else {
      dayOrDays = parseDate(props.modelValue, props.valueFormat, lang.value)!;
    }
  }

  if (pickerOptions.value.getRangeAvailableTime) {
    const availableResult = pickerOptions.value.getRangeAvailableTime(
      dayOrDays!
    );
    if (!isEqual(availableResult, dayOrDays!)) {
      dayOrDays = availableResult;

      // The result is corrected only when model-value exists
      if (!valueIsEmpty.value) {
        emitInput(dayOrDaysToDate(dayOrDays));
      }
    }
  }
  if (isArray(dayOrDays!) && dayOrDays.some((day) => !day)) {
    dayOrDays = [] as unknown as DayOrDays;
  }
  return dayOrDays!;
});

const displayValue = computed<UserInput>(() => {
  if (!pickerOptions.value.panelReady) return "";
  const formattedValue = formatDayjsToString(parsedValue.value);
  if (isArray(userInput.value)) {
    return [
      userInput.value[0] || (formattedValue && formattedValue[0]) || "",
      userInput.value[1] || (formattedValue && formattedValue[1]) || "",
    ];
  } else if (userInput.value !== null) {
    return userInput.value;
  }
  if (!isTimePicker.value && valueIsEmpty.value) return "";
  if (!pickerVisible.value && valueIsEmpty.value) return "";
  if (formattedValue) {
    return isDatesPicker.value || isMonthsPicker.value || isYearsPicker.value
      ? (formattedValue as Array<string>).join(", ")
      : formattedValue;
  }
  return "";
});

const isTimeLikePicker = computed(() => props.type.includes("time"));

const isTimePicker = computed(() => props.type.startsWith("time"));

const isDatesPicker = computed(() => props.type === "dates");

const isMonthsPicker = computed(() => props.type === "months");

const isYearsPicker = computed(() => props.type === "years");

const triggerIcon = computed(
  () =>
    props.prefixIcon ||
    (isTimeLikePicker.value ? "regular clock" : "regular calendar")
);

const showClose = ref(false);

const onClearIconClick = (event: MouseEvent) => {
  if (props.readonly || pickerDisabled.value) return;
  if (showClose.value) {
    event.stopPropagation();
    // When the handleClear Function was provided, emit null will be executed inside it
    // There is no need for us to execute emit null twice. #14752
    if (pickerOptions.value.handleClear) {
      pickerOptions.value.handleClear();
    } else {
      emitInput(valueOnClear.value);
    }
    emitChange(valueOnClear.value, true);
    showClose.value = false;
    onHide();
  }
  emit("clear");
};

const valueIsEmpty = computed(() => {
  const { modelValue } = props;
  return (
    !modelValue || (isArray(modelValue) && !modelValue.filter(Boolean).length)
  );
});

const onMouseDownInput = async (event: MouseEvent) => {
  if (props.readonly || pickerDisabled.value) return;
  if ((event.target as HTMLElement)?.tagName !== "INPUT" || isFocused.value) {
    pickerVisible.value = true;
  }
};
const onMouseEnter = () => {
  if (props.readonly || pickerDisabled.value) return;
  if (!valueIsEmpty.value && props.clearable) {
    showClose.value = true;
  }
};
const onMouseLeave = () => {
  showClose.value = false;
};

const onTouchStartInput = (event: TouchEvent) => {
  if (props.readonly || pickerDisabled.value) return;
  if (
    (event.touches[0].target as HTMLElement)?.tagName !== "INPUT" ||
    isFocused.value
  ) {
    pickerVisible.value = true;
  }
};

const isRangeInput = computed(() => {
  return props.type.includes("range");
});

const popperEl = computed(() => unref(refPopper)?.popperRef?.contentRef);

const stophandle = onClickOutside(
  inputRef as Ref<ComponentPublicInstance>,
  (e: PointerEvent) => {
    const unrefedPopperEl = unref(popperEl);
    const inputEl = unrefElement(inputRef as Ref<ComponentPublicInstance>);
    if (
      (unrefedPopperEl &&
        (e.target === unrefedPopperEl ||
          e.composedPath().includes(unrefedPopperEl))) ||
      e.target === inputEl ||
      (inputEl && e.composedPath().includes(inputEl))
    )
      return;
    pickerVisible.value = false;
  }
);

onBeforeUnmount(() => {
  stophandle?.();
});

const userInput = ref<UserInput>(null);

useResizeObserver(prefixRef, updatePrefixPosition);

const handleChange = () => {
  if (userInput.value) {
    const value = parseUserInputToDayjs(displayValue.value);
    if (value) {
      if (isValidValue(value)) {
        emitInput(dayOrDaysToDate(value));
        userInput.value = null;
      }
    }
  }
  if (userInput.value === "") {
    emitInput(valueOnClear.value);
    emitChange(valueOnClear.value);
    userInput.value = null;
  }
};

const parseUserInputToDayjs = (value: UserInput) => {
  if (!value) return null;
  return pickerOptions.value.parseUserInput!(value);
};

const formatDayjsToString = (value: DayOrDays) => {
  if (!value) return null;
  return pickerOptions.value.formatToString!(value);
};

const isValidValue = (value: DayOrDays) => {
  return pickerOptions.value.isValidValue!(value);
};

const handleKeydownInput = async (event: Event | KeyboardEvent) => {
  if (props.readonly || pickerDisabled.value) return;

  const { code } = event as KeyboardEvent;
  emitKeydown(event as KeyboardEvent);
  if (code === EVENT_CODE.esc) {
    if (pickerVisible.value === true) {
      pickerVisible.value = false;
      event.preventDefault();
      event.stopPropagation();
    }
    return;
  }

  if (code === EVENT_CODE.down) {
    if (pickerOptions.value.handleFocusPicker) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (pickerVisible.value === false) {
      pickerVisible.value = true;
      await nextTick();
    }
    if (pickerOptions.value.handleFocusPicker) {
      pickerOptions.value.handleFocusPicker();
      return;
    }
  }

  if (code === EVENT_CODE.tab) {
    hasJustTabExitedInput = true;
    return;
  }

  if (code === EVENT_CODE.enter || code === EVENT_CODE.numpadEnter) {
    if (
      userInput.value === null ||
      userInput.value === "" ||
      isValidValue(parseUserInputToDayjs(displayValue.value) as DayOrDays)
    ) {
      handleChange();
      pickerVisible.value = false;
    }
    event.stopPropagation();
    return;
  }

  // if user is typing, do not let picker handle key input
  if (userInput.value) {
    event.stopPropagation();
    return;
  }
  if (pickerOptions.value.handleKeydownInput) {
    pickerOptions.value.handleKeydownInput(event as KeyboardEvent);
  }
};
const onUserInput = (e: string) => {
  userInput.value = e;
  // Temporary fix when the picker is dismissed and the input box
  // is focused, just mimic the behavior of antdesign.
  if (!pickerVisible.value) {
    pickerVisible.value = true;
  }
};

const handleStartInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (userInput.value) {
    userInput.value = [target.value, userInput.value[1]];
  } else {
    userInput.value = [target.value, null];
  }
};

const handleEndInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (userInput.value) {
    userInput.value = [userInput.value[0], target.value];
  } else {
    userInput.value = [null, target.value];
  }
};

const handleStartChange = () => {
  const values = userInput.value as string[];
  const value = parseUserInputToDayjs(values && values[0]) as Dayjs;
  const parsedVal = unref(parsedValue) as [Dayjs, Dayjs];
  if (value && value.isValid()) {
    userInput.value = [
      formatDayjsToString(value) as string,
      displayValue.value?.[1] || null,
    ];
    const newValue = [value, parsedVal && (parsedVal[1] || null)] as DayOrDays;
    if (isValidValue(newValue)) {
      emitInput(dayOrDaysToDate(newValue));
      userInput.value = null;
    }
  }
};

const handleEndChange = () => {
  const values = unref(userInput) as string[];
  const value = parseUserInputToDayjs(values && values[1]) as Dayjs;
  const parsedVal = unref(parsedValue) as [Dayjs, Dayjs];
  if (value && value.isValid()) {
    userInput.value = [
      unref(displayValue)?.[0] || null,
      formatDayjsToString(value) as string,
    ];
    const newValue = [parsedVal && parsedVal[0], value] as DayOrDays;
    if (isValidValue(newValue)) {
      emitInput(dayOrDaysToDate(newValue));
      userInput.value = null;
    }
  }
};

const pickerOptions = ref<Partial<PickerOptions>>({});
// @ts-ignore
const onSetPickerOption = <T extends keyof PickerOptions>(
  e: [T, PickerOptions[T]]
) => {
  pickerOptions.value[e[0]] = e[1];
  pickerOptions.value.panelReady = true;
};

// @ts-ignore
const onCalendarChange = (e: [Date, null | Date]) => {
  emit("calendar-change", e);
};

// @ts-ignore
const onPanelChange = (
  value: [Dayjs, Dayjs],
  mode: "month" | "year",
  view: unknown
) => {
  emit("panel-change", value, mode, view);
};

const focus = () => {
  inputRef.value?.focus();
};

const blur = () => {
  inputRef.value?.blur();
};

provide("EP_PICKER_BASE", {
  props,
});

defineExpose({
  /**
   * @description focus input box.
   */
  focus,
  /**
   * @description blur input box.
   */
  blur,
  /**
   * @description opens picker
   */
  handleOpen,
  /**
   * @description closes picker
   */
  handleClose,
  /**
   * @description pick item manually
   */
  onPick,
});
</script>

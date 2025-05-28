import { UPDATE_MODEL_EVENT, useAriaProps } from "element-plus";
import {
  buildProps,
  definePropType,
  isArray,
} from "element-plus/es/utils/index.mjs";

import type { ExtractPropTypes, PropType } from "vue";
import type checkboxGroup from "./checkbox-group.vue";
import type { CheckboxValueType } from "./checkbox";
import {
  CheckboxGroupValueType,
  layoutType,
  Option,
} from "./checkbox-group.types";

export const checkboxGroupProps = buildProps({
  /**
   * @description binding value
   */
  modelValue: {
    type: definePropType<CheckboxGroupValueType>(Array),
    default: () => [],
  },
  /**
   * @description options for building checkboxes
   */
  options: {
    type: Array as PropType<Option[]>,
    default: () => [],
  },
  /**
   * @description whether the nesting checkboxes are disabled
   */
  disabled: Boolean,
  /**
   * @description minimum number of checkbox checked
   */
  min: Number,
  /**
   * @description maximum number of checkbox checked
   */
  max: Number,
  /**
   * @description type of layout
   */
  layout: {
    type: String as PropType<layoutType>,
    default: "horizontal",
  },
  /**
   * @description element tag of the checkbox group
   */
  tag: {
    type: String,
    default: "div",
  },
  /**
   * @description whether to trigger form validation
   */
  validateEvent: {
    type: Boolean,
    default: true,
  },
  /**
   * @description show the checkbox with bordered style
   */
  border: {
    type: Boolean,
    default: false,
  },
  /**
   * @description show the checkbox with inverted order of label and check input
   */
  invert: {
    type: Boolean,
    default: false,
  },
  ...useAriaProps(["ariaLabel"]),
} as const);

export const checkboxGroupEmits = {
  [UPDATE_MODEL_EVENT]: (
    val: CheckboxGroupValueType | CheckboxGroupValueType[]
  ) => isArray(val),
  change: (val: CheckboxValueType[] | CheckboxGroupValueType[]) => isArray(val),
};

export type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>;
export type CheckboxGroupEmits = typeof checkboxGroupEmits;
export type CheckboxGroupInstance = InstanceType<typeof checkboxGroup>;

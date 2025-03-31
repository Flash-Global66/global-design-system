import type { ExtractPropTypes } from "vue";
import type { OptionSegmented } from "./segmented.type";
import type Segmented from "./Segmented.vue";
import {
  CHANGE_EVENT,
  UPDATE_MODEL_EVENT,
  useAriaProps,
  useSizeProp,
} from "element-plus";
import { buildProps, definePropType, isBoolean, isNumber, isString } from "element-plus/es/utils/index.mjs";

export const segmentedProps = buildProps({
  classItem: {
    type: String,
    default: "",
  },
  /**
   * @description options of segmented
   */
  options: {
    type: definePropType<OptionSegmented[]>(Array),
    default: () => [],
  },
  /**
   * @description binding value
   */
  modelValue: {
    type: [String, Number, Boolean, null],
    default: undefined,
  },
  /**
   * @description fit width of parent content
   */
  block: Boolean,
  /**
   * @description size of component
   */
  size: useSizeProp,
  /**
   * @description whether segmented is disabled
   */
  disabled: Boolean,
  /**
   * @description whether to trigger form validation
   */
  validateEvent: {
    type: Boolean,
    default: true,
  },
  messageError: {
    type: String,
    default: ""
  },
  /**
   * @description native input id
   */
  id: String,
  /**
   * @description native `name` attribute
   */
  name: String,
  ...useAriaProps(["ariaLabel"]),
});

export type SegmentedProps = ExtractPropTypes<typeof segmentedProps>;

export const segmentedEmits = {
  [UPDATE_MODEL_EVENT]: (val: any) =>
    isString(val) || isNumber(val) || isBoolean(val),
  [CHANGE_EVENT]: (val: any) =>
    isString(val) || isNumber(val) || isBoolean(val),
};
export type SegmentedEmits = typeof segmentedEmits;

export type SegmentedInstance = InstanceType<typeof Segmented>;

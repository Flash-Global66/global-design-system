import type { ExtractPropTypes, SVGAttributes } from "vue";
import { buildProps, definePropType } from "element-plus/es/utils/index.mjs";
import type Progress from "./progress.vue";

export type ProgressColor = { color: string; percentage: number };
export type ProgressFn = (percentage: number) => string;

export const progressProps = buildProps({
  /**
   * @description type of progress bar
   */
  type: {
    type: String,
    default: "line",
    values: ["line", "circle", "dashboard"],
  },
  /**
   * @description percentage, required
   */
  percentage: {
    type: Number,
    default: 0,
    validator: (val: number): boolean => val >= 0 && val <= 100,
  },
  /**
   * @description the current status of progress bar
   */
  status: {
    type: String,
    default: "primary",
    values: ["primary", "success", "error", "warning"],
  },
  /**
   * @description set indeterminate progress
   */
  indeterminate: Boolean,
  /**
   * @description control the animation duration of indeterminate progress or striped flow progress
   */
  duration: {
    type: Number,
    default: 3,
  },
  /**
   * @description the width of progress bar
   */
  strokeWidth: {
    type: Number,
    default: 6,
  },
  /**
   * @description butt/circle/dashboard type shape at the end path
   */
  strokeLinecap: {
    type: definePropType<NonNullable<SVGAttributes["stroke-linecap"]>>(String),
    default: "round",
  },
  /**
   * @description whether to place the percentage inside progress bar, only works when `type` is 'line'
   */
  textInside: Boolean,
  /**
   * @description the canvas width of circle progress bar
   */
  width: {
    type: Number,
    default: 126,
  },
  /**
   * @description whether to show percentage
   */
  showText: {
    type: Boolean,
    default: true,
  },
  /**
   * @description should show the loading spinner icon. Overrides status icon.
   */
  loading: {
    type: Boolean,
    default: false,
  },
  format: {
    type: definePropType<ProgressFn>(Function),
    default: (percentage: number): string => `${percentage}%`,
  },
} as const);

export type ProgressProps = ExtractPropTypes<typeof progressProps>;
export type ProgressInstance = InstanceType<typeof Progress> & unknown;

import { buildProps, definePropType } from "element-plus/es/utils/index.mjs";

import type { ExtractPropTypes } from "vue";
import type { Arrayable } from "element-plus/es/utils/index.mjs";
import type { FormItemRule, ShowMessage } from "./types";

export const formItemValidateStates = [
  "",
  "error",
  "validating",
  "success",
] as const;
export type FormItemValidateState = (typeof formItemValidateStates)[number];

export type FormItemProp = Arrayable<string>;

export const formItemProps = buildProps({
  /**
   * @description  A key of `model`. It could be an array of property paths (e.g `['a', 'b', '0']`). In the use of `validate` and `resetFields` method, the attribute is required.
   */
  prop: {
    type: definePropType<FormItemProp>([String, Array]),
  },
  /**
   * @description Validation rules of form, see the [following table](#formitemrule), more advanced usage at [async-validator](https://github.com/yiminghe/async-validator).
   */
  rules: {
    type: definePropType<Arrayable<FormItemRule>>([Object, Array]),
  },
  /**
   * @description Whether to show the error message.
   */
  showMessage: {
    type: definePropType<ShowMessage>(String),
    default: "child",
  },
} as const);
export type FormItemProps = ExtractPropTypes<typeof formItemProps>;

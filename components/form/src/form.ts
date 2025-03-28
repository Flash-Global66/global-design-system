import {
  buildProps,
  definePropType,
  isArray,
  isBoolean,
  isString,
} from "element-plus/es/utils/index.mjs";

import type { ExtractPropTypes } from "vue";
import type { FormItemProp } from "./form-item";
import type { FormRules } from "./types";

export const formMetaProps = buildProps({
  /**
   * @description Whether to disable all components in this form. If set to `true`, it will override the `disabled` prop of the inner component.
   */
  disabled: Boolean,
} as const);

export const formProps = buildProps({
  ...formMetaProps,
  /**
   * @description Data of form component.
   */
  model: Object,
  /**
   * @description Validation rules of form.
   */
  rules: {
    type: definePropType<FormRules>(Object),
  },
  /**
   * @description Whether to show the error message.
   */
  /**
   * @description Whether to trigger validation when the `rules` prop is changed.
   */
  validateOnRuleChange: {
    type: Boolean,
    default: true,
  },
  /**
   * @description When validation fails, scroll to the first error form entry.
   */
  scrollToError: Boolean,
  /**
   * @description When validation fails, it scrolls to the first error item based on the scrollIntoView option.
   */
  scrollIntoViewOptions: {
    type: [Object, Boolean],
  },
} as const);
export type FormProps = ExtractPropTypes<typeof formProps>;
export type FormMetaProps = ExtractPropTypes<typeof formMetaProps>;

export const formEmits = {
  validate: (prop: FormItemProp, isValid: boolean, message: string) =>
    (isArray(prop) || isString(prop)) &&
    isBoolean(isValid) &&
    isString(message),
};
export type FormEmits = typeof formEmits;

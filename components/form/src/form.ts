import {
  buildProps,
  definePropType,
  isArray,
  isBoolean,
  isString,
} from '@flash-global66/g-utils';

import type { ExtractPropTypes } from 'vue';
import type { FormItemProp } from './form-item';
import type { FormRules } from './types';

// NOTE: no `as const` here — `@flash-global66/g-utils`'s `buildProps` is a
// simple identity passthrough (unlike element-plus's, which has generic
// machinery to narrow literal unions from a `readonly` input). Keeping
// `as const` would make prop definitions like `scrollIntoViewOptions`'s
// `[Object, Boolean]` a `readonly` tuple, which is incompatible with Vue's
// mutable `PropType` overloads for `defineProps`.
export const formMetaProps = buildProps({
  /**
   * @description Whether to disable all components in this form. If set to `true`, it will override the `disabled` prop of the inner component.
   */
  disabled: Boolean,
});

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
});
export type FormProps = ExtractPropTypes<typeof formProps>;
export type FormMetaProps = ExtractPropTypes<typeof formMetaProps>;

export const formEmits = {
  validate: (prop: FormItemProp, isValid: boolean, message: string) =>
    (isArray(prop) || isString(prop)) &&
    isBoolean(isValid) &&
    isString(message),
};
export type FormEmits = typeof formEmits;

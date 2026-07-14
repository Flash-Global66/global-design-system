import { buildProps, definePropType } from '@flash-global66/g-utils';

import type { ExtractPropTypes } from 'vue';
import type { Arrayable, ComponentSize } from '@flash-global66/g-utils';
import type { FormItemRule, ShowMessage } from '@flash-global66/g-form';

export const formItemValidateStates = [
  '',
  'error',
  'validating',
  'success',
] as const;
export type FormItemValidateState = (typeof formItemValidateStates)[number];

export type FormItemProp = Arrayable<string>;
export type FormItemLabelPosition = 'left' | 'right' | 'top' | '';

export const formItemProps = buildProps({
  /**
   * @description Label text.
   */
  label: String,
  /**
   * @description Width of label, e.g. `'50px'`.
   */
  labelWidth: {
    type: [String, Number],
  },
  /**
   * @description Position of label. Defaults to `'left'`.
   */
  labelPosition: {
    type: definePropType<FormItemLabelPosition>(String),
    default: '',
  },
  /**
   * @description A key of `model`. It could be an array of property paths
   * (e.g `['a', 'b', '0']`). Required for `validate`/`resetField` to work.
   */
  prop: {
    type: definePropType<FormItemProp>([String, Array]),
    default: '',
  },
  /**
   * @description Whether the field is required or not, will be determined
   * by validation rules if omitted.
   */
  required: {
    type: Boolean,
    default: undefined,
  },
  /**
   * @description Validation rules of this field, more advanced usage at
   * async-validator.
   */
  rules: {
    type: definePropType<Arrayable<FormItemRule>>([Object, Array]),
  },
  /**
   * @description Field error message, set its value and the field will
   * validate error and show this message immediately.
   */
  error: String,
  /**
   * @description Same as `for` in a native `<label>`.
   */
  for: String,
  /**
   * @description Inline style validate message.
   */
  inlineMessage: {
    type: Boolean,
    default: undefined,
  },
  /**
   * @description Controls where the error message is rendered: by the
   * form-item itself (`'parent'`), delegated to the nested input (`'child'`,
   * default — matches `@flash-global66/g-form`'s own native FormItem), or
   * not rendered at all (`'none'`).
   */
  showMessage: {
    type: definePropType<ShowMessage>(String),
    default: 'child',
  },
  /**
   * @description Control the size of components in this form-item.
   */
  size: {
    type: definePropType<ComponentSize>(String),
  },
});
export type FormItemProps = ExtractPropTypes<typeof formItemProps>;

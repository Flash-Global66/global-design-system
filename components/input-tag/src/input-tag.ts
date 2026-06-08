import {
  buildProps,
  definePropType,
  isArray,
  isNumber,
  isString,
  isUndefined,
} from 'element-plus/es/utils/index.mjs'
import { tagProps } from '@flash-global66/g-tag'
import {
  CHANGE_EVENT,
  EVENT_CODE,
  INPUT_EVENT,
  UPDATE_MODEL_EVENT,
} from 'element-plus/es/constants/index.mjs'
import { IconString } from '@flash-global66/g-icon-font'

import type { ExtractPropTypes } from 'vue'
import type { PopperEffect } from 'element-plus/es/components/popper'

export const inputTagProps = buildProps({
  /**
   * @description help text for input tag
   */
  helpText: {
    type: String,
    default: undefined,
  },
  /**
   * @description binding value (array of string tags)
   */
  modelValue: {
    type: definePropType<string[]>(Array),
    default: () => [] as string[],
  },
  /**
   * @description max number of tags that can be entered
   */
  max: Number,
  /**
   * @description tag type
   */
  tagType: { ...tagProps.type, default: 'info' },
  /**
   * @description tag effect
   */
  tagEffect: { ...tagProps.effect, default: 'light' },
  /**
   * @description tooltip theme, built-in theme: `dark` / `light`
   */
  effect: {
    type: definePropType<PopperEffect>(String),
    default: 'light',
  },
  /**
   * @description the key to trigger input tag
   */
  trigger: {
    type: definePropType<'Enter' | 'Space'>(String),
    default: EVENT_CODE.enter,
  },
  /**
   * @description whether tags can be dragged
   */
  draggable: Boolean,
  /**
   * @description add a tag when a delimiter is matched
   */
  delimiter: {
    type: definePropType<string | RegExp>([String, RegExp]),
    default: '',
  },
  /**
   * @description input box size
   */
  size: {
    type: String,
    values: ['large', 'default', 'small'],
    default: 'default',
  },
  /**
   * @description whether to show clear button
   */
  clearable: Boolean,
  /**
   * @description custom clear icon (DS `IconString`)
   */
  clearIcon: {
    type: definePropType<IconString>(String),
    default: 'regular circle-xmark',
  },
  /**
   * @description whether to disable input-tag
   */
  disabled: {
    type: Boolean,
    default: undefined,
  },
  /**
   * @description whether to trigger form validation
   */
  validateEvent: {
    type: Boolean,
    default: true,
  },
  /**
   * @description native input readonly
   */
  readonly: Boolean,
  /**
   * @description native input autofocus
   */
  autofocus: Boolean,
  /**
   * @description same as `id` in native input
   */
  id: {
    type: String,
    default: undefined,
  },
  /**
   * @description same as `tabindex` in native input
   */
  tabindex: {
    type: [String, Number],
    default: 0,
  },
  /**
   * @description same as `maxlength` in native input
   */
  maxlength: {
    type: [String, Number],
  },
  /**
   * @description same as `minlength` in native input
   */
  minlength: {
    type: [String, Number],
  },
  /**
   * @description placeholder of input
   */
  placeholder: String,
  /**
   * @description native input autocomplete
   */
  autocomplete: {
    type: String,
    default: 'off',
  },
  /**
   * @description whether to save the input value when the input loses focus
   */
  saveOnBlur: {
    type: Boolean,
    default: true,
  },
  /**
   * @description whether to collapse tags to a text
   */
  collapseTags: Boolean,
  /**
   * @description whether to show all selected tags when hovering collapsed tag. Requires `collapse-tags`
   */
  collapseTagsTooltip: Boolean,
  /**
   * @description the max tags number to be shown. Requires `collapse-tags`
   */
  maxCollapseTags: {
    type: Number,
    default: 1,
  },
  /**
   * @description native `aria-label` attribute
   */
  ariaLabel: String,
} as const)

export const inputTagEmits = {
  [UPDATE_MODEL_EVENT]: (value?: string[] | string) =>
    isArray(value) || isUndefined(value) || isString(value),
  [CHANGE_EVENT]: (value?: string[] | string) =>
    isArray(value) || isUndefined(value) || isString(value),
  [INPUT_EVENT]: (value: string) => isString(value),
  'add-tag': (value: string | string[]) => isString(value) || isArray(value),
  'remove-tag': (value: string, index: number) =>
    isString(value) && isNumber(index),
  'drag-tag': (oldIndex: number, newIndex: number, value: string) =>
    isNumber(oldIndex) && isNumber(newIndex) && isString(value),
  focus: (evt: FocusEvent) => evt instanceof FocusEvent,
  blur: (evt: FocusEvent) => evt instanceof FocusEvent,
  clear: () => true,
}

export type InputTagProps = ExtractPropTypes<typeof inputTagProps>
export type InputTagEmits = typeof inputTagEmits

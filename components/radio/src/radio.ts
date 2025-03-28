import { buildProps, isBoolean, isNumber, isString } from 'element-plus/es/utils/index.mjs'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from 'element-plus'
import type { ExtractPropTypes } from 'vue'
import type Radio from './radio.vue'

export const radioPropsBase = buildProps({
  /**
   * @description binding value
   */
  modelValue: {
    type: [String, Number, Boolean],
    default: undefined
  },
  /**
   * @description whether Radio is disabled
   */
  disabled: Boolean,
  /**
   * @description the label of Radio
   */
  label: {
    type: [String, Number, Boolean],
    default: undefined
  },
  /**
   * @description the value of Radio
   */
  value: {
    type: [String, Number, Boolean],
    default: undefined
  },
  /**
   * @description native `name` attribute
   */
  name: {
    type: String,
    default: undefined
  }
})

export const radioProps = buildProps({
  ...radioPropsBase
} as const)

export const radioEmits = {
  [UPDATE_MODEL_EVENT]: (val: string | number | boolean | undefined) =>
    isString(val) || isNumber(val) || isBoolean(val),
  [CHANGE_EVENT]: (val: string | number | boolean | undefined) =>
    isString(val) || isNumber(val) || isBoolean(val)
}

export type RadioProps = ExtractPropTypes<typeof radioProps>
export type RadioEmits = typeof radioEmits
export type RadioInstance = InstanceType<typeof Radio>

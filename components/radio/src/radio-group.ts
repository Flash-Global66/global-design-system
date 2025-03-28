import { buildProps } from 'element-plus/es/utils/index.mjs'
import { useAriaProps } from 'element-plus'
import { radioEmits } from './radio'
import type { ExtractPropTypes, PropType } from '@vue/runtime-core'
import type RadioGroup from './radio-group.vue'
import { layoutType, RadioOption } from './radio-group.types'

export const radioGroupProps = buildProps({
  /**
   * @description native `id` attribute
   */
  id: {
    type: String,
    default: undefined
  },
  /**
   * @description options for building checkboxes
   */
  options: {
    type: Array as PropType<RadioOption[]>,
    default: () => []
  },
  /**
   * @description whether the nesting radios are disabled
   */
  disabled: Boolean,
  /**
   * @description binding value
   */
  modelValue: {
    type: [String, Number, Boolean],
    default: undefined
  },
  /**
   * @description type of layout
   */
  layout: {
    type: String as PropType<layoutType>,
    default: 'horizontal'
  },
  /**
   * @description native `name` attribute
   */
  name: {
    type: String,
    default: undefined
  },
  /**
   * @description whether to trigger form validation
   */
  validateEvent: {
    type: Boolean,
    default: true
  },
  ...useAriaProps(['ariaLabel'])
} as const)
export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>

export const radioGroupEmits = radioEmits
export type RadioGroupEmits = typeof radioGroupEmits
export type RadioGroupInstance = InstanceType<typeof RadioGroup>

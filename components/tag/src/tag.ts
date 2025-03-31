import { buildProps, definePropType } from 'element-plus/es/utils/index'
import type Tag from './tag.vue'
import { IconString } from '@flash-global66/g-icon-font'
import type { ExtractPropTypes } from 'vue'

export const tagProps = buildProps({
  /**
   * @description type of Tag
   */
  type: {
    type: String,
    values: ['success', 'info', 'warning', 'error', 'grey'],
    default: 'grey'
  },
  /**
   * @description whether Tag can be removed
   */
  closable: Boolean,
  /**
   * @description whether to disable animations
   */
  disableTransitions: Boolean,
  /**
   * @description size of Tag
   */
  size: {
    type: String,
    values: ['xs', 'sm', 'md'],
    default: 'sm'
  },
  /**
   * @description prefix icon
   * @default undefined
   * @type {IconString}
   */
  prefixIcon: {
    type: definePropType<IconString>(String),
    default: undefined
  },
  /**
   * @description suffix icon
   * @default undefined
   * @type {IconString}
   */
  suffixIcon: {
    type: definePropType<IconString>(String),
    default: undefined
  },
  /**
   * @description theme of Tag
   */
  effect: {
    type: String,
    values: ['dark', 'light'],
    default: 'light'
  },
  /**
   * @description text content in Tag
   * @default undefined
   * @type {String}
   */
  text: {
    type: String,
    default: undefined
  }
} as const)
export type TagProps = ExtractPropTypes<typeof tagProps>

export const tagEmits = {
  close: (evt: MouseEvent) => evt instanceof MouseEvent,
  click: (evt: MouseEvent) => evt instanceof MouseEvent
}
export type TagEmits = typeof tagEmits

export type TagInstance = InstanceType<typeof Tag>

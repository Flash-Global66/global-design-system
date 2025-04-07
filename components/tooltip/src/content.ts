import { buildProps, definePropType } from 'element-plus/es/utils/index'
import { popperContentProps } from '@flash-global66/g-popper'
import { useAriaProps, useDelayedToggleProps } from 'element-plus'

import type TooltipContent from './content.vue'
import type { ExtractPropTypes } from 'vue'

export const useTooltipContentProps = buildProps({
  ...useDelayedToggleProps,
  ...popperContentProps,
  /**
   * @description which element the tooltip CONTENT appends to
   */
  appendTo: {
    type: definePropType<string | HTMLElement>([String, Object]),
  },
  /**
   * @description display content, can be overridden by `slot#content`
   */
  content: {
    type: String,
    default: '',
  },
  /**
   * @description title of tooltip
   */
  title: {
    type: String,
    default: '',
  },
  /**
   * @description description of tooltip
   */
  description: {
    type: String,
    default: '',
  },
  /**
   * @description close button of tooltip
   */
  closable: {
    type: Boolean,
    default: false,
  },
  /**
   * @description whether `content` is treated as HTML string
   */
  rawContent: Boolean,
  /**
   * @description when tooltip inactive and `persistent` is `false` , popconfirm will be destroyed
   */
  persistent: Boolean,
  // because model toggle prop is generated dynamically
  // so the typing cannot be evaluated by typescript as type:
  // [name]: { type: Boolean, default: null }
  // so we need to declare that again for type checking.
  /**
   * @description visibility of Tooltip
   */
  visible: {
    type: definePropType<boolean | null>(Boolean),
    default: null,
  },
  /**
   * @description animation name
   */
  transition: String,
  /**
   * @description whether tooltip content is teleported, if `true` it will be teleported to where `append-to` sets
   */
  teleported: {
    type: Boolean,
    default: true,
  },
  /**
   * @description whether Tooltip is disabled
   */
  disabled: Boolean,
  /**
   * @description add class customization
   */
  isComponent: {
    type: Boolean,
    default: false,
  },
  ...useAriaProps(['ariaLabel']),
} as const)

export type GTooltipContentProps = ExtractPropTypes<
  typeof useTooltipContentProps
>

export type TooltipContentInstance = InstanceType<typeof TooltipContent> &
  unknown

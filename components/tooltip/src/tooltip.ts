import { buildProps } from 'element-plus/es/utils/index'
import { createModelToggleComposable } from 'element-plus/es/hooks/index'
import { popperArrowProps, popperProps } from '@flash-global66/g-popper'
import { useTooltipContentProps } from './content'
import { useTooltipTriggerProps } from './trigger'
import type Tooltip from './tooltip.vue'

import type { ExtractPropTypes } from 'vue'

export const {
  useModelToggleProps: useTooltipModelToggleProps,
  useModelToggleEmits: useTooltipModelToggleEmits,
  useModelToggle: useTooltipModelToggle,
} = createModelToggleComposable('visible' as const)

export const useTooltipProps = buildProps({
  ...popperProps,
  ...useTooltipModelToggleProps,
  ...useTooltipContentProps,
  ...useTooltipTriggerProps,
  ...popperArrowProps,
  /**
   * @description whether the tooltip content has an arrow
   */
  showArrow: {
    type: Boolean,
    default: true,
  },
})

export const tooltipEmits = [
  ...useTooltipModelToggleEmits,
  'before-show',
  'before-hide',
  'show',
  'hide',
  'open',
  'close',
]

export type GTooltipProps = ExtractPropTypes<typeof useTooltipProps>
export type TooltipInstance = InstanceType<typeof Tooltip> & unknown

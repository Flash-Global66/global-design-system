import { unref } from 'vue'
import { isArray } from 'element-plus/es/utils/index'
import type { Arrayable } from 'element-plus/es/utils/index'
import type { Ref } from 'vue'
import type { TooltipTriggerType } from './trigger'

export const isTriggerType = (
  trigger: Arrayable<TooltipTriggerType>,
  type: TooltipTriggerType
) => {
  if (isArray(trigger)) {
    return trigger.includes(type)
  }
  return trigger === type
}

export const whenTrigger = (
  trigger: Ref<Arrayable<TooltipTriggerType>>,
  type: TooltipTriggerType,
  handler: (e: Event) => void
) => {
  return (e: Event) => {
    isTriggerType(unref(trigger), type) && handler(e)
  }
}

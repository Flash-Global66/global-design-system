import { buildProps, definePropType } from 'element-plus/es/utils/index'
import { EVENT_CODE } from 'element-plus'
import { createCollectionWithScope } from '@flash-global66/g-collection'
import { useTooltipContentProps, useTooltipTriggerProps } from '@flash-global66/g-tooltip'

import { type Placement, roleTypes } from '@flash-global66/g-popper'
import type { Options } from '@popperjs/core'
import type { ComponentInternalInstance, ComputedRef, PropType } from 'vue'
import type { IconString } from '@flash-global66/g-icon-font'
import type { Nullable } from 'element-plus/es/utils/index'
import type { actionType } from './dropdown.types'

export interface IGDropdownInstance {
  instance?: ComponentInternalInstance
  dropdownSize?: ComputedRef<string>
  handleClick?: () => void
  commandHandler?: (...arg: any[]) => void
  show?: () => void
  hide?: () => void
  trigger?: ComputedRef<string>
  hideOnClick?: ComputedRef<boolean>
  triggerElm?: ComputedRef<Nullable<HTMLButtonElement>>
}

export const dropdownProps = buildProps({
  /**
   * @description how to trigger
   */
  trigger: useTooltipTriggerProps.trigger,
  triggerKeys: {
    type: definePropType<string[]>(Array),
    default: () => [EVENT_CODE.enter, EVENT_CODE.numpadEnter, EVENT_CODE.space, EVENT_CODE.down]
  },
  /**
   * @description placement of pop menu
   */
  placement: {
    type: definePropType<Placement>(String),
    default: 'bottom'
  },
  /**
   * @description [popper.js](https://popper.js.org/docs/v2/) parameters
   */
  popperOptions: {
    type: definePropType<Partial<Options>>(Object),
    default: () => ({})
  },
  id: String,
  /**
   * @description whether to hide menu after clicking menu-item
   */
  hideOnClick: {
    type: Boolean,
    default: true
  },
  loop: {
    type: Boolean,
    default: true
  },
  /**
   * @description delay time before show a dropdown (only works when trigger is `hover`)
   */
  showTimeout: {
    type: Number,
    default: 150
  },
  /**
   * @description delay time before hide a dropdown (only works when trigger is `hover`)
   */
  hideTimeout: {
    type: Number,
    default: 150
  },
  /**
   * @description [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of Dropdown
   */
  tabindex: {
    type: definePropType<number | string>([Number, String]),
    default: 0
  },
  /**
   * @description the max height of menu
   */
  maxHeight: {
    type: definePropType<number | string>([Number, String]),
    default: ''
  },
  /**
   * @description custom class name for Dropdown's dropdown
   */
  popperClass: {
    type: String,
    default: ''
  },
  actions: {
    type: definePropType<actionType[]>(Array),
    required: true,
    default: () => []
  },
  /**
   * @description whether to disable
   */
  disabled: Boolean,
  /**
   * @description the ARIA role attribute for the dropdown menu. Depending on the use case, you may want to change this to 'navigation'
   */
  role: {
    type: String,
    values: roleTypes,
    default: 'menu'
  },
  /**
   * @description whether the dropdown popup is teleported to the body
   */
  teleported: useTooltipContentProps.teleported,
  /**
   * @description when dropdown inactive and `persistent` is `false` , dropdown menu will be destroyed
   */
  persistent: {
    type: Boolean,
    default: true
  }
} as const)

export const dropdownItemProps = buildProps({
  /**
   * @description a command to be dispatched to Dropdown's `command` callback
   */
  command: {
    type: [Object, String, Number],
    default: () => ({})
  },
  /**
   * @description whether the item is disabled
   */
  disabled: Boolean,
  /**
   * @description whether a divider is displayed
   */
  divided: Boolean,
  /**
   * @description title of the item
   */
  title: {
    type: String,
    default: '',
    required: true
  },
  /**
   * @description description of the item
   */
  description: String,
  /**
   * @description action to be dispatched to Dropdown's `action` callback
   */
  action: Function,
  /**
   * @description custom icon
   */
  icon: {
    type: String as PropType<IconString>
  }
} as const)

export const dropdownMenuProps = buildProps({
  onKeydown: { type: definePropType<(e: KeyboardEvent) => void>(Function) }
})

export const FIRST_KEYS = [EVENT_CODE.down, EVENT_CODE.pageDown, EVENT_CODE.home]

export const LAST_KEYS = [EVENT_CODE.up, EVENT_CODE.pageUp, EVENT_CODE.end]

export const FIRST_LAST_KEYS = [...FIRST_KEYS, ...LAST_KEYS]

const { GCollection, GCollectionItem, COLLECTION_INJECTION_KEY, COLLECTION_ITEM_INJECTION_KEY } =
  createCollectionWithScope('Dropdown')

export {
  GCollection,
  GCollectionItem,
  COLLECTION_INJECTION_KEY as DROPDOWN_COLLECTION_INJECTION_KEY,
  COLLECTION_ITEM_INJECTION_KEY as DROPDOWN_COLLECTION_ITEM_INJECTION_KEY
}

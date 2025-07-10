import {
  buildProps,
  definePropType,
  isArray,
  isNumber,
  isString,
  mutable
} from 'element-plus/es/utils/index'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from 'element-plus'
import type { ExtractPropTypes } from 'vue'
import type { Arrayable, Awaitable } from 'element-plus/es/utils/index'
import { IconString } from '@flash-global66/g-icon-font'

export type CollapseActiveName = string | number
export type CollapseModelValue = Arrayable<CollapseActiveName>

export type CollapseIconPositionType = 'left' | 'right'

export type IconsType = {
  icon: IconString
  onClick?: (name: CollapseActiveName, icon: IconString, isActive: boolean) => void
  spin?: boolean
}

export type CollapseItemType = {
  title: string
  name?: CollapseActiveName
  iconsRight?: IconsType[]
  disabled?: boolean
  iconsLeft?: IconsType[]
  description?: string
  content?: string | (() => string)
}

export const emitChangeFn = (value: CollapseModelValue) =>
  isNumber(value) || isString(value) || isArray(value)

export const collapseProps = buildProps({
  /**
   * @description whether to activate accordion mode
   */
  accordion: Boolean,
  /**
   * @description currently active panel, the type is `string` in accordion mode, otherwise it is `array`
   */
  modelValue: {
    type: definePropType<CollapseModelValue>([Array, String, Number]),
    default: () => mutable([] as const)
  },
  /**
   * @description set expand icon position
   */
  expandIconPosition: {
    type: definePropType<CollapseIconPositionType>([String]),
    default: 'right'
  },
  /**
   * @description before-collapse hook before the collapse state changes. If `false` is returned or a `Promise` is returned and then is rejected, will stop collapsing
   */
  beforeCollapse: {
    type: definePropType<(name: CollapseActiveName) => Awaitable<boolean>>(Function)
  },
  /**
   * @description items of the collapse component
   */
  items: {
    type: definePropType<CollapseItemType[]>(Array),
    default: () => mutable([] as const)
  }
} as const)
export type CollapseProps = ExtractPropTypes<typeof collapseProps>

export const collapseEmits = {
  [UPDATE_MODEL_EVENT]: emitChangeFn,
  [CHANGE_EVENT]: emitChangeFn,
  'header-click': (name: CollapseActiveName) => isString(name) || isNumber(name)
}
export type CollapseEmits = typeof collapseEmits

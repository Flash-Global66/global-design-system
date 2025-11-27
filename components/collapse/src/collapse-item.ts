import { buildProps, definePropType, iconPropType } from 'element-plus/es/utils/index'
import type { ExtractPropTypes } from 'vue'
import type { CollapseActiveName, IconsType } from './collapse'

export const collapseItemProps = buildProps({
  /**
   * @description title of the panel
   */
  title: {
    type: String,
    default: '',
  },
  /**
   * @description unique identification of the panel
   */
  name: {
    type: definePropType<CollapseActiveName>([String, Number]),
    default: undefined,
  },
  /**
   * @description disable the collapse item
   */
  disabled: Boolean,
  /**
   * @description icons to be displayed on the right side of the collapse item
   */
  iconsRight: {
    type: definePropType<IconsType[]>(Array),
    default: () => ([] as IconsType[]),
  },
  /**
   * @description icons to be displayed on the left side of the collapse item
   */
  iconsLeft: {
    type: definePropType<IconsType[]>(Array),
    default: () => ([] as IconsType[]),
  },
  /**
   * @description description of the collapse item
   */
  description: {
    type: String,
    default: '',
  },
  /**
   * @description content of the collapse item, can be a string or a function that returns a string
   */
  content: {
    type: definePropType<string | (() => string)>([String, Function]),
    default: '',
  },
  /**
   * @description icon to be displayed in the collapse item
   */
  expandIconPosition: {
    type: definePropType<'left' | 'right'>(String),
    default: 'right',
  },
  /**
   * @description if true, header only triggers an event without opening/closing the body
   */
  headerOnly: {
    type: Boolean,
    default: false,
  },
  /**
   * @description if true, hides the expand/collapse icon
   */
  hideIcon: {
    type: Boolean,
    default: false,
  }
} as const)
export type CollapseItemProps = ExtractPropTypes<typeof collapseItemProps>

import { buildProps, definePropType } from "element-plus/es/utils/index";

import type { VNode } from 'vue'
import { toastTypes, toastSizes } from './toast.types'


export const toastProps = buildProps({
  /**
   * @description custom class name for Toast
   */
  customClass: {
    type: String,
    default: "",
  },
  /**
   * @description whether `message` is treated as HTML string
   */
  dangerouslyUseHTMLString: Boolean,
  /**
   * @description duration before close. It will not automatically close if set 0
   */
  duration: {
    type: Number,
    default: 5000,
  },
  /**
   * @description notification dom id
   */
  id: {
    type: String,
    default: "",
  },
  /**
   * @description description text
   */
  message: {
    type: definePropType<string | VNode | (() => VNode)>([String, Object, Function]),
    default: "",
  },
  /**
   * @description offset from the top edge of the screen. Every Toast instance of the same moment should have the same offset
   */
  offset: {
    type: Number,
    default: 0,
  },
  /**
   * @description callback function when toast clicked
   */
  onClick: {
    type: definePropType<() => void>(Function),
    default: () => undefined,
  },
  /**
   * @description callback function when closed
   */
  onClose: {
    type: definePropType<() => void>(Function),
    required: true,
  },
  /**
   * @description custom position
   */
  position: {
    type: String,
    values: ["top-right", "top-left", "bottom-right", "bottom-left"],
    default: "top-right",
  },
  /**
   * @description whether to show a close button
   */
  showClose: {
    type: Boolean,
    default: true,
  },
  /**
   * @description whether to show progress bar
   */
  showProgress: {
    type: Boolean,
    default: true,
  },
  /**
   * @description toast size variant
   */
  size: {
    type: String,
    values: toastSizes,
    default: "md",
  } as const,
  /**
   * @description toast type - required and determines the icon
   */
  type: {
    type: String,
    values: toastTypes,
    required: true,
  } as const,
  /**
   * @description initial zIndex
   */
  zIndex: Number,
} as const);

export const toastEmits = {
  destroy: () => true,
}




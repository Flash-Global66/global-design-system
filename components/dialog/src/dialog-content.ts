import { buildProps } from 'element-plus/es/utils/index'
import type { ExtractPropTypes } from 'vue'
import type { DialogSizeMode, FooterButton } from './types/types'

export const dialogContentProps = buildProps({
  /**
   * @description whether Dialog takes up full screen
   */
  fullscreen: Boolean,
  /**
   * @description whether Dialog can be dragged
   */
  draggable: Boolean,
  /**
   * @description set overflow
   */
  overflow: {
    type: Boolean,
    default: true
  },
  /**
   * @description control the body element overflow
   */
  alignCenter: {
    type: Boolean,
    default: false,
  },
  /**
   * @description size mode for dialog width
   */
  sizeMode: {
    type: String,
    values: ['default', 'fixed', 'adaptive'],
    default: 'default',
  } as const,
  /**
   * @description title of Dialog
   */
  title: {
    type: String,
    default: '',
  },
  /**
   * @description custom class names for header wrapper
   */
  headerClass: String,
  /**
   * @description custom class names for body wrapper
   */
  bodyClass: String,
  /**
   * @description custom class names for footer wrapper
   */
  footerClass: String,
  /**
   * @description whether the Dialog displays a close button
   */
  showClose: {
    type: Boolean,
    default: true,
  },
  /**
   * @description width of Dialog. Required when sizeMode is set to "fixed".
   */
  width: {
    type: [String, Number],
  },
  /**
   * @description header's aria-level attribute
   */
  ariaLevel: {
    type: String,
    default: '2',
  },
  /**
   * @description buttons to show in footer
   */
  footerButtons: {
    type: Array as () => FooterButton[],
    default: () => [],
  },
} as const)

export const validateDialogProps = (props: {
  sizeMode?: DialogSizeMode
  width?: string | number
  alignCenter?: boolean
  top?: string
}) => {
  const { sizeMode, width } = props

  if (sizeMode === 'fixed' && (!width || width === '')) {
    console.warn(
      '[g-dialog] When sizeMode is set to "fixed", width must be defined.'
    )
  }
}

export type DialogContentProps = ExtractPropTypes<typeof dialogContentProps>

export const dialogContentEmits = {
  close: () => true,
}

export type DialogContentEmits = typeof dialogContentEmits
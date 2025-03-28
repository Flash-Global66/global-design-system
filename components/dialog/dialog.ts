import { buildProps, definePropType, isBoolean } from 'element-plus/es/utils/index'
import { UPDATE_MODEL_EVENT } from 'element-plus/es/constants/index'
import { dialogContentProps } from './dialog-content'
import type { ExtractPropTypes } from 'vue'
import type { DialogBeforeCloseFn } from './types'
import type Dialog from './Dialog.vue'

export const dialogProps = buildProps({
  ...dialogContentProps,
  /**
   * @description whether to append Dialog itself to body. A nested Dialog should have this attribute set to `true`
   */
  appendToBody: {
    type: Boolean,
    default: false,
  },
  /***
   * @description which element the Dialog appends to
   */
  appendTo: {
    type: definePropType<string | HTMLElement>([String, Object]),
    default: 'body',
  },
  /**
   * @description callback before Dialog closes, and it will prevent Dialog from closing, use done to close the dialog
   */
  beforeClose: {
    type: definePropType<DialogBeforeCloseFn>(Function),
  },
  /**
   * @description destroy elements in Dialog when closed
   */
  destroyOnClose: {
    type: Boolean,
    default: false,
  },
  /**
   * @description whether the Dialog can be closed by clicking the mask
   */
  closeOnClickModal: {
    type: Boolean,
    default: true,
  },
  /**
   * @description whether the Dialog can be closed by pressing ESC
   */
  closeOnPressEscape: {
    type: Boolean,
    default: true,
  },
  /**
   * @description whether scroll of body is disabled while Dialog is displayed
   */
  lockScroll: {
    type: Boolean,
    default: true,
  },
  /**
   * @description whether a mask is displayed
   */
  modal: {
    type: Boolean,
    default: true,
  },
  /**
   * @description the Time(milliseconds) before open
   */
  openDelay: {
    type: Number,
    default: 0,
  },
  /**
   * @description the Time(milliseconds) before close
   */
  closeDelay: {
    type: Number,
    default: 0,
  },
  /**
   * @description value for `margin-top` of Dialog CSS, default is 15vh
   */
  top: {
    type: String,
  },
  /**
   * @description visibility of Dialog
   */
  modelValue: Boolean,
  /**
   * @description custom class names for mask
   */
  modalClass: String,
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
   * @description width of Dialog, default is 50%
   */
  width: {
    type: [String, Number],
  },
  /**
   * @description same as z-index in native CSS, z-order of dialog
   */
  zIndex: {
    type: Number,
  },
  /**
   * @description Whether to trap focus inside the dialog
   */
  trapFocus: {
    type: Boolean,
    default: true,
  },
  /**
   * @description header's aria-level attribute
   */
  ariaLevel: {
    type: String,
    default: '2',
  },
} as const)

export type DialogProps = ExtractPropTypes<typeof dialogProps>

export const dialogEmits = {
  open: () => true,
  opened: () => true,
  close: () => true,
  closed: () => true,
  [UPDATE_MODEL_EVENT]: (value: boolean) => isBoolean(value),
  openAutoFocus: () => true,
  closeAutoFocus: () => true,
}
export type DialogEmits = typeof dialogEmits
export type DialogInstance = InstanceType<typeof Dialog>

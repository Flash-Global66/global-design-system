import { buildProps } from 'element-plus/es/utils/index'
import { ExtractPropTypes, PropType } from 'vue';
import { debugWarn } from "element-plus/es/utils/index";
import type { DialogSizeMode, FooterButton } from './types';

export const dialogContentProps = buildProps({
  /**
   * @description whether to align the dialog both horizontally and vertically
   */
  alignCenter: {
    type: Boolean,
    default: true,
  },
  /**
   * @description enable dragging feature for Dialog
   */
  draggable: Boolean,
  /**
   * @description draggable Dialog can overflow the viewport
   */
  overflow: Boolean,
  /**
   * @description whether the Dialog takes up full screen
   */
  fullscreen: Boolean,
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
   * @description whether to show a close button
   */
  showClose: {
    type: Boolean,
    default: true,
  },
  /**
   * @description title of Dialog. Can also be passed with a named slot (see the following table)
   */
  title: {
    type: String,
    default: '',
  },
  /**
   * @description header's aria-level attribute
   */
  ariaLevel: {
    type: String,
    default: '2',
  },
  /**
   * @description width of Dialog
    */
  width : {
    type: [String, Number],
  },
  /**
   * @description Mode that controls dialog width behavior
   * default: uses default max-width
   * fixed: uses width prop with no max-width
   * adaptive: adapts to content with min and max constraints
   */
  sizeMode: {
    type: String as PropType<DialogSizeMode>,
    default: 'default',
    validator: (val: string) => ['default', 'fixed', 'adaptive'].includes(val),
  },
  /**
   * @description Array of button configurations to be displayed in the footer (max 3 buttons)
   */
  footerButtons: {
    type: Array as PropType<FooterButton[]>,
    default: () => [],
    validator: (buttons: FooterButton[]) => {
      return Array.isArray(buttons);
    }
  },
} as const)

export const dialogContentEmits = {
  close: () => true,
  buttonClick: (button: FooterButton) => button,
}

export type DialogContentProps = ExtractPropTypes<typeof dialogContentProps>
export type DialogContentEmits = typeof dialogContentEmits

export function validateDialogProps(props: DialogContentProps) {
  // Validation for draggable and fullscreen (incompatible properties)
  if (props.draggable && props.fullscreen) {
    debugWarn("DialogContent", "Dialog cannot be both draggable and fullscreen.");
  }

  // Validation for width with fullscreen or adaptive sizeMode
  if (props.width) {
    if (props.fullscreen) {
      debugWarn("DialogContent", "Width prop is ignored when dialog is fullscreen.");
    } else if (props.sizeMode === 'adaptive') {
      debugWarn("DialogContent", "Width prop is ignored when sizeMode is 'adaptive'.");
    }
  }

  // Validation for footerButtons
  if (props.footerButtons && props.footerButtons.length > 3) {
    debugWarn("DialogContent", "Maximum number of buttons allowed is 3, only the first 3 will be displayed.");
  }
}
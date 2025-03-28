/**
 * Dialog component
 * Derived from Element Plus v2.9.5
 * https://github.com/element-plus/element-plus/tree/2.9.5/packages/components/dialog
 */
import GDialog from './Dialog.vue'
import { useDialog } from './use-dialog'
import { DialogEmits, DialogProps, dialogEmits, dialogProps } from './dialog'
import type { FooterButton } from './types'

export { useDialog, dialogEmits, dialogProps }
export type { DialogEmits, DialogProps, FooterButton }

export { GDialog }
export default GDialog

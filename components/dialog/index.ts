/**
 * Dialog component
 * Derived from Element Plus v2.9.5
 * https://github.com/element-plus/element-plus/tree/2.9.5/packages/components/dialog
 */
import GDialog from './src/dialog.vue'
import { useDialog } from './src/hooks/use-dialog'
import { DialogEmits, DialogProps, dialogEmits, dialogProps } from './src/dialog'
import type { FooterButton } from './src/types/types'

export { useDialog, dialogEmits, dialogProps }
export type { DialogEmits, DialogProps, FooterButton }

export { GDialog }

export default GDialog

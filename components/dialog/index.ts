/**
 * Dialog component
 * Derived from Element Plus v2.9.5
 * https://github.com/element-plus/element-plus/tree/2.9.5/packages/components/dialog
 */
import GDialog from './src/dialog.vue'
import GDialogAlert from './src/dialog-alert.vue'
import { useDialog } from './src/hooks/use-dialog'
import { useAlertProvider, useAlertInject, getAlertInstance } from './src/hooks/use-provide-alert'
import { DialogEmits, DialogProps, dialogEmits, dialogProps } from './src/dialog'
import type { FooterButton } from './src/types/types'
import type { AlertButtonResult, AlertOptions, AlertProvider } from './src/types/types'

export { useDialog, dialogEmits, dialogProps, useAlertProvider, useAlertInject, getAlertInstance }
export type { DialogEmits, DialogProps, FooterButton, AlertButtonResult, AlertOptions, AlertProvider }

export { GDialog, GDialogAlert }

export default GDialog

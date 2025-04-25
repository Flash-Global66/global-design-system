import {
  withInstall,
  withNoopInstall,
  SFCWithInstall,
} from "element-plus/es/utils/index.mjs";
import DialogAlert from './src/dialog-alert.vue';
import { openAlert } from './src/dialog-alert';
import type { AlertButtonResult, AlertOptions, AlertType } from './src/dialog.type';

export const GDialogAlert: SFCWithInstall<typeof DialogAlert> & {
  DialogAlert: typeof DialogAlert;
} = withInstall(DialogAlert, {
  DialogAlert,
});

export default GDialogAlert;
export { openAlert };
export type { AlertOptions, AlertButtonResult, AlertType };
export type DialogAlertInstance = InstanceType<typeof DialogAlert>;
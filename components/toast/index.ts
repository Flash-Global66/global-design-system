import Toast from './src/toast.vue'
import toast from './src/toastify'
import {
  withInstall,
  withInstallFunction,
  SFCWithInstall,
} from "element-plus/es/utils/index.mjs";

export const GToast: SFCWithInstall<typeof Toast> & {
  Toast: typeof Toast;
} = withInstall(Toast, {
  Toast,
});

export const GToastPlugin = withInstallFunction(toast, '$toastify')

export default GToast;

export * from './src/toast'
export * from './src/toast.types'
export { toast }

export type ToastInstance = InstanceType<typeof Toast>;

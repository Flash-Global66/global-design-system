import type { AppContext, ExtractPropTypes, VNode } from 'vue'
import type { toastProps, toastEmits } from './toast'
import type Toast from './toast.vue'

export const toastTypes = [
  'success',
  'info',
  'warning',
  'error',
] as const

export const toastSizes = [
  'sm',
  'md',
] as const

export type ToastType = typeof toastTypes[number]
export type ToastSize = typeof toastSizes[number]

export type ToastProps = ExtractPropTypes<typeof toastProps>
export type ToastEmits = typeof toastEmits

export type ToastInstance = InstanceType<typeof Toast> & unknown

export type ToastOptions = Omit<ToastProps, 'id' | 'onClose'> & {
  /**
   * @description set the root element for the toast, default to `document.body`
   */
  appendTo?: HTMLElement | string
  /**
   * @description callback function when closed
   */
  onClose?(vm: VNode): void
}

export type ToastOptionsTyped = Omit<ToastOptions, 'type'>

export interface ToastHandle {
  close: () => void
}

export type ToastParams = Partial<ToastOptions> | string | VNode

export interface ToastifyFn {
  (
    options?: ToastParams,
    appContext?: null | AppContext
  ): ToastHandle
  closeAll(): void
  _context: AppContext | null
}

export type ToastifyTypedFn = (
  options?: Omit<ToastParams, 'type'>,
  appContext?: null | AppContext
) => ToastHandle

export interface Toastify extends ToastifyFn {
  success: ToastifyTypedFn
  warning: ToastifyTypedFn
  error: ToastifyTypedFn
  info: ToastifyTypedFn
}

export interface ToastQueueItem {
  vm: VNode
}

export type ToastQueue = ToastQueueItem[]

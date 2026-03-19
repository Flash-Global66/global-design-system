import { createVNode, render, computed, h, type ExtractPropTypes } from 'vue'
import { buildProps, definePropType } from "element-plus/es/utils/index"
import DialogAlert from './dialog-alert.vue'
import { GConfigProvider } from '@flash-global66/g-config-provider'
import { FooterButton } from '@flash-global66/g-dialog/'
import type { AlertButtonResult, AlertEmits, AlertOptions, AlertType } from './dialog.type'
import type { ImageName, ImageSize } from '@flash-global66/g-image'

export const dialogAlertProps = buildProps({
  showAlert: {
    type: Boolean,
    default: false
  },
  type: {
    type: definePropType<AlertType>(String),
    default: 'info'
  },
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  imageName: {
    type: definePropType<ImageName>(String),
    default: ''
  },
  imageSize: {
    type: definePropType<ImageSize>(String),
    default: 'lg'
  },
  primaryText: {
    type: String,
    default: ''
  },
  secondaryText: {
    type: String,
    default: ''
  },
  tertiaryText: {
    type: String,
    default: ''
  },
  hideButtonClose: {
    type: Boolean,
    default: false
  }
} as const)

export type DialogAlertProps = ExtractPropTypes<typeof dialogAlertProps>

export const dialogAlertEmits = {
  close: () => true,
  next: (_result: AlertButtonResult) => true
} as const

export const useDialogAlert = (props: DialogAlertProps, emit: AlertEmits) => {
  const imageMapping: Record<AlertType, ImageName> = {
    success: 'check',
    error: 'prohibited-red',
    warning: 'warning-sign-yellow',
    info: 'information',
    important: 'alert'
  }

  const computedImageName = computed(() => props.imageName || (props.type ? imageMapping[props.type] : 'information'))
  const computedImageSize = computed<ImageSize>(() => props.imageSize || 'lg')

 const footerButtons = computed<FooterButton[]>(() => {
   const buttons: FooterButton[] = [];

   if (props.primaryText) {
     buttons.push({
       text: props.primaryText,
       variant: "primary",
       onClick: () => emit("next", { isPrimary: true, isSecondary: false, isTertiary: false }),
     });
   }

   if (props.secondaryText) {
     buttons.push({
       text: props.secondaryText,
       variant: "secondary",
       onClick: () => emit("next", { isPrimary: false, isSecondary: true, isTertiary: false }),
     });
   }

   if (props.tertiaryText) {
     buttons.push({
       text: props.tertiaryText,
       variant: "tertiary",
       onClick: () => emit("next", { isPrimary: false, isSecondary: false, isTertiary: true }),
     });
   }

   return buttons;
 });

  const handleClose = () => {
    emit('close')
  }

  return {
    computedImageName,
    computedImageSize,
    footerButtons,
    handleClose
  }
}

let activeAlertState: null | {
  container: HTMLDivElement
  resolve: (result: AlertButtonResult) => void
  closedRef: { current: boolean }
  requestId: number
} = null

let latestOpenAlertRequestId = 0

export function openAlert(options: AlertOptions): Promise<AlertButtonResult> {
  return new Promise((resolve) => {
    const requestId = ++latestOpenAlertRequestId

    if (activeAlertState) {
      const prev = activeAlertState
      activeAlertState = null

      if (prev.closedRef.current) {
        render(null, prev.container)
        try {
          prev.container.remove()
        } catch {}
      } else {
        prev.closedRef.current = true
        render(null, prev.container)
        try {
          prev.container.remove()
        } catch {}

        prev.resolve({
          isPrimary: false,
          isSecondary: false,
          isTertiary: false,
          isCloseByOtherAlert: true,
        })
      }
    }

    if (requestId !== latestOpenAlertRequestId) {
      resolve({
        isPrimary: false,
        isSecondary: false,
        isTertiary: false,
        isCloseByOtherAlert: true,
      })
      return
    }

    const container = document.createElement('div')
    document.body.appendChild(container)
    const closedRef = { current: false }

    const cleanupCurrentAlert = () => {
      render(null, container)
      try {
        container.remove()
      } catch {}
      if (activeAlertState?.container === container) activeAlertState = null
    }

    const resolveOnce = (result: AlertButtonResult) => {
      if (closedRef.current) return
      closedRef.current = true
      cleanupCurrentAlert()
      resolve(result)
    }

    const dialogVNode = createVNode(DialogAlert, {
      showAlert: true,
      type: options.type || 'info',
      title: options.title || '',
      description: options.description || '',
      imageName: options.imageName || '',
      imageSize: options.imageSize || 'lg',
      primaryText: options.primaryText || '',
      secondaryText: options.secondaryText || '',
      tertiaryText: options.tertiaryText || '',
      hideButtonClose: options.hideButtonClose || false,
      onNext: (result: AlertButtonResult) => resolveOnce(result),
      onClose: () =>
        resolveOnce({
          isPrimary: false,
          isSecondary: false,
          isTertiary: false,
          dismissedByClose: true,
        }),
    })

    const vnode = h(GConfigProvider, null, {
      default: () => [dialogVNode]
    })

    activeAlertState = { container, resolve, closedRef, requestId }
    render(vnode, container)
  })
}



export default openAlert
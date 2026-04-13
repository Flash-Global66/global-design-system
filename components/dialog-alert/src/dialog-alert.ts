import { createVNode, render, computed, h, ref, watch, type ExtractPropTypes } from 'vue'
import { buildProps, definePropType } from "element-plus/es/utils/index"
import DialogAlert from './dialog-alert.vue'
import { GConfigProvider } from '@flash-global66/g-config-provider'
import { FooterButton } from '@flash-global66/g-dialog/'
import type { AlertButtonResult, AlertCheckboxItem, AlertEmits, AlertOptions, AlertType } from './dialog.type'
import type { ImageName, ImageSize } from '@flash-global66/g-image'
import type { CheckboxValueType } from '@flash-global66/g-checkbox'

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
  },
  checkboxes: {
    type: definePropType<AlertCheckboxItem[]>(Array),
    default: () => [] as AlertCheckboxItem[]
  }
} as const)

export type DialogAlertProps = ExtractPropTypes<typeof dialogAlertProps>

export const dialogAlertEmits = {
  close: () => true,
  next: (_result: AlertButtonResult) => true
} as const

function emitWithCheckboxStates(
  emit: AlertEmits,
  payload: Omit<AlertButtonResult, 'checkboxStates'>,
  states: boolean[]
) {
  const extra = states.length ? { checkboxStates: [...states] } : {}
  emit('next', { ...payload, ...extra })
}

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

  const checkboxStates = ref<boolean[]>([])

  watch(
    () => props.checkboxes,
    (items) => {
      if (items?.length) {
        checkboxStates.value = items.map((item) => item.checked ?? false)
      } else {
        checkboxStates.value = []
      }
    },
    { immediate: true, deep: true }
  )

  const isPrimaryDisabled = computed(() => {
    const items = props.checkboxes
    if (!items?.length) return false
    return items.some((item, index) => item.required === true && !checkboxStates.value[index])
  })

  const onCheckboxModelUpdate = (index: number, val: CheckboxValueType) => {
    const checked = Boolean(val)
    checkboxStates.value[index] = checked
    props.checkboxes?.[index]?.onChange?.(checked)
  }

 const footerButtons = computed<FooterButton[]>(() => {
   const buttons: FooterButton[] = [];
   const statesSnapshot = () => [...checkboxStates.value]

   if (props.primaryText) {
     buttons.push({
       text: props.primaryText,
       variant: "primary",
       disabled: isPrimaryDisabled.value,
       onClick: () =>
         emitWithCheckboxStates(
           emit,
           { isPrimary: true, isSecondary: false, isTertiary: false },
           statesSnapshot()
         ),
     });
   }

   if (props.secondaryText) {
     buttons.push({
       text: props.secondaryText,
       variant: "secondary",
       onClick: () =>
         emitWithCheckboxStates(
           emit,
           { isPrimary: false, isSecondary: true, isTertiary: false },
           statesSnapshot()
         ),
     });
   }

   if (props.tertiaryText) {
     buttons.push({
       text: props.tertiaryText,
       variant: "tertiary",
       onClick: () =>
         emitWithCheckboxStates(
           emit,
           { isPrimary: false, isSecondary: false, isTertiary: true },
           statesSnapshot()
         ),
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
    handleClose,
    checkboxStates,
    onCheckboxModelUpdate
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
      checkboxes: options.checkboxes ?? [],      
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
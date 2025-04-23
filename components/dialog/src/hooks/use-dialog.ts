import {
  computed,
  getCurrentInstance,
  nextTick,
  onMounted,
  ref,
  watch,
} from 'vue'
import { useTimeoutFn } from '@vueuse/core'

import { isUndefined } from 'lodash-unified'
import {
  defaultNamespace,
  useId,
  useLockscreen,
  useZIndex,
} from 'element-plus/es/hooks/index'
import { UPDATE_MODEL_EVENT } from 'element-plus/es/constants/index'
import { addUnit, isClient } from 'element-plus/es/utils/index'
import { useGlobalConfig } from 'element-plus/es/components/config-provider/index'

import type { CSSProperties, Ref, SetupContext, ComputedRef } from 'vue'
import type { DialogEmits, DialogProps } from '../dialog'
import type { FooterButton } from '../types/types'

export const useDialog = (
  props: DialogProps,
  dialogRef: Ref<HTMLElement | undefined>,
  {
    closeOnClickModal,
    closeOnPressEscape,
  }: {
    closeOnClickModal: ComputedRef<boolean>,
    closeOnPressEscape: ComputedRef<boolean>,
  }
) => {
  const instance = getCurrentInstance()!
  const emit = instance.emit as SetupContext<DialogEmits>['emit']
  const { nextZIndex } = useZIndex()

  let lastPosition = ''
  const titleId = useId()
  const bodyId = useId()
  const visible = ref(false)
  const closed = ref(false)
  const rendered = ref(false) // when desctroyOnClose is true, we initialize it as false vise versa
  const zIndex = ref(props.zIndex ?? nextZIndex())

  const displayButtons = computed<FooterButton[]>(() => {
    return props.footerButtons?.slice(0, 3) || [];
  });

  const buttonLayoutClass = computed(() => {
    const count = displayButtons.value.length;
    return count === 3 ? 'layout-dual-row' : 'layout-single-column';
  });

  let openTimer: (() => void) | undefined = undefined
  let closeTimer: (() => void) | undefined = undefined

  const namespace = useGlobalConfig('namespace', defaultNamespace)

  const style = computed<CSSProperties>(() => {
    const style: CSSProperties = {}
    const varPrefix = `--${namespace.value}-dialog` as const
    if (!props.fullscreen) {
      if (props.top) {
        style[`${varPrefix}-margin-top`] = props.top
      }
      if (props.width) {
        style[`${varPrefix}-width`] = addUnit(props.width)
      }
    }
    return style
  })

  const overlayDialogStyle = computed<CSSProperties>(() => {
    if (props.alignCenter) {
      return { display: 'flex' }
    }
    return {}
  })

  function afterEnter() {
    emit('opened')
  }

  function afterLeave() {
    emit('closed')
    emit(UPDATE_MODEL_EVENT, false)
    if (props.destroyOnClose) {
      rendered.value = false
    }
  }

  function beforeLeave() {
    emit('close')
  }

  function open() {
    closeTimer?.()
    openTimer?.()

    if (props.openDelay && props.openDelay > 0) {
      ;({ stop: openTimer } = useTimeoutFn(() => doOpen(), props.openDelay))
    } else {
      doOpen()
    }
  }

  function close() {
    openTimer?.()
    closeTimer?.()

    if (props.closeDelay && props.closeDelay > 0) {
      ;({ stop: closeTimer } = useTimeoutFn(() => doClose(), props.closeDelay))
    } else {
      doClose()
    }
  }

  const handleClose = () => {
    if (!props.showClose) return;
    
    if (props.beforeClose) {
      props.beforeClose(doClose);
    } else {
      doClose();
    }
  };

  function onModalClick() {
    if (closeOnClickModal.value) {
      handleClose();
    }
  }

  function doOpen() {
    if (!isClient) return
    visible.value = true
  }

  function doClose() {
    visible.value = false
  }

  function onOpenAutoFocus() {
    emit('openAutoFocus')
  }

  function onCloseAutoFocus() {
    emit('closeAutoFocus')
  }

  function onFocusoutPrevented(event: CustomEvent) {
    if (event.detail?.focusReason === 'pointer') {
      event.preventDefault()
    }
  }

  if (props.lockScroll) {
    useLockscreen(visible)
  }

  function onCloseRequested() {
    if (closeOnPressEscape.value) {
      handleClose()
    }
  }

  watch(
    () => props.modelValue,
    (val) => {
      if (val) {
        closed.value = false
        open()
        rendered.value = true // enables lazy rendering
        zIndex.value = isUndefined(props.zIndex) ? nextZIndex() : zIndex.value++
        // this.$el.addEventListener('scroll', this.updatePopper)
        nextTick(() => {
          emit('open')
          if (dialogRef.value) {
            dialogRef.value.parentElement!.scrollTop = 0
            dialogRef.value.parentElement!.scrollLeft = 0
            dialogRef.value.scrollTop = 0
          }
        })
      } else {
        // this.$el.removeEventListener('scroll', this.updatePopper
        if (visible.value) {
          close()
        }
      }
    }
  )

  watch(
    () => props.fullscreen,
    (val) => {
      if (!dialogRef.value) return
      if (val) {
        lastPosition = dialogRef.value.style.transform
        dialogRef.value.style.transform = ''
      } else {
        dialogRef.value.style.transform = lastPosition
      }
    }
  )

  onMounted(() => {
    if (props.modelValue) {
      visible.value = true
      rendered.value = true // enables lazy rendering
      open()
    }
  })

  return {
    afterEnter,
    afterLeave,
    beforeLeave,
    handleClose,
    onModalClick,
    close,
    doClose,
    onOpenAutoFocus,
    onCloseAutoFocus,
    onCloseRequested,
    onFocusoutPrevented,
    titleId,
    bodyId,
    closed,
    style,
    overlayDialogStyle,
    rendered,
    visible,
    zIndex,
    displayButtons,
    buttonLayoutClass
  }
}
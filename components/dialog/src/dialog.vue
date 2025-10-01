<template>
  <g-teleport :to="appendTo" :disabled="appendTo !== 'body' ? false : !appendToBody">
    <transition
      name="dialog-fade"
      @after-enter="afterEnter"
      @after-leave="afterLeave"
      @before-leave="beforeLeave"
    >
      <g-overlay
        v-show="visible"
        custom-mask-event
        :mask="modal"
        :overlay-class="modalClass"
        :z-index="zIndex"
      >
        <div
          role="dialog"
          aria-modal="true"
          :aria-label="title || undefined"
          :aria-labelledby="!title ? titleId : undefined"
          :aria-describedby="bodyId"
          :class="`${ns.namespace.value}-overlay-dialog`"
          :style="overlayDialogStyle"
          @click="overlayEvent.onClick"
          @mousedown="overlayEvent.onMousedown"
          @mouseup="overlayEvent.onMouseup"
        >
          <g-focus-trap
            loop
            :trapped="visible"
            focus-start-el="container"
            @focus-after-trapped="onOpenAutoFocus"
            @focus-after-released="onCloseAutoFocus"
            @focusout-prevented="onFocusoutPrevented"
            @release-requested="onCloseRequested"
          >
            <dialog-content
              v-if="rendered"
              ref="dialogContentRef"
              v-bind="$attrs"
              :align-center="alignCenter"
              :draggable="draggable"
              :overflow="overflow"
              :fullscreen="fullscreen"
              :header-class="headerClass"
              :body-class="bodyClass"
              :footer-class="footerClass"
              :show-close="showClose"
              :title="title"
              :aria-level="ariaLevel"
              :width="width"
              :size-mode="sizeMode"
              :footer-buttons="footerButtons"
              @close="handleClose"
            >
              <template v-if="$slots.header" #header>
                <slot name="header" />
              </template>

              <template v-if="$slots.image" #image>
                <slot name="image" />
              </template>

              <slot />

              <template v-if="$slots.footer" #footer>
                <slot name="footer" />
              </template>
            </dialog-content>
          </g-focus-trap>
        </div>
      </g-overlay>
    </transition>
  </g-teleport>
</template>

<script setup lang="ts">
import { computed, provide, ref } from 'vue'
import { GFocusTrap } from '@flash-global66/g-focus-trap'
import { GTeleport } from '@flash-global66/g-teleport'
import { GOverlay } from '@flash-global66/g-overlay'
import { useNamespace, useSameTarget } from 'element-plus'
import { dialogInjectionKey } from './constants'
import { dialogEmits, dialogProps } from './dialog'
import { useDialog } from './hooks/use-dialog'
import DialogContent from './dialog-content.vue'

const props = defineProps(dialogProps)
const emit = defineEmits(dialogEmits)

const ns = useNamespace('dialog')
const dialogRef = ref<HTMLElement>()
const headerRef = ref<HTMLElement>()
const dialogContentRef = ref()

const closeOnClickModal = computed(() => props.showClose && props.closeOnClickModal)
const closeOnPressEscape = computed(() => props.showClose && props.closeOnPressEscape)

const {
  visible,
  titleId,
  bodyId,
  style,
  overlayDialogStyle,
  rendered,
  zIndex,
  afterEnter,
  afterLeave,
  beforeLeave,
  handleClose,
  onModalClick,
  onOpenAutoFocus,
  onCloseAutoFocus,
  onCloseRequested,
  onFocusoutPrevented,
  displayButtons,
  buttonLayoutClass
} = useDialog(props, dialogRef, {
  closeOnClickModal,
  closeOnPressEscape
})

provide(dialogInjectionKey, {
  dialogRef,
  headerRef,
  bodyId,
  ns,
  rendered,
  style,
  displayButtons,
  buttonLayoutClass
})

const overlayEvent = useSameTarget(onModalClick)

const draggable = computed(() => props.draggable && !props.fullscreen)

const resetPosition = () => {
  dialogContentRef.value?.resetPosition()
}

defineExpose({
  /** @description whether the dialog is visible */
  visible,
  dialogContentRef,
  resetPosition
})
</script>

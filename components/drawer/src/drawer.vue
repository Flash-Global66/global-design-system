<template>
  <g-teleport :to="appendTo" :disabled="appendTo !== 'body' ? false : !appendToBody">
    <transition
      :name="ns.b('fade')"
      @after-enter="afterEnter"
      @after-leave="afterLeave"
      @before-leave="beforeLeave"
    >
      <g-overlay
        v-show="visible"
        :mask="modal"
        :overlay-class="modalClass"
        :z-index="zIndex"
        @click="onModalClick"
      >
        <g-focus-trap
          loop
          :trapped="visible"
          :focus-trap-el="drawerRef"
          :focus-start-el="focusStartRef"
          @focus-after-trapped="onOpenAutoFocus"
          @focus-after-released="onCloseAutoFocus"
          @focusout-prevented="onFocusoutPrevented"
          @release-requested="onCloseRequested"
        >
          <div
            ref="drawerRef"
            aria-modal="true"
            :aria-label="title || undefined"
            :aria-labelledby="!title ? titleId : undefined"
            :aria-describedby="bodyId"
            v-bind="$attrs"
            :class="[ns.b(), direction, visible && 'open']"
            :style="isHorizontal ? 'width: ' + drawerSize : 'height: ' + drawerSize"
            role="dialog"
            @click.stop
          >
            <span ref="focusStartRef" :class="ns.e('sr-focus')" tabindex="-1" />
            <header :class="[ns.e('header'), headerClass]">
              <div :class="ns.em('header', 'container-close')">
                <g-icon-button icon="regular times" @click="handleClose" />
              </div>
              <div
                v-if="$slots.customHeader || title || description"
                :class="ns.em('header', 'container-title')"
              >
                <div v-if="title || description" :class="ns.em('header', 'title-description')">
                  <h5
                    v-if="title"
                    :id="titleId"
                    role="heading"
                    :aria-level="headerAriaLevel"
                    :class="ns.e('title')"
                  >
                    {{ title }}
                  </h5>

                  <span v-if="description" :class="ns.e('description')">
                    {{ description }}
                  </span>
                </div>

                <slot v-if="$slots.customHeader" name="customHeader" />
              </div>
            </header>
            <template v-if="rendered">
              <div :id="bodyId" :class="[ns.e('body'), bodyClass]">
                <slot />
              </div>
            </template>
            <div
              v-if="$slots.footer || props.footerButtons?.length"
              :class="[ns.e('footer'), footerClass]"
            >
              <slot name="footer">
                <div
                  v-if="props.footerButtons?.length"
                  :class="[ns.em('footer', 'buttons'), buttonLayoutClass]"
                >
                  <g-button
                    v-for="(button, index) in displayButtons"
                    :key="index"
                    :variant="button.variant"
                    full
                    @click="button.onClick"
                  >
                    {{ button.text }}
                  </g-button>
                </div>
              </slot>
            </div>
          </div>
        </g-focus-trap>
      </g-overlay>
    </transition>
  </g-teleport>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

import { GOverlay } from '@flash-global66/g-overlay'
import { GFocusTrap } from '@flash-global66/g-focus-trap'
import { GTeleport } from '@flash-global66/g-teleport'
// import { useDialog } from 'element-plus/es/components/dialog/index'
import { useDialog } from '@flash-global66/g-dialog'
import { addUnit } from 'element-plus/es/utils/index'
import { GButton } from '@flash-global66/g-button'
import { GIconButton } from '@flash-global66/g-icon-button'
import { useNamespace } from 'element-plus/es/hooks/index'
import { drawerEmits, drawerProps } from './drawer'

defineOptions({
  name: 'GDrawer',
  inheritAttrs: false
})

const props = defineProps(drawerProps)
defineEmits(drawerEmits)

const drawerRef = ref<HTMLElement>()
const focusStartRef = ref<HTMLElement>()
const ns = useNamespace('drawer')

const isHorizontal = computed(() => props.direction === 'rtl' || props.direction === 'ltr')
const drawerSize = computed(() => addUnit(props.size))
const closeOnPressEscape = computed(() => props.closeOnPressEscape)
const closeOnClickModal = computed(() => props.closeOnClickModal)

const {
  afterEnter,
  afterLeave,
  beforeLeave,
  visible,
  rendered,
  titleId,
  bodyId,
  zIndex,
  onModalClick,
  onOpenAutoFocus,
  onCloseAutoFocus,
  onFocusoutPrevented,
  onCloseRequested,
  handleClose,
  displayButtons,
  buttonLayoutClass
} = useDialog(props, drawerRef, {
  closeOnClickModal,
  closeOnPressEscape
})

defineExpose({
  handleClose,
  afterEnter,
  afterLeave
})
</script>

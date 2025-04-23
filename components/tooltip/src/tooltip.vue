<template>
  <g-popper ref="popperRef" :role="role">
    <g-tooltip-trigger
      :disabled="disabled"
      :trigger="trigger"
      :trigger-keys="triggerKeys"
      :virtual-ref="virtualRef"
      :virtual-triggering="virtualTriggering"
    >
      <slot v-if="$slots.default" />
    </g-tooltip-trigger>
    <g-tooltip-content
      ref="contentRef"
      :aria-label="ariaLabel"
      :boundaries-padding="boundariesPadding"
      :content="content"
      :disabled="disabled"
      :effect="effect"
      :enterable="enterable"
      :fallback-placements="fallbackPlacements"
      :hide-after="hideAfter"
      :gpu-acceleration="gpuAcceleration"
      :offset="offset"
      :persistent="persistent"
      :popper-class="[isComponent ? `${popperClass ?? ''}` : `${ns.e('tooltip')} ${popperClass ?? ''}`]"
      :popper-style="popperStyle"
      :placement="placement"
      :popper-options="popperOptions"
      :pure="pure"
      :raw-content="rawContent"
      :reference-el="referenceEl"
      :trigger-target-el="triggerTargetEl"
      :show-after="showAfter"
      :strategy="strategy"
      :teleported="teleported"
      :transition="transition"
      :virtual-triggering="virtualTriggering"
      :z-index="zIndex"
      :append-to="appendTo"
    >
      <slot name="content">
        <span v-if="rawContent" :class="ns.e('content')" v-html="content" />
        <div v-if="title || description" :class="ns.e('container')">
          <div :class="ns.e('header')">
            <h6 v-if="title">{{ title }}</h6>
            <g-icon-button v-if="closable" icon="regular times" size="small" @click="onClose" />
          </div>
          <p v-if="description" :class="ns.e('description')">
            {{ description }}
          </p>
        </div>
      </slot>
      <g-popper-arrow v-if="showArrow" :arrow-offset="arrowOffset" />
    </g-tooltip-content>
  </g-popper>
</template>

<script lang="ts" setup>
import { computed, onDeactivated, provide, readonly, ref, toRef, unref, watch } from 'vue'
import { GPopper, GPopperArrow } from '@flash-global66/g-popper'

import { isBoolean } from 'element-plus/es/utils/index'
import { useDelayedToggle, useId, usePopperContainer, useNamespace } from 'element-plus'
import { TOOLTIP_INJECTION_KEY } from './constants'
import { tooltipEmits, useTooltipModelToggle, useTooltipProps } from './tooltip'
import GTooltipTrigger from './trigger.vue'
import GTooltipContent from './content.vue'
import { GIconButton } from '@flash-global66/g-icon-button'

import type { TooltipContentInstance } from './content'
import type { PopperInstance } from '@flash-global66/g-popper'

defineOptions({
  name: 'GTooltip'
})

const props = defineProps(useTooltipProps)
const emit = defineEmits(tooltipEmits)

usePopperContainer()

const id = useId()
const ns = useNamespace('popper')
const popperRef = ref<PopperInstance>()
const contentRef = ref<TooltipContentInstance>()

const updatePopper = () => {
  const popperComponent = unref(popperRef)
  if (popperComponent) {
    popperComponent.popperInstanceRef?.update()
  }
}
const open = ref(false)
const toggleReason = ref<Event>()

const { show, hide, hasUpdateHandler } = useTooltipModelToggle({
  indicator: open,
  toggleReason
})

const { onOpen, onClose } = useDelayedToggle({
  showAfter: toRef(props, 'showAfter'),
  hideAfter: toRef(props, 'hideAfter'),
  autoClose: toRef(props, 'autoClose'),
  open: show,
  close: hide
})

const controlled = computed(() => isBoolean(props.visible) && !hasUpdateHandler.value)

provide(TOOLTIP_INJECTION_KEY, {
  controlled,
  id,
  open: readonly(open),
  trigger: toRef(props, 'trigger'),
  onOpen: (event?: Event) => {
    onOpen(event)
  },
  onClose: (event?: Event) => {
    onClose(event)
  },
  onToggle: (event?: Event) => {
    if (unref(open)) {
      onClose(event)
    } else {
      onOpen(event)
    }
  },
  onShow: () => {
    emit('show', toggleReason.value)
  },
  onHide: () => {
    emit('hide', toggleReason.value)
  },
  onBeforeShow: () => {
    emit('before-show', toggleReason.value)
  },
  onBeforeHide: () => {
    emit('before-hide', toggleReason.value)
  },
  updatePopper
})

watch(
  () => props.disabled,
  (disabled) => {
    if (disabled && open.value) {
      open.value = false
    }
  }
)

const isFocusInsideContent = (event?: FocusEvent) => {
  return contentRef.value?.isFocusInsideContent(event)
}

onDeactivated(() => open.value && hide())

defineExpose({
  /**
   * @description el-popper component instance
   */
  popperRef,
  /**
   * @description g-tooltip-content component instance
   */
  contentRef,
  /**
   * @description validate current focus event is trigger inside g-tooltip-content
   */
  isFocusInsideContent,
  /**
   * @description update el-popper component instance
   */
  updatePopper,
  /**
   * @description expose onOpen function to mange g-tooltip open state
   */
  onOpen,
  /**
   * @description expose onOpen function to mange g-tooltip open state
   */
  onClose,
  /**
   * @description expose hide function
   */
  hide
})
</script>

<template>
  <div :class="[ns.b(), ns.is('disabled', disabled)]">
    <g-tooltip
      ref="popperRef"
      :role="role"
      effect="light"
      :fallback-placements="['bottom', 'top']"
      :popper-options="popperOptions"
      :gpu-acceleration="false"
      is-component
      :hide-after="trigger === 'hover' ? hideTimeout : 0"
      :manual-mode="true"
      :placement="placement"
      :popper-class="`${ns.e('popper')} ${popperClass ?? ''}`"
      :reference-element="referenceElementRef?.$el"
      :trigger="trigger"
      :trigger-keys="triggerKeys"
      :trigger-target-el="contentRef"
      :show-after="trigger === 'hover' ? showTimeout : 0"
      :stop-popper-mouse-event="false"
      :virtual-ref="triggeringElementRef"
      :disabled="disabled"
      :transition="`${ns.namespace.value}-zoom-in-top`"
      :teleported="teleported"
      pure
      :persistent="persistent"
      @before-show="handleBeforeShowTooltip"
      @show="handleShowTooltip"
      @before-hide="handleBeforeHideTooltip"
    >
      <template #content>
        <g-scrollbar ref="scrollbar" :wrap-style="wrapStyle" tag="div" :view-class="ns.e('list')">
          <slot name="dropdown-additional-top" />
          <g-roving-focus-group
            :loop="loop"
            :current-tab-id="currentTabId"
            orientation="horizontal"
            @current-tab-id-change="handleCurrentTabIdChange"
            @entry-focus="handleEntryFocus"
          >
            <g-dropdown-collection>
              <g-dropdown-menu v-if="actions.length > 0">
                <g-dropdown-item
                  v-for="(action, index) in actions"
                  :key="`action-${index}`"
                  v-bind="action"
                >
                  <template #default v-if="$slots.option">
                    <slot name="option" v-bind="action" />
                  </template>
                </g-dropdown-item>
              </g-dropdown-menu>
              <slot v-else name="dropdown" />
            </g-dropdown-collection>
          </g-roving-focus-group>
          <slot name="dropdown-additional-bottom" />
        </g-scrollbar>
      </template>
      <template #default>
        <g-only-child :id="triggerId" ref="triggeringElementRef" role="button" :tabindex="tabindex">
          <slot name="default" />
        </g-only-child>
      </template>
    </g-tooltip>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  getCurrentInstance,
  nextTick,
  onBeforeUnmount,
  provide,
  ref,
  toRef,
  unref,
  watch
} from 'vue'
import GTooltip from '@flash-global66/g-tooltip'
import GScrollbar from '@flash-global66/g-scrollbar'
import { GIconFont } from '@flash-global66/g-icon-font'
import GRovingFocusGroup from '@flash-global66/g-roving-focus-group'
import { GOnlyChild } from '@flash-global66/g-slot'
import { addUnit, ensureArray } from 'element-plus/es/utils/index'
import GDropdownMenu from './dropdown-menu.vue'
import GDropdownItem from './dropdown-item.vue'
import { useId, useLocale, useNamespace } from 'element-plus'
import { GCollection as GDropdownCollection, dropdownProps } from './dropdown'
import { DROPDOWN_INJECTION_KEY } from './tokens'

import type { TooltipInstance } from '@flash-global66/g-tooltip'
import type { CSSProperties } from 'vue'

export default defineComponent({
  name: 'GDropdown',
  components: {
    GScrollbar,
    GDropdownCollection,
    GDropdownMenu,
    GDropdownItem,
    GTooltip,
    GRovingFocusGroup,
    GOnlyChild,
    GIconFont
  },
  props: dropdownProps,
  emits: ['visible-change', 'click', 'command'],
  setup(props, { emit }) {
    const _instance = getCurrentInstance()
    const ns = useNamespace('dropdown')
    const { t } = useLocale()

    const triggeringElementRef = ref()
    const referenceElementRef = ref()
    const popperRef = ref<TooltipInstance>()
    const contentRef = ref<HTMLElement>()
    const scrollbar = ref(null)
    const currentTabId = ref<string | null>(null)
    const isUsingKeyboard = ref(false)

    const wrapStyle = computed<CSSProperties>(() => ({
      maxHeight: addUnit(props.maxHeight)
    }))
    const trigger = computed(() => ensureArray(props.trigger))

    const defaultTriggerId = useId().value
    const triggerId = computed<string>(() => props.id || defaultTriggerId)

    // The goal of this code is to focus on the tooltip triggering element when it is hovered.
    // This is a temporary fix for where closing the dropdown through pointerleave event focuses on a
    // completely different element. For a permanent solution, remove all calls to any "element.focus()"
    // that are triggered through pointer enter/leave events.
    watch(
      [triggeringElementRef, trigger],
      ([triggeringElement, trigger], [prevTriggeringElement]) => {
        if (prevTriggeringElement?.$el?.removeEventListener) {
          prevTriggeringElement.$el.removeEventListener('pointerenter', onAutofocusTriggerEnter)
        }
        if (triggeringElement?.$el?.removeEventListener) {
          triggeringElement.$el.removeEventListener('pointerenter', onAutofocusTriggerEnter)
        }
        if (triggeringElement?.$el?.addEventListener && trigger.includes('hover')) {
          triggeringElement.$el.addEventListener('pointerenter', onAutofocusTriggerEnter)
        }
      },
      { immediate: true, flush: 'post' }
    )

    onBeforeUnmount(() => {
      if (triggeringElementRef.value?.$el?.removeEventListener) {
        triggeringElementRef.value.$el.removeEventListener('pointerenter', onAutofocusTriggerEnter)
      }
    })

    function handleClick() {
      handleClose()
    }

    function handleClose() {
      popperRef.value?.onClose()
    }

    function handleOpen() {
      popperRef.value?.onOpen()
    }

    function commandHandler(...args: any[]) {
      emit('command', ...args)
    }

    function onAutofocusTriggerEnter() {
      triggeringElementRef?.value?.$el?.focus()
    }

    function onItemEnter() {
      // NOOP for now
    }

    function onItemLeave() {
      const contentEl = unref(contentRef)

      if (trigger.value.includes('hover') && contentEl) {
        // Use nextTick to avoid recursive updates
        nextTick(() => {
          contentEl?.focus()
        })
      }
      currentTabId.value = null
    }

    function handleCurrentTabIdChange(id: string) {
      // Use nextTick to avoid recursive updates
      nextTick(() => {
        currentTabId.value = id
      })
    }

    function handleEntryFocus(e: Event) {
      if (!isUsingKeyboard.value) {
        e.preventDefault()
        e.stopImmediatePropagation()
      }
    }

    function handleBeforeShowTooltip() {
      emit('visible-change', true)
    }

    function handleShowTooltip(event?: Event) {
      if (event?.type === 'keydown' && contentRef?.value) {
        nextTick(() => {
          contentRef?.value?.focus()
        })
      }
    }

    function handleBeforeHideTooltip() {
      emit('visible-change', false)
    }

    provide(DROPDOWN_INJECTION_KEY, {
      contentRef,
      role: computed(() => props.role),
      triggerId,
      isUsingKeyboard,
      onItemEnter,
      onItemLeave
    })

    provide('gDropdown', {
      instance: _instance,
      handleClick,
      commandHandler,
      trigger: toRef(props, 'trigger'),
      hideOnClick: toRef(props, 'hideOnClick')
    })

    const onFocusAfterTrapped = (e: Event) => {
      e.preventDefault()
      if (contentRef?.value?.focus) {
        // Use nextTick to avoid recursive updates
        nextTick(() => {
          contentRef.value?.focus({
            preventScroll: true
          })
        })
      }
    }

    const handlerMainButtonClick = (event: MouseEvent) => {
      emit('click', event)
    }

    return {
      t,
      ns,
      scrollbar,
      wrapStyle,
      triggerId,
      currentTabId,
      handleCurrentTabIdChange,
      handlerMainButtonClick,
      handleEntryFocus,
      handleClose,
      handleOpen,
      handleBeforeShowTooltip,
      handleShowTooltip,
      handleBeforeHideTooltip,
      onFocusAfterTrapped,
      popperRef,
      contentRef,
      triggeringElementRef,
      referenceElementRef,
      actions: computed(() => props.actions)
    }
  }
})
</script>

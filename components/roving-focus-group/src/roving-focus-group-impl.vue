<template>
  <slot />
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  inject,
  provide,
  readonly,
  ref,
  toRef,
  unref,
  watch,
} from 'vue'
import { useEventListener } from '@vueuse/core'
import { composeEventHandlers } from 'element-plus/es/utils/index'
import {
  ROVING_FOCUS_COLLECTION_INJECTION_KEY,
  rovingFocusGroupProps,
} from './roving-focus-group'
import { ROVING_FOCUS_GROUP_INJECTION_KEY } from './tokens'
import { focusFirst } from './utils'

import type { StyleValue } from 'vue'

const CURRENT_TAB_ID_CHANGE_EVT = 'currentTabIdChange'

const ENTRY_FOCUS_EVT = 'rovingFocusGroup.entryFocus'
const EVT_OPTS: EventInit = { bubbles: false, cancelable: true }
export default defineComponent({
  name: 'GRovingFocusGroupImpl',
  inheritAttrs: false,
  props: rovingFocusGroupProps,
  emits: [CURRENT_TAB_ID_CHANGE_EVT, 'entryFocus'],
  setup(props, { emit }) {
    const currentTabbedId = ref<string | null>(
      (props.currentTabId || props.defaultCurrentTabId) ?? null
    )
    const isBackingOut = ref(false)
    const isClickFocus = ref(false)
    const rovingFocusGroupRef = ref<HTMLElement>()
    const { getItems } = inject(
      ROVING_FOCUS_COLLECTION_INJECTION_KEY,
      undefined
    )!
    const rovingFocusGroupRootStyle = computed(() => {
      // casting to any for fix compiler error since HTMLElement.StyleValue does not
      // support CSSProperties
      return [
        {
          outline: 'none',
        },
        props.style as StyleValue,
      ] as any
    })

    const onItemFocus = (tabbedId: string) => {
      emit(CURRENT_TAB_ID_CHANGE_EVT, tabbedId)
    }

    const onItemShiftTab = () => {
      isBackingOut.value = true
    }

    const onMousedown = composeEventHandlers(
      (e: Event) => {
        props.onMousedown?.(e)
      },
      () => {
        isClickFocus.value = true
      }
    )

    const onFocus = composeEventHandlers(
      (e: FocusEvent) => {
        props.onFocus?.(e)
      },
      (e: any) => {
        const isKeyboardFocus = !unref(isClickFocus)
        const { target, currentTarget } = e
        if (
          target === currentTarget &&
          isKeyboardFocus &&
          !unref(isBackingOut)
        ) {
          const entryFocusEvt = new Event(ENTRY_FOCUS_EVT, EVT_OPTS)
          currentTarget?.dispatchEvent(entryFocusEvt)

          if (!entryFocusEvt.defaultPrevented) {
            const items = getItems<{
              id: string
              focusable: boolean
              active: boolean
            }>().filter((item) => item.focusable)
            const activeItem = items.find((item) => item.active)
            const currentItem = items.find(
              (item) => item.id === unref(currentTabbedId)
            )
            const candidates = [activeItem!, currentItem!, ...items].filter(
              Boolean
            )
            const candidateNodes = candidates.map((item) => item.ref!)
            focusFirst(candidateNodes)
          }
        }

        isClickFocus.value = false
      }
    )

    const onBlur = composeEventHandlers(
      (e: Event) => {
        props.onBlur?.(e)
      },
      () => {
        isBackingOut.value = false
      }
    )

    const handleEntryFocus = (...args: any[]) => {
      emit('entryFocus', ...args)
    }

    provide(ROVING_FOCUS_GROUP_INJECTION_KEY, {
      currentTabbedId: readonly(currentTabbedId),
      loop: toRef(props, 'loop'),
      tabIndex: computed(() => {
        return unref(isBackingOut) ? -1 : 0
      }),
      rovingFocusGroupRef,
      rovingFocusGroupRootStyle,
      orientation: toRef(props, 'orientation'),
      dir: toRef(props, 'dir'),
      onItemFocus,
      onItemShiftTab,
      onBlur,
      onFocus,
      onMousedown,
    })

    watch(
      () => props.currentTabId,
      (val) => {
        currentTabbedId.value = val ?? null
      }
    )

    useEventListener(rovingFocusGroupRef, ENTRY_FOCUS_EVT, handleEntryFocus)
  },
})
</script>

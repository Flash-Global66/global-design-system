<template>
  <li v-if="divided" role="separator" :class="ns.bem('menu', 'item', 'divided')" />
  <li
    :ref="itemRef"
    v-bind="{ ...dataset, ...$attrs }"
    :aria-disabled="disabled"
    :class="[ns.be('menu', 'item'), ns.is('disabled', disabled)]"
    :tabindex="tabIndex"
    :role="role"
    @click="
      (e) => {
        if (action) {
          action?.(e)
        }
        $emit('clickimpl', e)
      }
    "
    @focus="handleFocus"
    @keydown.self="handleKeydown"
    @mousedown="handleMousedown"
    @pointermove="(e) => $emit('pointermove', e)"
    @pointerleave="(e) => $emit('pointerleave', e)"
  >
    <slot name="default">
      <g-icon-font v-if="Boolean(icon)" :name="icon" :class="ns.bem('menu', 'item', 'icon')" />
      <div :class="ns.bem('menu', 'item', 'content')">
        <span :class="ns.bem('menu', 'item', 'title')">{{ title }}</span>
        <span v-if="Boolean(description)" :class="ns.bem('menu', 'item', 'description')">
          {{ description }}
        </span>
      </div>
    </slot>
  </li>
</template>

<script lang="ts">
import { computed, defineComponent, inject } from 'vue'
import {
  ROVING_FOCUS_GROUP_ITEM_INJECTION_KEY,
  ROVING_FOCUS_ITEM_COLLECTION_INJECTION_KEY
} from '@flash-global66/g-roving-focus-group'
import { COLLECTION_ITEM_SIGN } from '@flash-global66/g-collection'
import { GIconFont } from '@flash-global66/g-icon-font'
import { useNamespace, EVENT_CODE } from 'element-plus'
import { composeEventHandlers, composeRefs } from 'element-plus/es/utils/index'
import { DROPDOWN_COLLECTION_ITEM_INJECTION_KEY, dropdownItemProps } from './dropdown'
import { DROPDOWN_INJECTION_KEY } from './tokens'

export default defineComponent({
  name: 'DropdownItemImpl',
  components: {
    GIconFont
  },
  props: dropdownItemProps,
  emits: ['pointermove', 'pointerleave', 'click', 'clickimpl'],
  setup(_, { emit }) {
    const ns = useNamespace('dropdown')

    const { role: menuRole } = inject(DROPDOWN_INJECTION_KEY, undefined)!

    const { collectionItemRef: dropdownCollectionItemRef } = inject(
      DROPDOWN_COLLECTION_ITEM_INJECTION_KEY,
      undefined
    )!

    const { collectionItemRef: rovingFocusCollectionItemRef } = inject(
      ROVING_FOCUS_ITEM_COLLECTION_INJECTION_KEY,
      undefined
    )!

    const {
      rovingFocusGroupItemRef,
      tabIndex,
      handleFocus,
      handleKeydown: handleItemKeydown,
      handleMousedown
    } = inject(ROVING_FOCUS_GROUP_ITEM_INJECTION_KEY, undefined)!

    const itemRef = composeRefs(
      dropdownCollectionItemRef,
      rovingFocusCollectionItemRef,
      rovingFocusGroupItemRef
    )

    const role = computed<string>(() => {
      if (menuRole.value === 'menu') {
        return 'menuitem'
      } else if (menuRole.value === 'navigation') {
        return 'link'
      }
      return 'button'
    })

    const handleKeydown = composeEventHandlers((e: KeyboardEvent) => {
      if ([EVENT_CODE.enter, EVENT_CODE.numpadEnter, EVENT_CODE.space].includes(e.code)) {
        e.preventDefault()
        e.stopImmediatePropagation()
        emit('clickimpl', e)
        return true
      }
    }, handleItemKeydown)

    return {
      ns,
      itemRef,
      dataset: {
        [COLLECTION_ITEM_SIGN]: ''
      },

      role,
      tabIndex,
      handleFocus,
      handleKeydown,
      handleMousedown
    }
  }
})
</script>

/** @jsx h */
import { computed, defineComponent, inject, ref, toRaw, h } from 'vue'
import { get } from 'lodash-unified'
import { isObject } from 'element-plus/es/utils/index.mjs'
import { useVirtualizer } from '@tanstack/vue-virtual'
import { useNamespace } from 'element-plus'
import { EVENT_CODE } from 'element-plus/es/constants/index.mjs'
import GroupItem from './group-item.vue'
import OptionItem from './option-item.vue'
import { useProps } from './hooks/use-props'

import { selectV2InjectionKey } from './types/token'

import type { Option, OptionItemProps } from './types/select.types'
import type { ComponentPublicInstance, ComputedRef, ExtractPropTypes, Ref, CSSProperties } from 'vue'

const GROUP_ITEM_HEIGHT = 34

const props = {
  loading: Boolean,
  data: {
    type: Array,
    required: true as const
  },
  hoveringIndex: Number,
  width: Number
}

interface SelectDropdownExposed {
  listRef: Ref<HTMLElement | undefined>
  isSized: ComputedRef<boolean>
  isItemDisabled: (modelValue: any[] | any, selected: boolean) => boolean
  isItemHovering: (target: number) => boolean
  isItemSelected: (modelValue: any[] | any, target: Option) => boolean
  scrollToItem: (index: number, align?: 'auto' | 'start' | 'center' | 'end') => void
  resetScrollTop: () => void
}

export type SelectDropdownInstance = ComponentPublicInstance<
  ExtractPropTypes<typeof props>,
  SelectDropdownExposed
>

export default defineComponent({
  name: 'GSelectDropdown',
  props,
  setup(props, { slots, expose }) {
    const select = inject(selectV2InjectionKey)!
    const ns = useNamespace('select')
    const { getTitle, getValue, getDisabled } = useProps(select.props)

    const scrollContainerRef = ref<HTMLElement>()

    const virtualizer = useVirtualizer(
      computed(() => ({
        count: scrollContainerRef.value ? props.data.length : 0,
        getScrollElement: () => scrollContainerRef.value ?? null,
        estimateSize: () => 44,
        overscan: 5,
      }))
    )


    const isSized = computed(() => true)

    const contains = (arr: Array<any> = [], target: any) => {
      const {
        props: { valueKey }
      } = select

      if (!isObject(target)) {
        return arr.includes(target)
      }

      return (
        arr &&
        arr.some((item) => {
          return toRaw(get(item, valueKey)) === get(target, valueKey)
        })
      )
    }
    const isEqual = (selected: unknown, target: unknown) => {
      if (!isObject(target)) {
        return selected === target
      } else {
        const { valueKey } = select.props
        return get(selected, valueKey) === get(target, valueKey)
      }
    }

    const isItemSelected: SelectDropdownExposed['isItemSelected'] = (modelValue, target) => {
      if (select.props.multiple) {
        return contains(modelValue, getValue(target))
      }
      return isEqual(modelValue, getValue(target))
    }

    const isItemDisabled: SelectDropdownExposed['isItemDisabled'] = (modelValue, selected) => {
      const { disabled, multiple, multipleLimit } = select.props
      return (
        disabled ||
        (!selected && (multiple ? multipleLimit > 0 && modelValue.length >= multipleLimit : false))
      )
    }

    const isItemHovering: SelectDropdownExposed['isItemHovering'] = (target) =>
      props.hoveringIndex === target

    const scrollToItem: SelectDropdownExposed['scrollToItem'] = (index, align = 'auto') => {
      if (virtualizer.value) {
        virtualizer.value.scrollToIndex(index, { align })
      }
    }

    const resetScrollTop: SelectDropdownExposed['resetScrollTop'] = () => {
      scrollContainerRef.value?.scrollTo({ top: 0 })
    }
    const exposed: SelectDropdownExposed = {
      listRef: scrollContainerRef,
      isSized,

      isItemDisabled,
      isItemHovering,
      isItemSelected,
      scrollToItem,
      resetScrollTop
    }
    expose(exposed)

    const Item = (itemProps: any) => {
      const { index, data, style, measureElement } = itemProps
      const { modelValue } = select.props
      const { onSelect, onHover } = select
      const item = data[index]
      if (item?.type === 'Group') {
        return (
          <GroupItem
            item={item}
            style={style}
            height={GROUP_ITEM_HEIGHT}
            measureElement={measureElement}
          />
        )
      }

      const isSelected = isItemSelected(modelValue, item)
      const isDisabled = isItemDisabled(modelValue, isSelected)
      const isHovering = isItemHovering(index)
      return (
        <OptionItem
          {...itemProps}
          selected={isSelected}
          disabled={getDisabled(item) || isDisabled}
          created={!!item.created}
          hovering={isHovering}
          item={item}
          measureElement={measureElement}
          descriptionLines={select.props.descriptionLines}
          onSelect={onSelect}
          onHover={onHover}
        >
          {{
            default: (props: OptionItemProps) =>
              slots.default?.(props) || h('span', {}, getTitle(item))
          }}
        </OptionItem>
      )
    }

    // computed
    const { onKeyboardNavigate, onKeyboardSelect } = select

    const onForward = () => {
      onKeyboardNavigate('forward')
    }

    const onBackward = () => {
      onKeyboardNavigate('backward')
    }

    const onEscOrTab = () => {
      // The following line actually doesn't work. Fixing it may introduce a small breaking change for some users, so just comment it out for now.
      // select.expanded = false
    }

    const onKeydown = (e: KeyboardEvent) => {
      const { code } = e
      const { tab, esc, down, up, enter, numpadEnter } = EVENT_CODE
      if (code !== tab) {
        e.preventDefault()
        e.stopPropagation()
      }

      switch (code) {
        case tab:
        case esc:
          onEscOrTab()
          break
        case down:
          onForward()
          break
        case up:
          onBackward()
          break
        case enter:
        case numpadEnter:
          onKeyboardSelect()
          break
      }
    }

    return () => {
      const { data, width } = props
      const { height, multiple, scrollbarAlwaysOn } = select.props
      const virtualItems = virtualizer.value?.getVirtualItems() ?? []
      const totalSize = virtualizer.value?.getTotalSize() ?? 0

      return h(
        'div',
        {
          class: [ns.b('dropdown'), ns.is('multiple', multiple)],
          style: {
            width: `${width}px`
          }
        },
        [
          slots.header?.(),
          slots.loading?.() || slots.empty?.() || h(
            'div',
            {
              ref: scrollContainerRef,
              class: [
                ns.be('dropdown', 'list'),
                scrollbarAlwaysOn ? ns.is('scrollbar-always-on') : ''
              ],
              style: { height: `${height}px`, overflowY: 'auto' as const },
              onKeydown: onKeydown
            },
            [
              h(
                'div',
                {
                  style: {
                    height: `${totalSize}px`,
                    width: '100%',
                    position: 'relative' as const
                  }
                },
                virtualItems.map((virtualItem) => {
                  return h(Item, {
                    key: String(virtualItem.key),
                    index: virtualItem.index,
                    data: data,
                    style: {
                      position: 'absolute' as const,
                      top: 0,
                      left: 0,
                      width: '100%',
                      transform: `translateY(${virtualItem.start}px)`
                    } as CSSProperties,
                    measureElement: (el: HTMLElement | null) => {
                      if (!el || !select.expanded.value) {
                        return
                      }
                      virtualizer.value?.measureElement(el)
                    }
                  })
                })
              )
            ]
          ),
          slots.footer?.()
        ].filter(Boolean)
      )
    }
  }
})

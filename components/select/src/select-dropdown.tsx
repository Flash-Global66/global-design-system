/** @jsx h */
import { computed, defineComponent, inject, ref, toRaw, unref, watch, h } from 'vue'
import { get } from 'lodash-unified'
import { isObject, isUndefined } from 'element-plus/es/utils/index.mjs'
import { DynamicSizeList, FixedSizeList } from 'element-plus'
import { useNamespace } from 'element-plus'
import { EVENT_CODE } from 'element-plus/es/constants/index.mjs'
import GroupItem from './group-item.vue'
import OptionItem from './option-item.vue'
import { useProps } from './hooks/use-props'

import { selectV2InjectionKey } from './types/token'

import type { DynamicSizeListInstance, FixedSizeListInstance, ItemProps } from 'element-plus'
import type { Option, OptionItemProps } from './types/select.types'
import type { ComponentPublicInstance, ComputedRef, ExtractPropTypes, Ref } from 'vue'

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
  listRef: Ref<FixedSizeListInstance | DynamicSizeListInstance | undefined>
  isSized: ComputedRef<boolean>
  isItemDisabled: (modelValue: any[] | any, selected: boolean) => boolean
  isItemHovering: (target: number) => boolean
  isItemSelected: (modelValue: any[] | any, target: Option) => boolean
  scrollToItem: (index: number) => void
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

    const cachedHeights = ref<Array<number>>([])

    const listRef = ref<FixedSizeListInstance | DynamicSizeListInstance>()

    const size = computed(() => props.data.length)

    const hasGroups = computed(() =>
      props.data.some((item: any) => item?.type === 'Group')
    )

    watch(
      () => size.value,
      () => {
        select.tooltipRef.value!.updatePopper?.()
      }
    )

    watch(
      () => [props.data, select.props.itemHeight] as const,
      () => {
        if (hasGroups.value) {
          cachedHeights.value = props.data.map((item: any) =>
            item?.type === 'Group' ? GROUP_ITEM_HEIGHT : select.props.itemHeight
          )
        }
      },
      { immediate: true }
    )

    const isSized = computed(() => isUndefined(select.props.estimatedOptionHeight))
    const listProps = computed(() => {
      if (hasGroups.value) {
        return {
          estimatedSize: select.props.itemHeight,
          itemSize: (idx: number) =>
            cachedHeights.value[idx] ?? select.props.itemHeight
        }
      }
      if (isSized.value) {
        return {
          itemSize: select.props.itemHeight
        }
      }

      return {
        estimatedSize: select.props.estimatedOptionHeight,
        itemSize: (idx: number) => cachedHeights.value[idx]
      }
    })

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

    const scrollToItem: SelectDropdownExposed['scrollToItem'] = (index) => {
      const list = listRef.value
      if (list) {
        list.scrollToItem(index)
      }
    }

    const resetScrollTop: SelectDropdownExposed['resetScrollTop'] = () => {
      const list = listRef.value
      if (list) {
        list.resetScrollTop()
      }
    }
    const exposed: SelectDropdownExposed = {
      listRef,
      isSized,

      isItemDisabled,
      isItemHovering,
      isItemSelected,
      scrollToItem,
      resetScrollTop
    }
    expose(exposed)

    const Item = (itemProps: ItemProps<any>) => {
      const { index, data, style } = itemProps
      const sized = unref(isSized)
      const { itemSize, estimatedSize } = unref(listProps)
      const { modelValue } = select.props
      const { onSelect, onHover } = select
      const item = data[index]
      if (item.type === 'Group') {
        return (
          <GroupItem
            item={item}
            style={style}
            height={GROUP_ITEM_HEIGHT}
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

      const useVariableSize = unref(hasGroups) || !unref(isSized)
      const List = useVariableSize ? DynamicSizeList : FixedSizeList

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
            List,
            {
              ref: listRef,
              ...unref(listProps),
              className: ns.be('dropdown', 'list'),
              scrollbarAlwaysOn: scrollbarAlwaysOn,
              data: data,
              height: height,
              width: width,
              total: data.length,
              onKeydown: onKeydown
            },
            {
              default: (props: ItemProps<any>) => h(Item, { ...props })
            }
          ),
          slots.footer?.()
        ].filter(Boolean) 
      )      
    }
  }
})

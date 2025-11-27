import { computed, inject, ref, unref } from 'vue'
import { useIdInjection, useNamespace } from 'element-plus'
import { collapseContextKey } from './constants'

import type { CollapseItemProps } from './collapse-item'

export const useCollapseItem = (props: CollapseItemProps) => {
  const collapse = inject(collapseContextKey)
  const { namespace } = useNamespace('collapse')

  const focusing = ref(false)
  const isClick = ref(false)
  const idInjection = useIdInjection()
  const id = computed(() => idInjection.current++)
  const name = computed(() => {
    return props.name ?? `${namespace.value}-id-${idInjection.prefix}-${unref(id)}`
  })

  const isActive = computed(() => collapse?.activeNames.value.includes(unref(name)))

  const iconsLeft = computed(() => {
    return [
      ...(props.expandIconPosition === 'left' && !props.hideIcon
        ? [
            {
              icon: 'regular angle-right',
              onClick: () => {
                collapse?.handleItemClick(unref(name))
              }
            }
          ]
        : []),
      ...(props.iconsLeft || [])
    ]
  })

  const iconsRight = computed(() => {
    return [
      ...(props.expandIconPosition === 'right' && !props.hideIcon
        ? [
            {
              icon: 'regular angle-right',
              onClick: () => {
                collapse?.handleItemClick(unref(name))
              }
            }
          ]
        : []),
      ...(props.iconsRight || [])
    ].toReversed()
  })

  const content = computed(() => {
    const isString = typeof props.content === 'string'
    return isString ? props.content : props.content?.() || ''
  })

  const slotProps = computed(() => ({
    isActive: isActive.value,
    name: name.value,
    title: props.title,
    description: props.description,
    disabled: props.disabled,
    headerOnly: props.headerOnly,
    expandIconPosition: props.expandIconPosition,
      hideIcon: props.hideIcon,
    iconsLeft: iconsLeft.value,
    iconsRight: iconsRight.value,
    focusing: focusing.value
  }))

  const handleFocus = () => {
    setTimeout(() => {
      if (!isClick.value) {
        focusing.value = true
      } else {
        isClick.value = false
      }
    }, 50)
  }

  const handleHeaderClick = () => {
    if (props.disabled) return
    
    if (props.headerOnly) {
      collapse?.handleHeaderOnlyClick?.(unref(name))
    } else {
      collapse?.handleItemClick(unref(name))
    }

    focusing.value = false
    isClick.value = true
  }

  const handleEnterClick = () => {
    if (props.headerOnly) {
      collapse?.handleHeaderOnlyClick?.(unref(name))
    } else {
      collapse?.handleItemClick(unref(name))
    }
  }

  return {
    focusing,
    id,
    isActive,
    handleFocus,
    handleHeaderClick,
    handleEnterClick,
    iconsLeft,
    iconsRight,
    content,
    name,
    slotProps
  }
}

export const useCollapseItemDOM = (
  props: CollapseItemProps,
  { focusing, isActive, id }: Partial<ReturnType<typeof useCollapseItem>>
) => {
  const ns = useNamespace('collapse')

  const rootKls = computed(() => [
    ns.b('item'),
    ns.is('active', unref(isActive)),
    ns.is('disabled', props.disabled)
  ])
  const headKls = computed(() => [
    ns.be('item', 'header'),
    ns.is('active', unref(isActive)),
    { focusing: unref(focusing) && !props.disabled }
  ])
  const iconsLeftKls = computed(() => [ns.bem('item', 'header', 'icon-left')])
  const iconsRightKls = computed(() => [ns.bem('item', 'header', 'icon-right')])
  const contentHeaderKls = computed(() => [ns.bem('item', 'header', 'content')])
  const arrowKls = computed(() => [ns.be('item', 'arrow'), ns.is('active', unref(isActive))])
  const itemTitleKls = computed(() => [ns.be('item', 'title')])
  const itemDescriptionKls = computed(() => [ns.be('item', 'description')])
  const contentHeaderTextKls = computed(() => [ns.bem('item', 'header', 'text')])
  const itemWrapperKls = computed(() => ns.be('item', 'wrap'))
  const itemContentKls = computed(() => ns.be('item', 'content'))
  const scopedContentId = computed(() => ns.b(`content-${unref(id)}`))
  const scopedHeadId = computed(() => ns.b(`head-${unref(id)}`))

  return {
    itemTitleKls,
    arrowKls,
    headKls,
    rootKls,
    itemWrapperKls,
    itemContentKls,
    scopedContentId,
    scopedHeadId,
    itemDescriptionKls,
    iconsLeftKls,
    iconsRightKls,
    contentHeaderKls,
    contentHeaderTextKls
  }
}

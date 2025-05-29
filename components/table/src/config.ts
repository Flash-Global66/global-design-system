// @ts-nocheck
import { h } from 'vue'
import { getProp, isBoolean, isFunction, isNumber } from 'element-plus/es/utils/index'
import { GCheckbox } from '@flash-global66/g-checkbox'
import { GIconFont } from '@flash-global66/g-icon-font'

import type { VNode } from 'vue'
import type { TableColumnCtx } from './table-column/defaults'
import type { Store } from './store'
import type { TreeNode } from './table/defaults'

const defaultClassNames = {
  selection: 'table-column--selection',
  expand: 'table__expand-column'
}

export const cellStarts = {
  default: {
    order: ''
  },
  selection: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ''
  },
  expand: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ''
  },
  index: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ''
  }
}

export const getDefaultClassName = (type) => {
  return defaultClassNames[type] || ''
}

export const cellForced = {
  selection: {
    renderHeader<T>({ store, column }: { store: Store<T> }) {
      function isDisabled() {
        return store.states.data.value && store.states.data.value.length === 0
      }
      return h(GCheckbox, {
        disabled: isDisabled(),
        indeterminate: store.states.selection.value.length > 0 && !store.states.isAllSelected.value,
        'onUpdate:modelValue': store.toggleAllSelection,
        modelValue: store.states.isAllSelected.value,
        ariaLabel: column.label
      })
    },
    renderCell<T>({
      row,
      column,
      store,
      $index
    }: {
      row: T
      column: TableColumnCtx<T>
      store: Store<T>
      $index: string
    }) {
      return h(GCheckbox, {
        disabled: column.selectable ? !column.selectable.call(null, row, $index) : false,
        onChange: () => {
          store.commit('rowSelectedChanged', row)
        },
        onClick: (event: Event) => event.stopPropagation(),
        modelValue: store.isSelected(row),
        ariaLabel: column.label
      })
    },
    sortable: false,
    resizable: false
  },
  index: {
    renderHeader<T>({ column }: { column: TableColumnCtx<T> }) {
      return column.label || '#'
    },
    renderCell<T>({ column, $index }: { column: TableColumnCtx<T>; $index: number }) {
      let i = $index + 1
      const index = column.index

      if (isNumber(index)) {
        i = $index + index
      } else if (isFunction(index)) {
        i = index($index)
      }
      return h('div', {}, [i])
    },
    sortable: false
  },
  expand: {
    renderHeader<T>({ column }: { column: TableColumnCtx<T> }) {
      return column.label || ''
    },
    renderCell<T>({ row, store, expanded }: { row: T; store: Store<T>; expanded: boolean }) {
      const { ns } = store
      const classes = [ns.e('expand-icon')]
      if (expanded) {
        classes.push(ns.em('expand-icon', 'expanded'))
      }
      const callback = function (e: Event) {
        e.stopPropagation()
        store.toggleRowExpansion(row)
      }
      return h(
        'div',
        {
          class: classes,
          onClick: callback
        },
        {
          default: () => {
            return [
              h(GIconFont, {
                name: 'regular angle-right'
              })
            ]
          }
        }
      )
    },
    sortable: false,
    resizable: false
  }
}

export function defaultRenderCell<T>({
  row,
  column,
  $index
}: {
  row: T
  column: TableColumnCtx<T>
  $index: number
}) {
  const property = column.property
  const value = property && getProp(row, property).value
  if (column && column.formatter) {
    return column.formatter(row, column, value, $index)
  }
  return value?.toString?.() || ''
}

export function treeCellPrefix<T>(
  {
    row,
    treeNode,
    store
  }: {
    row: T
    treeNode: TreeNode
    store: Store<T>
  },
  createPlaceholder = false
) {
  const { ns } = store
  if (!treeNode) {
    if (createPlaceholder) {
      return [
        h('span', {
          class: ns.e('placeholder')
        })
      ]
    }
    return null
  }
  const ele: VNode[] = []
  const callback = function (e) {
    e.stopPropagation()
    if (treeNode.loading) {
      return
    }
    store.loadOrToggle(row)
  }
  if (treeNode.indent) {
    ele.push(
      h('span', {
        class: ns.e('indent'),
        style: { 'padding-left': `${treeNode.indent}px` }
      })
    )
  }
  if (isBoolean(treeNode.expanded) && !treeNode.noLazyChildren) {
    const expandClasses = [
      ns.e('expand-icon'),
      treeNode.expanded ? ns.em('expand-icon', 'expanded') : ''
    ]
    let icon = 'regular angle-right'
    if (treeNode.loading) {
      icon = 'regular spinner'
    }

    ele.push(
      h(
        'div',
        {
          class: expandClasses,
          onClick: callback
        },
        {
          default: () => {
            return [
              h(GIconFont, {
                name: icon,
                ...(treeNode.loading && { spin: true })
              })
            ]
          }
        }
      )
    )
  } else {
    ele.push(
      h('span', {
        class: ns.e('placeholder')
      })
    )
  }
  return ele
}

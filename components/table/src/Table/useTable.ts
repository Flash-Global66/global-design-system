// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { computed, getCurrentInstance, onBeforeUnmount, provide } from 'vue'
import { debounce } from 'lodash-unified'
import { useLocale } from '@flash-global66/g-hooks'
import { useNamespace } from '@flash-global66/g-utils'
import { createStore } from '../shared/store/helper'
import TableLayout from '../shared/composables/table-layout'
import useUtils from './utils-helper'
import { convertToRows } from '../components/TableHeader/utils-helper'
import useStyle from './style-helper'
import useKeyRender from './key-render-helper'
import { TABLE_INJECTION_KEY } from '../shared/constants/token.constant'
import { useScrollbar } from '../shared/composables/useScrollbar'
import { clearExpansionCacheForTable } from '../components/TableColumn/cell-renderers/cell-expansion-utils'

import type { Table } from './defaults'

let tableIdSeed = 1

export function useTable(props) {
    type Row = (typeof props.data)[number]
    const { t } = useLocale()
    const ns = useNamespace('table')
    const table = getCurrentInstance() as Table<Row>
    provide(TABLE_INJECTION_KEY, table)
    const store = createStore<Row>(table, props)
    table.store = store
    const layout = new TableLayout<Row>({
      store: table.store,
      table,
      fit: props.fit,
      showHeader: props.showHeader
    })
    table.layout = layout

    const isEmpty = computed(() => (store.states.data.value || []).length === 0)

    /**
     * open functions
     */
    const {
      setCurrentRow,
      getSelectionRows,
      toggleRowSelection,
      clearSelection,
      clearFilter,
      toggleAllSelection,
      toggleRowExpansion,
      clearSort,
      sort,
      updateKeyChildren
    } = useUtils<Row>(store)
    const {
      isHidden,
      renderExpanded,
      setDragVisible,
      isGroup,
      handleMouseLeave,
      handleHeaderFooterMousewheel,
      tableSize,
      emptyBlockStyle,
      handleFixedMousewheel,
      resizeProxyVisible,
      bodyWidth,
      resizeState,
      doLayout,
      tableBodyStyles,
      tableLayout,
      scrollbarViewStyle,
      scrollbarStyle
    } = useStyle<Row>(props, layout, store, table)

    const { scrollBarRef, scrollTo, setScrollLeft, setScrollTop } = useScrollbar()

    const debouncedUpdateLayout = debounce(doLayout, 50)

    const tableId = `${ns.namespace.value}-table_${tableIdSeed++}`
    table.tableId = tableId
    table.state = {
      isGroup,
      resizeState,
      doLayout,
      debouncedUpdateLayout
    }
    const computedSumText = computed(() => props.sumText ?? t('el.table.sumText'))

    const computedEmptyText = computed(() => {
      return props.emptyText ?? t('el.table.emptyText')
    })

    const columns = computed(() => {
      return convertToRows(store.states.originColumns.value)[0]
    })

    useKeyRender(table)

    onBeforeUnmount(() => {
      debouncedUpdateLayout.cancel()
      const wrapper = (table as any).refs?.tableWrapper as HTMLElement | undefined
      clearExpansionCacheForTable(wrapper)
    })

    return {
      ns,
      layout,
      store,
      columns,
      handleHeaderFooterMousewheel,
      handleMouseLeave,
      tableId,
      tableSize,
      isHidden,
      isEmpty,
      renderExpanded,
      resizeProxyVisible,
      resizeState,
      isGroup,
      bodyWidth,
      tableBodyStyles,
      emptyBlockStyle,
      debouncedUpdateLayout,
      handleFixedMousewheel,
      /**
       * @description used in single selection Table, set a certain row selected. If called without any parameter, it will clear selection
       */
      setCurrentRow,
      /**
       * @description returns the currently selected rows
       */
      getSelectionRows,
      /**
       * @description used in multiple selection Table, toggle if a certain row is selected. With the second parameter, you can directly set if this row is selected
       */
      toggleRowSelection,
      /**
       * @description used in multiple selection Table, clear user selection
       */
      clearSelection,
      /**
       * @description clear filters of the columns whose `columnKey` are passed in. If no params, clear all filters
       */
      clearFilter,
      /**
       * @description used in multiple selection Table, toggle select all and deselect all
       */
      toggleAllSelection,
      /**
       * @description used in expandable Table or tree Table, toggle if a certain row is expanded. With the second parameter, you can directly set if this row is expanded or collapsed
       */
      toggleRowExpansion,
      /**
       * @description clear sorting, restore data to the original order
       */
      clearSort,
      /**
       * @description refresh the layout of Table. When the visibility of Table changes, you may need to call this method to get a correct layout
       */
      doLayout,
      /**
       * @description sort Table manually. Property `prop` is used to set sort column, property `order` is used to set sort order
       */
      sort,
      /**
       * @description used in lazy Table, must set `rowKey`, update key children
       */
      updateKeyChildren,
      t,
      setDragVisible,
      context: table,
      computedSumText,
      computedEmptyText,
      tableLayout,
      scrollbarViewStyle,
      scrollbarStyle,
      scrollBarRef,
      /**
       * @description scrolls to a particular set of coordinates
       */
      scrollTo,
      /**
       * @description set horizontal scroll position
       */
      setScrollLeft,
      /**
       * @description set vertical scroll position
       */
      setScrollTop,
      /**
       * @description whether to allow drag the last column
       */
      allowDragLastColumn: props.allowDragLastColumn
    }
}

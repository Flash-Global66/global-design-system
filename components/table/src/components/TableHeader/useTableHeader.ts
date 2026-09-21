// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {
  computed,
  getCurrentInstance,
  inject,
  nextTick,
  onMounted,
  reactive,
  ref,
  watch,
} from 'vue';
import { useNamespace } from '@flash-global66/g-utils';
import useLayoutObserver from '../../shared/composables/useLayoutObserver';
import { TABLE_INJECTION_KEY } from '../../shared/constants/token.constant';
import { convertToRows } from '../../shared/utils/tableColumn.util';
import useEvent from './useEvent';
import useStyle from './useStyle';
import type {
  TableHeader,
  TableHeaderProps,
} from '../../shared/types/tableHeader.type';
import type { TableColumnCtx } from '../TableColumn/defaults';

export function useTableHeader<T>(props: TableHeaderProps<T>, emit) {
  const instance = getCurrentInstance() as TableHeader;
  const parent = inject(TABLE_INJECTION_KEY);
  const ns = useNamespace('table');
  const filterPanels = ref({});
  const { onColumnsChange, onScrollableChange } = useLayoutObserver(parent!);

  const isTableLayoutAuto = parent?.props.tableLayout === 'auto';
  const saveIndexSelection = reactive(new Map());
  const theadRef = ref();

  const updateFixedColumnStyle = () => {
    setTimeout(() => {
      if (saveIndexSelection.size > 0) {
        saveIndexSelection.forEach((column, key) => {
          const el = theadRef.value.querySelector(
            `.${key.replace(/\s/g, '.')}`,
          );
          if (el) {
            const width = el.getBoundingClientRect().width;
            column.width = width;
          }
        });
        saveIndexSelection.clear();
      }
    });
  };

  watch(saveIndexSelection, updateFixedColumnStyle);

  onMounted(async () => {
    // Need double await, because updateColumns is executed after nextTick for now
    await nextTick();
    await nextTick();
    const { prop, order } = props.defaultSort;
    parent?.store.commit('sort', { prop, order, init: true });

    updateFixedColumnStyle();
  });

  const {
    handleHeaderClick,
    handleHeaderContextMenu,
    handleMouseDown,
    handleMouseMove,
    handleMouseOut,
    handleSortClick,
    handleFilterClick,
  } = useEvent(props as TableHeaderProps<unknown>, emit);
  const {
    getHeaderRowStyle,
    getHeaderRowClass,
    getHeaderCellStyle,
    getHeaderCellClass,
  } = useStyle(props as TableHeaderProps<unknown>);

  const columnRows = computed(() => {
    return convertToRows(props.store.states.originColumns.value);
  });
  const isGroup = computed(() => {
    const result = columnRows.value.length > 1;
    if (result && parent) {
      parent.state.isGroup.value = true;
    }
    return result;
  });
  const toggleAllSelection = (event: Event) => {
    event.stopPropagation();
    parent?.store.commit('toggleAllSelection');
  };

  instance.state = {
    onColumnsChange,
    onScrollableChange,
  };
  instance.filterPanels = filterPanels;

  const handleHeaderCellClick = (
    event: MouseEvent,
    column: TableColumnCtx<T>,
  ) => {
    if ((event.currentTarget as HTMLElement).classList.contains('noclick')) {
      return;
    }
    handleHeaderClick(event, column);
  };

  const resolveHeaderCellClass = (
    rowIndex: number,
    cellIndex: number,
    subColumns: TableColumnCtx<T>[],
    column: TableColumnCtx<T>,
  ) => {
    const cellClass = getHeaderCellClass(
      rowIndex,
      cellIndex,
      subColumns,
      column,
    );
    if (isTableLayoutAuto && column.fixed) {
      saveIndexSelection.set(cellClass, column);
    }
    return cellClass;
  };

  return {
    ns,
    parent,
    filterPanels,
    onColumnsChange,
    onScrollableChange,
    columnRows,
    getHeaderRowClass,
    getHeaderRowStyle,
    getHeaderCellStyle,
    resolveHeaderCellClass,
    handleHeaderCellClick,
    handleHeaderContextMenu,
    handleMouseDown,
    handleMouseMove,
    handleMouseOut,
    handleSortClick,
    handleFilterClick,
    isGroup,
    toggleAllSelection,
    saveIndexSelection,
    isTableLayoutAuto,
    theadRef,
    updateFixedColumnStyle,
  };
}

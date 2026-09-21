// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {
  computed,
  getCurrentInstance,
  onBeforeMount,
  onBeforeUnmount,
  onMounted,
  ref,
} from 'vue';
import { isUndefined } from '@flash-global66/g-utils';
import { cellStarts } from '../../shared/constants/renderer.constant';
import { compose, mergeOptions } from '../../shared/utils/table.util';
import useWatcher from './useWatcher';
import useRender from './useRender';
import type { TableColumn, TableColumnCtx } from './defaults';
import type { DefaultRow } from '../../Table/defaults';

let columnIdSeed = 1;

/**
 * Orquesta el registro de una columna en la tabla: resuelve el owner (tabla o
 * columna padre), compone los defaults con las props, y sincroniza el ciclo de
 * vida del componente con el store (`insertColumn` / `removeColumn`).
 */
function useTableColumn(props: TableColumnCtx<DefaultRow>, slots) {
  const instance = getCurrentInstance() as TableColumn<DefaultRow>;
  const columnConfig = ref<Partial<TableColumnCtx<DefaultRow>>>({});
  const owner = computed(() => {
    let parent = instance.parent as any;
    while (parent && !parent.tableId) {
      parent = parent.parent;
    }
    return parent;
  });

  const { registerNormalWatchers, registerComplexWatchers } = useWatcher(
    owner,
    props,
  );
  const {
    columnId,
    isSubColumn,
    realHeaderAlign,
    columnOrTableParent,
    setColumnWidth,
    setColumnForcedProps,
    setColumnRenders,
    getPropsData,
    getColumnElIndex,
    realAlign,
    updateColumnOrder,
  } = useRender(props as unknown as TableColumnCtx<unknown>, slots, owner);

  const parent = columnOrTableParent.value;
  columnId.value = `${
    parent.tableId || parent.columnId
  }_column_${columnIdSeed++}`;

  onBeforeMount(() => {
    isSubColumn.value = owner.value !== parent;

    const type = props.type || 'default';
    const sortable = props.sortable === '' ? true : props.sortable;
    //The selection column should not be affected by `showOverflowTooltip`.
    const showOverflowTooltip =
      type === 'selection'
        ? false
        : isUndefined(props.showOverflowTooltip)
          ? parent.props.showOverflowTooltip
          : props.showOverflowTooltip;
    const tooltipFormatter = isUndefined(props.tooltipFormatter)
      ? parent.props.tooltipFormatter
      : props.tooltipFormatter;
    const defaults = {
      ...cellStarts[type],
      id: columnId.value,
      type,
      property: props.prop || props.property,
      align: realAlign,
      headerAlign: realHeaderAlign,
      showOverflowTooltip,
      tooltipFormatter,
      // filter 相关属性
      filterable: props.filters || props.filterMethod,
      filteredValue: [],
      filterPlacement: '',
      filterClassName: '',
      isColumnGroup: false,
      isSubColumn: false,
      filterOpened: false,
      // sort 相关属性
      sortable,
      // index 列
      index: props.index,
      // <el-table-column key="xxx" />
      rawColumnKey: instance.vnode.key,
    };

    const basicProps = [
      'columnKey',
      'label',
      'className',
      'labelClassName',
      'type',
      'renderHeader',
      'formatter',
      'fixed',
      'resizable',
    ];
    const sortProps = ['sortMethod', 'sortBy', 'sortOrders'];
    const selectProps = ['selectable', 'reserveSelection'];
    const filterProps = [
      'filterMethod',
      'filters',
      'filterMultiple',
      'filterOpened',
      'filteredValue',
      'filterPlacement',
      'filterClassName',
    ];
    const cellProps = [
      'cellType',
      'cellOptions',
      'emptyActionText',
      'inputLabel',
    ];

    let column = getPropsData(
      basicProps,
      sortProps,
      selectProps,
      filterProps,
      cellProps,
    );

    column = mergeOptions(defaults, column);
    // 注意 compose 中函数执行的顺序是从右到左
    const chains = compose(
      setColumnRenders,
      setColumnWidth,
      setColumnForcedProps,
    );
    column = chains(column);
    columnConfig.value = column;

    // 注册 watcher
    registerNormalWatchers();
    registerComplexWatchers();
  });
  onMounted(() => {
    const parent = columnOrTableParent.value;
    const children = isSubColumn.value
      ? parent.vnode.el.children
      : parent.refs.hiddenColumns?.children;
    const getColumnIndex = () =>
      getColumnElIndex(children || [], instance.vnode.el);
    columnConfig.value.getColumnIndex = getColumnIndex;
    const columnIndex = getColumnIndex();
    columnIndex > -1 &&
      owner.value.store.commit(
        'insertColumn',
        columnConfig.value,
        isSubColumn.value ? parent.columnConfig.value : null,
        updateColumnOrder,
      );
  });
  onBeforeUnmount(() => {
    const getColumnIndex = columnConfig.value.getColumnIndex;
    const columnIndex = getColumnIndex ? getColumnIndex() : -1;
    columnIndex > -1 &&
      owner.value.store.commit(
        'removeColumn',
        columnConfig.value,
        isSubColumn.value ? parent.columnConfig.value : null,
        updateColumnOrder,
      );
  });
  instance.columnId = columnId.value;
  instance.columnConfig = columnConfig;

  return { columnConfig };
}

export default useTableColumn;

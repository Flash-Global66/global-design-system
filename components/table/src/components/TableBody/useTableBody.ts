// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { computed, getCurrentInstance, inject, onUnmounted, watch } from 'vue';
import { debounce, merge } from 'lodash-unified';
import {
  addClass,
  hasClass,
  isArray,
  isBoolean,
  isClient,
  isFunction,
  isObject,
  isPropAbsent,
  isString,
  rAF,
  removeClass,
  useNamespace,
} from '@flash-global66/g-utils';
import { useLayoutObserver } from '../../shared/composables/useLayoutObserver';
import {
  createTablePopper,
  ensurePosition,
  getCell,
  getColumnByCell,
  getFixedColumnOffset,
  getFixedColumnsClass,
  getRowIdentity,
  removePopper,
} from '../../shared/utils/table.util';
import { TABLE_INJECTION_KEY } from '../../shared/constants/token.constant';

import type { VNode } from 'vue';
import type { TableColumnCtx } from '../../shared/types/tableColumn.type';
import type { TableBodyProps } from './types/tableBody.type';
import type {
  RenderRowData,
  TableProps,
  TreeNode,
} from '../../shared/types/table.type';
import type { TableOverflowTooltipOptions } from '../../shared/utils/table.util';

interface TableBodyCellDescriptor {
  key: string;
  style: Record<string, unknown>;
  class: string;
  rowspan: number;
  colspan: number;
  onMouseenter: (event: MouseEvent) => void;
  onMouseleave: (event: MouseEvent) => void;
  render: () => VNode;
}

interface TableBodyRowDescriptor {
  type: 'row';
  key: string | number;
  style: unknown;
  class: string[];
  onDblclick: (event: Event) => void;
  onClick: (event: Event) => void;
  onContextmenu: (event: Event) => void;
  onMouseenter: () => void;
  onMouseleave: () => void;
  cells: TableBodyCellDescriptor[];
}

interface TableBodyExpandedRowDescriptor {
  type: 'expanded';
  key: string;
  style: Record<string, string>;
  colspan: number;
  cellClass: string;
  render: () => VNode;
}

type TableBodyTrDescriptor =
  | TableBodyRowDescriptor
  | TableBodyExpandedRowDescriptor;

function isGreaterThan(a: number, b: number, epsilon = 0.03): boolean {
  return a - b > epsilon;
}

function getPadding(el: HTMLElement) {
  const style = window.getComputedStyle(el, null);
  const paddingLeft = Number.parseInt(style.paddingLeft, 10) || 0;
  const paddingRight = Number.parseInt(style.paddingRight, 10) || 0;
  const paddingTop = Number.parseInt(style.paddingTop, 10) || 0;
  const paddingBottom = Number.parseInt(style.paddingBottom, 10) || 0;
  return {
    left: paddingLeft,
    right: paddingRight,
    top: paddingTop,
    bottom: paddingBottom,
  };
}

/**
 * Orquestador de `TableBody`: arma, a partir del store y las columnas, la
 * lista de descriptores de fila/celda que el template recorre con `v-for`.
 * Sustituye a los antiguos `useEvents`/`useRender`/`useStyles`, fusionados
 * acá para respetar el trío `index.vue` + `use<Nombre>.ts` (+ `defaults.ts`
 * como excepción EP-derived).
 */
export function useTableBody<T>(props: Partial<TableBodyProps<T>>) {
  const instance = getCurrentInstance();
  const parent = inject(TABLE_INJECTION_KEY);
  const ns = useNamespace('table');
  useLayoutObserver(parent!);

  // ---------- eventos ----------
  function handleEvent(event: Event, row: T, name: string) {
    const table = parent;
    const cell = getCell(event);
    let column: TableColumnCtx<T>;
    const namespace = table?.vnode.el?.dataset.prefix;
    if (cell) {
      column = getColumnByCell(
        { columns: props.store.states.columns.value },
        cell,
        namespace,
      );
      if (column) {
        table?.emit(`cell-${name}`, row, column, cell, event);
      }
    }
    table?.emit(`row-${name}`, row, column, event);
  }

  function handleDoubleClick(event: Event, row: T) {
    handleEvent(event, row, 'dblclick');
  }

  function handleClick(event: Event, row: T) {
    props.store.commit('setCurrentRow', row);
    handleEvent(event, row, 'click');
  }

  function handleContextMenu(event: Event, row: T) {
    handleEvent(event, row, 'contextmenu');
  }

  const handleMouseEnter = debounce((index: number) => {
    props.store.commit('setHoverRow', index);
  }, 30);

  const handleMouseLeave = debounce(() => {
    props.store.commit('setHoverRow', null);
  }, 30);

  function toggleRowClassByCell(
    rowSpan: number,
    event: MouseEvent,
    toggle: (el: Element, cls: string) => void,
  ) {
    let node = event.target.parentNode;
    while (rowSpan > 1) {
      node = node?.nextSibling;
      if (!node || node.nodeName !== 'TR') break;
      toggle(node, 'hover-row hover-fixed-row');
      rowSpan--;
    }
  }

  function handleCellMouseEnter(
    event: MouseEvent,
    row: T,
    tooltipOptions: TableOverflowTooltipOptions,
  ) {
    const table = parent;
    const cell = getCell(event);
    const namespace = table?.vnode.el?.dataset.prefix;
    let column: TableColumnCtx<T>;
    if (cell) {
      column = getColumnByCell(
        { columns: props.store.states.columns.value },
        cell,
        namespace,
      );
      if (cell.rowSpan > 1) {
        toggleRowClassByCell(cell.rowSpan, event, addClass);
      }
      const hoverState = (table.hoverState = { cell, column, row });
      table?.emit(
        'cell-mouse-enter',
        hoverState.row,
        hoverState.column,
        hoverState.cell,
        event,
      );
    }

    if (!tooltipOptions) {
      return;
    }

    // 判断是否text-overflow, 如果是就显示tooltip
    const cellChild = (event.target as HTMLElement).querySelector(
      '.cell',
    ) as HTMLElement;
    if (
      !(
        hasClass(cellChild, `${namespace}-tooltip`) &&
        cellChild.childNodes.length
      )
    ) {
      return;
    }
    // use range width instead of scrollWidth to determine whether the text is overflowing
    // to address a potential FireFox bug: https://bugzilla.mozilla.org/show_bug.cgi?id=1074543#c3
    const range = document.createRange();
    range.setStart(cellChild, 0);
    range.setEnd(cellChild, cellChild.childNodes.length);
    /** detail: https://github.com/element-plus/element-plus/issues/10790
     *  What went wrong?
     *  UI > Browser > Zoom, In Blink/WebKit, getBoundingClientRect() sometimes returns inexact values, probably due to lost precision during internal calculations. In the example above:
     *    - Expected: 188
     *    - Actual: 188.00000762939453
     */
    const { width: rangeWidth, height: rangeHeight } =
      range.getBoundingClientRect();
    const { width: cellChildWidth, height: cellChildHeight } =
      cellChild.getBoundingClientRect();

    const { top, left, right, bottom } = getPadding(cellChild);
    const horizontalPadding = left + right;
    const verticalPadding = top + bottom;
    if (
      isGreaterThan(rangeWidth + horizontalPadding, cellChildWidth) ||
      isGreaterThan(rangeHeight + verticalPadding, cellChildHeight) ||
      // When using a high-resolution screen, it is possible that a returns cellChild.scrollWidth value of 1921 and
      // cellChildWidth returns a value of 1920.994140625. #16856 #16673
      isGreaterThan(cellChild.scrollWidth, cellChildWidth)
    ) {
      createTablePopper(
        tooltipOptions,
        cell.innerText || cell.textContent,
        row,
        column,
        cell,
        table,
      );
    } else if (removePopper?.trigger === cell) {
      removePopper?.();
    }
  }

  function handleCellMouseLeave(event) {
    const cell = getCell(event);
    if (!cell) return;
    if (cell.rowSpan > 1) {
      toggleRowClassByCell(cell.rowSpan, event, removeClass);
    }
    const oldHoverState = parent?.hoverState;
    parent?.emit(
      'cell-mouse-leave',
      oldHoverState?.row,
      oldHoverState?.column,
      oldHoverState?.cell,
      event,
    );
  }

  // ---------- estilos ----------
  function getRowStyle(row: T, rowIndex: number) {
    const rowStyle = parent?.props.rowStyle;
    if (isFunction(rowStyle)) {
      return rowStyle.call(null, { row, rowIndex });
    }
    return rowStyle || null;
  }

  function getRowClass(row: T, rowIndex: number) {
    const classes = [ns.e('row')];
    if (
      parent?.props.highlightCurrentRow &&
      row === props.store.states.currentRow.value
    ) {
      classes.push('current-row');
    }

    if (props.stripe && rowIndex % 2 === 1) {
      classes.push(ns.em('row', 'striped'));
    }
    const rowClassName = parent?.props.rowClassName;
    if (isString(rowClassName)) {
      classes.push(rowClassName);
    } else if (isFunction(rowClassName)) {
      classes.push(rowClassName.call(null, { row, rowIndex }));
    }
    return classes;
  }

  function getCellStyle(
    rowIndex: number,
    columnIndex: number,
    row: T,
    column: TableColumnCtx<T>,
  ) {
    const cellStyle = parent?.props.cellStyle;
    let cellStyles = cellStyle ?? {};
    if (isFunction(cellStyle)) {
      cellStyles = cellStyle.call(null, {
        rowIndex,
        columnIndex,
        row,
        column,
      });
    }
    const fixedStyle = getFixedColumnOffset(
      columnIndex,
      props?.fixed,
      props.store,
    );
    ensurePosition(fixedStyle, 'left');
    ensurePosition(fixedStyle, 'right');
    return Object.assign({}, cellStyles, fixedStyle);
  }

  function getCellClass(
    rowIndex: number,
    columnIndex: number,
    row: T,
    column: TableColumnCtx<T>,
    offset: number,
  ) {
    const fixedClasses = getFixedColumnsClass(
      ns.b(),
      columnIndex,
      props?.fixed,
      props.store,
      undefined,
      offset,
    );
    const classes = [
      column.id,
      column.align,
      column.className,
      ...fixedClasses,
    ];
    const cellClassName = parent?.props.cellClassName;
    if (isString(cellClassName)) {
      classes.push(cellClassName);
    } else if (isFunction(cellClassName)) {
      classes.push(
        cellClassName.call(null, {
          rowIndex,
          columnIndex,
          row,
          column,
        }),
      );
    }
    classes.push(ns.e('cell'));
    return classes.filter(className => Boolean(className)).join(' ');
  }

  function getSpan(
    row: T,
    column: TableColumnCtx<T>,
    rowIndex: number,
    columnIndex: number,
  ) {
    let rowspan = 1;
    let colspan = 1;
    const fn = parent?.props.spanMethod;
    if (isFunction(fn)) {
      const result = fn({ row, column, rowIndex, columnIndex });
      if (isArray(result)) {
        rowspan = result[0];
        colspan = result[1];
      } else if (isObject(result)) {
        rowspan = result.rowspan;
        colspan = result.colspan;
      }
    }
    return { rowspan, colspan };
  }

  function getColspanRealWidth(
    columns: TableColumnCtx<T>[],
    colspan: number,
    index: number,
  ): number {
    if (colspan < 1) {
      return columns[index].realWidth;
    }
    const widthArr = columns
      .map(({ realWidth, width }) => realWidth || width)
      .slice(index, index + colspan);
    return Number(
      widthArr.reduce((acc, width) => Number(acc) + Number(width), -1),
    );
  }

  // ---------- render ----------
  const firstDefaultColumnIndex = computed(() => {
    return props.store.states.columns.value.findIndex(
      ({ type }) => type === 'default',
    );
  });

  function getKeyOfRow(row: T, index: number) {
    const rowKey = (parent.props as Partial<TableProps<T>>).rowKey;
    if (rowKey) {
      return getRowIdentity(row, rowKey);
    }
    return index;
  }

  function cellChildren(cellIndex, column, data) {
    return column.renderCell(data);
  }

  function rowRender(
    row: T,
    $index: number,
    treeRowData?: TreeNode,
    expanded = false,
  ): TableBodyRowDescriptor {
    const { tooltipEffect, tooltipOptions, store } = props;
    const { indent, columns } = store.states;
    const rowClasses = getRowClass(row, $index);
    let display = true;
    if (treeRowData) {
      rowClasses.push(ns.em('row', `level-${treeRowData.level}`));
      display = treeRowData.display;
    }
    const displayStyle = display ? null : { display: 'none' };

    const cells = columns.value.reduce(
      (acc: TableBodyCellDescriptor[], column, cellIndex) => {
        const { rowspan, colspan } = getSpan(row, column, $index, cellIndex);
        if (!rowspan || !colspan) {
          return acc;
        }
        const columnData = Object.assign({}, column);
        columnData.realWidth = getColspanRealWidth(
          columns.value,
          colspan,
          cellIndex,
        );
        const data: RenderRowData<T> = {
          store: props.store,
          _self: props.context || parent,
          column: columnData,
          row,
          $index,
          cellIndex,
          expanded,
        };
        if (cellIndex === firstDefaultColumnIndex.value && treeRowData) {
          data.treeNode = {
            indent: treeRowData.level * indent.value,
            level: treeRowData.level,
          };
          if (isBoolean(treeRowData.expanded)) {
            data.treeNode.expanded = treeRowData.expanded;
            // 表明是懒加载
            if ('loading' in treeRowData) {
              data.treeNode.loading = treeRowData.loading;
            }
            if ('noLazyChildren' in treeRowData) {
              data.treeNode.noLazyChildren = treeRowData.noLazyChildren;
            }
          }
        }
        const baseKey = `${getKeyOfRow(row, $index)},${cellIndex}`;
        const patchKey = columnData.columnKey || columnData.rawColumnKey || '';
        const mergedTooltipOptions =
          column.showOverflowTooltip &&
          merge(
            { effect: tooltipEffect },
            tooltipOptions,
            column.showOverflowTooltip,
          );

        acc.push({
          key: `${patchKey}${baseKey}`,
          style: getCellStyle($index, cellIndex, row, column),
          class: getCellClass($index, cellIndex, row, column, colspan - 1),
          rowspan,
          colspan,
          onMouseenter: (event: MouseEvent) =>
            handleCellMouseEnter(event, row, mergedTooltipOptions),
          onMouseleave: handleCellMouseLeave,
          render: () => cellChildren(cellIndex, column, data),
        });
        return acc;
      },
      [],
    );

    return {
      type: 'row',
      key: getKeyOfRow(row, $index),
      style: [displayStyle, getRowStyle(row, $index)],
      class: rowClasses,
      onDblclick: (event: Event) => handleDoubleClick(event, row),
      onClick: (event: Event) => handleClick(event, row),
      onContextmenu: (event: Event) => handleContextMenu(event, row),
      onMouseenter: () => handleMouseEnter($index),
      onMouseleave: handleMouseLeave,
      cells,
    };
  }

  function wrappedRowRender(row: T, $index: number): TableBodyTrDescriptor[] {
    const store = props.store;
    const { isRowExpanded, assertRowKey } = store;
    const { treeData, lazyTreeNodeMap, childrenColumnName, rowKey } =
      store.states;
    const columns = store.states.columns.value;
    const hasExpandColumn = columns.some(({ type }) => type === 'expand');
    if (hasExpandColumn) {
      const expanded = isRowExpanded(row);
      const tr = rowRender(row, $index, undefined, expanded);
      const renderExpanded = parent.renderExpanded;
      if (!renderExpanded) {
        console.error('[Element Error]renderExpanded is required.');
        return [tr];
      }

      // 在没设置时候避免 h 执行
      // 非保留模式且未展开时，直接返回
      const rows: TableBodyTrDescriptor[] = [tr];

      // 仅在需要时创建展开行（保留模式或展开状态）
      if (parent.props.preserveExpandedContent || expanded) {
        rows.push({
          type: 'expanded',
          key: `expanded-row__${tr.key as string}`,
          style: { display: expanded ? '' : 'none' },
          colspan: columns.length,
          cellClass: `${ns.e('cell')} ${ns.e('expanded-cell')}`,
          render: () => renderExpanded({ row, $index, store, expanded }),
        });
      }

      return rows;
    } else if (Object.keys(treeData.value).length) {
      assertRowKey();
      // TreeTable 时，rowKey 必须由用户设定，不使用 getKeyOfRow 计算
      const key = getRowIdentity(row, rowKey.value);
      let cur = treeData.value[key];
      let treeRowData = null;
      if (cur) {
        treeRowData = {
          expanded: cur.expanded,
          level: cur.level,
          display: true,
        };
        if (isBoolean(cur.lazy)) {
          if (isBoolean(cur.loaded) && cur.loaded) {
            treeRowData.noLazyChildren = !(cur.children && cur.children.length);
          }
          treeRowData.loading = cur.loading;
        }
      }
      const tmp: TableBodyTrDescriptor[] = [
        rowRender(row, $index, treeRowData),
      ];
      // 渲染嵌套数据
      if (cur) {
        let i = 0;
        const traverse = (children, parentNode) => {
          if (!(children && children.length && parentNode)) return;
          children.forEach(node => {
            const innerTreeRowData = {
              display: parentNode.display && parentNode.expanded,
              level: parentNode.level + 1,
              expanded: false,
              noLazyChildren: false,
              loading: false,
            };
            const childKey = getRowIdentity(node, rowKey.value);
            if (isPropAbsent(childKey)) {
              throw new Error('For nested data item, row-key is required.');
            }
            cur = { ...treeData.value[childKey] };
            if (cur) {
              innerTreeRowData.expanded = cur.expanded;
              cur.level = cur.level || innerTreeRowData.level;
              cur.display = !!(cur.expanded && innerTreeRowData.display);
              if (isBoolean(cur.lazy)) {
                if (isBoolean(cur.loaded) && cur.loaded) {
                  innerTreeRowData.noLazyChildren = !(
                    cur.children && cur.children.length
                  );
                }
                innerTreeRowData.loading = cur.loading;
              }
            }
            i++;
            tmp.push(rowRender(node, $index + i, innerTreeRowData));
            if (cur) {
              const nodes =
                lazyTreeNodeMap.value[childKey] ||
                node[childrenColumnName.value];
              traverse(nodes, cur);
            }
          });
        };
        // 对于 root 节点，display 一定为 true
        cur.display = true;
        const nodes =
          lazyTreeNodeMap.value[key] || row[childrenColumnName.value];
        traverse(nodes, cur);
      }
      return tmp;
    }
    return [rowRender(row, $index, undefined)];
  }

  const renderRows = computed<TableBodyTrDescriptor[]>(() => {
    const data = props.store.states.data.value || [];
    return data.reduce(
      (acc: TableBodyTrDescriptor[], row) =>
        acc.concat(wrappedRowRender(row, acc.length)),
      [],
    );
  });

  // ---------- hover row highlight ----------
  const hoveredCellList = [];
  watch(props.store.states.hoverRow, (newVal: any, oldVal: any) => {
    const el = instance?.vnode.el as HTMLElement;
    const rows = Array.from(el?.children || []).filter(e =>
      e?.classList.contains(`${ns.e('row')}`),
    );

    // hover rowSpan > 1 choose the whole row
    let rowNum = newVal;
    const childNodes = rows[rowNum]?.childNodes;
    if (childNodes?.length) {
      let control = 0;
      const indexes = Array.from(childNodes).reduce((acc, item, index) => {
        // drop colsSpan
        if (childNodes[index]?.colSpan > 1) {
          control = childNodes[index]?.colSpan;
        }
        if (item.nodeName !== 'TD' && control === 0) {
          acc.push(index);
        }
        control > 0 && control--;
        return acc;
      }, []);

      indexes.forEach(rowIndex => {
        rowNum = newVal;
        while (rowNum > 0) {
          // find from previous
          const preChildNodes = rows[rowNum - 1]?.childNodes;
          if (
            preChildNodes[rowIndex] &&
            preChildNodes[rowIndex].nodeName === 'TD' &&
            preChildNodes[rowIndex].rowSpan > 1
          ) {
            addClass(preChildNodes[rowIndex], 'hover-cell');
            hoveredCellList.push(preChildNodes[rowIndex]);
            break;
          }
          rowNum--;
        }
      });
    } else {
      hoveredCellList.forEach(item => removeClass(item, 'hover-cell'));
      hoveredCellList.length = 0;
    }
    if (!props.store.states.isComplex.value || !isClient) return;

    rAF(() => {
      // just get first level children; fix #9723
      const oldRow = rows[oldVal];
      const newRow = rows[newVal];
      // when there is fixed row, hover on rowSpan > 1 should not clear the class
      if (oldRow && !oldRow.classList.contains('hover-fixed-row')) {
        removeClass(oldRow, 'hover-row');
      }
      if (newRow) {
        addClass(newRow, 'hover-row');
      }
    });
  });

  onUnmounted(() => {
    removePopper?.();
  });

  return {
    ns,
    renderRows,
  };
}

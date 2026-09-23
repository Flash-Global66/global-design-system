// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { computed, inject } from 'vue';
import { useNamespace } from '@flash-global66/g-utils';
import useLayoutObserver from '../../shared/composables/useLayoutObserver';
import {
  ensurePosition,
  getFixedColumnOffset,
  getFixedColumnsClass,
} from '../../shared/utils/table.util';
import { TABLE_INJECTION_KEY } from '../../shared/constants/token.constant';
import type { TableColumnCtx } from '../TableColumn/defaults';
import type { DefaultRow } from '../../Table/defaults';
import type { TableFooterProps } from './defaults';

export function useTableFooter(props: TableFooterProps<DefaultRow>) {
  const parent = inject(TABLE_INJECTION_KEY);
  const ns = useNamespace('table');
  const { onScrollableChange, onColumnsChange } = useLayoutObserver(parent!);

  const columns = computed<TableColumnCtx<DefaultRow>[]>(
    () => parent?.store?.states.columns.value ?? [],
  );

  function getCellClasses(
    tableColumns: TableColumnCtx<DefaultRow>[],
    cellIndex: number,
  ) {
    const column = tableColumns[cellIndex];
    const classes = [
      ns.e('cell'),
      column.id,
      column.align,
      column.labelClassName,
      ...getFixedColumnsClass(ns.b(), cellIndex, column.fixed, props.store),
    ];
    if (column.className) {
      classes.push(column.className);
    }
    if (!column.children) {
      classes.push(ns.is('leaf'));
    }
    return classes;
  }

  function getCellStyles(
    column: TableColumnCtx<DefaultRow>,
    cellIndex: number,
  ) {
    const fixedStyle = getFixedColumnOffset(
      cellIndex,
      column.fixed,
      props.store,
    );
    ensurePosition(fixedStyle, 'left');
    ensurePosition(fixedStyle, 'right');
    return fixedStyle;
  }

  /**
   * No es un `computed` porque `summaryMethod` puede leer estado no reactivo que un
   * `computed` no rastrea. El template la evalúa una vez por render con
   * `v-for` de un solo elemento, así el resumen se recalcula en cada render del footer.
   */
  function getSums() {
    const data = props.store.states.data.value;
    const currentColumns = columns.value;

    if (props.summaryMethod) {
      return props.summaryMethod({ columns: currentColumns, data });
    }

    const result = [];
    currentColumns.forEach((column, index) => {
      if (index === 0) {
        result[index] = props.sumText;
        return;
      }
      const values = data.map(item => Number(item[column.property]));
      const precisions = [];
      let notNumber = true;
      values.forEach(value => {
        if (!Number.isNaN(+value)) {
          notNumber = false;
          const decimal = `${value}`.split('.')[1];
          precisions.push(decimal ? decimal.length : 0);
        }
      });
      const precision = Math.max.apply(null, precisions);
      if (!notNumber) {
        result[index] = values.reduce((prev, curr) => {
          const value = Number(curr);
          if (!Number.isNaN(+value)) {
            return Number.parseFloat(
              (prev + curr).toFixed(Math.min(precision, 20)),
            );
          }
          return prev;
        }, 0);
      } else {
        result[index] = '';
      }
    });
    return result;
  }

  return {
    ns,
    onScrollableChange,
    onColumnsChange,
    columns,
    getCellClasses,
    getCellStyles,
    getSums,
  };
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import type { TableColumnCtx } from '../../components/TableColumn/defaults';

export const getAllColumns = <T>(
  columns: TableColumnCtx<T>[],
): TableColumnCtx<T>[] => {
  const result: TableColumnCtx<T>[] = [];
  columns.forEach(column => {
    if (column.children) {
      result.push(column);
      // eslint-disable-next-line prefer-spread
      result.push.apply(result, getAllColumns(column.children));
    } else {
      result.push(column);
    }
  });
  return result;
};

export const convertToRows = <T>(
  originColumns: TableColumnCtx<T>[],
): TableColumnCtx<T>[] => {
  let maxLevel = 1;
  const traverse = (column: TableColumnCtx<T>, parent: TableColumnCtx<T>) => {
    if (parent) {
      column.level = parent.level + 1;
      if (maxLevel < column.level) {
        maxLevel = column.level;
      }
    }
    if (column.children) {
      let colSpan = 0;
      column.children.forEach(subColumn => {
        traverse(subColumn, column);
        colSpan += subColumn.colSpan;
      });
      column.colSpan = colSpan;
    } else {
      column.colSpan = 1;
    }
  };

  originColumns.forEach(column => {
    column.level = 1;
    traverse(column, undefined);
  });

  const rows = [];
  for (let i = 0; i < maxLevel; i++) {
    rows.push([]);
  }

  const allColumns: TableColumnCtx<T>[] = getAllColumns(originColumns);

  allColumns.forEach(column => {
    if (!column.children) {
      column.rowSpan = maxLevel - column.level + 1;
    } else {
      column.rowSpan = 1;
      column.children.forEach(col => (col.isSubColumn = true));
    }
    rows[column.level - 1].push(column);
  });

  return rows;
};

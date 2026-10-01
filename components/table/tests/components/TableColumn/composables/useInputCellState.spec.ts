import { describe, it, expect } from 'vitest';
import { isVNode, type VNode } from 'vue';
import { renderInputCell } from '../../../../src/components/TableColumn/utils/inputCellRenderer.util';
import { useInputCellState } from '../../../../src/components/TableColumn/composables/useInputCellState';
import type { TableColumnCtx } from '../../../../src/shared/types/tableColumn.type';
import type { RenderCellData } from '../../../../src/components/TableColumn/types/cellRenderer.type';

/**
 * Recorre el árbol de VNodes devuelto por un render function, resolviendo funciones de slot
 * (p. ej. el `default` de `Transition`), para poder inspeccionar el nodo que quedó activo.
 */
function collectVNodes(node: unknown, acc: VNode[] = []): VNode[] {
  if (Array.isArray(node)) {
    node.forEach(child => collectVNodes(child, acc));
    return acc;
  }
  if (isVNode(node)) {
    acc.push(node);
    const children = node.children;
    if (Array.isArray(children)) {
      collectVNodes(children, acc);
    } else if (children && typeof children === 'object') {
      for (const key of Object.keys(children)) {
        const slot = (children as Record<string, unknown>)[key];
        collectVNodes(typeof slot === 'function' ? slot() : slot, acc);
      }
    }
  }
  return acc;
}

function buildColumn(): TableColumnCtx<unknown> {
  return {
    property: 'name',
    cellType: 'input',
  } as unknown as TableColumnCtx<unknown>;
}

function buildData(row: Record<string, unknown>): RenderCellData {
  return { row, $index: 0, column: buildColumn() };
}

function isEditingVNode(vnode: VNode | null): boolean {
  return collectVNodes(vnode).some(
    node => node.props && 'onUpdate:modelValue' in node.props,
  );
}

describe('useInputCellState — aislamiento por instancia de tabla', () => {
  it('abrir la edición en la tabla A no marca en edición la misma celda en la tabla B', () => {
    const columnA = buildColumn();
    const columnB = buildColumn();
    const dataA = buildData({ name: 'uno' });
    const dataB = buildData({ name: 'uno' });
    const tableA = { emit: () => {} };
    const tableB = { emit: () => {} };

    expect(
      isEditingVNode(renderInputCell(columnA, dataA, undefined, tableA)),
    ).toBe(false);
    expect(
      isEditingVNode(renderInputCell(columnB, dataB, undefined, tableB)),
    ).toBe(false);

    // Simula que la celda `0-name` se abrió en la tabla A, por el mismo mecanismo
    // (`defaultEditingState`) que usa `renderInputCell` cuando `cellOptions` no trae su
    // propio getEditing/toggle/setEditing.
    useInputCellState(tableA).defaultEditingState.value = '0-name';

    expect(
      isEditingVNode(renderInputCell(columnA, dataA, undefined, tableA)),
    ).toBe(true);
    // Con el bug (refs de módulo compartidas por todas las tablas), esta celda de la
    // tabla B también aparecía en edición sin que nadie la hubiera abierto ahí.
    expect(
      isEditingVNode(renderInputCell(columnB, dataB, undefined, tableB)),
    ).toBe(false);
  });

  it('isAnyValidating tampoco se comparte entre instancias de tabla', () => {
    const tableA = { emit: () => {} };
    const tableB = { emit: () => {} };

    useInputCellState(tableA).isAnyValidating.value = true;

    expect(useInputCellState(tableB).isAnyValidating.value).toBe(false);
  });
});

import { describe, it, expect } from 'vitest';
import {
  findDuplicateKeys,
  getItemKey,
  getItemLabel,
  getPreviewItems,
  getSourceEmptyReason,
  getVisibleSource,
  insertItemAt,
  isGroupedSource,
  moveItem,
  removeItemAt,
} from '../../../src/shared/utils/list.util';
import type {
  DragListItem,
  DragSession,
} from '../../../src/shared/types/drag-list.type';

const A = { id: 'a', name: 'Alfa' };
const B = { id: 'b', name: 'Beta' };
const C = { id: 'c', name: 'Gamma' };
const D = { id: 'd', name: 'Delta' };

function buildSession(overrides: Partial<DragSession> = {}): DragSession {
  return {
    origin: 'source',
    item: D,
    fromIndex: 0,
    pointer: { x: 0, y: 0 },
    ghostOffset: { x: 0, y: 0 },
    isActivated: true,
    zone: 'target',
    dropIndex: 1,
    ...overrides,
  };
}

describe('getItemKey', () => {
  it('lee el campo indicado', () => {
    expect(getItemKey(A, 'id')).toBe('a');
  });

  it('usa la función si itemKey es función', () => {
    expect(getItemKey(A, (item: DragListItem) => `k-${item.id}`)).toBe('k-a');
  });
});

describe('getItemLabel', () => {
  it('lee el campo de itemLabel', () => {
    expect(getItemLabel(A, 'name', 'id')).toBe('Alfa');
  });

  it('usa la función de itemLabel', () => {
    expect(getItemLabel(A, (i: DragListItem) => `L-${i.name}`, 'id')).toBe(
      'L-Alfa',
    );
  });

  it('cae a la key como texto si no hay itemLabel', () => {
    expect(getItemLabel({ id: 7 }, undefined, 'id')).toBe('7');
  });
});

describe('insertItemAt, removeItemAt y moveItem', () => {
  it('insertItemAt inserta sin mutar', () => {
    const list = [A, C];
    expect(insertItemAt(list, B, 1)).toEqual([A, B, C]);
    expect(list).toEqual([A, C]);
  });

  it('removeItemAt quita sin mutar', () => {
    const list = [A, B, C];
    expect(removeItemAt(list, 1)).toEqual([A, C]);
    expect(list).toEqual([A, B, C]);
  });

  it('moveItem mueve sin mutar', () => {
    const list = [A, B, C];
    expect(moveItem(list, 0, 2)).toEqual([B, C, A]);
    expect(moveItem(list, 2, 0)).toEqual([C, A, B]);
    expect(list).toEqual([A, B, C]);
  });

  it('moveItem devuelve el mismo arreglo si from === to', () => {
    const list = [A, B];
    expect(moveItem(list, 1, 1)).toBe(list);
  });
});

describe('getVisibleSource', () => {
  it('el elemento agregado desaparece del origen', () => {
    const result = getVisibleSource({
      source: [A, B, C],
      modelValue: [B],
      itemKey: 'id',
      isRepeatable: false,
    });
    expect(result).toEqual([A, C]);
  });

  it('el buscador no resucita lo agregado', () => {
    const result = getVisibleSource({
      source: [B, D],
      modelValue: [B],
      itemKey: 'id',
      isRepeatable: false,
    });
    expect(result).toEqual([D]);
  });

  it('al quitarlo vuelve a su posición original', () => {
    const result = getVisibleSource({
      source: [A, B, C],
      modelValue: [],
      itemKey: 'id',
      isRepeatable: false,
    });
    expect(result).toEqual([A, B, C]);
  });

  it('omite los grupos que quedan vacíos', () => {
    const source = [
      { key: 'A', items: [A] },
      { key: 'B', items: [B] },
    ];
    const result = getVisibleSource({
      source,
      modelValue: [A],
      itemKey: 'id',
      isRepeatable: false,
    });
    expect(result).toEqual([{ key: 'B', items: [B] }]);
  });

  it('con isRepeatable devuelve source tal cual', () => {
    const source = [A, B];
    const result = getVisibleSource({
      source,
      modelValue: [A],
      itemKey: 'id',
      isRepeatable: true,
    });
    expect(result).toBe(source);
  });
});

describe('getSourceEmptyReason', () => {
  it("devuelve 'empty' si source no tiene ítems", () => {
    expect(getSourceEmptyReason({ source: [], visibleSource: [] })).toBe(
      'empty',
    );
  });

  it("devuelve 'all-added' si ninguno es visible", () => {
    expect(getSourceEmptyReason({ source: [A], visibleSource: [] })).toBe(
      'all-added',
    );
  });

  it('devuelve null si hay visibles', () => {
    expect(
      getSourceEmptyReason({ source: [A], visibleSource: [A] }),
    ).toBeNull();
  });

  it('cuenta los ítems de los grupos', () => {
    const source = [{ key: 'A', items: [A] }];
    expect(getSourceEmptyReason({ source, visibleSource: [] })).toBe(
      'all-added',
    );
    expect(
      getSourceEmptyReason({
        source: [{ key: 'A', items: [] }],
        visibleSource: [],
      }),
    ).toBe('empty');
  });
});

describe('findDuplicateKeys', () => {
  it('devuelve las keys repetidas una sola vez', () => {
    expect(findDuplicateKeys([A, B, A, A], 'id')).toEqual(['a']);
  });

  it('devuelve vacío sin repetidas', () => {
    expect(findDuplicateKeys([A, B], 'id')).toEqual([]);
  });
});

describe('isGroupedSource', () => {
  it('detecta grupos', () => {
    expect(isGroupedSource([{ key: 'A', items: [A] }])).toBe(true);
  });

  it('no detecta grupos en ítems planos ni en vacío', () => {
    expect(isGroupedSource([A])).toBe(false);
    expect(isGroupedSource([])).toBe(false);
  });
});

describe('getPreviewItems', () => {
  const items = [A, B, C];

  it('sin sesión devuelve los ítems sin cambios', () => {
    expect(getPreviewItems({ items, session: null })).toEqual([
      { item: A, index: 0, isPlaceholder: false },
      { item: B, index: 1, isPlaceholder: false },
      { item: C, index: 2, isPlaceholder: false },
    ]);
  });

  it('sin activar devuelve los ítems sin cambios', () => {
    const result = getPreviewItems({
      items,
      session: buildSession({ isActivated: false }),
    });
    expect(result.some(entry => entry.isPlaceholder)).toBe(false);
  });

  it('desde el origen sobre el destino inserta el placeholder', () => {
    const result = getPreviewItems({ items, session: buildSession() });
    expect(result).toEqual([
      { item: A, index: 0, isPlaceholder: false },
      { item: D, index: -1, isPlaceholder: true },
      { item: B, index: 1, isPlaceholder: false },
      { item: C, index: 2, isPlaceholder: false },
    ]);
  });

  it('desde el origen fuera del destino no cambia nada', () => {
    const result = getPreviewItems({
      items,
      session: buildSession({ zone: 'source', dropIndex: null }),
    });
    expect(result).toHaveLength(3);
  });

  it('desde el destino sobre el destino previsualiza el reordenamiento', () => {
    const result = getPreviewItems({
      items,
      session: buildSession({
        origin: 'target',
        item: A,
        fromIndex: 0,
        dropIndex: 2,
      }),
    });
    expect(result).toEqual([
      { item: B, index: 1, isPlaceholder: false },
      { item: C, index: 2, isPlaceholder: false },
      { item: A, index: 0, isPlaceholder: true },
    ]);
  });

  it('desde el destino con la zona fuera deja la lista sin cambios', () => {
    const result = getPreviewItems({
      items,
      session: buildSession({
        origin: 'target',
        item: A,
        fromIndex: 0,
        zone: null,
        dropIndex: null,
      }),
    });
    expect(result.map(entry => entry.item)).toEqual(items);
    expect(result.some(entry => entry.isPlaceholder)).toBe(false);
  });
});

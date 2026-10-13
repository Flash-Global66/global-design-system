import { describe, it, expect } from 'vitest';
import { dragListEmits, dragListProps } from '../../src/DragList/constants/drag-list.constant';
import { DEFAULT_DRAG_LIST_TEXTS } from '../../src/shared/constants/texts.constant';
import { DRAG_THRESHOLDS } from '../../src/shared/constants/drag.constant';

describe('dragListProps', () => {
  it('declara los defaults del contrato', () => {
    const p = dragListProps as Record<string, { default?: unknown; required?: boolean }>;
    expect((p.modelValue.default as () => unknown[])()).toEqual([]);
    expect((p.source.default as () => unknown[])()).toEqual([]);
    expect(p.ordered.default).toBe(false);
    expect(p.repeatable.default).toBe(false);
    expect(p.dragToRemove.default).toBe(true);
    expect(p.keyboardRemove.default).toBe(false);
    expect(p.direction.default).toBe('vertical');
    expect(p.disabled.default).toBe(false);
  });

  it('itemKey es obligatoria y el resto opcionales sin default', () => {
    const p = dragListProps as Record<string, { default?: unknown; required?: boolean }>;
    expect(p.itemKey.required).toBe(true);
    for (const k of ['itemLabel', 'cloneItem', 'startNode', 'endNode', 'texts']) {
      expect(p[k].default).toBeUndefined();
    }
  });

  it('startNode y endNode aceptan un string y no tienen default', () => {
    const p = dragListProps as Record<string, { type?: unknown; default?: unknown }>;
    expect(p.startNode.type).toBe(String);
    expect(p.endNode.type).toBe(String);
    expect(p.startNode.default).toBeUndefined();
    expect(p.endNode.default).toBeUndefined();
  });

  it('declara los cuatro emits', () => {
    expect(Object.keys(dragListEmits).sort()).toEqual(['add', 'remove', 'reorder', 'update:modelValue']);
  });

  it('expone textos y umbrales por defecto', () => {
    expect(DEFAULT_DRAG_LIST_TEXTS.overlayAdd).toBe('Arrastra aquí para agregar');
    expect(DEFAULT_DRAG_LIST_TEXTS.overlayRemove).toBe('Arrastra aquí para eliminar');
    expect(DRAG_THRESHOLDS.mouseDistance).toBe(4);
    expect(DRAG_THRESHOLDS.touchDelay).toBe(200);
    expect(DRAG_THRESHOLDS.minZoneSize).toBe(48);
  });
});

import { describe, expect, it } from 'vitest';
import { withSetup } from '../../../../../tests/utils/withSetup';
import { useTargetPanel } from '../../../src/components/TargetPanel/useTargetPanel';
import type { DragListPreviewEntry } from '../../../src/shared/types/drag-list.type';

function makeEntries(count: number): DragListPreviewEntry[] {
  return Array.from({ length: count }, (_, index) => ({
    item: { id: index },
    index,
    isPlaceholder: false,
  }));
}

function setup(
  overrides: Partial<{
    count: number;
    isOrdered: boolean;
    startNode: string;
    endNode: string;
    hasStartSlot: boolean;
    hasEndSlot: boolean;
    direction: 'vertical' | 'horizontal';
  }> = {},
) {
  const props = {
    entries: makeEntries(overrides.count ?? 0),
    getKey: (item: Record<string, unknown>) => item.id as number,
    isOrdered: overrides.isOrdered ?? true,
    direction: overrides.direction ?? 'vertical',
    startNode: overrides.startNode,
    endNode: overrides.endNode,
    hasStartSlot: overrides.hasStartSlot ?? false,
    hasEndSlot: overrides.hasEndSlot ?? false,
    isActiveZone: false,
    isDisabled: false,
    label: 'Destino',
  };
  return withSetup(() => useTargetPanel(props)).result;
}

describe('useTargetPanel', () => {
  it('cantidad de conectores con inicio, fin y 2 tarjetas', () => {
    const r = setup({ count: 2, startNode: 'Inicio', endNode: 'Fin' });
    expect(r.hasConnectorBefore(0)).toBe(true);
    expect(r.hasConnectorBefore(1)).toBe(true);
    expect(r.hasFinalConnector.value).toBe(true);
  });

  it('sin inicio la primera tarjeta no lleva conector previo', () => {
    const r = setup({ count: 2, endNode: 'Fin' });
    expect(r.hasConnectorBefore(0)).toBe(false);
    expect(r.hasConnectorBefore(1)).toBe(true);
  });

  it('sin fin no hay conector final', () => {
    const r = setup({ count: 2, startNode: 'Inicio' });
    expect(r.hasFinalConnector.value).toBe(false);
  });

  it('destino vacío sin flechas', () => {
    const r = setup({ count: 0, startNode: 'Inicio', endNode: 'Fin' });
    expect(r.hasConnectorBefore(0)).toBe(false);
    expect(r.hasFinalConnector.value).toBe(false);
    expect(r.isEmpty.value).toBe(true);
  });

  it('conexión automática de la primera tarjeta', () => {
    const r = setup({ count: 1, startNode: 'Inicio', endNode: 'Fin' });
    expect(r.hasConnectorBefore(0)).toBe(true);
    expect(r.hasFinalConnector.value).toBe(true);
  });

  it('el slot reemplaza a la prop y habilita el nodo sin texto', () => {
    const r = setup({ count: 1, hasStartSlot: true, hasEndSlot: true });
    expect(r.hasStartNode.value).toBe(true);
    expect(r.hasEndNode.value).toBe(true);
  });

  it('sin ordered ignora nodos y conectores', () => {
    const r = setup({
      count: 2,
      isOrdered: false,
      startNode: 'Inicio',
      endNode: 'Fin',
      hasStartSlot: true,
    });
    expect(r.hasStartNode.value).toBe(false);
    expect(r.hasEndNode.value).toBe(false);
    expect(r.hasConnectorBefore(1)).toBe(false);
    expect(r.hasFinalConnector.value).toBe(false);
    expect(r.listTag.value).toBe('ul');
  });

  it('ordered usa ol', () => {
    expect(setup({ count: 1 }).listTag.value).toBe('ol');
  });

  it('getEntryKey usa una key estable para el placeholder', () => {
    const r = setup({ count: 1 });
    expect(r.getEntryKey({ item: {}, index: -1, isPlaceholder: true })).toBe(
      '__drag-list-placeholder__',
    );
    expect(
      r.getEntryKey({ item: { id: 7 }, index: 0, isPlaceholder: false }),
    ).toBe(7);
  });
});

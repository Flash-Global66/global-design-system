import { describe, expect, it } from 'vitest';
import { resolveDragZone } from '../../../src/shared/utils/zone.util';

const sourceRect = { top: 0, left: 0, width: 100, height: 100 };
const targetRect = { top: 0, left: 200, width: 100, height: 100 };

describe('resolveDragZone', () => {
  it('la zona se decide por el centro: centro sobre el destino da target', () => {
    expect(
      resolveDragZone({
        center: { x: 250, y: 50 },
        sourceRect,
        targetRect,
        origin: 'source',
        canDropToRemove: true,
      }),
    ).toBe('target');
  });

  it('desde el destino con canDropToRemove sobre el origen da source', () => {
    expect(
      resolveDragZone({
        center: { x: 50, y: 50 },
        sourceRect,
        targetRect,
        origin: 'target',
        canDropToRemove: true,
      }),
    ).toBe('source');
  });

  it('desde el destino sin canDropToRemove nunca da source', () => {
    expect(
      resolveDragZone({
        center: { x: 50, y: 50 },
        sourceRect,
        targetRect,
        origin: 'target',
        canDropToRemove: false,
      }),
    ).toBeNull();
  });

  it('desde el origen nunca da source', () => {
    expect(
      resolveDragZone({
        center: { x: 50, y: 50 },
        sourceRect,
        targetRect,
        origin: 'source',
        canDropToRemove: true,
      }),
    ).toBeNull();
  });

  it('fuera de ambas da null', () => {
    expect(
      resolveDragZone({
        center: { x: 150, y: 500 },
        sourceRect,
        targetRect,
        origin: 'target',
        canDropToRemove: true,
      }),
    ).toBeNull();
  });
});

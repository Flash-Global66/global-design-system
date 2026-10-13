import { describe, expect, it } from 'vitest';
import {
  resolveDragZone,
  resolveDropAnchor,
} from '../../../src/shared/utils/zone.util';

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

describe('resolveDropAnchor', () => {
  it('con el centro dentro de una zona, decide el centro', () => {
    expect(
      resolveDropAnchor({
        center: { x: 250, y: 50 },
        pointer: { x: 50, y: 50 },
        sourceRect,
        targetRect,
        origin: 'target',
        canDropToRemove: true,
      }),
    ).toEqual({ zone: 'target', anchor: { x: 250, y: 50 } });
  });

  it('con el centro fuera de las dos zonas y el puntero dentro de una, decide el puntero', () => {
    expect(
      resolveDropAnchor({
        center: { x: 380, y: 50 },
        pointer: { x: 260, y: 50 },
        sourceRect,
        targetRect,
        origin: 'source',
        canDropToRemove: true,
      }),
    ).toEqual({ zone: 'target', anchor: { x: 260, y: 50 } });
  });

  it('el puntero tampoco habilita quitar si no corresponde', () => {
    expect(
      resolveDropAnchor({
        center: { x: 150, y: 300 },
        pointer: { x: 50, y: 50 },
        sourceRect,
        targetRect,
        origin: 'target',
        canDropToRemove: false,
      }),
    ).toEqual({ zone: null, anchor: { x: 150, y: 300 } });
  });

  it('con el centro y el puntero fuera de las dos zonas, no hay zona', () => {
    expect(
      resolveDropAnchor({
        center: { x: 150, y: 300 },
        pointer: { x: 150, y: 290 },
        sourceRect,
        targetRect,
        origin: 'source',
        canDropToRemove: true,
      }),
    ).toEqual({ zone: null, anchor: { x: 150, y: 300 } });
  });
});

import { describe, expect, it } from 'vitest';
import type { DragSession } from '../../../src/shared/types/drag-list.type';
import { getOverlayState } from '../../../src/shared/utils/overlay.util';

const hidden = { isVisible: false, action: null };

function buildSession(overrides: Partial<DragSession>): DragSession {
  return {
    origin: 'source',
    item: {},
    fromIndex: 0,
    pointer: { x: 0, y: 0 },
    ghostOffset: { x: 0, y: 0 },
    isActivated: true,
    zone: null,
    dropIndex: null,
    ...overrides,
  };
}

describe('getOverlayState', () => {
  it('no muestra nada sin sesión', () => {
    expect(getOverlayState({ session: null, canDropToRemove: true })).toEqual({
      source: hidden,
      target: hidden,
    });
  });

  it('no muestra nada con la sesión sin activar', () => {
    const session = buildSession({ isActivated: false });
    expect(getOverlayState({ session, canDropToRemove: true })).toEqual({
      source: hidden,
      target: hidden,
    });
  });

  it('muestra Agregar sobre el destino cuando el arrastre sale del origen', () => {
    const session = buildSession({ origin: 'source', zone: null });
    expect(getOverlayState({ session, canDropToRemove: false })).toEqual({
      source: hidden,
      target: { isVisible: true, action: 'add' },
    });
  });

  it('oculta el overlay del destino mientras el destino está activo', () => {
    const session = buildSession({ origin: 'source', zone: 'target' });
    expect(getOverlayState({ session, canDropToRemove: false }).target).toEqual(
      hidden,
    );
  });

  it('muestra Eliminar sobre el origen cuando sale del destino con canDropToRemove', () => {
    const session = buildSession({ origin: 'target', zone: null });
    expect(getOverlayState({ session, canDropToRemove: true })).toEqual({
      source: { isVisible: true, action: 'remove' },
      target: hidden,
    });
  });

  it('oculta el overlay del origen mientras el origen está activo', () => {
    const session = buildSession({ origin: 'target', zone: 'source' });
    expect(getOverlayState({ session, canDropToRemove: true }).source).toEqual(
      hidden,
    );
  });

  it('no muestra nada al reordenar sin canDropToRemove', () => {
    const session = buildSession({ origin: 'target', zone: 'target' });
    expect(getOverlayState({ session, canDropToRemove: false })).toEqual({
      source: hidden,
      target: hidden,
    });
  });
});

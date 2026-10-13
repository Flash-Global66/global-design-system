import { describe, it, expect, vi } from 'vitest';
import { ref } from 'vue';
import { withSetup } from '../../../../../tests/utils/withSetup';
import { useKeyboardReorder } from '../../../src/shared/composables/useKeyboardReorder';
import type { DragListDirection } from '../../../src/shared/types/drag-list.type';

const ITEMS = [{ id: 'A' }, { id: 'B' }, { id: 'C' }];

function press(key: string): KeyboardEvent {
  return new KeyboardEvent('keydown', { key, cancelable: true });
}

function setup(
  overrides: {
    direction?: DragListDirection;
    isOrdered?: boolean;
    canRemove?: boolean;
    isDisabled?: boolean;
  } = {},
) {
  const onMove = vi.fn();
  const onRemove = vi.fn();
  const onAnnounce = vi.fn();
  const { result } = withSetup(() =>
    useKeyboardReorder({
      items: ref(ITEMS),
      direction: overrides.direction ?? 'vertical',
      isOrdered: overrides.isOrdered ?? true,
      canRemove: overrides.canRemove ?? true,
      isDisabled: overrides.isDisabled ?? false,
      onMove,
      onRemove,
      onAnnounce,
    }),
  );
  return { api: result, onMove, onRemove, onAnnounce };
}

describe('useKeyboardReorder', () => {
  it('Espacio, flechas y Espacio emiten onMove(0, 2) una sola vez', () => {
    const { api, onMove } = setup();
    api.handleKeydown(press(' '), 0);
    expect(api.grabbedIndex.value).toBe(0);
    api.handleKeydown(press('ArrowDown'), 0);
    api.handleKeydown(press('ArrowDown'), 1);
    expect(api.grabbedIndex.value).toBe(2);
    api.handleKeydown(press(' '), 2);
    expect(onMove).toHaveBeenCalledTimes(1);
    expect(onMove).toHaveBeenCalledWith(0, 2);
    expect(api.grabbedIndex.value).toBeNull();
    expect(api.focusIndex.value).toBe(2);
  });

  it('grabbedFromIndex conserva el origen mientras está tomada', () => {
    const { api } = setup();
    api.handleKeydown(press(' '), 0);
    api.handleKeydown(press('ArrowDown'), 0);
    api.handleKeydown(press('ArrowDown'), 1);
    expect(api.grabbedFromIndex.value).toBe(0);
    expect(api.grabbedIndex.value).toBe(2);
    api.handleKeydown(press(' '), 2);
    expect(api.grabbedFromIndex.value).toBeNull();
    expect(api.grabbedIndex.value).toBeNull();
  });

  it('Enter también toma y suelta', () => {
    const { api, onMove } = setup();
    api.handleKeydown(press('Enter'), 1);
    api.handleKeydown(press('ArrowUp'), 1);
    api.handleKeydown(press('Enter'), 0);
    expect(onMove).toHaveBeenCalledWith(1, 0);
  });

  it('no toma sin isOrdered', () => {
    const { api } = setup({ isOrdered: false });
    api.handleKeydown(press(' '), 0);
    expect(api.grabbedIndex.value).toBeNull();
  });

  it('en horizontal usa ←/→ y ignora ↑/↓', () => {
    const { api, onMove } = setup({ direction: 'horizontal' });
    api.handleKeydown(press(' '), 0);
    api.handleKeydown(press('ArrowDown'), 0);
    expect(api.grabbedIndex.value).toBe(0);
    api.handleKeydown(press('ArrowRight'), 0);
    api.handleKeydown(press(' '), 1);
    expect(onMove).toHaveBeenCalledWith(0, 1);
  });

  it('en vertical ignora ←/→', () => {
    const { api } = setup();
    api.handleKeydown(press(' '), 0);
    api.handleKeydown(press('ArrowRight'), 0);
    expect(api.grabbedIndex.value).toBe(0);
  });

  it('clampea los límites', () => {
    const { api } = setup();
    api.handleKeydown(press(' '), 0);
    api.handleKeydown(press('ArrowUp'), 0);
    expect(api.grabbedIndex.value).toBe(0);
    api.handleKeydown(press('ArrowDown'), 0);
    api.handleKeydown(press('ArrowDown'), 1);
    api.handleKeydown(press('ArrowDown'), 2);
    expect(api.grabbedIndex.value).toBe(2);
  });

  it('Esc restaura sin llamar a onMove', () => {
    const { api, onMove, onAnnounce } = setup();
    api.handleKeydown(press(' '), 0);
    api.handleKeydown(press('ArrowDown'), 0);
    api.handleKeydown(press('Escape'), 1);
    expect(onMove).not.toHaveBeenCalled();
    expect(api.grabbedIndex.value).toBeNull();
    expect(api.focusIndex.value).toBe(0);
    expect(onAnnounce).toHaveBeenLastCalledWith('announceCancel', {
      label: undefined,
      position: 1,
      total: 3,
    });
  });

  it('soltar sin cambiar de posición no llama a onMove', () => {
    const { api, onMove } = setup();
    api.handleKeydown(press(' '), 1);
    api.handleKeydown(press(' '), 1);
    expect(onMove).not.toHaveBeenCalled();
  });

  it('anuncia al tomar, mover y soltar', () => {
    const { api, onAnnounce } = setup();
    api.handleKeydown(press(' '), 0);
    api.handleKeydown(press('ArrowDown'), 0);
    api.handleKeydown(press(' '), 1);
    expect(onAnnounce.mock.calls.map(c => c[0])).toEqual([
      'announceGrab',
      'announceMove',
      'announceReorder',
    ]);
  });

  it('Supr y Retroceso quitan con canRemove', () => {
    const { api, onRemove } = setup();
    api.handleKeydown(press('Delete'), 1);
    api.handleKeydown(press('Backspace'), 2);
    expect(onRemove).toHaveBeenNthCalledWith(1, 1);
    expect(onRemove).toHaveBeenNthCalledWith(2, 2);
    expect(api.focusIndex.value).toBe(1);
  });

  it('tras quitar el foco queda en la siguiente tarjeta', () => {
    const { api } = setup();
    api.handleKeydown(press('Delete'), 0);
    expect(api.focusIndex.value).toBe(0);
  });

  it('no quita sin canRemove', () => {
    const { api, onRemove } = setup({ canRemove: false });
    api.handleKeydown(press('Delete'), 0);
    expect(onRemove).not.toHaveBeenCalled();
  });

  it('no quita con una tarjeta tomada', () => {
    const { api, onRemove } = setup();
    api.handleKeydown(press(' '), 0);
    api.handleKeydown(press('Delete'), 0);
    expect(onRemove).not.toHaveBeenCalled();
  });

  it('con isDisabled no hace nada', () => {
    const { api, onRemove } = setup({ isDisabled: true });
    const event = press(' ');
    api.handleKeydown(event, 0);
    api.handleKeydown(press('Delete'), 0);
    expect(api.grabbedIndex.value).toBeNull();
    expect(onRemove).not.toHaveBeenCalled();
    expect(event.defaultPrevented).toBe(false);
  });

  it('hace preventDefault en las teclas que maneja', () => {
    const { api } = setup();
    const event = press(' ');
    api.handleKeydown(event, 0);
    expect(event.defaultPrevented).toBe(true);
    const other = press('a');
    api.handleKeydown(other, 0);
    expect(other.defaultPrevented).toBe(false);
  });

  it('usa getLabel en los anuncios', () => {
    const onAnnounce = vi.fn();
    const { result } = withSetup(() =>
      useKeyboardReorder({
        items: ref(ITEMS),
        direction: 'vertical',
        isOrdered: true,
        canRemove: true,
        isDisabled: false,
        onMove: vi.fn(),
        onRemove: vi.fn(),
        onAnnounce,
        getLabel: item => String(item.id),
      }),
    );
    result.handleKeydown(press(' '), 1);
    expect(onAnnounce).toHaveBeenCalledWith('announceGrab', {
      label: 'B',
      position: 2,
      total: 3,
    });
  });
});

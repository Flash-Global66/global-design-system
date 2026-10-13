import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { withSetup } from '../../../../../tests/utils/withSetup';
import { usePointerDrag } from '../../../src/shared/composables/usePointerDrag';
import type { DragListItem } from '../../../src/shared/types/drag-list.type';

type PointerType = 'mouse' | 'touch' | 'pen';

/**
 * jsdom puede no tener PointerEvent: se usa MouseEvent y se le define
 * `pointerType` / `pointerId` a mano.
 */
function pointerEvent(
  type: string,
  init: { x?: number; y?: number; pointerType?: PointerType; button?: number },
): MouseEvent {
  const evt = new MouseEvent(type, {
    clientX: init.x ?? 0,
    clientY: init.y ?? 0,
    button: init.button ?? 0,
    bubbles: true,
    cancelable: true,
  });
  Object.defineProperty(evt, 'pointerType', {
    value: init.pointerType ?? 'mouse',
  });
  Object.defineProperty(evt, 'pointerId', { value: 1 });
  return evt;
}

function mockRect(
  el: Element,
  rect: { left: number; top: number; width: number; height: number },
): void {
  el.getBoundingClientRect = (): DOMRect =>
    ({
      ...rect,
      right: rect.left + rect.width,
      bottom: rect.top + rect.height,
      x: rect.left,
      y: rect.top,
      toJSON: () => ({}),
    }) as DOMRect;
}

function createCard(
  parent: HTMLElement,
  index: number,
  rect: { left: number; top: number; width: number; height: number },
): HTMLElement {
  const card = document.createElement('div');
  card.setAttribute('data-drag-index', String(index));
  card.setPointerCapture = vi.fn();
  mockRect(card, rect);
  parent.appendChild(card);
  return card;
}

describe('usePointerDrag', () => {
  let sourceEl: HTMLElement;
  let targetEl: HTMLElement;
  let sourceCard: HTMLElement;
  let targetCards: HTMLElement[];
  let onDrop: ReturnType<typeof vi.fn>;
  let onCancel: ReturnType<typeof vi.fn>;
  let isDisabled: boolean;
  let stop: () => void;
  let session: ReturnType<typeof usePointerDrag>['session'];

  function setup(): void {
    const { result, app } = withSetup(() =>
      usePointerDrag({
        sourceEl: () => sourceEl,
        targetEl: () => targetEl,
        getTargetItemEls: () => targetCards,
        direction: 'vertical',
        canDropToRemove: true,
        isDisabled: () => isDisabled,
        onDrop,
        onCancel,
        resolveItem: (origin, index): DragListItem | null =>
          index < 0 ? null : { id: `${origin}-${index}` },
      }),
    );
    session = result.session;
    stop = (): void => app.unmount();
  }

  beforeEach(() => {
    isDisabled = false;
    onDrop = vi.fn();
    onCancel = vi.fn();
    sourceEl = document.createElement('div');
    targetEl = document.createElement('div');
    sourceEl.setPointerCapture = vi.fn();
    targetEl.setPointerCapture = vi.fn();
    document.body.append(sourceEl, targetEl);
    mockRect(sourceEl, { left: 0, top: 0, width: 200, height: 600 });
    mockRect(targetEl, { left: 300, top: 0, width: 200, height: 600 });
    sourceCard = createCard(sourceEl, 0, {
      left: 10,
      top: 10,
      width: 100,
      height: 50,
    });
    targetCards = [
      createCard(targetEl, 0, { left: 310, top: 0, width: 100, height: 100 }),
      createCard(targetEl, 1, { left: 310, top: 100, width: 100, height: 100 }),
    ];
    setup();
  });

  afterEach(() => {
    stop();
    vi.useRealTimers();
    document.body.innerHTML = '';
  });

  it('con mouse no activa antes de 4 px y activa al superarlos', () => {
    sourceCard.dispatchEvent(pointerEvent('pointerdown', { x: 20, y: 20 }));
    document.dispatchEvent(pointerEvent('pointermove', { x: 22, y: 20 }));
    expect(session.value).toBeNull();

    document.dispatchEvent(pointerEvent('pointermove', { x: 30, y: 20 }));
    expect(session.value).toMatchObject({
      origin: 'source',
      fromIndex: 0,
      isActivated: true,
      ghostOffset: { x: 10, y: 10 },
      item: { id: 'source-0' },
    });
  });

  it('con touch, mover antes del long-press no activa ni hace preventDefault', () => {
    vi.useFakeTimers();
    sourceCard.dispatchEvent(
      pointerEvent('pointerdown', { x: 20, y: 20, pointerType: 'touch' }),
    );
    document.dispatchEvent(
      pointerEvent('pointermove', { x: 20, y: 60, pointerType: 'touch' }),
    );
    vi.advanceTimersByTime(300);
    expect(session.value).toBeNull();

    const touchMove = new Event('touchmove', { cancelable: true });
    document.dispatchEvent(touchMove);
    expect(touchMove.defaultPrevented).toBe(false);
  });

  it('con touch activa tras 200 ms y bloquea touchmove hasta soltar', () => {
    vi.useFakeTimers();
    sourceCard.dispatchEvent(
      pointerEvent('pointerdown', { x: 20, y: 20, pointerType: 'touch' }),
    );
    vi.advanceTimersByTime(200);
    expect(session.value?.isActivated).toBe(true);

    const touchMove = new Event('touchmove', { cancelable: true });
    document.dispatchEvent(touchMove);
    expect(touchMove.defaultPrevented).toBe(true);

    document.dispatchEvent(
      pointerEvent('pointerup', { x: 20, y: 20, pointerType: 'touch' }),
    );
    const after = new Event('touchmove', { cancelable: true });
    document.dispatchEvent(after);
    expect(after.defaultPrevented).toBe(false);
  });

  it('no inicia el arrastre desde un botón del slot', () => {
    const button = document.createElement('button');
    sourceCard.appendChild(button);
    button.dispatchEvent(pointerEvent('pointerdown', { x: 20, y: 20 }));
    document.dispatchEvent(pointerEvent('pointermove', { x: 60, y: 60 }));
    expect(session.value).toBeNull();
  });

  it('no inicia si isDisabled es true', () => {
    isDisabled = true;
    sourceCard.dispatchEvent(pointerEvent('pointerdown', { x: 20, y: 20 }));
    document.dispatchEvent(pointerEvent('pointermove', { x: 60, y: 60 }));
    expect(session.value).toBeNull();
  });

  it('Esc cancela y limpia la sesión', () => {
    sourceCard.dispatchEvent(pointerEvent('pointerdown', { x: 20, y: 20 }));
    document.dispatchEvent(pointerEvent('pointermove', { x: 40, y: 20 }));
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));

    expect(onCancel).toHaveBeenCalledTimes(1);
    expect(onDrop).not.toHaveBeenCalled();
    expect(session.value).toBeNull();
  });

  it('pointercancel cancela y limpia la sesión', () => {
    sourceCard.dispatchEvent(pointerEvent('pointerdown', { x: 20, y: 20 }));
    document.dispatchEvent(pointerEvent('pointermove', { x: 40, y: 20 }));
    document.dispatchEvent(pointerEvent('pointercancel', { x: 40, y: 20 }));

    expect(onCancel).toHaveBeenCalledTimes(1);
    expect(session.value).toBeNull();
  });

  it('soltar sobre el destino llama a onDrop con el índice de inserción', () => {
    sourceCard.dispatchEvent(pointerEvent('pointerdown', { x: 20, y: 20 }));
    document.dispatchEvent(pointerEvent('pointermove', { x: 360, y: 120 }));
    expect(session.value).toMatchObject({ zone: 'target', dropIndex: 1 });

    document.dispatchEvent(pointerEvent('pointerup', { x: 360, y: 120 }));
    expect(onDrop).toHaveBeenCalledWith({
      origin: 'source',
      zone: 'target',
      fromIndex: 0,
      toIndex: 1,
      item: { id: 'source-0' },
    });
    expect(session.value).toBeNull();
  });

  it('soltar un ítem del destino sobre el origen lo quita con toIndex -1', () => {
    targetCards[0].dispatchEvent(
      pointerEvent('pointerdown', { x: 320, y: 10 }),
    );
    document.dispatchEvent(pointerEvent('pointermove', { x: 60, y: 100 }));
    expect(session.value?.zone).toBe('source');

    document.dispatchEvent(pointerEvent('pointerup', { x: 60, y: 100 }));
    expect(onDrop).toHaveBeenCalledWith(
      expect.objectContaining({
        origin: 'target',
        zone: 'source',
        toIndex: -1,
      }),
    );
  });

  it('soltar fuera de toda zona llama a onCancel', () => {
    sourceCard.dispatchEvent(pointerEvent('pointerdown', { x: 20, y: 20 }));
    document.dispatchEvent(pointerEvent('pointermove', { x: 250, y: 300 }));
    document.dispatchEvent(pointerEvent('pointerup', { x: 250, y: 300 }));

    expect(onCancel).toHaveBeenCalledTimes(1);
    expect(onDrop).not.toHaveBeenCalled();
  });
});

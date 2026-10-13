import { onScopeDispose, shallowRef, toValue } from 'vue';
import type { MaybeRefOrGetter, ShallowRef } from 'vue';
import { useEventListener, useTimeoutFn } from '@vueuse/core';
import { DRAG_THRESHOLDS } from '../constants/drag.constant';
import type {
  DragListDirection,
  DragListItem,
  DragOrigin,
  DragPoint,
  DragSession,
  DragZone,
} from '../types/drag-list.type';
import {
  hasExceededDistance,
  isNonDraggableTarget,
  isTouchMoveWithinTolerance,
} from '../utils/activation.util';
import { calculateDropIndex } from '../utils/drop.util';
import { resolveDropAnchor } from '../utils/zone.util';

type Rect = Pick<DOMRect, 'top' | 'left' | 'width' | 'height'>;

type PendingDrag = {
  origin: DragOrigin;
  item: DragListItem;
  fromIndex: number;
  start: DragPoint;
  last: DragPoint;
  ghostOffset: DragPoint;
  cardSize: { width: number; height: number };
  pointerType: string;
};

type RectCache = {
  source: Rect;
  target: Rect;
  items: Rect[];
};

function toRect(el: HTMLElement): Rect {
  const { top, left, width, height } = el.getBoundingClientRect();
  return { top, left, width, height };
}

/**
 * Motor de arrastre por puntero (mouse, lápiz y touch).
 *
 * `session` es `null` mientras el arrastre no se activó (el umbral de
 * distancia o el long-press aún no se cumplen); al activarse pasa a una
 * sesión con `isActivated: true` y se vuelve a `null` al cerrar.
 * `resolveItem` traduce el `data-drag-index` de la tarjeta en el ítem: en el
 * origen es la posición en la lista visible aplanada y en el destino la
 * posición en `modelValue`. Sin ítem, no hay arrastre.
 */
export function usePointerDrag(options: {
  sourceEl: MaybeRefOrGetter<HTMLElement | null | undefined>;
  targetEl: MaybeRefOrGetter<HTMLElement | null | undefined>;
  getTargetItemEls: () => HTMLElement[];
  direction: MaybeRefOrGetter<DragListDirection>;
  canDropToRemove: MaybeRefOrGetter<boolean>;
  isDisabled: MaybeRefOrGetter<boolean>;
  onDrop: (payload: {
    origin: DragOrigin;
    zone: Exclude<DragZone, null>;
    fromIndex: number;
    toIndex: number;
    item: DragListItem;
  }) => void;
  onCancel: () => void;
  resolveItem: (origin: DragOrigin, index: number) => DragListItem | null;
}): { session: ShallowRef<DragSession | null> } {
  const session = shallowRef<DragSession | null>(null);
  let pending: PendingDrag | null = null;
  let cache: RectCache | null = null;

  const longPress = useTimeoutFn(() => activate(), DRAG_THRESHOLDS.touchDelay, {
    immediate: false,
  });

  function preventTouchMove(event: Event): void {
    event.preventDefault();
  }

  function addTouchBlock(): void {
    // No pasivo: un listener pasivo ignora preventDefault y la página haría scroll.
    document.addEventListener('touchmove', preventTouchMove, {
      passive: false,
    });
  }

  function removeTouchBlock(): void {
    document.removeEventListener('touchmove', preventTouchMove);
  }

  function reset(): void {
    longPress.stop();
    removeTouchBlock();
    pending = null;
    cache = null;
    session.value = null;
  }

  function getCache(): RectCache | null {
    const source = toValue(options.sourceEl);
    const target = toValue(options.targetEl);
    if (!source || !target) return null;
    cache ??= {
      source: toRect(source),
      target: toRect(target),
      items: options.getTargetItemEls().map(toRect),
    };
    return cache;
  }

  function buildSession(point: DragPoint): DragSession | null {
    if (!pending) return null;
    const rects = getCache();
    const center = {
      x: point.x - pending.ghostOffset.x + pending.cardSize.width / 2,
      y: point.y - pending.ghostOffset.y + pending.cardSize.height / 2,
    };
    let zone: DragZone = null;
    let dropIndex: number | null = null;
    if (rects) {
      const drop = resolveDropAnchor({
        center,
        pointer: point,
        sourceRect: rects.source,
        targetRect: rects.target,
        origin: pending.origin,
        canDropToRemove: toValue(options.canDropToRemove),
      });
      zone = drop.zone;
      if (zone === 'target') {
        dropIndex = calculateDropIndex({
          point: drop.anchor,
          rects: rects.items,
          axis: toValue(options.direction) === 'horizontal' ? 'x' : 'y',
          draggedIndex: pending.origin === 'target' ? pending.fromIndex : null,
        });
      }
    }
    return {
      origin: pending.origin,
      item: pending.item,
      fromIndex: pending.fromIndex,
      pointer: point,
      ghostOffset: pending.ghostOffset,
      isActivated: true,
      zone,
      dropIndex,
    };
  }

  function activate(): void {
    if (!pending) return;
    cache = null;
    if (pending.pointerType === 'touch') addTouchBlock();
    session.value = buildSession(pending.last);
  }

  function onPointerDown(origin: DragOrigin, event: PointerEvent): void {
    const panel = event.currentTarget as HTMLElement | null;
    if (!panel || pending || toValue(options.isDisabled)) return;
    if (event.pointerType !== 'touch' && event.button !== 0) return;
    if (isNonDraggableTarget(event.target, panel)) return;

    const card = (event.target as Element | null)?.closest<HTMLElement>(
      '[data-drag-index]',
    );
    if (!card || !panel.contains(card)) return;
    const index = Number(card.dataset.dragIndex);
    if (!Number.isInteger(index)) return;
    const item = options.resolveItem(origin, index);
    if (!item) return;

    const rect = card.getBoundingClientRect();
    const start = { x: event.clientX, y: event.clientY };
    pending = {
      origin,
      item,
      fromIndex: index,
      start,
      last: start,
      ghostOffset: { x: start.x - rect.left, y: start.y - rect.top },
      cardSize: { width: rect.width, height: rect.height },
      pointerType: event.pointerType,
    };
    panel.setPointerCapture?.(event.pointerId);
    if (event.pointerType === 'touch') longPress.start();
  }

  function onPointerMove(event: PointerEvent): void {
    if (!pending) return;
    const point = { x: event.clientX, y: event.clientY };
    pending.last = point;

    if (session.value) {
      session.value = buildSession(point);
      return;
    }
    if (pending.pointerType === 'touch') {
      if (
        !isTouchMoveWithinTolerance(
          pending.start,
          point,
          DRAG_THRESHOLDS.touchTolerance,
        )
      ) {
        reset();
      }
      return;
    }
    if (
      hasExceededDistance(pending.start, point, DRAG_THRESHOLDS.mouseDistance)
    ) {
      activate();
    }
  }

  function cancel(): void {
    const wasActive = session.value !== null;
    reset();
    if (wasActive) options.onCancel();
  }

  function onPointerUp(event: PointerEvent): void {
    if (!pending) return;
    if (!session.value) {
      reset();
      return;
    }
    pending.last = { x: event.clientX, y: event.clientY };
    const final = buildSession(pending.last);
    reset();
    if (!final || final.zone === null) {
      options.onCancel();
      return;
    }
    options.onDrop({
      origin: final.origin,
      zone: final.zone,
      fromIndex: final.fromIndex,
      toIndex: final.zone === 'target' ? (final.dropIndex ?? -1) : -1,
      item: final.item,
    });
  }

  function onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape') cancel();
  }

  function invalidateCache(): void {
    cache = null;
  }

  useEventListener(options.sourceEl, 'pointerdown', e =>
    onPointerDown('source', e),
  );
  useEventListener(options.targetEl, 'pointerdown', e =>
    onPointerDown('target', e),
  );
  useEventListener(options.sourceEl, 'scroll', invalidateCache);
  useEventListener(options.targetEl, 'scroll', invalidateCache);
  useEventListener(document, 'pointermove', onPointerMove);
  useEventListener(document, 'pointerup', onPointerUp);
  useEventListener(document, 'pointercancel', cancel);
  useEventListener(document, 'keydown', onKeyDown);
  onScopeDispose(reset);

  return { session };
}

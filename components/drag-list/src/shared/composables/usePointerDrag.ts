import { onScopeDispose, shallowRef, toValue } from 'vue';
import { useEventListener, useTimeoutFn } from '@vueuse/core';
import { DRAG_THRESHOLDS } from '../constants/drag.constant';
import type {
  DragOrigin,
  DragPoint,
  DragSession,
  DragZone,
} from '../types/drag-list.type';
import type {
  DragListRect,
  PendingDrag,
  RectCache,
  UsePointerDragOptions,
  UsePointerDragReturn,
} from '../types/engine.type';
import {
  hasExceededDistance,
  isNonDraggableTarget,
  isTouchMoveWithinTolerance,
} from '../utils/activation.util';
import { calculateDropIndex } from '../utils/drop.util';
import { resolveDropAnchor } from '../utils/zone.util';

function toRect(el: HTMLElement): DragListRect {
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
export function usePointerDrag(
  options: UsePointerDragOptions,
): UsePointerDragReturn {
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
      scrolls: getScrollContainers(source, target).map(el => ({
        el,
        left: el.scrollLeft,
        top: el.scrollTop,
      })),
    };
    return cache;
  }

  function getScrollContainers(
    source: HTMLElement,
    target: HTMLElement,
  ): HTMLElement[] {
    const extra = options.getScrollContainers?.() ?? [];
    return [source, target, ...extra].filter(
      (el, index, all): el is HTMLElement => !!el && all.indexOf(el) === index,
    );
  }

  /** Rects de los ítems desplazados por el scroll ocurrido desde la activación. */
  function getItemRects(current: RectCache): DragListRect[] {
    const target = toValue(options.targetEl);
    let dx = 0;
    let dy = 0;
    current.scrolls.forEach(({ el, left, top }) => {
      // solo mueve los ítems el scroll del destino o de sus ancestros/descendientes
      if (!target || !(el.contains(target) || target.contains(el))) return;
      dx += el.scrollLeft - left;
      dy += el.scrollTop - top;
    });
    if (dx === 0 && dy === 0) return current.items;
    return current.items.map(rect => ({
      ...rect,
      left: rect.left - dx,
      top: rect.top - dy,
    }));
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
          rects: getItemRects(rects),
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

  function onScroll(): void {
    // el DOM ya está en orden de previsualización: no se relee, se recalcula
    if (!pending || !session.value) return;
    session.value = buildSession(pending.last);
  }

  useEventListener(options.sourceEl, 'pointerdown', e =>
    onPointerDown('source', e),
  );
  useEventListener(options.targetEl, 'pointerdown', e =>
    onPointerDown('target', e),
  );
  // el scroll no burbuja: se captura el de cualquier descendiente
  useEventListener(options.sourceEl, 'scroll', onScroll, { capture: true });
  useEventListener(options.targetEl, 'scroll', onScroll, { capture: true });
  useEventListener(document, 'pointermove', onPointerMove);
  useEventListener(document, 'pointerup', onPointerUp);
  useEventListener(document, 'pointercancel', cancel);
  useEventListener(document, 'keydown', onKeyDown);
  onScopeDispose(reset);

  return { session };
}

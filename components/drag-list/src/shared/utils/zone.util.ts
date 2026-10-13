import type { DragOrigin, DragPoint, DragZone } from '../types/drag-list.type';

type ZoneRect = Pick<DOMRect, 'top' | 'left' | 'width' | 'height'>;

function containsPoint({
  rect,
  point,
}: {
  rect: ZoneRect;
  point: DragPoint;
}): boolean {
  return (
    point.x >= rect.left &&
    point.x <= rect.left + rect.width &&
    point.y >= rect.top &&
    point.y <= rect.top + rect.height
  );
}

/**
 * Zona de soltado según el centro del ghost. `'source'` solo existe si el
 * arrastre sale del destino y `canDropToRemove` es true.
 */
export function resolveDragZone({
  center,
  sourceRect,
  targetRect,
  origin,
  canDropToRemove,
}: {
  center: DragPoint;
  sourceRect: ZoneRect;
  targetRect: ZoneRect;
  origin: DragOrigin;
  canDropToRemove: boolean;
}): DragZone {
  if (containsPoint({ rect: targetRect, point: center })) return 'target';
  if (
    origin === 'target' &&
    canDropToRemove &&
    containsPoint({ rect: sourceRect, point: center })
  ) {
    return 'source';
  }
  return null;
}

import type { DragListDirection, DragPoint } from '../types/drag-list.type';

import type { DragListEdgeRect } from '../types/engine.type';

/**
 * Delta de auto-scroll (px por frame) según la cercanía del puntero a los bordes del panel.
 * Negativo hacia el inicio, positivo hacia el final, 0 fuera de la franja del borde.
 */
export function calculateAutoScrollDelta({
  pointer,
  rect,
  edge,
  maxSpeed,
  axis,
}: {
  pointer: DragPoint;
  rect: DragListEdgeRect;
  edge: number;
  maxSpeed: number;
  axis: DragListDirection;
}): number {
  const isVertical = axis === 'vertical';
  const position = isVertical ? pointer.y : pointer.x;
  const start = isVertical ? rect.top : rect.left;
  const end = isVertical ? rect.bottom : rect.right;

  const toStart = position - start;
  const toEnd = end - position;

  if (toStart < edge) return -maxSpeed * Math.min(1, (edge - toStart) / edge);
  if (toEnd < edge) return maxSpeed * Math.min(1, (edge - toEnd) / edge);
  return 0;
}

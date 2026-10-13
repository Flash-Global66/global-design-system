import type { DragPoint } from '../types/drag-list.type';

/**
 * Posición de inserción en la lista sin el arrastrado: cuenta los rects
 * (excluido `draggedIndex`) cuyo punto medio queda antes del punto.
 * En un reordenamiento es el `to` de `moveItem(from, to)`; soltar en el
 * mismo lugar da `draggedIndex`. El resultado queda en `[0, n]`.
 */
export function calculateDropIndex({
  point,
  rects,
  axis,
  draggedIndex,
}: {
  point: DragPoint;
  rects: Pick<DOMRect, 'top' | 'left' | 'width' | 'height'>[];
  axis: 'x' | 'y';
  draggedIndex: number | null;
}): number {
  const coordinate = axis === 'y' ? point.y : point.x;
  let index = 0;

  rects.forEach((rect, position) => {
    if (position === draggedIndex) return;
    const middle =
      axis === 'y' ? rect.top + rect.height / 2 : rect.left + rect.width / 2;
    if (middle < coordinate) index += 1;
  });

  return Math.min(Math.max(index, 0), rects.length);
}

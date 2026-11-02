import type { DragPoint } from '../types/drag-list.type';

const NON_DRAGGABLE_SELECTOR =
  'button, a, input, select, textarea, [data-no-drag]';

/** Distancia euclidiana entre dos puntos. */
function getDistance(start: DragPoint, current: DragPoint): number {
  return Math.hypot(current.x - start.x, current.y - start.y);
}

/** Indica si el puntero se alejó del inicio al menos `threshold` px. */
export function hasExceededDistance(
  start: DragPoint,
  current: DragPoint,
  threshold: number,
): boolean {
  return getDistance(start, current) >= threshold;
}

/** Indica si el dedo sigue dentro de la tolerancia del long-press. */
export function isTouchMoveWithinTolerance(
  start: DragPoint,
  current: DragPoint,
  tolerance: number,
): boolean {
  return getDistance(start, current) <= tolerance;
}

/** Indica si el target es (o está dentro de) un elemento interactivo contenido en `root`. */
export function isNonDraggableTarget(
  target: EventTarget | null,
  root: Element,
): boolean {
  if (!(target instanceof Element)) return false;
  const match = target.closest(NON_DRAGGABLE_SELECTOR);
  return match !== null && root.contains(match);
}

import type { DragSession } from '../types/drag-list.type';
import type { DragListOverlayState } from '../types/engine.type';

/** Resuelve la visibilidad y la acción de los overlays de ayuda de cada panel. */
export function getOverlayState({
  session,
  canDropToRemove,
}: {
  session: DragSession | null;
  canDropToRemove: boolean;
}): DragListOverlayState {
  const hidden = { isVisible: false, action: null };
  if (!session || !session.isActivated)
    return { source: hidden, target: hidden };

  const isAdding = session.origin === 'source' && session.zone !== 'target';
  const isRemoving =
    session.origin === 'target' && canDropToRemove && session.zone !== 'source';

  return {
    source: isRemoving ? { isVisible: true, action: 'remove' } : hidden,
    target: isAdding ? { isVisible: true, action: 'add' } : hidden,
  };
}

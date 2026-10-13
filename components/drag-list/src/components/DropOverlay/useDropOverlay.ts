import { computed } from 'vue';
import { useNamespace } from '@flash-global66/g-utils';
import type {
  DropOverlayProps,
  UseDropOverlayReturn,
} from '../../shared/types/engine.type';

/** Clases BEM y nombre de ícono del overlay de ayuda según la acción. */
export function useDropOverlay(props: DropOverlayProps): UseDropOverlayReturn {
  const ns = useNamespace('drag-list-overlay');

  const overlayClass = computed(() => [
    ns.b(),
    ns.m(props.action),
    ns.is('visible', props.isVisible),
  ]);

  const iconName = computed(() =>
    props.action === 'remove' ? 'regular trash' : 'regular plus',
  );

  return { ns, overlayClass, iconName };
}

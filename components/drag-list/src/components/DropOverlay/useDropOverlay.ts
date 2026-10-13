import { computed } from 'vue';
import type { ComputedRef, ExtractPropTypes } from 'vue';
import { useNamespace } from '@flash-global66/g-utils';
import type { dropOverlayProps } from './constants/drop-overlay.constant';

/** Clases BEM y nombre de ícono del overlay de ayuda según la acción. */
export function useDropOverlay(
  props: ExtractPropTypes<typeof dropOverlayProps>,
): {
  ns: ReturnType<typeof useNamespace>;
  overlayClass: ComputedRef<string[]>;
  iconName: ComputedRef<'regular plus' | 'regular trash'>;
} {
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

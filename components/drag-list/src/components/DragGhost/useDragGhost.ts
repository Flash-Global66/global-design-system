import { computed, ref, watch } from 'vue';
import type { CSSProperties } from 'vue';
import { useNamespace } from '@flash-global66/g-utils';
import { useZIndex } from '@flash-global66/g-hooks';
import type {
  UseDragGhostProps,
  UseDragGhostReturn,
} from '../../shared/types/engine.type';

/** Calcula visibilidad y estilo del fantasma que sigue al puntero. */
export function useDragGhost(props: UseDragGhostProps): UseDragGhostReturn {
  const ns = useNamespace('drag-list-ghost');
  const { nextZIndex } = useZIndex();
  const zIndex = ref(0);

  const isVisible = computed(() => !!props.session?.isActivated);

  watch(
    isVisible,
    visible => {
      if (visible) zIndex.value = nextZIndex();
    },
    { immediate: true },
  );

  const style = computed<CSSProperties>(() => {
    const session = props.session;
    const x = session ? session.pointer.x - session.ghostOffset.x : 0;
    const y = session ? session.pointer.y - session.ghostOffset.y : 0;
    return {
      transform: `translate3d(${x}px, ${y}px, 0)`,
      zIndex: zIndex.value,
      ...(props.width !== undefined ? { width: `${props.width}px` } : {}),
    };
  });

  return { isVisible, style, ns };
}

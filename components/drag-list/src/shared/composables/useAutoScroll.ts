import { toValue, watch } from 'vue';
import { useRafFn } from '@vueuse/core';
import { DRAG_THRESHOLDS } from '../constants/drag.constant';
import type { DragListDirection } from '../types/drag-list.type';
import type { UseAutoScrollOptions } from '../types/engine.type';
import {
  calculateAutoScrollDelta,
  pickScrollContainer,
} from '../utils/scroll.util';

const SCROLL_AXES: DragListDirection[] = ['vertical', 'horizontal'];

/**
 * Auto-scroll por frame mientras el arrastre está activo. Cada eje elige su propio
 * contenedor bajo el puntero, así un panel desborda en su eje sin importar la dirección de la lista.
 */
export function useAutoScroll({
  containers,
  pointer,
  isActive,
}: UseAutoScrollOptions): void {
  function tick(): void {
    const point = toValue(pointer);
    if (!point) return;

    const candidates = toValue(containers);
    for (const axis of SCROLL_AXES) {
      const container = pickScrollContainer({
        containers: candidates,
        pointer: point,
        axis,
      });
      if (!container) continue;

      const delta = calculateAutoScrollDelta({
        pointer: point,
        rect: container.getBoundingClientRect(),
        edge: DRAG_THRESHOLDS.autoScrollEdge,
        maxSpeed: DRAG_THRESHOLDS.autoScrollMaxSpeed,
        axis,
      });
      if (delta === 0) continue;

      if (axis === 'vertical') container.scrollTop += delta;
      else container.scrollLeft += delta;
    }
  }

  const { pause, resume } = useRafFn(tick, { immediate: false });

  watch(
    () => toValue(isActive),
    active => {
      if (active) resume();
      else pause();
    },
    { immediate: true },
  );
}

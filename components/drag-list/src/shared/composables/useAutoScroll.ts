import { toValue, watch } from 'vue';
import { useRafFn } from '@vueuse/core';
import { DRAG_THRESHOLDS } from '../constants/drag.constant';
import type { UseAutoScrollOptions } from '../types/engine.type';
import { calculateAutoScrollDelta } from '../utils/scroll.util';

/**
 * Auto-scroll por frame del contenedor bajo el puntero mientras el arrastre está activo.
 * Acepta el eje como 'x' | 'y' o como DragListDirection.
 */
export function useAutoScroll({
  containers,
  pointer,
  axis,
  isActive,
}: UseAutoScrollOptions): void {
  function tick(): void {
    const point = toValue(pointer);
    if (!point) return;

    const currentAxis = toValue(axis);
    const isVertical = currentAxis === 'y' || currentAxis === 'vertical';

    for (const container of toValue(containers)) {
      if (!container) continue;
      const rect = container.getBoundingClientRect();
      const contains =
        point.x >= rect.left &&
        point.x <= rect.right &&
        point.y >= rect.top &&
        point.y <= rect.bottom;
      if (!contains) continue;

      const delta = calculateAutoScrollDelta({
        pointer: point,
        rect,
        edge: DRAG_THRESHOLDS.autoScrollEdge,
        maxSpeed: DRAG_THRESHOLDS.autoScrollMaxSpeed,
        axis: isVertical ? 'vertical' : 'horizontal',
      });
      if (delta === 0) return;

      if (isVertical) container.scrollTop += delta;
      else container.scrollLeft += delta;
      return;
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

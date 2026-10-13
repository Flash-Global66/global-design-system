import { toValue, watch } from 'vue';
import { useRafFn } from '@vueuse/core';
import { DRAG_THRESHOLDS } from '../constants/drag.constant';
import type { UseAutoScrollOptions } from '../types/engine.type';
import {
  calculateAutoScrollDelta,
  pickScrollContainer,
} from '../utils/scroll.util';

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

    const direction = isVertical ? 'vertical' : 'horizontal';
    const container = pickScrollContainer({
      containers: toValue(containers),
      pointer: point,
      axis: direction,
    });
    if (!container) return;

    const delta = calculateAutoScrollDelta({
      pointer: point,
      rect: container.getBoundingClientRect(),
      edge: DRAG_THRESHOLDS.autoScrollEdge,
      maxSpeed: DRAG_THRESHOLDS.autoScrollMaxSpeed,
      axis: direction,
    });
    if (delta === 0) return;

    if (isVertical) container.scrollTop += delta;
    else container.scrollLeft += delta;
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

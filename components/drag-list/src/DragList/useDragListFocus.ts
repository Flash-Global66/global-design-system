import { watch } from 'vue';
import type { UseDragListFocusOptions } from '../shared/types/engine.type';

const TARGET_LIST_SELECTOR = '[data-drag-target-list]';

/** Mueve el foco a la tarjeta del destino indicada por `focusIndex`. */
export function useDragListFocus({
  focusIndex,
  targetEl,
}: UseDragListFocusOptions): void {
  watch(
    focusIndex,
    index => {
      if (index === null) return;
      const list = targetEl.value?.querySelector(TARGET_LIST_SELECTOR);
      const card = list?.querySelector<HTMLElement>(
        `:scope > [data-drag-index="${index}"]`,
      );
      card?.focus();
    },
    { flush: 'post' },
  );
}

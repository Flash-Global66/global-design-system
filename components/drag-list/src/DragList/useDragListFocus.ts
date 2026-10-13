import { nextTick, watch } from 'vue';
import type { Ref } from 'vue';

const TARGET_LIST_SELECTOR = '[data-drag-target-list]';

interface UseDragListFocusOptions {
  focusIndex: Ref<number | null>;
  targetEl: Ref<HTMLElement | null>;
}

/** Mueve el foco a la tarjeta del destino indicada por `focusIndex`. */
export function useDragListFocus({
  focusIndex,
  targetEl,
}: UseDragListFocusOptions): void {
  watch(focusIndex, async index => {
    if (index === null) return;
    await nextTick();
    const list = targetEl.value?.querySelector(TARGET_LIST_SELECTOR);
    const card = list?.querySelector<HTMLElement>(
      `:scope > [data-drag-index="${index}"]`,
    );
    card?.focus();
  });
}

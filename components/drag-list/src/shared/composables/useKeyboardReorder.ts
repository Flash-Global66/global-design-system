import { ref, shallowRef, toValue, triggerRef } from 'vue';
import type { MaybeRefOrGetter, Ref } from 'vue';
import type {
  DragListDirection,
  DragListItem,
  DragListTexts,
} from '../types/drag-list.type';

type AnnounceParams = { label?: string; position?: number; total?: number };

const KEYS = {
  grab: [' ', 'Enter'],
  cancel: ['Escape'],
  remove: ['Delete', 'Backspace'],
  previous: { vertical: 'ArrowUp', horizontal: 'ArrowLeft' },
  next: { vertical: 'ArrowDown', horizontal: 'ArrowRight' },
} as const;

/**
 * Reordenado y quitado con teclado: tomar, mover, soltar, cancelar y quitar.
 */
export function useKeyboardReorder(options: {
  items: MaybeRefOrGetter<DragListItem[]>;
  direction: MaybeRefOrGetter<DragListDirection>;
  isOrdered: MaybeRefOrGetter<boolean>;
  canRemove: MaybeRefOrGetter<boolean>;
  isDisabled: MaybeRefOrGetter<boolean>;
  onMove: (from: number, to: number) => void;
  onRemove: (index: number) => void;
  onAnnounce: (key: keyof DragListTexts, params?: AnnounceParams) => void;
  getLabel?: (item: DragListItem) => string;
}): {
  grabbedIndex: Ref<number | null>;
  grabbedFromIndex: Ref<number | null>;
  focusIndex: Ref<number | null>;
  handleKeydown: (event: KeyboardEvent, index: number) => void;
} {
  const grabbedIndex = ref<number | null>(null);
  const focusIndex = shallowRef<number | null>(null);

  /** Pide el foco y notifica aunque el índice repita el valor anterior. */
  function requestFocus(index: number | null): void {
    focusIndex.value = index;
    triggerRef(focusIndex);
  }
  const grabbedFromIndex = ref<number | null>(null);
  const originIndex = ref(0);

  function announce(key: keyof DragListTexts, position: number): void {
    const items = toValue(options.items);
    const item = items[originIndex.value];
    options.onAnnounce(key, {
      label: item && options.getLabel ? options.getLabel(item) : undefined,
      position: position + 1,
      total: items.length,
    });
  }

  function grab(index: number): void {
    if (!toValue(options.isOrdered)) return;
    originIndex.value = index;
    grabbedFromIndex.value = index;
    grabbedIndex.value = index;
    requestFocus(index);
    announce('announceGrab', index);
  }

  function step(delta: number): void {
    if (grabbedIndex.value === null) return;
    const last = toValue(options.items).length - 1;
    const next = Math.min(Math.max(grabbedIndex.value + delta, 0), last);
    if (next === grabbedIndex.value) return;
    grabbedIndex.value = next;
    requestFocus(next);
    announce('announceMove', next);
  }

  function drop(): void {
    if (grabbedIndex.value === null) return;
    const from = originIndex.value;
    const to = grabbedIndex.value;
    grabbedIndex.value = null;
    grabbedFromIndex.value = null;
    requestFocus(to);
    if (from !== to) options.onMove(from, to);
    announce('announceReorder', to);
  }

  function cancel(): void {
    if (grabbedIndex.value === null) return;
    grabbedIndex.value = null;
    grabbedFromIndex.value = null;
    requestFocus(originIndex.value);
    announce('announceCancel', originIndex.value);
  }

  function remove(index: number): void {
    if (!toValue(options.canRemove) || grabbedIndex.value !== null) return;
    const remaining = toValue(options.items).length - 1;
    originIndex.value = index;
    announce('announceRemove', index);
    options.onRemove(index);
    requestFocus(remaining > 0 ? Math.min(index, remaining - 1) : null);
  }

  function handleKeydown(event: KeyboardEvent, index: number): void {
    if (toValue(options.isDisabled)) return;
    const direction = toValue(options.direction);
    const isGrabbed = grabbedIndex.value !== null;
    const { key } = event;

    if ((KEYS.grab as readonly string[]).includes(key)) {
      event.preventDefault();
      if (isGrabbed) drop();
      else grab(index);
    } else if (isGrabbed && key === KEYS.previous[direction]) {
      event.preventDefault();
      step(-1);
    } else if (isGrabbed && key === KEYS.next[direction]) {
      event.preventDefault();
      step(1);
    } else if (isGrabbed && (KEYS.cancel as readonly string[]).includes(key)) {
      event.preventDefault();
      cancel();
    } else if ((KEYS.remove as readonly string[]).includes(key)) {
      if (!toValue(options.canRemove) || isGrabbed) return;
      event.preventDefault();
      remove(index);
    }
  }

  return { grabbedIndex, grabbedFromIndex, focusIndex, handleKeydown };
}

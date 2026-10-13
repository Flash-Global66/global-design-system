import { computed, ref, watch } from 'vue';
import type { ComputedRef, ExtractPropTypes, Ref, SetupContext } from 'vue';
import { useNamespace } from '@flash-global66/g-utils';
import { DEFAULT_DRAG_LIST_TEXTS } from '../shared/constants/texts.constant';
import { useAutoScroll } from '../shared/composables/useAutoScroll';
import { useKeyboardReorder } from '../shared/composables/useKeyboardReorder';
import { useLiveAnnouncer } from '../shared/composables/useLiveAnnouncer';
import { usePointerDrag } from '../shared/composables/usePointerDrag';
import type {
  DragListAddVia,
  DragListItem,
  DragListKey,
  DragListPreviewEntry,
  DragListRemoveVia,
  DragListSource,
  DragListTexts,
  DragSession,
} from '../shared/types/drag-list.type';
import {
  findDuplicateKeys,
  getItemKey,
  getItemLabel,
  getPreviewItems,
  getSourceEmptyReason,
  getVisibleSource,
  insertItemAt,
  isGroupedSource,
  moveItem,
  removeItemAt,
} from '../shared/utils/list.util';
import { getOverlayState } from '../shared/utils/overlay.util';
import { dragListEmits, dragListProps } from './constants/drag-list.constant';

type DragListProps = ExtractPropTypes<typeof dragListProps>;
type DragListEmit = SetupContext<typeof dragListEmits>['emit'];

type ItemKey = string | ((item: DragListItem) => DragListKey);

const POSITION_OFFSET = 1;
const NOT_FOUND = -1;
const TARGET_ITEM_SELECTOR = '[data-drag-target-list] > [data-drag-index]';

/**
 * Orquesta el estado de GDragList: agregar, quitar y mover, el motor de
 * puntero, el teclado, los anuncios y los datos que consumen los paneles.
 */
export function useDragList(props: DragListProps, emit: DragListEmit) {
  const ns = useNamespace('drag-list');
  const sourceEl = ref<HTMLElement | null>(null);
  const targetEl = ref<HTMLElement | null>(null);
  const lastItem = ref<DragListItem | null>(null);

  const texts: ComputedRef<DragListTexts> = computed(() => ({
    ...DEFAULT_DRAG_LIST_TEXTS,
    ...props.texts,
  }));
  const { message: announcement, announce } = useLiveAnnouncer(texts);

  const itemKey = computed(() => props.itemKey as ItemKey);

  function getKey(item: DragListItem): DragListKey {
    return getItemKey(item, itemKey.value);
  }

  function getLabel(item: DragListItem): string {
    return getItemLabel(item, props.itemLabel, itemKey.value);
  }

  const visibleSource: ComputedRef<DragListSource> = computed(() =>
    getVisibleSource({
      source: props.source,
      modelValue: props.modelValue,
      itemKey: itemKey.value,
      isRepeatable: props.repeatable,
    }),
  );

  const emptyReason: ComputedRef<'empty' | 'all-added' | null> = computed(() =>
    getSourceEmptyReason({
      source: props.source,
      visibleSource: visibleSource.value,
    }),
  );

  const flatVisibleSource = computed<DragListItem[]>(() =>
    isGroupedSource(visibleSource.value)
      ? visibleSource.value.flatMap(group => group.items)
      : (visibleSource.value as DragListItem[]),
  );

  if (import.meta.env.DEV) {
    watch(
      () => props.modelValue,
      items => {
        findDuplicateKeys(items, itemKey.value).forEach(key => {
          console.warn(
            `[GDragList] itemKey duplicado en modelValue: "${String(key)}"`,
          );
        });
      },
      { immediate: true },
    );
  }

  /** Agrega un ítem; sin `ordered` ignora `index` y agrega al final. */
  function add(
    item: DragListItem,
    index: number | undefined,
    via: DragListAddVia,
  ): void {
    if (props.disabled) return;
    const current = props.modelValue;
    const key = getKey(item);
    if (!props.repeatable && current.some(entry => getKey(entry) === key)) {
      return;
    }
    let next = item;
    if (props.repeatable) {
      if (!props.cloneItem) {
        console.warn('[GDragList] repeatable requiere la prop cloneItem');
        return;
      }
      next = props.cloneItem(item);
    }
    const at =
      props.ordered && index !== undefined
        ? Math.min(Math.max(index, 0), current.length)
        : current.length;
    emit('update:modelValue', insertItemAt(current, next, at));
    emit('add', next, at, via);
    announce('announceAdd', {
      label: getLabel(next),
      position: at + POSITION_OFFSET,
      total: current.length + POSITION_OFFSET,
    });
  }

  /**
   * Quita un ítem. Con `via` distinto de `'api'` un número es el índice;
   * con `'api'` recibe la key del ítem (como el método expuesto `remove(key)`).
   */
  function remove(keyOrIndex: DragListKey, via: DragListRemoveVia): void {
    if (props.disabled) return;
    const current = props.modelValue;
    const index =
      typeof keyOrIndex === 'number' && via !== 'api'
        ? keyOrIndex
        : current.findIndex(entry => getKey(entry) === keyOrIndex);
    const item = current[index];
    if (index === NOT_FOUND || !item) return;
    emit('update:modelValue', removeItemAt(current, index));
    emit('remove', item, index, via);
    if (via !== 'keyboard')
      announce('announceRemove', { label: getLabel(item) });
  }

  function applyMove(from: number, to: number): DragListItem | null {
    const current = props.modelValue;
    const isInRange = (index: number): boolean =>
      index >= 0 && index < current.length;
    if (props.disabled || !props.ordered || from === to) return null;
    if (!isInRange(from) || !isInRange(to)) return null;
    const item = current[from];
    emit('update:modelValue', moveItem(current, from, to));
    emit('reorder', item, from, to);
    return item;
  }

  /** Mueve un ítem del destino; solo con `ordered`. */
  function move(from: number, to: number): void {
    const item = applyMove(from, to);
    if (!item) return;
    announce('announceReorder', {
      label: getLabel(item),
      position: to + POSITION_OFFSET,
      total: props.modelValue.length,
    });
  }

  function getTargetItemEls(): HTMLElement[] {
    if (!targetEl.value) return [];
    const getIndex = (el: HTMLElement): number => Number(el.dataset.dragIndex);
    return Array.from(
      targetEl.value.querySelectorAll<HTMLElement>(TARGET_ITEM_SELECTOR),
    ).sort((a, b) => getIndex(a) - getIndex(b));
  }

  function resolveItem(
    origin: 'source' | 'target',
    index: number,
  ): DragListItem | null {
    const list =
      origin === 'source' ? flatVisibleSource.value : props.modelValue;
    return list[index] ?? null;
  }

  const { session } = usePointerDrag({
    sourceEl,
    targetEl,
    getTargetItemEls,
    direction: () => props.direction,
    canDropToRemove: () => props.dragToRemove,
    isDisabled: () => props.disabled,
    resolveItem,
    onDrop: ({ origin, zone, fromIndex, toIndex, item }) => {
      if (zone === 'target' && origin === 'source') add(item, toIndex, 'drag');
      else if (zone === 'target') move(fromIndex, toIndex);
      else if (origin === 'target' && props.dragToRemove) {
        remove(fromIndex, 'drag');
      }
    },
    onCancel: () => {
      if (!lastItem.value) return;
      announce('announceCancel', { label: getLabel(lastItem.value) });
    },
  });

  const isSessionActive = computed(() => !!session.value?.isActivated);

  watch(isSessionActive, isActive => {
    const current = session.value;
    if (!isActive || !current) return;
    lastItem.value = current.item;
    const key: keyof DragListTexts =
      current.origin === 'source'
        ? 'announceDragStartAdd'
        : props.dragToRemove
          ? 'announceDragStartRemove'
          : 'announceDragStartReorder';
    announce(key, {
      label: getLabel(current.item),
      position: current.fromIndex + POSITION_OFFSET,
      total: props.modelValue.length,
    });
  });

  const overlayState = computed(() =>
    getOverlayState({
      session: session.value,
      canDropToRemove: props.dragToRemove,
    }),
  );

  useAutoScroll({
    containers: () => [sourceEl.value, targetEl.value],
    pointer: () => session.value?.pointer ?? null,
    axis: () => props.direction,
    isActive: isSessionActive,
  });

  const { grabbedIndex, grabbedFromIndex, focusIndex, handleKeydown } =
    useKeyboardReorder({
      items: () => props.modelValue,
      direction: () => props.direction,
      isOrdered: () => props.ordered,
      canRemove: () => props.keyboardRemove,
      isDisabled: () => props.disabled,
      onMove: applyMove,
      onRemove: index => remove(index, 'keyboard'),
      onAnnounce: announce,
      getLabel,
    });

  const previewItems: ComputedRef<DragListPreviewEntry[]> = computed(() => {
    const from = grabbedFromIndex.value;
    const to = grabbedIndex.value;
    if (from === null || to === null) {
      return getPreviewItems({
        items: props.modelValue,
        session: session.value,
      });
    }
    return moveItem(props.modelValue, from, to).map(item => {
      const isGrabbed = item === props.modelValue[from];
      return {
        item,
        index: isGrabbed ? from : props.modelValue.indexOf(item),
        isPlaceholder: isGrabbed,
      };
    });
  });

  /** Handler de teclado de una tarjeta del destino. */
  function handleTargetKeydown(event: KeyboardEvent, index: number): void {
    handleKeydown(event, index);
  }

  /** Props que recibe el slot `source-item`. */
  function getSourceSlotProps(item: DragListItem): {
    item: DragListItem;
    canAdd: boolean;
    add: () => void;
  } {
    return {
      item,
      canAdd: !props.disabled,
      add: () => add(item, undefined, 'button'),
    };
  }

  /** Props que recibe el slot `target-item`. */
  function getTargetSlotProps(index: number): {
    item: DragListItem;
    index: number;
    position: number;
    isFirst: boolean;
    isLast: boolean;
    remove: () => void;
    moveUp: () => void;
    moveDown: () => void;
  } {
    return {
      item: props.modelValue[index],
      index,
      position: index + POSITION_OFFSET,
      isFirst: index === 0,
      isLast: index === props.modelValue.length - 1,
      remove: () => remove(index, 'button'),
      moveUp: () => move(index, index - 1),
      moveDown: () => move(index, index + 1),
    };
  }

  return {
    ns,
    texts,
    visibleSource,
    emptyReason,
    previewItems,
    overlayState,
    session: session as Readonly<Ref<DragSession | null>>,
    sourceEl,
    targetEl,
    announcement,
    focusIndex,
    grabbedIndex,
    handleTargetKeydown,
    getSourceSlotProps,
    getTargetSlotProps,
    add,
    remove,
    move,
  };
}

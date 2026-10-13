export type DragListItem = Record<string, unknown>;
export type DragListKey = string | number;

export interface DragListSourceGroup {
  key: DragListKey;
  label?: string;
  items: DragListItem[];
}

export type DragListSource = DragListItem[] | DragListSourceGroup[];

export type DragListDirection = 'vertical' | 'horizontal';
export type DragOrigin = 'source' | 'target';
export type DragZone = 'source' | 'target' | null;
export type DragListAddVia = 'drag' | 'button' | 'api';
export type DragListRemoveVia = 'drag' | 'button' | 'keyboard' | 'api';
export type DragListOverlayAction = 'add' | 'remove';

export interface DragPoint {
  x: number;
  y: number;
}

export interface DragSession {
  origin: DragOrigin;
  item: DragListItem;
  fromIndex: number;
  pointer: DragPoint;
  ghostOffset: DragPoint;
  isActivated: boolean;
  zone: DragZone;
  dropIndex: number | null;
}

/** Placeholders soportados: {label}, {position}, {total}. */
export interface DragListTexts {
  overlayAdd: string;
  overlayRemove: string;
  emptyTarget: string;
  sourceLabel: string;
  targetLabel: string;
  announceDragStartAdd: string;
  announceDragStartRemove: string;
  announceDragStartReorder: string;
  announceGrab: string;
  announceMove: string;
  announceAdd: string;
  announceRemove: string;
  announceReorder: string;
  announceCancel: string;
}

export interface DragListSlots {
  'source-header'?: () => unknown;
  'source-group-header'?: (props: { group: DragListSourceGroup }) => unknown;
  'source-item'?: (props: {
    item: DragListItem;
    canAdd: boolean;
    add: () => void;
  }) => unknown;
  'source-empty'?: (props: { reason: 'empty' | 'all-added' }) => unknown;
  'target-header'?: () => unknown;
  'target-item'?: (props: {
    item: DragListItem;
    index: number;
    position: number;
    isFirst: boolean;
    isLast: boolean;
    remove: () => void;
    moveUp: () => void;
    moveDown: () => void;
  }) => unknown;
  start?: () => unknown;
  end?: () => unknown;
  connector?: (props: { direction: DragListDirection }) => unknown;
  empty?: () => unknown;
  'drop-overlay'?: (props: { action: DragListOverlayAction }) => unknown;
}

export interface DragListExpose {
  add(item: DragListItem, index?: number): void;
  remove(key: DragListKey): void;
  move(from: number, to: number): void;
}

/** Entrada de la lista de previsualización del destino durante un arrastre. */
export interface DragListPreviewEntry {
  item: DragListItem;
  /** índice en modelValue; -1 si es un ítem que entra desde el origen */
  index: number;
  isPlaceholder: boolean;
}

/** Props que recibe el slot `target-item`. */
export interface DragListTargetSlotProps {
  item: DragListItem;
  index: number;
  position: number;
  isFirst: boolean;
  isLast: boolean;
  remove: () => void;
  moveUp: () => void;
  moveDown: () => void;
}

/** Retorno de `useDragList`: estado y handlers que consume el componente. */
export interface UseDragListReturn {
  ns: ReturnType<typeof import('@flash-global66/g-utils').useNamespace>;
  rootClass: import('vue').ComputedRef<string[]>;
  getKey: (item: DragListItem) => DragListKey;
  exposed: DragListExpose;
  texts: import('vue').ComputedRef<DragListTexts>;
  visibleSource: import('vue').ComputedRef<DragListSource>;
  emptyReason: import('vue').ComputedRef<'empty' | 'all-added' | null>;
  previewItems: import('vue').ComputedRef<DragListPreviewEntry[]>;
  overlayState: import('vue').ComputedRef<
    ReturnType<typeof import('../utils/overlay.util').getOverlayState>
  >;
  session: Readonly<import('vue').Ref<DragSession | null>>;
  sourceEl: import('vue').Ref<HTMLElement | null>;
  targetEl: import('vue').Ref<HTMLElement | null>;
  announcement: import('vue').Ref<string>;
  focusIndex: import('vue').Ref<number | null>;
  grabbedIndex: import('vue').Ref<number | null>;
  handleTargetKeydown: (event: KeyboardEvent, index: number) => void;
  getSourceSlotProps: (item: DragListItem) => {
    item: DragListItem;
    canAdd: boolean;
    add: () => void;
  };
  getTargetSlotProps: (index: number) => DragListTargetSlotProps;
  add: (
    item: DragListItem,
    index: number | undefined,
    via: DragListAddVia,
  ) => void;
  remove: (keyOrIndex: DragListKey, via: DragListRemoveVia) => void;
  move: (from: number, to: number) => void;
}

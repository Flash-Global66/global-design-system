import type {
  ComputedRef,
  CSSProperties,
  ExtractPropTypes,
  MaybeRefOrGetter,
  Ref,
  SetupContext,
  ShallowRef,
} from 'vue';
import type { useNamespace } from '@flash-global66/g-utils';
import type { dragGhostProps } from '../../components/DragGhost/constants/drag-ghost.constant';
import type { dropOverlayProps } from '../../components/DropOverlay/constants/drop-overlay.constant';
import type { sourcePanelProps } from '../../components/SourcePanel/constants/source-panel.constant';
import type { dragListEmits } from '../../DragList/constants/drag-list.constant';
import type {
  DragListAddVia,
  DragListDirection,
  DragListExpose,
  DragListItem,
  DragListKey,
  DragListOverlayAction,
  DragListPreviewEntry,
  DragListRemoveVia,
  DragListSource,
  DragListSourceGroup,
  DragListSourceSlotProps,
  DragListTargetSlotProps,
  DragListTexts,
  DragOrigin,
  DragPoint,
  DragSession,
  DragZone,
} from './drag-list.type';

/** Tipos internos del motor y los composables; no forman parte de la API pública. */

/** Namespace BEM que devuelve `useNamespace`. */
export type DragListNamespace = ReturnType<typeof useNamespace>;

/** Rect con origen y tamaño, la forma mínima que usan zonas, caché y drop. */
export type DragListRect = Pick<DOMRect, 'top' | 'left' | 'width' | 'height'>;

/** Rect descrito por sus cuatro bordes, para el auto-scroll. */
export type DragListEdgeRect = Pick<
  DOMRect,
  'top' | 'bottom' | 'left' | 'right'
>;

/** Eje de un arrastre: `'x'`/`'y'` o la dirección de la lista. */
export type DragListAxis = 'x' | 'y' | DragListDirection;

/** Visibilidad y acción del overlay de un panel. */
export interface DragListPanelOverlay {
  isVisible: boolean;
  action: DragListOverlayAction | null;
}

/** Estado de los overlays de ayuda de los dos paneles. */
export interface DragListOverlayState {
  source: DragListPanelOverlay;
  target: DragListPanelOverlay;
}

/** Función `emit` de `GDragList`. */
export type DragListEmit = SetupContext<typeof dragListEmits>['emit'];

export type DragGhostProps = ExtractPropTypes<typeof dragGhostProps>;
export type DropOverlayProps = ExtractPropTypes<typeof dropOverlayProps>;
export type SourcePanelProps = ExtractPropTypes<typeof sourcePanelProps>;

/** Parámetros de interpolación de los anuncios. */
export interface AnnounceParams {
  label?: string;
  position?: number;
  total?: number;
}

export interface UseLiveAnnouncerReturn {
  message: Ref<string>;
  announce: (key: keyof DragListTexts, params?: AnnounceParams) => void;
}

export interface PickScrollContainerOptions {
  containers: (HTMLElement | null | undefined)[];
  pointer: DragPoint;
  axis: DragListDirection;
}

export interface UseAutoScrollOptions {
  containers: MaybeRefOrGetter<(HTMLElement | null | undefined)[]>;
  pointer: MaybeRefOrGetter<DragPoint | null>;
  axis: MaybeRefOrGetter<DragListAxis>;
  isActive: MaybeRefOrGetter<boolean>;
}

export interface UseKeyboardReorderOptions {
  items: MaybeRefOrGetter<DragListItem[]>;
  direction: MaybeRefOrGetter<DragListDirection>;
  isOrdered: MaybeRefOrGetter<boolean>;
  canRemove: MaybeRefOrGetter<boolean>;
  isDisabled: MaybeRefOrGetter<boolean>;
  onMove: (from: number, to: number) => void;
  onRemove: (index: number) => void;
  onAnnounce: (key: keyof DragListTexts, params?: AnnounceParams) => void;
  getLabel?: (item: DragListItem) => string;
}

export interface UseKeyboardReorderReturn {
  grabbedIndex: Ref<number | null>;
  grabbedFromIndex: Ref<number | null>;
  focusIndex: ShallowRef<number | null>;
  handleKeydown: (event: KeyboardEvent, index: number) => void;
}

/** Arrastre con el puntero abajo que todavía no superó el umbral de activación. */
export interface PendingDrag {
  origin: DragOrigin;
  item: DragListItem;
  fromIndex: number;
  start: DragPoint;
  last: DragPoint;
  ghostOffset: DragPoint;
  cardSize: { width: number; height: number };
  pointerType: string;
}

/** Posición de scroll de un contenedor al activar el arrastre. */
export interface ScrollBase {
  el: HTMLElement;
  left: number;
  top: number;
}

/** Rects medidos al activar el arrastre. */
export interface RectCache {
  source: DragListRect;
  target: DragListRect;
  /** Rects de los ítems al activar; el scroll posterior se resta al leerlos. */
  items: DragListRect[];
  scrolls: ScrollBase[];
}

/** Datos de un soltado válido. */
export interface DragDropPayload {
  origin: DragOrigin;
  zone: Exclude<DragZone, null>;
  fromIndex: number;
  toIndex: number;
  item: DragListItem;
}

export interface UsePointerDragOptions {
  sourceEl: MaybeRefOrGetter<HTMLElement | null | undefined>;
  targetEl: MaybeRefOrGetter<HTMLElement | null | undefined>;
  getTargetItemEls: () => HTMLElement[];
  /** Elementos con scroll que pueden mover los ítems; por defecto los paneles. */
  getScrollContainers?: () => (HTMLElement | null | undefined)[];
  direction: MaybeRefOrGetter<DragListDirection>;
  canDropToRemove: MaybeRefOrGetter<boolean>;
  isDisabled: MaybeRefOrGetter<boolean>;
  onDrop: (payload: DragDropPayload) => void;
  onCancel: () => void;
  resolveItem: (origin: DragOrigin, index: number) => DragListItem | null;
}

export interface UsePointerDragReturn {
  session: ShallowRef<DragSession | null>;
}

export interface UseDragListFocusOptions {
  focusIndex: ShallowRef<number | null>;
  targetEl: Ref<HTMLElement | null>;
}

/** Retorno de `useDragList`: estado y handlers que consume el componente. */
export interface UseDragListReturn {
  ns: DragListNamespace;
  rootClass: ComputedRef<string[]>;
  getKey: (item: DragListItem) => DragListKey;
  exposed: DragListExpose;
  texts: ComputedRef<DragListTexts>;
  visibleSource: ComputedRef<DragListSource>;
  emptyReason: ComputedRef<'empty' | 'all-added' | null>;
  previewItems: ComputedRef<DragListPreviewEntry[]>;
  overlayState: ComputedRef<DragListOverlayState>;
  session: Readonly<Ref<DragSession | null>>;
  sourceEl: Ref<HTMLElement | null>;
  targetEl: Ref<HTMLElement | null>;
  announcement: Ref<string>;
  focusIndex: ShallowRef<number | null>;
  grabbedIndex: Ref<number | null>;
  handleTargetKeydown: (event: KeyboardEvent, index: number) => void;
  getSourceSlotProps: (item: DragListItem) => DragListSourceSlotProps;
  getTargetSlotProps: (index: number) => DragListTargetSlotProps;
  add: (
    item: DragListItem,
    index: number | undefined,
    via: DragListAddVia,
  ) => void;
  remove: (keyOrIndex: DragListKey, via: DragListRemoveVia) => void;
  move: (from: number, to: number) => void;
}

export interface UseDropOverlayReturn {
  ns: DragListNamespace;
  overlayClass: ComputedRef<string[]>;
  iconName: ComputedRef<'regular plus' | 'regular trash'>;
}

export interface UseDragGhostProps {
  session: DragSession | null;
  width?: number;
}

export interface UseDragGhostReturn {
  isVisible: ComputedRef<boolean>;
  style: ComputedRef<CSSProperties>;
  ns: DragListNamespace;
}

export interface UseFlowConnectorProps {
  direction: DragListDirection;
}

export interface UseFlowConnectorReturn {
  ns: DragListNamespace;
  connectorClass: ComputedRef<(string | false)[]>;
}

export interface UseFlowNodeReturn {
  ns: DragListNamespace;
}

/** Entrada de un bloque del panel de origen. */
export interface SourcePanelEntry {
  item: DragListItem;
  key: DragListKey;
  index: number;
}

/** Bloque de render del panel de origen: un grupo, o el bloque plano. */
export interface SourcePanelBlock {
  key: DragListKey;
  group: DragListSourceGroup | null;
  entries: SourcePanelEntry[];
}

export interface UseSourcePanelReturn {
  ns: DragListNamespace;
  rootRef: Ref<HTMLElement | null>;
  rootClass: ComputedRef<string[]>;
  isGrouped: ComputedRef<boolean>;
  canAdd: ComputedRef<boolean>;
  blocks: ComputedRef<SourcePanelBlock[]>;
  onAdd: (item: DragListItem) => void;
}

export interface TargetPanelState {
  entries: DragListPreviewEntry[];
  getKey?: (item: DragListItem) => DragListKey;
  isOrdered: boolean;
  direction: DragListDirection;
  startNode?: string;
  endNode?: string;
  hasStartSlot: boolean;
  hasEndSlot: boolean;
  isActiveZone: boolean;
  isDisabled: boolean;
}

/** Reemite el `keydown` de una tarjeta hacia el raíz. */
export type TargetPanelKeydownEmit = (
  event: 'keydown',
  keyboardEvent: KeyboardEvent,
  index: number,
) => void;

export interface UseTargetPanelReturn {
  ns: DragListNamespace;
  isEmpty: ComputedRef<boolean>;
  listTag: ComputedRef<'ol' | 'ul'>;
  hasStartNode: ComputedRef<boolean>;
  hasEndNode: ComputedRef<boolean>;
  hasFinalConnector: ComputedRef<boolean>;
  lastIndex: ComputedRef<number>;
  hasConnectorBefore: (index: number) => boolean;
  getEntryKey: (entry: DragListPreviewEntry) => DragListKey;
  handleItemKeydown: (event: KeyboardEvent, index: number) => void;
  panelClass: ComputedRef<(string | false)[]>;
}

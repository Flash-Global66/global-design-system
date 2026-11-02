import { buildProps, definePropType } from '@flash-global66/g-utils';
import type {
  DragListDirection,
  DragListItem,
  DragListKey,
  DragListPreviewEntry,
} from '../../../shared/types/drag-list.type';

export const PLACEHOLDER_KEY = '__drag-list-placeholder__';

export const targetPanelProps = buildProps({
  /** @description lista ya previsualizada del destino */
  entries: {
    type: definePropType<DragListPreviewEntry[]>(Array),
    default: () => [],
  },
  /** @description obtiene la key de un ítem */
  getKey: {
    type: definePropType<(item: DragListItem) => DragListKey>(Function),
    required: true,
  },
  /** @description dibuja el destino como flujo ordenado */
  isOrdered: { type: Boolean, default: false },
  /** @description eje del destino */
  direction: {
    type: definePropType<DragListDirection>(String),
    default: 'vertical',
  },
  /** @description texto del nodo de inicio */
  startNode: { type: String },
  /** @description texto del nodo de fin */
  endNode: { type: String },
  /** @description el raíz provee el slot de inicio */
  hasStartSlot: { type: Boolean, default: false },
  /** @description el raíz provee el slot de fin */
  hasEndSlot: { type: Boolean, default: false },
  /** @description el arrastre está sobre este panel */
  isActiveZone: { type: Boolean, default: false },
  /** @description bloquea la interacción */
  isDisabled: { type: Boolean, default: false },
  /** @description etiqueta accesible de la lista */
  label: { type: String },
});

export const targetPanelEmits = {
  remove: (index: number) => typeof index === 'number',
  'move-up': (index: number) => typeof index === 'number',
  'move-down': (index: number) => typeof index === 'number',
  keydown: (event: KeyboardEvent, index: number) =>
    !!event && typeof index === 'number',
};

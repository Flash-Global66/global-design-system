import { buildProps, definePropType } from '@flash-global66/g-utils';
import type {
  DragListItem,
  DragListKey,
  DragListSource,
} from '../../../shared/types/drag-list.type';

export const sourcePanelProps = buildProps({
  /** @description fuente visible, ya filtrada, plana o agrupada */
  items: {
    type: definePropType<DragListSource>(Array),
    default: () => [],
  },
  /** @description resuelve la key de cada elemento */
  itemKey: {
    type: definePropType<(item: DragListItem) => DragListKey>(Function),
    required: true,
  },
  /** @description motivo por el que no hay elementos que mostrar */
  emptyReason: {
    type: definePropType<'empty' | 'all-added' | null>([String, null]),
    default: null,
  },
  /** @description el arrastre está sobre este panel */
  isActiveZone: { type: Boolean, default: false },
  /** @description deshabilita el agregado */
  isDisabled: { type: Boolean, default: false },
  /** @description aria-label de la lista */
  label: { type: String, default: '' },
});

export const sourcePanelEmits = {
  add: (item: DragListItem): boolean => !!item,
};

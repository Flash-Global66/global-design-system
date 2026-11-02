import { buildProps, definePropType } from '@flash-global66/g-utils';
import type {
  DragListAccessor,
  DragListAddVia,
  DragListDirection,
  DragListItem,
  DragListKey,
  DragListRemoveVia,
  DragListSource,
  DragListTexts,
} from '../../shared/types/drag-list.type';

export const dragListProps = buildProps({
  /** @description elementos del destino (v-model) */
  modelValue: {
    type: definePropType<DragListItem[]>(Array),
    default: () => [],
  },
  /** @description elementos del origen, planos o agrupados */
  source: {
    type: definePropType<DragListSource>(Array),
    default: () => [],
  },
  /** @description identificador único de cada elemento */
  itemKey: {
    type: definePropType<DragListAccessor<DragListKey>>([String, Function]),
    required: true,
  },
  /** @description texto legible del elemento (anuncios a11y) */
  itemLabel: {
    type: definePropType<DragListAccessor<string>>([String, Function]),
  },
  /** @description el orden del destino es el orden del flujo */
  ordered: { type: Boolean, default: false },
  /** @description permite agregar el mismo elemento varias veces */
  repeatable: { type: Boolean, default: false },
  /** @description clona el elemento al insertarlo (repeatable) */
  cloneItem: {
    type: definePropType<(item: DragListItem) => DragListItem>(Function),
  },
  /** @description soltar en el origen quita del destino */
  dragToRemove: { type: Boolean, default: true },
  /** @description Delete/Backspace quita la tarjeta enfocada */
  keyboardRemove: { type: Boolean, default: false },
  /** @description eje del destino */
  direction: {
    type: definePropType<DragListDirection>(String),
    default: 'vertical',
  },
  /** @description bloquea toda interacción */
  disabled: { type: Boolean, default: false },
  /** @description texto de la pill inicial del flujo */
  startNode: { type: String },
  /** @description texto de la pill final del flujo */
  endNode: { type: String },
  /** @description textos sobrescribibles */
  texts: {
    type: definePropType<Partial<DragListTexts>>(Object),
  },
});

export const dragListEmits = {
  'update:modelValue': (items: DragListItem[]) => Array.isArray(items),
  add: (item: DragListItem, index: number, via: DragListAddVia) =>
    !!item && typeof index === 'number' && !!via,
  remove: (item: DragListItem, index: number, via: DragListRemoveVia) =>
    !!item && typeof index === 'number' && !!via,
  reorder: (item: DragListItem, from: number, to: number) =>
    !!item && typeof from === 'number' && typeof to === 'number',
};

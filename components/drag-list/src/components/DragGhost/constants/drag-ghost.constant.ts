import { buildProps, definePropType } from '@flash-global66/g-utils';
import type { ExtractPropTypes } from 'vue';
import type { DragSession } from '../../../shared/types/drag-list.type';

export const dragGhostProps = buildProps({
  /** @description sesión de arrastre activa o null */
  session: {
    type: definePropType<DragSession | null>([Object, null]),
    default: null,
  },
  /** @description ancho en px para igualar la tarjeta original */
  width: { type: Number },
});

export type DragGhostProps = ExtractPropTypes<typeof dragGhostProps>;

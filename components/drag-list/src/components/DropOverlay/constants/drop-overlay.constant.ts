import { buildProps, definePropType } from '@flash-global66/g-utils';
import type { DragListOverlayAction } from '../../../shared/types/drag-list.type';

export const dropOverlayProps = buildProps({
  /** @description acción que anuncia el overlay */
  action: {
    type: definePropType<DragListOverlayAction>(String),
    default: 'add',
  },
  /** @description muestra el overlay */
  isVisible: { type: Boolean, default: false },
  /** @description texto visible */
  text: { type: String, default: '' },
});

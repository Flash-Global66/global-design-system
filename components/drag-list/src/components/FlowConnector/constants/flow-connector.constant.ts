import { buildProps, definePropType } from '@flash-global66/g-utils';
import type { DragListDirection } from '../../../shared/types/drag-list.type';

export const flowConnectorProps = buildProps({
  /** @description eje del flujo; en horizontal la flecha gira */
  direction: {
    type: definePropType<DragListDirection>(String),
    default: 'vertical',
  },
});

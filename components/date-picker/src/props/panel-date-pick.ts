import { buildProps, definePropType } from '@flash-global66/g-utils';
import { panelSharedProps } from './shared';

import type { ExtractPropTypes } from 'vue';
import type { Dayjs } from 'dayjs';

export const panelDatePickProps = buildProps({
  ...panelSharedProps,
  parsedValue: {
    type: definePropType<Dayjs | Dayjs[]>([Object, Array]),
  },
  visible: {
    type: Boolean,
  },
  format: {
    type: String,
    default: '',
  },
} as const);

export type PanelDatePickProps = ExtractPropTypes<typeof panelDatePickProps>;

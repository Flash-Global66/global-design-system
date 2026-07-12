import { buildProps } from '@flash-global66/g-utils';
import { panelRangeSharedProps } from './shared';

import type { ExtractPropTypes } from 'vue';

export const panelMonthRangeProps = buildProps({
  ...panelRangeSharedProps,
} as const);

export const panelMonthRangeEmits = [
  'pick',
  'set-picker-option',
  'calendar-change',
];

export type PanelMonthRangeProps = ExtractPropTypes<
  typeof panelMonthRangeProps
>;

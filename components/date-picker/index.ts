import { withInstall } from '@flash-global66/g-utils';
import DatePicker from './src/date-picker';

import type { SFCWithInstall } from '@flash-global66/g-utils';

export const GDatePicker: SFCWithInstall<typeof DatePicker> =
  withInstall(DatePicker);

export default GDatePicker;
export * from './src/constants';
export * from './src/props/date-picker';
export type { DatePickerInstance } from './src/instance';

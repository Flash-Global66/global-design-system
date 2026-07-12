import { withInstall, SFCWithInstall } from '@flash-global66/g-utils';
import TimePicker from './src/time-picker';
import CommonPicker from './src/common/picker.vue';
import TimePickPanel from './src/time-picker-com/panel-time-pick.vue';

export * from './src/utils';
export * from './src/constants';
export * from './src/common/props';

export const GTimePicker: SFCWithInstall<typeof TimePicker> =
  withInstall(TimePicker);

export { CommonPicker, TimePickPanel };
export default GTimePicker;

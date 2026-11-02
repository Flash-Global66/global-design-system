import type { Dayjs } from 'dayjs';

export interface IsShortcutActiveParams {
  shortcutValue: [Date, Date] | undefined;
  minDate: Dayjs | null | undefined;
  maxDate: Dayjs | null | undefined;
}

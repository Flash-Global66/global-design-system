import { withInstall } from "element-plus/es/utils/index";
import DatePicker from "./src/date-picker";

import type { SFCWithInstall } from "element-plus/es/utils/index";

export const GDatePicker: SFCWithInstall<typeof DatePicker> =
  withInstall(DatePicker);

export default GDatePicker;
export * from "./src/constants";
export * from "./src/props/date-picker";
export type { DatePickerInstance } from "./src/instance";

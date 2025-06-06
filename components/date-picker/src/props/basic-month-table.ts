import { buildProps } from "element-plus/es/utils/index.mjs";
import { datePickerSharedProps, selectionModeWithDefault } from "./shared";

import type { ExtractPropTypes } from "vue";

export const basicMonthTableProps = buildProps({
  ...datePickerSharedProps,
  selectionMode: selectionModeWithDefault("month"),
});

export type BasicMonthTableProps = ExtractPropTypes<
  typeof basicMonthTableProps
>;

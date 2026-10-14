export interface ShouldOpenPickerFromTriggerParams {
  targetTagName: string | undefined;
  isFocused: boolean;
  openOnInputClick: boolean;
}

export interface ShouldFocusPanelOnTabParams {
  openOnInputClick: boolean;
  pickerVisible: boolean;
  shiftKey: boolean;
  hasPanelFocus: boolean;
  isLastInput: boolean;
}

export interface GetRangeInputModeParams {
  openOnInputClick: boolean;
  isCoarsePointer: boolean;
}

export interface GetRangePanelMaxHeightParams {
  referenceBottom: number;
  viewportHeight: number;
}

export interface GetRangeInputCharsParams {
  format: string | undefined;
  startPlaceholder: string | undefined;
  endPlaceholder: string | undefined;
}

import {
  MIN_RANGE_INPUT_CHARS,
  RANGE_PANEL_MIN_HEIGHT,
  RANGE_PANEL_VIEWPORT_MARGIN,
} from '../constants/rangePicker.constant';

import type {
  GetRangeInputCharsParams,
  GetRangeInputModeParams,
  GetRangePanelMaxHeightParams,
  ShouldFocusPanelOnTabParams,
  ShouldOpenPickerFromTriggerParams,
} from '../types/rangePicker.type';

export function shouldOpenPickerFromTrigger({
  targetTagName,
  isFocused,
  openOnInputClick,
}: ShouldOpenPickerFromTriggerParams): boolean {
  return targetTagName !== 'INPUT' || isFocused || openOnInputClick;
}

export function shouldFocusPanelOnTab({
  openOnInputClick,
  pickerVisible,
  shiftKey,
  hasPanelFocus,
  isLastInput,
}: ShouldFocusPanelOnTabParams): boolean {
  return (
    openOnInputClick &&
    pickerVisible &&
    !shiftKey &&
    hasPanelFocus &&
    isLastInput
  );
}

export function getRangeInputMode({
  openOnInputClick,
  isCoarsePointer,
}: GetRangeInputModeParams): 'none' | undefined {
  return openOnInputClick && isCoarsePointer ? 'none' : undefined;
}

export function getRangePanelMaxHeight({
  referenceBottom,
  viewportHeight,
}: GetRangePanelMaxHeightParams): number {
  return Math.max(
    Math.floor(viewportHeight - referenceBottom - RANGE_PANEL_VIEWPORT_MARGIN),
    RANGE_PANEL_MIN_HEIGHT,
  );
}

export function getRangeInputChars({
  format,
  startPlaceholder,
  endPlaceholder,
}: GetRangeInputCharsParams): number {
  return Math.max(
    format?.length ?? 0,
    startPlaceholder?.trim().length ?? 0,
    endPlaceholder?.trim().length ?? 0,
    MIN_RANGE_INPUT_CHARS,
  );
}

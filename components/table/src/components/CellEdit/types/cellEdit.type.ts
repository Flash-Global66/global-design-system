import type { ComputedRef, Ref, WritableComputedRef } from 'vue';
import type { NamespaceHelpers } from '@flash-global66/g-utils';

export interface GCellEditProps {
  modelValue?: boolean;
  row: Record<string, unknown>;
  column?: Record<string, unknown>;
  index?: number;
  prop?: string;
  expandColspan?: number;
  expandDirection?: 'left' | 'right';
  expandedWidth?: number;
  leftOffset?: number;
  outsideCloseScope?: 'cell' | 'amountRowPeer';
}

export type CellEditEmit = {
  (e: 'update:modelValue', value: boolean): void;
  (e: 'toggle', value: boolean): void;
  (e: 'close'): void;
  (
    e: 'cell-edit-open',
    row: Record<string, unknown>,
    column: Record<string, unknown>,
  ): void;
  (
    e: 'cell-edit-close',
    row: Record<string, unknown>,
    column: Record<string, unknown>,
  ): void;
};

export type UseCellEditReturn = {
  ns: NamespaceHelpers;
  isEditing: WritableComputedRef<boolean>;
  wrapperClass: ComputedRef<string>;
  editWrapperClass: ComputedRef<string>;
  wrapperStyle: ComputedRef<Record<string, string>>;
  toggleEdit: (e?: Event) => void;
  closeEdit: () => void;
  handleClick: (e: Event) => void;
  handleKeydown: (e: KeyboardEvent) => void;
  cellRef: Ref<HTMLElement | undefined>;
  editWrapperRef: Ref<HTMLElement | undefined>;
};

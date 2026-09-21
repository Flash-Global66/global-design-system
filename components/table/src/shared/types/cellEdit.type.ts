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

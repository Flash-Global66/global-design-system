export interface InlineLinks {
  label: string;
  action: () => void;
  ariaLabel?: string;
}

export type InlineEnum = 'success' | 'warning' | 'error' | 'info' | 'card';

export type InlineSize = 'md' | 'sm';

export type InlineIconAlign = 'top' | 'medium' | 'bottom';
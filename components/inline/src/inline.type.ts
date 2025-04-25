export interface InlineLinks {
  label: string;
  action: () => void;
  ariaLabel?: string;
}

export type InlineEnum = 'success' | 'warning' | 'error' | 'info';

export type InlineSize = 'md' | 'sm';
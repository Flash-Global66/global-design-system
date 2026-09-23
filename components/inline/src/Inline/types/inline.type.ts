import type { ExtractPropTypes } from 'vue';
import type Inline from '../index.vue';
import type { inlineEmits, inlineProps } from '../constants/inline.constant';

export interface InlineLinks {
  label: string;
  action: () => void;
  ariaLabel?: string;
}

export type InlineEnum = 'success' | 'warning' | 'error' | 'info' | 'card';

export type InlineSize = 'md' | 'sm';

export type InlineIconAlign = 'top' | 'medium' | 'bottom';

export type InlineEmits = typeof inlineEmits;

export type InlineProps = ExtractPropTypes<typeof inlineProps>;

export type InlineInstance = InstanceType<typeof Inline>;

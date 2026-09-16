import type { IOptionProps, ISelectProps } from '../defaults';
import type { InjectionKey, Ref } from 'vue';
import type { Option } from './select.types';
import type { TooltipInstance } from '@flash-global66/g-tooltip';

export interface SelectV2Context {
  props: ISelectProps;
  expanded: Ref<boolean>;
  tooltipRef: Ref<TooltipInstance | undefined>;
  onSelect: (option: Option) => void;
  onHover: (idx?: number) => void;
  onKeyboardNavigate: (direction: 'forward' | 'backward') => void;
  onKeyboardSelect: () => void;
}

export const selectV2InjectionKey: InjectionKey<SelectV2Context> = Symbol.for(
  'ElSelectV2Injection',
);
export type { ISelectProps, IOptionProps };

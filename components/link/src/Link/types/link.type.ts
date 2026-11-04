import type { ComputedRef, ExtractPropTypes } from 'vue';
import type { NamespaceHelpers } from '@flash-global66/g-utils';
import type { linkEmits, linkProps } from '../constants/link.constant';
import type Link from '../index.vue';

export type LinkProps = ExtractPropTypes<typeof linkProps>;

export type LinkEmits = typeof linkEmits;

export type LinkInstance = InstanceType<typeof Link>;

export interface UseLinkReturn {
  ns: NamespaceHelpers;
  linkKls: ComputedRef<string[]>;
  role: ComputedRef<'button' | undefined>;
  tabindex: ComputedRef<0 | undefined>;
  ariaDisabled: ComputedRef<'true' | undefined>;
  handleKeydown: (event: KeyboardEvent) => void;
  handleClick: (event: MouseEvent) => void;
}

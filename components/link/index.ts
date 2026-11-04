/**
 * Link Component
 * Derived from Element Plus v2.9.5
 * https://github.com/element-plus/element-plus/tree/2.9.5/packages/components/link
 */
import Link from './src/Link/index.vue';
import { withInstall } from '@flash-global66/g-utils';
import type { SFCWithInstall } from '@flash-global66/g-utils';

export const GLink: SFCWithInstall<typeof Link> = withInstall(Link);

export { linkProps, linkEmits } from './src/Link/constants/link.constant';
export type {
  LinkProps,
  LinkEmits,
  LinkInstance,
} from './src/Link/types/link.type';

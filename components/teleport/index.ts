/**
 * Teleport component
 * Derived from Element Plus v2.9.5
 * https://github.com/element-plus/element-plus/tree/2.9.5/packages/components/teleport
 */

import { withInstall } from '@flash-global66/g-utils';
import Teleport from './teleport.vue';
import type { SFCWithInstall } from '@flash-global66/g-utils';

export const GTeleport: SFCWithInstall<typeof Teleport> = withInstall(Teleport);

export default GTeleport;

export * from './teleport';

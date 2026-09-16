import { withInstall } from '@flash-global66/g-utils';
import type { SFCWithInstall } from '@flash-global66/g-utils';

import Tooltip from './src/tooltip.vue';

export const GTooltip: SFCWithInstall<typeof Tooltip> = withInstall(Tooltip);
export type TooltipInstance = InstanceType<typeof Tooltip>;

export * from './src/tooltip';
export * from './src/trigger';
export * from './src/content';
export * from './src/constants';

export default GTooltip;

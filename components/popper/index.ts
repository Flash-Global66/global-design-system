import { withInstall } from '@flash-global66/g-utils';
import Popper from './src/popper.vue';

import GPopperArrow from './src/arrow.vue';
import GPopperTrigger from './src/trigger.vue';
import GPopperContent from './src/content.vue';
import type { SFCWithInstall } from '@flash-global66/g-utils';

export { GPopperArrow, GPopperTrigger, GPopperContent };

export const GPopper: SFCWithInstall<typeof Popper> = withInstall(Popper);
export default GPopper;

export * from './src/popper';
export * from './src/trigger';
export * from './src/content';
export * from './src/arrow';
export * from './src/constants';

export type { Placement, Options } from '@popperjs/core';

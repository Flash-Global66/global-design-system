import { withInstall, type SFCWithInstall } from '@flash-global66/g-utils';
import CollapseTransition from './src/collapse-transition.vue';

export const GCollapseTransition: SFCWithInstall<typeof CollapseTransition> =
  withInstall(CollapseTransition);

export default GCollapseTransition;

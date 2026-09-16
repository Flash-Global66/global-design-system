import { withInstall, withNoopInstall } from '@flash-global66/g-utils';

import Collapse from './src/collapse.vue';
import CollapseItem from './src/collapse-item.vue';
import type { SFCWithInstall } from '@flash-global66/g-utils';

export const GCollapse: SFCWithInstall<typeof Collapse> & {
  CollapseItem: typeof CollapseItem;
} = withInstall(Collapse, {
  CollapseItem,
});
export default GCollapse;
export const GCollapseItem: SFCWithInstall<typeof CollapseItem> =
  withNoopInstall(CollapseItem);

export * from './src/collapse';
export * from './src/collapse-item';
export * from './src/constants';
export type { CollapseInstance, CollapseItemInstance } from './src/instance';

import DragList from './src/DragList/index.vue';
import { withInstall } from '@flash-global66/g-utils';
import type { SFCWithInstall } from '@flash-global66/g-utils';
export const GDragList: SFCWithInstall<typeof DragList> & {
  DragList: typeof DragList;
} = withInstall(DragList, {
  DragList,
});
export default GDragList;

export * from './src/shared/types/drag-list.type';
export * from './src/shared/constants/drag.constant';
export * from './src/shared/constants/texts.constant';
export * from './src/DragList/constants/drag-list.constant';

export type DragListInstance = InstanceType<typeof DragList>;

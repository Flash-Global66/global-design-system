import { withInstall, type SFCWithInstall } from '@flash-global66/g-utils';
import Tag from './src/tag.vue';

export const GTag: SFCWithInstall<typeof Tag> = withInstall(Tag);
export type TagInstance = InstanceType<typeof Tag>;

export * from './src/tag';

export default GTag;

import { withInstall } from '@flash-global66/g-utils';
import type { SFCWithInstall } from '@flash-global66/g-utils';
import InputTag from './src/input-tag.vue';

export const GInputTag: SFCWithInstall<typeof InputTag> = withInstall(InputTag);
export type { InputTagInstance } from './src/instance';
export * from './src/input-tag';

export default GInputTag;

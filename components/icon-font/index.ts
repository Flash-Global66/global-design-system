import IconFont from './src/Icon.vue';
import { withInstall, type SFCWithInstall } from '@flash-global66/g-utils';
export const GIconFont: SFCWithInstall<typeof IconFont> & {
  IconFont: typeof IconFont;
} = withInstall(IconFont, {
  IconFont,
});

export default GIconFont;

export * from './src/icon-sets';
export type * from './src/types';

export type InputInstance = InstanceType<typeof IconFont>;

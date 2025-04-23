import IconFont from './src/Icon.vue'
import {
  withInstall,
  withNoopInstall,
  SFCWithInstall,
} from "element-plus/es/utils/index.mjs";
export const GIconFont: SFCWithInstall<typeof IconFont> & {
  IconFont: typeof IconFont;
} = withInstall(IconFont, {
  IconFont,
});

export default GIconFont;

export * from './src/icon-sets';
export type * from './src/types';

export type InputInstance = InstanceType<typeof IconFont>;

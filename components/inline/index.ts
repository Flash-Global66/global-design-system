import Inline from './src/Inline/index.vue';
import { withInstall } from '@flash-global66/g-utils';
import type { SFCWithInstall } from '@flash-global66/g-utils';
export const GInline: SFCWithInstall<typeof Inline> & {
  Inline: typeof Inline;
} = withInstall(Inline, {
  Inline,
});
export default GInline;

export * from './src/Inline/types/inline.type';
export * from './src/Inline/constants/inline.constant';

export type InlineInstance = InstanceType<typeof Inline>;

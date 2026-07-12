import Inline from './src/inline.vue';
import { withInstall } from '@flash-global66/g-utils';
import type { SFCWithInstall } from '@flash-global66/g-utils';
export const GInline: SFCWithInstall<typeof Inline> & {
  Inline: typeof Inline;
} = withInstall(Inline, {
  Inline,
});
export default GInline;

export * from './src/inline.type';
export * from './src/inline';

export type InlineInstance = InstanceType<typeof Inline>;

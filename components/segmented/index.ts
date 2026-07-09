import Segmented from './src/Segmented.vue';
import { withInstall, SFCWithInstall } from '@flash-global66/g-utils';

export const GSegmented: SFCWithInstall<typeof Segmented> & {
  Segmented: typeof Segmented;
} = withInstall(Segmented, {
  Segmented,
});
export default GSegmented;

export * from './src/segmented.type';

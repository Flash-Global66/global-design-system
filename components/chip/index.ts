import Chip from './src/chip.vue';
import { withInstall, type SFCWithInstall } from '@flash-global66/g-utils';

export const GChip: SFCWithInstall<typeof Chip> & {
  Chip: typeof Chip;
} = withInstall(Chip, {
  Chip,
});

export default GChip;

export * from './src/chip';
export * from './src/constants';
export * from './src/chip.types';
export type ChipInstance = InstanceType<typeof Chip>;

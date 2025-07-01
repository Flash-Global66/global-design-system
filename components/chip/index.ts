import Chip from './src/chip.vue'
import {
  withInstall,
  SFCWithInstall,
} from 'element-plus/es/utils/index.mjs'

export const GChip: SFCWithInstall<typeof Chip> & {
  Chip: typeof Chip;
} = withInstall(Chip, {
  Chip,
})

export default GChip

export * from './src/chip'
export * from './src/constants'
export * from './src/chip.types'
export type ChipInstance = InstanceType<typeof Chip>


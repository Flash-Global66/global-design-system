import { withInstall } from 'element-plus/es/utils/index.mjs'
import InputNumber from './src/input-number.vue'

import type { SFCWithInstall } from 'element-plus/es/utils/index.mjs'

export const GInputNumber: SFCWithInstall<typeof InputNumber> =
  withInstall(InputNumber)

export default GInputNumber
export * from './src/input-number'

export type InputNumberInstance = InstanceType<typeof InputNumber>

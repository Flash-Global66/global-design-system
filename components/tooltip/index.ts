import { withInstall } from 'element-plus/es/utils/index'
import Tooltip from './src/tooltip.vue'
import type { SFCWithInstall } from 'element-plus/es/utils/index'

export const GTooltip: SFCWithInstall<typeof Tooltip> = withInstall(Tooltip)
export type TooltipInstance = InstanceType<typeof Tooltip>

export * from './src/tooltip'
export * from './src/trigger'
export * from './src/content'
export * from './src/constants'

export default GTooltip
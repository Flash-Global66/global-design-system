import { withInstall } from 'element-plus/es/utils/index'
import CollapseTransition from './src/collapse-transition.vue'
import type { SFCWithInstall } from 'element-plus/es/utils/index'

export const GCollapseTransition: SFCWithInstall<typeof CollapseTransition> =
  withInstall(CollapseTransition)

export default GCollapseTransition

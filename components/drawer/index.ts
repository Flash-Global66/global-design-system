import { withInstall } from 'element-plus/es/utils/index.mjs'
import type { SFCWithInstall } from 'element-plus/es/utils/index.mjs'

import Drawer from './src/drawer.vue'

export const GDrawer: SFCWithInstall<typeof Drawer> = withInstall(Drawer)
export type DrawerInstance = InstanceType<typeof Drawer>

export default GDrawer

export * from './src/drawer'

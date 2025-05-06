import { withInstall, SFCWithInstall } from 'element-plus/es/utils/index.mjs'
import Progress from './src/progress.vue'

export const GProgress: SFCWithInstall<typeof Progress> = withInstall(Progress)
export default GProgress

export * from './src/progress'
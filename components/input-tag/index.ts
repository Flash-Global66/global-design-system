import { withInstall, SFCWithInstall } from 'element-plus/es/utils/index.mjs'
import InputTag from './src/input-tag.vue'

export const GInputTag: SFCWithInstall<typeof InputTag> = withInstall(InputTag)
export type { InputTagInstance } from './src/instance'
export * from './src/input-tag'

export default GInputTag

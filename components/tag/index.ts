import { withInstall, SFCWithInstall } from 'element-plus/es/utils/index'
import Tag from './src/tag.vue'

export const GTag: SFCWithInstall<typeof Tag> = withInstall(Tag)
export type TagInstance = InstanceType<typeof Tag>

export * from './src/tag'

export default GTag
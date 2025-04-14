import { withInstall, SFCWithInstall } from 'element-plus/es/utils/index.mjs'
import SearchInput from './src/search-input.vue'

export const GSearchInput: SFCWithInstall<typeof SearchInput> = withInstall(SearchInput)
export default GSearchInput

export * from './src/search-input'
export type SearchInputInstance = InstanceType<typeof SearchInput>

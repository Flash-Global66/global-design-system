import SearchInput from './src/search-input.vue'
import {
  withInstall,
  withNoopInstall,
  SFCWithInstall,
} from 'element-plus/es/utils/index.mjs'

export const GSearchInput: SFCWithInstall<typeof SearchInput> & {
  SearchInput: typeof SearchInput;
} = withInstall(SearchInput, {
  SearchInput,
});
export default GSearchInput

export * from './src/search-input'
export type SearchInputInstance = InstanceType<typeof SearchInput>

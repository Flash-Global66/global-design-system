import SearchInput from './src/search-input.vue';
import { withInstall, type SFCWithInstall } from '@flash-global66/g-utils';

export const GSearchInput: SFCWithInstall<typeof SearchInput> & {
  SearchInput: typeof SearchInput;
} = withInstall(SearchInput, {
  SearchInput,
});
export default GSearchInput;

export * from './src/search-input';
export type SearchInputInstance = InstanceType<typeof SearchInput>;

import { withInstall, SFCWithInstall } from '@flash-global66/g-utils';

import Pagination from './src/pagination';

export const GPagination: SFCWithInstall<typeof Pagination> =
  withInstall(Pagination);
export default GPagination;

export * from './src/pagination';
export * from './src/constants';
export * from './src/composable/usePagination';

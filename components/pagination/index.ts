import { withInstall, SFCWithInstall } from 'element-plus/es/utils/index.mjs'

import Pagination from './src/pagination'

export const GPagination: SFCWithInstall<typeof Pagination> =
  withInstall(Pagination)
export default GPagination

export * from './src/pagination'
export * from './src/constants'
export * from './src/composable/usePagination'

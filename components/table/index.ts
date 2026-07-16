import { withInstall, withNoopInstall } from '@flash-global66/g-utils'
import Table from './src/Table/index.vue'
import TableColumn from './src/components/TableColumn'
import type { SFCWithInstall } from '@flash-global66/g-utils'

export const GTable: SFCWithInstall<typeof Table> & {
  TableColumn: typeof TableColumn
} = withInstall(Table, {
  TableColumn,
})
export default GTable
export const GTableColumn: SFCWithInstall<typeof TableColumn> =
  withNoopInstall(TableColumn)

export type TableInstance = InstanceType<typeof Table> & unknown

export type TableColumnInstance = InstanceType<typeof TableColumn> & unknown

export type {
  SummaryMethod,
  Table,
  TableProps,
  TableRefs,
  ColumnCls,
  ColumnStyle,
  CellCls,
  CellStyle,
  TreeNode,
  RenderRowData,
  Sort,
  Filter,
  TableColumnCtx,
  TableTooltipData,
} from './src/Table/defaults'

export { useTableCellSelect } from './src/shared/composables/useTableCellSelect'
export type {
  TableCellSelectOption,
  TableCellSelectGetOptions,
  TableCellSelectCellOptions,
  UseTableCellSelectOptions,
} from './src/shared/composables/useTableCellSelect'

export { useTableCellInput } from './src/shared/composables/useTableCellInput'
export type {
  TableCellInputCellOptions,
  UseTableCellInputOptions,
} from './src/shared/composables/useTableCellInput'

export { useTableCellValidation } from './src/shared/composables/useTableCellValidation'
export type {
  TableCellRule,
  TableCellValidateState,
  ValidationResult,
  CellValidationState,
  UseTableCellValidationOptions,
  TableCellValidationApi,
} from './src/shared/composables/useTableCellValidation'

import GCellEdit from './src/components/CellEdit/index.vue'
export { GCellEdit }

export { clearExpansionCacheForTable } from './src/components/TableColumn/cell-renderers/cell-expansion-utils'

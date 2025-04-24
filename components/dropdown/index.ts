import { withInstall, withNoopInstall } from 'element-plus/es/utils/index'

import Dropdown from './src/dropdown.vue'
import DropdownItem from './src/dropdown-item.vue'
import DropdownMenu from './src/dropdown-menu.vue'
import type { SFCWithInstall } from 'element-plus/es/utils/index'

export const GDropdown: SFCWithInstall<typeof Dropdown> & {
  DropdownItem: typeof DropdownItem
  DropdownMenu: typeof DropdownMenu
} = withInstall(Dropdown, {
  DropdownItem,
  DropdownMenu
})
export default GDropdown

export type GDropdownInstance = InstanceType<typeof Dropdown>

export const GDropdownItem: SFCWithInstall<typeof DropdownItem> = withNoopInstall(DropdownItem)
export const GDropdownMenu: SFCWithInstall<typeof DropdownMenu> = withNoopInstall(DropdownMenu)
export * from './src/dropdown'
export * from './src/instance'
export * from './src/tokens'
export * from './src/dropdown.types'

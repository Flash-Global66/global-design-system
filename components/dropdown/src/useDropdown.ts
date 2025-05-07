import { inject } from 'vue'
import type { IGDropdownInstance } from './dropdown'

export const useDropdown = () => {
  const gDropdown = inject<IGDropdownInstance>('gDropdown', {})

  return {
    gDropdown
  }
}

import type { ExtractPropTypes } from 'vue'
import { searchInputProps, searchInputEmits } from './search-input'

export type SearchInputProps = ExtractPropTypes<typeof searchInputProps>
export type SearchInputEmits = typeof searchInputEmits

export type EmitFn = {
  (event: 'update:modelValue', value: string): void
  (event: 'search', value: string): void
  (event: 'clear'): void
}

export interface SearchInputInstance {
  focus: () => void
  blur: () => void
  clear: () => void
}
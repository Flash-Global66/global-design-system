import { buildProps } from 'element-plus/es/utils/index.mjs'
import type { ExtractPropTypes } from 'vue'

export const searchInputProps = buildProps({
  /**
   * @description binding value
   */
  modelValue: {
    type: String,
    default: '',
  },
  /**
   * @description placeholder text for the input
   */
  placeholder: {
    type: String,
    default: '',
  },
  /**
   * @description label text for the input
   */
  label: {
    type: String,
    default: '',
  },
  /**
   * @description help text displayed below the input
   */
  helpText: {
    type: String,
    default: '',
  },
  /**
   * @description error message to display
   */
  messageError: {
    type: String,
    default: '',
  },
  /**
   * @description whether the component is disabled
   */
  disabled: Boolean,
  /**
   * @description whether the component is in loading state while fetching initial data
   */
  initialLoading: Boolean,
  /**
   * @description whether the component is in loading state while searching
   */
  searchingLoading: Boolean,
  /**
   * @description debounce time in milliseconds
   */
  debounceTime: {
    type: Number,
    default: 300,
  },
} as const)

export const searchInputEmits = {
  /**
   * @description Emitted when the input value changes
   * @param {string} value - Updated value
   */
  'update:modelValue': (value: string) => true,

  /**
   * @description Emitted when a search is performed (after debounce or on Enter key)
   * @param {string} value - Search query
   */
  'search': (value: string) => true,

  /**
   * @description Emitted when the input is cleared
   */
  'clear': () => true,
}

export type SearchInputProps = ExtractPropTypes<typeof searchInputProps>
export type SearchInputEmits = typeof searchInputEmits

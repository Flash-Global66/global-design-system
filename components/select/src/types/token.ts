import type { IOptionProps, ISelectProps } from '../defaults'
import type { InjectionKey, Ref } from 'vue'
import type { Option } from './select.types'
import type { TooltipInstance } from 'element-plus'

export interface SelectV2Context {
  props: ISelectProps
  expanded: Ref<boolean>
  tooltipRef: Ref<TooltipInstance | undefined>
  onSelect: (option: Option) => void
  onHover: (idx?: number) => void
  onKeyboardNavigate: (direction: 'forward' | 'backward') => void
  onKeyboardSelect: () => void
}

export const selectV2InjectionKey: InjectionKey<SelectV2Context> = Symbol('ElSelectV2Injection')
export type { ISelectProps, IOptionProps }

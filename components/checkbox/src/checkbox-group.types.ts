import { CheckboxValueType } from './checkbox'

export type CheckboxGroupValueType = Exclude<CheckboxValueType, boolean>[]
export type layoutType = 'horizontal' | 'vertical'
export type klsByType = {
  [key in layoutType]: string
}

export type Option = {
  value: string | number | boolean
  label?: string | number | boolean
  disabled?: boolean
  checked?: boolean
}
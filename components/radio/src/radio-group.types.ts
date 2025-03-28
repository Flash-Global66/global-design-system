export type layoutType = 'horizontal' | 'vertical'
export type klsByType = {
  [key in layoutType]: string
}

export type RadioOption = {
  value: string | number | boolean
  label?: string | number
  disabled?: boolean
}
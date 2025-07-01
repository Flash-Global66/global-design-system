export const CHANGE_EVENT = 'change'
export const INPUT_EVENT = 'input'
export const UPDATE_MODEL_EVENT = 'update:modelValue'
export const CLOSE_EVENT = 'close'
export const CLICK_EVENT = 'click'
export const COMMAND_EVENT = 'command'

export const CHIP_TYPES = ['primary', 'secondary'] as const
export const CHIP_VARIANTS = ['solid', 'outline'] as const
export const CHIP_SIZES = ['sm', 'md'] as const
export const DROPDOWN_TRIGGERS = ['hover', 'click', 'contextmenu'] as const
export const DROPDOWN_PLACEMENTS = [
  'top', 
  'top-start', 
  'top-end', 
  'bottom', 
  'bottom-start', 
  'bottom-end', 
  'left', 
  'left-start', 
  'left-end', 
  'right', 
  'right-start', 
  'right-end'
] as const

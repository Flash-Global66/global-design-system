import type { ExtractPropTypes } from 'vue'
import type Chip from './chip.vue'
import { buildProps, definePropType } from 'element-plus/es/utils/index'
import { IconString } from '@flash-global66/g-icon-font'
import { 
  CHIP_TYPES, 
  CHIP_VARIANTS, 
  CHIP_SIZES, 
  DROPDOWN_PLACEMENTS,
  DROPDOWN_TRIGGERS,
  CLOSE_EVENT,
  CLICK_EVENT,
  COMMAND_EVENT
} from './constants'
import type { ChipType, ChipVariant, ChipSize, DropdownPlacement, DropdownTrigger } from './chip.types'
import { dropdownProps } from '@flash-global66/g-dropdown'

export const chipProps = buildProps({
  /**
   * @description tipo del chip (controla el border radius: primary=xl, secondary=sm)
   */
  type: {
    type: definePropType<ChipType>(String),
    values: CHIP_TYPES,
    default: 'primary'
  },
  /**
   * @description variante visual (controla el color)
   * el solid el fondo es grey-100
   * el outline tien solo el borde de color ever-blue-200
   */ 
  variant: {
    type: definePropType<ChipVariant>(String),
    values: CHIP_VARIANTS,
    default: 'solid'
  },
  /**
   * @description tamaño del chip
   * esto es correcto
   */
  size: {
    type: definePropType<ChipSize>(String),
    values: CHIP_SIZES,
    default: 'md'
  },
  /**
   * @description prefix icon
   * @default undefined
   * @type {IconString}
   */
  prefixIcon: {
    type: definePropType<IconString>(String),
    default: undefined
  },
  /**
   * @description suffix icon
   * @default undefined
   * @type {IconString}
   */
  suffixIcon: {
    type: definePropType<IconString>(String),
    default: undefined
  },
  /**
   * @description muestra el botón de cierre
   */
  closable: Boolean,
  /**
   * @description texto del chip
   * @default undefined
   * @type {String}
   */
  text: {
    type: String,
    default: undefined
  },
  /**
   * @description chip seleccionado
   */
  selected: Boolean,
  /**
   * @description chip deshabilitado
   */
  disabled: Boolean,
  /**
   * @description si el chip tiene dropdown habilitado
   */
  dropdownEnabled: Boolean,
  /**
   * @description
   */
  dropdownActions: dropdownProps.actions,
  /**
   * @description
   */
  dropdownHideOnClick: dropdownProps.hideOnClick,
  /**
   * @description
   */
  dropdownPlacement: {
    type: definePropType<DropdownPlacement>(String),
    values: DROPDOWN_PLACEMENTS,
    default: 'bottom'
  },
  /**
   * @description
   */
  dropdownShowTimeout: dropdownProps.showTimeout,
  /**
   * @description
   */
  dropdownHideTimeout: dropdownProps.hideTimeout,
  /**
   * @description
   */
  dropdownTrigger: {
    type: definePropType<DropdownTrigger>(String),
    values: DROPDOWN_TRIGGERS,
    default: 'hover'
  },
} as const)

export type ChipProps = ExtractPropTypes<typeof chipProps>

export const chipEmits = {
  [CLOSE_EVENT]: (evt: MouseEvent) => evt instanceof MouseEvent,
  [CLICK_EVENT]: (evt: MouseEvent | KeyboardEvent) => evt instanceof Event,
  [COMMAND_EVENT]: (command: any) => typeof command !== 'undefined'
}
export type ChipEmits = typeof chipEmits

export type ChipInstance = InstanceType<typeof Chip>
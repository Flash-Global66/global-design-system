import type { ExtractPropTypes } from 'vue'
import type Chip from './chip.vue'
import { buildProps, definePropType } from 'element-plus/es/utils/index'
import { IconString } from '@flash-global66/g-icon-font'
import { useTooltipTriggerProps } from '@flash-global66/g-tooltip'
import { type Placement } from '@flash-global66/g-popper'
import { type actionType } from '@flash-global66/g-dropdown'
import { 
  CHIP_TYPES, 
  CHIP_VARIANTS, 
  CHIP_SIZES, 
  CLOSE_EVENT,
  CLICK_EVENT,
  COMMAND_EVENT,
  VISIBLE_CHANGE_EVENT
} from './constants'
import type { ChipType, ChipVariant, ChipSize } from './chip.types'

export type DropdownCommand = string | number | Record<string, any>

export const chipProps = buildProps({
  /**
   * @description chip type (controls border radius: primary=xl, secondary=sm)
   */
  type: {
    type: definePropType<ChipType>(String),
    values: CHIP_TYPES,
    default: 'primary'
  },
  /**
   * @description visual variant (controls color)
   * solid has grey-100 background
   * outline has only ever-blue-200 border
   */ 
  variant: {
    type: definePropType<ChipVariant>(String),
    values: CHIP_VARIANTS,
    default: 'solid'
  },
  /**
   * @description chip size
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
  iconLeft: {
    type: definePropType<IconString>(String),
    default: undefined
  },
  /**
   * @description suffix icon
   * @default undefined
   * @type {IconString}
   */
  iconRight: {
    type: definePropType<IconString>(String),
    default: undefined
  },
  /**
   * @description shows close button
   */
  closable: Boolean,
  /**
   * @description chip text
   * @default undefined
   * @type {String}
   */
  text: {
    type: String,
    default: undefined
  },
  /**
   * @description selected chip
   */
  selected: Boolean,
  /**
   * @description disabled chip
   */
  disabled: Boolean,
  /**
   * @description whether the chip has dropdown enabled. Automatically shows a chevron-down icon in the suffix.
   * Dropdown props are passed directly to the GDropdown component using v-bind.
   * For advanced dropdown options, consult the GDropdown documentation.
   */
  dropdownEnabled: Boolean,

  /**
   * @description actions for the dropdown menu
   * @default undefined
   * @type {Array<actionType>}
   */
  actions: {
    type: definePropType<actionType[]>(Array),
    default: undefined
  },

  /**
   * @description dropdown trigger type
   * @default 'click'
   */
  trigger: useTooltipTriggerProps.trigger,

  /**
   * @description dropdown placement
   * @default 'bottom-start'
   */
  placement: {
    type: definePropType<Placement>(String),
    default: 'bottom-start'
  },
} as const)

export type ChipProps = ExtractPropTypes<typeof chipProps>

export const chipEmits = {
  [CLOSE_EVENT]: (evt: MouseEvent) => evt instanceof MouseEvent,
  [CLICK_EVENT]: (evt: MouseEvent | KeyboardEvent) => evt instanceof Event,
  [COMMAND_EVENT]: (command: DropdownCommand) => 
    typeof command === 'string' || 
    typeof command === 'number' || 
    (typeof command === 'object' && command !== null),
  [VISIBLE_CHANGE_EVENT]: (visible: boolean) => typeof visible === 'boolean'
}
export type ChipEmits = typeof chipEmits

export type ChipInstance = InstanceType<typeof Chip>
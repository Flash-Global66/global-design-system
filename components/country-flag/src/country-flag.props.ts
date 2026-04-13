import type { ExtractPropTypes } from 'vue'
import { buildProps, definePropType, debugWarn } from 'element-plus/es/utils/index.mjs'
import type { FlagCode, FlagSize } from './types/country-flag.types'
import { ALL_FLAG_CODES } from './constants/country-flag.constants'

export const flagProps = buildProps({
  name: {
    type: definePropType<FlagCode>(String),
    required: true,
  },
  size: {
    type: definePropType<FlagSize>(String),
    default: 'md',
  },
  lazyLoad: {
    type: Boolean,
    default: true,
  },
} as const)

export type FlagProps = ExtractPropTypes<typeof flagProps>

export function validateFlagProps(props: FlagProps) {
  if (props.name && !ALL_FLAG_CODES.includes(String(props.name).toUpperCase() as FlagCode)) {
    debugWarn(
      'GCountryFlag',
      `Invalid flag name: "${props.name}". Use a valid ISO 3166-1 alpha-2 code (e.g. "CO", "US") or a special code (e.g. "EU", "USDC").`
    )
  }
}

import type { ExtractPropTypes } from 'vue';
import { buildProps, definePropType, debugWarn } from 'element-plus/es/utils/index.mjs';
import type { LogoFilter, LogoName, LogoSize } from './types/logo.types';
import { LOGO_FILTER_OPTIONS, LOGO_FILTERS, LOGO_NAMES } from './constants/logo.constants';

export const logoProps = buildProps({
  name: {
    type: definePropType<LogoName>(String),
    required: true,
  },
  size: {
    type: definePropType<LogoSize>(String),
    default: 'md',
  },
  sizeCustom: {
    type: String,
    default: '',
  },
  filter: {
    type: definePropType<LogoFilter>(String),
    default: 'none',
  },
  color: {
    type: String,
    default: '',
  },
  lazyLoad: {
    type: Boolean,
    default: true,
  },
} as const);

export type LogoProps = ExtractPropTypes<typeof logoProps>;

export function validateLogoProps(props: LogoProps) {
  if (props.name && !LOGO_NAMES.includes(props.name as LogoName)) {
    debugWarn(
      'GLogo',
      `Invalid logo name: "${props.name}". Available logos: ${LOGO_NAMES.join(', ')}`
    );
  }
  if (props.filter && !LOGO_FILTER_OPTIONS.includes(props.filter as LogoFilter)) {
    debugWarn(
      'GLogo',
      `Invalid filter: "${props.filter}". Available filters: ${LOGO_FILTER_OPTIONS.join(', ')}`
    );
  }
}

import type { ExtractPropTypes, PropType } from 'vue';
import { buildProps, definePropType, debugWarn } from 'element-plus/es/utils/index.mjs';
import type { LogoName, LogoSize } from './types/logo.types';
import { LOGO_NAMES } from './constants/logo.constants';

export const logoProps = buildProps({
  name: {
    type: definePropType<LogoName>(String),
    required: true,
  },
  size: {
    type: definePropType<LogoSize>(String),
    default: 'md',
  },
  filter: {
    type: String as PropType<string>,
    default: 'none',
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
}

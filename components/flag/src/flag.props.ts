import type { ExtractPropTypes, PropType } from 'vue';
import { buildProps, debugWarn } from 'element-plus/es/utils/index';
import type { FlagCode, FlagSize, FlagLazyLoad } from './types/flag.types';
import { ALL_FLAG_CODES } from './constants/flag.constants';

/**
 * Props definition for the Flag component
 */
export const flagProps = buildProps({
  /**
   * 2-letter country code (ISO 3166-1 alpha-2). Uppercase is recommended.
   */
  name: {
    type: String as PropType<FlagCode>,
    required: true,
  },
  /**
   * Size key
   */
  size: {
    type: String as PropType<FlagSize>,
    default: 'md',
  },
  /**
   * Whether to lazy load the flag
   */
  lazyLoad: {
    type: Boolean as PropType<FlagLazyLoad>,
    default: true,
  },
});

export type FlagProps = ExtractPropTypes<typeof flagProps>;

export function validateFlagProps(props: FlagProps) {
  if (props.name && !ALL_FLAG_CODES.includes(String(props.name).toUpperCase() as FlagCode)) {
    debugWarn(
      'Flag',
      `Invalid flag name: "${props.name}". Available codes: ${ALL_FLAG_CODES.join(', ')}`
    );
  }
}

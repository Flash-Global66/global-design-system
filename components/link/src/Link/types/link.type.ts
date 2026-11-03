import type { ExtractPropTypes } from 'vue';
import type { linkEmits, linkProps } from '../constants/link.constant';

export type LinkProps = ExtractPropTypes<typeof linkProps>;

export type LinkEmits = typeof linkEmits;

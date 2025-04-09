import { buildProps, iconPropType } from 'element-plus/es/utils/index.mjs'
import type { ExtractPropTypes, PropType } from 'vue'
import type Next from './next.vue'
import { IconString } from '@flash-global66/g-icon-font';

export const paginationNextProps = buildProps({
  disabled: Boolean,
  currentPage: {
    type: Number,
    default: 1,
  },
  pageCount: {
    type: Number,
    default: 50,
  },
  nextIcon: {
    type: String as PropType<IconString>,
  },
} as const)

export type PaginationNextProps = ExtractPropTypes<typeof paginationNextProps>

export type NextInstance = InstanceType<typeof Next> & unknown

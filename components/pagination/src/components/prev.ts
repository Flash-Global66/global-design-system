import { buildProps, iconPropType } from 'element-plus/es/utils/index.mjs'
import type { ExtractPropTypes, PropType } from 'vue'
import type Prev from './prev.vue'
import { IconString } from '@flash-global66/g-icon-font';

export const paginationPrevProps = buildProps({
  disabled: Boolean,
  currentPage: {
    type: Number,
    default: 1,
  },
  prevIcon: {
    type: String as PropType<IconString>,
  },
} as const)

export const paginationPrevEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}

export type PaginationPrevProps = ExtractPropTypes<typeof paginationPrevProps>

export type PrevInstance = InstanceType<typeof Prev> & unknown

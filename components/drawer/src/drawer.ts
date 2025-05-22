import { buildProps } from 'element-plus/es/utils/index'
import { dialogEmits, dialogProps } from '@flash-global66/g-dialog'
import type { ExtractPropTypes, PropType } from 'vue'

export interface ResponsiveSizeDrawer {
  sm?: string;
  md?: string;
  lg?: string;
}

export const drawerProps = buildProps({
  ...dialogProps,
  direction: {
    type: String,
    default: 'rtl',
    values: ['ltr', 'rtl', 'ttb', 'btt'],
  },
  size: {
    type: [String, Number],
    default: '400px',
  },
  description: {
    type: String,
    default: '',
  },
  modalFade: {
    type: Boolean,
    default: true,
  },
  headerAriaLevel: {
    type: String,
    default: '2',
  },
  withHeader: {
    type: Boolean,
    default: true,
  },
  showClose: {
    type: Boolean,
    default: true,
  },
  responsiveSize: {
    type: [Object, Boolean] as PropType<ResponsiveSizeDrawer | boolean>,
    default: false,
    validator: (val) => {
      if (typeof val === 'boolean') return true;
      if (typeof val === 'object') {
        const validKeys = ['sm', 'md', 'lg'];
        return Object.keys(val).every(key => validKeys.includes(key));
      }
      return false;
    }
  },
} as const)

export type DrawerProps = ExtractPropTypes<typeof drawerProps>

export const drawerEmits = dialogEmits

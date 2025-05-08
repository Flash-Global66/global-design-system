import { buildProps, definePropType } from 'element-plus/es/utils/index'
import { createCollectionWithScope } from '@flash-global66/g-collection'
import type { ExtractPropTypes, HTMLAttributes, StyleValue } from 'vue'

export const rovingFocusGroupProps = buildProps({
  style: { type: definePropType<StyleValue>([String, Array, Object]) },
  currentTabId: {
    type: definePropType<string | null>(String),
  },
  defaultCurrentTabId: String,
  loop: Boolean,
  dir: {
    type: String, // left for direction support
    values: ['ltr', 'rtl'],
    default: 'ltr',
  },
  orientation: {
    // left for orientation support
    type: definePropType<HTMLAttributes['aria-orientation']>(String),
  },

  onBlur: Function,
  onFocus: Function,
  onMousedown: Function,
})

export type ElRovingFocusGroupProps = ExtractPropTypes<
  typeof rovingFocusGroupProps
>

const {
  GCollection,
  GCollectionItem,
  COLLECTION_INJECTION_KEY,
  COLLECTION_ITEM_INJECTION_KEY,
} = createCollectionWithScope('RovingFocusGroup')

export {
  GCollection,
  GCollectionItem,
  COLLECTION_INJECTION_KEY as ROVING_FOCUS_COLLECTION_INJECTION_KEY,
  COLLECTION_ITEM_INJECTION_KEY as ROVING_FOCUS_ITEM_COLLECTION_INJECTION_KEY,
}

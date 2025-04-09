import {
  computed,
  defineComponent,
  getCurrentInstance,
  h,
  provide,
  ref,
  watch,
} from 'vue'
import {
  buildProps,
  debugWarn,
  isNumber,
} from 'element-plus/es/utils/index.mjs'
import {
  useGlobalSize,
  useNamespace,
} from 'element-plus/es/hooks/index.mjs'
import { CHANGE_EVENT } from 'element-plus/es/constants/index.mjs'
import { elPaginationKey } from './constants'

import Prev from './components/prev.vue'
import Next from './components/next.vue'
import Pager from './components/pager.vue'
import type { ExtractPropTypes, PropType, VNode } from 'vue'
import { IconString } from '@flash-global66/g-icon-font';
/**
 * It it user's responsibility to guarantee that the value of props.total... is number
 * (same as pageSize, currentPage, pageCount)
 * Otherwise we can reasonable infer that the corresponding field is absent
 */
const isAbsent = (v: unknown): v is undefined => typeof v !== 'number'

export const paginationProps = buildProps({
  align: {
    type: String,
    values: ['left', 'center', 'right'],
    default: 'left',
  },
  /**
   * @description options of item count per page
   */
  pageSize: Number,
  /**
   * @description total item count
   */
  total: Number,
  /**
   * @description total page count. Set either `total` or `page-count` and pages will be displayed; if you need `page-sizes`, `total` is required
   */
  pageCount: Number,
  /**
   * @description number of pagers. Pagination collapses when the total page count exceeds this value
   */
  pagerCount: {
    type: Number,
    validator: (value: unknown) => {
      return (
        isNumber(value) &&
        Math.trunc(value as number) === value &&
        (value as number) > 4 &&
        (value as number) < 22 &&
        (value as number) % 2 === 1
      )
    },
    default: 7,
  },
  /**
   * @description current page number
   */
  currentPage: Number,
  /**
   * @description whether Pagination is disabled
   */
  disabled: Boolean,
  /**
   * @description whether to hide when there's only one page
   */
  hideOnSinglePage: {
    type: Boolean,
    default: true,
  },
} as const)
export type PaginationProps = ExtractPropTypes<typeof paginationProps>

export const paginationEmits = {
  'update:current-page': (val: number) => isNumber(val),
  'update:page-size': (val: number) => isNumber(val),
  change: (currentPage: number, pageSize: number) =>
    isNumber(currentPage) && isNumber(pageSize),
  'prev-click': (val: number) => isNumber(val),
  'next-click': (val: number) => isNumber(val),
}
export type PaginationEmits = typeof paginationEmits

const componentName = 'GPagination'
export default defineComponent({
  name: componentName,

  props: paginationProps,
  emits: paginationEmits,

  setup(props, { emit, slots }) {
    const ns = useNamespace('pagination')
    const vnodeProps = getCurrentInstance()!.vnode.props || {}
    const _globalSize = useGlobalSize()
    // we can find @xxx="xxx" props on `vnodeProps` to check if user bind corresponding events
    const hasCurrentPageListener =
      'onUpdate:currentPage' in vnodeProps ||
      'onUpdate:current-page' in vnodeProps ||
      'onCurrentChange' in vnodeProps
    const hasPageSizeListener =
      'onUpdate:pageSize' in vnodeProps ||
      'onUpdate:page-size' in vnodeProps ||
      'onSizeChange' in vnodeProps
    const assertValidUsage = computed(() => {
      // Users have to set either one, otherwise count of pages cannot be determined
      if (isAbsent(props.total) && isAbsent(props.pageCount)) return false
      // <el-pagination ...otherProps :current-page="xxx" /> without corresponding listener is forbidden now
      // Users have to use two way binding of `currentPage`
      if (!isAbsent(props.currentPage) && !hasCurrentPageListener) return false
      
      return true
    })

    const innerPageSize = ref(10)
    const innerCurrentPage = ref(1)

    const pageSizeBridge = computed({
      get() {
        return isAbsent(props.pageSize) ? innerPageSize.value : props.pageSize
      },
      set(v: number) {
        if (isAbsent(props.pageSize)) {
          innerPageSize.value = v
        }
        if (hasPageSizeListener) {
          emit('update:page-size', v)
        }
      },
    })

    const pageCountBridge = computed<number>(() => {
      let pageCount = 0
      if (!isAbsent(props.pageCount)) {
        pageCount = props.pageCount
      } else if (!isAbsent(props.total)) {
        pageCount = Math.max(1, Math.ceil(props.total / pageSizeBridge.value))
      }
      return pageCount
    })

    const currentPageBridge = computed<number>({
      get() {
        return isAbsent(props.currentPage)
          ? innerCurrentPage.value
          : props.currentPage
      },
      set(v) {
        let newCurrentPage = v
        if (v < 1) {
          newCurrentPage = 1
        } else if (v > pageCountBridge.value) {
          newCurrentPage = pageCountBridge.value
        }
        if (isAbsent(props.currentPage)) {
          innerCurrentPage.value = newCurrentPage
        }
        if (hasCurrentPageListener) {
          emit('update:current-page', newCurrentPage)
        }
      },
    })

    watch(pageCountBridge, (val) => {
      if (currentPageBridge.value > val) currentPageBridge.value = val
    })

    watch(
      [currentPageBridge, pageSizeBridge],
      (value) => {
        emit(CHANGE_EVENT, ...value)
      },
      { flush: 'post' }
    )

    function handleCurrentChange(val: number) {
      currentPageBridge.value = val
    }

    function handleSizeChange(val: number) {
      pageSizeBridge.value = val
      const newPageCount = pageCountBridge.value
      if (currentPageBridge.value > newPageCount) {
        currentPageBridge.value = newPageCount
      }
    }

    function prev() {
      if (props.disabled) return
      currentPageBridge.value -= 1
      emit('prev-click', currentPageBridge.value)
    }

    function next() {
      if (props.disabled) return
      currentPageBridge.value += 1
      emit('next-click', currentPageBridge.value)
    }

    function addClass(element: any, cls: string) {
      if (element) {
        if (!element.props) {
          element.props = {}
        }
        element.props.class = [element.props.class, cls].join(' ')
      }
    }

    provide(elPaginationKey, {
      pageCount: pageCountBridge,
      disabled: computed(() => props.disabled),
      currentPage: currentPageBridge,
      changeEvent: handleCurrentChange,
      handleSizeChange,
    })

    return () => {
      if (!assertValidUsage.value) {
        debugWarn(componentName, 'Deprecated usages detected, please refer to the el-pagination documentation for more details')
        return null
      }
      if (props.hideOnSinglePage && pageCountBridge.value <= 1) return null

      const prevComponent = h(Prev, {
        disabled: props.disabled,
        currentPage: currentPageBridge.value,
        onClick: prev,
      })
      
      const pagerComponent = h(Pager, {
        currentPage: currentPageBridge.value,
        pageCount: pageCountBridge.value,
        pagerCount: props.pagerCount,
        onChange: handleCurrentChange,
        disabled: props.disabled,
      })
      
      const nextComponent = h(Next, {
        disabled: props.disabled,
        currentPage: currentPageBridge.value,
        pageCount: pageCountBridge.value,
        onClick: next,
      })
      
      addClass(prevComponent, ns.is('first'))
      addClass(nextComponent, ns.is('last'))
      
      return h(
        'div',
        { class: [ns.b(), ns.m(props.align)] },
        [prevComponent, pagerComponent, nextComponent]
      )
    }
  },
})

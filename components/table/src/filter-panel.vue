<template>
  <g-tooltip
    ref="tooltip"
    :visible="tooltipVisible"
    :offset="0"
    :placement="placement"
    :show-arrow="false"
    :stop-popper-mouse-event="false"
    teleported
    effect="light"
    pure
    :popper-class="filterClassName"
    persistent
    :append-to="appendTo"
  >
    <template #content>
      <div v-if="multiple">
        <div :class="ns.e('content')">
          <g-scrollbar :wrap-class="ns.e('wrap')">
            <g-checkbox-group
              v-model="filteredValue"
              :class="ns.e('checkbox-group')"
            >
              <g-checkbox
                v-for="filter in filters"
                :key="filter.value"
                :value="filter.value"
              >
                {{ filter.text }}
              </g-checkbox>
            </g-checkbox-group>
          </g-scrollbar>
        </div>
        <div :class="ns.e('bottom')">
          <button
            :class="{ [ns.is('disabled')]: filteredValue.length === 0 }"
            :disabled="filteredValue.length === 0"
            type="button"
            @click="handleConfirm"
          >
            {{ t('el.table.confirmFilter') }}
          </button>
          <button type="button" @click="handleReset">
            {{ t('el.table.resetFilter') }}
          </button>
        </div>
      </div>
      <ul v-else :class="ns.e('list')">
        <li
          :class="[
            ns.e('list-item'),
            {
              [ns.is('active')]: isPropAbsent(filterValue),
            },
          ]"
          @click="handleSelect(null)"
        >
          {{ t('el.table.clearFilter') }}
        </li>
        <li
          v-for="filter in filters"
          :key="filter.value"
          :class="[ns.e('list-item'), ns.is('active', isActive(filter))]"
          :label="filter.value"
          @click="handleSelect(filter.value)"
        >
          {{ filter.text }}
        </li>
      </ul>
    </template>
    <!-- <template #default>
      <span
        v-click-outside:[popperPaneRef]="hideFilterPanel"
        :class="[
          `${ns.namespace.value}-table__column-filter-trigger`,
          `${ns.namespace.value}-none-outline`,
        ]"
        @click="showFilterPanel"
      >
        <el-icon>
          <slot name="filter-icon">
            <arrow-up v-if="column.filterOpened" />
            <arrow-down v-else />
          </slot>
        </el-icon>
      </span>
    </template> -->
  </g-tooltip>
</template>

<script lang="ts">
// @ts-nocheck
import { computed, defineComponent, getCurrentInstance, ref, watch } from 'vue'
import GCheckbox from '@flash-global66/g-checkbox'
// import { ElIcon } from '@element-plus/components/icon'
// import { ArrowDown, ArrowUp } from '@element-plus/icons-vue'
import { ClickOutside } from 'element-plus/es/directives/index'
import { useLocale, useNamespace } from 'element-plus'
import GTooltip, {
  type GTooltipProps,
  useTooltipContentProps,
} from '@flash-global66/g-tooltip'
import GScrollbar from '@flash-global66/g-scrollbar'
import { isPropAbsent } from 'element-plus/es/utils/index'

import type { TooltipInstance } from '@flash-global66/g-tooltip'
import type { Placement } from '@flash-global66/g-popper'
import type { PropType, WritableComputedRef } from 'vue'
import type { TableColumnCtx } from './table-column/defaults'
import type { TableHeader } from './table-header'
import type { Store } from './store'

const { CheckboxGroup: GCheckboxGroup } = GCheckbox

export default defineComponent({
  name: 'GTableFilterPanel',
  components: {
    GCheckbox,
    GCheckboxGroup,
    GScrollbar,
    GTooltip,
  },
  directives: { ClickOutside },
  props: {
    placement: {
      type: String as PropType<Placement>,
      default: 'bottom-start',
    },
    store: {
      type: Object as PropType<Store<unknown>>,
    },
    column: {
      type: Object as PropType<TableColumnCtx<unknown>>,
    },
    upDataColumn: {
      type: Function,
    },
    appendTo: useTooltipContentProps.appendTo,
  },
  setup(props) {
    const instance = getCurrentInstance()
    const { t } = useLocale()
    const ns = useNamespace('table-filter')
    const parent = instance?.parent as TableHeader
    if (!parent.filterPanels.value[props.column.id]) {
      parent.filterPanels.value[props.column.id] = instance
    }
    const tooltipVisible = ref(false)
    const tooltip = ref<TooltipInstance | null>(null)
    const filters = computed(() => {
      return props.column && props.column.filters
    })
    const filterClassName = computed(() => {
      if (props.column.filterClassName) {
        return `${ns.b()} ${props.column.filterClassName}`
      }
      return ns.b()
    })
    const filterValue = computed({
      get: () => (props.column?.filteredValue || [])[0],
      set: (value: string) => {
        if (filteredValue.value) {
          if (!isPropAbsent(value)) {
            filteredValue.value.splice(0, 1, value)
          } else {
            filteredValue.value.splice(0, 1)
          }
        }
      },
    })
    const filteredValue: WritableComputedRef<unknown[]> = computed({
      get() {
        if (props.column) {
          return props.column.filteredValue || []
        }
        return []
      },
      set(value: unknown[]) {
        if (props.column) {
          props.upDataColumn('filteredValue', value)
        }
      },
    })
    const multiple = computed(() => {
      if (props.column) {
        return props.column.filterMultiple
      }
      return true
    })
    const isActive = (filter) => {
      return filter.value === filterValue.value
    }
    const hidden = () => {
      tooltipVisible.value = false
    }
    const showFilterPanel = (e: MouseEvent) => {
      e.stopPropagation()
      tooltipVisible.value = !tooltipVisible.value
    }
    const hideFilterPanel = () => {
      tooltipVisible.value = false
    }
    const handleConfirm = () => {
      confirmFilter(filteredValue.value)
      hidden()
    }
    const handleReset = () => {
      filteredValue.value = []
      confirmFilter(filteredValue.value)
      hidden()
    }
    const handleSelect = (_filterValue?: string) => {
      filterValue.value = _filterValue
      if (!isPropAbsent(_filterValue)) {
        confirmFilter(filteredValue.value)
      } else {
        confirmFilter([])
      }
      hidden()
    }
    const confirmFilter = (filteredValue: unknown[]) => {
      props.store.commit('filterChange', {
        column: props.column,
        values: filteredValue,
      })
      props.store.updateAllSelected()
    }
    watch(
      tooltipVisible,
      (value) => {
        if (props.column) {
          props.upDataColumn('filterOpened', value)
        }
      },
      {
        immediate: true,
      }
    )

    const popperPaneRef = computed(() => {
      return tooltip.value?.popperRef?.contentRef
    })

    return {
      tooltipVisible,
      multiple,
      filterClassName,
      filteredValue,
      filterValue,
      filters,
      handleConfirm,
      handleReset,
      handleSelect,
      isPropAbsent,
      isActive,
      t,
      ns,
      showFilterPanel,
      hideFilterPanel,
      popperPaneRef,
      tooltip,
    }
  },
})
</script>

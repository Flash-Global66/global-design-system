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

<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import GCheckbox from '@flash-global66/g-checkbox';
import GTooltip, { useTooltipContentProps } from '@flash-global66/g-tooltip';
import GScrollbar from '@flash-global66/g-scrollbar';
import { useFilterPanel } from './useFilterPanel';

import type { Placement } from '@flash-global66/g-popper';
import type { PropType } from 'vue';
import type { TableColumnCtx } from '../../shared/types/tableColumn.type';
import type { Store } from '../../shared/store/mutations.store';

const { CheckboxGroup: GCheckboxGroup } = GCheckbox;

defineOptions({
  name: 'GTableFilterPanel',
});

const props = defineProps({
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
});

const {
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
  tooltip,
} = useFilterPanel(props);
</script>

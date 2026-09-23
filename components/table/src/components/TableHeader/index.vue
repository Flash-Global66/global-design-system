<template>
  <thead ref="theadRef" :class="{ [ns.is('group')]: isGroup }">
    <tr
      v-for="(subColumns, rowIndex) in columnRows"
      :key="rowIndex"
      :class="getHeaderRowClass(rowIndex)"
      :style="getHeaderRowStyle(rowIndex)"
    >
      <th
        v-for="(column, cellIndex) in subColumns"
        :key="`${column.id}-thead`"
        :class="resolveHeaderCellClass(rowIndex, cellIndex, subColumns, column)"
        :colspan="column.colSpan"
        :rowspan="column.rowSpan"
        :style="getHeaderCellStyle(rowIndex, cellIndex, subColumns, column)"
        @click="handleHeaderCellClick($event, column)"
        @contextmenu="handleHeaderContextMenu($event, column)"
        @mousedown="handleMouseDown($event, column)"
        @mousemove="handleMouseMove($event, column)"
        @mouseout="handleMouseOut"
      >
        <div
          :class="[
            'cell',
            column.filteredValue && column.filteredValue.length > 0
              ? 'highlight'
              : '',
          ]"
        >
          <template v-if="column.renderHeader">
            <VNodeRenderer
              :vnode="
                column.renderHeader({
                  column,
                  $index: cellIndex,
                  store,
                  _self: parent?.proxy,
                })
              "
            />
          </template>
          <template v-else>{{ column.label }}</template>
          <span
            v-if="column.sortable"
            class="caret-wrapper"
            @click="handleSortClick($event, column)"
          >
            <i
              class="sort-caret ascending"
              @click="handleSortClick($event, column, 'ascending')"
            />
            <i
              class="sort-caret descending"
              @click="handleSortClick($event, column, 'descending')"
            />
          </span>
          <FilterPanel
            v-if="column.filterable"
            :store="store"
            :placement="column.filterPlacement || 'bottom-start'"
            :append-to="parent?.props.appendFilterPanelTo"
            :column="column"
            :up-data-column="
              (key, value) => {
                column[key] = value;
              }
            "
          >
            <template #filter-icon>
              <VNodeRenderer
                v-if="column.renderFilterIcon"
                :vnode="
                  column.renderFilterIcon({
                    filterOpened: column.filterOpened,
                  })
                "
              />
            </template>
          </FilterPanel>
        </div>
      </th>
    </tr>
  </thead>
</template>

<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import FilterPanel from '../FilterPanel/index.vue';
import { VNodeRenderer } from '../../shared/utils/render.util';
import { useTableHeader } from './useTableHeader';
import type { PropType } from 'vue';
import type { DefaultRow } from '../../Table/defaults';
import type { TableHeaderProps } from '../../shared/types/tableHeader.type';

defineOptions({
  name: 'GTableHeader',
});

const props = defineProps({
  fixed: {
    type: String,
    default: '',
  },
  store: {
    required: true,
    type: Object as PropType<TableHeaderProps<DefaultRow>['store']>,
  },
  border: Boolean,
  defaultSort: {
    type: Object as PropType<TableHeaderProps<DefaultRow>['defaultSort']>,
    default: () => {
      return {
        prop: '',
        order: '',
      };
    },
  },
  appendFilterPanelTo: {
    type: String,
  },
  allowDragLastColumn: {
    type: Boolean,
  },
});

const emit = defineEmits(['set-drag-visible']);

const {
  ns,
  parent,
  filterPanels,
  columnRows,
  getHeaderRowClass,
  getHeaderRowStyle,
  getHeaderCellStyle,
  resolveHeaderCellClass,
  handleHeaderCellClick,
  handleHeaderContextMenu,
  handleMouseDown,
  handleMouseMove,
  handleMouseOut,
  handleSortClick,
  isGroup,
  theadRef,
  updateFixedColumnStyle,
} = useTableHeader(props, emit);

defineExpose({
  filterPanels,
  updateFixedColumnStyle,
});
</script>

<template>
  <el-table
    v-bind="{ ...$attrs, ...$props }"
    @select="(selection, row) => $emit('select', selection, row)"
    @select-all="(selection) => $emit('select-all', selection)"
    @selection-change="(selection) => $emit('selection-change', selection)"
    @cell-mouse-enter="
      (row, column, cell, event) => $emit('cell-mouse-enter', row, column, cell, event)
    "
    @cell-mouse-leave="
      (row, column, cell, event) => $emit('cell-mouse-leave', row, column, cell, event)
    "
    @cell-click="
      (row, column, cell, event) => $emit('cell-click', row, column, cell, event)
    "
    @cell-dblclick="
      (row, column, cell, event) => $emit('cell-dblclick', row, column, cell, event)
    "
    @cell-contextmenu="
      (row, column, cell, event) => $emit('cell-contextmenu', row, column, cell, event)
    "
    @row-click="(row, column, event) => $emit('row-click', row, column, event)"
    @row-contextmenu="(row, column, event) => $emit('row-contextmenu', row, column, event)"
    @row-dblclick="(row, column, event) => $emit('row-dblclick', row, column, event)"
    @header-click="(column, event) => $emit('header-click', column, event)"
    @header-contextmenu="(column, event) => $emit('header-contextmenu', column, event)"
    @sort-change="$emit('sort-change')"
    @filter-change="$emit('filter-change')"
    @current-change="(currentRow, oldCurrentRow) => $emit('current-change', currentRow, oldCurrentRow)"
    @header-dragend="(newWidth, oldWidth, column, event) => $emit('header-dragend', newWidth, oldWidth, column, event)"
    @expand-change="(row, expanded) => $emit('expand-change', row, expanded)"
  >

    <!--
      @slot customize default content - Table-column
    -->
    <slot />

    <template #append>
      <!--
        @slot Contents to be inserted after the last row. You may need this slot if you want to implement infinite scroll for the table. This slot will be displayed above the summary row if there is one.
      -->
      <slot name="append" />
    </template>

    <template #empty>
      <!--
        @slot you can customize content when data is empty.
      -->
      <slot name="empty" />
    </template>


  </el-table>
</template>

<script lang="ts">
import { Component, defineComponent, PropType } from 'vue';
import {
  ElTable,
  TableProps
} from "element-plus";

export default defineComponent({
  name: 'GTable',
  components: {
    ElTable,
  },
  emits: [
    'select',
    'select-all',
    'selection-change',
    'cell-mouse-enter',
    'cell-mouse-leave',
    'cell-contextmenu',
    'cell-click',
    'cell-dblclick',
    'row-click',
    'row-contextmenu',
    'row-dblclick',
    'header-click',
    'header-contextmenu',
    'sort-change',
    'filter-change',
    'current-change',
    'header-dragend',
    'expand-change',
  ],
  setup(props, { emit }) {
  }
});
</script>

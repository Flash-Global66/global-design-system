<template>
  <tfoot>
    <tr v-for="(sums, rowIndex) in [getSums()]" :key="rowIndex">
      <td
        v-for="(column, cellIndex) in columns"
        :key="column.id"
        :colspan="column.colSpan"
        :rowspan="column.rowSpan"
        :class="getCellClasses(columns, cellIndex)"
        :style="getCellStyles(column, cellIndex)"
      >
        <div :class="['cell', column.labelClassName]">
          <VNodeRenderer :vnode="sums[cellIndex]" />
        </div>
      </td>
    </tr>
  </tfoot>
</template>

<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { VNodeRenderer } from '../../shared/utils/render.util';
import { tableFooterProps } from './defaults';
import { useTableFooter } from './useTableFooter';

defineOptions({
  name: 'GTableFooter',
});

const props = defineProps(tableFooterProps);

const { columns, getCellClasses, getCellStyles, getSums } =
  useTableFooter(props);
</script>

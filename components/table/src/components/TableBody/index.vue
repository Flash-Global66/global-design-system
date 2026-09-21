<template>
  <tbody :tabindex="-1">
    <template v-for="trDescriptor in renderRows" :key="trDescriptor.key">
      <tr
        v-if="trDescriptor.type === 'row'"
        :style="trDescriptor.style"
        :class="trDescriptor.class"
        @dblclick="trDescriptor.onDblclick"
        @click="trDescriptor.onClick"
        @contextmenu="trDescriptor.onContextmenu"
        @mouseenter="trDescriptor.onMouseenter"
        @mouseleave="trDescriptor.onMouseleave"
      >
        <TdWrapper
          v-for="cell in trDescriptor.cells"
          :key="cell.key"
          :style="cell.style"
          :class="cell.class"
          :rowspan="cell.rowspan"
          :colspan="cell.colspan"
          @mouseenter="cell.onMouseenter"
          @mouseleave="cell.onMouseleave"
        >
          <component :is="cell.render" />
        </TdWrapper>
      </tr>
      <tr v-else :style="trDescriptor.style">
        <td :colspan="trDescriptor.colspan" :class="trDescriptor.cellClass">
          <component :is="trDescriptor.render" />
        </td>
      </tr>
    </template>
  </tbody>
</template>

<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import TdWrapper from '../TdWrapper/index.vue';
import { tableBodyProps } from './defaults';
import { useTableBody } from './useTableBody';

defineOptions({
  name: 'GTableBody',
});

const props = defineProps(tableBodyProps);

const { renderRows } = useTableBody(props);
</script>

<template>
  <div>
    <slot v-bind="{ row: {}, column: {}, $index: -1 }" />
  </div>
</template>

<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useSlots } from 'vue';
import useTableColumn from './useTableColumn';
import { tableColumnProps } from './defaults';

defineOptions({
  name: 'GTableColumn',
});

const props = defineProps(tableColumnProps);
const slots = useSlots();

useTableColumn(props, slots);
</script>

<style lang="scss" src="./tableColumn.style.scss"></style>

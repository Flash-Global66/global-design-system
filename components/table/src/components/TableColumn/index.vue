<template>
  <component :is="renderChildren" />
</template>

<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useSlots } from 'vue';
import { useTableColumn } from './useTableColumn';
import { renderColumnChildren } from './utils/columnChildren.util';
import { tableColumnProps } from './constants/tableColumn.constant';

defineOptions({
  name: 'GTableColumn',
});

const props = defineProps(tableColumnProps);
const slots = useSlots();

useTableColumn(props, slots);

// Referencia estable: <component :is> remonta el subárbol si la función cambia entre renders.
const renderChildren = () => renderColumnChildren(slots);
</script>

<style lang="scss" src="./tableColumn.style.scss"></style>

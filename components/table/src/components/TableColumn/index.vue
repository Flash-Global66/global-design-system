<template>
  <component :is="renderColumnChildren" />
</template>

<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Fragment, h, useSlots } from 'vue';
import { isArray, isString } from '@flash-global66/g-utils';
import { useTableColumn } from './useTableColumn';
import { tableColumnProps } from './defaults';

defineOptions({
  name: 'GTableColumn',
});

const props = defineProps(tableColumnProps);
const slots = useSlots();

useTableColumn(props, slots);

// TableColumn no renderiza la celda real (eso lo hace TableBody contra la fila
// real): esta invocación es solo para descubrir columnas hijas anidadas
// (<g-table-column> de un grupo) o componentes con estado propio. El slot del
// consumidor puede asumir una `row` real y tirar contra el `row: {}` fantasma
// de acá — se envuelve en try/catch y se filtra texto/slots dinámicos, igual
// que el render() que reemplaza (components/table/src/components/TableColumn/index.ts
// antes de la migración a SFC).
function renderColumnChildren() {
  try {
    const renderDefault = slots.default?.({ row: {}, column: {}, $index: -1 });
    const children = [];
    if (isArray(renderDefault)) {
      for (const childNode of renderDefault) {
        if (
          childNode.type?.name === 'GTableColumn' ||
          childNode.shapeFlag & 2
        ) {
          children.push(childNode);
        } else if (childNode.type === Fragment && isArray(childNode.children)) {
          childNode.children.forEach(vnode => {
            if (vnode?.patchFlag !== 1024 && !isString(vnode?.children)) {
              children.push(vnode);
            }
          });
        }
      }
    }
    return h('div', children);
  } catch {
    return h('div', []);
  }
}
</script>

<style lang="scss" src="./tableColumn.style.scss"></style>

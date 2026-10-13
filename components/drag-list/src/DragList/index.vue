<script lang="ts" setup>
import { useNamespace } from '@flash-global66/g-utils';
import { dragListEmits, dragListProps } from './constants/drag-list.constant';

defineOptions({ name: 'GDragList' });

defineProps(dragListProps);
defineEmits(dragListEmits);

const ns = useNamespace('drag-list');
</script>

<template>
  <div :class="ns.b()" />
</template>

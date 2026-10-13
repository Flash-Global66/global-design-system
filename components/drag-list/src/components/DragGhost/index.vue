<script lang="ts" setup>
import { GTeleport } from '@flash-global66/g-teleport';
import { dragGhostProps } from './constants/drag-ghost.constant';
import { useDragGhost } from './useDragGhost';

defineOptions({ name: 'GDragListGhost' });

const props = defineProps(dragGhostProps);

const { isVisible, style, ns } = useDragGhost(props);
</script>

<template>
  <g-teleport to="body">
    <div v-if="isVisible" :class="ns.b()" :style="style" aria-hidden="true">
      <slot />
    </div>
  </g-teleport>
</template>

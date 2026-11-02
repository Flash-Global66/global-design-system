<script lang="ts" setup>
import { GIconFont } from '@flash-global66/g-icon-font';
import { dropOverlayProps } from './constants/drop-overlay.constant';
import { useDropOverlay } from './useDropOverlay';

defineOptions({ name: 'GDragListDropOverlay' });

const props = defineProps(dropOverlayProps);

const { ns, overlayClass, iconName } = useDropOverlay(props);
</script>

<template>
  <div :class="overlayClass" aria-hidden="true">
    <slot name="drop-overlay" :action="action">
      <g-icon-font :class="ns.e('icon')" :name="iconName" />
      <span v-if="text" :class="ns.e('text')">{{ text }}</span>
    </slot>
  </div>
</template>

<style lang="scss" src="./drop-overlay.style.scss"></style>

<script lang="ts" setup>
import { flowNodeProps } from './constants/flow-node.constant';
import { useFlowNode } from './useFlowNode';

defineOptions({ name: 'GDragListFlowNode' });

defineProps(flowNodeProps);

const { ns } = useFlowNode();
</script>

<template>
  <div :class="ns.b()" data-no-drag>
    <slot>
      <span :class="ns.e('label')">{{ label }}</span>
    </slot>
  </div>
</template>

<style lang="scss" src="./flow-node.style.scss" />

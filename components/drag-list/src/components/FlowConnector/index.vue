<script lang="ts" setup>
import { GIconFont } from '@flash-global66/g-icon-font';
import { flowConnectorProps } from './constants/flow-connector.constant';
import { useFlowConnector } from './useFlowConnector';

defineOptions({ name: 'GDragListFlowConnector' });

const props = defineProps(flowConnectorProps);

const { ns, connectorClass } = useFlowConnector(props);
</script>

<template>
  <div :class="connectorClass" aria-hidden="true" data-no-drag>
    <slot :direction="direction">
      <g-icon-font :class="ns.e('icon')" name="regular arrow-right" />
    </slot>
  </div>
</template>

<style lang="scss" src="./flow-connector.style.scss" />

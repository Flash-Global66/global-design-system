<template>
  <slot v-bind="cell">
    <div :class="ns.b()">
      <span :class="ns.e('text')">{{ cell?.renderText ?? cell?.text }}</span>
    </div>
  </slot>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useNamespace } from '@flash-global66/g-utils';
import { basicCellProps } from '../props/basic-cell';

export default defineComponent({
  name: 'GDatePickerCell',
  props: basicCellProps,
  setup(props) {
    const ns = useNamespace('date-table-cell');

    return {
      ns,
      cell: props.cell,
    };
  },
});
</script>

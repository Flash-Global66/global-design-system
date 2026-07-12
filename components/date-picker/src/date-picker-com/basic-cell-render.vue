<template>
  <slot v-bind="cell">
    <div :class="ns.b()">
      <span :class="ns.e('text')">{{ cell?.renderText ?? cell?.text }}</span>
    </div>
  </slot>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import { useNamespace } from '@flash-global66/g-utils';
import { ROOT_PICKER_INJECTION_KEY } from '../constants';
import { basicCellProps } from '../props/basic-cell';

export default defineComponent({
  name: 'GDatePickerCell',
  props: basicCellProps,
  setup(props) {
    const ns = useNamespace('date-table-cell');
    inject(ROOT_PICKER_INJECTION_KEY);

    return {
      ns,
      cell: props.cell,
    };
  },
});
</script>

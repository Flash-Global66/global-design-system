<template>
  <slot v-bind="cell">
    <div :class="ns.b()">
      <span :class="ns.e('text')">{{ cell?.renderText ?? cell?.text }}</span>
    </div>
  </slot>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from "vue";
import { useNamespace } from "element-plus/es/hooks/index";
import { ROOT_PICKER_INJECTION_KEY } from "../constants";
import { basicCellProps } from "../props/basic-cell";

export default defineComponent({
  name: "GDatePickerCell",
  props: basicCellProps,
  setup(props) {
    const ns = useNamespace("date-table-cell", ref("gui"));
    const { slots } = inject(ROOT_PICKER_INJECTION_KEY)!;

    return {
      ns,
      cell: props.cell,
    };
  },
});
</script>

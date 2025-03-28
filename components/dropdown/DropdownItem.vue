<template>
  <el-dropdown-item v-bind="{ ...$attrs, ...$props }">
    <!--
      @slot customize of Dropdown Item
    -->
    <slot />
  </el-dropdown-item>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import type { Component } from 'vue'
import { ElDropdownItem } from "element-plus";

export default defineComponent({
  name: 'GSkeleton',
  components: {
    ElDropdownItem,
  },
  props: {
    /**
     * 	a command to be dispatched to Dropdown's `command` callback
    */
    command: {
      type: [Object, String, Number],
      default: () => ({}),
    },
    /**
     * whether the item is disabled
    */
    disabled: Boolean,
    /**
     * whether a divider is displayed
    */
    divided: Boolean,
    /**
     * text
     */
    textValue: String,
    /**
     * custom icon `string | Component`
    */
    icon: {
      type: [
        String,
        Object,
        Function,
      ] as PropType<Component>,
    },
  },
});
</script>

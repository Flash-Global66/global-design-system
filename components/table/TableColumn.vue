<template>
  <el-table-column
    v-bind="{ ...$attrs, ...$props }"
  >

    <!--
      @slot Custom content for table columns. The scope parameter is { row, column, $index }
    -->
    <!--
      @slot Custom content for table header. The scope parameter is { column, $index }
    -->
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
    
  </el-table-column>
</template>

<script lang="ts">
import { Component, defineComponent, PropType } from 'vue';
import {
  ElTableColumn,
} from "element-plus";

export default defineComponent({
  name: 'GTableColumn',
  components: {
    ElTableColumn,
  },
  props: {
    prop: {
      type: String,
      default: '',
    },
  },
  setup(props, { emit }) {
  }
});
</script>

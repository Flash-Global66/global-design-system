<template>
  <el-dropdown-menu>
    <!--
      @slot content of Dropdown Menu
    -->
    <slot />
  </el-dropdown-menu>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ElDropdownMenu } from "element-plus";

export default defineComponent({
  name: 'GDropdownMenu',
  components: {
    ElDropdownMenu,
  },
  props: {
    onKeydown: {
      type: Function as PropType<(e: KeyboardEvent) => void>
    },
  },
});
</script>

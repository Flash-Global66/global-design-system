<template>
  <el-menu-item-group
    v-bind="{ ...$attrs, ...$props }"
    @click="$emit('click')"
    :show-close="false"
  >

    <!--
      @slot Menu Group Content
    -->
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </el-menu-item-group>
</template>

<script lang="ts">
import { Component, defineComponent, PropType } from 'vue';
import {
  ElMenuItemGroup,
} from "element-plus";

import type { RouteLocationRaw } from 'vue-router';

export default defineComponent({
  name: 'GMenuItem',
  components: {
    ElMenuItemGroup,
  },
  props: {
    index: {
      type: String as PropType<string | null>,
      default: null,
    },
    route: {
      type: Object as PropType<RouteLocationRaw | string>,
    },
    disabled: Boolean,
  },
});
</script>

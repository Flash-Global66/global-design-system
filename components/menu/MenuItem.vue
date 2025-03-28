<template>
  <el-menu-item
    v-bind="{ ...$attrs, ...$props }"
    @click="$emit('click')"
    :show-close="false"
  >

    <!--
      @slot Menu Item Content
    -->
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </el-menu-item>
</template>

<script lang="ts">
import { Component, defineComponent, PropType } from 'vue';
import {
  ElMenuItem,
} from "element-plus";

import type { RouteLocationRaw } from 'vue-router';

export default defineComponent({
  name: 'GMenuItem',
  components: {
    ElMenuItem,
  },
  emits: [
    /**
     * click event
     */
    'click',
  ],
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

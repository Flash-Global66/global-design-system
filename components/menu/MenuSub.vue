<template>
  <el-sub-menu
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
  </el-sub-menu>
</template>

<script lang="ts">
import { Component, defineComponent, PropType } from 'vue';
import {
  ElSubMenu,
} from "element-plus";

import type { RouteLocationRaw } from 'vue-router';

export default defineComponent({
  name: 'GMenuItem',
  components: {
    ElSubMenu,
  },
  props: {
    index: {
      type: String,
      required: true,
    },
    showTimeout: {
      type: Number,
      default: 300,
    },
    hideTimeout: {
      type: Number,
      default: 300,
    },
    popperClass: String,
    disabled: Boolean,
    popperAppendToBody: {
      type: Boolean,
      default: undefined,
    },
    teleported: {
      type: Boolean,
      default: undefined,
    },
    popperOffset: {
      type: Number,
      default: 6,
    },
    // expandCloseIcon: {
    //   type: iconPropType,
    // },
    // expandOpenIcon: {
    //   type: iconPropType,
    // },
    // collapseCloseIcon: {
    //   type: iconPropType,
    // },
    // collapseOpenIcon: {
    //   type: iconPropType,
    // },
  },
});
</script>

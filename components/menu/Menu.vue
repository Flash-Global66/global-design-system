<template>
  <div class="gui-menu-wrapper">
    <el-menu
      v-bind="{ ...$attrs, ...$props }"
      @open="(e) => $emit('open', e)"
      @close="(e) => $emit('close', e)"
      @select="(e) => $emit('select', e)"
    >
      <!--
        @slot Menu Content
      -->
      <template v-for="(_, name) in $slots" #[name]="slotData">
        <slot :name="name" v-bind="slotData || {}" />
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { Component, defineComponent, PropType } from "vue";
import { ElMenu } from "element-plus";

export default defineComponent({
  name: "GMenu",
  components: {
    ElMenu,
  },
  emits: [
    /**
     * open a specific sub-menu. Params:index: index of the sub-menu to open
     */
    "open",
    /**
     * close a specific sub-menu. Params:	index: index of the sub-menu to close
     */
    "close",
    "select",
  ],
  props: {
    /**
     * index of active menu on page load
     */
    defaultActive: {
      type: String,
      default: "",
    },
    /**
     * array that contains indexes of currently active sub-menus
     */
    defaultOpeneds: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
    /**
     * whether only one sub-menu can be active
     */
    uniqueOpened: Boolean,
    /**
     * whether vue-router mode is activated. If true, index will be used as 'path' to activate the route action. Use with default-active to set the active item on load.
     */
    router: Boolean,
    /**
     * whether the menu is collapsed
     */
    collapse: Boolean,
    /**
     * 	whether to enable the collapse transition
     */
    collapseTransition: {
      type: Boolean,
      default: true,
    },
  },
  setup(_, { emit }) {
    return {
      onOpen: () => {
        emit("open");
      },
    };
  },
});
</script>

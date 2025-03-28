<template>
  <el-drawer
    v-bind="{ ...$attrs, ...$props }"
    @open="$emit('open')"
    @opened="$emit('opened')"
    @close="$emit('close')"
    @closed="$emit('closed')"
  >

    <!--
      @slot Drawer's Content
    -->
    <slot />

    <template #header>
      <!--
        @slot Drawer header section; Replacing this removes the title, but does not remove the close button.
      -->
      <slot name="header" />
    </template>
    <template #footer>
      <!--
        @slot Drawer footer Section.
      -->
      <slot name="footer" />
    </template>
  </el-drawer>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import {
  ElDrawer,
  DialogBeforeCloseFn,
} from "element-plus";

export default defineComponent({
  name: 'GDrawer',
  components: {
    ElDrawer,
  },
  emits: [
    /**
     * Triggered before Drawer opening animation begins
     */
    'open',
    /**
     * Triggered after Drawer opening animation ended
     */
    'opened',
    /**
     * Triggered before Drawer closing animation begins
     */
    'close',
    /**
     * 	Triggered after Drawer closing animation ended
     */
    'closed',
  ],
  props: {
    appendToBody: {
      type: Boolean,
      default: false,
    },
    beforeClose: {
      type: Function as PropType<DialogBeforeCloseFn>,
    },
    destroyOnClose: {
      type: Boolean,
      default: false,
    },
    closeOnClickModal: {
      type: Boolean,
      default: true,
    },
    closeOnPressEscape: {
      type: Boolean,
      default: true,
    },
    lockScroll: {
      type: Boolean,
      default: true,
    },
    modal: {
      type: Boolean,
      default: true,
    },
    openDelay: {
      type: Number,
      default: 0,
    },
    closeDelay: {
      type: Number,
      default: 0,
    },
    top: {
      type: String,
    },
    modalClass: String,
    width: {
      type: [String, Number],
    },
    zIndex: {
      type: Number,
    },
    trapFocus: {
      type: Boolean,
      default: false,
    },
    direction: {
      type: String,
      default: 'rtl',
    },
    size: {
      type: [String, Number],
      default: '30%',
    },
    withHeader: {
      type: Boolean,
      default: true,
    },
    modalFade: {
      type: Boolean,
      default: true,
    },
  },
});
</script>

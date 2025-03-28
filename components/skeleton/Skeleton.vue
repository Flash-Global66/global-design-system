<template>
  <el-skeleton
    v-bind="{ ...$attrs, ...$props }"
  >
    <!--
      @slot Real rendering DOM
    -->
    <slot />

    <template #template>
      <!--
        @slot Custom rendering skeleton template
      -->
      <slot name="template" />
    </template>
  </el-skeleton>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  ElSkeleton,
} from "element-plus";

export default defineComponent({
  name: 'GSkeleton',
  components: {
    ElSkeleton,
  },
  props: {
    /**
     * whether showing the animation
    */
    animated: {
      type: Boolean,
      default: false,
    },
    /**
     * how many fake items to render to the DOM
    */
    count: {
      type: Number,
      default: 1,
    },
    /**
     * numbers of the row, only useful when no template slot were given
    */
    rows: {
      type: Number,
      default: 3,
    },
    /**
     * Rendering delay in milliseconds
    */
    throttle: {
      type: Number,
    },
  },
});
</script>

<template>
  <el-skeleton-item
    v-bind="{ ...$attrs, ...$props }"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import {
  ElSkeletonItem,
} from "element-plus";
import { SkeletonVariant } from './skeleton.type';

export default defineComponent({
  name: 'GSkeletonItem',
  components: {
    ElSkeletonItem,
  },
  props: {
    /**
     * The current rendering skeleton type
     * `'circle' | 'rect' | 'h1' | 'h3' | 'text' | 'caption' | 'p' | 'image' | 'button'`
    */
    variant: {
      type: String as PropType<SkeletonVariant>,
      default: 'text',
    },
  },
});
</script>

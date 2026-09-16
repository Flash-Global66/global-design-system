<template>
  <div :class="[ns.e('item'), ns.e(variant)]">
    <!--
      Byte-exact port of element-plus's `PictureFilled` icon glyph
      (@element-plus/icons-vue), inlined so the `image` variant keeps its
      exact visual output without importing element-plus.
    -->
    <svg
      v-if="variant === 'image'"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
    >
      <path
        fill="currentColor"
        d="M96 896a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h832a32 32 0 0 1 32 32v704a32 32 0 0 1-32 32zm315.52-228.48-68.928-68.928a32 32 0 0 0-45.248 0L128 768.064h778.688l-242.112-290.56a32 32 0 0 0-49.216 0L458.752 665.408a32 32 0 0 1-47.232 2.112M256 384a96 96 0 1 0 192.064-.064A96 96 0 0 0 256 384"
      />
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { useNamespace } from '@flash-global66/g-utils';

// TYPES
import { SkeletonVariant } from './skeleton.type';

export default defineComponent({
  name: 'GSkeletonItem',
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
  setup() {
    const ns = useNamespace('skeleton');

    return {
      ns,
    };
  },
});
</script>

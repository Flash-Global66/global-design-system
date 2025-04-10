<template>
  <button
    type="button"
    :class="ns.e('btn-prev')"
    :disabled="internalDisabled"
    aria-label="previous"
    :aria-disabled="internalDisabled"
    @click="$emit('click', $event)"
  >
    <g-icon-font name="regular angle-left" />
  </button>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { GIconFont } from "@flash-global66/g-icon-font";
import { paginationPrevEmits, paginationPrevProps } from "./prev";
import { useNamespace } from "element-plus";

defineOptions({
  name: "GPaginationPrev",
});

const props = defineProps(paginationPrevProps);
defineEmits(paginationPrevEmits);

const ns = useNamespace("pagination");

const internalDisabled = computed(
  () => props.disabled || props.currentPage <= 1
);
</script>

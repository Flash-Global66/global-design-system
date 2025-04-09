<template>
  <button
    type="button"
    :class="ns.e('btn-next')"
    :disabled="internalDisabled"
    aria-label="next"
    :aria-disabled="internalDisabled"
    @click="$emit('click', $event)"
  >
    <g-icon-font name="regular angle-right" />
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { GIconFont } from '@flash-global66/g-icon-font'
import { paginationNextProps } from './next'
import { useNamespace } from 'element-plus'

defineOptions({
  name: 'GPaginationNext',
})

const props = defineProps(paginationNextProps)

const ns = useNamespace('pagination')

defineEmits(['click'])

const internalDisabled = computed(
  () =>
    props.disabled ||
    props.currentPage === props.pageCount ||
    props.pageCount === 0
)
</script>

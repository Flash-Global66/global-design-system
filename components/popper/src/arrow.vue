<template>
  <span
    ref="arrowRef"
    :class="ns.e('arrow')"
    :style="arrowStyle"
    data-popper-arrow
  />
</template>

<script lang="ts" setup>
import { inject, onBeforeUnmount, watch } from 'vue'
import { useNamespace } from 'element-plus'
import { POPPER_CONTENT_INJECTION_KEY } from './constants'
import { popperArrowProps } from './arrow'

defineOptions({
  name: 'GPopperArrow',
  inheritAttrs: false,
})

const props = defineProps(popperArrowProps)

const ns = useNamespace('popper')
const { arrowOffset, arrowRef, arrowStyle } = inject(
  POPPER_CONTENT_INJECTION_KEY,
  undefined
)!

watch(
  () => props.arrowOffset,
  (val) => {
    arrowOffset.value = val
  }
)
onBeforeUnmount(() => {
  arrowRef.value = undefined
})

defineExpose({
  /**
   * @description Arrow element
   */
  arrowRef,
})
</script>

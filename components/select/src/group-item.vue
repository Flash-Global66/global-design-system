<template>
  <div
    :class="ns.be('group', 'title')"
    :style="style"
    :ref="(el) => measureElement?.(el as HTMLElement | null)"
  >
    {{ item.title }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useNamespace } from 'element-plus'
import type { CSSProperties, PropType } from 'vue'

export default defineComponent({
  props: {
    item: {
      type: Object,
      required: true
    },
    style: {
      type: Object as PropType<CSSProperties>
    },
    height: Number,
    measureElement: {
      type: Function as PropType<(el: HTMLElement | null) => void>,
      default: undefined
    }
  },
  setup(props) {
    const ns = useNamespace('select')
    return {
      ns,
      measureElement: props.measureElement
    }
  }
})
</script>

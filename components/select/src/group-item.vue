<template>
  <div
    :class="ns.be('group', 'title')"
    :style="style"
    :ref="el => measureElement?.(el as HTMLElement | null)"
  >
    {{ item.title }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useNamespace } from '@flash-global66/g-utils';
import type { CSSProperties, PropType } from 'vue';

export default defineComponent({
  props: {
    item: {
      type: Object,
      required: true,
    },
    style: {
      type: Object as PropType<CSSProperties>,
    },
    height: Number,
    measureElement: {
      type: Function as PropType<(el: HTMLElement | null) => void>,
      default: undefined,
    },
  },
  setup() {
    const ns = useNamespace('select');
    // `measureElement` ya es una prop declarada, así que el template accede
    // a ella directamente (Vue expone las props declaradas en el contexto
    // del template sin necesidad de retornarlas desde `setup()`). Retornarla
    // aquí era una duplicación inofensiva pero disparaba `vue/no-dupe-keys`
    // — deuda pre-existente descubierta al quitar el exclude de ESLint de
    // `select` (misma clase de hallazgo que el `emit` sin usar de WU-7/dialog).
    return {
      ns,
    };
  },
});
</script>

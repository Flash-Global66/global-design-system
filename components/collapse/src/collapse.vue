<template>
  <div :class="rootKls">
    <div v-if="props.items.length > 0" :class="rootKls">
      <g-collapse-item
        v-for="(item, index) in props.items"
        :key="item.name || index"
        v-bind="item"
        :name="item.name || index"
        :expand-icon-position="expandIconPosition"
      >
        <template #default="slotData">
          <slot v-bind="slotData" :item="item" />
        </template>
      </g-collapse-item>
    </div>
    <slot name="dynamic" v-else />
  </div>
</template>

<script lang="ts" setup>
import { collapseEmits, collapseProps } from './collapse'
import { useCollapse, useCollapseDOM } from './use-collapse'
import GCollapseItem from './collapse-item.vue'

defineOptions({
  name: 'GCollapse'
})
const props = defineProps(collapseProps)
const emit = defineEmits(collapseEmits)

const { activeNames, setActiveNames } = useCollapse(props, emit)

const { rootKls, expandIconPosition } = useCollapseDOM(props)

defineExpose({
  /** @description active names */
  activeNames,
  /** @description set active names */
  setActiveNames
})
</script>

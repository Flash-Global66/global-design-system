<template>
  <a
    :class="linkKls"
    :href="disabled || !href ? undefined : href"
    :target="disabled || !href ? undefined : target"
    @click="handleClick"
  >
    <!-- Left Icon -->
    <g-icon-font 
      v-if="iconLeft" 
      :name="iconLeft" 
      :class="ns.e('icon-left')"
    />
    
    <!-- Content / Text -->
    <span :class="ns.e('inner')">
      <slot />
    </span>
    
    <!-- Right Icon -->
    <g-icon-font 
      v-if="iconRight" 
      :name="iconRight" 
      :class="ns.e('icon-right')"
    />

    <!-- Custom Icon Slot -->
    <slot v-if="$slots.icon" name="icon" />
  </a>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { GIconFont } from "@flash-global66/g-icon-font";
import { useNamespace } from "element-plus";
import { linkEmits, linkProps } from './link'

defineOptions({
  name: 'GLink',
})
const props = defineProps(linkProps)
const emit = defineEmits(linkEmits)

const ns = useNamespace('link')

const linkKls = computed(() => [
  ns.b(),
  ns.m(props.type),
  ns.m(props.size),
  ns.m(props.status),
  ns.is('disabled', props.disabled),
  ns.is('underline', props.underline && !props.disabled),
])

function handleClick(event: MouseEvent) {
  if (!props.disabled) emit('click', event)
}
</script>

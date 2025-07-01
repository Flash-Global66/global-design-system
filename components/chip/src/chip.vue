<template>
  <g-dropdown
    v-bind="dropdownProps"
    :disabled="disabled || !dropdownEnabled"
    @command="handleCommand"
  >
    <span
      :class="containerKls"
      :tabindex="disabled ? -1 : 0"
      @click="handleClick"
      @keydown.enter="handleClick"
      @keydown.space="handleClick"
      role="button"
      :aria-pressed="selected ? 'true' : 'false'"
      :aria-disabled="disabled ? 'true' : 'false'"
      :title="text"
    >
      <slot v-if="$slots.prefix || prefixIcon" name="prefix">
        <span v-if="prefixIcon" :class="ns.em(size, 'prefix-icon')">
          <g-icon-font :name="prefixIcon" />
        </span>
      </slot>
      <span :class="ns.e('content')">
        <span v-if="text">{{ text }}</span>
        <slot v-else />
      </span>
      <slot name="suffix" v-if="$slots.suffix || suffixIcon || closable">
        <span v-if="suffixIcon && !closable" :class="ns.em(size, 'suffix-icon')">
          <g-icon-font :name="suffixIcon" />
        </span>
        <span
          v-else-if="closable"
          @click.stop="handleClose"
          :class="[ns.em(size, 'suffix-icon'), ns.e('close')]"
          :aria-label="`Remove ${text}`"
        >
          <g-icon-font name="regular times" />
        </span>
      </slot>
    </span>
    <template #dropdown>
      <slot name="dropdown" />
    </template>
  </g-dropdown>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useNamespace } from 'element-plus'
import { GIconFont } from '@flash-global66/g-icon-font'
import { GDropdown } from '@flash-global66/g-dropdown'
import { chipEmits, chipProps } from './chip'

defineOptions({
  name: 'GChip'
})

const props = defineProps(chipProps)
const emit = defineEmits(chipEmits)

const ns = useNamespace('chip')

const containerKls = computed(() => {
  const { variant, size, selected, disabled, type } = props
  
  return [
    ns.b(),
    ns.m(type),
    ns.m(variant),
    ns.e(size),
    ns.is('selected', selected),
    ns.is('disabled', disabled)
  ]
})

const dropdownProps = computed(() => ({
  actions: props.dropdownActions,
  'hide-on-click': props.dropdownHideOnClick,
  placement: props.dropdownPlacement,
  'show-timeout': props.dropdownShowTimeout,
  'hide-timeout': props.dropdownHideTimeout,
  trigger: props.dropdownTrigger,
}))

const handleClose = (event: MouseEvent) => {
  emit('close', event)
}

const handleClick = (event: MouseEvent | KeyboardEvent) => {
  if (!props.disabled) emit('click', event)
}

const handleCommand = (command: any) => {
  emit('command', command)
}
</script>

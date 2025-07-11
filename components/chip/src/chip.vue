<template>
  <g-dropdown
    v-bind="dropdownProps"
    :disabled="disabled || !dropdownEnabled"
    @command="handleCommand"
    @visible-change="handleDropdownVisibleChange"
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
      <slot v-if="$slots.prefix || iconLeft" name="prefix">
        <span v-if="iconLeft" :class="ns.em(size, 'prefix-icon')">
          <g-icon-font :name="iconLeft" />
        </span>
      </slot>
      <span :class="ns.e('content')">
        <span v-if="text">{{ text }}</span>
        <slot v-else />
      </span>
      <slot name="suffix" v-if="$slots.suffix || iconRight || closable || dropdownEnabled">
        <span v-if="iconRight && !closable && !dropdownEnabled" :class="ns.em(size, 'suffix-icon')">
          <g-icon-font :name="iconRight" />
        </span>
        <span v-else-if="dropdownEnabled && !closable" :class="[ns.em(size, 'suffix-icon'), ns.e('dropdown-icon')]">
          <g-icon-font :name="dropdownVisible ? 'regular chevron-up' : 'regular chevron-down'" />
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
import { computed, ref } from 'vue'
import { useNamespace } from 'element-plus'
import { GIconFont } from '@flash-global66/g-icon-font'
import { GDropdown } from '@flash-global66/g-dropdown'
import { chipEmits, chipProps, type DropdownCommand } from './chip'

defineOptions({
  name: 'GChip'
})

const props = defineProps(chipProps)
const emit = defineEmits(chipEmits)

const ns = useNamespace('chip')
const dropdownVisible = ref(false)

const dropdownProps = computed(() => {
  const {
    type, variant, size, iconLeft, iconRight, closable,
    text, selected, disabled, dropdownEnabled,
    ...dropdownProps
  } = props
  
  return dropdownProps
})

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

const handleClose = (event: MouseEvent) => {
  emit('close', event)
}

const handleClick = (event: MouseEvent | KeyboardEvent) => {
  if (!props.disabled) emit('click', event)
}

const handleCommand = (command: DropdownCommand) => {
  emit('command', command)
}

const handleDropdownVisibleChange = (visible: boolean) => {
  dropdownVisible.value = visible
  emit('visible-change', visible)
}
</script>

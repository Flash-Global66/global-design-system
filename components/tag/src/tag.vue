<template>
  <span v-if="disableTransitions" :class="containerKls" @click="handleClick">
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
      >
        <g-icon-font name="regular times" />
      </span>
    </slot>
  </span>
  <transition
    v-else
    :name="`${ns.namespace.value}-zoom-in-center`"
    appear
    @vue:mounted="handleVNodeMounted"
  >
    <span :class="containerKls" @click="handleClick">
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
        >
          <g-icon-font name="regular times" />
        </span>
      </slot>
    </span>
  </transition>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { VNode } from 'vue'

import { useNamespace } from 'element-plus'
import { GIconFont } from '@flash-global66/g-icon-font'
import { tagEmits, tagProps } from './tag'

defineOptions({
  name: 'GTag'
})
const props = defineProps(tagProps)
const emit = defineEmits(tagEmits)

const ns = useNamespace('tag')

const containerKls = computed(() => {
  const { type, effect, closable, size } = props
  return [
    ns.b(),
    ns.is('closable', closable),
    ns.e(type || 'grey'),
    ns.e(size),
    ns.em(effect, type || 'grey')
  ]
})

// methods
const handleClose = (event: MouseEvent) => {
  emit('close', event)
}

const handleClick = (event: MouseEvent) => {
  emit('click', event)
}

const handleVNodeMounted = (vnode: VNode) => {
  // @ts-ignore
  if (vnode?.component?.subTree?.component?.bum) {
    // @ts-ignore
    vnode.component.subTree.component.bum = null
  }
}
</script>

<template>
  <component :is="componentId" ref="_ref" v-bind="allAttrs" :class="classes">
    <div :class="ns.e('content')">
      <div :class="{ invisible: loading }">
        <g-icon-font v-if="shouldShowLeftIcon" :name="iconLeft" :class="ns.e('icon-left')" />
        <span :class="ns.e('title')">
          <slot>{{ title }}</slot>
        </span>
        <g-icon-font v-if="shouldShowRightIcon" :name="iconRight" :class="ns.e('icon-right')" />
      </div>

      <!-- Loading State -->
      <div v-if="loading" :class="ns.e('loader')" role="status" aria-live="polite">
        <div :class="ns.e('dot')"></div>
        <div :class="ns.e('dot')"></div>
        <div :class="ns.e('dot')"></div>
      </div>
    </div>

    <!-- Ripple Elements -->
    <transition-group name="ripple">
      <div
        v-for="ripple in ripples"
        :key="ripple.id"
        :class="ns.e('ripple')"
        :style="{
          left: ripple.x + 'px',
          top: ripple.y + 'px'
        }"
        @animationend="removeRipple(ripple.id)"
      />
    </transition-group>
  </component>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useNamespace } from "element-plus";
import { buttonEmits, buttonProps, validateButtonProps } from "./button";
import { GIconFont } from "@flash-global66/g-icon-font";
import { useButton } from "./use-button";

const props = defineProps(buttonProps)
const emit = defineEmits(buttonEmits)

validateButtonProps(props)

const {
  _ref,
  shouldShowLeftIcon,
  shouldShowRightIcon,
  componentId,
  ripples,
  removeRipple,
  allAttrs
} = useButton(props, emit)

const ns = useNamespace('button', ref('gui'))

const isStandard = computed(
  () => props.type === 'default' && props.color === 'primary' && props.size === 'small'
)

const deprecatedClasses = computed(() => {
  if (!isStandard.value) {
    return [
      props.size && ns.m(props.size),
      props.type !== 'default' ? [ns.m(props.color), ns.m(props.type)] : ns.m(props.color)
    ]
  }
  return []
})

const standardClasses = computed(() => {
  if (isStandard.value) {
    return [props.variant && ns.m(`variant-${props.variant}`)]
  }
  return []
})

const classes = computed(() => {
  return [
    ns.b(),
    ...deprecatedClasses.value,
    ...standardClasses.value,
    ns.is('disabled', props.disabled || props.loading),
    ns.is('href', Boolean(props.href)),
    ns.is('loading', props.loading),
    ns.is('full', props.full)
  ]
    .flat()
    .filter(Boolean)
})
</script>

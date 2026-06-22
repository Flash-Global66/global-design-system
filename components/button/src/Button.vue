<template>
  <component :is="componentId" ref="_ref" v-bind="allAttrs" :class="classes">
    <div :class="ns.e('content')">
      <div :class="{ 'opacity-0': loading }">
        <g-icon-font
          v-if="shouldShowLeftIcon"
          :name="iconLeft"
          :class="ns.e('icon-left')"
        />
        <span :class="ns.e('title')">
          <slot>{{ title }}</slot>
        </span>
        <g-icon-font
          v-if="shouldShowRightIcon"
          :name="iconRight"
          :class="ns.e('icon-right')"
        />
      </div>

      <!-- Loading State -->
      <div
        v-if="loading"
        :class="ns.e('loader')"
        role="status"
        aria-live="polite"
      >
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
          top: ripple.y + 'px',
        }"
        @animationend="removeRipple(ripple.id)"
      />
    </transition-group>
  </component>
</template>

<script setup lang="ts">
import {
  buttonEmits,
  buttonProps,
  validateButtonProps,
} from './props/button.props';
import { GIconFont } from '@flash-global66/g-icon-font';
import { useButton } from './composables/useButton';

const props = defineProps(buttonProps);
const emit = defineEmits(buttonEmits);

validateButtonProps(props);

const {
  _ref,
  shouldShowLeftIcon,
  shouldShowRightIcon,
  componentId,
  ripples,
  removeRipple,
  allAttrs,
  ns,
  classes,
} = useButton(props, emit);
</script>

<template>
  <a
    :class="linkKls"
    :href="disabled || !href ? undefined : href"
    :target="disabled || !href ? undefined : target"
    :role="role"
    :tabindex="tabindex"
    :aria-disabled="ariaDisabled"
    @click="handleClick"
    @keydown="handleKeydown"
  >
    <!-- Left Icon -->
    <g-icon-font v-if="iconLeft" :name="iconLeft" :class="ns.e('icon-left')" />

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
import { GIconFont } from '@flash-global66/g-icon-font';
import { linkEmits, linkProps } from './constants/link.constant';
import { useLink } from './useLink';

defineOptions({
  name: 'GLink',
});
const props = defineProps(linkProps);
const emit = defineEmits(linkEmits);

const {
  ns,
  linkKls,
  role,
  tabindex,
  ariaDisabled,
  handleKeydown,
  handleClick,
} = useLink(props, emit);
</script>

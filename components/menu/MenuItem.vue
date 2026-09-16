<template>
  <li
    role="menuitem"
    tabindex="-1"
    :class="[
      ns.b('item'),
      ns.is('active', active),
      ns.is('disabled', disabled),
    ]"
    @click="handleClick"
  >
    <g-tooltip
      v-if="isFirstLevel && rootMenu.props.collapse && $slots.title"
      :effect="rootMenu.props.popperEffect"
      placement="right"
      :fallback-placements="['left']"
      :persistent="rootMenu.props.persistent"
    >
      <div :class="ns.be('tooltip', 'trigger')">
        <!--
          @slot Menu Item Content
        -->
        <slot />
      </div>
      <template #content>
        <!--
          @slot title shown in the collapsed-mode tooltip
        -->
        <slot name="title" />
      </template>
    </g-tooltip>
    <template v-else>
      <slot />
      <slot name="title" />
    </template>
  </li>
</template>

<script lang="ts" setup>
import {
  computed,
  inject,
  onBeforeUnmount,
  onMounted,
  reactive,
  type PropType,
} from 'vue';
import { useNamespace } from '@flash-global66/g-utils';
import { GTooltip } from '@flash-global66/g-tooltip';

import type { RouteLocationRaw } from 'vue-router';
import {
  assertMenuContext,
  menuContextKey,
  subMenuContextKey,
  type MenuItemRegistered,
} from './constants';

/**
 * Port of element-plus's real `ElMenuItem`
 * (`node_modules/element-plus/es/components/menu/src/menu-item2.mjs`, 2.9.7)
 * onto the shared `menuContextKey`/`subMenuContextKey` context module. Zero
 * `element-plus` import.
 */

defineOptions({
  name: 'GMenuItem',
});

const props = defineProps({
  index: {
    type: String as PropType<string | null>,
    default: null,
  },
  route: {
    type: [String, Object] as PropType<RouteLocationRaw | string>,
  },
  disabled: Boolean,
});

const emit = defineEmits<{
  (e: 'click', item: MenuItemRegistered): void;
}>();

const ns = useNamespace('menu');

const rootMenu = assertMenuContext(
  inject(menuContextKey, undefined),
  'GMenuItem',
  'root menu context',
);
const subMenu = assertMenuContext(
  inject(subMenuContextKey, undefined),
  'GMenuItem',
  'sub menu context',
);

const isFirstLevel = computed(() => subMenu.level === 0);
const itemIndex = computed(() => props.index ?? '');
const indexPath = computed(() => [...subMenu.indexPath, itemIndex.value]);
const active = computed(
  () =>
    itemIndex.value !== '' && itemIndex.value === rootMenu.activeIndex.value,
);

const item = reactive({
  index: itemIndex,
  indexPath,
  active,
}) as unknown as MenuItemRegistered;

const handleClick = () => {
  if (props.disabled) return;
  rootMenu.handleMenuItemClick({
    index: itemIndex.value,
    indexPath: indexPath.value,
    route: props.route,
  });
  emit('click', item);
};

onMounted(() => {
  subMenu.addSubMenu(item);
  rootMenu.addMenuItem(item);
});

onBeforeUnmount(() => {
  subMenu.removeSubMenu(item);
  rootMenu.removeMenuItem(item);
});
</script>

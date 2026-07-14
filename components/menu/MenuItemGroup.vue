<template>
  <li :class="ns.b()" @click="$emit('click')">
    <div :class="ns.e('title')">
      <!--
        @slot title of the menu item group
      -->
      <slot name="title">{{ title }}</slot>
    </div>
    <ul>
      <!--
        @slot Menu Group Content
      -->
      <slot />
    </ul>
  </li>
</template>

<script lang="ts" setup>
import { useNamespace } from '@flash-global66/g-utils';

/**
 * Port of element-plus's real `ElMenuItemGroup`
 * (`node_modules/element-plus/es/components/menu/src/menu-item-group2.mjs`,
 * 2.9.7). Zero `element-plus` import.
 *
 * Purely presentational — does NOT provide or inject any menu context.
 * `inject(subMenuContextKey, ...)` calls made by a `GMenuItem`/`GSubMenu`
 * nested inside a `GMenuItemGroup` transparently bubble through to the
 * nearest real `GMenu`/`GSubMenu` ancestor (Vue's own provide/inject
 * resolution skips components that never called `provide`), matching
 * element-plus's own real behavior where a group never appears in an item's
 * `indexPath`.
 *
 * Deviation vs the pre-migration wrapper: `index`/`route`/`disabled` props
 * are dropped. They were dead, copy-pasted-by-mistake props from
 * `MenuItem.vue`/`MenuSub.vue` — element-plus's real `ElMenuItemGroup` only
 * ever accepts `title`, and no consumer in `../front-b2b` uses
 * `GMenuItemGroup` at all (confirmed via grep), so there is no real usage to
 * preserve.
 */

defineOptions({
  name: 'GMenuItemGroup',
});

defineProps({
  /**
   * title of the group, can be replaced with a `title` slot
   */
  title: String,
});

defineEmits<{
  (e: 'click'): void;
}>();

const ns = useNamespace('menu-item-group');
</script>

<script lang="ts" setup>
import {
  sourcePanelEmits,
  sourcePanelProps,
} from './constants/source-panel.constant';
import { useSourcePanel } from './useSourcePanel';

defineOptions({ name: 'GDragListSourcePanel' });

const props = defineProps(sourcePanelProps);
const emit = defineEmits(sourcePanelEmits);

const { ns, rootRef, rootClass, canAdd, blocks, onAdd } = useSourcePanel(
  props,
  emit,
);

defineExpose({ rootRef });
</script>

<template>
  <div ref="rootRef" :class="rootClass" data-drag-zone="source">
    <div v-if="$slots['source-header']" :class="ns.e('header')">
      <slot name="source-header" />
    </div>
    <div
      v-if="emptyReason"
      :class="ns.e('empty')"
      role="status"
      aria-live="polite"
    >
      <slot name="source-empty" :reason="emptyReason" />
    </div>
    <div v-else :class="ns.e('body')">
      <section
        v-for="block in blocks"
        :key="block.key"
        :class="ns.e('group')"
        :aria-label="block.group?.label || undefined"
      >
        <div v-if="block.group" :class="ns.e('group-header')">
          <slot name="source-group-header" :group="block.group">
            {{ block.group.label }}
          </slot>
        </div>
        <ul :class="ns.e('list')" :aria-label="label || undefined">
          <li
            v-for="entry in block.entries"
            :key="entry.key"
            :class="ns.e('item')"
            :data-drag-index="entry.index"
          >
            <slot
              name="source-item"
              :item="entry.item"
              :can-add="canAdd"
              :add="() => onAdd(entry.item)"
            />
          </li>
        </ul>
      </section>
    </div>
    <slot />
  </div>
</template>

<style lang="scss" src="./source-panel.style.scss"></style>

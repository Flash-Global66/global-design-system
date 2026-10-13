<script lang="ts" setup>
import { computed } from 'vue';
import FlowConnector from '../FlowConnector/index.vue';
import FlowNode from '../FlowNode/index.vue';
import {
  targetPanelEmits,
  targetPanelProps,
} from './constants/target-panel.constant';
import { useTargetPanel } from './useTargetPanel';

defineOptions({ name: 'GDragListTargetPanel' });

const props = defineProps(targetPanelProps);
const emit = defineEmits(targetPanelEmits);

const {
  ns,
  isEmpty,
  listTag,
  hasStartNode,
  hasEndNode,
  hasFinalConnector,
  hasConnectorBefore,
  getEntryKey,
  panelClass,
} = useTargetPanel(props);

const lastIndex = computed(() => props.entries.length - 1);
</script>

<template>
  <div :class="panelClass" data-drag-target-panel>
    <slot name="target-header" />
    <component
      :is="listTag"
      :class="ns.e('list')"
      :aria-label="label"
      data-drag-target-list
    >
      <li v-if="hasStartNode" :class="ns.e('node')" data-no-drag>
        <slot name="start">
          <FlowNode :label="startNode" />
        </slot>
      </li>
      <template v-for="(entry, position) in entries" :key="getEntryKey(entry)">
        <li
          v-if="hasConnectorBefore(position)"
          :class="ns.e('connector')"
          aria-hidden="true"
        >
          <slot name="connector" :direction="direction">
            <FlowConnector :direction="direction" />
          </slot>
        </li>
        <li
          tabindex="0"
          :class="[ns.e('item'), entry.isPlaceholder && 'is-placeholder']"
          :data-drag-index="position"
          @keydown="emit('keydown', $event, position)"
        >
          <slot
            v-if="!entry.isPlaceholder"
            name="target-item"
            :item="entry.item"
            :index="position"
            :position="position + 1"
            :is-first="position === 0"
            :is-last="position === lastIndex"
            :remove="() => emit('remove', position)"
            :move-up="() => emit('move-up', position)"
            :move-down="() => emit('move-down', position)"
          />
          <div v-else :class="ns.e('placeholder')" />
        </li>
      </template>
      <li
        v-if="hasFinalConnector"
        :class="ns.e('connector')"
        aria-hidden="true"
      >
        <slot name="connector" :direction="direction">
          <FlowConnector :direction="direction" />
        </slot>
      </li>
      <li v-if="hasEndNode" :class="ns.e('node')" data-no-drag>
        <slot name="end">
          <FlowNode :label="endNode" />
        </slot>
      </li>
    </component>
    <div v-if="isEmpty" :class="ns.e('empty')">
      <slot name="empty" />
    </div>
    <slot name="overlay" />
  </div>
</template>

<style lang="scss" src="./target-panel.style.scss" />

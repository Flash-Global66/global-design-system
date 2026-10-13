<script lang="ts" setup>
import GDragListDragGhost from '../components/DragGhost/index.vue';
import GDragListDropOverlay from '../components/DropOverlay/index.vue';
import GDragListSourcePanel from '../components/SourcePanel/index.vue';
import GDragListTargetPanel from '../components/TargetPanel/index.vue';
import type { DragListSlots } from '../shared/types/drag-list.type';
import { dragListEmits, dragListProps } from './constants/drag-list.constant';
import { useDragList } from './useDragList';

defineOptions({ name: 'GDragList' });

const props = defineProps(dragListProps);
const emit = defineEmits(dragListEmits);
defineSlots<DragListSlots>();

const {
  ns,
  rootClass,
  getKey,
  exposed,
  texts,
  visibleSource,
  emptyReason,
  previewItems,
  overlayState,
  session,
  sourceEl,
  targetEl,
  announcement,
  handleTargetKeydown,
  getSourceSlotProps,
  getTargetSlotProps,
  add,
  remove,
  move,
} = useDragList(props, emit);

defineExpose(exposed);
</script>

<template>
  <div :class="rootClass" :aria-disabled="disabled || undefined">
    <div
      :ref="el => (sourceEl = el as HTMLElement | null)"
      :class="ns.e('source')"
    >
      <GDragListSourcePanel
        :items="visibleSource"
        :item-key="getKey"
        :empty-reason="emptyReason"
        :is-active-zone="session?.zone === 'source'"
        :is-disabled="disabled"
        :label="texts.sourceLabel"
        :aria-disabled="disabled || undefined"
        @add="item => add(item, undefined, 'button')"
      >
        <template v-if="$slots['source-header']" #source-header>
          <slot name="source-header" />
        </template>
        <template v-if="$slots['source-group-header']" #source-group-header="p">
          <slot name="source-group-header" v-bind="p" />
        </template>
        <template #source-item="p">
          <slot name="source-item" v-bind="p" />
        </template>
        <template v-if="$slots['source-empty']" #source-empty="p">
          <slot name="source-empty" v-bind="p" />
        </template>
        <GDragListDropOverlay
          :action="overlayState.source.action ?? undefined"
          :is-visible="overlayState.source.isVisible"
          :text="texts.overlayRemove"
        >
          <template v-if="$slots['drop-overlay']" #drop-overlay="p">
            <slot name="drop-overlay" v-bind="p" />
          </template>
        </GDragListDropOverlay>
      </GDragListSourcePanel>
    </div>
    <div
      :ref="el => (targetEl = el as HTMLElement | null)"
      :class="ns.e('target')"
    >
      <GDragListTargetPanel
        :entries="previewItems"
        :get-key="getKey"
        :is-ordered="ordered"
        :direction="direction"
        :start-node="startNode"
        :end-node="endNode"
        :has-start-slot="!!$slots.start"
        :has-end-slot="!!$slots.end"
        :is-active-zone="session?.zone === 'target'"
        :is-disabled="disabled"
        :label="texts.targetLabel"
        :aria-disabled="disabled || undefined"
        @remove="index => remove(index, 'button')"
        @move-up="index => move(index, index - 1)"
        @move-down="index => move(index, index + 1)"
        @keydown="handleTargetKeydown"
      >
        <template v-if="$slots['target-header']" #target-header>
          <slot name="target-header" />
        </template>
        <template v-if="$slots.start" #start>
          <slot name="start" />
        </template>
        <template v-if="$slots.connector" #connector="p">
          <slot name="connector" v-bind="p" />
        </template>
        <template #target-item="p">
          <slot name="target-item" v-bind="p" />
        </template>
        <template v-if="$slots.end" #end>
          <slot name="end" />
        </template>
        <template #empty>
          <slot name="empty">{{ texts.emptyTarget }}</slot>
        </template>
        <template #overlay>
          <GDragListDropOverlay
            :action="overlayState.target.action ?? undefined"
            :is-visible="overlayState.target.isVisible"
            :text="texts.overlayAdd"
          >
            <template v-if="$slots['drop-overlay']" #drop-overlay="p">
              <slot name="drop-overlay" v-bind="p" />
            </template>
          </GDragListDropOverlay>
        </template>
      </GDragListTargetPanel>
    </div>
    <GDragListDragGhost :session="session">
      <template v-if="session">
        <slot
          v-if="session.origin === 'source'"
          name="source-item"
          v-bind="getSourceSlotProps(session.item)"
        />
        <slot
          v-else
          name="target-item"
          v-bind="getTargetSlotProps(session.fromIndex)"
        />
      </template>
    </GDragListDragGhost>
    <div :class="ns.e('live')" aria-live="polite" aria-atomic="true">
      {{ announcement }}
    </div>
  </div>
</template>

<style lang="scss" src="./drag-list.style.scss" />

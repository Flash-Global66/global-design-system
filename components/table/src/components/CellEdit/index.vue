<template>
  <div
    ref="cellRef"
    :class="wrapperClass"
    :style="wrapperStyle"
    :data-g-cell-edit-amount-peer="
      outsideCloseScope === 'amountRowPeer' ? '' : undefined
    "
  >
    <transition name="gui-table-cell-edit" mode="out-in">
      <div v-if="isEditing" ref="editWrapperRef" :class="editWrapperClass">
        <slot name="edit" :close="closeEdit"></slot>
      </div>
      <button
        v-else
        type="button"
        class="relative w-full h-full flex items-center px-xs cursor-pointer border-0 bg-transparent text-left font-inherit text-primary-txt"
        @click="handleClick"
        @keydown="handleKeydown"
      >
        <span
          class="absolute top-xs right-xs opacity-0 group-hover:opacity-100 transition-opacity duration-150"
        >
          <span
            class="group/badge inline-flex items-center justify-center p-0.5 rounded-sm bg-primary-bg border border-primary-bd hover:border-secondary-bd transition-colors duration-150 cursor-pointer"
          >
            <span
              class="px-1 rounded-sm hover:bg-sec-hover-bg transition-colors duration-150"
            >
              <GIconFont
                name="regular pen"
                class="text-icon-primary group-hover/badge:text-icon-secondary leading-none"
                style="font-size: 10px"
                :aria-hidden="true"
              />
            </span>
          </span>
        </span>
        <slot name="view" :toggle="toggleEdit"></slot>
      </button>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { GIconFont } from '@flash-global66/g-icon-font';
import { useCellEdit } from './useCellEdit';
import type { GCellEditProps } from '../../shared/types/cellEdit.type';

const props = withDefaults(defineProps<GCellEditProps>(), {
  modelValue: false,
  column: () => ({}),
  index: undefined,
  prop: '',
  expandColspan: undefined,
  expandDirection: undefined,
  expandedWidth: undefined,
  leftOffset: undefined,
  outsideCloseScope: 'cell',
});

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
  toggle: [value: boolean];
  close: [];
  'cell-edit-open': [
    row: Record<string, unknown>,
    column: Record<string, unknown>,
  ];
  'cell-edit-close': [
    row: Record<string, unknown>,
    column: Record<string, unknown>,
  ];
}>();

const {
  isEditing,
  wrapperClass,
  editWrapperClass,
  wrapperStyle,
  toggleEdit,
  closeEdit,
  handleClick,
  handleKeydown,
  cellRef,
  editWrapperRef,
} = useCellEdit(props, emit);

defineExpose({
  toggleEdit,
  closeEdit,
});
</script>

<template>
  <g-dialog
    :model-value="showAlert"
    :show-close="!hideButtonClose"
    :title="title"
    :footer-buttons="footerButtons"
    append-to-body
    @close="handleClose"
  >
    <template #image>
      <g-image 
        v-if="computedImageName" 
        :name="computedImageName" 
        :size="computedImageSize" 
      />
    </template>

    <div
      v-if="description"
      :class="ns.e('description')"
      v-html="description"
    />

    <div
      v-if="checkboxes?.length"
      :class="ns.e('checkboxes')"
    >
      <g-checkbox
        v-for="(item, index) in checkboxes"
        :key="index"
        :model-value="checkboxStates[index]"
        :label="item.label"
        @update:model-value="onCheckboxModelUpdate(index, $event)"
      />
    </div>
  </g-dialog>
</template>

<script setup lang="ts">
import { GImage } from '@flash-global66/g-image';
import { GDialog } from '@flash-global66/g-dialog';
import { GCheckbox } from '@flash-global66/g-checkbox';
import { useNamespace } from "element-plus";
import { dialogAlertProps, useDialogAlert } from './dialog-alert';
import type { AlertEmits } from './dialog.type';

const props = defineProps(dialogAlertProps);
const emit = defineEmits<AlertEmits>();
const ns = useNamespace("dialog-alert");

const { 
  computedImageName, 
  computedImageSize, 
  footerButtons, 
  handleClose,
  checkboxStates,
  onCheckboxModelUpdate,
} = useDialogAlert(props, emit);
</script>
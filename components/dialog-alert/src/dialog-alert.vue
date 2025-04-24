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
  </g-dialog>
</template>

<script setup lang="ts">
import { GImage } from '@flash-global66/g-image';
import { GDialog } from '@flash-global66/g-dialog';
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
  handleClose 
} = useDialogAlert(props, emit);
</script>
<template>
  <div :class="ns.b()">
    <default-type
      v-if="props.type === 'default'"
      :id="inputId"
      :model-value="modelValue"
      :mode="props.mode"
      :title="props.title"
      :info-text="props.infoText"
      :download-url="props.downloadUrl"
      :download-link-text="props.downloadLinkText"
      :multiple="multiple"
      :accept-ext-names="props.acceptExtNames"
      :disabled="props.disabled"
      :uploading="uploading"
      :upload-error="!!uploadError"
      :file-statuses="fileStatuses"
      :errors="displayErrors"
      :file-errors="fileErrors"
      :file-progress="fileProgress"
      @update:model-value="emit('update:modelValue', $event)"
      @change="emit('change', $event)"
      @error="emit('error', $event)"
      @on-retry="emit('onRetry')"
      @download="emit('download')"
      @file-input-change="onFileInputChange"
    >
      <template #extra-content>
        <slot name="extra-content" />
      </template>
    </default-type>

    <drag-drop-type
      v-else-if="props.type === 'drag-drop'"
      :id="inputId"
      :model-value="modelValue"
      :upload-button-text="props.uploadButtonText"
      :upload-text="props.uploadText"
      :restriction-text="props.restrictionText"
      :accept-ext-names="props.acceptExtNames"
      :multiple="multiple"
      :disabled="props.disabled"
      :max-size="props.maxSize"
      :max-files="props.maxFiles"
      :uploading="props.uploading"
      :errors="displayErrors"
      :file-errors="fileErrors"
      :file-progress="fileProgress"
      :file-statuses="fileStatuses"
      @update:model-value="emit('update:modelValue', $event)"
      @change="emit('change', $event)"
      @error="emit('error', $event)"
      @file-input-change="onFileInputChange"
      @files-drop="onFilesDrop"
    />
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from "element-plus";
import { attachFileProps, attachFileEmits } from "./attach-file";
import { useAttachFile } from "./useAttachFile";
import DefaultType from "./default-type.vue";
import DragDropType from "./drag-drop-type.vue";

defineOptions({
  name: "GAttachFile",
});

const props = defineProps(attachFileProps);
const emit = defineEmits(attachFileEmits);

const {
  modelValue,
  fileStatuses,
  displayErrors,
  fileErrors,
  fileProgress,
  inputId,
  multiple,
  uploading,
  uploadError,
  onFileInputChange,
  onFilesDrop,
  addFiles,
} = useAttachFile(props, emit);

const ns = useNamespace("attach-file");

defineExpose({
  addFiles,
});
</script>

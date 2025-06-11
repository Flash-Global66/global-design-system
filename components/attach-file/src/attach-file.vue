<template>
  <div :class="ns.b()">
    <DefaultType 
      v-if="props.type === 'default'" 
      :id="inputId"
      :model-value="safeModelValue"
      :mode="props.mode"
      :title="title"
      :info-text="infoText"
      :multiple="multiple"
      :accept-ext-names="acceptExtNames"
      :disabled="props.disabled"
      :uploading="uploading"
      :upload-error="!!uploadError"
      :upload-progress="uploadProgress"
      :error-message="errorMessage"
      :file-statuses="fileStatuses"
      :errors="displayErrors"
      :file-errors="fileErrors"
      :file-progress="fileProgress"
      @update:model-value="emit('update:modelValue', $event)"
      @change="emit('change', $event)"
      @error="emit('error', $event)"
      @retry="emit('retry')"
      @on-retry="emit('onRetry')"
      @download="emit('download')"
      @file-input-change="onFileInputChange"
    />

    <DragDropType
      v-else-if="props.type === 'drag-drop'" 
      :input-id="inputId"
      :model-value="safeModelValue"
      :upload-button-text="props.uploadButtonText"
      :upload-text="props.uploadText"
      :restriction-text="props.restrictionText"
      :accept-ext-names="acceptExtNames"
      :multiple="multiple"
      :disabled="props.disabled"
      :max-size="maxSize"
      :max-files="maxFiles"
      :uploading="props.uploading"
      :upload-progress="props.uploadProgress"
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
import { ref, computed, watch } from "vue";
import { useNamespace } from "element-plus";
import { debugWarn } from "element-plus/es/utils/index.mjs";
import { useFormItem, useFormItemInputId } from "@flash-global66/g-form";
import { attachFileProps, attachFileEmits } from "./attach-file";
import { useAttachFile } from "./composables/useAttachFile";
import { FILE_STATUS } from "./constants";
import type { FileStatus } from "./constants";
import DefaultType from "./components/default/default-type.vue";
import DragDropType from "./components/drag-drop/drag-drop-type.vue";

defineOptions({
  name: "GAttachFile",
});

const ns = useNamespace("attach-file");

const props = defineProps(attachFileProps);
const emit = defineEmits(attachFileEmits);

const { formItem } = useFormItem();
const { inputId } = useFormItemInputId(props, {
  formItemContext: formItem,
});

const title = computed(() => props.title);
const infoText = computed(() => props.infoText);
const maxSize = computed(() => props.maxSize);
const maxFiles = computed(() => props.maxFiles);
const multiple = computed(() => props.multiple);
const acceptExtNames = computed(() => props.acceptExtNames);

const safeModelValue = computed(() => props.modelValue || []);

const errors = ref<string[]>([]);
const fileErrors = ref<Record<number, string>>({});
const fileProgress = ref<Record<number, number>>({});

const fileStatuses = computed(() => {
  const statuses: Record<number, FileStatus> = {};
  
  safeModelValue.value.forEach((_, index) => {
    if (fileErrors.value[index]) {
      statuses[index] = FILE_STATUS.ERROR;
    } else if (props.uploadError) {
      statuses[index] = FILE_STATUS.ERROR;
    } else if (props.uploading || fileProgress.value[index] !== undefined) {
      statuses[index] = FILE_STATUS.LOADING;
    } else {
      statuses[index] = FILE_STATUS.SUCCESS;
    }
  });
  
  return statuses;
});

const isFormError = computed(() => formItem?.shouldShowErrorChild || false);
const formErrorMessage = computed(() => formItem?.validateMessage || "");

const displayErrors = computed(() => {
  const combinedErrors = [...errors.value];
  if (isFormError.value && formErrorMessage.value) {
    combinedErrors.unshift(formErrorMessage.value);
  }
  return combinedErrors;
});

const { 
  formatFileSize, 
  parseSizeString, 
  validateFile, 
  validateFiles, 
  validateFileCount,
  removeDuplicateFiles
} = useAttachFile({});

const effectiveMaxSize = computed(() => {
  if (props.maxSize) {
    return parseSizeString(props.maxSize);
  }
  return 0;
});

function addFiles(newFiles: File[]) {
  const uniqueFiles = removeDuplicateFiles(newFiles, safeModelValue.value);
  
  if (uniqueFiles.length === 0) {
    const duplicateMessage = newFiles.length === 1 
      ? `El archivo "${newFiles[0].name}" ya ha sido seleccionado.`
      : `Los archivos seleccionados ya han sido agregados.`;
    errors.value = [duplicateMessage];
    emit("error", [duplicateMessage]);
    return;
  }
  
  const fileValidationErrors = validateFiles(uniqueFiles, props.maxSize, props.acceptExtNames);
  
  if (fileValidationErrors.length > 0) {
    errors.value = fileValidationErrors;
    emit("error", fileValidationErrors);
    
    if (props.validateEvent) {
      formItem?.validate('change').catch((err) => debugWarn(err));
    }
    return;
  }

  const updatedFiles = props.multiple ? [...safeModelValue.value, ...uniqueFiles] : uniqueFiles;
  const totalErrors: string[] = [];

  const countError = validateFileCount(safeModelValue.value.length, uniqueFiles.length, props.maxFiles);
  if (countError) {
    totalErrors.push(countError);
  }

  if (totalErrors.length > 0) {
    errors.value = totalErrors;
    emit("error", totalErrors);
    
    if (props.validateEvent) {
      formItem?.validate('change').catch((err) => debugWarn(err));
    }
    return;
  }

  errors.value = [];

  emit("update:modelValue", updatedFiles);
  emit("change", updatedFiles);
  
  if (props.validateEvent) {
    formItem?.validate('change').catch((err) => debugWarn(err));
  }
}

function removeFile(index: number) {
  const updatedFiles = [...safeModelValue.value];
  updatedFiles.splice(index, 1);

  if (fileErrors.value[index]) {
    delete fileErrors.value[index];
  }

  if (fileProgress.value[index]) {
    delete fileProgress.value[index];
  }

  const newFileErrors: Record<number, string> = {};
  Object.keys(fileErrors.value).forEach((key) => {
    const numKey = parseInt(key);
    if (numKey < index) {
      newFileErrors[numKey] = fileErrors.value[numKey];
    } else if (numKey > index) {
      newFileErrors[numKey - 1] = fileErrors.value[numKey];
    }
  });
  fileErrors.value = newFileErrors;

  const newFileProgress: Record<number, number> = {};
  Object.keys(fileProgress.value).forEach((key) => {
    const numKey = parseInt(key);
    if (numKey < index) {
      newFileProgress[numKey] = fileProgress.value[numKey];
    } else if (numKey > index) {
      newFileProgress[numKey - 1] = fileProgress.value[numKey];
    }
  });
  fileProgress.value = newFileProgress;

  emit("update:modelValue", updatedFiles);
  emit("change", updatedFiles);
  
  if (props.validateEvent) {
    formItem?.validate('change').catch((err) => debugWarn(err));
  }
}

function onFileInputChange(event: Event) {
  const target = event.target as HTMLInputElement;
  if (target.files) {
    addFiles(Array.from(target.files));
    target.value = "";
  }
}

function onFilesDrop(files: FileList) {
  addFiles(Array.from(files));
}

const errorMessage = computed(() => {
  return props.uploadError || "Error al cargar el documento, inténtalo de nuevo";
});

watch(
  () => props.uploading,
  (isUploading) => {
    if (!isUploading) {
      fileProgress.value = {};
    }
  },
  { immediate: true }
);

function setFileError(index: number, error: string) {
  fileErrors.value[index] = error;
}

function clearFileError(index: number) {
  delete fileErrors.value[index];
}

function setFileProgress(index: number, progress: number) {
  fileProgress.value[index] = progress;
}

function clearFileProgress(index: number) {
  delete fileProgress.value[index];
}

function updateFileProgress(index: number, progress: number) {
  if (progress >= 100) {
    clearFileProgress(index);
  } else {
    setFileProgress(index, progress);
  }
}

function clearFiles() {
  emit("update:modelValue", []);
}

defineExpose({
  addFiles,
  removeFile,
  clearFiles,
  validateFiles,
  formatFileSize,
  setFileError,
  clearFileError,
  setFileProgress,
  clearFileProgress,
  updateFileProgress
});
</script>


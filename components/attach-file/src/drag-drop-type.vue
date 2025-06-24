<template>
  <div :class="ns.e('drag-drop-type')">
    <!-- Drop Zone -->
    <div
      ref="dropZone"
      :class="[
        ns.e('drop-zone'),
        {
          [ns.is('dragging')]: isDragging,
          [ns.is('error')]: props.errors.length > 0,
          [ns.is('disabled')]: props.disabled,
          [ns.is('loading')]: isLoading,
        },
      ]"
      role="button"
      tabindex="0"
      :aria-label="`${props.uploadButtonText}. ${defaultRestrictionText || ''}`"
      :aria-describedby="
        props.restrictionText || props.acceptExtNames.length || effectiveMaxSize
          ? `${props.id || 'drag-drop'}-restriction`
          : undefined
      "
      @click="handleClick"
      @keydown.enter="handleKeyEnter"
      @keydown.space="handleKeySpace"
      @dragover.prevent="handleDragOver"
      @dragenter.prevent="handleDragEnter"
      @dragleave.prevent="handleDragLeave"
      @drop.prevent="handleDrop"
    >
      <!-- Text Content -->
      <div :class="ns.e('text-content')">
        <p :class="ns.e('main-text')">
          <button
            type="button"
            :class="ns.e('upload-button')"
            :disabled="props.disabled || isLoading"
            @click="handleButtonClick"
          >
            {{ props.uploadButtonText }}
          </button>
          {{ props.uploadText }}
        </p>
        <p
          v-if="props.restrictionText || props.acceptExtNames.length || effectiveMaxSize"
          :class="ns.e('restriction-text')"
          :id="`${props.id || 'drag-drop'}-restriction`"
        >
          {{ props.restrictionText || defaultRestrictionText }}
        </p>
      </div>

      <!-- Hidden File Input -->
      <input
        ref="fileInput"
        type="file"
        :multiple="props.multiple"
        :accept="props.acceptExtNames.join(',')"
        :disabled="props.disabled || isLoading"
        :class="ns.e('hidden-input')"
        :aria-label="`${props.uploadButtonText} - ${defaultRestrictionText || ''}`"
        @change="onFileInputChange"
      />
    </div>

    <!-- File List for Drag-Drop Type -->
    <div v-if="safeModelValue.length > 0" :class="ns.em('file-list', 'boxed')">
      <div
        v-for="(file, index) in safeModelValue"
        :key="index"
        :class="[
          ns.e('item'),
          {
            [ns.is('loading')]: isLoading,
          },
        ]"
      >
        <div :class="ns.e('item-content')">
          <!-- Loading state: show progress bar and file name -->
          <template v-if="isLoading">
            <!-- Progress bar with proper wrapper structure like loading-state -->
            <div :class="ns.e('file-item-content')">
              <g-progress
                :percentage="props.fileProgress[index] || 0"
                type="line"
                :stroke-width="7"
                :show-text="false"
                :class="ns.e('file-item-progress')"
              />
              <div :class="ns.e('file-item-info')">
                <span :class="ns.e('file-item-name')">{{ file.name }}</span>
                <span :class="ns.e('file-item-size')">{{ formatFileSize(file.size) }}</span>
              </div>
            </div>
          </template>

          <!-- Normal state: show status icon and file name -->
          <template v-else>
            <div :class="ns.e('file-status-icon')">
              <g-icon-font
                :name="getFileStatusForIndex(index) === FILE_STATUS.ERROR ? 'solid times' : 'solid check'"
                :class="[
                  ns.e('icon'),
                  {
                    [ns.is('success')]: getFileStatusForIndex(index) !== FILE_STATUS.ERROR,
                    [ns.is('error')]: getFileStatusForIndex(index) === FILE_STATUS.ERROR,
                  },
                ]"
              />
            </div>
            <span
              :class="[
                ns.e('file-name'),
                {
                  [ns.is('error')]: getFileStatusForIndex(index) === FILE_STATUS.ERROR,
                  [ns.is('success')]: getFileStatusForIndex(index) !== FILE_STATUS.ERROR,
                },
              ]"
            >
              {{ file.name }}
            </span>
          </template>
        </div>

        <div :class="ns.e('item-actions')">
          <!-- Normal state: show file size and delete button -->
          <template v-if="!isLoading">
            <span :class="ns.e('file-size')">{{ formatFileSize(file.size) }}</span>
            <g-icon-button
              icon="solid trash-alt"
              variant="grey"
              size="small"
              :disabled="props.disabled"
              @click="!props.disabled && removeFile(index)"
            />
          </template>
        </div>
      </div>
    </div>

    <!-- Errores de validación -->
    <div v-if="primaryError" :class="ns.e('validation-errors')">
      <p :class="ns.e('error-text')">
        {{ primaryError }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { useNamespace } from "element-plus";
import { GIconFont } from "@flash-global66/g-icon-font";
import { GIconButton } from "@flash-global66/g-icon-button";
import { GProgress } from "@flash-global66/g-progress";
import { FILE_STATUS } from "./attach-file.type";
import type { FileStatus, DragDropTypeProps } from "./attach-file.type";
import { formatFileSize, parseSizeString, getFileStatus, openFileDialogHelper, createRemoveFileHandler, getPrimaryError } from "./attach-file-helpers";

const ns = useNamespace("attach-file");

const props = withDefaults(defineProps<DragDropTypeProps>(), {
  id: undefined,
  restrictionText: "",
  maxSize: "",
  maxFiles: undefined,
  fileStatuses: () => ({} as Record<number, FileStatus>),
  loadingState: false,
  uploading: false,
  uploadProgress: 0,
});

const emit = defineEmits([
  "update:modelValue",
  "change", 
  "error",
  "onRetry",
  "file-input-change",
  "files-drop"
]);

const fileInput = ref<HTMLInputElement>();
const dropZone = ref<HTMLDivElement>();

const isDragging = ref(false);
const dragCounter = ref(0);

const safeModelValue = computed(() => props.modelValue || []);
const isLoading = computed(() => props.loadingState || props.uploading);
const effectiveMaxSize = computed(() => props.maxSize ? parseSizeString(props.maxSize) : 0);

const defaultRestrictionText = computed(() => {
  return props.restrictionText || "";
});

const primaryError = computed(() => getPrimaryError(props.errors));

const removeFile = computed(() => createRemoveFileHandler(safeModelValue.value, emit, true, isLoading.value));

const getFileStatusForIndex = (index: number) => getFileStatus(index, props.fileErrors, false, props.uploading, props.fileProgress);

function openFileDialog() {
  openFileDialogHelper(fileInput, props.disabled, isLoading.value);
}

function onFileInputChange(event: Event) {
  emit("file-input-change", event as Event);
}

function onDragEnter(event: DragEvent) {
  event.preventDefault();
  dragCounter.value++;
  isDragging.value = true;
}

function onDragLeave(event: DragEvent) {
  event.preventDefault();
  dragCounter.value--;
  if (dragCounter.value === 0) {
    isDragging.value = false;
  }
}

function onDragOver(event: DragEvent) {
  event.preventDefault();
}

function onDrop(event: DragEvent) {
  event.preventDefault();
  dragCounter.value = 0;
  isDragging.value = false;
  
  if (props.disabled || isLoading) return;
  
  const files = event.dataTransfer?.files;
  if (files) {
    emit("files-drop", files as FileList);
  }
}

const handleClick = () => openFileDialog();
const handleKeyEnter = () => openFileDialog();
const handleKeySpace = (event: KeyboardEvent) => {
  event.preventDefault();
  openFileDialog();
};
const handleButtonClick = (event: MouseEvent) => {
  event.stopPropagation();
  
  if (Object.keys(props.fileErrors).length > 0 || props.errors.length > 0) {
    emit("onRetry");
  } else {
    openFileDialog();
  }
};

const handleDragOver = (event: DragEvent) => onDragOver(event);
const handleDragEnter = (event: DragEvent) => onDragEnter(event);
const handleDragLeave = (event: DragEvent) => onDragLeave(event);
const handleDrop = (event: DragEvent) => onDrop(event);

defineExpose({
  fileInput,
  openFileDialog,
});
</script>


<template>
  <div :class="ns.e('drag-drop-type')">
    <!-- Drop Zone -->
    <div
      ref="dropZone"
      :class="[
        ns.e('drop-zone'),
        {
          [ns.is('dragging')]: isDragging,
          [ns.is('error')]: errors.length > 0,
          [ns.is('disabled')]: disabled,
          [ns.is('loading')]: isLoading,
        },
      ]"
      role="button"
      tabindex="0"
      :aria-label="`${uploadButtonText}. ${defaultRestrictionText || ''}`"
      :aria-describedby="
        restrictionText || acceptExtNames.length || effectiveMaxSize
          ? `${inputId || 'drag-drop'}-restriction`
          : undefined
      "
      @click="openFileDialog"
      @keydown.enter="openFileDialog"
      @keydown.space.prevent="openFileDialog"
      @dragover.prevent="onDragOver"
      @dragenter.prevent="onDragEnter"
      @dragleave.prevent="onDragLeave"
      @drop.prevent="onDrop"
    >
      <!-- Text Content -->
      <div :class="ns.e('text-content')">
        <p :class="ns.e('main-text')">
          <button
            type="button"
            :class="ns.e('upload-button')"
            :disabled="disabled || isLoading"
            @click.stop="openFileDialog"
          >
            {{ uploadButtonText }}
          </button>
          {{ uploadText }}
        </p>
        <p
          v-if="restrictionText || acceptExtNames.length || effectiveMaxSize"
          :class="ns.e('restriction-text')"
          :id="`${inputId || 'drag-drop'}-restriction`"
        >
          {{ restrictionText || defaultRestrictionText }}
        </p>
      </div>

      <!-- Hidden File Input -->
      <input
        ref="fileInput"
        type="file"
        :multiple="multiple"
        :accept="acceptExtNames.join(',')"
        :disabled="disabled || isLoading"
        :class="ns.e('hidden-input')"
        :aria-label="`${uploadButtonText} - ${defaultRestrictionText || ''}`"
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
                :percentage="fileProgress[index] || uploadProgress || 0"
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
                :name="getFileStatus(index) === FILE_STATUS.ERROR ? 'solid times' : 'solid check'"
                :class="[
                  ns.e('icon'),
                  {
                    [ns.is('success')]: getFileStatus(index) !== FILE_STATUS.ERROR,
                    [ns.is('error')]: getFileStatus(index) === FILE_STATUS.ERROR,
                  },
                ]"
              />
            </div>
            <span
              :class="[
                ns.e('file-name'),
                {
                  [ns.is('error')]: getFileStatus(index) === FILE_STATUS.ERROR,
                  [ns.is('success')]: getFileStatus(index) !== FILE_STATUS.ERROR,
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
              :disabled="disabled"
              @click="!disabled && removeFile(index)"
              title="Eliminar archivo"
            />
          </template>
        </div>
      </div>
    </div>

    <!-- Validation Errors -->
    <ValidationErrors v-if="errors.length > 0" :errors="errors" />
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, toRefs } from "vue";
import { useNamespace } from "element-plus";
import { GIconFont } from "@flash-global66/g-icon-font";
import { GIconButton } from "@flash-global66/g-icon-button";
import { GProgress } from "@flash-global66/g-progress";
import ValidationErrors from "../common/validation-errors.vue";
import { useAttachFile } from "../../composables/useAttachFile";
import { FILE_STATUS } from "../../attach-file.type";
import type { FileStatus, DragDropTypeProps, DragDropTypeEmits } from "../../attach-file.type";

const ns = useNamespace("attach-file");

const props = withDefaults(defineProps<DragDropTypeProps>(), {
  inputId: undefined,
  restrictionText: "",
  maxSize: "",
  maxFiles: undefined,
  fileStatuses: () => ({} as Record<number, FileStatus>),
  loadingState: false,
  uploading: false,
  uploadProgress: 0,
});

const emit = defineEmits<DragDropTypeEmits>();

const {
  inputId,
  modelValue,
  uploadButtonText,
  uploadText,
  restrictionText,
  acceptExtNames,
  multiple,
  disabled,
  maxSize,
  maxFiles,
  errors,
  fileErrors,
  fileProgress,
  fileStatuses,
  loadingState,
  uploading,
  uploadProgress,
} = toRefs(props);

const safeModelValue = computed(() => modelValue.value || []);

const { formatFileSize, parseSizeString } = useAttachFile({});

const dropZone = ref();
const fileInput = ref();
const isDragging = ref(false);
const dragCounter = ref(0);

const isLoading = computed(() => loadingState.value || uploading.value);

const getFileStatus = (index: number): FileStatus | undefined => {
  return fileStatuses.value[index] as FileStatus;
};

const effectiveMaxSize = computed(() => {
  if (maxSize.value) {
    return parseSizeString(maxSize.value);
  }
  return 0;
});

const defaultRestrictionText = computed(() => {
  const parts = [];

  if (acceptExtNames.value.length > 0) {
    parts.push(`con extensión ${acceptExtNames.value.join(", ")}`);
  }

  if (effectiveMaxSize.value) {
    parts.push(`con peso máximo de ${formatFileSize(effectiveMaxSize.value)}`);
  }

  if (maxFiles.value && multiple.value) {
    parts.push(`máximo ${maxFiles.value} archivos`);
  }

  return parts.length > 0 ? `Archivos ${parts.join(", ")}` : "";
});

function openFileDialog() {
  if (!disabled.value && !isLoading.value && fileInput.value) {
    fileInput.value.click();
  }
}

function onFileInputChange(event: Event) {
  emit("fileInputChange", event);
}

function removeFile(index: number) {
  if (isLoading.value) return;

  const updatedFiles = [...safeModelValue.value];
  updatedFiles.splice(index, 1);
  emit("update:modelValue", updatedFiles);
  emit("change", updatedFiles);
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

  if (disabled.value || isLoading.value) return;

  const files = event.dataTransfer?.files;
  if (files) {
    emit("files-drop", files);
  }
}

defineExpose({
  fileInput,
  openFileDialog,
});
</script>


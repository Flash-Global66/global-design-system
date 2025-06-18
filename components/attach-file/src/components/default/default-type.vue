<template>
  <div :class="ns.e('default-type')">
    <input
      ref="hiddenFileInput"
      type="file"
      :multiple="multiple"
      :accept="acceptExtNames.join(',')"
      :disabled="disabled"
      :class="ns.e('hidden-input')"
      :aria-label="title || 'Seleccionar archivos'"
      :aria-describedby="infoText ? `${id || 'attach-file'}-info` : undefined"
      @change="handleFileInputChange"
    />

    <div :class="ns.e('content')">
      <div :class="[ns.e('header'), { [ns.is('with-file-list')]: showFileList }]">
        <div :class="ns.e('header-content')">
          <p :class="ns.e('title')">
            {{ title }}
          </p>
          <p v-if="showInfoText" :class="ns.e('info-text')">
            {{ infoText }}
          </p>
        </div>
        <g-icon-button
          :icon="buttonIcon"
          variant="blue"
          border
          rounded
          size="medium"
          @click="handleButtonClick"
          :disabled="disabled"
        />
      </div>
      <div v-if="uploadState === 'loading'" :class="ns.e('files-list')">
        <div :class="ns.e('files-container')">
          <div v-for="(file, index) in modelValue" :key="index" :class="ns.e('file-item')">
            <div :class="ns.e('file-item-content')">
              <g-progress
                :percentage="fileProgress[index] || uploadProgress"
                type="line"
                :stroke-width="7"
                :show-text="false"
                :class="ns.e('file-item-progress')"
              />
              <div :class="ns.e('file-item-info')">
                <span :class="ns.e('file-item-name')">{{ file.name }}</span>
                <span :class="ns.e('file-item-size')">
                  {{ formatFileSize(file.size) }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else-if="showFileList" :class="ns.em('file-list', 'clean')">
        <div v-for="(file, index) in safeFiles" :key="index" :class="ns.e('item')">
          <div :class="ns.e('item-content')">
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
              {{ fileName(index, file) }}
            </span>
          </div>
          <div :class="ns.e('item-actions')">
            <span :class="ns.e('file-size')">{{ formatFileSize(file.size) }}</span>
            <g-icon-button
              icon="solid trash-alt"
              variant="grey"
              size="small"
              :disabled="disabled"
              @click="!disabled && removeFile(index)"
              title="Eliminar archivo"
            />
          </div>
        </div>
      </div>
    </div>
    <validation-errors v-if="errors.length > 0" :errors="errors" />
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { useNamespace } from "element-plus";
import { GIconButton } from "@flash-global66/g-icon-button";
import { GIconFont } from "@flash-global66/g-icon-font";
import { GProgress } from "@flash-global66/g-progress";
import { useAttachFile } from "../../composables/useAttachFile";
import { ATTACH_FILE_MODES, FileStatus, FILE_STATUS, type AttachFileMode } from "../../attach-file.type";
import type { DefaultTypeProps, DefaultTypeEmits } from "../../attach-file.type";
import ValidationErrors from "../common/validation-errors.vue";

const ns = useNamespace("attach-file");

const props = withDefaults(defineProps<DefaultTypeProps>(), {
  mode: "upload",
  uploading: false,
  uploadError: false,
  fileStatuses: () => ({}),
  errors: () => [],
  fileErrors: () => ({}),
  fileProgress: () => ({}),
});

const emit = defineEmits<DefaultTypeEmits>();

const hiddenFileInput = ref<HTMLInputElement>();

function openFileDialog() {
  if (!props.disabled) {
    if (props.uploadError) {
      // Handle retry logic if needed
    }
    hiddenFileInput.value?.click();
  }
}

function handleButtonClick() {
  if (props.mode === ATTACH_FILE_MODES.DOWNLOAD) {
    emit("download");
  } else {
    openFileDialog();
  }
}

function handleFileInputChange(event: Event) {
  emit("file-input-change", event);
}

const {
  uploadState,
  formatFileSize,
  showFileList,
  showInfoText,
  buttonIcon,
  safeFiles,
  getFileStatus,
  fileName,
  createRemoveFile,
} = useAttachFile({
  mode: computed(() => props.mode),
  uploadProgress: computed(() => props.uploadProgress || 0),
  multiple: computed(() => props.multiple),
  files: computed(() => props.modelValue),
  uploading: computed(() => props.uploading),
  uploadError: computed(() => props.uploadError),
  fileStatuses: computed(() => props.fileStatuses),
  fileErrors: computed(() => props.fileErrors),
});

const removeFile = createRemoveFile(
  (event: "update:modelValue", files: File[]) => emit(event, files),
  (event: "change", files: File[]) => emit(event, files)
);
</script>


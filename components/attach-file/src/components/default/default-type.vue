<template>
  <div :class="ns.e('default-type')">
    <input 
      ref="hiddenFileInput" 
      type="file" 
      :multiple="multiple" 
      :accept="acceptExtNames.join(',')"
      :disabled="disabled" 
      :class="ns.e('hidden-input')"
      @change="handleFileInputChange" 
    />
    
    <!-- Status: Default -->
    <div v-if="uploadState === 'default'" :class="ns.e('default-state')">
      <div :class="ns.e('content')">
        <p :class="ns.e('title')">
          {{ title }}
        </p>
        <p :class="ns.e('info-text')">
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
    
    <!-- Status: Loading -->
    <div v-else-if="uploadState === 'loading'" :class="ns.e('loading-state')">
      <div :class="ns.e('content')">
        <p :class="ns.e('title')">
          {{ title }}
        </p>
        <p v-if="multiple" :class="ns.e('info-text')">
          {{ infoText }}
        </p>
        
        <!-- Barra de progreso general para archivo único -->
        <g-progress 
          v-if="isSingleFileView" 
          :percentage="getProgress()" 
          :stroke-width="7"
          :show-text="false" 
          :class="ns.e('progress-wrapper')"
        />
        
        <!-- Single file loading -->
        <div v-if="isSingleFileView" :class="ns.e('file-info')">
          <span :class="ns.e('file-name')">
            {{ modelValue[0]?.name }}
          </span>
          <span :class="ns.e('file-size')">
            {{ formatFileSize(modelValue[0]?.size) }}
          </span>
        </div>

        <!-- Multiple files loading -->
        <div v-else-if="isMultipleFilesView" :class="ns.e('files-list')">
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
      </div>
      
      <g-icon-button 
        icon="solid upload" 
        variant="blue" 
        border 
        rounded
        size="medium" 
        :class="{
          'self-center': isSingleFileView,
          'self-start': isMultipleFilesView,
        }" 
        @click="openFileDialog" 
        disabled
        title="Subiendo archivo(s)..." 
      />
    </div>
    
    <!-- Status: Success/Error  -->
    <div v-else :class="ns.e('result-state')">
      <!-- Cabecera unificada -->
      <div :class="[
        ns.e('header'),
        { [ns.is('with-file-list')]: showFileList }
      ]">
        <div :class="ns.e('header-content')">
          <p :class="ns.e('title')">
            {{ title }}
          </p>
          <p v-if="showInfoText" :class="ns.e('info-text')">
            {{ infoText }}
          </p>
          
          <!-- Single file success info -->
          <div v-if="isSuccess && (!multiple || modelValue.length === 1)" 
            :class="ns.e('single-file-success')">
            <g-icon-font name="solid check" :class="ns.e('success-icon')" />
            <span :class="ns.e('file-name-success')">
              {{ modelValue[0]?.name }}
            </span>
            <span :class="ns.e('file-size-success')">
              {{ formatFileSize(modelValue[0]?.size) }}
            </span>
          </div>

          <!-- Single file error info -->
          <div v-if="isError && (!multiple || modelValue.length === 1)" :class="ns.e('single-file-error')">
            <div :class="ns.e('error-content')">
              <g-icon-font name="solid times" :class="ns.e('error-icon')" />
              <span :class="ns.e('error-message')">{{ errorMessage }}</span>
            </div>
          </div>
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

      <!-- Lista de archivos múltiples -->
      <FileList
        v-if="showFileList"
        :files="modelValue"
        :file-statuses="fileStatuses"
        :file-errors="fileErrors"
        :file-progress="fileProgress"
        @upload="openFileDialog"
        @retry="handleRetry"
        @remove="removeFile"
        @clear="clearAllFiles"
    />
    
    <!-- Mensajes de validación -->
    <ValidationErrors 
      v-if="errors.length > 0" 
      :errors="errors"
    />
  </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { useNamespace } from "element-plus";
import { GIconButton } from "@flash-global66/g-icon-button";
import { GIconFont } from "@flash-global66/g-icon-font";
import { GProgress } from "@flash-global66/g-progress";
import { useAttachFile } from "../../composables/useAttachFile";
import { ATTACH_FILE_MODES, FileStatus, type AttachFileMode } from "../../constants";
import FileList from "./file-list.vue";
import ValidationErrors from "../common/validation-errors.vue";

const ns = useNamespace("attach-file");

interface Props {
  modelValue: File[];
  mode?: AttachFileMode;
  title: string;
  infoText: string;
  multiple: boolean;
  acceptExtNames: string[];
  disabled: boolean;
  uploading?: boolean;
  uploadError?: boolean;
  uploadProgress?: number;
  errorMessage?: string;
  fileStatuses?: Record<number, FileStatus>;
  errors: string[];
  fileErrors: Record<number, string>;
  fileProgress: Record<number, number>;
}

const props = withDefaults(defineProps<Props>(), {
  mode: 'upload',
  uploading: false,
  uploadError: false,
  fileStatuses: () => ({}),
  errors: () => [],
  fileErrors: () => ({}),
  fileProgress: () => ({})
});

const emit = defineEmits<{
  'update:modelValue': [files: File[]];
  'change': [files: File[]];
  'error': [errors: string[]];
  'retry': [];
  'onRetry': [];
  'download': [];
  'file-input-change': [event: Event];
}>();

const defaultStateRef = ref();
const hiddenFileInput = ref<HTMLInputElement>();

function openFileDialog() {
  if (!props.disabled) {
    if (props.uploadError) {
      emit("retry");
    }
    hiddenFileInput.value?.click();
  }
}

function handleButtonClick() {
  if (props.mode === ATTACH_FILE_MODES.DOWNLOAD) {
    emit('download');
  } else {
    openFileDialog();
  }
}

function handleRetry() {
  emit("onRetry");
  if (props.modelValue.length > 0) {
    emit("update:modelValue", []);
  }
  hiddenFileInput.value?.click();
}

function removeFile(index: number) {
  const updatedFiles = [...props.modelValue];
  updatedFiles.splice(index, 1);
  emit("update:modelValue", updatedFiles);
  emit("change", updatedFiles);
}

function clearAllFiles() {
  emit("update:modelValue", []);
  emit("change", []);
}

function handleFileInputChange(event: Event) {
  emit('file-input-change', event);
}

const {
  uploadState,
  getProgress,
  formatFileSize,
  isSingleFileView,
  isMultipleFilesView,
  isSuccess,
  isError,
  showFileList,
  showInfoText,
  buttonIcon
} = useAttachFile({
  mode: computed(() => props.mode),
  uploadProgress: computed(() => props.uploadProgress || 0),
  multiple: computed(() => props.multiple),
  files: computed(() => props.modelValue),
  uploading: computed(() => props.uploading),
  uploadError: computed(() => props.uploadError)
});
</script>

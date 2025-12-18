<template>
  <div :class="ns.e('default-type')">
    <input
      ref="hiddenFileInput"
      type="file"
      :multiple="multiple"
      :accept="acceptExtNames.join(',')"
      :disabled="disabled"
      :class="ns.e('hidden-input')"
      :aria-label="title || undefined"
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
          <a
            v-if="downloadUrl && downloadLinkText"
            :href="downloadUrl"
            target="_blank"
            rel="noopener noreferrer"
            :class="ns.e('download-link')"
            :aria-label="`${downloadLinkText} (opens in new tab)`"
          >
            {{ downloadLinkText }}
          </a>
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
                :percentage="fileProgress[index] || 0"
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
          </div>
          <div :class="ns.e('item-actions')">
            <span v-if="props.showFileSize" :class="ns.e('file-size')">{{ formatFileSize(file.size) }}</span>
            <g-icon-button
              v-if="props.showRemoveButton"
              icon="solid trash-alt"
              variant="grey"
              size="small"
              :disabled="props.disabled"
              @click="!props.disabled && removeFile(index)"
            />
          </div>
        </div>
      </div>
      
      <div v-if="$slots['extra-content']" :class="ns.e('extra-content')">
        <slot name="extra-content" />
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
import { GIconButton } from "@flash-global66/g-icon-button";
import { GIconFont } from "@flash-global66/g-icon-font";
import { GProgress } from "@flash-global66/g-progress";
import { FILE_STATUS } from "./attach-file.type";
import type { DefaultTypeProps } from "./attach-file.type";
import { formatFileSize, getFileStatus, openFileDialogHelper, createRemoveFileHandler, getPrimaryError } from "./attach-file-helpers";

const ns = useNamespace("attach-file");

const props = withDefaults(defineProps<DefaultTypeProps>(), {
  mode: "upload",
  uploading: false,
  uploadError: false,
  fileStatuses: () => ({}),
  errors: () => [],
  fileErrors: () => ({}),
  fileProgress: () => ({}),
  downloadUrl: "",
  downloadLinkText: "",
});

const emit = defineEmits([
  "update:modelValue",
  "change",
  "error", 
  "onRetry",
  "download",
  "file-input-change"
]);

const hiddenFileInput = ref<HTMLInputElement>();

function handleButtonClick() {
  if (props.mode === "download") {
    emit("download");
  } else if (props.uploadError || Object.keys(props.fileErrors).length > 0) {
    emit("onRetry");
  } else {
    openFileDialogHelper(hiddenFileInput, props.disabled, props.uploading);
  }
}

function handleFileInputChange(event: Event) {
  emit("file-input-change", event as Event);
}

const safeFiles = computed(() => props.modelValue || []);
const showFileList = computed(() => safeFiles.value.length > 0);
const showInfoText = computed(() => props.multiple || props.uploadError);
const uploadState = computed(() => 
  props.uploadError ? "error" : 
  (props.uploading ? "loading" : 
  (safeFiles.value.length > 0 ? "success" : "default"))
);
const primaryError = computed(() => getPrimaryError(props.errors));
const buttonIcon = computed(() => props.mode === "download" ? "solid download" : "solid upload");

const removeFile = createRemoveFileHandler(props.modelValue, emit);

const getFileStatusForIndex = (index: number) => getFileStatus(index, props.fileErrors, props.uploadError, props.uploading, props.fileProgress);

defineExpose({
  hiddenFileInput,
});
</script>


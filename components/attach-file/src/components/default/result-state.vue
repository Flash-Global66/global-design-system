<template>
  <div :class="ns.e('result-state')">
   
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
        
        
        <div v-if="isSuccess && !isError && (!multiple || files.length === 1)" 
          :class="ns.e('single-file-success')">
          <g-icon-font name="solid check" :class="ns.e('success-icon')" />
          <span :class="ns.e('file-name-success')">
            {{ files[0]?.name }}
          </span>
          <span :class="ns.e('file-size-success')">
            {{ formatFileSize(files[0]?.size) }}
          </span>
        </div>

       
        <div v-if="isError && (!multiple || files.length === 1)" :class="ns.e('single-file-error')">
          <div :class="ns.e('error-content')">
            <g-icon-font name="solid times" :class="ns.e('error-icon')" />
            <span :class="ns.e('error-message')">{{ errorMessage }}</span>
          </div>
        </div>
      </div>
      
      <g-icon-button 
        :icon="headerIcon" 
        variant="blue" 
        border 
        rounded
        size="medium" 
        @click="handleHeaderButtonClick"
        :disabled="disabled" 
        :title="headerTitle"
      />
    </div>

   
    <FileList 
      v-if="showFileList"
      :files="files"
      :disabled="disabled"
      :file-statuses="fileStatuses"
      :file-errors="fileErrors"
      :file-progress="fileProgress"
      :upload-error="isError"
      :uploading="false"
      @remove="$emit('remove', $event)"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useNamespace } from "element-plus";
import { GIconButton } from "@flash-global66/g-icon-button";
import { GIconFont, type IconString } from "@flash-global66/g-icon-font";
import FileList from "./file-list.vue";
import { useAttachFile } from "../../composables/useAttachFile";
import { FileStatus } from "../../constants";

const ns = useNamespace("attach-file");

interface Props {
  title: string;
  infoText: string;
  multiple: boolean;
  files: File[];
  disabled: boolean;
  isSuccess: boolean;
  isError: boolean;
  errorMessage?: string;
  fileStatuses?: Record<number, FileStatus>;
  fileErrors?: Record<number, string>;
  fileProgress?: Record<number, number>;
}

const props = withDefaults(defineProps<Props>(), {
  fileStatuses: () => ({}),
  fileErrors: () => ({}),
  fileProgress: () => ({})
});

const emit = defineEmits<{
  upload: [];
  retry: [];
  remove: [index: number];
  clear: [];
}>();

const { 
  formatFileSize, 
  showInfoText, 
  showFileList, 
  headerIcon, 
  headerTitle
} = useAttachFile({
  files: computed(() => props.files),
  multiple: computed(() => props.multiple),
  uploading: computed(() => false),
  uploadError: computed(() => props.isError)
});

const handleHeaderButtonClick = (evt: MouseEvent) => {
  if (props.isError) {
    emit('retry');
  } else if (props.isSuccess) {
    emit('clear');
  } else {
    emit('upload');
  }
};
</script>

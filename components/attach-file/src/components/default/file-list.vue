<template>
  <div :class="ns.e('file-list')">
    <div v-for="(file, index) in safeFiles" :key="index" :class="ns.e('item')">
      <div :class="ns.e('item-content')">
        <div :class="ns.e('file-status-icon')">
          <g-icon-font 
            :name="getFileStatus(index) === FILE_STATUS.ERROR ? 'solid times' : 'solid check'" 
            :class="[
              ns.e('icon'),
              {
                [ns.is('success')]: getFileStatus(index) !== FILE_STATUS.ERROR,
                [ns.is('error')]: getFileStatus(index) === FILE_STATUS.ERROR
              }
            ]"
          />
        </div>
        <span :class="[
          ns.e('file-name'),
          {
            [ns.is('error')]: getFileStatus(index) === FILE_STATUS.ERROR,
            [ns.is('success')]: getFileStatus(index) !== FILE_STATUS.ERROR
          }
        ]">
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
          @click="!disabled && $emit('remove', index)" 
          title="Eliminar archivo"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useNamespace } from "element-plus";
import { GIconButton } from "@flash-global66/g-icon-button";
import { GIconFont } from "@flash-global66/g-icon-font";
import { useAttachFile } from "../../composables/useAttachFile";
import { FILE_STATUS, FileStatus } from "../../constants";

const ns = useNamespace("attach-file");

interface Props {
  files: File[];
  disabled?: boolean;
  fileStatuses?: Record<number, FileStatus>;
  fileErrors?: Record<number, string>;
  fileProgress?: Record<number, number>;
  uploadError?: boolean;
  uploading?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  fileStatuses: () => ({}),
  fileErrors: () => ({}),
  fileProgress: () => ({})
});

const emit = defineEmits<{
  remove: [index: number];
}>();

const { formatFileSize } = useAttachFile({
  files: computed(() => props.files),
  uploadError: computed(() => props.uploadError)
});

const safeFiles = computed(() => props.files || []);

function getFileStatus(index: number): FileStatus {
  return props.fileStatuses[index] || FILE_STATUS.SUCCESS;
}

function fileName(index: number, file: File): string {
  const error = props.fileErrors[index];
  return error || file.name;
}
</script>

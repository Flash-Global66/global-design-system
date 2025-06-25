import { computed, watch } from "vue";
import { useFormItem, useFormItemInputId } from "@flash-global66/g-form";
import { type FileStatus, type AttachFileProps, type AttachFileEmits, type ValidationError } from "./attach-file.type";
import {
  validateFormEvent,
  fileListToArray,
  parseSizeString,
  getFileStatus,
} from "./attach-file-helpers";

export function useAttachFile(props: AttachFileProps, emit: AttachFileEmits) {
  const { formItem } = useFormItem();
  const { inputId } = useFormItemInputId(props, { formItemContext: formItem || undefined });

  const modelValue = computed(() => props.modelValue || []);
  const multiple = computed(() => props.multiple ?? true);
  const validateEvent = computed(() => props.validateEvent ?? true);
  const uploading = computed(() => props.uploading ?? false);
  const uploadError = computed(() => props.uploadError ?? false);
  const fileErrors = computed(() => props.fileErrors || {});
  const fileProgress = computed(() => props.fileProgress || {});

  const fileStatuses = computed(() => {
    const statuses: Record<number, FileStatus> = {};

    modelValue.value.forEach((file: File, index: number) => {
      statuses[index] = getFileStatus(
        index,
        fileErrors.value,
        Boolean(uploadError.value),
        uploading.value,
        fileProgress.value
      );
    });

    return statuses;
  });

  const displayErrors = computed(() => {
    const combinedErrors: string[] = [];
    
    if (props.errors && Array.isArray(props.errors)) {
      props.errors.forEach((error) => {
        if (typeof error === 'string' && error.trim() && !combinedErrors.includes(error)) {
          combinedErrors.push(error);
        }
      });
    }
    
    if (formItem?.shouldShowErrorChild && formItem?.validateMessage) {
      if (!combinedErrors.includes(formItem.validateMessage)) {
        combinedErrors.push(formItem.validateMessage);
      }
    }
    
    if (uploadError.value && typeof uploadError.value === 'string') {
      if (!combinedErrors.includes(uploadError.value)) {
        combinedErrors.push(uploadError.value);
      }
    }
    
    Object.values(fileErrors.value).forEach((error) => {
      if (typeof error === 'string' && error && !combinedErrors.includes(error)) {
        combinedErrors.push(error);
      }
    });
    
    return combinedErrors;
  });

  function addFiles(newFiles: File[]) {
    const validationErrors: ValidationError[] = [];
    const validFiles: File[] = [];
    
    const acceptedExtensions = props.acceptExtNames?.map((ext: string) => ext.toLowerCase()) || [];
    const currentFiles = multiple.value ? modelValue.value : [];
    
    if (props.maxFiles && (currentFiles.length + newFiles.length) > props.maxFiles) {
      validationErrors.push({
        type: 'max-files-exceeded' as const,
        data: { 
          maxFiles: props.maxFiles, 
          currentFiles: currentFiles.length, 
          attemptedFiles: newFiles.length,
          totalAttempted: currentFiles.length + newFiles.length
        }
      });
      
  
      emit("validation-error", validationErrors);
      return;
    }
    
    newFiles.forEach(file => {
      let fileValid = true;
      
      if (props.maxSize) {
        const maxSizeBytes = parseSizeString(props.maxSize);
        if (maxSizeBytes && file.size > maxSizeBytes) {
          validationErrors.push({
            type: 'file-size-exceeded' as const,
            file,
            data: { maxSize: props.maxSize, actualSize: file.size }
          });
          fileValid = false;
        }
      }
      
      if (acceptedExtensions.length > 0) {
        const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
        if (!acceptedExtensions.includes(fileExtension)) {
          validationErrors.push({
            type: 'invalid-file-type' as const,
            file,
            data: { acceptedExtensions: props.acceptExtNames, actualExtension: fileExtension }
          });
          fileValid = false;
        }
      }
      
      if (fileValid) {
        validFiles.push(file);
      }
    });
    
    if (validationErrors.length > 0) {
      emit("validation-error", validationErrors);
      return;
    }
    
    if (validFiles.length > 0) {
      const updatedFiles = multiple.value 
        ? [...modelValue.value, ...validFiles] 
        : validFiles;

      emit("update:modelValue", updatedFiles);
      emit("change", updatedFiles);

      validateFormEvent(validateEvent.value || false, formItem);
    }
  }

  function onFileInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files) {
      addFiles(fileListToArray(target.files));
      target.value = "";
    }
  }

  function onFilesDrop(files: FileList) {
    addFiles(fileListToArray(files));
  }

  watch(
    () => uploading.value,
    (isUploading) => {
      if (!isUploading) {
        emit("clearProgress");
      }
    },
    { immediate: true }
  );

  return {
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
  };
}

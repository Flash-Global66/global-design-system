import { type Ref } from "vue";
import { debugWarn } from "element-plus/es/utils/index.mjs";
import { FILE_STATUS, type FileStatus } from "./attach-file.type";
import { FILE_SIZE_MULTIPLIERS, FILE_SIZE_UNITS } from "./constants";

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + FILE_SIZE_UNITS[i];
}

export function parseSizeString(sizeString: string | undefined | null): number {
  if (!sizeString || typeof sizeString !== "string") {
    return 0;
  }

  const regex = /^([0-9]+(?:\.[0-9]+)?)\s*(B|KB|MB|GB|TB)$/i;
  const match = sizeString.trim().match(regex);

  if (!match) {
    debugWarn("GAttachFile", `Invalid size format: ${sizeString}. Expected format: "5MB", "500KB", "1.5GB"`);
    return 0;
  }

  const value = parseFloat(match[1]);
  const unit = match[2].toLowerCase() as keyof typeof FILE_SIZE_MULTIPLIERS;

  if (!FILE_SIZE_MULTIPLIERS[unit]) {
    debugWarn("GAttachFile", `Unsupported size unit: ${unit}`);
    return 0;
  }

  return Math.floor(value * FILE_SIZE_MULTIPLIERS[unit]);
}

export function reindexRecordAfterRemoval<T>(
  record: Record<number, T>,
  removedIndex: number
): Record<number, T> {
  const newRecord: Record<number, T> = {};

  Object.keys(record).forEach((key) => {
    const numKey = parseInt(key);
    if (numKey < removedIndex) {
      newRecord[numKey] = record[numKey];
    } else if (numKey > removedIndex) {
      newRecord[numKey - 1] = record[numKey];
    }
  });

  return newRecord;
}

export function validateFormEvent(
  shouldValidate: boolean,
  formItem: any,
  eventType: string = "change"
): void {
  if (shouldValidate && formItem) {
    formItem.validate(eventType).catch((err: any) => debugWarn(err));
  }
}

export function fileListToArray(fileList: FileList | null): File[] {
  return fileList ? Array.from(fileList) : [];
}

export function openFileDialogHelper(
  inputRef: Ref<HTMLInputElement | undefined>,
  disabled = false,
  uploading = false
) {
  if (!disabled && !uploading && inputRef.value) {
    inputRef.value.click();
  }
}

export function getFileStatus(
  index: number,
  fileErrors: Record<number, string>,
  uploadError: boolean,
  uploading: boolean,
  fileProgress: Record<number, number>
): FileStatus {
  if (fileErrors[index]) return FILE_STATUS.ERROR;
  if (uploadError) return FILE_STATUS.ERROR;
  if (uploading || fileProgress[index] !== undefined) return FILE_STATUS.LOADING;
  return FILE_STATUS.SUCCESS;
}

export function createRemoveFileHandler(
  modelValue: File[],
  emit: any,
  shouldPreventWhenLoading = false,
  isLoading = false
) {
  return function removeFile(index: number) {
    if (shouldPreventWhenLoading && isLoading) return;

    const updatedFiles = [...modelValue];
    updatedFiles.splice(index, 1);
    emit("update:modelValue", updatedFiles);
    emit("change", updatedFiles);
  };
}

export function getPrimaryError(errors: string[]): string {
  return errors.length > 0 ? errors[0] : '';
}

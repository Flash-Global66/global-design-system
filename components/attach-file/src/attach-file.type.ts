import type { ComputedRef, Ref } from "vue";

export const ATTACH_FILE_MODES = {
  UPLOAD: "upload",
  DOWNLOAD: "download",
} as const;

export const UPLOAD_STATES = {
  DEFAULT: "default",
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
} as const;

export const FILE_STATUS = {
  SUCCESS: "success",
  ERROR: "error",
  LOADING: "loading",
} as const;

export type AttachFileMode = (typeof ATTACH_FILE_MODES)[keyof typeof ATTACH_FILE_MODES];
export type UploadState = (typeof UPLOAD_STATES)[keyof typeof UPLOAD_STATES];
export type FileStatus = (typeof FILE_STATUS)[keyof typeof FILE_STATUS];

export interface AttachFileProps {
  modelValue: File[];
  type: "default" | "drag-drop";
  mode: AttachFileMode;
  id?: string;
  acceptExtNames: string[];
  maxSize: string;
  multiple: boolean;
  maxFiles?: number;
  disabled: boolean;
  validateEvent: boolean;
  uploadButtonText: string;
  title: string;
  uploadText: string;
  restrictionText: string;
  infoText: string;
  uploading: boolean;
  uploadError: boolean | string;
  fileErrors: Record<number, string>;
  fileProgress: Record<number, number>;
  errors: string[];
  showFileSize: boolean;
  showRemoveButton: boolean;
}

export interface AttachFileEmits {
  (event: "update:modelValue", files: File[]): void;
  (event: "change", files: File[]): void;
  (event: "error", errors: string[]): void;
  (event: "validation-error", errors: ValidationError[]): void;
  (event: "onRetry"): void;
  (event: "download"): void;
  (event: "clearProgress"): void;
}

export interface FileValidationError {
  file: File;
  error: string;
}

export interface ValidationError {
  type: 'file-size-exceeded' | 'invalid-file-type' | 'max-files-exceeded';
  file?: File;
  message?: string;
  data?: {
    maxSize?: string;
    actualSize?: number;
    acceptedExtensions?: string[];
    actualExtension?: string;
    maxFiles?: number;
    currentFiles?: number;
    allowedNewFiles?: number;
    attemptedFiles?: number;
    totalAttempted?: number;
  };
}

export type AttachFileStatus = "idle" | "dragging" | "uploading" | "success" | "error";

export interface BaseTypeProps {
  modelValue: File[];
  multiple: boolean;
  acceptExtNames: string[];
  disabled: boolean;
  errors: string[];
  fileErrors: Record<number, string>;
  fileProgress: Record<number, number>;
  fileStatuses?: Record<number, FileStatus>;
  uploading?: boolean;
  showFileSize: boolean;
  showRemoveButton: boolean;
}

export interface DefaultTypeProps extends BaseTypeProps {
  id?: string;
  mode?: AttachFileMode;
  title: string;
  infoText: string;
  uploadError?: boolean;
  downloadUrl?: string;
  downloadLinkText?: string;
}

export interface DefaultTypeEmits {
  "update:modelValue": (files: File[]) => void;
  change: (files: File[]) => void;
  error: (errors: string[]) => void;
  "onRetry": () => void;
  download: () => void;
  "file-input-change": (event: Event) => void;
}

export interface DragDropTypeProps extends BaseTypeProps {
  id?: string;
  uploadButtonText: string;
  uploadText: string;
  restrictionText?: string;
  maxSize?: string;
  maxFiles?: number;
  loadingState?: boolean;
}

export interface DragDropTypeEmits {
  "update:modelValue": (files: File[]) => void;
  change: (files: File[]) => void;
  error: (errors: string[]) => void;
  "onRetry": () => void;
  "file-input-change": (event: Event) => void;
  "files-drop": (files: FileList) => void;
}

export interface UseAttachFileOptions {
  mode?: ComputedRef<string | undefined> | Ref<string | undefined>;
  multiple?: ComputedRef<boolean | undefined> | Ref<boolean | undefined>;
  files?: ComputedRef<File[] | undefined> | Ref<File[] | undefined>;
  uploading?: ComputedRef<boolean | undefined> | Ref<boolean | undefined>;
  uploadError?: ComputedRef<boolean | undefined> | Ref<boolean | undefined>;
  fileStatuses?: ComputedRef<Record<number, FileStatus> | undefined> | Ref<Record<number, FileStatus> | undefined>;
  fileErrors?: ComputedRef<Record<number, string> | undefined> | Ref<Record<number, string> | undefined>;
}


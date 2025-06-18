import type { ExtractPropTypes, ComputedRef, Ref } from "vue";

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

export const FILE_CATEGORIES = {
  IMAGE: "image",
  DOCUMENT: "document",
  VIDEO: "video",
  AUDIO: "audio",
  ARCHIVE: "archive",
  CODE: "code",
  FILE: "file",
} as const;

export type AttachFileMode = (typeof ATTACH_FILE_MODES)[keyof typeof ATTACH_FILE_MODES];
export type UploadState = (typeof UPLOAD_STATES)[keyof typeof UPLOAD_STATES];
export type FileStatus = (typeof FILE_STATUS)[keyof typeof FILE_STATUS];
export type FileCategory = (typeof FILE_CATEGORIES)[keyof typeof FILE_CATEGORIES];

export interface AttachFileProps {
  modelValue: File[];
  acceptExtNames?: string[];
  maxSize?: number;
  multiple?: boolean;
  disabled?: boolean;
  label?: string;
  placeholder?: string;
}

export interface AttachFileEmits {
  "update:modelValue": (files: File[]) => void;
  change: (files: File[]) => void;
  preview: (data: { file: File; index: number }) => void;
  error: (errors: string[]) => void;
}

export interface FileValidationError {
  file: File;
  error: string;
}

export interface AttachFileInstance {
  addFiles: (files: File[]) => void;
  removeFile: (index: number) => void;
  clearFiles: () => void;
  validateFiles: () => string[];
}

export type AttachFileStatus = "idle" | "dragging" | "uploading" | "success" | "error";

export interface DefaultTypeProps {
  id?: string;
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

export interface DefaultTypeEmits {
  "update:modelValue": [files: File[]];
  change: [files: File[]];
  error: [errors: string[]];
  download: [];
  "file-input-change": [event: Event];
}

export interface DragDropTypeProps {
  inputId?: string;
  modelValue: File[];
  uploadButtonText: string;
  uploadText: string;
  restrictionText?: string;
  acceptExtNames: string[];
  multiple: boolean;
  disabled: boolean;
  maxSize?: string;
  maxFiles?: number;
  errors: string[];
  fileErrors: Record<number, string>;
  fileProgress: Record<number, number>;
  fileStatuses?: Record<number, FileStatus>;
  loadingState?: boolean;
  uploading?: boolean;
  uploadProgress?: number;
}

export interface DragDropTypeEmits {
  "update:modelValue": [files: File[]];
  change: [files: File[]];
  error: [errors: string[]];
  fileInputChange: [event: Event];
  "files-drop": [files: FileList];
}

export interface ValidationErrorsProps {
  errors: string[];
}

export interface UseAttachFileOptions {
  mode?: ComputedRef<string | undefined> | Ref<string | undefined>;
  multiple?: ComputedRef<boolean | undefined> | Ref<boolean | undefined>;
  files?: ComputedRef<File[] | undefined> | Ref<File[] | undefined>;
  uploading?: ComputedRef<boolean | undefined> | Ref<boolean | undefined>;
  uploadError?: ComputedRef<boolean | undefined> | Ref<boolean | undefined>;
  uploadProgress?: ComputedRef<number | undefined> | Ref<number | undefined>;
  fileStatuses?: ComputedRef<Record<number, FileStatus> | undefined> | Ref<Record<number, FileStatus> | undefined>;
  fileErrors?: ComputedRef<Record<number, string> | undefined> | Ref<Record<number, string> | undefined>;
}

export interface AttachFilePropsFromBuildProps {
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
  uploadProgress: number;
  uploadError: string;
  fileStatuses: Record<number, FileStatus>;
}


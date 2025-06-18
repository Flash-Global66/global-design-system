import type { ExtractPropTypes } from "vue";
import { buildProps, definePropType } from "element-plus/es/utils/index.mjs";
import { ATTACH_FILE_MODES, FileStatus, type AttachFileMode } from "./attach-file.type";

export const attachFileProps = buildProps({
  modelValue: {
    type: definePropType<File[]>(Array),
    default: () => [],
  },
  type: {
    type: String,
    values: ["default", "drag-drop"],
    default: "default",
  },
  mode: {
    type: definePropType<AttachFileMode>(String),
    values: Object.values(ATTACH_FILE_MODES),
    default: ATTACH_FILE_MODES.UPLOAD,
  },
  id: {
    type: String,
    default: undefined,
  },
  acceptExtNames: {
    type: definePropType<string[]>(Array),
    default: () => [],
  },
  maxSize: {
    type: String,
    default: "10MB",
  },
  multiple: {
    type: Boolean,
    default: true,
  },
  maxFiles: {
    type: Number,
    default: undefined,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  validateEvent: {
    type: Boolean,
    default: true,
  },
  uploadButtonText: {
    type: String,
    default: "Haz clic para cargar",
  },
  title: {
    type: String,
    default: "Seleccionar archivo",
  },
  uploadText: {
    type: String,
    default: "un archivo o arrástralo aquí",
  },
  restrictionText: {
    type: String,
    default: "",
  },
  infoText: {
    type: String,
    default: "",
  },
  uploading: {
    type: Boolean,
    default: false,
  },
  uploadProgress: {
    type: Number,
    default: 0,
  },
  uploadError: {
    type: String,
    default: "",
  },
  fileStatuses: {
    type: definePropType<Record<number, FileStatus>>(Object),
    default: () => ({}),
  },
} as const);

export const attachFileEmits = {
  "update:modelValue": (files: File[]) => true,
  change: (files: File[]) => true,
  preview: (data: { file: File; index: number }) => true,
  error: (errors: string[]) => true,
  retry: () => true,
  onRetry: () => true,
  download: () => true,
};

export type AttachFilePropsType = ExtractPropTypes<typeof attachFileProps>;
export type AttachFileEmitsType = typeof attachFileEmits;


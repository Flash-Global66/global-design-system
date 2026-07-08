import type { ExtractPropTypes, PropType } from 'vue';
import { buildProps, definePropType } from '@flash-global66/g-utils';
import {
  ATTACH_FILE_MODES,
  type AttachFileMode,
  type ValidationError,
} from './attach-file.type';

export const attachFileProps = buildProps({
  modelValue: {
    type: definePropType<File[]>(Array),
    default: () => [],
  },
  type: {
    type: String as PropType<'default' | 'drag-drop'>,
    values: ['default', 'drag-drop'],
    default: 'default',
  },
  mode: {
    type: String as PropType<AttachFileMode>,
    values: Object.values(ATTACH_FILE_MODES),
    default: ATTACH_FILE_MODES.UPLOAD,
  },
  inputId: {
    type: String as PropType<string>,
    default: undefined,
  },
  acceptExtNames: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
  maxSize: {
    type: String as PropType<string>,
    default: '10MB',
  },
  multiple: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  maxFiles: {
    type: Number as PropType<number>,
    default: undefined,
  },
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  validateEvent: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  uploadButtonText: {
    type: String as PropType<string>,
    default: '',
  },
  title: {
    type: String as PropType<string>,
    default: '',
  },
  uploadText: {
    type: String as PropType<string>,
    default: '',
  },
  restrictionText: {
    type: String as PropType<string>,
    default: '',
  },
  infoText: {
    type: String as PropType<string>,
    default: '',
  },
  downloadUrl: {
    type: String as PropType<string>,
    default: '',
  },
  downloadLinkText: {
    type: String as PropType<string>,
    default: '',
  },
  uploading: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  uploadError: {
    type: [Boolean, String] as PropType<boolean | string>,
    default: false,
  },
  fileErrors: {
    type: Object as PropType<Record<number, string>>,
    default: () => ({}),
  },
  fileProgress: {
    type: Object as PropType<Record<number, number>>,
    default: () => ({}),
  },
  errors: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
  showFileSize: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  showRemoveButton: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  showUploadButton: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
} as const);

export const attachFileEmits = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- param kept for emit payload type inference
  'update:modelValue': (files: File[]) => true,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- param kept for emit payload type inference
  change: (files: File[]) => true,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- param kept for emit payload type inference
  error: (errors: string[]) => true,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- param kept for emit payload type inference
  'validation-error': (errors: ValidationError[]) => true,
  onRetry: () => true,
  download: () => true,
  clearProgress: () => true,
};

export type AttachFilePropsType = ExtractPropTypes<typeof attachFileProps>;
export type AttachFileEmitsType = typeof attachFileEmits;

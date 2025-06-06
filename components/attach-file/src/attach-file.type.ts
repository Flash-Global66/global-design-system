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
  'update:modelValue': (files: File[]) => void;
  'change': (files: File[]) => void;
  'preview': (data: { file: File; index: number }) => void;
  'error': (errors: string[]) => void;
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

export type AttachFileStatus = 'idle' | 'dragging' | 'uploading' | 'success' | 'error';

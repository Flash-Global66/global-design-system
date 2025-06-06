export const ATTACH_FILE_MODES = {
  UPLOAD: 'upload',
  DOWNLOAD: 'download'
} as const;

export const UPLOAD_STATES = {
  DEFAULT: 'default',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error'
} as const;

export const FILE_STATUS = {
  SUCCESS: 'success',
  ERROR: 'error',
  LOADING: 'loading'
} as const;

export type AttachFileMode = typeof ATTACH_FILE_MODES[keyof typeof ATTACH_FILE_MODES];
export type UploadState = typeof UPLOAD_STATES[keyof typeof UPLOAD_STATES];
export type FileStatus = typeof FILE_STATUS[keyof typeof FILE_STATUS];

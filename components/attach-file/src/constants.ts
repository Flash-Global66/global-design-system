import {
  ATTACH_FILE_MODES,
  UPLOAD_STATES,
  FILE_STATUS,
  FILE_CATEGORIES,
  type AttachFileMode,
  type UploadState,
  type FileStatus,
  type FileCategory,
} from "./attach-file.type";

export {
  ATTACH_FILE_MODES,
  UPLOAD_STATES,
  FILE_STATUS,
  FILE_CATEGORIES,
  type AttachFileMode,
  type UploadState,
  type FileStatus,
  type FileCategory,
};

export const FILE_EXTENSIONS = {
  IMAGE: ["jpg", "jpeg", "png", "gif", "webp", "svg", "bmp", "ico"],
  DOCUMENT: ["pdf", "doc", "docx", "txt", "rtf", "xls", "xlsx", "ppt", "pptx", "csv"],
  VIDEO: ["mp4", "avi", "mov", "wmv", "flv", "webm"],
  AUDIO: ["mp3", "wav", "flac", "aac", "ogg"],
  ARCHIVE: ["zip", "rar", "7z", "tar", "gz"],
  CODE: ["js", "json", "xml", "html", "css"],
} as const;

export const EXTENSION_TO_MIME_TYPE: Record<string, string[]> = {
  jpg: ["image/jpeg"],
  jpeg: ["image/jpeg"],
  png: ["image/png"],
  gif: ["image/gif"],
  webp: ["image/webp"],
  svg: ["image/svg+xml"],
  bmp: ["image/bmp"],
  ico: ["image/x-icon", "image/vnd.microsoft.icon"],

  pdf: ["application/pdf"],
  doc: ["application/msword"],
  docx: ["application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
  xls: ["application/vnd.ms-excel"],
  xlsx: ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
  ppt: ["application/vnd.ms-powerpoint"],
  pptx: ["application/vnd.openxmlformats-officedocument.presentationml.presentation"],
  txt: ["text/plain"],
  rtf: ["application/rtf", "text/rtf"],
  csv: ["text/csv"],

  mp3: ["audio/mpeg", "audio/mp3"],
  wav: ["audio/wav", "audio/wave"],
  flac: ["audio/flac"],
  aac: ["audio/aac"],
  ogg: ["audio/ogg"],

  mp4: ["video/mp4"],
  avi: ["video/x-msvideo"],
  mov: ["video/quicktime"],
  wmv: ["video/x-ms-wmv"],
  flv: ["video/x-flv"],
  webm: ["video/webm"],

  zip: ["application/zip"],
  rar: ["application/vnd.rar", "application/x-rar-compressed"],
  "7z": ["application/x-7z-compressed"],
  tar: ["application/x-tar"],
  gz: ["application/gzip"],

  json: ["application/json"],
  xml: ["application/xml", "text/xml"],
  html: ["text/html"],
  css: ["text/css"],
  js: ["application/javascript", "text/javascript"],
} as const;

export const FILE_SIZE_MULTIPLIERS = {
  b: 1,
  kb: 1024,
  mb: 1024 * 1024,
  gb: 1024 * 1024 * 1024,
  tb: 1024 * 1024 * 1024 * 1024,
} as const;

export const FILE_SIZE_UNITS = ["Bytes", "KB", "MB", "GB", "TB"] as const;

export const GENERIC_MIME_TYPES = ["application/octet-stream", ""] as const;


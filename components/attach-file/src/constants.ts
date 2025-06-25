export const FILE_SIZE_MULTIPLIERS = {
  b: 1,
  kb: 1024,
  mb: 1024 * 1024,
  gb: 1024 * 1024 * 1024,
  tb: 1024 * 1024 * 1024 * 1024,
} as const;

export const FILE_SIZE_UNITS = ["Bytes", "KB", "MB", "GB", "TB"] as const;
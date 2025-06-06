import { computed, ComputedRef, Ref, unref } from 'vue'
import { ATTACH_FILE_MODES } from '../constants'

export interface UseAttachFileOptions {
  mode?: ComputedRef<string | undefined> | Ref<string | undefined>
  multiple?: ComputedRef<boolean | undefined> | Ref<boolean | undefined>
  files?: ComputedRef<File[] | undefined> | Ref<File[] | undefined>
  uploading?: ComputedRef<boolean | undefined> | Ref<boolean | undefined>
  uploadError?: ComputedRef<boolean | undefined> | Ref<boolean | undefined>
  uploadProgress?: ComputedRef<number | undefined> | Ref<number | undefined>
}

/**
 * Composable simplificado para la lógica básica del attach-file
 */
export function useAttachFile(options: UseAttachFileOptions) {
  const uploadState = computed(() => {
    if (unref(options.uploadError)) return "error"
    if (unref(options.uploading)) return "loading"
    return (unref(options.files)?.length || 0) > 0 ? "success" : "default"
  })

  const isSuccess = computed(() => uploadState.value === 'success')
  const isError = computed(() => uploadState.value === 'error')

  const isSingleFileView = computed(() => 
    !unref(options.multiple) || (unref(options.files)?.length || 0) === 1
  )

  const isMultipleFilesView = computed(() => 
    unref(options.multiple) && (unref(options.files)?.length || 0) > 1
  )

  const showInfoText = computed(() => 
    unref(options.multiple) || (isError.value && (!unref(options.multiple) || (unref(options.files)?.length || 0) === 1))
  )

  const showFileList = computed(() => 
    unref(options.multiple) && (unref(options.files)?.length || 0) > 1
  )

  const buttonIcon = computed(() => 
    unref(options.mode) === ATTACH_FILE_MODES.DOWNLOAD ? 'solid download' : 'solid upload'
  )

  const headerIcon = computed(() => {
    if (isError.value) return 'solid upload'
    if (isSuccess.value) return 'solid trash-alt'
    return 'solid upload'
  })

  const headerTitle = computed(() => {
    const multiple = unref(options.multiple)
    if (isError.value) {
      return multiple ? 'Volver a subir archivos' : 'Volver a subir archivo'
    }
    if (isSuccess.value) {
      return multiple ? 'Limpiar archivos' : 'Limpiar archivo'
    }
    return 'Subir archivo(s)'
  })

  function formatFileSize(bytes: number): string {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  function parseSizeString(sizeString: string | undefined | null): number {
    if (!sizeString || typeof sizeString !== "string") {
      return 0
    }

    const regex = /^([0-9]+(?:\.[0-9]+)?)\s*(B|KB|MB|GB|TB)$/i
    const match = sizeString.trim().match(regex)

    if (!match) {
      console.warn(`Invalid size format: ${sizeString}. Expected format: "5MB", "500KB", "1.5GB"`)
      return 0
    }

    const value = parseFloat(match[1])
    const unit = match[2].toLowerCase()

    const multipliers: Record<string, number> = {
      b: 1,
      kb: 1024,
      mb: 1024 * 1024,
      gb: 1024 * 1024 * 1024,
      tb: 1024 * 1024 * 1024 * 1024,
    }

    return Math.floor(value * multipliers[unit])
  }

  function getProgress(): number {
    return Math.round(unref(options.uploadProgress) || 0)
  }

  function validateFile(file: File, maxSize?: string, acceptExtNames?: string[]): string | null {
    const effectiveMaxSize = parseSizeString(maxSize)
    if (effectiveMaxSize && file.size > effectiveMaxSize) {
      return `El archivo "${file.name}" excede el tamaño máximo de ${formatFileSize(effectiveMaxSize)}`
    }

    const fileNameParts = file.name.split(".");
    const fileExtension = fileNameParts.length > 1 ? fileNameParts.pop()!.toLowerCase() : "";

    if (acceptExtNames?.length) {
      const normalizedAcceptExtNames = acceptExtNames.map(ext => 
        (ext.startsWith('.') ? ext.substring(1) : ext).toLowerCase()
      );
      if (!normalizedAcceptExtNames.includes(fileExtension)) {
        return `El archivo "${file.name}" tiene un formato no compatible. Formatos permitidos: ${acceptExtNames.join(", ")}`
      }
    }

    return null
  }



  function validateFiles(files: File[], maxSize?: string, acceptExtNames?: string[]): string[] {
    const validationErrors: string[] = []
    files.forEach((file) => {
      const error = validateFile(file, maxSize, acceptExtNames)
      if (error) {
        validationErrors.push(error)
      }
    })
    return validationErrors
  }

  function validateFileCount(currentFilesCount: number, newFilesCount: number, maxFiles?: number): string | null {
    if (maxFiles && (currentFilesCount + newFilesCount) > maxFiles) {
      return `Se permite un máximo de ${maxFiles} archivos. Actualmente tienes ${currentFilesCount} archivos y estás intentando agregar ${newFilesCount} más.`
    }
    return null
  }

  function handleHeaderClick(callbacks: { retry?: () => void, clear?: () => void, upload?: () => void }) {
    if (isError.value && callbacks.retry) {
      callbacks.retry()
    } else if (isSuccess.value && callbacks.clear) {
      callbacks.clear()
    } else if (callbacks.upload) {
      callbacks.upload()
    }
  }

  function removeFile(index: number, files: File[], callback: (newFiles: File[]) => void) {
    const updatedFiles = [...files]
    updatedFiles.splice(index, 1)
    callback(updatedFiles)
  }

  function clearAllFiles(callback: () => void) {
    callback()
  }

  return {
    uploadState,
    isSuccess,
    isError,
    isSingleFileView,
    isMultipleFilesView,
    showInfoText,
    showFileList,
    buttonIcon,
    headerIcon,
    headerTitle,
    formatFileSize,
    parseSizeString,
    getProgress,
    validateFile,
    validateFiles,
    validateFileCount,
    handleHeaderClick,
    removeFile,
    clearAllFiles
  }
}


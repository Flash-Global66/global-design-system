import { computed, ComputedRef, Ref, unref } from 'vue'
import { 
  ATTACH_FILE_MODES, 
  EXTENSION_TO_MIME_TYPE, 
  FILE_SIZE_MULTIPLIERS, 
  FILE_SIZE_UNITS,
  FILE_EXTENSIONS,
  FILE_CATEGORIES,
  GENERIC_MIME_TYPES
} from '../constants'

export interface UseAttachFileOptions {
  mode?: ComputedRef<string | undefined> | Ref<string | undefined>
  multiple?: ComputedRef<boolean | undefined> | Ref<boolean | undefined>
  files?: ComputedRef<File[] | undefined> | Ref<File[] | undefined>
  uploading?: ComputedRef<boolean | undefined> | Ref<boolean | undefined>
  uploadError?: ComputedRef<boolean | undefined> | Ref<boolean | undefined>
  uploadProgress?: ComputedRef<number | undefined> | Ref<number | undefined>
}

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
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + FILE_SIZE_UNITS[i]
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

    return Math.floor(value * FILE_SIZE_MULTIPLIERS[unit as keyof typeof FILE_SIZE_MULTIPLIERS])
  }

  function getProgress(): number {
    return Math.round(unref(options.uploadProgress) || 0)
  }


  function getValidMimeTypes(extensions: string[]): string[] {
    const validMimeTypes: string[] = [];
    
    extensions.forEach(ext => {
      const normalizedExt = ext.startsWith('.') ? ext.substring(1).toLowerCase() : ext.toLowerCase();
      const mimeTypes = EXTENSION_TO_MIME_TYPE[normalizedExt];
      if (mimeTypes) {
        validMimeTypes.push(...mimeTypes);
      }
    });

    return [...new Set(validMimeTypes)];
  }

  function validateMimeType(file: File, acceptExtNames: string[]): boolean {
    if (!acceptExtNames?.length) return true;
    
    const validMimeTypes = getValidMimeTypes(acceptExtNames);
    
    if (validMimeTypes.length === 0) {
      return validateFileExtension(file.name, acceptExtNames);
    }
    
    if (validMimeTypes.includes(file.type)) {
      return true;
    }
    
    if (!file.type || GENERIC_MIME_TYPES.includes(file.type as any)) {
      return validateFileExtension(file.name, acceptExtNames);
    }
    
    return false;
  }

  function validateFileExtension(fileName: string, acceptExtNames: string[]): boolean {
    const fileNameParts = fileName.split(".");
    const fileExtension = fileNameParts.length > 1 ? fileNameParts.pop()!.toLowerCase() : "";
    
    const normalizedAcceptExtNames = acceptExtNames.map(ext => 
      (ext.startsWith('.') ? ext.substring(1) : ext).toLowerCase()
    );
    
    return normalizedAcceptExtNames.includes(fileExtension);
  }

  function validateFile(file: File, maxSize?: string, acceptExtNames?: string[]): string | null {
    const effectiveMaxSize = parseSizeString(maxSize)
    if (effectiveMaxSize && file.size > effectiveMaxSize) {
      return `El archivo "${file.name}" excede el tamaño máximo permitido de ${formatFileSize(effectiveMaxSize)}`
    }

    if (acceptExtNames?.length) {
      const isValidMimeType = validateMimeType(file, acceptExtNames);
      if (!isValidMimeType) {
        const formattedExtensions = formatExtensions(acceptExtNames);
        return `El archivo "${file.name}" no tiene un formato compatible. Formatos permitidos: ${formattedExtensions}`
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
      const totalFiles = currentFilesCount + newFilesCount;
      const fileWord = maxFiles === 1 ? 'archivo' : 'archivos';
      return `Se permite un máximo de ${maxFiles} ${fileWord}. Intenta subir ${maxFiles - currentFilesCount} ${fileWord} o menos.`
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

  function formatExtensions(extensions: string[]): string {
    return extensions.map(ext => 
      ext.startsWith('.') ? ext : `.${ext}`
    ).join(", ");
  }

  function getFileType(fileName: string, mimeType?: string): string {
    if (mimeType) {
      if (mimeType.startsWith('image/')) return FILE_CATEGORIES.IMAGE;
      if (mimeType.startsWith('video/')) return FILE_CATEGORIES.VIDEO;
      if (mimeType.startsWith('audio/')) return FILE_CATEGORIES.AUDIO;
      if (mimeType.includes('pdf') || 
          mimeType.includes('msword') || 
          mimeType.includes('officedocument') ||
          mimeType.includes('text/')) return FILE_CATEGORIES.DOCUMENT;
    }
    
    const fileNameParts = fileName.split(".");
    const extension = fileNameParts.length > 1 ? fileNameParts.pop()!.toLowerCase() : "";
    
    if ((FILE_EXTENSIONS.IMAGE as readonly string[]).includes(extension)) return FILE_CATEGORIES.IMAGE;
    if ((FILE_EXTENSIONS.DOCUMENT as readonly string[]).includes(extension)) return FILE_CATEGORIES.DOCUMENT;
    if ((FILE_EXTENSIONS.VIDEO as readonly string[]).includes(extension)) return FILE_CATEGORIES.VIDEO;
    if ((FILE_EXTENSIONS.AUDIO as readonly string[]).includes(extension)) return FILE_CATEGORIES.AUDIO;
    if ((FILE_EXTENSIONS.ARCHIVE as readonly string[]).includes(extension)) return FILE_CATEGORIES.ARCHIVE;
    if ((FILE_EXTENSIONS.CODE as readonly string[]).includes(extension)) return FILE_CATEGORIES.CODE;
    
    return FILE_CATEGORIES.FILE;
  }

  function isFileDuplicate(newFile: File, existingFiles: File[]): boolean {
    return existingFiles.some(existingFile => 
      existingFile.name === newFile.name && 
      existingFile.size === newFile.size &&
      existingFile.lastModified === newFile.lastModified
    );
  }

  function removeDuplicateFiles(newFiles: File[], existingFiles: File[]): File[] {
    return newFiles.filter(newFile => !isFileDuplicate(newFile, existingFiles));
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
    validateMimeType,
    validateFileExtension,
    getValidMimeTypes,
    handleHeaderClick,
    removeFile,
    clearAllFiles,
    formatExtensions,
    getFileType,
    isFileDuplicate,
    removeDuplicateFiles
  }
}


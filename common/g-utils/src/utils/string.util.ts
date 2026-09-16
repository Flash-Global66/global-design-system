/**
 * Portado byte-exact desde `escapeStringRegexp` de element-plus 2.9.7
 * (`es/utils/strings.mjs`).
 *
 * Escapa los caracteres especiales de una `RegExp` para poder construir un
 * patrón seguro a partir de texto arbitrario (usado por `select` para
 * filtrar opciones por el texto que el usuario escribe).
 */
export const escapeStringRegexp = (string = ''): string =>
  string.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d');

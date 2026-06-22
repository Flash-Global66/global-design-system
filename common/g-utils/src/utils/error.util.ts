import { isString } from './validators.util'

/**
 * Error interno del paquete g-utils.
 * Extiende `Error` para identificar advertencias originadas en esta librería.
 */
class GUtilsError extends Error {
  constructor(m: string) {
    super(m)
    this.name = 'GUtilsError'
  }
}

/**
 * Emite una advertencia en la consola del navegador o de Node.js,
 * pero solo en entornos que no sean producción (`process.env.NODE_ENV !== 'production'`).
 *
 * El mensaje sigue el formato `[scope] message` para facilitar la identificación
 * del componente o módulo que genera la advertencia.
 *
 * @param scope - Nombre del componente o módulo que emite la advertencia (ej: `'Button'`).
 * @param message - Descripción del problema o comportamiento inesperado.
 *
 * @example
 * debugWarn('Button', `Variante no válida: "${variant}". Se esperaba 'primary' | 'secondary'.`)
 * // Imprime en consola: [GUtilsError: [Button] Variante no válida: "ghost". Se esperaba 'primary' | 'secondary'.]
 */
export function debugWarn(scope: string, message: string): void {
  if (process.env.NODE_ENV !== 'production') {
    const error = isString(scope)
      ? new GUtilsError(`[${scope}] ${message}`)
      : scope
    console.warn(error)
  }
}

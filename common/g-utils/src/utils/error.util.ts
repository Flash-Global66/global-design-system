import { isString } from './validators.util';

/**
 * Error interno del paquete g-utils.
 * Extiende `Error` para identificar advertencias originadas en esta librería.
 */
class GUtilsError extends Error {
  constructor(m: string) {
    super(m);
    this.name = 'GUtilsError';
  }
}

/**
 * Emite una advertencia en la consola, pero solo en entornos de desarrollo
 * (`import.meta.env.DEV`). En producción no hace nada, por lo que el bundler
 * puede eliminar el bloque por tree-shaking.
 *
 * El mensaje sigue el formato `[scope] message` para facilitar la identificación
 * del componente o módulo que genera la advertencia.
 *
 * @param scope - Nombre del componente o módulo que emite la advertencia (ej: `'Button'`).
 * @param message - Descripción del problema o comportamiento inesperado.
 *
 * También acepta un `Error` ya construido como único argumento (ej: para
 * reenviar el motivo de un `catch`), copiando la sobrecarga exacta de
 * element-plus.
 *
 * @example
 * debugWarn('Button', `Variante no válida: "${variant}". Se esperaba 'primary' | 'secondary'.`)
 * // Imprime en consola: [GUtilsError: [Button] Variante no válida: "ghost". Se esperaba 'primary' | 'secondary'.]
 */
export function debugWarn(err: Error): void;
export function debugWarn(scope: string, message: string): void;
export function debugWarn(scope: string | Error, message?: string): void {
  if (import.meta.env.DEV) {
    const error = isString(scope)
      ? new GUtilsError(`[${scope}] ${message}`)
      : scope;
    console.warn(error);
  }
}

/**
 * Lanza un `GUtilsError` con un mensaje formateado como `[scope] message`.
 *
 * A diferencia de `debugWarn`, se ejecuta en todos los entornos (no solo
 * desarrollo), ya que representa un error de uso irrecuperable, no una
 * advertencia.
 *
 * @param scope - Nombre del componente o módulo que origina el error.
 * @param message - Descripción del error.
 * @throws Siempre lanza un `GUtilsError`.
 *
 * @example
 * throwError('useProp', 'useProp() must be called inside setup().')
 */
export function throwError(scope: string, message: string): never {
  throw new GUtilsError(`[${scope}] ${message}`);
}

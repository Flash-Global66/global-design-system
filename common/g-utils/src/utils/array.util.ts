import { castArray } from 'lodash-unified';

/**
 * Comprueba si un valor es un array nativo.
 *
 * Actúa como type guard de TypeScript.
 *
 * @param val - El valor a verificar.
 * @returns `true` si `val` es un array.
 *
 * @example
 * if (isArray(val)) {
 *   // val es unknown[] aquí
 * }
 */
export const isArray = (val: unknown): val is unknown[] => Array.isArray(val);

/**
 * Garantiza que un valor sea un array.
 *
 * Envuelve valores escalares en un array de un solo elemento; los arrays
 * se retornan sin cambios; `null`/`undefined` se convierten en un array vacío.
 *
 * Delega en `castArray` de `lodash-unified` (la misma implementación que usa
 * element-plus internamente) para el caso general, con un guard explícito
 * para `null`/`undefined`: `lodash`'s `castArray(value)` solo retorna `[]`
 * cuando se invoca SIN argumentos — invocarlo con un `undefined` explícito
 * retorna `[undefined]` (ver `lodash-es/castArray.js`). Ese comportamiento es
 * un footgun de `arguments.length`, no un contrato deseable para nuestros
 * consumidores, así que lo normalizamos aquí explícitamente.
 *
 * @param val - El valor a envolver.
 * @returns Un array que contiene `val`, o `val` si ya era un array.
 *
 * @example
 * ensureArray(1) // [1]
 * ensureArray([1, 2]) // [1, 2]
 * ensureArray(undefined) // []
 * ensureArray(null) // []
 */
export const ensureArray = <T>(val?: T | T[] | null): T[] => {
  if (val === undefined || val === null) return [];
  return castArray(val);
};

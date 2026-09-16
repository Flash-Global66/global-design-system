import { castArray as lodashCastArray } from 'lodash-unified';

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
  return lodashCastArray(val);
};

/**
 * Convierte un valor en array, tratando los valores "falsy" (excepto `0`) como
 * un array vacío.
 *
 * A diferencia de `ensureArray` (que delega en `lodash`), este helper replica
 * el `castArray` interno de element-plus: `null`/`undefined`/`''`/`false`
 * retornan `[]`, mientras que `0` sí se envuelve en `[0]`. Copiado byte a byte
 * del algoritmo de element-plus para mantener paridad con los consumidores
 * migrados (ej: `date-picker`).
 *
 * @param arr - El valor a convertir en array.
 * @returns Un array con `arr`, `arr` mismo si ya era array, o `[]` si es falsy (salvo `0`).
 *
 * @example
 * castArray(1) // [1]
 * castArray(0) // [0]
 * castArray('') // []
 * castArray(null) // []
 */
export const castArray = <T>(arr: T | T[]): T[] => {
  if (!arr && arr !== 0) return [];
  return isArray(arr) ? (arr as T[]) : [arr];
};

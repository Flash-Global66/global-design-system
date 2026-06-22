/**
 * Comprueba si un valor es de tipo `boolean`.
 *
 * Actúa como type guard de TypeScript: en el bloque `if` el compilador
 * infiere el tipo del valor como `boolean`.
 *
 * @param val - El valor a verificar.
 * @returns `true` si `val` es estrictamente `true` o `false`.
 *
 * @example
 * if (isBoolean(val)) {
 *   // val es boolean aquí
 * }
 */
export const isBoolean = (val: unknown): val is boolean =>
  typeof val === 'boolean'

/**
 * Comprueba si un valor es de tipo `string`.
 *
 * Actúa como type guard de TypeScript: en el bloque `if` el compilador
 * infiere el tipo del valor como `string`.
 *
 * @param val - El valor a verificar.
 * @returns `true` si `val` es una cadena de texto (incluyendo la cadena vacía).
 *
 * @example
 * if (isString(val)) {
 *   // val es string aquí
 * }
 */
export const isString = (val: unknown): val is string => typeof val === 'string'

/**
 * Comprueba si un valor es un objeto no nulo (incluye arrays y objetos planos).
 *
 * Actúa como type guard de TypeScript.
 *
 * @param val - El valor a verificar.
 * @returns `true` si `val` es un objeto distinto de `null`.
 *
 * @example
 * if (isObject(val)) {
 *   // val es Record<string, unknown> aquí
 * }
 */
export const isObject = (val: unknown): val is Record<string, unknown> =>
  val !== null && typeof val === 'object'

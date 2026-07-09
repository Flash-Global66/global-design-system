import { componentSizes, ComponentSize } from '../types/component.type';
import { isFunction } from './function.util';

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
  typeof val === 'boolean';

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
export const isString = (val: unknown): val is string =>
  typeof val === 'string';

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
  val !== null && typeof val === 'object';

/**
 * Comprueba si un valor es un tamaño de componente válido.
 *
 * Usa `componentSizes` (que incluye `''` para paridad con el validador de
 * element-plus) como fuente de verdad de los valores aceptados.
 *
 * @param val - El valor a verificar.
 * @returns `true` si `val` pertenece a `componentSizes`.
 */
export const isValidComponentSize = (val: string): val is ComponentSize | '' =>
  (componentSizes as readonly string[]).includes(val);

/**
 * Comprueba si un valor es una `Promise` nativa o un objeto/función
 * "thenable" (con métodos `then` y `catch`).
 *
 * Replica el algoritmo de `@vue/shared` (reexportado por element-plus como
 * `isPromise`): acepta tanto objetos como funciones, siempre que expongan
 * `then` y `catch`, para cubrir thenables invocables.
 *
 * Actúa como type guard de TypeScript.
 *
 * @param val - El valor a verificar.
 * @returns `true` si `val` es una `Promise` o un thenable.
 */
export const isPromise = <T = unknown>(val: unknown): val is Promise<T> =>
  (isObject(val) || isFunction(val)) &&
  isFunction((val as Record<string, unknown>).then) &&
  isFunction((val as Record<string, unknown>).catch);

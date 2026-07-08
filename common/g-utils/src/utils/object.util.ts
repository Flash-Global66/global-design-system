import { get, isNil, set } from 'lodash-unified';
import type { Arrayable } from '../types/utils.type';

/**
 * Comprueba si un valor es exactamente `undefined`.
 *
 * Actúa como type guard de TypeScript.
 *
 * @param val - El valor a verificar.
 * @returns `true` si `val` es `undefined`.
 */
export const isUndefined = (val: unknown): val is undefined =>
  val === undefined;

/**
 * Comprueba si una prop está "ausente" (`null` o `undefined`).
 *
 * Copiado del comportamiento exacto de `isPropAbsent` de element-plus
 * (basado en `isNil` de lodash) para mantener paridad de comportamiento.
 *
 * @param prop - El valor a verificar.
 * @returns `true` si `prop` es `null` o `undefined`.
 */
export const isPropAbsent = (prop: unknown): boolean => isNil(prop);

/**
 * Comprueba si un objeto tiene una propiedad propia (no heredada).
 *
 * @param val - El objeto a verificar.
 * @param key - La clave a comprobar.
 * @returns `true` si `key` es una propiedad propia de `val`.
 */
export const hasOwn = (val: object, key: string | symbol): boolean =>
  Object.prototype.hasOwnProperty.call(val, key);

/** Referencia mutable (con getter/setter) a una ruta anidada de un objeto. */
export interface GetPropRef<T> {
  value: T;
}

/**
 * Lee (y permite escribir) una ruta anidada de un objeto usando notación de
 * puntos (ej: `'a.b.c'`), incluyendo objetos reactivos de Vue.
 *
 * Copiado del algoritmo exacto de element-plus (basado en `get`/`set` de
 * lodash) para mantener paridad de comportamiento con los consumidores
 * migrados.
 *
 * @param obj - El objeto (posiblemente reactivo) a leer/escribir.
 * @param path - La ruta anidada en notación de puntos.
 * @param defaultValue - Valor a retornar si la ruta no existe.
 * @returns Un objeto con getter/setter `value` sobre la ruta indicada.
 *
 * @example
 * getProp({ a: { b: { c: 42 } } }, 'a.b.c').value // 42
 * getProp({ a: 1 }, 'x.y', 'fallback').value // 'fallback'
 */
export const getProp = <T = any>(
  obj: Record<string, any>,
  path: Arrayable<string>,
  defaultValue?: any,
): GetPropRef<T> => ({
  get value() {
    return get(obj, path, defaultValue);
  },
  set value(val: T) {
    set(obj, path, val);
  },
});

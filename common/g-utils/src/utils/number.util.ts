import { isString } from './validators.util';
import { debugWarn } from './error.util';

const SCOPE = 'addUnit';

/**
 * Comprueba si un valor es de tipo `number`.
 *
 * Actúa como type guard de TypeScript.
 *
 * @param val - El valor a verificar.
 * @returns `true` si `val` es un número.
 *
 * @example
 * if (isNumber(val)) {
 *   // val es number aquí
 * }
 */
export const isNumber = (val: unknown): val is number =>
  typeof val === 'number';

/** Comprueba si un string representa un número válido (ej: `'42'`). */
const isStringNumber = (val: unknown): boolean => {
  if (!isString(val)) return false;
  return !Number.isNaN(Number(val));
};

/**
 * Normaliza un valor de dimensión CSS agregando la unidad por defecto.
 *
 * Copiado del comportamiento exacto de `addUnit` de element-plus para
 * mantener paridad con los consumidores migrados.
 *
 * @param value - Número, string numérico, o string con unidad ya incluida.
 * @param defaultUnit - Unidad a anexar cuando `value` es numérico. Por defecto `'px'`.
 * @returns El valor con unidad (ej: `'10px'`), el string original, o `''` si `value` es falsy.
 *
 * @example
 * addUnit(10)        // '10px'
 * addUnit('10')      // '10px'
 * addUnit('10rem')   // '10rem'
 * addUnit('')        // ''
 * addUnit(undefined) // ''
 */
export function addUnit(
  value?: string | number,
  defaultUnit = 'px',
): string | undefined {
  if (!value) return '';
  if (isNumber(value) || isStringNumber(value)) {
    return `${value}${defaultUnit}`;
  } else if (isString(value)) {
    return value;
  }
  debugWarn(SCOPE, 'binding value must be a string or number');
}

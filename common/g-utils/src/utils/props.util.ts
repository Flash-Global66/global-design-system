import type { PropType } from 'vue';
import { warn } from 'vue';
import { isObject } from './validators.util';

/**
 * Clave interna que marca una prop ya procesada por `buildProp`.
 * Evita procesar la misma prop dos veces en el pipeline de validación.
 */
export const epPropKey = '__epPropKey';

/**
 * Define el tipo de una prop de Vue con inferencia genérica precisa.
 *
 * @param val - El constructor o tipo que se asignará a la prop.
 * @returns El valor casteado como `PropType<T>`.
 *
 * @example
 * const type = definePropType<'primary' | 'secondary'>(String)
 */
export const definePropType = <T>(val: any): PropType<T> => val;

/**
 * Comprueba si un valor ya fue procesado por `buildProp`.
 *
 * @param val - Valor a verificar.
 * @returns `true` si el valor es un objeto marcado con la clave interna de ep-prop.
 */
export const isEpProp = (val: unknown): val is Record<string, unknown> =>
  isObject(val) && !!(val as any)[epPropKey];

/**
 * Construye y valida la definición de una única prop de Vue.
 *
 * Procesa los campos `type`, `required`, `default`, `values` y `validator`
 * para generar un objeto prop compatible con `defineComponent`. Si la prop
 * define un conjunto de `values`, añade un validador automático que emite
 * una advertencia de Vue cuando el valor no pertenece al conjunto.
 *
 * @param prop - Definición de la prop (puede ser un objeto plano o un valor primitivo).
 * @param key - Nombre de la prop (para mensajes de advertencia más descriptivos).
 * @returns La definición de la prop con validador integrado.
 *
 * @example
 * const sizeProp = buildProp({ type: String, values: ['sm', 'md', 'lg'], default: 'md' }, 'size')
 */
export const buildProp = <T>(prop: T, key?: string): T => {
  if (!isObject(prop) || isEpProp(prop)) return prop;

  const {
    values,
    required,
    default: defaultValue,
    type,
    validator,
  } = prop as any;

  const _validator =
    values || validator
      ? (val: unknown) => {
          let valid = false;
          let allowedValues: unknown[] = [];

          if (values) {
            allowedValues = Array.from(values as Iterable<unknown>);
            if (Object.prototype.hasOwnProperty.call(prop, 'default')) {
              allowedValues.push(defaultValue);
            }
            valid || (valid = allowedValues.includes(val));
          }

          if (validator) valid || (valid = validator(val));

          if (!valid && allowedValues.length > 0) {
            const allowValuesText = [...new Set(allowedValues)]
              .map(v => JSON.stringify(v))
              .join(', ');
            warn(
              `Invalid prop: validation failed${
                key ? ` for prop "${key}"` : ''
              }. Expected one of [${allowValuesText}], got value ${JSON.stringify(val)}.`,
            );
          }

          return valid;
        }
      : undefined;

  const epProp: Record<string, unknown> = {
    type,
    required: !!required,
    validator: _validator,
    [epPropKey]: true,
  };

  if (Object.prototype.hasOwnProperty.call(prop, 'default')) {
    epProp.default = defaultValue;
  }

  return epProp as unknown as T;
};

/**
 * Elimina recursivamente los modificadores `readonly` de un tipo, dejando
 * intactos los constructores/funciones (p. ej. `StringConstructor`).
 *
 * Es necesario porque los componentes definen sus props con `as const`
 * (mismo patrón que element-plus), lo que vuelve `readonly` los arrays del
 * campo `type` (p. ej. `readonly [String, Number]`). `defineProps` exige
 * arrays de props mutables, así que el tipo de retorno de `buildProps` debe
 * "des-readonly-izar" la entrada. Para props definidas sin `as const` el
 * mapeo es estructuralmente idéntico a la entrada (no cambia nada).
 */
type WritableProps<T> = T extends
  | ((...args: any[]) => any)
  | (abstract new (...args: any[]) => any)
  ? T
  : T extends readonly (infer U)[]
    ? WritableProps<U>[]
    : T extends object
      ? { -readonly [K in keyof T]: WritableProps<T[K]> }
      : T;

/**
 * Construye y valida el mapa completo de props de un componente Vue.
 *
 * Aplica `buildProp` a cada entrada del objeto, añadiendo validadores
 * automáticos donde se definen conjuntos de valores permitidos.
 *
 * @param props - Objeto con las definiciones de todas las props del componente.
 * @returns El mismo objeto con cada prop procesada y validada, con el tipo
 *   "des-readonly-izado" para ser compatible con `defineProps`.
 *
 * @example
 * const buttonProps = buildProps({
 *   variant: { type: String, values: ['primary', 'secondary'], default: 'primary' },
 *   disabled: { type: Boolean, default: false },
 * })
 */
export const buildProps = <T extends Record<string, any>>(
  props: T,
): WritableProps<T> =>
  Object.fromEntries(
    Object.entries(props).map(([key, option]) => [key, buildProp(option, key)]),
  ) as unknown as WritableProps<T>;

/**
 * Tipos compartidos del paquete `@flash-global66/g-utils`.
 *
 * Este módulo centraliza los tipos públicos que son consumidos por los
 * componentes del Design System. Importarlos desde aquí garantiza una
 * única fuente de verdad y facilita el tree-shaking.
 */

import type { EmitsOptions, SetupContext } from 'vue';

export type { SFCWithInstall } from '../utils/install.util';
export type { NamespaceHelpers } from '../composables/useNamespace';

/**
 * Tipo del `emit` de un componente, derivado de sus `emits` declarados.
 *
 * Copiado del tipo `EmitFn<E>` de element-plus (`es/utils/vue/typescript`),
 * puramente a nivel de tipos (sin código en runtime).
 */
export type EmitFn<E extends EmitsOptions> = SetupContext<E>['emit'];

/**
 * Representa un valor que puede ser `T` o un array de `T`.
 *
 * Copiado del tipo `Arrayable<T>` de element-plus, usado extensivamente en
 * las props de validación y de forms.
 */
export type Arrayable<T> = T | T[];

/**
 * Elimina el modificador `readonly` de todas las propiedades de `T`.
 *
 * Copiado del tipo helper `Mutable<T>` de element-plus.
 */
export type Mutable<T> = { -readonly [P in keyof T]: T[P] };

/**
 * Cast de identidad que "desreadonlyfica" un literal `as const` a nivel de
 * tipo, sin alterar la referencia en runtime.
 *
 * Copiado del algoritmo exacto de element-plus: `mutable` retorna el mismo
 * valor recibido, solo re-tipado como `Mutable<T>`. Útil para pasar arrays u
 * objetos `as const` a APIs (como `buildProps`) que esperan un tipo mutable.
 *
 * @param val - El valor `readonly` (típicamente `as const`) a re-tipar.
 * @returns La misma referencia de `val`, tipada como `Mutable<T>`.
 *
 * @example
 * const sizes = ['small', 'large'] as const;
 * const mutableSizes = mutable(sizes); // mismo array, tipo sin readonly
 */
export const mutable = <T extends readonly unknown[] | Record<string, unknown>>(
  val: T,
): Mutable<T> => val as Mutable<T>;

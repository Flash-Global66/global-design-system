import { buildProps } from '@flash-global66/g-utils';

/**
 * Definición de las props ARIA compartidas por los controles de formulario.
 *
 * Copiado byte a byte del algoritmo `ariaProps` de element-plus:
 * `ariaLabel`/`ariaControls` quedan como `String` sin procesar (`buildProp`
 * hace short-circuit sobre valores no-objeto), y `ariaOrientation` se
 * construye con `buildProp` para obtener su validador de `values`.
 */
export const ariaProps = buildProps({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ['horizontal', 'vertical', 'undefined'],
  },
  ariaControls: String,
} as const);

type AriaPropsShape = typeof ariaProps;

/**
 * Selecciona un subconjunto de `ariaProps` por clave, para spreadear
 * directamente en la definición de props de un componente
 * (`...useAriaProps(['ariaLabel'])`).
 *
 * Copiado del algoritmo `useAriaProps` de element-plus (`pick(ariaProps, arias)`),
 * reimplementado sin `lodash` para no añadir una dependencia nueva a
 * `g-hooks`. Devuelve el objeto directamente (NO envuelto en
 * `{ ariaProps }`) para que la migración de los componentes sea un
 * intercambio de import puro: los llamadores existentes ya hacen
 * `...useAriaProps([...])`.
 *
 * @param arias - Claves de `ariaProps` a incluir. Claves desconocidas se ignoran.
 * @returns Un objeto con únicamente las entradas solicitadas.
 */
export const useAriaProps = <T extends keyof AriaPropsShape>(
  arias: Array<T>,
): Pick<AriaPropsShape, T> => {
  const picked = {} as Pick<AriaPropsShape, T>;
  for (const key of arias) {
    if (key in ariaProps) {
      picked[key] = ariaProps[key];
    }
  }
  return picked;
};

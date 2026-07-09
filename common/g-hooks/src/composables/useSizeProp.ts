import { buildProp, componentSizes } from '@flash-global66/g-utils';

/**
 * Definición de prop `size` reutilizable, construida a partir de
 * `componentSizes` (`@flash-global66/g-utils`).
 *
 * Copiado byte a byte del algoritmo `useSizeProp` de element-plus: es una
 * CONSTANTE de definición de prop (no una función/hook) que un componente
 * spreadea en su bloque de props (`size: useSizeProp`), con un validador
 * generado por `buildProp` que acepta únicamente los valores de
 * `componentSizes`.
 */
export const useSizeProp = buildProp({
  type: String,
  values: componentSizes,
  required: false,
} as const);

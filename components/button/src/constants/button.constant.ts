/**
 * Constantes del componente Button. Fuente de verdad para los tipos derivados
 * (ver `../types/button.type.ts`) y para la validación en runtime (`../props/button.props.ts`).
 *
 * Se usan objetos `as const` en lugar de `enum` para mejor tree-shaking y tipado preciso.
 */

/** Variantes visuales admitidas por el botón. */
export const BUTTON_VARIANTS = ['primary', 'secondary', 'tertiary'] as const;

/** Tamaños admitidos por el botón. */
export const BUTTON_SIZES = ['sm', 'md'] as const;

/** Tipos nativos del atributo `type` del elemento `<button>`. */
export const BUTTON_NATIVE_TYPES = ['button', 'submit', 'reset'] as const;

import type {
  BUTTON_VARIANTS,
  BUTTON_SIZES,
  BUTTON_NATIVE_TYPES,
} from '../constants/button.constant'

/** Variante visual del botón. Derivada de {@link BUTTON_VARIANTS}. */
export type ButtonVariant = (typeof BUTTON_VARIANTS)[number]

/** Tamaño del botón. Derivado de {@link BUTTON_SIZES}. */
export type ButtonSize = (typeof BUTTON_SIZES)[number]

/** Tipo nativo del elemento `<button>`. Derivado de {@link BUTTON_NATIVE_TYPES}. */
export type ButtonNativeType = (typeof BUTTON_NATIVE_TYPES)[number]

/** Estado lógico del botón. */
export type ButtonState = 'default' | 'loading' | 'disabled'

/** Representa una onda (ripple) generada al interactuar con el botón. */
export interface Ripple {
  id: number
  x: number
  y: number
}

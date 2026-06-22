import { ref } from 'vue'
import { useTimeoutFn } from '@vueuse/core'
import type { Ripple } from '../types/button.type'

/**
 * Gestiona el efecto visual de ondas (ripple) del botón.
 *
 * @param isDisabled - Función que indica si el botón está deshabilitado o cargando
 *   (en cuyo caso no se generan ondas).
 * @returns El estado reactivo de las ondas y los manejadores para crearlas y eliminarlas.
 */
export const useRipple = (isDisabled: () => boolean) => {
  const ripples = ref<Ripple[]>([])
  let rippleCount = 0

  const handleRipple = (event: PointerEvent) => {
    if (isDisabled()) return

    const target = event.currentTarget as HTMLElement
    const rect = target.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    rippleCount++
    const newRipple = { id: rippleCount, x, y }
    ripples.value.push(newRipple)
    useTimeoutFn(() => removeRipple(newRipple.id), 700)
  }

  const removeRipple = (id: number) => {
    ripples.value = ripples.value.filter((r) => r.id !== id)
  }

  return {
    ripples,
    handleRipple,
    removeRipple,
  }
}

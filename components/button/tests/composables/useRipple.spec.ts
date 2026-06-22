import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { useRipple } from '../../src/composables/useRipple'

const pointerEvent = () =>
  ({
    currentTarget: {
      getBoundingClientRect: () => ({ left: 0, top: 0 }),
    },
    clientX: 10,
    clientY: 20,
  }) as unknown as PointerEvent

describe('useRipple', () => {
  beforeEach(() => vi.useFakeTimers())
  afterEach(() => vi.useRealTimers())

  it('arranca sin ondas', () => {
    const { ripples } = useRipple(() => false)
    expect(ripples.value).toEqual([])
  })

  it('agrega una onda al interactuar si no está deshabilitado', () => {
    const { ripples, handleRipple } = useRipple(() => false)
    handleRipple(pointerEvent())
    expect(ripples.value).toHaveLength(1)
    expect(ripples.value[0]).toMatchObject({ x: 10, y: 20 })
  })

  it('no agrega ondas si está deshabilitado', () => {
    const { ripples, handleRipple } = useRipple(() => true)
    handleRipple(pointerEvent())
    expect(ripples.value).toHaveLength(0)
  })

  it('elimina la onda manualmente por id', () => {
    const { ripples, handleRipple, removeRipple } = useRipple(() => false)
    handleRipple(pointerEvent())
    const id = ripples.value[0].id
    removeRipple(id)
    expect(ripples.value).toHaveLength(0)
  })

  it('elimina la onda automáticamente tras 700ms', () => {
    const { ripples, handleRipple } = useRipple(() => false)
    handleRipple(pointerEvent())
    expect(ripples.value).toHaveLength(1)
    vi.advanceTimersByTime(700)
    expect(ripples.value).toHaveLength(0)
  })
})

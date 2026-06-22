import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { buttonProps, validateButtonProps } from '../../src/props/button.props'
import type { ButtonProps } from '../../src/props/button.props'

const makeProps = (overrides: Partial<ButtonProps> = {}): ButtonProps =>
  ({
    typeNative: 'button',
    disabled: false,
    full: false,
    autofocus: false,
    href: undefined,
    target: undefined,
    download: undefined,
    variant: 'primary',
    size: 'md',
    loading: false,
    title: '',
    iconLeft: '',
    iconRight: '',
    ariaLabel: '',
    ...overrides,
  }) as ButtonProps

describe('buttonProps (definición)', () => {
  it('expone los defaults esperados', () => {
    expect((buttonProps.variant as any).default).toBe('primary')
    expect((buttonProps.size as any).default).toBe('md')
    expect((buttonProps.typeNative as any).default).toBe('button')
  })
})

describe('validateButtonProps', () => {
  let warnSpy: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
  })
  afterEach(() => warnSpy.mockRestore())

  it('no advierte con props válidas', () => {
    validateButtonProps(makeProps())
    expect(warnSpy).not.toHaveBeenCalled()
  })

  it('advierte con variant inválida', () => {
    validateButtonProps(makeProps({ variant: 'ghost' as any }))
    expect(warnSpy).toHaveBeenCalled()
  })

  it('advierte con size inválido', () => {
    validateButtonProps(makeProps({ size: 'xl' as any }))
    expect(warnSpy).toHaveBeenCalled()
  })

  it('advierte cuando disabled no es boolean', () => {
    validateButtonProps(makeProps({ disabled: 'yes' as any }))
    expect(warnSpy).toHaveBeenCalled()
  })

  it('advierte cuando loading no es boolean', () => {
    validateButtonProps(makeProps({ loading: 1 as any }))
    expect(warnSpy).toHaveBeenCalled()
  })
})

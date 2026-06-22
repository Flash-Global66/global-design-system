import { describe, it, expect, vi } from 'vitest'
import { withSetup } from '../../../../tests/utils/withSetup'
import { useButton } from '../../src/composables/useButton'
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

const mouseEvent = () =>
  ({
    preventDefault: vi.fn(),
    stopPropagation: vi.fn(),
  }) as unknown as MouseEvent

describe('useButton', () => {
  it('componentId es "button" sin href', () => {
    const { result } = withSetup(() => useButton(makeProps(), vi.fn()))
    expect(result.componentId.value).toBe('button')
  })

  it('componentId es "a" con href', () => {
    const { result } = withSetup(() =>
      useButton(makeProps({ href: 'https://x.com' }), vi.fn()),
    )
    expect(result.componentId.value).toBe('a')
  })

  it('allAttrs.role refleja button/link según href', () => {
    const { result } = withSetup(() => useButton(makeProps(), vi.fn()))
    expect(result.allAttrs.value.role).toBe('button')

    const { result: linkResult } = withSetup(() =>
      useButton(makeProps({ href: 'https://x.com' }), vi.fn()),
    )
    expect(linkResult.allAttrs.value.role).toBe('link')
  })

  it('emite "click" cuando está habilitado', () => {
    const emit = vi.fn()
    const { result } = withSetup(() => useButton(makeProps(), emit))
    result.handleClick(mouseEvent())
    expect(emit).toHaveBeenCalledWith('click', expect.anything())
  })

  it('NO emite "click" cuando está disabled', () => {
    const emit = vi.fn()
    const { result } = withSetup(() =>
      useButton(makeProps({ disabled: true }), emit),
    )
    result.handleClick(mouseEvent())
    expect(emit).not.toHaveBeenCalled()
  })

  it('NO emite "click" cuando está loading', () => {
    const emit = vi.fn()
    const { result } = withSetup(() =>
      useButton(makeProps({ loading: true }), emit),
    )
    result.handleClick(mouseEvent())
    expect(emit).not.toHaveBeenCalled()
  })

  it('shouldShowLeftIcon/RightIcon reflejan los iconos', () => {
    const { result } = withSetup(() =>
      useButton(makeProps({ iconLeft: 'solid check' }), vi.fn()),
    )
    expect(result.shouldShowLeftIcon.value).toBe(true)
    expect(result.shouldShowRightIcon.value).toBe(false)
  })
})

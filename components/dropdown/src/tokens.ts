import { PopperProps } from '@flash-global66/g-popper'
import type { ComputedRef, InjectionKey, Ref } from 'vue'

export type GDropdownInjectionContext = {
  contentRef: Ref<HTMLElement | undefined>
  role: ComputedRef<PopperProps['role']>
  triggerId: ComputedRef<string>
  isUsingKeyboard: Ref<boolean>
  onItemLeave: (e: PointerEvent) => void
  onItemEnter: (e: PointerEvent) => void
}

export const DROPDOWN_INJECTION_KEY: InjectionKey<GDropdownInjectionContext> =
  Symbol('gDropdown')

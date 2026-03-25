import { computed, inject, onMounted, ref, unref, watch } from 'vue'
import { isUndefined } from 'lodash-unified'
import { usePopper } from 'element-plus'
import { POPPER_INJECTION_KEY } from '../constants'
import { buildPopperOptions, unwrapMeasurableEl } from '../utils'

import type { ComputedRef, Ref } from 'vue'
import type { Instance, Modifier, State } from '@popperjs/core'
import type { PartialOptions } from 'element-plus'
import type { PopperContentProps } from '../content'

const DEFAULT_ARROW_OFFSET = 0

export type UsePopperContentReturn = {
  attributes: ComputedRef<{ [key: string]: { [key: string]: string | boolean } }>
  arrowRef: Ref<HTMLElement | undefined>
  contentRef: Ref<HTMLElement | undefined>
  instanceRef: ComputedRef<Instance | undefined>
  state: ComputedRef<Partial<State>>
  styles: ComputedRef<{ [key: string]: Partial<CSSStyleDeclaration> }>
  role: ComputedRef<string>
  forceUpdate: () => void
  update: () => Promise<Partial<State>> | undefined
}

export const usePopperContent = (props: PopperContentProps): UsePopperContentReturn => {
  const { popperInstanceRef, contentRef, triggerRef, role } = inject(
    POPPER_INJECTION_KEY,
    undefined
  )!

  const arrowRef = ref<HTMLElement>()
  const arrowOffset = ref<number>()

  const eventListenerModifier = computed(() => {
    return {
      name: 'eventListeners',
      enabled: !!props.visible,
    } as Modifier<'eventListeners', any>
  })

  const arrowModifier = computed(() => {
    const arrowEl = unref(arrowRef)
    const offset = unref(arrowOffset) ?? DEFAULT_ARROW_OFFSET
    // Seems like the `phase` and `fn` is required by Modifier type
    // But on its documentation they didn't specify that.
    // Refer to https://popper.js.org/docs/v2/modifiers/arrow/
    return {
      name: 'arrow',
      enabled: !isUndefined(arrowEl),
      options: {
        element: arrowEl,
        padding: offset,
      },
    } as any
  })

  const options = computed<PartialOptions>(() => {
    return {
      onFirstUpdate: () => {
        update()
      },
      ...buildPopperOptions(props, [
        unref(arrowModifier),
        unref(eventListenerModifier),
      ]),
    }
  })

  const computedReference = computed(
    () => unwrapMeasurableEl(props.referenceEl) || unref(triggerRef)
  )

  const { attributes, state, styles, update, forceUpdate, instanceRef } =
    usePopper(computedReference, contentRef, options)

  watch(instanceRef, (instance) => (popperInstanceRef.value = instance))

  onMounted(() => {
    watch(
      () => unref(computedReference)?.getBoundingClientRect(),
      () => {
        update()
      }
    )
  })

  return {
    attributes,
    arrowRef,
    contentRef,
    instanceRef,
    state,
    styles,
    role,

    forceUpdate,
    update,
  }
}


import type { IOptionProps } from '../types/token'
import type { OptionEmitFn } from '../defaults'

export function useOption(
  props: IOptionProps,
  { emit }: { emit: OptionEmitFn }
) {
  return {
    hoverItem: () => {
      if (!props.disabled) {
        emit('hover', props.index)
      }
    },
    selectOptionClick: () => {
      if (!props.disabled) {
        emit('select', props.item, props.index)
      }
    },
  }
}

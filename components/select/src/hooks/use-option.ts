import { computed } from 'vue'
import type { IOptionProps } from '../types/token'
import type { OptionEmitFn } from '../defaults'

function getClampClass(lineCount: unknown): string {
  const normalized = Number(lineCount)
  switch (normalized) {
    case 1:
      return 'line-clamp-1'
    case 2:
      return 'line-clamp-2'
    default:
      return ''
  }
}

export function useOption(
  props: IOptionProps,
  { emit }: { emit: OptionEmitFn }
) {
  const titleClampClass = computed(() => getClampClass(props.titleLines))

  const descriptionClampClass = computed(() => getClampClass(props.descriptionLines))

  return {
    titleClampClass,
    descriptionClampClass,
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

import { computed } from 'vue'
import { get } from 'lodash-unified'

import type { ISelectProps } from '../types/token'
import type { Option } from '../types/select.types'

export interface Props {
  value?: string
  disabled?: string
  options?: string
  icon?: string
  title?: string
  description?: string
}

export const defaultProps: Required<Props> = {
  value: 'value',
  disabled: 'disabled',
  options: 'options',
  icon: 'icon',
  title: 'title',
  description: 'description'
}

type Getters = {
  [K in keyof Props as `get${Capitalize<string & K>}`]: (option: Option) => any;
};

export function useProps(props: Pick<ISelectProps, 'props'>) {
  const aliasProps = computed(() => ({ ...defaultProps, ...props.props }))

  const createGetter = (propName: keyof Props) => {
    return (option: Option) => get(option, aliasProps.value[propName])
  }

  const getters = Object.keys(defaultProps).reduce((acc, propName) => {
    (acc as any)[`get${propName.charAt(0).toUpperCase() + propName.slice(1)}`] = createGetter(
      propName as keyof Props
    )
    return acc
  }, {} as Required<Getters>)

  return {
    aliasProps,
    ...getters
  }
}

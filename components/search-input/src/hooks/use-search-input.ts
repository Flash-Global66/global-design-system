import { computed, ref, watch, useAttrs } from 'vue'
import { useDebounceFn } from '@vueuse/core'
import type { SearchInputProps, EmitFn } from '../types'

export function useSearchInput(
  props: SearchInputProps, 
  emit: EmitFn,
  attrs: ReturnType<typeof useAttrs>
) {
  const inputRef = ref()
  const searchQuery = ref(props.modelValue || '')
  const isSearching = ref(false)

  const filteredAttrs = computed(() => {
    const {
      class: classProp,
      style: styleProp,
      modelValue,
      "onUpdate:modelValue": updateModelEvent,
      disabled,
      initialLoading,
      searchingLoading,
      debounceTime,
      placeholder,
      label,
      helpText,
      messageError,
      ...rest
    } = attrs
    return rest
  })

  const debouncedSearch = useDebounceFn((query: string) => {
    isSearching.value = false
    emit('search', query)
  }, props.debounceTime)

  const handleInput = (value: string) => {
    searchQuery.value = value
    emit('update:modelValue', value)
    isSearching.value = true
    debouncedSearch(value)
  }

  const handleEnterKey = () => {
    isSearching.value = false
    emit('search', searchQuery.value)
  }

  const handleIconClick = (hasClear: boolean) => {
    if (hasClear) {
      clearSearch()
    } else {
      inputRef.value?.focus()
    }
  }

  const clearSearch = () => {
    searchQuery.value = ''
    emit('update:modelValue', '')
    emit('clear')
    emit('search', '')
    inputRef.value?.focus()
  }

  watch(() => props.modelValue, (newVal) => {
    if (newVal !== searchQuery.value) {
      searchQuery.value = newVal as string
    }
  }, { immediate: true })

  return {
    inputRef,
    searchQuery,
    filteredAttrs,
    handleInput,
    handleEnterKey,
    handleIconClick,
    clearSearch,
    focus: () => inputRef.value?.focus(),
    blur: () => inputRef.value?.blur(),
  }
}
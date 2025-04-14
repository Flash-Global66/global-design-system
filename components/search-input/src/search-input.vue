<template>
  <div :class="[ns.b(), wrapperClass]">
    <template v-if="initialLoading">
      <g-skeleton animated >
        <template #template>
          <div :class="ns.e('skeleton')" >
            <g-skeleton-item variant="text" class="h-12 rounded-md" />
            <g-skeleton-item 
              v-if="$attrs['help-text'] || props.helpText"
              variant="text"  
            />
          </div>
        </template>
      </g-skeleton>
    </template>
    <template v-else>
      <g-input
        ref="inputRef"
        :model-value="searchQuery"
        v-bind="filteredAttrs"
        :class="[ns.e('input')]"
        :disabled="disabled"
        :loading="searchingLoading"
        :placeholder="props.placeholder"
        :label="props.label"
        :help-text="props.helpText"
        :message-error="props.messageError"
        @update:model-value="handleInput"
        @keydown.enter.prevent="handleEnterKey"
      >
        <template #suffix>
          <div :class="ns.e('icon-container')">
            <g-icon-font
              v-if="!searchingLoading && !searchQuery"
              name="regular search"
              :class="ns.e('icon')"
              @click="handleIconClick(false)"
            />
            <g-icon-font
              v-if="!searchingLoading && searchQuery"
              name="regular times"
              :class="ns.e('icon')"
              @click="handleIconClick(true)"
            />
            <g-icon-font
              v-if="searchingLoading"
              name="regular arrows-rotate"
              :class="ns.e('icon')"
              spin
            />
          </div>
        </template>
      </g-input>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { useNamespace } from 'element-plus'
import { GInput } from '@flash-global66/g-input'
import { GSkeleton, GSkeletonItem } from '@flash-global66/g-skeleton'
import { GIconFont } from '@flash-global66/g-icon-font'
import { useSearchInput } from './hooks/use-search-input'
import { searchInputEmits, searchInputProps } from './search-input'

defineOptions({
  name: 'GSearchInput',
  inheritAttrs: false,
})

const props = defineProps(searchInputProps)
const emit = defineEmits(searchInputEmits)
const attrs = useAttrs()

const ns = useNamespace('search-input')

const wrapperClass = computed(() => [
  {
    [ns.is('disabled')]: props.disabled,
    [ns.is('searching')]: props.searchingLoading,
    [ns.is('loading')]: props.initialLoading,
    [ns.is('error')]: !!props.messageError,
  },
])

const { 
  inputRef, 
  searchQuery, 
  filteredAttrs,
  handleInput,
  handleEnterKey,
  handleIconClick, 
  clearSearch 
} = useSearchInput(props, emit, attrs)

defineExpose({
  focus: () => inputRef.value?.focus(),
  blur: () => inputRef.value?.blur(),
  clear: clearSearch,
})
</script>

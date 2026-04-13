<template>
  <div
    ref="cellRef"
    :class="wrapperClass"
    :style="wrapperStyle"
    :data-g-cell-edit-amount-peer="
      outsideCloseScope === 'amountRowPeer' ? '' : undefined
    "
  >
    <transition name="gui-table-cell-edit" mode="out-in">
      <div v-if="isEditing" ref="editWrapperRef" :class="editWrapperClass">
        <slot name="edit" :close="closeEdit"></slot>
      </div>
      <button
        v-else
        type="button"
        class="w-full h-full flex items-center px-xs cursor-pointer border-0 bg-transparent text-left font-inherit text-primary-txt"
        @click="handleClick"
        @keydown="handleKeydown"
      >
        <slot name="view" :toggle="toggleEdit"></slot>
      </button>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, ref, watch, nextTick, onUnmounted } from 'vue'
import { TABLE_INJECTION_KEY } from '../tokens'
import {
  calculateExpandedWidthSync,
  calculateLeftOffset,
  setActiveTableFromEvent,
  setCellOverflow
} from '../table-column/cell-renderers/cell-expansion-utils'

const table = inject(TABLE_INJECTION_KEY)

export interface GCellEditProps {
  modelValue?: boolean
  row: Record<string, unknown>
  column?: Record<string, unknown>
  index?: number
  prop?: string
  expandColspan?: number
  expandDirection?: 'left' | 'right'
  expandedWidth?: number
  leftOffset?: number
  outsideCloseScope?: 'cell' | 'amountRowPeer'
}

const props = withDefaults(defineProps<GCellEditProps>(), {
  modelValue: false,
  column: () => ({}),
  index: undefined,
  prop: '',
  expandColspan: undefined,
  expandDirection: undefined,
  expandedWidth: undefined,
  leftOffset: undefined,
  outsideCloseScope: 'cell'
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  toggle: [value: boolean]
  close: []
  'cell-edit-open': [row: Record<string, unknown>, column: Record<string, unknown>]
  'cell-edit-close': [row: Record<string, unknown>, column: Record<string, unknown>]
}>()

const cellRef = ref<HTMLElement>()
const editWrapperRef = ref<HTMLElement>()

const FOCUSABLE_SELECTOR = 'input:not([type="hidden"]):not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'

const focusFirstInput = (el: HTMLElement | null | undefined) => {
  if (!el) return
  const focusable = el.querySelector<HTMLElement>(FOCUSABLE_SELECTOR)
  if (focusable && typeof focusable.focus === 'function') {
    focusable.focus()
  }
}

const internalEditing = ref(props.modelValue)

watch(() => props.modelValue, (val) => {
  internalEditing.value = val
})

const isEditing = computed({
  get: () => internalEditing.value,
  set: (val: boolean) => {
    internalEditing.value = val
    emit('update:modelValue', val)
  }
})

const computedExpandedWidth = ref<number | undefined>(undefined)
const computedLeftOffset = ref<number | undefined>(undefined)

const expandDirection = computed(() => {
  const d = props.expandDirection
  return d === 'left' || d === 'right' ? d : undefined
})

const calculateMetrics = () => {
  if (props.expandedWidth !== undefined) {
    computedExpandedWidth.value = props.expandedWidth
  } else {
    const colIndex = props.column.no ?? props.column.cellIndex
    const cacheKey = `${props.prop}-${props.index ?? 0}-${colIndex ?? 0}`

    if (colIndex !== undefined) {
      computedExpandedWidth.value = calculateExpandedWidthSync(
        props.prop,
        colIndex as number,
        cacheKey,
        props.expandColspan,
        expandDirection.value
      )
    }
  }

  if (props.leftOffset !== undefined) {
    computedLeftOffset.value = props.leftOffset
  } else {
    const colIndex = props.column.no ?? props.column.cellIndex
    const cacheKey = `${props.prop}-${props.index ?? 0}-${colIndex ?? 0}`
    if (colIndex !== undefined) {
      computedLeftOffset.value = calculateLeftOffset(
        colIndex as number,
        cacheKey,
        expandDirection.value,
        props.expandColspan
      )
    }
  }
}

const closeEdit = () => {
  if (table?.emit && props.column) {
    table.emit('cell-edit-close', props.row, props.column)
  }
  emit('cell-edit-close', props.row, props.column)
  isEditing.value = false
  emit('close')
}

const POPPER_SELECTORS = '.el-popper, .el-select-dropdown, .gui-select-dropdown, .el-date-picker, .el-picker-panel'

function isInsidePopper(target: Node): boolean {
  const el = target as HTMLElement
  return Boolean(el.closest?.(POPPER_SELECTORS))
}

function isTargetInsideCloseScope(target: Node): boolean {
  if (props.outsideCloseScope === 'cell') {
    return Boolean(cellRef.value?.contains(target))
  }
  if (props.outsideCloseScope === 'amountRowPeer') {
    const tr = cellRef.value?.closest('tr')
    if (!tr) return false
    const peers = Array.from(
      tr.querySelectorAll('[data-g-cell-edit-amount-peer]')
    )
    for (const el of peers) {
      if (el.contains(target)) return true
    }
    return false
  }
  return false
}

function handleClickOutside(e: MouseEvent) {
  if (!isEditing.value) return
  const target = e.target as Node
  if (isInsidePopper(target)) return
  if (isTargetInsideCloseScope(target)) return
  closeEdit()
}

function setupClickOutsideListener() {
  nextTick(() => {
    document.addEventListener('mousedown', handleClickOutside, true)
  })
}

function removeClickOutsideListener() {
  document.removeEventListener('mousedown', handleClickOutside, true)
}

watch(isEditing, (val) => {
  if (val) {
    calculateMetrics()
    if (cellRef.value) setCellOverflow(cellRef.value, true)
    setupClickOutsideListener()
    nextTick(() => {
      requestAnimationFrame(() => focusFirstInput(editWrapperRef.value))
    })
  } else {
    removeClickOutsideListener()
    if (cellRef.value) setCellOverflow(cellRef.value, false)
  }
}, { immediate: true })

onUnmounted(() => {
  removeClickOutsideListener()
})

const wrapperClass = computed(() => {
  const base = 'absolute top-0 left-0 h-full w-full flex items-center justify-center transition-all duration-200 ease-in'
  if (isEditing.value) {
    return `${base} gui-table-cell-edit-wrapper hover:bg-everBlue-100 hover:bg-opacity-30 z-10`
  }
  return `${base} gui-table-cell-edit-wrapper hover:bg-everBlue-100 hover:bg-opacity-30`
})

const editWrapperClass = computed(() => {
  return 'w-full h-full flex items-center justify-center'
})

const wrapperStyle = computed(() => {
  if (!isEditing.value) return {}

  const style: Record<string, string> = {
    zIndex: '10'
  }

  if (computedLeftOffset.value !== undefined) {
    style.left = `-${computedLeftOffset.value}px`
  }

  if (computedExpandedWidth.value !== undefined) {
    style.width = `${computedExpandedWidth.value}px`
  }

  return style
})

const toggleEdit = (e?: Event) => {
  if (e) setActiveTableFromEvent(e)
  const newValue = !isEditing.value
  isEditing.value = newValue
  emit('toggle', newValue)
  if (newValue) {
    if (table?.emit && props.column) {
      table.emit('cell-edit-open', props.row, props.column)
    }
    emit('cell-edit-open', props.row, props.column)
  }
}

const handleClick = (e: Event) => {
  if (!isEditing.value) {
    toggleEdit(e)
  }
}

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault()
    if (!isEditing.value) toggleEdit(e)
  }
}

defineExpose({
  toggleEdit,
  closeEdit
})
</script>

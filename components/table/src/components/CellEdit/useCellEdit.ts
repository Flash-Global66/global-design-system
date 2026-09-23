import { computed, inject, nextTick, onUnmounted, ref, watch } from 'vue';
import { useNamespace } from '@flash-global66/g-utils';
import { TABLE_INJECTION_KEY } from '../../shared/constants/token.constant';
import {
  calculateExpandedWidthSync,
  calculateLeftOffset,
  setActiveTableFromEvent,
  setCellOverflow,
} from '../../shared/utils/cellExpansion.util';
import type {
  CellEditEmit,
  GCellEditProps,
  UseCellEditReturn,
} from './types/cellEdit.type';

const FOCUSABLE_SELECTOR =
  'input:not([type="hidden"]):not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

const POPPER_SELECTORS =
  '.el-popper, .el-select-dropdown, .gui-select-dropdown, .el-date-picker, .el-picker-panel';

function focusFirstInput(el: HTMLElement | null | undefined): void {
  if (!el) return;
  const focusable = el.querySelector<HTMLElement>(FOCUSABLE_SELECTOR);
  if (focusable && typeof focusable.focus === 'function') {
    focusable.focus();
  }
}

function isInsidePopper(target: Node): boolean {
  const el = target as HTMLElement;
  return Boolean(el.closest?.(POPPER_SELECTORS));
}

/**
 * Orquesta el estado de edición inline de una celda: cálculo de expansión, cierre por click
 * afuera y las clases/estilos que el template de CellEdit necesita.
 */
export function useCellEdit(
  props: GCellEditProps,
  emit: CellEditEmit,
): UseCellEditReturn {
  const table = inject(TABLE_INJECTION_KEY);
  const ns = useNamespace('table');

  const cellRef = ref<HTMLElement>();
  const editWrapperRef = ref<HTMLElement>();

  const internalEditing = ref(props.modelValue ?? false);

  watch(
    () => props.modelValue,
    val => {
      internalEditing.value = val ?? false;
    },
  );

  const isEditing = computed({
    get: () => internalEditing.value,
    set: (val: boolean) => {
      internalEditing.value = val;
      emit('update:modelValue', val);
    },
  });

  const computedExpandedWidth = ref<number | undefined>(undefined);
  const computedLeftOffset = ref<number | undefined>(undefined);

  const expandDirection = computed(() => {
    const d = props.expandDirection;
    return d === 'left' || d === 'right' ? d : undefined;
  });

  function calculateMetrics(): void {
    const column = props.column ?? {};

    if (props.expandedWidth !== undefined) {
      computedExpandedWidth.value = props.expandedWidth;
    } else {
      const colIndex = column.no ?? column.cellIndex;
      const cacheKey = `${props.prop}-${props.index ?? 0}-${colIndex ?? 0}`;

      if (colIndex !== undefined) {
        computedExpandedWidth.value = calculateExpandedWidthSync(
          props.prop ?? '',
          colIndex as number,
          cacheKey,
          props.expandColspan,
          expandDirection.value,
        );
      }
    }

    if (props.leftOffset !== undefined) {
      computedLeftOffset.value = props.leftOffset;
    } else {
      const colIndex = column.no ?? column.cellIndex;
      const cacheKey = `${props.prop}-${props.index ?? 0}-${colIndex ?? 0}`;
      if (colIndex !== undefined) {
        computedLeftOffset.value = calculateLeftOffset(
          colIndex as number,
          cacheKey,
          expandDirection.value,
          props.expandColspan,
        );
      }
    }
  }

  function closeEdit(): void {
    if (table?.emit && props.column) {
      table.emit('cell-edit-close', props.row, props.column);
    }
    emit('cell-edit-close', props.row, props.column ?? {});
    isEditing.value = false;
    emit('close');
  }

  function isTargetInsideCloseScope(target: Node): boolean {
    if (props.outsideCloseScope === 'cell') {
      return Boolean(cellRef.value?.contains(target));
    }
    if (props.outsideCloseScope === 'amountRowPeer') {
      const tr = cellRef.value?.closest('tr');
      if (!tr) return false;
      const peers = Array.from(
        tr.querySelectorAll('[data-g-cell-edit-amount-peer]'),
      );
      for (const el of peers) {
        if (el.contains(target)) return true;
      }
      return false;
    }
    return false;
  }

  function handleClickOutside(e: MouseEvent): void {
    if (!isEditing.value) return;
    const target = e.target as Node;
    if (isInsidePopper(target)) return;
    if (isTargetInsideCloseScope(target)) return;
    closeEdit();
  }

  function setupClickOutsideListener(): void {
    nextTick(() => {
      document.addEventListener('mousedown', handleClickOutside, true);
    });
  }

  function removeClickOutsideListener(): void {
    document.removeEventListener('mousedown', handleClickOutside, true);
  }

  watch(
    isEditing,
    val => {
      if (val) {
        calculateMetrics();
        if (cellRef.value) setCellOverflow(cellRef.value, true);
        setupClickOutsideListener();
        nextTick(() => {
          requestAnimationFrame(() => focusFirstInput(editWrapperRef.value));
        });
      } else {
        removeClickOutsideListener();
        if (cellRef.value) setCellOverflow(cellRef.value, false);
      }
    },
    { immediate: true },
  );

  onUnmounted(() => {
    removeClickOutsideListener();
  });

  const wrapperClass = computed(() => {
    const base =
      'group absolute top-0 left-0 h-full w-full flex items-center justify-center transition-all duration-200 ease-in';
    if (isEditing.value) {
      return `${base} ${ns.b('cell-edit-wrapper')} hover:bg-everBlue-100 hover:bg-opacity-30 z-10`;
    }
    return `${base} ${ns.b('cell-edit-wrapper')} hover:bg-everBlue-100 hover:bg-opacity-30`;
  });

  const editWrapperClass = computed(() => {
    return 'w-full h-full flex items-center justify-center';
  });

  const wrapperStyle = computed(() => {
    if (!isEditing.value) return {};

    const style: Record<string, string> = {
      zIndex: '10',
    };

    if (computedLeftOffset.value !== undefined) {
      style.left = `-${computedLeftOffset.value}px`;
    }

    if (computedExpandedWidth.value !== undefined) {
      style.width = `${computedExpandedWidth.value}px`;
    }

    return style;
  });

  function toggleEdit(e?: Event): void {
    if (e) setActiveTableFromEvent(e);
    const newValue = !isEditing.value;
    isEditing.value = newValue;
    emit('toggle', newValue);
    if (newValue) {
      if (table?.emit && props.column) {
        table.emit('cell-edit-open', props.row, props.column);
      }
      emit('cell-edit-open', props.row, props.column ?? {});
    }
  }

  function handleClick(e: Event): void {
    if (!isEditing.value) {
      toggleEdit(e);
    }
  }

  function handleKeydown(e: KeyboardEvent): void {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!isEditing.value) toggleEdit(e);
    }
  }

  return {
    ns,
    isEditing,
    wrapperClass,
    editWrapperClass,
    wrapperStyle,
    toggleEdit,
    closeEdit,
    handleClick,
    handleKeydown,
    cellRef,
    editWrapperRef,
  };
}

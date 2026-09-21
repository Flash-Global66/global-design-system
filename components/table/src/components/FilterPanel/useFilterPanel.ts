// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { computed, getCurrentInstance, ref, watch } from 'vue';
import { useLocale } from '@flash-global66/g-hooks';
import { useNamespace } from '@flash-global66/g-utils';
import { isPropAbsent } from '@flash-global66/g-utils';

import type { TooltipInstance } from '@flash-global66/g-tooltip';
import type { WritableComputedRef } from 'vue';
import type { TableHeader } from '../TableHeader';

export function useFilterPanel(props) {
  const instance = getCurrentInstance();
  const { t } = useLocale();
  const ns = useNamespace('table-filter');
  const parent = instance?.parent as TableHeader;
  if (!parent.filterPanels.value[props.column.id]) {
    parent.filterPanels.value[props.column.id] = instance;
  }
  const tooltipVisible = ref(false);
  const tooltip = ref<TooltipInstance | null>(null);
  const filters = computed(() => {
    return props.column && props.column.filters;
  });
  const filterClassName = computed(() => {
    if (props.column.filterClassName) {
      return `${ns.b()} ${props.column.filterClassName}`;
    }
    return ns.b();
  });
  const filterValue = computed({
    get: () => (props.column?.filteredValue || [])[0],
    set: (value: string) => {
      if (filteredValue.value) {
        if (!isPropAbsent(value)) {
          filteredValue.value.splice(0, 1, value);
        } else {
          filteredValue.value.splice(0, 1);
        }
      }
    },
  });
  const filteredValue: WritableComputedRef<unknown[]> = computed({
    get() {
      if (props.column) {
        return props.column.filteredValue || [];
      }
      return [];
    },
    set(value: unknown[]) {
      if (props.column) {
        props.upDataColumn('filteredValue', value);
      }
    },
  });
  const multiple = computed(() => {
    if (props.column) {
      return props.column.filterMultiple;
    }
    return true;
  });
  const isActive = filter => {
    return filter.value === filterValue.value;
  };
  const hidden = () => {
    tooltipVisible.value = false;
  };
  const showFilterPanel = (e: MouseEvent) => {
    e.stopPropagation();
    tooltipVisible.value = !tooltipVisible.value;
  };
  const hideFilterPanel = () => {
    tooltipVisible.value = false;
  };
  const handleConfirm = () => {
    confirmFilter(filteredValue.value);
    hidden();
  };
  const handleReset = () => {
    filteredValue.value = [];
    confirmFilter(filteredValue.value);
    hidden();
  };
  const handleSelect = (_filterValue?: string) => {
    filterValue.value = _filterValue;
    if (!isPropAbsent(_filterValue)) {
      confirmFilter(filteredValue.value);
    } else {
      confirmFilter([]);
    }
    hidden();
  };
  const confirmFilter = (filteredValue: unknown[]) => {
    props.store.commit('filterChange', {
      column: props.column,
      values: filteredValue,
    });
    props.store.updateAllSelected();
  };
  watch(
    tooltipVisible,
    value => {
      if (props.column) {
        props.upDataColumn('filterOpened', value);
      }
    },
    {
      immediate: true,
    },
  );

  const popperPaneRef = computed(() => {
    return tooltip.value?.popperRef?.contentRef;
  });

  return {
    tooltipVisible,
    multiple,
    filterClassName,
    filteredValue,
    filterValue,
    filters,
    handleConfirm,
    handleReset,
    handleSelect,
    isPropAbsent,
    isActive,
    t,
    ns,
    showFilterPanel,
    hideFilterPanel,
    popperPaneRef,
    tooltip,
  };
}

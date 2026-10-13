import { computed } from 'vue';
import { useNamespace } from '@flash-global66/g-utils';
import type {
  DragListDirection,
  DragListItem,
  DragListKey,
  DragListPreviewEntry,
} from '../../shared/types/drag-list.type';
import { PLACEHOLDER_KEY } from './constants/target-panel.constant';

interface TargetPanelState {
  entries: DragListPreviewEntry[];
  getKey?: (item: DragListItem) => DragListKey;
  isOrdered: boolean;
  direction: DragListDirection;
  startNode?: string;
  endNode?: string;
  hasStartSlot: boolean;
  hasEndSlot: boolean;
  isActiveZone: boolean;
  isDisabled: boolean;
}

/** Decide etiqueta de lista, nodos, conectores y keys del panel de destino. */
export function useTargetPanel(props: TargetPanelState) {
  const ns = useNamespace('drag-list-target');

  const isEmpty = computed(() => props.entries.length === 0);
  const listTag = computed(() => (props.isOrdered ? 'ol' : 'ul'));
  const hasStartNode = computed(
    () => props.isOrdered && (props.hasStartSlot || !!props.startNode),
  );
  const hasEndNode = computed(
    () => props.isOrdered && (props.hasEndSlot || !!props.endNode),
  );

  /** Indica si va un conector antes de la tarjeta `index`. */
  function hasConnectorBefore(index: number): boolean {
    if (!props.isOrdered || isEmpty.value) return false;
    return index > 0 || hasStartNode.value;
  }

  const hasFinalConnector = computed(
    () => props.isOrdered && hasEndNode.value && !isEmpty.value,
  );

  function getEntryKey(entry: DragListPreviewEntry): DragListKey {
    return entry.isPlaceholder
      ? PLACEHOLDER_KEY
      : (props.getKey?.(entry.item) ?? entry.index);
  }

  const panelClass = computed(() => [
    ns.b(),
    ns.m(props.direction),
    props.isOrdered && ns.m('ordered'),
    ns.is('active-zone', props.isActiveZone),
    ns.is('disabled', props.isDisabled),
  ]);

  return {
    ns,
    isEmpty,
    listTag,
    hasStartNode,
    hasEndNode,
    hasFinalConnector,
    hasConnectorBefore,
    getEntryKey,
    panelClass,
  };
}

import { computed } from 'vue';
import { useNamespace } from '@flash-global66/g-utils';
import type {
  DragListKey,
  DragListPreviewEntry,
} from '../../shared/types/drag-list.type';
import type {
  TargetPanelKeydownEmit,
  TargetPanelState,
  UseTargetPanelReturn,
} from '../../shared/types/engine.type';
import { PLACEHOLDER_KEY } from './constants/target-panel.constant';

/** Decide etiqueta de lista, nodos, conectores y keys del panel de destino. */
export function useTargetPanel(
  props: TargetPanelState,
  emit: TargetPanelKeydownEmit,
): UseTargetPanelReturn {
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

  const lastIndex = computed(() => props.entries.length - 1);

  /** Solo la tarjeta enfocada reemite; las teclas de sus descendientes no. */
  function handleItemKeydown(event: KeyboardEvent, index: number): void {
    if (event.target !== event.currentTarget) return;
    emit('keydown', event, index);
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
    lastIndex,
    hasConnectorBefore,
    getEntryKey,
    handleItemKeydown,
    panelClass,
  };
}

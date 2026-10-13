import { computed, ref } from 'vue';
import { useNamespace } from '@flash-global66/g-utils';
import type {
  DragListItem,
  DragListKey,
  DragListSourceGroup,
} from '../../shared/types/drag-list.type';
import type {
  SourcePanelBlock,
  SourcePanelProps,
  UseSourcePanelReturn,
} from '../../shared/types/engine.type';

function isGroup(
  entry: DragListItem | DragListSourceGroup,
): entry is DragListSourceGroup {
  return Array.isArray((entry as DragListSourceGroup).items);
}

/** Bloques de render del panel: uno por grupo, o uno solo sin grupo si es plano. */
export function useSourcePanel(
  props: SourcePanelProps,
  emit: (event: 'add', item: DragListItem) => void,
): UseSourcePanelReturn {
  const ns = useNamespace('drag-list-source');
  const rootRef = ref<HTMLElement | null>(null);

  const rootClass = computed(() => [
    ns.b(),
    ns.is('active-zone', props.isActiveZone),
    ns.is('disabled', props.isDisabled),
  ]);

  const isGrouped = computed(
    () => props.items.length > 0 && isGroup(props.items[0]),
  );

  const canAdd = computed(() => !props.isDisabled);

  const blocks = computed<SourcePanelBlock[]>(() => {
    let counter = 0;
    const toEntries = (list: DragListItem[]) =>
      list.map(item => ({
        item,
        key: (props.itemKey as (item: DragListItem) => DragListKey)(item),
        index: counter++,
      }));

    if (!isGrouped.value) {
      return [
        {
          key: 'flat' as DragListKey,
          group: null,
          entries: toEntries(props.items as DragListItem[]),
        },
      ];
    }

    return (props.items as DragListSourceGroup[]).map(group => ({
      key: group.key,
      group,
      entries: toEntries(group.items),
    }));
  });

  function onAdd(item: DragListItem): void {
    if (!canAdd.value) return;
    emit('add', item);
  }

  return { ns, rootRef, rootClass, isGrouped, canAdd, blocks, onAdd };
}

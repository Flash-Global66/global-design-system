import { computed, ref } from 'vue';
import type { ComputedRef, ExtractPropTypes, Ref } from 'vue';
import { useNamespace } from '@flash-global66/g-utils';
import type {
  DragListItem,
  DragListKey,
  DragListSourceGroup,
} from '../../shared/types/drag-list.type';
import type { sourcePanelProps } from './constants/source-panel.constant';

type SourcePanelProps = ExtractPropTypes<typeof sourcePanelProps>;

function isGroup(
  entry: DragListItem | DragListSourceGroup,
): entry is DragListSourceGroup {
  return Array.isArray((entry as DragListSourceGroup).items);
}

/** Bloques de render del panel: uno por grupo, o uno solo sin grupo si es plano. */
export function useSourcePanel(
  props: SourcePanelProps,
  emit: (event: 'add', item: DragListItem) => void,
): {
  ns: ReturnType<typeof useNamespace>;
  rootRef: Ref<HTMLElement | null>;
  rootClass: ComputedRef<string[]>;
  isGrouped: ComputedRef<boolean>;
  canAdd: ComputedRef<boolean>;
  blocks: ComputedRef<
    {
      key: DragListKey;
      group: DragListSourceGroup | null;
      entries: { item: DragListItem; key: DragListKey; index: number }[];
    }[]
  >;
  onAdd: (item: DragListItem) => void;
} {
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

  const blocks = computed(() => {
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

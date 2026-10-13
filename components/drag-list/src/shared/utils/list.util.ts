import type {
  DragListItem,
  DragListKey,
  DragListPreviewEntry,
  DragListSource,
  DragListSourceGroup,
  DragSession,
} from '../types/drag-list.type';

type ItemAccessor = string | ((item: DragListItem) => unknown);

/** Obtiene la key de un ítem desde un campo o una función. */
export function getItemKey(
  item: DragListItem,
  itemKey: string | ((item: DragListItem) => DragListKey),
): DragListKey {
  if (typeof itemKey === 'function') return itemKey(item);
  return item[itemKey] as DragListKey;
}

/** Obtiene el texto de un ítem; si no hay itemLabel usa su key como texto. */
export function getItemLabel(
  item: DragListItem,
  itemLabel: ItemAccessor | undefined,
  itemKey: string | ((item: DragListItem) => DragListKey),
): string {
  if (typeof itemLabel === 'function') return String(itemLabel(item));
  if (typeof itemLabel === 'string') return String(item[itemLabel]);
  return String(getItemKey(item, itemKey));
}

/** Devuelve una copia con el ítem insertado en el índice. */
export function insertItemAt(
  items: DragListItem[],
  item: DragListItem,
  index: number,
): DragListItem[] {
  const next = [...items];
  next.splice(index, 0, item);
  return next;
}

/** Devuelve una copia sin el ítem del índice. */
export function removeItemAt(
  items: DragListItem[],
  index: number,
): DragListItem[] {
  return items.filter((_, position) => position !== index);
}

/** Devuelve una copia con el ítem movido; el mismo arreglo si from === to. */
export function moveItem(
  items: DragListItem[],
  from: number,
  to: number,
): DragListItem[] {
  if (from === to) return items;
  const next = [...items];
  const [moved] = next.splice(from, 1);
  next.splice(to, 0, moved);
  return next;
}

/** Indica si el source viene agrupado. */
export function isGroupedSource(
  source: DragListSource,
): source is DragListSourceGroup[] {
  return (
    source.length > 0 &&
    (source as DragListItem[]).every(entry => Array.isArray(entry.items))
  );
}

/** Quita del origen lo ya agregado, conservando el orden y omitiendo grupos vacíos. */
export function getVisibleSource(params: {
  source: DragListSource;
  modelValue: DragListItem[];
  itemKey: string | ((item: DragListItem) => DragListKey);
  isRepeatable: boolean;
}): DragListSource {
  const { source, modelValue, itemKey, isRepeatable } = params;
  if (isRepeatable) return source;
  const used = new Set(modelValue.map(item => getItemKey(item, itemKey)));
  const isAvailable = (item: DragListItem): boolean =>
    !used.has(getItemKey(item, itemKey));
  if (isGroupedSource(source)) {
    return source
      .map(group => ({ ...group, items: group.items.filter(isAvailable) }))
      .filter(group => group.items.length > 0);
  }
  return (source as DragListItem[]).filter(isAvailable);
}

function countItems(source: DragListSource): number {
  if (isGroupedSource(source)) {
    return source.reduce((total, group) => total + group.items.length, 0);
  }
  return source.length;
}

/** Motivo por el que el origen no muestra ítems: 'empty', 'all-added' o null. */
export function getSourceEmptyReason(params: {
  source: DragListSource;
  visibleSource: DragListSource;
}): 'empty' | 'all-added' | null {
  if (countItems(params.source) === 0) return 'empty';
  if (countItems(params.visibleSource) === 0) return 'all-added';
  return null;
}

/** Devuelve las keys repetidas, cada una una sola vez. */
export function findDuplicateKeys(
  items: DragListItem[],
  itemKey: string | ((item: DragListItem) => DragListKey),
): DragListKey[] {
  const seen = new Set<DragListKey>();
  const duplicates = new Set<DragListKey>();
  items.forEach(item => {
    const key = getItemKey(item, itemKey);
    if (seen.has(key)) duplicates.add(key);
    seen.add(key);
  });
  return [...duplicates];
}

/** Lista de previsualización del destino según la sesión de arrastre. */
export function getPreviewItems(params: {
  items: DragListItem[];
  session: DragSession | null;
  /** Sin `ordered` no hay posición visible: el placeholder va al final. */
  isOrdered: boolean;
}): DragListPreviewEntry[] {
  const { items, session, isOrdered } = params;
  const entries: DragListPreviewEntry[] = items.map((item, index) => ({
    item,
    index,
    isPlaceholder: false,
  }));
  if (!session || !session.isActivated || session.zone !== 'target') {
    return entries;
  }
  if (session.origin === 'source') {
    const at = isOrdered
      ? (session.dropIndex ?? entries.length)
      : entries.length;
    const placeholder: DragListPreviewEntry = {
      item: session.item,
      index: -1,
      isPlaceholder: true,
    };
    return [...entries.slice(0, at), placeholder, ...entries.slice(at)];
  }
  if (!isOrdered || session.dropIndex === null || !entries[session.fromIndex])
    return entries;
  const next = [...entries];
  const [moved] = next.splice(session.fromIndex, 1);
  next.splice(session.dropIndex, 0, { ...moved, isPlaceholder: true });
  return next;
}

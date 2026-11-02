import type { DragListTexts } from '../types/drag-list.type';

export const DEFAULT_DRAG_LIST_TEXTS: DragListTexts = {
  overlayAdd: 'Arrastra aquí para agregar',
  overlayRemove: 'Arrastra aquí para eliminar',
  emptyTarget: 'Aún no hay elementos',
  sourceLabel: 'Elementos disponibles',
  targetLabel: 'Elementos seleccionados',
  announceDragStartAdd: '{label} tomado. Suéltalo en la lista para agregarlo',
  announceDragStartRemove: '{label} tomado. Suéltalo en los disponibles para eliminarlo',
  announceDragStartReorder: '{label} tomado en posición {position} de {total}',
  announceGrab: '{label} tomado en posición {position} de {total}',
  announceMove: '{label} movido a posición {position} de {total}',
  announceAdd: '{label} agregado en posición {position} de {total}',
  announceRemove: '{label} eliminado',
  announceReorder: '{label} movido a posición {position} de {total}',
  announceCancel: 'Movimiento de {label} cancelado',
};

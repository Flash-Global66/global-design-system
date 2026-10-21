// h() y no un .vue: devuelve VNodes armados a partir de los slots del consumidor, que es el
// único modo de inspeccionar el `vnode.type` de los hijos (columnas anidadas) sin renderizarlos.
import { Fragment, h } from 'vue';
import { isArray, isString } from '@flash-global66/g-utils';

import type { Slots, VNode } from 'vue';

// TableColumn no renderiza la celda real (eso lo hace TableBody contra la fila
// real): esta invocación es solo para descubrir columnas hijas anidadas
// (<g-table-column> de un grupo) o componentes con estado propio. El slot del
// consumidor puede asumir una `row` real y tirar contra el `row: {}` fantasma
// de acá — se envuelve en try/catch y se filtra texto/slots dinámicos, igual
// que el render() que reemplaza (components/table/src/components/TableColumn/index.ts
// antes de la migración a SFC).
export function renderColumnChildren(slots: Slots): VNode {
  try {
    const renderDefault = slots.default?.({ row: {}, column: {}, $index: -1 });
    const children: VNode[] = [];
    if (isArray(renderDefault)) {
      for (const childNode of renderDefault) {
        if (
          (childNode.type as { name?: string })?.name === 'GTableColumn' ||
          childNode.shapeFlag & 2
        ) {
          children.push(childNode);
        } else if (childNode.type === Fragment && isArray(childNode.children)) {
          (childNode.children as VNode[]).forEach(vnode => {
            if (vnode?.patchFlag !== 1024 && !isString(vnode?.children)) {
              children.push(vnode);
            }
          });
        }
      }
    }
    return h('div', children);
  } catch {
    return h('div', []);
  }
}

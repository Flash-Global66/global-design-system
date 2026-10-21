// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { h } from 'vue';
import { isUndefined } from '@flash-global66/g-utils';

import type { VNodeChild } from 'vue';

export function hColgroup(props) {
  const isAuto = props.tableLayout === 'auto';
  let columns = props.columns || [];
  if (isAuto) {
    if (columns.every(({ width }) => isUndefined(width))) {
      columns = [];
    }
  }
  const getPropsData = column => {
    const propsData = {
      key: `${props.tableLayout}_${column.id}`,
      style: {},
      name: undefined,
    };
    if (isAuto) {
      propsData.style = {
        width: `${column.width}px`,
      };
    } else {
      propsData.name = column.id;
    }
    return propsData;
  };

  return h(
    'colgroup',
    {},
    columns.map(column => h('col', getPropsData(column))),
  );
}

hColgroup.props = ['columns', 'tableLayout'];

/**
 * Componente funcional que devuelve tal cual un contenido ya renderizado (VNode, array, texto).
 * Su identidad es estable, así que Vue parcha los hijos entre renders en vez de remontarlos,
 * como pasaría con `<component :is="() => ...">`, que crea un tipo nuevo en cada render.
 */
export function VNodeRenderer(props: { vnode: VNodeChild }): VNodeChild {
  return props.vnode;
}

VNodeRenderer.props = ['vnode'];

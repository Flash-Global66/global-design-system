import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { nextTick, defineComponent, ref } from 'vue';
import Table from '../../src/Table/index.vue';
import TableColumn from '../../src/components/TableColumn/index.vue';

const PUBLIC_METHODS = [
  'setCurrentRow',
  'getSelectionRows',
  'toggleRowSelection',
  'clearSelection',
  'clearFilter',
  'toggleAllSelection',
  'toggleRowExpansion',
  'clearSort',
  'doLayout',
  'sort',
  'updateKeyChildren',
  'scrollTo',
  'setScrollLeft',
  'setScrollTop',
] as const;

const INTERNALS = [
  'store',
  'layout',
  'ns',
  'context',
  'columns',
  'tableId',
  'debouncedUpdateLayout',
] as const;

async function mountTable() {
  const Host = defineComponent({
    components: { GTable: Table, GTableColumn: TableColumn },
    setup() {
      return { tableRef: ref(), rows: [{ a: 1 }, { a: 2 }] };
    },
    template: `<g-table ref="tableRef" :data="rows">
                 <g-table-column prop="a" label="A" />
               </g-table>`,
  });
  const wrapper = mount(Host, { attachTo: document.body });
  for (let tick = 0; tick < 4; tick++) {
    await nextTick();
  }
  return { wrapper, tableRef: (wrapper.vm as any).tableRef };
}

describe('Table — API publica de la instancia', () => {
  it('expone los metodos documentados en la ref', async () => {
    const { wrapper, tableRef } = await mountTable();

    for (const name of PUBLIC_METHODS) {
      expect(typeof tableRef[name], name).toBe('function');
    }
    wrapper.unmount();
  });

  it('no filtra el estado interno (store, layout, etc.) en la ref', async () => {
    const { wrapper, tableRef } = await mountTable();

    for (const name of INTERNALS) {
      expect(name in tableRef, name).toBe(false);
    }
    wrapper.unmount();
  });
});

import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { nextTick, defineComponent, h } from 'vue';
import Table from '../../../src/Table/index.vue';
import TableColumn from '../../../src/components/TableColumn/index.vue';

async function flushRenders() {
  for (let tick = 0; tick < 4; tick++) {
    await nextTick();
  }
}

describe('TableFooter — fila de resumen', () => {
  it('renderiza los VNodes que devuelve summaryMethod en vez de interpolarlos como texto', async () => {
    const Host = defineComponent({
      components: { GTable: Table, GTableColumn: TableColumn },
      setup() {
        return {
          rows: [{ a: 2 }, { a: 1 }],
          summaryMethod: () => [h('b', { class: 'total' }, 'Total'), '3'],
        };
      },
      template: `<g-table :data="rows" show-summary :summary-method="summaryMethod">
                   <g-table-column prop="n" label="N" />
                   <g-table-column prop="a" label="A" />
                 </g-table>`,
    });

    const wrapper = mount(Host, { attachTo: document.body });
    await flushRenders();

    const tfoot = wrapper.find('tfoot');
    expect(tfoot.find('b.total').exists()).toBe(true);
    expect(tfoot.text()).toBe('Total3');
    wrapper.unmount();
  });
});

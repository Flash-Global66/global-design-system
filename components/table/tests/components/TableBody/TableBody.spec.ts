import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { nextTick, defineComponent, h, onMounted, onUnmounted } from 'vue';
import Table from '../../../src/Table/index.vue';
import TableColumn from '../../../src/components/TableColumn/index.vue';

function createProbe() {
  const lifecycle = { mounted: 0, unmounted: 0 };
  const Probe = defineComponent({
    setup() {
      onMounted(() => {
        lifecycle.mounted++;
      });
      onUnmounted(() => {
        lifecycle.unmounted++;
      });
      return () => h('span', { class: 'probe' }, 'probe');
    },
  });
  return { Probe, lifecycle };
}

async function flushRenders() {
  for (let tick = 0; tick < 4; tick++) {
    await nextTick();
  }
}

describe('TableBody — contenido de celda personalizado', () => {
  it('parcha las celdas al recalcular las filas en vez de remontarlas', async () => {
    const { Probe, lifecycle } = createProbe();
    const Host = defineComponent({
      components: { GTable: Table, GTableColumn: TableColumn, Probe },
      setup() {
        return { rows: [{ a: 1 }, { a: 2 }, { a: 3 }] };
      },
      template: `<g-table :data="rows" highlight-current-row>
                   <g-table-column prop="a" label="A">
                     <template #default><probe /></template>
                   </g-table-column>
                 </g-table>`,
    });

    const wrapper = mount(Host, { attachTo: document.body });
    await flushRenders();
    expect(wrapper.findAll('tbody .probe')).toHaveLength(3);
    expect(lifecycle).toEqual({ mounted: 3, unmounted: 0 });

    const bodyRows = wrapper.findAll('tbody tr');
    await bodyRows[0].trigger('click');
    await flushRenders();
    await bodyRows[1].trigger('click');
    await flushRenders();

    expect(wrapper.findAll('tbody tr')[1].classes()).toContain('current-row');
    expect(lifecycle).toEqual({ mounted: 3, unmounted: 0 });
    wrapper.unmount();
  });

  it('parcha la fila expandida al re-renderizar el cuerpo en vez de remontarla', async () => {
    const { Probe, lifecycle } = createProbe();
    const Host = defineComponent({
      components: { GTable: Table, GTableColumn: TableColumn, Probe },
      setup() {
        return {
          rows: [
            { id: 1, a: 1 },
            { id: 2, a: 2 },
          ],
        };
      },
      template: `<g-table :data="rows" row-key="id" :expand-row-keys="[1]" highlight-current-row>
                   <g-table-column type="expand">
                     <template #default><probe /></template>
                   </g-table-column>
                   <g-table-column prop="a" label="A" />
                 </g-table>`,
    });

    const wrapper = mount(Host, { attachTo: document.body });
    await flushRenders();
    expect(wrapper.findAll('tbody .probe')).toHaveLength(1);
    expect(lifecycle).toEqual({ mounted: 1, unmounted: 0 });

    const bodyRows = wrapper.findAll('tbody tr');
    await bodyRows[0].trigger('click');
    await flushRenders();
    await bodyRows[2].trigger('click');
    await flushRenders();

    expect(lifecycle).toEqual({ mounted: 1, unmounted: 0 });
    wrapper.unmount();
  });
});

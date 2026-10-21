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

describe('TableHeader — contenido de cabecera personalizado', () => {
  it('parcha el slot #header en cada re-render del thead en vez de remontarlo', async () => {
    const { Probe, lifecycle } = createProbe();
    const Host = defineComponent({
      components: { GTable: Table, GTableColumn: TableColumn, Probe },
      setup() {
        return { rows: [{ a: 2 }, { a: 1 }, { a: 3 }] };
      },
      template: `<g-table :data="rows">
                   <g-table-column prop="a" label="A" sortable>
                     <template #header><probe /></template>
                   </g-table-column>
                 </g-table>`,
    });

    const wrapper = mount(Host, { attachTo: document.body });
    await flushRenders();
    expect(wrapper.find('thead .probe').exists()).toBe(true);
    expect(lifecycle).toEqual({ mounted: 1, unmounted: 0 });

    await wrapper.find('thead .caret-wrapper').trigger('click');
    await flushRenders();
    await wrapper.find('thead .caret-wrapper').trigger('click');
    await flushRenders();

    expect(wrapper.find('thead th').classes()).toContain('descending');
    expect(lifecycle).toEqual({ mounted: 1, unmounted: 0 });
    wrapper.unmount();
  });
});

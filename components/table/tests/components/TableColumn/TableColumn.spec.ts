import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { nextTick, defineComponent } from 'vue';
import Table from '../../../src/Table/index.vue';
import TableColumn from '../../../src/components/TableColumn/index.vue';

function buildHost(template: string, data: unknown[]) {
  return defineComponent({
    components: { GTable: Table, GTableColumn: TableColumn },
    setup() {
      return { rows: data };
    },
    template,
  });
}

describe('TableColumn — el slot no renderiza la celda real', () => {
  it('no tira y registra la columna cuando el cell template accede a una propiedad anidada', async () => {
    const wrapper = mount(
      buildHost(
        `<g-table :data="rows">
           <g-table-column prop="user" label="Usuario">
             <template #default="s">{{ s.row.user.name }}</template>
           </g-table-column>
         </g-table>`,
        [{ user: { name: 'ana' } }],
      ),
    );
    await nextTick();
    await nextTick();

    expect(wrapper.findAll('th')).toHaveLength(1);
  });
});

import { describe, it, expect } from 'vitest';
import { defineComponent, ref } from 'vue';
import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import GCollapse from '../src/collapse.vue';
import GCollapseItem from '../src/collapse-item.vue';

const GROUP_TITLE = 'Participación directa (1)';

function renderCollapse(initialActive: string[] = []) {
  const Host = defineComponent({
    components: { GCollapse, GCollapseItem },
    setup() {
      const activeNames = ref(initialActive);
      return { activeNames };
    },
    template: `
      <g-collapse v-model="activeNames">
        <template #dynamic>
          <g-collapse-item name="direct" title="${GROUP_TITLE}">
            <span>CUIT - 12345678902</span>
          </g-collapse-item>
        </template>
      </g-collapse>
    `,
  });

  return render(Host);
}

describe('GCollapse', () => {
  it('pone el título dentro del bloque de texto de la cabecera, que es el que alinea a la izquierda', () => {
    renderCollapse();

    const title = screen.getByText(GROUP_TITLE);

    expect(title).toHaveClass('gui-collapse-item__title');
    expect(title.closest('.gui-collapse-item__header--text')).not.toBeNull();
    expect(title.closest('button')).toHaveClass('gui-collapse-item__header');
  });

  it('renderiza el slot por defecto dentro del contenido del ítem', () => {
    renderCollapse(['direct']);

    const value = screen.getByText('CUIT - 12345678902');

    expect(value.closest('.gui-collapse-item__content')).not.toBeNull();
    expect(screen.getByRole('region')).toBeVisible();
  });

  it('abre y cierra el ítem al hacer click en la cabecera', async () => {
    const user = userEvent.setup();
    renderCollapse();
    const header = screen.getByRole('button', {
      name: new RegExp(GROUP_TITLE.replace(/[()]/g, '\\$&')),
    });

    expect(header).toHaveAttribute('aria-expanded', 'false');

    await user.click(header);
    expect(header).toHaveAttribute('aria-expanded', 'true');

    await user.click(header);
    expect(header).toHaveAttribute('aria-expanded', 'false');
  });
});

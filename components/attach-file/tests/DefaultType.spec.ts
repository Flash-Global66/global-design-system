import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { GIconButton } from '@flash-global66/g-icon-button';
import DefaultType from '../src/default-type.vue';

const TRASH_ICON = 'solid trash-alt';

function createFile(name: string): File {
  return new File(['x'], name, { type: 'application/pdf' });
}

function mountDefaultType() {
  return mount(DefaultType, {
    props: {
      modelValue: [] as File[],
      multiple: true,
      acceptExtNames: ['.pdf'],
      disabled: false,
      errors: [],
      fileErrors: {},
      fileProgress: {},
      showFileSize: false,
      showRemoveButton: true,
      title: 'Adjuntar',
      infoText: 'Hasta 3 archivos',
    },
  });
}

function getTrashButtons(wrapper: ReturnType<typeof mountDefaultType>) {
  return wrapper
    .findAllComponents(GIconButton)
    .filter((button) => button.props('icon') === TRASH_ICON);
}

function getLastUpdate(wrapper: ReturnType<typeof mountDefaultType>) {
  const updates = wrapper.emitted('update:modelValue') ?? [];
  return updates[updates.length - 1]?.[0];
}

describe('DefaultType — borrado individual de archivos', () => {
  it('muestra una papelera por cada archivo cargado después de un setProps', async () => {
    const wrapper = mountDefaultType();

    await wrapper.setProps({
      modelValue: [createFile('a.pdf'), createFile('b.pdf'), createFile('c.pdf')],
    });

    expect(getTrashButtons(wrapper)).toHaveLength(3);
  });

  it('emite los otros dos archivos, en orden, al borrar el segundo de tres', async () => {
    const wrapper = mountDefaultType();
    const first = createFile('a.pdf');
    const second = createFile('b.pdf');
    const third = createFile('c.pdf');

    await wrapper.setProps({ modelValue: [first, second, third] });
    await getTrashButtons(wrapper)[1].trigger('click');

    expect(getLastUpdate(wrapper)).toEqual([first, third]);
  });

  it('emite también change con los otros dos archivos al borrar el segundo', async () => {
    const wrapper = mountDefaultType();
    const first = createFile('a.pdf');
    const second = createFile('b.pdf');
    const third = createFile('c.pdf');

    await wrapper.setProps({ modelValue: [first, second, third] });
    await getTrashButtons(wrapper)[1].trigger('click');

    const changes = wrapper.emitted('change') ?? [];
    expect(changes[changes.length - 1]?.[0]).toEqual([first, third]);
  });

  it('borra sobre la lista nueva después de una segunda alta', async () => {
    const wrapper = mountDefaultType();

    await wrapper.setProps({
      modelValue: [createFile('a.pdf'), createFile('b.pdf')],
    });

    const x = createFile('x.pdf');
    const y = createFile('y.pdf');
    const z = createFile('z.pdf');
    await wrapper.setProps({ modelValue: [x, y, z] });
    await getTrashButtons(wrapper)[0].trigger('click');

    expect(getLastUpdate(wrapper)).toEqual([y, z]);
  });
});

import { describe, it, expect } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/vue';
import type { RenderResult } from '@testing-library/vue';
import DefaultType from '../src/default-type.vue';

function createFile(name: string): File {
  return new File(['x'], name, { type: 'application/pdf' });
}

function renderDefaultType(): RenderResult {
  return render(DefaultType, {
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
      showUploadButton: true,
      title: 'Adjuntar',
      infoText: 'Hasta 3 archivos',
    },
  });
}

async function clickRemove(fileName: string): Promise<void> {
  await fireEvent.click(
    screen.getByRole('button', { name: `Eliminar ${fileName}` }),
  );
}

function getLastEmitted(
  view: RenderResult,
  event: 'update:modelValue' | 'change',
): File[] | undefined {
  const calls = (view.emitted()[event] ?? []) as [File[]][];
  return calls[calls.length - 1]?.[0];
}

describe('DefaultType — borrado individual de archivos', () => {
  it('expone una papelera con nombre accesible por cada archivo cargado', async () => {
    const view = renderDefaultType();

    await view.rerender({
      modelValue: [
        createFile('a.pdf'),
        createFile('b.pdf'),
        createFile('c.pdf'),
      ],
    });

    expect(screen.getAllByRole('button', { name: /^Eliminar / })).toHaveLength(
      3,
    );
    expect(screen.getByRole('button', { name: 'Eliminar b.pdf' }).tagName).toBe(
      'BUTTON',
    );
  });

  it('emite los otros dos archivos, en orden, al borrar el segundo de tres', async () => {
    const view = renderDefaultType();
    const first = createFile('a.pdf');
    const second = createFile('b.pdf');
    const third = createFile('c.pdf');

    await view.rerender({ modelValue: [first, second, third] });
    await clickRemove('b.pdf');

    expect(getLastEmitted(view, 'update:modelValue')).toEqual([first, third]);
  });

  it('emite también change con los otros dos archivos al borrar el segundo', async () => {
    const view = renderDefaultType();
    const first = createFile('a.pdf');
    const second = createFile('b.pdf');
    const third = createFile('c.pdf');

    await view.rerender({ modelValue: [first, second, third] });
    await clickRemove('b.pdf');

    expect(getLastEmitted(view, 'change')).toEqual([first, third]);
  });

  it('borra sobre la lista nueva después de una segunda alta', async () => {
    const view = renderDefaultType();

    await view.rerender({
      modelValue: [createFile('a.pdf'), createFile('b.pdf')],
    });

    const x = createFile('x.pdf');
    const y = createFile('y.pdf');
    const z = createFile('z.pdf');
    await view.rerender({ modelValue: [x, y, z] });
    await clickRemove('x.pdf');

    expect(getLastEmitted(view, 'update:modelValue')).toEqual([y, z]);
  });

  it('borra, recibe una nueva alta y vuelve a borrar sin perder archivos', async () => {
    const view = renderDefaultType();
    const first = createFile('a.pdf');
    const second = createFile('b.pdf');
    const third = createFile('c.pdf');
    const added = createFile('d.pdf');

    await view.rerender({ modelValue: [first, second, third] });
    await clickRemove('b.pdf');
    const afterFirstRemoval = getLastEmitted(view, 'update:modelValue') ?? [];
    expect(afterFirstRemoval).toEqual([first, third]);

    await view.rerender({ modelValue: [...afterFirstRemoval, added] });
    await clickRemove('a.pdf');

    expect(getLastEmitted(view, 'update:modelValue')).toEqual([third, added]);
  });
});

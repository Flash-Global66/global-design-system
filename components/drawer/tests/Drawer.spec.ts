import { describe, it, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/vue';
import Drawer from '../src/drawer.vue';

const HEADER_ROW_SELECTOR = '.gui-drawer__header--container-close';
const BACK_SELECTOR = '.gui-drawer__header--back';
const CLOSE_SELECTOR = '.gui-drawer__header--close';

describe('Drawer — showBack / back', () => {
  it('sin show-back (default), el header queda idéntico a hoy: solo el botón de close', () => {
    const { container } = render(Drawer, {
      props: { modelValue: true },
    });

    const row = container.querySelector(HEADER_ROW_SELECTOR);
    expect(row).toBeTruthy();

    const buttons = row!.querySelectorAll('button');
    expect(buttons).toHaveLength(1);
    expect(row!.querySelector(BACK_SELECTOR)).toBeNull();
    expect(row!.querySelector(CLOSE_SELECTOR)).not.toBeNull();
  });

  it('sin show-back ni show-close, la fila superior no se renderiza', () => {
    const { container } = render(Drawer, {
      props: { modelValue: true, showClose: false },
    });

    expect(container.querySelector(HEADER_ROW_SELECTOR)).toBeNull();
  });

  it('con show-back, renderiza un g-icon-button "regular arrow-left" a la izquierda de la fila del close', () => {
    const { container } = render(Drawer, {
      props: { modelValue: true, showBack: true },
    });

    const row = container.querySelector(HEADER_ROW_SELECTOR);
    expect(row).toBeTruthy();

    const buttons = row!.querySelectorAll('button');
    expect(buttons).toHaveLength(2);
    expect(buttons[0]).toHaveClass('gui-drawer__header--back');
    expect(buttons[1]).toHaveClass('gui-drawer__header--close');
  });

  it('la flecha expone un nombre accesible', () => {
    const { container } = render(Drawer, {
      props: { modelValue: true, showBack: true },
    });

    expect(container.querySelector(BACK_SELECTOR)).toHaveAttribute(
      'aria-label',
      'Volver',
    );
  });

  it('el click en la flecha emite "back" una vez y no emite "close" ni cambia modelValue', async () => {
    const { container, emitted } = render(Drawer, {
      props: { modelValue: true, showBack: true },
    });

    const backButton = container.querySelector(BACK_SELECTOR);

    await fireEvent.click(backButton!);

    expect(emitted().back).toHaveLength(1);
    expect(emitted().close).toBeUndefined();
    expect(emitted()['update:modelValue']).toBeUndefined();
  });

  it('con show-back y show-close:false, la fila se renderiza con solo la flecha', () => {
    const { container } = render(Drawer, {
      props: { modelValue: true, showBack: true, showClose: false },
    });

    const row = container.querySelector(HEADER_ROW_SELECTOR);
    expect(row).toBeTruthy();

    const buttons = row!.querySelectorAll('button');
    expect(buttons).toHaveLength(1);
    expect(row!.querySelector(BACK_SELECTOR)).not.toBeNull();
    expect(row!.querySelector(CLOSE_SELECTOR)).toBeNull();
  });
});

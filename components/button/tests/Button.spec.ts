import { describe, it, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/vue';
import Button from '../src/Button.vue';

describe('Button (render + backward-compat de clases)', () => {
  it('renderiza con las clases base gui-button (default primary/md)', () => {
    const { getByRole } = render(Button, { slots: { default: 'Hola' } });
    const el = getByRole('button');
    expect(el).toHaveClass(
      'gui-button',
      'gui-button--variant-primary',
      'gui-button--md',
    );
    expect(el).toHaveTextContent('Hola');
  });

  it('aplica variante y tamaño', () => {
    const { getByRole } = render(Button, {
      props: { variant: 'secondary', size: 'sm' },
    });
    expect(getByRole('button')).toHaveClass(
      'gui-button--variant-secondary',
      'gui-button--sm',
    );
  });

  it('estado disabled aplica is-disabled', () => {
    const { getByRole } = render(Button, { props: { disabled: true } });
    expect(getByRole('button')).toHaveClass('is-disabled');
  });

  it('estado loading aplica is-loading e is-disabled', () => {
    const { getByRole } = render(Button, { props: { loading: true } });
    expect(getByRole('button')).toHaveClass('is-loading', 'is-disabled');
  });

  it('estado full aplica is-full', () => {
    const { getByRole } = render(Button, { props: { full: true } });
    expect(getByRole('button')).toHaveClass('is-full');
  });

  it('con href renderiza como <a> con is-href', () => {
    const { getByRole } = render(Button, { props: { href: 'https://x.com' } });
    const link = getByRole('link');
    expect(link).toHaveClass('gui-button', 'is-href');
    expect(link).toHaveAttribute('href', 'https://x.com');
  });

  it('emite "click" al clickear cuando está habilitado', async () => {
    const { getByRole, emitted } = render(Button, { slots: { default: 'x' } });
    await fireEvent.click(getByRole('button'));
    expect(emitted().click).toBeTruthy();
  });

  it('NO emite "click" cuando está disabled', async () => {
    const { getByRole, emitted } = render(Button, {
      props: { disabled: true },
      slots: { default: 'x' },
    });
    await fireEvent.click(getByRole('button'));
    expect(emitted().click).toBeFalsy();
  });
});

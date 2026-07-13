import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/vue';
import Badge from '../Badge.vue';

describe('Badge (render nativo — sin ElBadge)', () => {
  it('renderiza la clase base gui-badge y el slot default', () => {
    const { container, getByText } = render(Badge, {
      props: { value: 5 },
      slots: { default: 'Bandeja' },
    });
    const root = container.firstElementChild as HTMLElement;
    expect(root).toHaveClass('gui-badge');
    expect(getByText('Bandeja')).toBeInTheDocument();
  });

  it('muestra el value como contenido con la clase de tipo por defecto (danger)', () => {
    const { getByText } = render(Badge, { props: { value: 5 } });
    const content = getByText('5');
    expect(content).toHaveClass(
      'gui-badge__content',
      'gui-badge__content--danger',
    );
  });

  it('trunca el value cuando excede max: "{max}+"', () => {
    const { getByText } = render(Badge, { props: { value: 120, max: 99 } });
    expect(getByText('99+')).toBeInTheDocument();
  });

  it('no trunca el value cuando es menor o igual a max', () => {
    const { getByText } = render(Badge, { props: { value: 42, max: 99 } });
    expect(getByText('42')).toBeInTheDocument();
  });

  it('isDot oculta el texto y aplica la clase is-dot', () => {
    const { container } = render(Badge, { props: { value: 5, isDot: true } });
    const content = container.querySelector(
      '.gui-badge__content',
    ) as HTMLElement;
    expect(content).toHaveClass('is-dot');
    expect(content).toHaveTextContent('');
  });

  it('hidden oculta el badge (display:none) aunque haya value', () => {
    const { container } = render(Badge, { props: { value: 5, hidden: true } });
    const content = container.querySelector(
      '.gui-badge__content',
    ) as HTMLElement;
    expect(content).not.toBeVisible();
  });

  it('showZero=false aplica is-hide-zero cuando value es 0', () => {
    const { container } = render(Badge, {
      props: { value: 0, showZero: false },
    });
    const content = container.querySelector(
      '.gui-badge__content',
    ) as HTMLElement;
    expect(content).toHaveClass('is-hide-zero');
  });

  it('showZero=true (default) NO aplica is-hide-zero cuando value es 0', () => {
    const { container } = render(Badge, { props: { value: 0 } });
    const content = container.querySelector(
      '.gui-badge__content',
    ) as HTMLElement;
    expect(content).not.toHaveClass('is-hide-zero');
    expect(content).toBeVisible();
  });

  it('type aplica el modificador correspondiente', () => {
    const { container } = render(Badge, {
      props: { value: 1, type: 'success' },
    });
    const content = container.querySelector(
      '.gui-badge__content',
    ) as HTMLElement;
    expect(content).toHaveClass('gui-badge__content--success');
    expect(content).not.toHaveClass('gui-badge__content--danger');
  });

  it('color customiza el background-color inline', () => {
    const { container } = render(Badge, {
      props: { value: 1, color: 'rgb(1, 2, 3)' },
    });
    const content = container.querySelector(
      '.gui-badge__content',
    ) as HTMLElement;
    expect(content).toHaveStyle({ backgroundColor: 'rgb(1, 2, 3)' });
  });

  it('offset aplica margin-right invertido y margin-top en px', () => {
    const { container } = render(Badge, {
      props: { value: 1, offset: [10, 5] },
    });
    const content = container.querySelector(
      '.gui-badge__content',
    ) as HTMLElement;
    expect(content).toHaveStyle({ marginRight: '-10px', marginTop: '5px' });
  });

  it('badgeStyle se combina con los estilos calculados', () => {
    const { container } = render(Badge, {
      props: { value: 1, badgeStyle: { fontWeight: 'bold' } },
    });
    const content = container.querySelector(
      '.gui-badge__content',
    ) as HTMLElement;
    expect(content).toHaveStyle({ fontWeight: 'bold' });
  });

  it('badgeClass agrega una clase custom al contenido', () => {
    const { container } = render(Badge, {
      props: { value: 1, badgeClass: 'custom-badge' },
    });
    const content = container.querySelector(
      '.gui-badge__content',
    ) as HTMLElement;
    expect(content).toHaveClass('custom-badge');
  });

  it('el slot "content" reemplaza el contenido usando el scope { value }', () => {
    const { getByText } = render(Badge, {
      props: { value: 7 },
      slots: { content: (props: { value: string }) => `custom:${props.value}` },
    });
    expect(getByText('custom:7')).toBeInTheDocument();
  });

  it('aplica is-fixed cuando hay slot default (badge posicionado sobre el contenido envuelto)', () => {
    const { container } = render(Badge, {
      props: { value: 5 },
      slots: { default: 'Wrapped' },
    });
    const content = container.querySelector(
      '.gui-badge__content',
    ) as HTMLElement;
    expect(content).toHaveClass('is-fixed');
  });

  it('NO aplica is-fixed cuando no hay slot default (badge standalone)', () => {
    const { container } = render(Badge, { props: { value: 5 } });
    const content = container.querySelector(
      '.gui-badge__content',
    ) as HTMLElement;
    expect(content).not.toHaveClass('is-fixed');
  });

  it('atributos extra (class, id) hacen fallthrough sobre el div raíz', () => {
    const { container } = render(Badge, {
      props: { value: 1 },
      attrs: { class: 'foo', id: 'my-badge' },
    });
    const root = container.firstElementChild as HTMLElement;
    expect(root).toHaveClass('gui-badge', 'foo');
    expect(root).toHaveAttribute('id', 'my-badge');
  });

  it('resuelve el namespace gui-badge sin necesitar un ConfigProvider ancestro (contrato nuevo, ya no cae a el-badge*)', () => {
    const { container } = render(Badge, {
      props: { value: 5 },
    });
    const root = container.firstElementChild as HTMLElement;
    const content = container.querySelector(
      '.gui-badge__content',
    ) as HTMLElement;
    expect(root).toHaveClass('gui-badge');
    expect(root).not.toHaveClass('el-badge');
    expect(content).toHaveClass('gui-badge__content');
    expect(content).not.toHaveClass('el-badge__content');
  });
});

import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import { GLink } from '../../index';

function getLink(container: Element) {
  return container.firstElementChild as HTMLAnchorElement;
}

describe('GLink', () => {
  it('renderiza un ancla con las clases BEM por defecto y el slot', () => {
    const { container, getByText } = render(GLink, {
      slots: { default: 'Ir a inicio' },
    });
    const link = getLink(container);
    expect(link.tagName).toBe('A');
    expect(link).toHaveClass(
      'gui-link',
      'gui-link--primary',
      'gui-link--md',
      'gui-link--default',
    );
    expect(link).not.toHaveClass('is-disabled');
    expect(link).not.toHaveClass('is-underline');
    expect(getByText('Ir a inicio')).toHaveClass('gui-link__inner');
  });

  it('aplica type, size, status y underline', () => {
    const { container } = render(GLink, {
      props: {
        type: 'secondary',
        size: 'lg',
        status: 'inline',
        underline: true,
      },
    });
    expect(getLink(container)).toHaveClass(
      'gui-link--secondary',
      'gui-link--lg',
      'gui-link--inline',
      'is-underline',
    );
  });

  it('expone href y target cuando hay href', () => {
    const { container } = render(GLink, {
      props: { href: 'https://global66.com', target: '_blank' },
    });
    const link = getLink(container);
    expect(link).toHaveAttribute('href', 'https://global66.com');
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('usa _self como target por defecto', () => {
    const { container } = render(GLink, { props: { href: '/inicio' } });
    expect(getLink(container)).toHaveAttribute('target', '_self');
  });

  it('omite href y target sin href', () => {
    const { container } = render(GLink);
    const link = getLink(container);
    expect(link).not.toHaveAttribute('href');
    expect(link).not.toHaveAttribute('target');
  });

  it('disabled omite href y target, marca is-disabled y quita underline', () => {
    const { container } = render(GLink, {
      props: { disabled: true, underline: true, href: '/inicio' },
    });
    const link = getLink(container);
    expect(link).toHaveClass('is-disabled');
    expect(link).not.toHaveClass('is-underline');
    expect(link).not.toHaveAttribute('href');
    expect(link).not.toHaveAttribute('target');
  });

  it('emite click con un MouseEvent', async () => {
    const { container, emitted } = render(GLink, {
      slots: { default: 'Ir' },
    });
    await userEvent.click(getLink(container));
    const events = emitted().click as unknown[][];
    expect(events).toHaveLength(1);
    expect(events[0][0]).toBeInstanceOf(MouseEvent);
  });

  it('disabled no emite click', async () => {
    const { container, emitted } = render(GLink, {
      props: { disabled: true },
      slots: { default: 'Ir' },
    });
    await userEvent.click(getLink(container));
    expect(emitted().click).toBeUndefined();
  });

  it('renderiza iconos izquierdo y derecho con sus clases', () => {
    const { container } = render(GLink, {
      props: {
        iconLeft: 'regular arrow-left',
        iconRight: 'regular arrow-right',
      },
      slots: { default: 'Ir' },
    });
    const link = getLink(container);
    expect(link.querySelector('.gui-link__icon-left')).toBeInTheDocument();
    expect(link.querySelector('.gui-link__icon-right')).toBeInTheDocument();
  });

  it('no renderiza iconos sin las props', () => {
    const { container } = render(GLink, { slots: { default: 'Ir' } });
    const link = getLink(container);
    expect(link.querySelector('.gui-link__icon-left')).toBeNull();
    expect(link.querySelector('.gui-link__icon-right')).toBeNull();
  });

  it('renderiza el slot icon', () => {
    const { getByTestId } = render(GLink, {
      slots: {
        default: 'Ir',
        icon: '<span data-testid="custom-icon" />',
      },
    });
    expect(getByTestId('custom-icon')).toBeInTheDocument();
  });
});

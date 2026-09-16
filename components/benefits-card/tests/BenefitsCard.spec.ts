import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/vue';
import BenefitsCard from '../src/BenefitsCard.vue';
import type { BenefitsCardItem } from '../src/types/benefits-card.type';

const benefits: BenefitsCardItem[] = [
  {
    icon: 'light key-skeleton',
    text: 'Ingresa en 2 segundos, sin recordar claves',
  },
  {
    icon: 'light fingerprint',
    text: 'Tu huella o Face ID nunca sale de este dispositivo',
  },
  { icon: 'regular shield-check', text: 'Protege el acceso a tu empresa' },
];

function renderCard(props: Record<string, unknown> = {}) {
  return render(BenefitsCard, {
    props: {
      title: 'Entra en segundos, sin escribir contraseñas',
      description: 'Registra tu huella o Face ID y accede con un solo gesto.',
      benefits,
      ...props,
    },
  });
}

describe('GBenefitsCard', () => {
  it('muestra el título como encabezado de nivel 2 por defecto', () => {
    renderCard();

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Entra en segundos, sin escribir contraseñas',
      }),
    ).toBeInTheDocument();
  });

  it('usa el nivel de encabezado indicado', () => {
    renderCard({ headingLevel: 3 });

    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { level: 2 })).not.toBeInTheDocument();
  });

  it('permite reemplazar el título con el slot title', () => {
    render(BenefitsCard, {
      props: { title: '', benefits },
      slots: {
        title: 'Tu empresa merece <strong>productos a su medida</strong>',
      },
    });

    const heading = screen.getByRole('heading', { level: 2 });

    expect(heading).toHaveTextContent(
      'Tu empresa merece productos a su medida',
    );
    expect(heading.querySelector('strong')).toHaveTextContent(
      'productos a su medida',
    );
  });

  it('no renderiza encabezado sin título ni slot', () => {
    renderCard({ title: '' });

    expect(screen.queryByRole('heading')).not.toBeInTheDocument();
  });

  it('muestra la bajada debajo del título', () => {
    renderCard();

    expect(
      screen.getByText(
        'Registra tu huella o Face ID y accede con un solo gesto.',
      ),
    ).toBeInTheDocument();
  });

  it('no renderiza la bajada cuando viene vacía', () => {
    const { container } = renderCard({ description: '' });

    expect(container.querySelector('p')).toBeNull();
  });

  it('renderiza cada beneficio como ítem de lista con su texto', () => {
    renderCard();

    const items = within(screen.getByRole('list')).getAllByRole('listitem');

    expect(items).toHaveLength(3);
    expect(items[0]).toHaveTextContent(
      'Ingresa en 2 segundos, sin recordar claves',
    );
    expect(items[1]).toHaveTextContent(
      'Tu huella o Face ID nunca sale de este dispositivo',
    );
    expect(items[2]).toHaveTextContent('Protege el acceso a tu empresa');
  });

  it('dibuja el ícono de cada beneficio y lo oculta a los lectores de pantalla', () => {
    renderCard();

    const items = within(screen.getByRole('list')).getAllByRole('listitem');

    items.forEach(item => {
      const icon = item.querySelector('[aria-hidden="true"]');

      expect(icon).not.toBeNull();
      expect(icon?.querySelector('svg')).not.toBeNull();
    });
  });

  it('renderiza sin beneficios mientras la lista viene vacía', () => {
    renderCard({ benefits: [] });

    expect(
      within(screen.getByRole('list')).queryAllByRole('listitem'),
    ).toHaveLength(0);
  });
});

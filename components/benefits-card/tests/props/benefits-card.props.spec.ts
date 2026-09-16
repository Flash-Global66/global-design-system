import { describe, it, expect, vi, afterEach } from 'vitest';
import { render } from '@testing-library/vue';
import BenefitsCard from '../../src/BenefitsCard.vue';
import {
  benefitsCardProps,
  isBenefitsCountValid,
} from '../../src/props/benefits-card.props';
import type { BenefitsCardItem } from '../../src/types/benefits-card.type';

function makeBenefits(count: number): BenefitsCardItem[] {
  return Array.from({ length: count }, (_, index) => ({
    icon: 'regular check',
    text: `Beneficio ${index + 1}`,
  }));
}

describe('isBenefitsCountValid', () => {
  it('acepta la lista vacía como estado de carga', () => {
    expect(isBenefitsCountValid([])).toBe(true);
  });

  it.each([1, 2])('rechaza %i beneficio(s)', count => {
    expect(isBenefitsCountValid(makeBenefits(count))).toBe(false);
  });

  it.each([3, 4, 5])('acepta %i beneficios', count => {
    expect(isBenefitsCountValid(makeBenefits(count))).toBe(true);
  });

  it('rechaza más de 5 beneficios', () => {
    expect(isBenefitsCountValid(makeBenefits(6))).toBe(false);
  });
});

describe('benefitsCardProps.benefits', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('usa la validación como validator del prop', () => {
    const { validator } = benefitsCardProps.benefits;

    expect(validator?.(makeBenefits(2))).toBe(false);
    expect(validator?.(makeBenefits(4))).toBe(true);
  });

  it('hace que Vue avise en desarrollo cuando la cantidad no es válida', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined);

    render(BenefitsCard, {
      props: { title: 'Título', benefits: makeBenefits(2) },
    });

    expect(warn).toHaveBeenCalled();
    expect(String(warn.mock.calls[0][0])).toContain('benefits');
  });

  it('no avisa con una cantidad válida', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined);

    render(BenefitsCard, {
      props: { title: 'Título', benefits: makeBenefits(4) },
    });

    expect(warn).not.toHaveBeenCalled();
  });
});

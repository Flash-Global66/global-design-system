import { describe, it, expect } from 'vitest';
import { benefitsCardProps } from '../../src/props/benefits-card.props';
import {
  BENEFITS_CARD_DEFAULT_HEADING_LEVEL,
  BENEFITS_CARD_HEADING_LEVELS,
} from '../../src/constants/benefits-card.constant';

describe('benefitsCardProps (definición)', () => {
  it('expone los defaults esperados', () => {
    expect(benefitsCardProps.title.default).toBe('');
    expect(benefitsCardProps.description.default).toBe('');
    expect(benefitsCardProps.headingLevel.default).toBe(
      BENEFITS_CARD_DEFAULT_HEADING_LEVEL,
    );
  });

  it('parte de una lista de beneficios vacía', () => {
    const { default: defaultBenefits } = benefitsCardProps.benefits;

    expect(typeof defaultBenefits).toBe('function');
    expect((defaultBenefits as () => unknown[])()).toEqual([]);
  });

  it('solo acepta niveles de encabezado de h1 a h6', () => {
    const { validator } = benefitsCardProps.headingLevel;

    BENEFITS_CARD_HEADING_LEVELS.forEach(level => {
      expect(validator?.(level)).toBe(true);
    });
    expect(validator?.(7)).toBe(false);
    expect(validator?.(0)).toBe(false);
  });
});

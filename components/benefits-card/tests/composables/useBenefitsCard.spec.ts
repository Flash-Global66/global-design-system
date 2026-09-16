import { describe, it, expect } from 'vitest';
import { nextTick, reactive } from 'vue';
import { withSetup } from '../../../../tests/utils/withSetup';
import { useBenefitsCard } from '../../src/composables/useBenefitsCard';
import type { BenefitsCardProps } from '../../src/props/benefits-card.props';

function makeProps(
  overrides: Partial<BenefitsCardProps> = {},
): BenefitsCardProps {
  return reactive({
    title: 'Título',
    description: '',
    benefits: [],
    headingLevel: 2,
    ...overrides,
  }) as BenefitsCardProps;
}

describe('useBenefitsCard', () => {
  it('expone el namespace BEM del componente', () => {
    const { result } = withSetup(() => useBenefitsCard(makeProps()));

    expect(result.ns.b()).toBe('gui-benefits-card');
    expect(result.ns.e('benefit')).toBe('gui-benefits-card__benefit');
  });

  it('deriva la etiqueta del encabezado del nivel indicado', async () => {
    const props = makeProps({ headingLevel: 3 });
    const { result } = withSetup(() => useBenefitsCard(props));

    expect(result.headingTag.value).toBe('h3');

    props.headingLevel = 1;
    await nextTick();

    expect(result.headingTag.value).toBe('h1');
  });
});

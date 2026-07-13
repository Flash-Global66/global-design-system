import { describe, it, expect } from 'vitest';
import { defineComponent, h, inject } from 'vue';
import { render } from '@testing-library/vue';
import RadioGroup from '../RadioGroup.vue';
import { radioGroupKey } from '../constants';
import { GRadio } from '../../radio';

/**
 * Regression suite for WU2 (ep-extraction-v6): RadioGroup previously wrapped
 * `ElRadioGroup` from element-plus AND imported `TypeRadioSize`/`EnumRadioSize`
 * from a non-existent `../radio/radio.type` module (latent bug masked by the
 * ESLint `excludedFiles` exclusion). This suite proves:
 *  1. the native `<div role="radiogroup">` render (no element-plus involved)
 *  2. value/size/disabled are provided via context to descendants
 *  3. the type-import fix (`./radio.type`) resolves and the module loads at all
 */

const StubChild = defineComponent({
  setup() {
    const group = inject(radioGroupKey, undefined);
    return () =>
      h('span', {
        'data-testid': 'stub-child',
        'data-model-value': String(group?.modelValue ?? ''),
        'data-disabled': String(!!group?.disabled),
        'data-size': String(group?.size ?? ''),
      });
  },
});

describe('RadioGroup (render nativo — sin ElRadioGroup)', () => {
  it('renderiza un <div role="radiogroup"> nativo con la clase gui-radio-group', () => {
    const { container } = render(RadioGroup);
    const root = container.firstElementChild as HTMLElement;
    expect(root.tagName).toBe('DIV');
    expect(root).toHaveAttribute('role', 'radiogroup');
    expect(root).toHaveClass('gui-radio-group');
    expect(root).not.toHaveClass('el-radio-group');
  });

  it('renderiza el slot default', () => {
    const { getByText } = render(RadioGroup, {
      slots: { default: 'contenido' },
    });
    expect(getByText('contenido')).toBeInTheDocument();
  });

  it('provee modelValue/disabled/size a descendientes via provide/inject', () => {
    const { getByTestId } = render(RadioGroup, {
      props: { modelValue: 'ValueB', disabled: true, size: 'large' },
      slots: { default: () => h(StubChild) },
    });
    const child = getByTestId('stub-child');
    expect(child).toHaveAttribute('data-model-value', 'ValueB');
    expect(child).toHaveAttribute('data-disabled', 'true');
    expect(child).toHaveAttribute('data-size', 'large');
  });

  it('usa "default" como valor por defecto de size cuando no se especifica', () => {
    const { getByTestId } = render(RadioGroup, {
      slots: { default: () => h(StubChild) },
    });
    expect(getByTestId('stub-child')).toHaveAttribute('data-size', 'default');
  });

  it('disabled=false por defecto', () => {
    const { getByTestId } = render(RadioGroup, {
      slots: { default: () => h(StubChild) },
    });
    expect(getByTestId('stub-child')).toHaveAttribute('data-disabled', 'false');
  });

  it('emite "change" y "update:modelValue" cuando un descendiente llama changeEvent', () => {
    const ChangeTrigger = defineComponent({
      setup() {
        const group = inject(radioGroupKey, undefined);
        return () =>
          h(
            'button',
            {
              'data-testid': 'trigger',
              onClick: () => group?.changeEvent('ValueC'),
            },
            'trigger',
          );
      },
    });

    const { getByTestId, emitted } = render(RadioGroup, {
      slots: { default: () => h(ChangeTrigger) },
    });

    getByTestId('trigger').click();

    expect(emitted().change[0]).toEqual(['ValueC']);
    expect(emitted()['update:modelValue'][0]).toEqual(['ValueC']);
  });

  it('interopera con un <g-radio> real de @flash-global66/g-radio anidado en el slot (mismo Symbol.for global de radioGroupKey)', () => {
    const Wrapper = defineComponent({
      components: { RadioGroup, GRadio },
      template: `
        <RadioGroup model-value="ValueA">
          <GRadio value="ValueA" label="Opción A" />
        </RadioGroup>
      `,
    });

    const { container, getByLabelText } = render(Wrapper);

    const input = container.querySelector(
      'input[type=radio]',
    ) as HTMLInputElement;
    expect(input).toBeTruthy();
    expect(input.checked).toBe(true);
    expect(getByLabelText('Opción A')).toBeInTheDocument();
  });

  it('provee un "name" compartido a 2+ <g-radio> reales anidados, preservando el agrupamiento nativo del navegador', () => {
    const Wrapper = defineComponent({
      components: { RadioGroup, GRadio },
      template: `
        <RadioGroup model-value="ValueA">
          <GRadio value="ValueA" label="Opción A" />
          <GRadio value="ValueB" label="Opción B" />
        </RadioGroup>
      `,
    });

    const { container } = render(Wrapper);

    const inputs = Array.from(
      container.querySelectorAll('input[type=radio]'),
    ) as HTMLInputElement[];

    expect(inputs).toHaveLength(2);
    expect(inputs[0].name).toBeTruthy();
    expect(inputs[0].name).toBe(inputs[1].name);
  });
});

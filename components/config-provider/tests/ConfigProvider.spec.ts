import { describe, it, expect, vi } from 'vitest';
import { defineComponent, h, provide, ref } from 'vue';
import { render, screen } from '@testing-library/vue';
import { namespaceContextKey, useNamespace } from '@flash-global66/g-utils';
import GConfigProvider from '../ConfigProvider.vue';

// Espía sobre la función pública `provideGlobalConfig` de element-plus,
// preservando su implementación real para no romper el contrato de las
// islas EP que aún dependen de ella.
const provideGlobalConfigSpy = vi.fn();

vi.mock('element-plus', async importOriginal => {
  const actual = await importOriginal<typeof import('element-plus')>();
  return {
    ...actual,
    provideGlobalConfig: (
      ...args: Parameters<typeof actual.provideGlobalConfig>
    ) => {
      provideGlobalConfigSpy(...args);
      return actual.provideGlobalConfig(...args);
    },
  };
});

// Componente hijo que resuelve el namespace vía el composable DS
// (`useNamespace` de g-utils), NO vía element-plus.
const NamespaceProbe = defineComponent({
  setup() {
    const ns = useNamespace('probe');
    return () => h('span', { 'data-testid': 'probe' }, ns.b());
  },
});

// Antecesor que provee deliberadamente un namespace DISTINTO por encima de
// ConfigProvider. Si ConfigProvider no proveyera explícitamente
// `namespaceContextKey`, el hijo heredaría este valor externo en lugar de
// 'gui', delatando que el provide interno no se ejecutó.
const OuterNamespaceOverride = defineComponent({
  setup(_, { slots }) {
    provide(namespaceContextKey, ref('outer-ns'));
    return () => slots.default?.();
  },
});

describe('ConfigProvider', () => {
  it('provee namespace "gui" a los descendientes DS pese a un namespace distinto heredado por fuera', () => {
    render(OuterNamespaceOverride, {
      slots: {
        default: () => h(GConfigProvider, null, () => h(NamespaceProbe)),
      },
    });
    expect(screen.getByTestId('probe')).toHaveTextContent('gui-probe');
  });

  it('invoca provideGlobalConfig de element-plus con namespace "gui" para las islas EP', () => {
    provideGlobalConfigSpy.mockClear();
    render(GConfigProvider, { slots: { default: () => h('div') } });

    expect(provideGlobalConfigSpy).toHaveBeenCalledTimes(1);
    const [config] = provideGlobalConfigSpy.mock.calls[0];
    const resolved = 'value' in config ? config.value : config;
    expect(resolved).toMatchObject({ namespace: 'gui' });
  });

  it('reenvía atributos adicionales (fallthrough) dentro de la config de element-plus', () => {
    provideGlobalConfigSpy.mockClear();
    render(GConfigProvider, {
      props: { size: 'large' },
      slots: { default: () => h('div') },
    });

    const [config] = provideGlobalConfigSpy.mock.calls[0];
    const resolved = 'value' in config ? config.value : config;
    expect(resolved).toMatchObject({ size: 'large', namespace: 'gui' });
  });

  it('renderiza el slot dentro de un único <section>, sin wrappers extra', () => {
    const { container } = render(GConfigProvider, {
      slots: { default: '<p>contenido</p>' },
    });

    expect(container.querySelectorAll('section')).toHaveLength(1);
    expect(container.firstElementChild?.tagName).toBe('SECTION');
    expect(container.querySelector('section > p')).toHaveTextContent(
      'contenido',
    );
  });
});

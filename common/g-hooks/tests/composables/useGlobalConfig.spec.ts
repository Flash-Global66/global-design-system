import { describe, it, expect } from 'vitest';
import { createApp, defineComponent, h } from 'vue';
import {
  useGlobalConfig,
  provideGlobalConfig,
  gConfigProviderContextKey,
} from '../../src/composables/useGlobalConfig';

describe('useGlobalConfig', () => {
  it('resuelve el valor por defecto cuando no hay un proveedor ancestro', () => {
    let resolved: string | undefined;

    const Child = defineComponent({
      setup() {
        const namespace = useGlobalConfig('namespace', 'gui');
        resolved = namespace.value;
        return () => null;
      },
    });

    createApp(Child).mount(document.createElement('div'));

    expect(resolved).toBe('gui');
  });

  it('resuelve el valor provisto por un ancestro que llamó a provideGlobalConfig', () => {
    let resolved: string | undefined;

    const Child = defineComponent({
      setup() {
        const namespace = useGlobalConfig('namespace', 'gui');
        resolved = namespace.value;
        return () => null;
      },
    });
    const Parent = defineComponent({
      setup() {
        provideGlobalConfig({ namespace: 'custom' });
        return () => h(Child);
      },
    });

    createApp(Parent).mount(document.createElement('div'));

    expect(resolved).toBe('custom');
  });

  it('el overload sin argumentos retorna el contexto completo', () => {
    let resolved: { namespace?: string } | undefined;

    const Child = defineComponent({
      setup() {
        const config = useGlobalConfig();
        resolved = config.value;
        return () => null;
      },
    });
    const Parent = defineComponent({
      setup() {
        provideGlobalConfig({ namespace: 'whole-context' });
        return () => h(Child);
      },
    });

    createApp(Parent).mount(document.createElement('div'));

    expect(resolved).toEqual({ namespace: 'whole-context' });
  });

  it('sin instancia activa de Vue (fuera de setup) retorna el ref del módulo sin lanzar', () => {
    expect(() => useGlobalConfig('namespace', 'gui')).not.toThrow();
    const namespace = useGlobalConfig('namespace', 'gui');
    // Sin instancia activa, cae al ref de módulo (vacío por defecto) -> usa el default.
    expect(namespace.value).toBe('gui');
  });

  it('la clave de inyección DS-nativa es distinta a la de element-plus (no debe existir acoplamiento)', () => {
    expect(typeof gConfigProviderContextKey).toBe('symbol');
    expect(gConfigProviderContextKey.toString()).toContain(
      'gConfigProviderContextKey',
    );
  });
});

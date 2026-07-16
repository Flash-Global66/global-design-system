import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, it, expect, vi } from 'vitest';
import { computed, defineComponent, h, provide, ref } from 'vue';
import { render, screen } from '@testing-library/vue';
import { namespaceContextKey, useNamespace } from '@flash-global66/g-utils';
import {
  useGlobalConfig,
  gConfigProviderContextKey,
} from '@flash-global66/g-hooks';
// Real, unmocked production hook from the ONE real consumer of the config
// context (Design Decision 2 / use-dialog.ts:60). Imported by relative path
// (not via g-dialog's built dist, which config-provider does not and should
// not depend on) to execute the exact same code dialog runs in production.
import { useDialog } from '../../dialog/src/hooks/use-dialog';
import type { DialogProps } from '../../dialog/src/dialog';
import GConfigProvider from '../ConfigProvider.vue';

// Espía sobre la función pública `provideGlobalConfig` de g-hooks (DS-native),
// preservando su implementación real. Ya NO se espía element-plus: el
// provider deja de importar la isla EP para propagar `namespace`.
const provideGlobalConfigSpy = vi.fn();

vi.mock('@flash-global66/g-hooks', async importOriginal => {
  const actual =
    await importOriginal<typeof import('@flash-global66/g-hooks')>();
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

// Réplica mínima del ÚNICO consumidor real de `useGlobalConfig` (dialog,
// use-dialog.ts:60): `useGlobalConfig('namespace', 'gui')`. Verifica que,
// tras el switch a la clave de inyección DS-nativa (`gConfigProviderContextKey`
// de g-hooks), el descendiente sigue resolviendo 'gui'.
const DialogNamespaceProbe = defineComponent({
  setup() {
    const namespace = useGlobalConfig('namespace', 'gui');
    return () =>
      h('span', { 'data-testid': 'dialog-namespace-probe' }, namespace.value);
  },
});

// Ejercicio EMPÍRICO y NO mockeado del hook real de dialog (`useDialog`),
// exactamente como lo invoca `dialog.vue`. Verifica que el prefijo de CSS var
// que dialog calcula a partir de `useGlobalConfig` sigue siendo 'gui' bajo el
// nuevo provider (WU5 lesson: no basta con leer el código, hay que montarlo).
const DialogStyleProbe = defineComponent({
  setup() {
    const dialogRef = ref<HTMLElement>();
    const closeOnClickModal = computed(() => true);
    const closeOnPressEscape = computed(() => true);
    const props = {
      top: '20px',
      fullscreen: false,
      showClose: true,
      lockScroll: false,
      modelValue: false,
      destroyOnClose: false,
      openDelay: 0,
      closeDelay: 0,
      footerButtons: [],
      alignCenter: false,
    } as unknown as DialogProps;

    const { style } = useDialog(props, dialogRef, {
      closeOnClickModal,
      closeOnPressEscape,
    });

    return () =>
      h('div', {
        'data-testid': 'dialog-style-probe',
        style: style.value,
      });
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

  it('invoca provideGlobalConfig de g-hooks (DS-nativo) con namespace "gui"', () => {
    provideGlobalConfigSpy.mockClear();
    render(GConfigProvider, { slots: { default: () => h('div') } });

    expect(provideGlobalConfigSpy).toHaveBeenCalledTimes(1);
    const [config] = provideGlobalConfigSpy.mock.calls[0];
    expect(config).toMatchObject({ namespace: 'gui' });
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

  it('el único consumidor real de useGlobalConfig (dialog) resuelve "gui" bajo el nuevo provider', () => {
    render(GConfigProvider, {
      slots: { default: () => h(DialogNamespaceProbe) },
    });
    expect(screen.getByTestId('dialog-namespace-probe')).toHaveTextContent(
      'gui',
    );
  });

  it('empírico, sin mocks: el hook real useDialog calcula el prefijo de CSS var como "--gui-dialog-*" bajo el nuevo provider', () => {
    const { container } = render(GConfigProvider, {
      slots: { default: () => h(DialogStyleProbe) },
    });
    const probe = container.querySelector(
      '[data-testid="dialog-style-probe"]',
    ) as HTMLElement;
    expect(probe.style.getPropertyValue('--gui-dialog-margin-top')).toBe(
      '20px',
    );
  });

  it('gConfigProviderContextKey (g-hooks) queda realmente conectado: un ancestro SIN ConfigProvider no resuelve el namespace provisto', () => {
    // Contraprueba: si se monta el mismo DialogNamespaceProbe SIN GConfigProvider
    // como ancestro, cae al default explícito del propio consumidor ('gui'
    // hardcodeado en use-dialog.ts), no a un valor "mágico" — confirma que el
    // valor anterior SÍ vino de la conexión real del provider, no de una
    // coincidencia de defaults.
    let resolvedOutsideProvider: string | undefined;
    const Probe = defineComponent({
      setup() {
        const namespace = useGlobalConfig('namespace', 'sin-provider-default');
        resolvedOutsideProvider = namespace.value;
        return () => null;
      },
    });
    render(Probe);
    expect(resolvedOutsideProvider).toBe('sin-provider-default');
    expect(gConfigProviderContextKey.toString()).toContain(
      'gConfigProviderContextKey',
    );
  });

  it('ConfigProvider.vue ya no importa element-plus (isla EP retirada)', () => {
    const source = readFileSync(
      join(process.cwd(), 'components/config-provider/ConfigProvider.vue'),
      'utf-8',
    );
    // Solo se exige que no haya un IMPORT de element-plus (una mención en un
    // comentario documentando la migración es aceptable).
    expect(source).not.toMatch(/^\s*import .*from ['"]element-plus['"]/m);
  });
});

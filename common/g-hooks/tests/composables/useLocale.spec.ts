import { describe, it, expect } from 'vitest';
import { createApp, defineComponent, h, provide, ref } from 'vue';
// Se importa la clave real de element-plus solo para probar que el hook
// DS-nativo NUNCA la reutiliza (mismo patrón de test que useGlobalConfig).
import { localeContextKey } from 'element-plus';
import {
  useLocale,
  gLocaleContextKey,
  buildLocaleContext,
  translate,
} from '../../src/composables/useLocale';
import English from '../../src/locale/lang/en';
import type { Language } from '../../src/locale/lang/en';

describe('useLocale', () => {
  it('retorna { lang, locale, t } resolviendo al inglés por defecto sin proveedor ancestro', () => {
    let result: ReturnType<typeof useLocale> | undefined;

    const Child = defineComponent({
      setup() {
        result = useLocale();
        return () => null;
      },
    });

    createApp(Child).mount(document.createElement('div'));

    expect(result?.lang.value).toBe('en');
    expect(result?.t('el.select.loading')).toBe('Loading');
  });

  it('refleja el locale provisto por un ancestro vía provide(gLocaleContextKey, ...)', () => {
    const customLocale: Language = {
      ...English,
      name: 'fr',
      el: {
        ...English.el,
        select: { ...English.el.select, noData: 'Aucune donnée' },
      },
    };
    let result: ReturnType<typeof useLocale> | undefined;

    const Child = defineComponent({
      setup() {
        result = useLocale();
        return () => null;
      },
    });
    const Parent = defineComponent({
      setup() {
        provide(gLocaleContextKey, ref(customLocale));
        return () => h(Child);
      },
    });

    createApp(Parent).mount(document.createElement('div'));

    expect(result?.lang.value).toBe('fr');
    expect(result?.t('el.select.noData')).toBe('Aucune donnée');
  });

  it('refleja el override provisto explícitamente vía localeOverrides', () => {
    const customLocale: Language = {
      ...English,
      name: 'custom',
      el: {
        ...English.el,
        select: { ...English.el.select, loading: 'Cargando' },
      },
    };
    let result: ReturnType<typeof useLocale> | undefined;

    const Child = defineComponent({
      setup() {
        result = useLocale(ref(customLocale));
        return () => null;
      },
    });

    createApp(Child).mount(document.createElement('div'));

    expect(result?.lang.value).toBe('custom');
    expect(result?.t('el.select.loading')).toBe('Cargando');
  });

  it('t() interpola opciones en los placeholders {clave}', () => {
    let result: ReturnType<typeof useLocale> | undefined;

    const Child = defineComponent({
      setup() {
        result = useLocale();
        return () => null;
      },
    });

    createApp(Child).mount(document.createElement('div'));

    expect(result?.t('el.pagination.total', { total: 42 })).toBe('Total 42');
  });

  it('t() retorna la propia ruta cuando la clave no existe en el diccionario resuelto', () => {
    let result: ReturnType<typeof useLocale> | undefined;

    const Child = defineComponent({
      setup() {
        result = useLocale();
        return () => null;
      },
    });

    createApp(Child).mount(document.createElement('div'));

    expect(result?.t('el.nonexistent.key')).toBe('el.nonexistent.key');
  });

  it('buildLocaleContext/translate exponen el mismo comportamiento cuando se usan directamente', () => {
    expect(translate('el.select.noData', undefined, English)).toBe('No data');

    const context = buildLocaleContext(English);
    expect(context.lang.value).toBe('en');
    // `ref(English)` envuelve el objeto en un proxy reactivo de Vue, así que
    // no es la misma referencia — se compara por valor (igual comportamiento
    // que element-plus, cuyo `buildLocaleContext` hace lo mismo).
    expect(context.locale.value).toEqual(English);
  });

  it('la clave de inyección DS-nativa es distinta a la de element-plus (no debe existir acoplamiento)', () => {
    expect(typeof gLocaleContextKey).toBe('symbol');
    expect(gLocaleContextKey.toString()).toContain('gLocaleContextKey');
    expect(gLocaleContextKey).not.toBe(localeContextKey);
  });
});

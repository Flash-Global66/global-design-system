import { computed, inject, isRef, ref, unref } from 'vue';
import { get } from 'lodash-unified';

import type { InjectionKey, MaybeRef, Ref } from 'vue';
import English from '../locale/lang/en';
import type { Language } from '../locale/lang/en';

export type { Language };

/**
 * Portado byte-exact desde `useLocale` de element-plus 2.9.7
 * (`es/hooks/use-locale/index.mjs`).
 *
 * Hook oculto/transitivo descubierto al leer `select`'s `use-select.ts` en
 * su totalidad (no listado en el brief de esta WU) — mismo patrón de
 * "task-brief drift" que `useTimeout` (WU-6) y `useLockscreen`/`getStyle`
 * (WU-7). Como `select` (WU-8) es, en el orden real de aplicación, el
 * primer consumidor de `useLocale`, esta WU lo posee en `g-hooks` por la
 * regla de "JIT ownership by first topological consumer" del propio
 * diseño — `dropdown` (WU-9), que el diseño asignaba como dueño original,
 * debe re-apuntar en vez de reimplementar cuando llegue.
 *
 * DESVIACIÓN DE RIESGO DOCUMENTADA (a diferencia de `useGlobalConfig`, cuyo
 * símbolo propio es 100% seguro porque la isla `config-provider` hardcodea
 * `namespace="gui"`): la isla también reenvía cualquier prop no declarada
 * (incluido un eventual `locale`) al `<el-config-provider>` real de
 * element-plus vía `v-bind="{ ...$attrs, ...$props }"`, y ese componente
 * SIEMPRE provee la clave real `localeContextKey` de element-plus
 * (incondicionalmente, en su propio `setup()`). Esta clave DS-nativa
 * (`gLocaleContextKey`) es deliberadamente DISTINTA a esa clave — igual que
 * `gConfigProviderContextKey` — así que si algún consumidor externo pasara
 * hoy un `locale` no documentado al config-provider, `select` dejaría de
 * heredarlo tras esta migración y caería al inglés por defecto. `locale` no
 * es un prop público documentado de `GConfigProvider` (`config-type.ts` no
 * lo declara), por lo que este riesgo se considera acotado, pero se deja
 * registrado explícitamente aquí y en el reporte de esta WU.
 */
export type TranslatorOption = Record<string, string | number>;
export type Translator = (path: string, option?: TranslatorOption) => string;

export interface LocaleContext {
  locale: Ref<Language>;
  lang: Ref<string>;
  t: Translator;
}

export const buildTranslator =
  (locale: MaybeRef<Language>): Translator =>
  (path, option) =>
    translate(path, option, unref(locale));

export const translate = (
  path: string,
  option: TranslatorOption | undefined,
  locale: Language,
): string =>
  get(locale, path, path).replace(/\{(\w+)\}/g, (_: string, key: string) => {
    const value = option?.[key];
    return `${value !== undefined ? value : `{${key}}`}`;
  });

export const buildLocaleContext = (
  locale: MaybeRef<Language>,
): LocaleContext => {
  const lang = computed(() => unref(locale).name);
  const localeRef = isRef(locale) ? locale : ref(locale);
  return {
    lang,
    locale: localeRef,
    t: buildTranslator(locale),
  };
};

export const gLocaleContextKey: InjectionKey<Ref<Language | undefined>> =
  Symbol('gLocaleContextKey');

export const useLocale = (
  localeOverrides?: Ref<Language | undefined>,
): LocaleContext => {
  const locale =
    localeOverrides || inject(gLocaleContextKey, ref<Language | undefined>());
  return buildLocaleContext(computed(() => locale.value || English));
};

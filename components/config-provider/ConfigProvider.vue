<template>
  <section>
    <!--
      @slot customize default content
    -->
    <slot />
  </section>
</template>

<script lang="ts">
import { defineComponent, provide, ref } from 'vue';
import { provideGlobalConfig } from '@flash-global66/g-hooks';
import { defaultNamespace, namespaceContextKey } from '@flash-global66/g-utils';

/**
 * Proveedor de configuración global del Design System.
 *
 * LAST DS-side unit de `ep-extraction-v6`: deja de importar element-plus por
 * completo. En lugar de la función pública `provideGlobalConfig` de
 * element-plus, reutiliza el shim DS-nativo equivalente de `g-hooks`
 * (`gConfigProviderContextKey`) para propagar `namespace` a los
 * descendientes DS, y además provee la `namespaceContextKey` propia de
 * g-utils para que los componentes DS resuelvan `useNamespace()`.
 *
 * Consumidor real verificado (Decision 2 del diseño, re-confirmado contra el
 * estado actual de `main` tras las WU1-8): únicamente `dialog`
 * (`use-dialog.ts:60`, vía `useGlobalConfig` de `g-hooks`) lee `namespace`
 * del contexto, con default `'gui'`. `useEmptyValues` (select, time-picker)
 * usa su propia clave `gEmptyValuesContextKey`, que ningún ConfigProvider —
 * ni la isla EP retirada, ni este — provee jamás; permanece inalterado. No
 * existe ningún otro lector oculto del contexto EP.
 *
 * Ya no se reenvían `$attrs` (locale/size/zIndex) al contexto compartido:
 * eran consumidos únicamente por el `provideGlobalConfig` INTERNO de las
 * islas EP, que ya no existen (cero imports de `element-plus` en
 * `components/` tras esta WU). `gConfigProviderContextKey` solo declara
 * `namespace` hoy (ver `GlobalConfigContext` en g-hooks); ningún consumidor
 * real lee ninguna otra clave, así que dejar de reenviarlas es un cambio de
 * comportamiento nulo. `inheritAttrs: false` se conserva porque, igual que
 * antes, los atributos nunca se aplicaron sobre el `<section>` del DOM.
 *
 * El namespace ('gui') se toma del único origen de verdad exportado por
 * g-utils (`defaultNamespace`) en lugar de un literal hardcodeado.
 */
export default defineComponent({
  name: 'ConfigProvider',
  inheritAttrs: false,
  setup() {
    // Config compartida con los descendientes DS que consumen
    // `useGlobalConfig` de g-hooks (hoy, únicamente dialog).
    provideGlobalConfig({ namespace: defaultNamespace });

    // Config propia del Design System: permite que `useNamespace()` de
    // g-utils resuelva 'gui' sin pasar por ninguna clave de element-plus.
    provide(namespaceContextKey, ref(defaultNamespace));
  },
});
</script>

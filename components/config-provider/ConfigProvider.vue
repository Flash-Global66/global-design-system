<template>
  <section>
    <!--
      @slot customize default content
    -->
    <slot />
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, provide, ref } from 'vue';
import { provideGlobalConfig } from 'element-plus';
import { defaultNamespace, namespaceContextKey } from '@flash-global66/g-utils';

/**
 * Proveedor de configuración global del Design System.
 *
 * Deja de renderizar `<el-config-provider>`: en su lugar reutiliza la
 * función pública `provideGlobalConfig` de element-plus para seguir
 * propagando el contexto (`namespace`, `locale`, `size`, `zIndex`, `message`,
 * etc.) a las islas EP que todavía se renderizan dentro del Design System, y
 * además provee la `namespaceContextKey` propia de g-utils para que los
 * componentes DS resuelvan `useNamespace()` sin depender de element-plus.
 *
 * El namespace ('gui') se toma del único origen de verdad exportado por
 * g-utils (`defaultNamespace`) en lugar de un literal hardcodeado.
 */
export default defineComponent({
  name: 'ConfigProvider',
  // Los atributos ($attrs) ya no se aplican sobre ningún elemento del DOM:
  // se consumen de forma programática para construir la config de EP. Se
  // desactiva el fallthrough automático para no volcar atributos inválidos
  // (ej. `size`, `locale`) como atributos HTML del <section> raíz.
  inheritAttrs: false,
  setup(_, { attrs }) {
    // Config compartida con las islas EP: todo lo recibido por fallthrough
    // más el namespace del Design System, igual que hacía antes
    // `<el-config-provider namespace="gui">`.
    provideGlobalConfig(
      computed(() => ({ ...attrs, namespace: defaultNamespace })),
    );

    // Config propia del Design System: permite que `useNamespace()` de
    // g-utils resuelva 'gui' sin pasar por element-plus.
    provide(namespaceContextKey, ref(defaultNamespace));
  },
});
</script>

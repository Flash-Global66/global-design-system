import { computed, onBeforeMount } from 'vue';
import { isClient, useGetDerivedNamespace } from '@flash-global66/g-utils';
import { useIdInjection } from './useId';

/**
 * Portado byte-exact desde `usePopperContainer`/`usePopperContainerId` de
 * element-plus 2.9.7 (`es/hooks/use-popper-container/index.mjs`).
 *
 * Genera un id determinista (namespace + prefijo de `idInjection`) para el
 * contenedor de teleport compartido por los componentes tipo popper
 * (tooltip, popover, dropdown, ...), y asegura que ese contenedor exista una
 * única vez en `document.body`.
 */
export const usePopperContainerId = () => {
  const namespace = useGetDerivedNamespace();
  const idInjection = useIdInjection();
  const id = computed(() => {
    return `${namespace.value}-popper-container-${idInjection.prefix}`;
  });
  const selector = computed(() => `#${id.value}`);
  return {
    id,
    selector,
  };
};

const createContainer = (id: string) => {
  const container = document.createElement('div');
  container.id = id;
  document.body.appendChild(container);
  return container;
};

export const usePopperContainer = () => {
  const { id, selector } = usePopperContainerId();

  onBeforeMount(() => {
    if (!isClient) return;
    // NOTA (fidelidad byte-exact con EP): en modo `'test'` el contenedor
    // SIEMPRE se re-crea, sin comprobar si ya existe uno con el mismo id.
    // Esto es intencional en element-plus para que cada test aísle su propio
    // contenedor de teleport en entornos jsdom sin ciclo de vida completo de
    // la app; en producción, el contenedor se crea una única vez.
    //
    // EP lee `process.env.NODE_ENV`, un global de Node sin tipado en este
    // monorepo basado en Vite (`tsconfig.json` solo incluye los tipos de
    // `vite/client`, no `@types/node`). Usamos `import.meta.env.MODE` en su
    // lugar: Vitest lo resuelve a `'test'` igual que `NODE_ENV`, y Vite lo
    // resuelve a `'production'`/`'development'` en builds reales — mismo
    // comportamiento, ya tipado por `vite/client`.
    if (
      import.meta.env.MODE === 'test' ||
      !document.body.querySelector(selector.value)
    ) {
      createContainer(id.value);
    }
  });

  return {
    id,
    selector,
  };
};

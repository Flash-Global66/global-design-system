# @flash-global66/g-icon-font

Centraliza el uso de Font Awesome en el ecosistema Global66.

## Cómo funciona

Los iconos viven como **data SVG inline** dentro de `src/lib/*.ts`. Cada archivo es código autogenerado: un set de `export const faXxx = { prefix, iconName, icon: [w, h, aliases, unicode, pathData] }` listos para registrarse con `library.add()`.

Esto elimina cualquier dependencia de runtime con `npm.fontawesome.com` (el registro privado de Font Awesome, medido por Package Bandwidth). El catálogo de iconos efectivo del DS está en `src/icon-sets.ts`.

> La licencia perpetua de Font Awesome Pro permite embeber el SVG path data de los iconos en proyectos ilimitados. Ver BMB-3467 para el contexto de la migración.

## Agregar un icono nuevo

Pre-requisitos: tener instalados localmente los paquetes fuente (no son dependencias del repo):

```bash
yarn add -D \
  @fortawesome/pro-solid-svg-icons \
  @fortawesome/pro-regular-svg-icons \
  @fortawesome/pro-light-svg-icons \
  @fortawesome/pro-duotone-svg-icons \
  @fortawesome/free-brands-svg-icons \
  @awesome.me/kit-3edc55bdad
```

Luego:

```bash
yarn icon:add "<weight> <icon-name>"
# ej:
yarn icon:add "solid coffee"
yarn icon:add "regular bell"
yarn icon:add "kit deposit"
```

El comando:
1. Valida que el icono exista en el paquete fuente correspondiente.
2. Agrega el nombre a la categoría correcta dentro de `src/icon-sets.ts`.
3. Re-corre la extracción para regenerar todos los `src/lib/*.ts`.
4. Si la extracción falla, revierte el cambio en `icon-sets.ts`.

**Weights soportados**: `solid`, `regular`, `light`, `duotone`, `brands`, `kit`.

Después de agregar el icono, commitea los cambios (`icon-sets.ts` + el `lib/*.ts` regenerado) y publicá una nueva versión del paquete.

## Regenerar todos los iconos

Si cambiás `icon-sets.ts` manualmente o hay que rehacer la extracción completa:

```bash
yarn icon:extract
```

## Estructura

```
icon-font/
├── scripts/
│   ├── extract-icons.mjs   # script de extracción inline
│   └── add-icon.mjs        # comando icon:add
├── src/
│   ├── Icon.vue            # componente GIconFont
│   ├── icon.ts             # props
│   ├── icon-sets.ts        # catálogo único (fuente de verdad)
│   ├── types.ts
│   └── lib/                # 6 archivos AUTO-GENERADOS — no editar a mano
│       ├── fas-solid-pro.ts
│       ├── far-regular-pro.ts
│       ├── fal-light-pro.ts
│       ├── fad-duotone-pro.ts
│       ├── fab-free.ts
│       └── fa-kit.ts
└── index.ts                # entry point
```

## Uso desde una app consumidora

```vue
<template>
  <GIconFont name="solid coffee" size="lg" />
  <GIconFont name="regular bell" />
  <GIconFont name="kit deposit" />
</template>

<script setup lang="ts">
import { GIconFont } from '@flash-global66/g-icon-font'
</script>
```

El prop `name` recibe siempre el formato `"<weight> <icon-name>"` separados por un espacio.

# Explore — standardize-component-architecture

> Programa de modernización del design system `@flash-global66/global-design-system`.
> Artifact store: hybrid (engram ID 130 + este archivo). Rama piloto: `feat/ds-standardization-pilot`.

## Objetivos del programa
1. Estandarizar la arquitectura de cada componente (basada en `front-b2b/docs/architecture`) + tests.
2. Modernización visual guiada por Strapi DS, trabajando foundations/tokens (b2c + b2b desde Figma).
3. Changelog por componente en la doc, estilo Element Plus (Lerna ya genera CHANGELOG.md por paquete).
4. Eliminar dependencia de element-plus extrayendo utils/hooks/tokens a paquetes propios.

## Estado actual (evidencia)
- Monorepo Lerna (independent + conventionalCommits), Yarn 4, Vue 3.5, Vite 5, Storybook 8.6. 59+ componentes.
- **Sin test runner**: cero `.spec`/`.test`, sin `vitest.config.ts`. `strict_tdd: false` hasta configurar Vitest.
- **Arquitectura inconsistente**:
  - `button`: `src/{button.vue, button.ts, button.type.ts, use-button.ts, use-ripple.ts, button.styles.scss}`
  - `select`: `src/{defaults.ts, select.vue, types/select.types.ts, hooks/use-select.ts, ...}`
- **element-plus** (`peerDependency` en 37 pkgs, ~250 imports): mayoría de `element-plus/es/utils` (`buildProps`, `definePropType`, `useNamespace`, `withInstall`, `composeEventHandlers`, `addUnit`, `ensureArray`, `useId`, `useLocale`) + `es/hooks` (`useZIndex`). `@element-plus/utils` es auto-referencial (DAG) → reimplementar desde cero.
- **EP surface real en button** (más allá de utils): `button.styles.scss` usa `@use 'element-plus/theme-chalk/src/mixins'` + `@include b()/m()/e()/when()`; `button.vue` usa `useNamespace` que genera clases BEM runtime (`gui-button`, `gui-button--md`, `gui-button__content`, `is-disabled`). Namespace `gui` viene de ConfigProvider.
- Tokens dispersos en `common/tailwind/theme.ts`. `common/` (workspace) es el hogar natural de `g-utils`, `g-hooks`, `g-tokens`.

## Estructura canónica propuesta (adaptada a LIBRERÍA publicable)
```
components/button/
├── index.ts            # Barrel PÚBLICO (mandatorio npm): withInstall + re-exports
├── package.json        # peerDeps: vue, g-icon-font, g-form (sin element-plus)
├── vite.config.ts · tsconfig.json · CHANGELOG.md (Lerna)
├── src/
│   ├── Button.vue          # template puro: defineProps/Emits, llama useButton
│   ├── useButton.ts        # lógica reactiva, handlers, allAttrs
│   ├── button.props.ts     # buttonProps, buttonEmits, validateButtonProps
│   ├── button.type.ts      # tipos puros: ButtonVariant, ButtonSize, Ripple
│   ├── button.styles.scss  # BEM mixins propios + Tailwind @apply (sin EP)
│   └── useRipple.ts        # sub-composable
└── tests/
    ├── useButton.spec.ts · useRipple.spec.ts · button.props.spec.ts · Button.spec.ts
```
**Adaptación crítica:** b2b (APP) prohíbe barrels por HMR; el DS (LIBRERÍA) SÍ necesita barrel público por paquete. Se evitan solo barrels internos innecesarios dentro de `src/`.

## Enfoques recomendados
- **(a) Utils sin EP** → g-utils MÍNIMO para el piloto: `buildProps`, `withInstall`, `withNoopInstall`, `SFCWithInstall`, `isBoolean`, `isString`, `debugWarn`. (g-utils/g-hooks completos = Cambio 2.)
- **(b) Vitest** → config única en raíz (patrón front-b2b). Clave: `deps.inline: [/@flash-global66\/.*/]` (evita `ERR_UNSUPPORTED_DIR_IMPORT`).
- **(c) Foundations/tokens** → paquete `g-tokens` (CSS vars + Tailwind preset) en Cambio 3; el piloto reusa los CSS vars semánticos ya existentes del ConfigProvider.
- **(d) Changelog UI** → MDX story con import `?raw` del CHANGELOG.md generado por Lerna; template compartido.

## Slicing en cambios SDD
1. **PILOTO `ds-standardization-pilot`**: g-utils mínimo + Vitest raíz + `button` migrado a estructura canónica + SCSS/BEM propios (sin EP) + 4 specs.
2. **g-utils-g-hooks-complete**: utils/hooks completos (incl. `useZIndex`) + 3-5 componentes.
3. **g-tokens-foundations**: paquete g-tokens, CSS vars + Tailwind preset, Figma 6 nodos (b2c+b2b), migrar ConfigProvider.
4. **mass-component-migration**: resto de 59+ componentes.
5. **changelog-ui-storybook**: template MDX + stories por componente.

## Riesgos
- **R1 (ALTO)**: button → g-form → `useId` de EP (transitivo, aceptado en piloto; se resuelve en Cambio 2).
- **R2 (ALTO)**: reimplementar mixins SCSS de EP con output CSS idéntico.
- **R3 (MEDIO)**: BEM helper propio debe generar exactamente las mismas clases que `useNamespace` (`gui-button`, etc.).
- **R4 (ALTO)**: backward-compat absoluta — `front-b2b` usa `@flash-global66/g-button` en producción (props/emits/clases).
- **R5 (MEDIO)**: Vitest necesita `deps.inline` para paquetes `@flash-global66/*`.
- **R6 (ALTO, post-piloto)**: ConfigProvider encapsula `ElConfigProvider`; extraer tokens lo rediseña.

## Listo para Propose: SÍ (scope del piloto claro y validable).

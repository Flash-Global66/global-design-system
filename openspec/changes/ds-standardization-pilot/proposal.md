# Proposal: ds-standardization-pilot

> Artifact store: hybrid (engram `sdd/ds-standardization-pilot/proposal` + this file). Branch: `feat/ds-standardization-pilot`.

## Intent

**Why**: El design system tiene arquitectura inconsistente entre componentes y ~250 imports directos a `element-plus` (utils + SCSS theme-chalk + `useNamespace`), atando el DS a una dependencia que queremos eliminar. No hay test runner. Antes de migrar 58+ componentes necesitamos VALIDAR el patrón end-to-end en uno solo.

**What**: Piloto sobre `button` que prueba el patrón completo: paquete propio `g-utils` (mínimo), Vitest en raíz, estructura canónica modular, y eliminación de imports directos de element-plus — todo con backward-compatibility absoluta porque `front-b2b` consume `g-button` en PRODUCCIÓN.

## Scope

### In Scope
- Crear `@flash-global66/g-utils` en `common/` (MÍNIMO para button): TS (`buildProps`, `definePropType`, `withInstall`, `withNoopInstall`, `SFCWithInstall`, `isBoolean`, `isString`, `debugWarn`) + helper BEM propio (reemplazo de `useNamespace`) + mixins SCSS `b()/e()/m()/when()` vía package exports.
- Configurar Vitest único en raíz con `deps.inline: [/@flash-global66\/.*/]`, util `withSetup` para composables, script `test` en `package.json` raíz.
- Migrar `components/button` a estructura canónica modular (`src/{Button.vue, composables/, types/, constants/, props/, styles/}` + `tests/` espejando `src/`).
- Quitar de button TODOS los imports DIRECTOS de element-plus (utils + SCSS + `useNamespace`) → reemplazar por g-utils.
- Fixes de packaging en `components/button/package.json`: `sideEffects` (`["**/*.css","**/*.scss"]`), `main`/`module`/`types`, mantener `exports` backward-compat.

### Out of Scope
- **Cambio 2** (`g-utils-g-hooks-complete`): utils/hooks completos (`useZIndex`, `useId`, `useLocale`, `addUnit`, `ensureArray`, `useNamespace` reactivo) + migrar `g-form` (saca EP transitivo) + 3-5 componentes.
- **Cambio 3** (`g-tokens-foundations`): paquete `g-tokens` + foundations Figma (BLOQUEADO por rate limit del seat; desbloquear con export Tokens Studio JSON) + theming por provider + reordenar Storybook estilo Strapi.
- **Cambio 4** (`mass-component-migration`): resto de componentes.
- **Cambio 5** (`changelog-ui-storybook`): UI de changelog (evaluar Changesets vs Lerna).
- Resolver token GitHub hardcodeado en `.npmrc` (tarea aparte ya registrada).
- EP transitivo vía `g-form` (`useFormItem`/`useId`) — ACEPTADO en el piloto.

## Capabilities

### New Capabilities
- `g-utils-package`: paquete propio que exporta utilidades TS + mixins SCSS BEM, reemplazando element-plus para button.
- `component-canonical-architecture`: estructura modular de componente publicable (template puro + composables + props + types + constants + styles + tests).
- `monorepo-testing`: Vitest único en raíz con resolución de paquetes internos y util `withSetup`.

### Modified Capabilities
- None (no hay specs previos; el contrato de comportamiento público de button NO cambia).

## Approach

**g-utils — API TS (firmas esperadas):**
- `buildProps<T>(props: T): T` — normaliza definiciones de props.
- `definePropType<T>(val: any): PropType<T>`.
- `withInstall<T, E>(main: T, extra?: E): SFCWithInstall<T> & E` — añade `.install`.
- `withNoopInstall<T>(comp: T): SFCWithInstall<T>`.
- `SFCWithInstall<T>` — tipo `T & Plugin`.
- `isBoolean(v): v is boolean` · `isString(v): v is string`.
- `debugWarn(scope: string, message: string): void`.
- BEM helper (reemplazo de `useNamespace`): `useNamespace(block, namespaceRef?)` que produzca EXACTAMENTE `gui-button`, `gui-button--{mod}`, `gui-button__{el}`, `is-{state}` (namespace `gui`).

**g-utils — mixins SCSS (`@use '@flash-global66/g-utils/mixins' as *`):**
- `b($block)` → `.gui-#{block}` · `e($el)` → `&__#{el}` · `m($mod)` → `&--#{mod}` · `when($state)` → `&.is-#{state}`. Output CSS IDÉNTICO a `element-plus/theme-chalk`.

**Vitest**: config raíz, `environment: jsdom`, `deps.inline` para `@flash-global66/*`, `withSetup` para montar composables (patrón front-b2b `config-vitest.md` + `withSetup.md`).

**button**: `Button.vue` template puro (`defineProps`/`defineEmits`, delega en `useButton`); `useButton.ts` lógica; `useRipple.ts` subcomposable; `button.props.ts` con `buildProps`; `button.constant.ts` variantes/sizes `as const`; `button.type.ts` tipos; `button.style.scss` (SINGULAR) con mixins g-utils, sin EP.

## Backward-Compatibility Contract (CRÍTICO)

`front-b2b` usa `@flash-global66/g-button` en producción. DEBEN permanecer idénticos:
- **Clases CSS**: `gui-button`, `gui-button--{variant}`, `gui-button--{size}`, `gui-button__content`, `gui-button__icon-left`, `is-disabled`, `is-loading`, etc. (namespace `gui`, hoy `useNamespace('button', ref('gui'))`).
- **API pública**: props, emits, slots y export `GButton` SIN cambios.
- **Export SCSS**: la clave pública sigue siendo `"./styles.scss"` aunque el archivo interno se renombre → `exports["./styles.scss"] = "./src/styles/button.style.scss"`.
- **dist**: el output buildeado resuelve igual para consumidores.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `common/g-utils/` | New | Paquete `@flash-global66/g-utils` (TS + mixins SCSS) |
| `vitest.config.*` + raíz `package.json` | New/Modified | Config Vitest única + script `test` + `withSetup` |
| `components/button/src/` | Modified | Reestructura a layout canónico modular |
| `components/button/tests/` | New | 4 specs (useButton, useRipple, props, Button render) |
| `components/button/package.json` | Modified | `sideEffects`, `main/module/types`, exports backward-compat |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| R2: mixins SCSS propios no producen CSS idéntico a EP | High | Snapshot/diff del CSS buildeado vs actual antes de mergear |
| R3: BEM helper genera clases distintas a `useNamespace` | Med | Test unitario que asserta cada clase exacta (`gui-button--md`, `is-loading`) |
| R4: ruptura de backward-compat con front-b2b | High | Criterios de aceptación medibles + verificación de consumo sin cambios |
| R5: Vitest no resuelve `@flash-global66/*` | Med | `deps.inline: [/@flash-global66\/.*/]` desde el inicio |
| R1: EP transitivo vía g-form | Med (aceptado) | Documentado como out-of-scope; se resuelve en Cambio 2 |
| Token GitHub hardcodeado en `.npmrc` | Known | Fuera de scope; tarea de seguridad aparte |

## Rollback Plan

Trabajo aislado en `feat/ds-standardization-pilot` (creada desde `main`). Si falla: descartar la rama sin mergear. `g-utils` es paquete nuevo (no afecta consumidores hasta publicar). `button` solo se publica tras validar el contrato de backward-compat; revertir = no publicar la nueva versión, los consumidores siguen en la actual.

## Dependencies

- Patrón Vitest de `front-b2b/docs/testing/config-vitest.md` + `withSetup.md`.
- `element-plus/theme-chalk` como REFERENCIA (no copiar) para reimplementar mixins.

## Success Criteria

- [ ] Las clases CSS del build de button son IDÉNTICAS a las actuales (diff vacío).
- [ ] `button` NO importa element-plus directamente (0 imports de `element-plus/*` en utils + SCSS + namespace).
- [ ] Los 4 specs (useButton, useRipple, props validators, Button render) pasan vía `yarn test`.
- [ ] `@flash-global66/g-utils` exporta TS + mixins SCSS resolubles vía package exports.
- [ ] `front-b2b` puede consumir la nueva versión de g-button SIN cambios de código.
- [ ] `button/package.json` tiene `sideEffects`, `main/module/types` y mantiene `exports["./styles.scss"]`.

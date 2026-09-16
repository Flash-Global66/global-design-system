# Design: ds-standardization-pilot

> Artifact store: hybrid. Refactor PURO sobre `button` + paquete `g-utils` mínimo. Backward-compat absoluta (front-b2b en producción).

## Technical Approach

Validar el patrón canónico end-to-end en `button`: crear `@flash-global66/g-utils` (TS source-only + mixins SCSS), reimplementar `useNamespace` y los mixins BEM de element-plus con **output idéntico**, reestructurar `button` a layout modular, y montar Vitest único en raíz. La paridad CSS/clases se verifica por diff y por tests de aserción de clases exactas.

### Descubrimiento crítico (load-bearing)

`button.styles.scss` hace `@use 'element-plus/theme-chalk/src/mixins/mixins'` que carga `config` con `$namespace: 'el'` por DEFAULT. El namespace `gui` NO está en el SCSS del botón: lo inyecta `components/config-provider/config.styles.scss` con `@forward '.../mixins/config' with ($namespace: 'gui')`, importado PRIMERO en `assets/scss/index.scss` y en cada consumidor. En el sistema de módulos Sass, ese `@forward ... with` configura el módulo `config` para TODA la compilación, así el `b()` del botón emite `.gui-button`. **g-utils debe replicar exactamente este mecanismo de configuración** (un módulo `config` reconfigurable vía `@forward with`), o el output cambia a `.el-button` y rompe a front-b2b. El JS (`useNamespace('button', ref('gui'))`) es independiente y ya emite `gui-*`.

## Architecture Decisions

### Decision: g-utils source-only (no buildable)

| Opción                                                       | Tradeoff                                                     | Decisión |
| ------------------------------------------------------------ | ------------------------------------------------------------ | -------- |
| Buildable (dist + vite)                                      | SCSS no se compila bien a dist; añade tooling                | ❌       |
| Source-only (`buildable:false`, expone `.ts`/`.scss` crudos) | Consumidores compilan TS/SCSS; Vitest necesita `deps.inline` | ✅       |

**Rationale**: los mixins SCSS deben distribuirse como fuente (`@use` los necesita sin compilar). front-b2b ya usa `deps.inline:[/@flash-global66\/.*/]` y compila `.ts` de estos paquetes. Consistente con el ecosistema. `package.json`: `buildable:false`, sin `main` JS compilado; `exports` apunta a `.ts`/`.scss` source.

### Decision: BEM SCSS — reconfigurable config module

| Opción                                                                             | Tradeoff                                                       | Decisión |
| ---------------------------------------------------------------------------------- | -------------------------------------------------------------- | -------- |
| Copiar mixins con `$namespace:'gui'` hardcoded                                     | Rompe el patrón `@forward with` que ya usan 50 componentes     | ❌       |
| Replicar el patrón EP: `config` con `!default` + `b/e/m/when` que leen de `config` | Más fiel; consumidores siguen configurando vía config-provider | ✅       |

**Rationale**: backward-compat exige que `config-provider`/index.scss sigan controlando el namespace. g-utils expone `config.scss` (mismos defaults: `$namespace:'el'!default`, `$common-separator`, `$element-separator:'__'`, `$modifier-separator:'--'`, `$state-prefix:'is-'`) y mixins `b/e/m/when` con la MISMA lógica `@at-root`/`hitAllSpecialNestRule` de `function.scss`. Output CSS byte-idéntico.

### Decision: BEM JS helper `useNamespace`

**Choice**: reimplementar `useNamespace(block, namespaceRef?)` retornando `b/e/m/is/...` que produzcan `gui-button`, `gui-button--{mod}`, `gui-button__{el}`, `is-{state}`. Firma compatible con el uso actual (`ns.b()`, `ns.m('variant-primary')`, `ns.e('content')`, `ns.is('loading', bool)`).
**Alternatives**: seguir importando de EP (no elimina la dependencia — objetivo del piloto).
**Rationale**: 0 imports directos de element-plus. La paridad se asegura con test que asserta cada clase exacta.

### Decision: Vitest único en raíz, @vue/test-utils para render

| Opción render        | Tradeoff                                                    | Decisión  |
| -------------------- | ----------------------------------------------------------- | --------- |
| @testing-library/vue | Más semántico pero no instalado aquí                        | ❌ piloto |
| @vue/test-utils      | Asserta clases/atributos directo (lo que el contrato exige) | ✅        |

**Rationale**: el contrato de backward-compat es sobre clases CSS exactas; `@vue/test-utils` (`mount` + `classes()`) lo verifica directo. Config raíz `mergeConfig(vite.config.base, ...)`, `environment:jsdom`, `deps.inline:[/@flash-global66\/.*/]`, `setupFiles`, `withSetup` en `tests/utils/`. Patrón de front-b2b.

## Data Flow

```
Button.vue (template puro)
  ├─ defineProps(buttonProps) ── props/button.props.ts ── buildProps (g-utils)
  ├─ validateButtonProps ────── isString/isBoolean/debugWarn (g-utils)
  ├─ useButton(props, emit) ─── composables/  ─┬─ useRipple()
  │                                            └─ useFormItem (g-form, EP transitivo aceptado)
  └─ ns = useNamespace('button','gui') (g-utils) ─→ clases gui-*

styles/button.style.scss ─ @use '@flash-global66/g-utils/mixins' ─→ b/e/m/when
config-provider/index.scss ─ @forward config with($namespace:'gui') ─→ namespace global
index.ts ─ withInstall (g-utils) ─→ GButton
```

## File Changes

| File                                                                                                         | Action | Description                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------ | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `common/g-utils/package.json`                                                                                | Create | `@flash-global66/g-utils`, `buildable:false`, `exports`: `.`→`./index.ts`, `./mixins`→`./styles/mixins.scss`, `./config`→`./styles/config.scss` |
| `common/g-utils/index.ts`                                                                                    | Create | Barrel TS: re-exporta utils + namespace                                                                                                         |
| `common/g-utils/src/props.ts`                                                                                | Create | `buildProps`, `definePropType`                                                                                                                  |
| `common/g-utils/src/install.ts`                                                                              | Create | `withInstall`, `withNoopInstall`, `SFCWithInstall`                                                                                              |
| `common/g-utils/src/types.ts`                                                                                | Create | `isBoolean`, `isString` type guards                                                                                                             |
| `common/g-utils/src/error.ts`                                                                                | Create | `debugWarn(scope, message)`                                                                                                                     |
| `common/g-utils/src/use-namespace.ts`                                                                        | Create | BEM JS helper (paridad con EP)                                                                                                                  |
| `common/g-utils/styles/config.scss`                                                                          | Create | `$namespace:'el'!default` + separators (idénticos a EP)                                                                                         |
| `common/g-utils/styles/function.scss`                                                                        | Create | `hitAllSpecialNestRule`, `bem`, helpers (idénticos a EP)                                                                                        |
| `common/g-utils/styles/mixins.scss`                                                                          | Create | `b/e/m/when` (lógica `@at-root` idéntica a EP)                                                                                                  |
| `vitest.config.ts` (raíz)                                                                                    | Create | jsdom, `deps.inline:[/@flash-global66\/.*/]`, setupFiles                                                                                        |
| `package.json` (raíz)                                                                                        | Modify | script `test`, devDeps `vitest`, `@vue/test-utils`, `jsdom`                                                                                     |
| `tests/utils/with-setup.ts` (raíz)                                                                           | Create | util `withSetup` para composables                                                                                                               |
| `components/button/src/Button.vue`                                                                           | Create | ← `src/button.vue`, importa de g-utils, sin EP                                                                                                  |
| `components/button/src/composables/useButton.ts`                                                             | Create | ← `src/use-button.ts`                                                                                                                           |
| `components/button/src/composables/useRipple.ts`                                                             | Create | ← `src/use-ripple.ts`                                                                                                                           |
| `components/button/src/props/button.props.ts`                                                                | Create | ← parte de `src/button.ts` (props/emits/validator, `buildProps` g-utils)                                                                        |
| `components/button/src/constants/button.constant.ts`                                                         | Create | variantes/sizes `as const` (extraído de `button.ts`)                                                                                            |
| `components/button/src/types/button.type.ts`                                                                 | Create | ← `src/button.type.ts`                                                                                                                          |
| `components/button/src/styles/button.style.scss`                                                             | Create | ← `src/button.styles.scss`, `@use g-utils/mixins`, sin EP                                                                                       |
| `components/button/index.ts`                                                                                 | Modify | `withInstall` desde g-utils; paths nuevos                                                                                                       |
| `components/button/package.json`                                                                             | Modify | `sideEffects:["**/*.css","**/*.scss"]`, `main/module/types`, `exports["./styles.scss"]="./src/styles/button.style.scss"`                        |
| `components/button/src/{button.vue,use-button.ts,use-ripple.ts,button.ts,button.type.ts,button.styles.scss}` | Delete | tras migrar                                                                                                                                     |
| `components/button/tests/composables/useButton.spec.ts`                                                      | Create | lógica click/href/disabled/loading                                                                                                              |
| `components/button/tests/composables/useRipple.spec.ts`                                                      | Create | añadir/remover ripple (fake timers)                                                                                                             |
| `components/button/tests/props/button.props.spec.ts`                                                         | Create | validators → debugWarn                                                                                                                          |
| `components/button/tests/Button.spec.ts`                                                                     | Create | render: clases `gui-button*`, `is-*` exactas                                                                                                    |
| `docs/architecture/component-canonical.md` (o evolucionar `stories/concepts/*.mdx`)                          | Create | arquitectura canónica raíz                                                                                                                      |
| `.ai/skills/create-component/SKILL.md`                                                                       | Create | skill "crear componente"                                                                                                                        |
| `.ai/skills/document-stories/SKILL.md`                                                                       | Create | skill "documentar stories"                                                                                                                      |

## Interfaces / Contracts

```ts
// g-utils API
export function buildProps<T>(props: T): T;
export function definePropType<T>(val: any): PropType<T>;
export type SFCWithInstall<T> = T & Plugin;
export function withInstall<T, E>(main: T, extra?: E): SFCWithInstall<T> & E;
export function withNoopInstall<T>(comp: T): SFCWithInstall<T>;
export function isBoolean(v: unknown): v is boolean;
export function isString(v: unknown): v is string;
export function debugWarn(scope: string, message: string): void;
export function useNamespace(
  block: string,
  namespaceOverride?: Ref<string>,
): {
  namespace: ComputedRef<string>;
  b(blockSuffix?: string): string; // gui-button
  e(el?: string): string; // gui-button__content
  m(mod?: string): string; // gui-button--variant-primary
  is(name: string, state?: boolean): string; // is-loading | ''
};
```

```scss
// @use '@flash-global66/g-utils/mixins' as *;
// b/e/m/when con misma firma y output que element-plus/theme-chalk
@include b('button') {
  @include m('md') {
  }
  @include e('content') {
  }
  @include when(loading) {
  }
}
```

**Backward-compat invariantes** (NO cambian): clases `gui-button`, `gui-button--{variant}`, `gui-button--{sm|md}`, `gui-button__{content,title,icon-left,icon-right,loader,dot,ripple}`, `is-{disabled,loading,full,href}`; props/emits/slots; export `GButton`; `exports["./styles.scss"]`.

## Testing Strategy

| Layer             | What                                                                                             | Approach                                                                                                |
| ----------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
| Unit (composable) | `useButton`: click bloqueado si disabled/loading, `componentId` a/button, `allAttrs`, reset→form | `withSetup` + `mount` stub; spies en emit                                                               |
| Unit (composable) | `useRipple`: push/remove, no-op si disabled                                                      | `withSetup` + `vi.useFakeTimers`                                                                        |
| Unit (props)      | `validateButtonProps`: variant/size inválidos → `debugWarn`                                      | spy sobre `debugWarn` de g-utils                                                                        |
| Component         | `Button.vue`: clases exactas por prop, slots, render a/button                                    | `@vue/test-utils` `mount` + `.classes()`                                                                |
| CSS parity        | output SCSS viejo vs nuevo = diff vacío                                                          | compilar `button.style.scss` (nuevo) y `button.styles.scss` (viejo) con sass CLI; `diff` debe ser vacío |
| BEM JS parity     | cada clase de `useNamespace` propio == EP                                                        | test que asserta strings exactos (`gui-button--md`, `is-loading`)                                       |

## Migration / Rollout

Refactor en `feat/ds-standardization-pilot`. g-utils nuevo (sin consumidores hasta publicar). `button` se publica solo tras: (1) diff CSS vacío, (2) 0 imports de `element-plus/*` en utils+SCSS+namespace, (3) 4 specs verdes, (4) verificación de consumo en front-b2b sin cambios. Rollback = no publicar; consumidores siguen en versión actual.

## Open Questions

- [ ] ¿`config-provider/config.styles.scss` debe migrar su `@forward` a `g-utils/config` ahora, o seguir apuntando a EP en el piloto? (Recomendado: en el piloto solo `button` usa g-utils/mixins; config-provider se migra en Cambio 2 para no tocar 50 componentes.)
- [ ] ¿`button.constant.ts` debe ser fuente de verdad de `allowedVariants/allowedSizes` que hoy están hardcoded en el validator? (Recomendado: sí, `as const` + derivar el type.)
- [ ] Verificación final de front-b2b requiere `yarn link` o publish a un tag pre-release; definir mecánica con el equipo.

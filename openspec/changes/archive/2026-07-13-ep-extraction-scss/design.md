# Design: ep-extraction-scss (SCSS foundation, config-provider anchor)

## Technical Approach

Port element-plus theme-chalk's token/namespace foundation into `common/g-utils/styles/` **byte-exact**, mirroring EP's `@use`/`@forward` module graph so `$namespace` and `$colors` stay singleton-configurable from ONE place each. Rebuild `config-provider` (SCSS bootstrap + JS provider) as the vertical slice that proves the pipeline end-to-end via a new CSS parity harness, then fan out. EP stays a peer dep; the JS replacement keeps EP's runtime config-propagation (7 islands still render EP components) while no longer rendering `ElConfigProvider`.

## Load-bearing findings (drive the design)

1. **Runtime namespace for EP islands comes from the config-provider ancestor.** `Badge.vue` renders bare `<el-badge>` (no `namespace` prop). EP's `useNamespace` reads EP's private `namespaceContextKey` (`Symbol("namespaceContextKey")`, default `el`). Today `<el-config-provider namespace="gui">` → EP `provideGlobalConfig` provides it as `gui`. Remove it naively and the 7 EP-rendered islands revert to `.el-*` → visual break. DS components read a DIFFERENT key (`Symbol.for('namespaceContextKey')`) and already default to `gui`, so config-provider's DS-provide is a strengthening, not the load-bearing path.
2. **Byte-exact parity of `config.styles.scss` includes transition + icon.** Its `@use base.scss` transitively emits `var.scss` (`:root` block) + `common/transition.scss` + `icon.scss`. Byte-exact ⇒ all three must be ported (icon.scss=46 lines, transition=123 lines — both portable).
3. **Removing the EP `@forward mixins/config with ($namespace:'gui')` may de-namespace not-yet-migrated legacy files.** That forward is what makes the ~48 legacy files (which `@use` EP `mixins/mixins` directly) resolve `.gui-*` — IF the consumer loads config.styles.scss first in one compile. This is the unverified cross-repo assumption and gates sequencing.

## Architecture Decisions

| Decision                            | Choice                                                                                                                                                                                                                                                        | Rejected                                                                      | Rationale                                                                                                                                                                         |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| g-utils layout                      | Flat files in `styles/` with non-colliding names (`utils`, `var-mixins`, `tokens`, `root-vars`, `transition`, `icon`, `base`); rewrite EP relative imports to flat                                                                                            | Mirror EP `mixins/`+`common/` subdirs                                         | Repo already flattens (`config/function/mixins` at root); avoids `var.scss` triple-collision; existing `./mixins` export unchanged                                                |
| function/mixins reuse               | Extend existing `function.scss` with the 4 CSS-var funcs (`joinVarName/getCssVarName/getCssVar/getCssVarWithDefault`) → becomes byte-exact EP `function.scss`; add `@forward 'function'` to `mixins.scss`                                                     | New parallel files                                                            | DS files are strict subsets of EP's; extension is additive, keeps one canonical BEM infra, exposes `getCssVar` to transition/icon exactly as EP does                              |
| Namespace source                    | Drop `@forward config with ($namespace:'gui')`; rely on `config.scss` `$namespace:'gui' !default`                                                                                                                                                             | Re-declare in bootstrap                                                       | Single-source per spec; default flows through the singleton regardless of load order                                                                                              |
| Brand colors source                 | `config.styles.scss` `@forward '@flash-global66/g-utils/tokens' with ($colors:(brand))` then `@use '.../base'`                                                                                                                                                | Hardcode in tokens.scss                                                       | Keeps `tokens.scss` EP-verbatim (`$colors:() !default`); brand injected once at bootstrap; mirrors EP exactly                                                                     |
| JS provider                         | DS-native SFC renders `<section><slot/></section>`; setup calls EP's PUBLIC `provideGlobalConfig({...props, namespace})` AND `provide(dsNamespaceContextKey, ref(ns))`; `ns` from an exported g-utils constant                                                | Re-implement provideGlobalConfig (needs EP private keys); provide only DS key | Preserves EP islands' `.gui-*` + locale/zIndex/size/message byte-for-byte while NOT rendering `ElConfigProvider` (spec-compliant); honest coupling that dies when islands migrate |
| Namespace JS single-source          | Export `defaultNamespace` from `g-utils` (`useNamespace.ts`); ConfigProvider imports it — no `"gui"` literal                                                                                                                                                  | Keep template literal                                                         | Spec: sourced from g-utils/config, not hardcoded                                                                                                                                  |
| Parity gate                         | Node script `scripts/scss-parity.mjs` using dart-sass single `compile()` + committed golden baselines + unified diff, `exit(1)` on mismatch; `yarn scss:parity`                                                                                               | postcss/cssnano normalize; CI stylelint                                       | No CI gate exists; dart-sass `expanded` is deterministic → minimal normalization (LF, strip sourcemap); byte-exact and local-runnable on yarn4                                    |
| Sequencing of legacy de-namespacing | Cross-repo verification is a hard Slice-1 gate. If consumers configure EP namespace independently → proceed. If they depend on config.styles.scss's EP forward → keep a temporary EP-namespace bridge (separate transitional partial) until fan-out completes | Big-bang repoint of 48 files                                                  | Avoids intermediate `.el-*` breakage; respects 400-line budget; branch chosen by evidence, not assumption                                                                         |

## Module graph (ported, DS-owned)

    config.styles.scss
      @forward g-utils/tokens with ($colors: brand)
      @use     g-utils/base
                 └─ root-vars  (:root emitter; @use tokens, var-mixins, mixins)
                 └─ transition (@use config, mixins)
                 └─ icon       (@use mixins, tokens)
    tokens(common/var)  ← function          var-mixins(_var) ← config, function, tokens
    mixins ← config, @forward function      function ← config   utils (standalone)

Singleton: `config.scss` (`$namespace`) and `tokens.scss` (`$colors`) each load once per compile; every transitive `@use` reuses the configured instance — identical to EP.

## File Changes

| File                                                         | Action | Description                                                                                   |
| ------------------------------------------------------------ | ------ | --------------------------------------------------------------------------------------------- |
| `common/g-utils/styles/utils.scss`                           | Create | EP `mixins/utils.scss` verbatim                                                               |
| `common/g-utils/styles/tokens.scss`                          | Create | EP `common/var.scss` (1656 lines) verbatim; import→`function`                                 |
| `common/g-utils/styles/var-mixins.scss`                      | Create | EP `mixins/_var.scss`; imports→`config`,`function`,`tokens`                                   |
| `common/g-utils/styles/root-vars.scss`                       | Create | EP top-level `var.scss` `:root` emitter; imports→flat                                         |
| `common/g-utils/styles/transition.scss`                      | Create | EP `common/transition.scss`; imports→`config`,`mixins`                                        |
| `common/g-utils/styles/icon.scss`                            | Create | EP `icon.scss`; imports→`mixins`,`tokens`                                                     |
| `common/g-utils/styles/base.scss`                            | Create | `@use root-vars; @use transition; @use icon;`                                                 |
| `common/g-utils/styles/function.scss`                        | Modify | Append 4 CSS-var functions → byte-exact EP function                                           |
| `common/g-utils/styles/mixins.scss`                          | Modify | Add `@forward 'function';` (expose `getCssVar`)                                               |
| `common/g-utils/package.json`                                | Modify | Add exports `./tokens`, `./base` (+ `./function`,`./utils`,`./transition`,`./icon` for reuse) |
| `common/g-utils/src/composables/useNamespace.ts`             | Modify | Export `defaultNamespace`                                                                     |
| `components/config-provider/config.styles.scss`              | Modify | DS bootstrap: forward `tokens with($colors)`, `@use base`; zero EP                            |
| `components/config-provider/ConfigProvider.vue`              | Modify | DS-native provider (see decision); no `ElConfigProvider` render                               |
| `components/badge/badge.styles.scss`                         | Modify | Replace literal `.gui-badge__content` with `bem`/mixin (keep deferred `@use` EP badge.scss)   |
| `scripts/scss-parity.mjs` + `scripts/scss-parity/baseline/*` | Create | Parity harness + golden baselines                                                             |
| root `package.json`                                          | Modify | `scss:parity` script                                                                          |

## Interfaces / Contracts

`ConfigProvider.vue` (no `any`): setup receives `configProviderProps`-shaped props via fallthrough; `const ns = ref(defaultNamespace)`; `provideGlobalConfig(reactive merge of props with namespace:ns.value)`; `provide(namespaceContextKey, ns)`. Public props/emits/slots identical (attrs fallthrough preserved). Comments/JSDoc in neutral Spanish.

## Testing Strategy

| Layer      | What                                                                    | How                                                                                              |
| ---------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Parity     | `config.styles.scss` + each repointed file byte-identical               | `scripts/scss-parity.mjs` vs golden baseline, per slice                                          |
| Unit       | ConfigProvider provides `gui` to DS + EP descendants; props fallthrough | Vitest mount, `useNamespace()` descendant resolves `gui`; assert EP `provideGlobalConfig` called |
| Unit       | badge selector via mixin                                                | compile snapshot `.gui-badge__content` present                                                   |
| Cross-repo | legacy files resolve `.gui-*` in consumers                              | inspect consumer Sass entry / built CSS artifact (documented note)                               |

## Migration / Rollout (parity-gated, chained PRs, work-unit commits)

- **PR1a** — g-utils SCSS module port (pure additions) + `function`/`mixins` extension + exports + parity harness + baselines. Large but mechanical copy.
- **PR1b** — `config.styles.scss` rebuild + `ConfigProvider.vue` JS replacement + `defaultNamespace` export + badge selector fix. Small behavior slice; the risky change isolated.
- **Slice-1 gate** — cross-repo namespace verification; pick proceed vs bridge branch.
- **PR2+** — repoint ~48 shared-mixin files in component clusters (repoint table below), each byte-diffed.
- **Later PRs** — non-entangled full-component files, byte-diffed.
- **Deferred** — 6 entangled islands' full-component sheets → their JS-island migration.

Repoint rule: `element-plus/theme-chalk/src/mixins/{mixins,function,utils}`→`@flash-global66/g-utils/{mixins,function,utils}`; `mixins/var|_var`→`/var-mixins`; `common/var`→`/tokens`; `common/transition`→`/transition`.

Review Workload: PR1a is a large mechanical copy (tokens.scss ~1656 lines additions) ⇒ split from PR1b; 400-line budget risk High overall ⇒ chained PRs required.

## Open Questions

- [ ] Cross-repo (front-b2b/front-admin) Sass aggregation — does removing config.styles.scss's EP `@forward` de-namespace legacy files? (Slice-1 gate; sibling repos not present locally, verify via consumer build/CSS artifact.)
- [ ] Confirm `provideGlobalConfig` is exported from `element-plus` package root at apply time (public API; verify import path).
- [ ] `useGlobalConfig.ts` comment calls config-provider a "permanent EP island" — update comment to reflect DS-native provide (non-blocking).

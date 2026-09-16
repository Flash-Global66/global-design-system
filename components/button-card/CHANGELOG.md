# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.1.0](https://github.com/Flash-Global66/global-design-system/compare/@flash-global66/g-button-card@0.0.7...@flash-global66/g-button-card@0.1.0) (2026-06-05)


* [BMB-3500] feat(button-card)!: cambiar icon prop de array a string "weight name" (#227) ([0efc7f8](https://github.com/Flash-Global66/global-design-system/commit/0efc7f8b4e3fda2a73df7d955ee383fd9dfe9207)), closes [#227](https://github.com/Flash-Global66/global-design-system/issues/227)


### BREAKING CHANGES

* GButtonCard.icon ahora acepta un string con formato "weight name"
(ej. "regular copy") en lugar del array [prefix, name]. Los consumidores deben
migrar sus callsites:
  Antes:  <GButtonCard :icon="['far', 'copy']" />
  Ahora:  <GButtonCard icon="regular copy" />

Weights válidos: solid, regular, light, duotone, brands, kit.

Adicionalmente:
- Tipa el prop con IconString (literal type generado del catálogo del DS)
- Agrega selector de icon en el Storybook (control: select con todas las opciones)
- Remueve el loader local libs/vue-fontawesome/ (sin uso post-migración)
- Limpia .storybook/preview.js (sin bootstrap de FontAwesome global)
- Agrega g-icon-font como peerDependency del button-card

Co-authored-by: Brayan Basallo <brayan.basallo@global66.com>





## 0.0.7 (2025-03-28)


### Bug Fixes

* update changes ([d1884de](https://github.com/Flash-Global66/global-design-system/commit/d1884de11e4e9522c2d6912d932122a75aabf9e7))





## 0.0.6 (2025-03-28)


### Bug Fixes

* update changes ([d1884de](https://github.com/Flash-Global66/global-design-system/commit/d1884de11e4e9522c2d6912d932122a75aabf9e7))





## 0.0.5 (2025-03-28)


### Bug Fixes

* update changes ([d1884de](https://github.com/Flash-Global66/global-design-system/commit/d1884de11e4e9522c2d6912d932122a75aabf9e7))





## 0.0.4 (2025-03-28)


### Bug Fixes

* update changes ([d1884de](https://github.com/Flash-Global66/global-design-system/commit/d1884de11e4e9522c2d6912d932122a75aabf9e7))





## [0.0.3](https://github.com/Flash-Global66/global-design-system/compare/@flash-global66/g-button-card@0.0.2...@flash-global66/g-button-card@0.0.3) (2025-03-28)


### Bug Fixes

* update changes ([d1884de](https://github.com/Flash-Global66/global-design-system/commit/d1884de11e4e9522c2d6912d932122a75aabf9e7))





## 0.0.2 (2025-03-28)

**Note:** Version bump only for package @flash-global66/g-button-card

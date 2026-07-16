module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/typescript/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'linebreak-style': ['error', 'unix'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // Los componentes del DS son intencionalmente single-word (Button, Input, Select…)
    'vue/multi-word-component-names': 'off',
    // Los utils internos de librería usan `any` para manipulación genérica de tipos
    '@typescript-eslint/no-explicit-any': 'off',
  },
  overrides: [
    {
      // EP Extraction guard: packages already migrated off element-plus must
      // never re-introduce a direct dependency on it. Covers nested-layout
      // implementations (components/*/src/**, common/*/src/**) AND flat-layout
      // package roots + barrels (components/*/*.ts, e.g. overlay/overlay.ts,
      // overlay/index.ts; components/*/*.vue, e.g. badge/Badge.vue,
      // config-provider/ConfigProvider.vue). The flat-layout globs are
      // required because packages like `overlay`, `badge`, and
      // `config-provider` ship implementation at the package root, not
      // under src/.
      files: [
        'components/*/src/**',
        'common/*/src/**',
        'components/*/*.ts',
        'components/*/*.vue',
      ],
      excludedFiles: [
        // Islands: intentionally wrap/re-export a real element-plus component.
        // (empty — config-provider was the last entry; ep-extraction-v6 WU9
        // migrated it off element-plus, so no package needs this exclusion
        // anymore. Left as an empty array rather than removed to preserve the
        // override block shape for any future entry.)
      ],
      rules: {
        'no-restricted-imports': [
          'error',
          {
            paths: [
              {
                name: 'element-plus',
                message:
                  'Import from @flash-global66/g-utils or @flash-global66/g-hooks instead of element-plus.',
              },
            ],
            patterns: [
              {
                group: ['element-plus/*'],
                message:
                  'Import from @flash-global66/g-utils or @flash-global66/g-hooks instead of element-plus.',
              },
            ],
          },
        ],
      },
    },
  ],
}

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
      // overlay/index.ts). The flat-layout glob is required because packages
      // like `overlay` ship implementation at the package root, not under src/.
      files: ['components/*/src/**', 'common/*/src/**', 'components/*/*.ts'],
      excludedFiles: [
        // Islands: intentionally wrap/re-export a real element-plus component.
        'components/badge/**',
        'components/menu/**',
        'components/config-provider/**',
        'components/popover/**',
        'components/radio-group/**',
        'components/form-item/**',
        'components/skeleton/**',
        'components/infinite-scroll/**',
        // Deferred: need hooks/utilities outside this change's scope
        // (useAriaProps, usePopper*, useSizeProp, useFormSize,
        // useSameTarget, useEscapeKeydown, iconPropType) or embed a real
        // element-plus component. (useLocale ported in WU-8/select —
        // dropdown/date-picker/time-picker/table should re-point to
        // @flash-global66/g-hooks instead of re-implementing.)
        'components/inline/**',
        'components/input-tag/**',
        'components/toast/**',
        'components/time-picker/**',
        'components/table/**',
        'components/pagination/**',
        'components/input-number/**',
        'components/dropdown/**',
        'components/date-picker/**',
        'components/collapse/**',
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

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
      // never re-introduce a direct dependency on it, in either their src/
      // implementation or their public barrel (index.ts).
      files: ['components/*/src/**', 'common/*/src/**', 'components/*/index.ts'],
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
        // (useAriaProps, useLocale, usePopper*, useSizeProp, useFormSize,
        // useSameTarget, useEscapeKeydown, iconPropType) or embed a real
        // element-plus component.
        'components/inline/**',
        'components/input-tag/**',
        'components/tooltip/**',
        'components/toast/**',
        'components/time-picker/**',
        'components/table/**',
        'components/slot/**',
        'components/select/**',
        'components/scrollbar/**',
        'components/popper/**',
        'components/pagination/**',
        'components/input-number/**',
        'components/dropdown/**',
        'components/dialog/**',
        'components/date-picker/**',
        'components/collapse/**',
        'components/overlay/**',
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

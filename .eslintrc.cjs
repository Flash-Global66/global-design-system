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
}

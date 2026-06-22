module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/typescript/recommended',
    'prettier', // eslint-config-prettier — desactiva reglas de ESLint que conflictúan con Prettier
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'linebreak-style': ['error', 'unix'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
}

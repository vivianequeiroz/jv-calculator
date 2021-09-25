module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly'
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'prettier',
    'prettier/vue',
  ],
  ignorePatterns: ['/node_modules'],
  parserOptions: {
    ecmaVersion: 2021
  },
  plugins: [],
  rules: {}
};
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    "vue/match-component-file-name": ["error", {
      "extensions": ["vue"],
      "shouldMatchCase": true
    }]
  },
  globals: {
    "NodeJS": true
  }
}

/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    "prettier",
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'semi': [2, 'always'],
    'max-len': [2, 250, 4, { 'ignoreUrls': true }],
    'no-useless-constructor': 0,
    'comma-dangle': ['error', 'never'],
    'linebreak-style': 'off',
    'space-before-function-paren': 0,
    'no-tabs': 0,
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error", { "functions": false, "classes": false,"variables": false }],
    'eslint:@typescript-eslint/no-explicit-any': "off",
    '@typescript-eslint/no-explicit-any':"off",
    '@typescript-eslint/no-var-requires': "off"
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
};

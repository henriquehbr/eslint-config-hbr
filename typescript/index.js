/** @type {import('eslint').Linter.Config} */
const config = {
  parserOptions: {
    ecmaVersion: 2020
  },
  env: {
    es2020: true
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    './rules',
    './settings',
    './override'
  ]
}

module.exports = config

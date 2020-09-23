require('@rushstack/eslint-patch/modern-module-resolution')

/** @type {import('@typescript-eslint/parser').ParserOptions} */
const parserOptions = {
  sourceType: 'module',
  project: './tsconfig.json'
}

/** @type {import('eslint').Linter.Config} */
const config = {
  parserOptions,
  env: {
    es2020: true
  },
  extends: ['./eslint', './sonarjs', './unicorn']
}

module.exports = config

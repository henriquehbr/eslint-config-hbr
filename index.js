require('@rushstack/eslint-patch/modern-module-resolution')

/** @type {import('@typescript-eslint/parser').ParserOptions} */
const parserOptions = {
  sourceType: 'module',
  project: './tsconfig.json'
}

/** @type {import('eslint').Linter.Config} */
const config = {
  parserOptions,
  extends: ['./eslint', './sonarjs', './unicorn', './import']
}

module.exports = config

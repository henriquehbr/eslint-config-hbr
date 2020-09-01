import type { Linter } from 'eslint'

const config: Linter.Config = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['plugin:@typescript-eslint/recommended', './rules']
}

export = config

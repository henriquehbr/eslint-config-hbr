import '@rushstack/eslint-patch/modern-module-resolution'
import type { Linter } from 'eslint'
import type { ParserOptions } from '@typescript-eslint/parser'

const config: Linter.Config = {
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json'
  } as ParserOptions,
  env: {
    es2020: true
  },
  extends: ['./eslint', './sonarjs', './unicorn']
}

export = config

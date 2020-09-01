import type { Linter } from 'eslint'

const config: Linter.Config = {
  rules: {
    // Require or disallow strict mode directives
    // https://eslint.org/docs/rules/strict
    strict: 'warn'
  }
}

export = config

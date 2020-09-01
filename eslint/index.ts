import type { Linter } from 'eslint'

const config: Linter.Config = {
  extends: [
    'eslint:recommended',
    './best-practices',
    './es6',
    './possible-errors',
    './strict-mode',
    './stylistic-issues',
    './variables'
  ]
}

export = config

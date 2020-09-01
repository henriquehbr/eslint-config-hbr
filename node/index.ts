import type { Linter } from 'eslint'

const config: Linter.Config = {
  env: {
    node: true
  },
  plugins: ['node'],
  extends: ['plugin:node/recommended-module']
}

export = config

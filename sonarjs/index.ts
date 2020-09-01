import type { Linter } from 'eslint'

const config: Linter.Config = {
  plugins: ['sonarjs'],
  extends: ['./bugs', './code-smell']
}

export = config

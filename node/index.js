/** @type {import('eslint').Linter.Config} */
const config = {
  env: {
    node: true
  },
  plugins: ['node'],
  extends: ['plugin:node/recommended', './settings']
}

module.exports = config

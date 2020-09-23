/** @type {import('eslint').Linter.Config} */
const config = {
  env: {
    node: true
  },
  plugins: ['node'],
  extends: ['plugin:node/recommended-module']
}

module.exports = config

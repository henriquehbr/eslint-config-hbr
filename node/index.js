/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    node: true
  },
  plugins: ['node'],
  extends: ['plugin:node/recommended-module']
}

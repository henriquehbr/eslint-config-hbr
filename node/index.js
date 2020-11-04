/** @type {import('eslint').Linter.Config} */
const config = {
  env: {
    node: true
  },
  plugins: ['node'],
  extends: ['plugin:node/recommended-module'],
  settings: {
    // Forbid the use of Node.js builtin modules
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md
    'import/no-nodejs-modules': 'off'
  }
}

module.exports = config

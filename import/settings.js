/** @type {import('eslint').Linter.Config} */
const config = {
  settings: {
    // https://github.com/benmosher/eslint-plugin-import#importextensions
    'import/extensions': ['.js', '.mjs', '.json']
  }
}

module.exports = config

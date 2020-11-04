/** @type {import('eslint').Linter.Config} */
const config = {
  settings: {
    // https://github.com/benmosher/eslint-plugin-import#importextensions
    'import/extensions': ['.js', '.mjs', '.json'],

    // A list of folders that modules can be imported
    // https://github.com/benmosher/eslint-plugin-import#importexternal-module-folders
    'import/external-module-folders': ['node_modules', 'src']
  }
}

module.exports = config

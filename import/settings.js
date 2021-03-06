/** @type {import('eslint').Linter.Config} */
const config = {
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.mjs', '.json'],
        moduleDirectory: ['node_modules', 'src']
      }
    }
  }
}

module.exports = config

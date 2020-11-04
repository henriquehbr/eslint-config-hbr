/** @type {import('eslint').Linter.Config} */
const config = {
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.mjs', '.json'],
        moduleDirectory: ['node_modules', 'src']
      }
    }
  }
}

module.exports = config

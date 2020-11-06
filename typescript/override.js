/** @type {import('eslint').Linter.Config} */
const config = {
  rules: {
    'node/no-missing-import': [
      'warn',
      {
        resolvePaths: ['src'],
        tryExtensions: ['.js', '.json', '.node', '.ts']
      }
    ],
    'node/no-unsupported-features/es-syntax': 'off',
    'no-use-before-define': 'off'
  }
}

module.exports = config

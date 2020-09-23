/** @type {import('eslint').Linter.Config} */
const config = {
  extends: [
    'eslint:recommended',
    './best-practices',
    './es6',
    './possible-errors',
    './strict-mode',
    './stylistic-issues',
    './variables'
  ]
}

module.exports = config

/** @type {import('eslint').Linter.Config} */
module.exports = {
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

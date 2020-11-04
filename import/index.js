/** @type {import('eslint').Linter.Config} */
const config = {
  plugins: ['import'],
  extends: [
    'plugin:import/errors',
    'plugin:import/warnings',
    './static-analysis',
    './possible-errors',
    './module-systems',
    './stylistic-issues',
    './settings'
  ]
}

module.exports = config

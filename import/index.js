/** @type {import('eslint').Linter.Config} */
const config = {
  plugins: ['import'],
  extends: ['plugin:import/errors', 'plugin:import/warnings', './settings']
}

module.exports = config

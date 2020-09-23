/** @type {import('eslint').Linter.Config} */
const config = {
  plugins: ['sonarjs'],
  extends: ['./bugs', './code-smell']
}

module.exports = config

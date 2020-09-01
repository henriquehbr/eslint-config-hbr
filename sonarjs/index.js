/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: ['sonarjs'],
  extends: ['./bugs', './code-smell']
}

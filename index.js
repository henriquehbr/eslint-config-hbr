/** @type {import('eslint').Linter.Config} */
module.exports = {
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    es2020: true
  },
  extends: ['./eslint', './unicorn', './sonarjs', './html', './markdown']
}

/** @type {import('eslint').Linter.Config} */
const config = {
  settings: {
    // Forbid the use of Node.js builtin modules
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md
    'import/no-nodejs-modules': 'off'
  }
}

module.exports = config

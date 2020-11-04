/** @type {import('eslint').Linter.Config} */
const config = {
  rules: {
    // Reports require([string]) function calls
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md
    'import/no-commonjs': ['warn', { allowConditionalRequire: false }],

    // Reports require([array], ...) and define([array], ...) function calls at the module scope
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md
    'import/no-amd': 'warn',

    // Forbid the use of Node.js builtin modules.
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md
    'import/no-nodejs-modules': 'warn'
  }
}

module.exports = config

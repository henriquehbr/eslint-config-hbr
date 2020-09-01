/** @type {import('eslint').Linter.Config} */
module.exports = {
  rules: {
    // Require or disallow initialization in variable declarations
    // https://eslint.org/docs/rules/init-declarations
    'init-declarations': 'warn',

    // Disallow labels that are variable names
    // https://eslint.org/docs/rules/no-label-var
    'no-label-var': 'warn',

    // Disallow specific global variables
    // https://eslint.org/docs/rules/no-restricted-globals
    'no-restricted-globals': ['warn', 'event'],

    // Disallow variable declarations from shadowing variables declared in the outer scope
    // https://eslint.org/docs/rules/no-shadow
    'no-shadow': ['warn'],

    // Disallow initializing to `undefined`
    // https://eslint.org/docs/rules/no-undef-init
    'no-undef-init': 'warn',

    // Disallow use of the `undefined` variable
    // https://eslint.org/docs/rules/no-undefined
    'no-undefined': 'warn',

    // Disallow early use of variables and functions
    // https://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': 'warn'
  }
}

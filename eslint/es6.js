/** @type {import('eslint').Linter.Config} */
module.exports = {
  rules: {
    // Require braces in arrow function body
    // https://eslint.org/docs/rules/arrow-body-style
    'arrow-body-style': 'warn',

    // Require parens in arrow function arguments
    // https://eslint.org/docs/rules/arrow-parens
    'arrow-parens': ['warn', 'as-needed'],

    // Require space before/after arrow function's arrow
    // https://eslint.org/docs/rules/arrow-spacing
    'arrow-spacing': 'warn',

    // Enforce spacing around the * in generator functions
    // https://eslint.org/docs/rules/generator-star-spacing
    'generator-star-spacing': 'warn',

    // Disallow arrow functions where they could be confused with comparisons
    // https://eslint.org/docs/rules/no-confusing-arrow
    'no-confusing-arrow': 'warn',

    // Disallow duplicate imports
    // https://eslint.org/docs/rules/no-duplicate-imports
    'no-duplicate-imports': [
      'warn',
      {
        includeExports: true
      }
    ],

    // Disallow unnecessary computed property keys in objects and classes
    // https://eslint.org/docs/rules/no-useless-computed-key
    'no-useless-computed-key': [
      'warn',
      {
        enforceForClassMembers: true
      }
    ],

    // Disallow unnecessary constructor
    // https://eslint.org/docs/rules/no-useless-constructor
    'no-useless-constructor': 'warn',

    // Disallow renaming import, export and destructured assignments to the same name
    // https://eslint.org/docs/rules/no-useless-rename
    'no-useless-rename': 'warn',

    // Require `let` or `const` instead of `var`
    // https://eslint.org/docs/rules/no-var
    'no-var': 'warn',

    // Require object literal shorthand
    // https://eslint.org/docs/rules/object-shorthand
    'object-shorthand': 'warn',

    // Require using arrow functions for callbacks
    // https://eslint.org/docs/rules/prefer-arrow-callback
    'prefer-arrow-callback': [
      'warn',
      {
        allowUnboundThis: false
      }
    ],

    // Suggest using `const`
    // https://eslint.org/docs/rules/prefer-const
    'prefer-const': [
      'warn',
      {
        destructuring: 'all'
      }
    ],

    // Prefer destructuring from arrays and objects
    // https://eslint.org/docs/rules/prefer-destructuring
    'prefer-destructuring': 'warn',

    // Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal and hexadecimal literals
    // https://eslint.org/docs/rules/prefer-numeric-literals
    'prefer-numeric-literals': 'warn',

    // Suggest using the rest parameters instead of `arguments`
    // https://eslint.org/docs/rules/prefer-rest-params
    'prefer-rest-params': 'warn',

    // Suggest using spread syntax instead of `.apply()`
    // https://eslint.org/docs/rules/prefer-spread
    'prefer-spread': 'warn',

    // Suggest using template literals instead of string concatenation
    // https://eslint.org/docs/rules/prefer-template
    'prefer-template': 'warn',

    // Enforce spacing between rest and spread operators and their expressions
    // https://eslint.org/docs/rules/rest-spread-spacing
    'rest-spread-spacing': 'warn',

    // Import sorting
    // https://eslint.org/docs/rules/sort-imports
    'sort-imports': 'warn',

    // Require symbol description
    // https://eslint.org/docs/rules/symbol-description
    'symbol-description': 'warn',

    // Enforce usage of spacing in template strings
    // https://eslint.org/docs/rules/template-curly-spacing
    'template-curly-spacing': 'warn',

    // Enforce spacing around the `*` in `yield*` expressions
    // https://eslint.org/docs/rules/yield-star-spacing
    'yield-star-spacing': ['warn', 'after']
  }
}

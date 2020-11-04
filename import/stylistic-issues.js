/** @type {import('eslint').Linter.Config} */
const config = {
  rules: {
    // This rule reports any imports that come after non-import statements
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md
    'import/first': ['warn', 'absolute-first'],

    // Enforces that all exports are declared at the bottom of the file
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/exports-last.md
    'import/exports-last': 'warn',

    // Reports if a resolved path is imported more than once
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    'import/no-duplicates': ['warn', { considerQueryString: true }],

    // A list of file extensions that will be parsed as modules and inspected for `exports`
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    'import/extensions': ['warn', 'never'],

    // A list of file extensions that will be parsed as modules and inspected for `exports`
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    'import/extensions': ['warn', 'never'],

    // Enforce a convention in the order of require() / import statements
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
    'import/order': [
      'warn',
      {
        alphabetize: {
          order: 'asc'
        }
      }
    ],

    // Enforces having one or more empty lines after the last top-level import statement or require call
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
    'import/newline-after-import': 'warn',

    // Prefer using default export over named export
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    'import/prefer-default-export': 'warn',

    // Forbid modules to have too many dependencies (import or require statements)
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/max-dependencies.md
    'import/max-dependencies': 'warn',

    // Remove modules with side-effects by reporting when a module is imported but not assigned
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unassigned-import.md
    'import/no-unassigned-import': 'warn',

    // Reports use of a default export as a locally named import
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md
    'import/no-named-default': 'warn',

    // Reports if a module's default export is unnamed
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-anonymous-default-export.md
    'import/no-anonymous-default-export': 'warn',

    // Reports when named exports are not grouped together in a single export declaration
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/group-exports.md
    'import/group-exports': 'warn'
  }
}

module.exports = config

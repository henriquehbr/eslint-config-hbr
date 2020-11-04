/** @type {import('eslint').Linter.Config} */
const config = {
  rules: {
    // If a default import is requested, this rule will report if there is no default export in the imported module
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md
    'import/default': 'warn',

    // Reports funny business with exports, like repeated exports of names or defaults
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
    'import/export': 'warn',

    // Enforces that all exports are declared at the bottom of the file
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/exports-last.md
    'import/exports-last': 'warn',

    // A list of file extensions that will be parsed as modules and inspected for `exports`
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    'import/extensions': ['warn', 'never'],

    // This rule reports any imports that come after non-import statements
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md
    'import/first': ['warn', 'absolute-first'],

    // Reports when named exports are not grouped together in a single export declaration
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/group-exports.md
    'import/group-exports': 'warn',

    // Forbid modules to have too many dependencies (import or require statements)
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/max-dependencies.md
    'import/max-dependencies': 'warn',

    // Verifies that all named imports are part of the set of named exports in the referenced module
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md
    'import/named': 'warn',

    // Enforces names exist at the time they are dereferenced
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md
    'import/namespace': 'warn',

    // Enforces having one or more empty lines after the last top-level import statement or require call
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
    'import/newline-after-import': 'warn',

    // Forbid import of modules using absolute paths
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md
    'import/no-absolute-path': 'warn',

    // Reports require([array], ...) and define([array], ...) function calls at the module scope
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md
    'import/no-amd': 'warn',

    // Reports if a module's default export is unnamed
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-anonymous-default-export.md
    'import/no-anonymous-default-export': 'warn',

    // Reports require([string]) function calls
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md
    'import/no-commonjs': ['warn', { allowConditionalRequire: false }],

    // Ensures that there is no resolvable path back to this module via its dependencies
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-cycle.md
    'import/no-cycle': 'warn',

    // Reports use of a deprecated name, as indicated by a JSDoc block with a `@deprecated` tag
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md
    'import/no-deprecated': 'warn',

    // Reports if a resolved path is imported more than once
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    'import/no-duplicates': ['warn', { considerQueryString: true }],

    // This rule checks every call to require() that uses expressions for the module name argument.
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
    'import/no-dynamic-require': 'warn',

    // Forbid the import of external modules that are not declared in the package.json
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': 'warn',

    // Forbids the use of mutable exports with `var` or `let`
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md
    'import/no-mutable-exports': 'warn',

    // Reports use of an exported name as a property on the default export.
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md
    'import/no-named-as-default-member': 'warn',

    // Reports use of an exported name as the locally imported name of a default export
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
    'import/no-named-as-default': 'warn',

    // Reports use of a default export as a locally named import
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md
    'import/no-named-default': 'warn',

    // Forbid the use of Node.js builtin modules.
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md
    'import/no-nodejs-modules': 'warn',

    // Prevent imports to folders in relative parent paths
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-relative-parent-imports.md
    'import/no-relative-parent-imports': 'warn',

    // Forbid a module from importing itself
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-self-import.md
    'import/no-self-import': 'warn',

    // Remove modules with side-effects by reporting when a module is imported but not assigned
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unassigned-import.md
    'import/no-unassigned-import': 'warn',

    // Ensures an imported module can be resolved to a module on the local filesystem
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
    'import/no-unresolved': 'warn',

    // Reports individual exports not being statically imported or required from other modules in the same project
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unused-modules.md
    'import/no-unused-modules': ['warn', { unusedExports: true }],

    // Prevent unnecessary path segments in import and require statements.
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-useless-path-segments.md
    'import/no-useless-path-segments': ['warn', { noUselessIndex: true }],

    // Forbid Webpack loader syntax in imports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
    'import/no-webpack-loader-syntax': 'warn',

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

    // Prefer using default export over named export
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    'import/prefer-default-export': 'warn'
  }
}

module.exports = config

/** @type {import('eslint').Linter.Config} */
const config = {
  rules: {
    // Reports funny business with exports, like repeated exports of names or defaults
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
    'import/export': 'warn',

    // Reports use of an exported name as the locally imported name of a default export
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
    'import/no-named-as-default': 'warn',

    // Reports use of an exported name as a property on the default export.
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md
    'import/no-named-as-default-member': 'warn',

    // Reports use of a deprecated name, as indicated by a JSDoc block with a `@deprecated` tag
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md
    'import/no-deprecated': 'warn',

    // Forbid the import of external modules that are not declared in the package.json
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': 'warn',

    // Forbids the use of mutable exports with `var` or `let`
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md
    'import/no-mutable-exports': 'warn',

    // Reports individual exports not being statically imported or required from other modules in the same project
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unused-modules.md
    'import/no-unused-modules': ['warn', { missingExports: true }]
  }
}

module.exports = config

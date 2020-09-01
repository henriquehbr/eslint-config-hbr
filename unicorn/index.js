/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: ['unicorn'],
  rules: {
    // Improve regexes by making them shorter, consistent and safer
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/better-regex.md
    'unicorn/better-regex': 'warn',

    // Enforce a specific parameter name in catch clauses
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/catch-error-name.md
    'unicorn/catch-error-name': 'warn',

    // Move function definitions to the highest possible scope
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/consistent-function-scoping.md
    'unicorn/consistent-function-scoping': 'warn',

    // Enforce correct error subclassing
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/custom-error-definition.md
    'unicorn/custom-error-definition': 'warn',

    // Enforce passing a `message` value when throwing a built-in error
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/error-message.md
    'unicorn/error-message': 'warn',

    // Require escape sequences to use uppercase values
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/escape-case.md
    'unicorn/escape-case': 'warn',

    // Enforce explicitly comparing the `length` property of a value
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/explicit-length-check.md
    'unicorn/explicit-length-check': [
      'warn',
      {
        'non-zero': 'not-equal'
      }
    ],

    // Enforce a case style for filenames
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/filename-case.md
    'unicorn/filename-case': [
      'warn',
      {
        case: 'camelCase'
      }
    ],

    // Enforce importing index files with `.`
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/import-index.md
    'unicorn/import-index': 'warn',

    // Enforce the use of `new` for all builtins, except `String`, `Number` and `Boolean`
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/new-for-builtins.md
    'unicorn/new-for-builtins': 'warn',

    // Require `Array.isArray()` instead of `instanceof Array`
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-array-instanceof.md
    'unicorn/no-array-instanceof': 'warn',

    // Do not use leading/trailing space between `console.log` parameters
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-console-spaces.md
    'unicorn/no-console-spaces': 'warn',

    // Prevent passing a function reference directly to iterator methods
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-fn-reference-in-iterator.md
    'unicorn/no-fn-reference-in-iterator': 'warn',

    // Do not use a `for` loop that can be replaced with a `for-of` loop
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-for-loop.md
    'unicorn/no-for-loop': 'warn',

    // Enforce the use of unicode escapes instead of hexadecimal escapes
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-hex-escape.md
    'unicorn/no-hex-escape': 'warn',

    // Disallow nested ternary operations
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-nested-ternary.md
    'no-nested-ternary': 'off',
    'unicorn/no-nested-ternary': 'warn',

    // Enforce the use of `Buffer.from()` and `Buffer.alloc()` instead of the deprecated `new Buffer()`
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-new-buffer.md
    'unicorn/no-new-buffer': 'warn',

    // Disallow the use of the `null` literal
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-null.md
    'unicorn/no-null': 'warn',

    // Disallow the use of object as default parameters
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-object-as-default-parameter.md
    'unicorn/no-object-as-default-parameter': 'warn',

    // Disallow `process.exit()`
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-process-exit.md
    'unicorn/no-process-exit': 'warn',

    // Disallow `Array.reduce()` and `Array.reduceRight()`
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-reduce.md
    'unicorn/no-reduce': 'warn',

    // Disallow unreadable array destructuring
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-unreadable-array-destructuring.md
    'unicorn/no-unreadable-array-destructuring': 'warn',

    // Disallow unsafe regular expressions
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-unsafe-regex.md
    'unicorn/no-unsafe-regex': 'warn',

    // Disallow unused object properties
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-unused-properties.md
    'unicorn/no-unused-properties': 'warn',

    // Disallow useless `undefined`
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-useless-undefined.md
    'unicorn/no-useless-undefined': 'warn',

    // Disallow number literals with zero fractions or dangling dots
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-zero-fractions.md
    'unicorn/no-zero-fractions': 'warn',

    // Enforce proper case for numeric literals
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/number-literal-case.md
    'unicorn/number-literal-case': 'warn',

    // Prefer `.addEventListener()` and `.removeEventListener()` over `on`-functions
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-add-event-listener.md
    'unicorn/prefer-add-event-listener': 'warn',

    // Prefer `.find(...)` over the first element from `.filter(...)`
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-array-find.md
    'unicorn/prefer-array-find': 'warn',

    // Prefer using `.dataset` on DOM elements over `.setAttribute(...)`
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-dataset.md
    'unicorn/prefer-dataset': 'warn',

    // Prefer `KeyboardEvent.key` over `KeyboardEvent.keyCode`
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-event-key.md
    'unicorn/prefer-event-key': 'warn',

    // Prefer `.flatMap(...)` and
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-flat-map.md
    'unicorn/prefer-flat-map': 'warn',

    // Prefer `.includes()` over `.indexOf()` when checking for existence or non-existence
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-includes.md
    'unicorn/prefer-includes': 'warn',

    // Prefer modern DOM APIs
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-modern-dom-apis.md
    'unicorn/prefer-modern-dom-apis': 'warn',

    // Prefer negative index over `.length - index` for `{String,Array,TypedArray}.slice()` and `Array.splice()`
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-negative-index.md
    'unicorn/prefer-negative-index': 'warn',

    // Prefer `Node.append()` over `Node.appendChild()`
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-negative-index.md
    'unicorn/prefer-node-append': 'warn',

    // Prefer `Node.remove()` over `Node.removeChild(childNode)`
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-node-remove.md
    'unicorn/prefer-node-remove': 'warn',

    // Prefer omitting the `catch` binding parameter
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-optional-catch-binding.md
    'unicorn/prefer-optional-catch-binding': 'warn',

    /**
     * Prefer `.querySelector()` over `.getElementById()`, `.querySelectorAll()` over `.getElementsByClassName()` and
     * `.getElementsByTagName()`
     */
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-query-selector.md
    'unicorn/prefer-query-selector': 'warn',

    // Prefer `Reflect.apply()` over `Function.apply`
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-reflect-apply.md
    'unicorn/prefer-reflect-apply': 'warn',

    // Prefer `String.replaceAll()` over regex searches with the global flag
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-replace-all.md
    'unicorn/prefer-replace-all': 'warn',

    // Prefer the spread operator over `Array.from()`
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-spread.md
    'unicorn/prefer-spread': 'warn',

    // Prefer `String.startsWith()` & `String.endsWith()` over more complex alternatives
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-starts-ends-with.md
    'unicorn/prefer-starts-ends-with': 'warn',

    // Prefer `String.slice()` over `String.substr()` and `String.substring()`
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-string-slice.md
    'unicorn/prefer-string-slice': 'warn',

    // Prefer `.textContent` over `.innerText`
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-text-content.md
    'unicorn/prefer-text-content': 'warn',

    // Prefer `String.trimStart()` / `String.trimEnd()` over `String.trimLeft()` / `String.trimRight()`
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-trim-start-end.md
    'unicorn/prefer-trim-start-end': 'warn',

    // Enforce throwing `TypeError` in type checking conditions
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-type-error.md
    'unicorn/prefer-type-error': 'warn',

    // Prevent abbreviations
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prevent-abbreviations.md
    'unicorn/prevent-abbreviations': 'warn',

    // Enforce better string content
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/string-content.md
    'unicorn/string-content': [
      'warn',
      {
        patterns: {
          "'": '’'
        }
      }
    ],

    // Require `new` when throwing an error
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/throw-new-error.md
    'unicorn/throw-new-error': 'warn'
  }
}

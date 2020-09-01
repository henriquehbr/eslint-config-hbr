import type { Linter } from 'eslint'

const config: Linter.Config = {
  rules: {
    // Enforces getter/setter pairs in objects and classes
    // https://eslint.org/docs/rules/accessor-pairs
    'accessor-pairs': 'warn',

    // Enforces return statements in callbacks of array's methods
    // https://eslint.org/docs/rules/array-callback-return
    'array-callback-return': 'warn',

    // Treat `var` as block scoped
    // https://eslint.org/docs/rules/block-scoped-var
    'block-scoped-var': 'warn',

    // Enforce that class methods utilize `this`
    // https://eslint.org/docs/rules/class-methods-use-this
    'class-methods-use-this': 'warn',

    // Limit cyclomatic complexity
    // https://eslint.org/docs/rules/complexity
    complexity: 'warn',

    // Require `return` statements to either always or never specify values
    // https://eslint.org/docs/rules/consistent-return
    'consistent-return': 'warn',

    // Require following curly brace conventions
    // https://eslint.org/docs/rules/curly
    curly: ['warn', 'multi'],

    // Require default case in switch statements
    // https://eslint.org/docs/rules/default-case
    'default-case': 'warn',

    // Enforce default clauses in switch statements to be last
    // https://eslint.org/docs/rules/default-case-last
    'default-case-last': 'warn',

    // Enforce default parameters to be last
    // https://eslint.org/docs/rules/default-param-last
    'default-param-last': 'warn',

    // Enforce newline either before or after dot
    // https://eslint.org/docs/rules/dot-location
    'dot-location': ['warn', 'property'],

    // Require dot notation
    // https://eslint.org/docs/rules/dot-notation
    'dot-notation': 'warn',

    // Require === and !==
    // https://eslint.org/docs/rules/eqeqeq
    eqeqeq: ['warn', 'smart'],

    // Require grouped accessor pairs in object literals and classes
    // https://eslint.org/docs/rules/grouped-accessor-pairs
    'grouped-accessor-pairs': ['warn', 'getBeforeSet'],

    // Require guarding for-in
    // https://eslint.org/docs/rules/guard-for-in
    'guard-for-in': 'warn',

    // Enforce a maximum number of classes per file
    // https://eslint.org/docs/rules/max-classes-per-file
    'max-classes-per-file': 'warn',

    // Disallow use of caller/callee
    // https://eslint.org/docs/rules/no-caller
    'no-caller': 'warn',

    // Disallow returning value in constructor
    // https://eslint.org/docs/rules/no-constructor-return
    'no-constructor-return': 'warn',

    // Disallow return before else
    // https://eslint.org/docs/rules/no-else-return
    'no-else-return': 'warn',

    // Disallow empty functions
    // https://eslint.org/docs/rules/no-empty-function
    'no-empty-function': 'warn',

    // Disallow null comparisons
    // https://eslint.org/docs/rules/no-eq-null
    'no-eq-null': 'warn',

    // Disallow `eval()`
    // https://eslint.org/docs/rules/no-eval
    'no-eval': 'warn',

    // Disallow extending of native objects
    // https://eslint.org/docs/rules/no-extend-native
    'no-extend-native': 'warn',

    // Disallow unnecessary function binding
    // https://eslint.org/docs/rules/no-extra-bind
    'no-extra-bind': 'warn',

    // Disallow unnecessary labels
    // https://eslint.org/docs/rules/no-extra-label
    'no-extra-label': 'warn',

    // Disallow floating decimals
    // https://eslint.org/docs/rules/no-floating-decimal
    'no-floating-decimal': 'warn',

    // Disallow the type conversion with shorter notations
    // https://eslint.org/docs/rules/no-implicit-coercion
    'no-implicit-coercion': 'warn',

    // Disallow declarations in the global scope
    // https://eslint.org/docs/rules/no-implicit-globals
    'no-implicit-globals': [
      'warn',
      {
        lexicalBindings: true
      }
    ],

    // Disallow implied `eval()`
    // https://eslint.org/docs/rules/no-implied-eval
    'no-implied-eval': 'warn',

    // Disallow `this` keywords outside of classes or class-like objects
    // https://eslint.org/docs/rules/no-invalid-this
    'no-invalid-this': 'warn',

    // Disallow iterator
    // https://eslint.org/docs/rules/no-iterator
    'no-iterator': 'warn',

    // Disallow labelled statements
    // https://eslint.org/docs/rules/no-labels
    'no-labels': 'warn',

    // Disallow unnecessary nested blocks
    // https://eslint.org/docs/rules/no-lone-blocks
    'no-lone-blocks': 'warn',

    // Disallow functions in loops
    // https://eslint.org/docs/rules/no-loop-func
    'no-loop-func': 'warn',

    // Disallow magic numbers
    // https://eslint.org/docs/rules/no-magic-numbers
    'no-magic-numbers': 'warn',

    // Disallow multiple spaces
    // https://eslint.org/docs/rules/no-multi-spaces
    'no-multi-spaces': 'warn',

    // Disallow multiline strings
    // https://eslint.org/docs/rules/no-multi-str
    'no-multi-str': 'warn',

    // Disallow `new` for side effects
    // https://eslint.org/docs/rules/no-new
    'no-new': 'warn',

    // Disallow function constructor
    // https://eslint.org/docs/rules/no-new-func
    'no-new-func': 'warn',

    // Disallow primitive wrapper instances
    // https://eslint.org/docs/rules/no-new-wrappers
    'no-new-wrappers': 'warn',

    // Disallow octal escape sequences in string literals
    // https://eslint.org/docs/rules/no-octal-escape
    'no-octal-escape': 'warn',

    // Disallow reassignment of function parameters
    // https://eslint.org/docs/rules/no-param-reassign
    'no-param-reassign': 'warn',

    // Disallow use of `__proto__`
    // https://eslint.org/docs/rules/no-proto
    'no-proto': 'warn',

    // Disallow assignment in return statement
    // https://eslint.org/docs/rules/no-return-assign
    'no-return-assign': 'warn',

    // Disallows unnecessary `return await`
    // https://eslint.org/docs/rules/no-return-await
    'no-return-await': 'warn',

    // Disallow script URLs
    // https://eslint.org/docs/rules/no-script-url
    'no-script-url': 'warn',

    // Disallow self compare
    // https://eslint.org/docs/rules/no-self-compare
    'no-self-compare': 'warn',

    // Disallow use of the comma operator
    // https://eslint.org/docs/rules/no-sequences
    'no-sequences': 'warn',

    // Restrict what can be trown as an exception
    // https://eslint.org/docs/rules/no-throw-literal
    'no-throw-literal': 'warn',

    // Disallow unmodified conditions of loop
    // https://eslint.org/docs/rules/no-unmodified-loop-condition
    'no-unmodified-loop-condition': 'warn',

    // Disallow unused expressions
    // https://eslint.org/docs/rules/no-unused-expressions
    'no-unused-expressions': [
      'warn',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true
      }
    ],

    // Disallow unnecessary `.call()` and `.apply()`
    // https://eslint.org/docs/rules/no-useless-call
    'no-useless-call': 'warn',

    // Disallow unnecessary concatenation of strings
    // https://eslint.org/docs/rules/no-useless-concat
    'no-useless-concat': 'warn',

    // Disallow redundant return statements
    // https://eslint.org/docs/rules/no-useless-return
    'no-useless-return': 'warn',

    // Disallow use of the void operator
    // https://eslint.org/docs/rules/no-void
    'no-void': 'warn',

    // Suggest using named capture group in regular expressions
    // https://eslint.org/docs/rules/prefer-named-capture-group
    'prefer-named-capture-group': 'warn',

    // Require using Error objects as Promise rejection reasons
    // https://eslint.org/docs/rules/prefer-promise-reject-errors
    'prefer-promise-reject-errors': 'warn',

    // Disallow use of the `RegExp` constructor in favor of regular expression literals
    // https://eslint.org/docs/rules/prefer-regex-literals
    'prefer-regex-literals': [
      'warn',
      {
        disallowRedundantWrapping: true
      }
    ],

    // Require radix parameter
    // https://eslint.org/docs/rules/radix
    radix: ['warn', 'as-needed'],

    // Disallow async functions which have no `await` expression
    // https://eslint.org/docs/rules/require-await
    'require-await': 'warn',

    // Enforce the use of `u` flag on RegExp
    // https://eslint.org/docs/rules/require-unicode-regexp
    'require-unicode-regexp': 'warn',

    // Require variable declarations to be at the top of their scope
    // https://eslint.org/docs/rules/vars-on-top
    'vars-on-top': 'warn',

    // Requires IIFEs to be wrapped
    // https://eslint.org/docs/rules/wrap-iife
    'wrap-iife': 'warn',

    // Require or disallow yoda conditions
    // https://eslint.org/docs/rules/yoda
    yoda: 'warn'
  }
}

export = config

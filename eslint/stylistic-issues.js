/** @type {import('eslint').Linter.Config} */
const config = {
  rules: {
    // Enforce line breaks after opening and before closing array brackets
    // https://eslint.org/docs/rules/array-bracket-newline
    'array-bracket-newline': 'warn',

    // Disallow or enforce spaces inside of brackets
    // https://eslint.org/docs/rules/array-bracket-spacing
    'array-bracket-spacing': ['warn', 'never'],

    // Enforce line breaks between array elements
    // https://eslint.org/docs/rules/array-element-newline
    'array-element-newline': ['warn', 'consistent'],

    // Disallow or enforce spaces inside of block after opening block and before closing block
    // https://eslint.org/docs/rules/block-spacing
    'block-spacing': 'warn',

    // Require brace style
    // https://eslint.org/docs/rules/brace-style
    'brace-style': 'warn',

    // Require CamelCase
    // https://eslint.org/docs/rules/camelcase
    camelcase: 'warn',

    // Enforce or disallow capitalization of the first letter of a comment
    // https://eslint.org/docs/rules/capitalized-comments
    'capitalized-comments': 'warn',

    // Require or disallow trailling commas
    // https://eslint.org/docs/rules/comma-dangle
    'comma-dangle': 'warn',

    // Enforces spacing around commas
    // https://eslint.org/docs/rules/comma-spacing
    'comma-spacing': 'warn',

    // Comma style
    // https://eslint.org/docs/rules/comma-style
    'comma-style': 'warn',

    // Disallow or enforce spaces inside of computed properties
    // https://eslint.org/docs/rules/computed-property-spacing
    'computed-property-spacing': 'warn',

    // Require consistent `this`
    // https://eslint.org/docs/rules/consistent-this
    'consistent-this': 'warn',

    // Require or disallow newline at the end of files
    // https://eslint.org/docs/rules/eol-last
    'eol-last': 'warn',

    // Require or disallow spacing between function identifiers and their invocations
    // https://eslint.org/docs/rules/func-call-spacing
    'func-call-spacing': 'warn',

    // Require function names to match the name of the variable or property to which they are assigned
    // https://eslint.org/docs/rules/func-name-matching
    'func-name-matching': 'warn',

    // Require or disallow named `function` expressions
    // https://eslint.org/docs/rules/func-names
    'func-names': ['warn', 'as-needed'],

    // Enforce the consistent use of either `function` declarations or expressions
    // https://eslint.org/docs/rules/func-style
    'func-style': 'warn',

    // Enforce line breaks between arguments on a function call
    // https://eslint.org/docs/rules/function-call-argument-newline
    'function-call-argument-newline': ['warn', 'consistent'],

    // Enforce consistent line breaks inside function parentheses
    // https://eslint.org/docs/rules/function-paren-newline
    'function-paren-newline': 'warn',

    // Enforce the location of arrow function bodies with implicit returns
    // https://eslint.org/docs/rules/implicit-arrow-linebreak
    'implicit-arrow-linebreak': 'warn',

    // Enforce consistent indentation
    // https://eslint.org/docs/rules/indent
    indent: ['warn', 2],

    // Enforce the consistent use of either double or single quotes in JSX attributes
    // https://eslint.org/docs/rules/jsx-quotes
    'jsx-quotes': 'warn',

    // Enforce the consistent spacing between keys and values in object literal properties
    // https://eslint.org/docs/rules/key-spacing
    'key-spacing': 'warn',

    // Enforce the consistent spacing before and after keywords
    // https://eslint.org/docs/rules/keyword-spacing
    'keyword-spacing': 'warn',

    // Enforce position of line comments
    // https://eslint.org/docs/rules/line-comment-position
    'line-comment-position': 'warn',

    // Enforce consistent linebreak style
    // https://eslint.org/docs/rules/linebreak-style
    'linebreak-style': 'warn',

    // Require empty lines around comments
    // https://eslint.org/docs/rules/lines-around-comment
    'lines-around-comment': [
      'warn',
      {
        beforeLineComment: true,
        allowBlockStart: true,
        allowBlockEnd: true,
        allowClassStart: true,
        allowClassEnd: true,
        allowObjectStart: true,
        allowObjectEnd: true,
        allowArrayStart: true,
        allowArrayEnd: true
      }
    ],

    // Require or disallow an empty line between class members
    // https://eslint.org/docs/rules/lines-between-class-members
    'lines-between-class-members': 'warn',

    // Enforce a maximum dpeth that blocks can be nested
    // https://eslint.org/docs/rules/max-depth
    'max-depth': 'warn',

    // Enforce a maximum line length
    // https://eslint.org/docs/rules/max-len
    'max-len': [
      'warn',
      {
        code: 120,
        tabWidth: 2,
        ignoreComments: false
      }
    ],

    // Enforce a maximum number of parameters in function definitions
    // https://eslint.org/docs/rules/max-params
    'max-params': 'warn',

    // Enforce a maximum number of statements allowed per line
    // https://eslint.org/docs/rules/max-statements-per-line
    'max-statements-per-line': 'warn',

    // Enforce a particular style for multiline comments
    // https://eslint.org/docs/rules/multiline-comment-style
    'multiline-comment-style': 'warn',

    // Enforce or disallow newlines between operands of ternary expressions
    // https://eslint.org/docs/rules/multiline-ternary
    'multiline-ternary': ['warn', 'always-multiline'],

    // Require constructor names to begin with a capital letter
    // https://eslint.org/docs/rules/new-cap
    'new-cap': 'warn',

    // Require parentheses when invoking a constructor with no arguments
    // https://eslint.org/docs/rules/new-parens
    'new-parens': 'warn',

    // Require a newline after each call in a method chain
    // https://eslint.org/docs/rules/newline-per-chained-call
    'newline-per-chained-call': 'warn',

    // Disallow `Array` constructors
    // https://eslint.org/docs/rules/no-array-constructor
    'no-array-constructor': 'warn',

    // Disallow bitwise operators
    // https://eslint.org/docs/rules/no-bitwise
    'no-bitwise': 'warn',

    // Disallow `continue` statements
    // https://eslint.org/docs/rules/no-continue
    'no-continue': 'warn',

    // Disallow inline comments after code
    // https://eslint.org/docs/rules/no-inline-comments
    'no-inline-comments': 'warn',

    // Disallow `if` statements as the only statement in `else` blocks
    // https://eslint.org/docs/rules/no-lonely-if
    'no-lonely-if': 'warn',

    // Disallow mixes of different operators
    // https://eslint.org/docs/rules/no-mixed-operators
    'no-mixed-operators': 'warn',

    // Disallow use of chained assignment expressions
    // https://eslint.org/docs/rules/no-multi-assign
    'no-multi-assign': 'warn',

    // Disallow multiple empty lines
    // https://eslint.org/docs/rules/no-multiple-empty-lines
    'no-multiple-empty-lines': ['warn', { max: 1 }],

    // Disallow negated conditions
    // https://eslint.org/docs/rules/no-negated-condition
    'no-negated-condition': 'warn',

    // Disallow nested ternary expressions
    // https://eslint.org/docs/rules/no-nested-ternary
    'no-nested-ternary': 'warn',

    // Disallow `Object` constructors
    // https://eslint.org/docs/rules/no-nested-ternary
    'no-new-object': 'warn',

    // Disallow the unary operators `++` and `--`
    // https://eslint.org/docs/rules/no-plusplus
    'no-plusplus': ['warn', { allowForLoopAfterthoughts: true }],

    // Disallow trailling whitespace at the end of lines
    // https://eslint.org/docs/rules/no-trailing-spaces
    'no-trailing-spaces': 'warn',

    // Disallow dangling underscore in identifiers
    // https://eslint.org/docs/rules/no-underscore-dangle
    'no-underscore-dangle': 'warn',

    // Disallow ternary operators when simpler alternatives exist
    // https://eslint.org/docs/rules/no-unneeded-ternary
    'no-unneeded-ternary': 'warn',

    // Disallow whitespace before properties
    // https://eslint.org/docs/rules/no-whitespace-before-property
    'no-whitespace-before-property': 'warn',

    // Enforce the location of single-line statements
    // https://eslint.org/docs/rules/nonblock-statement-body-position
    'nonblock-statement-body-position': ['warn', 'any'],

    // Enforce consistent line breaks inside braces
    // https://eslint.org/docs/rules/object-curly-newline
    'object-curly-newline': ['warn', { multiline: true }],

    // Enforce consistent spacing inside of braces
    // https://eslint.org/docs/rules/object-curly-spacing
    'object-curly-spacing': ['warn', 'always'],

    // Enforce placing object properties on separate lines
    // https://eslint.org/docs/rules/object-property-newline
    'object-property-newline': ['warn'],

    // Enforce variables to be declared either together or separately
    // https://eslint.org/docs/rules/one-var
    'one-var': ['warn', 'never'],

    // Require or disallow newlines around variable declarations
    // https://eslint.org/docs/rules/one-var-declaration-per-line
    'one-var-declaration-per-line': 'warn',

    // Require or disallow assignment operator shorthand where possible
    // https://eslint.org/docs/rules/operator-assignment
    'operator-assignment': 'warn',

    // Enforce consistent linebreak style for operators
    // https://eslint.org/docs/rules/operator-linebreak
    'operator-linebreak': ['warn', 'after'],

    // Require or disallow padding within blocks
    // https://eslint.org/docs/rules/padded-blocks
    'padded-blocks': ['warn', 'never'],

    // Require or disallow padding lines between statements
    // https://eslint.org/docs/rules/padding-line-between-statements
    'padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'always', prev: 'import', next: '*' },
      { blankLine: 'any', prev: 'import', next: 'import' }
    ],

    // Disallow the use of `Math.pow` in favor of the `**` operator
    // https://eslint.org/docs/rules/prefer-exponentiation-operator
    'prefer-exponentiation-operator': 'warn',

    // Prefer use of an object spread over `Object.assign`
    // https://eslint.org/docs/rules/prefer-object-spread
    'prefer-object-spread': 'warn',

    // Require quotes around object literal property names
    // https://eslint.org/docs/rules/quote-props
    'quote-props': 'warn',

    // Enforce the consistent use of either backticks, double or single quotes
    // https://eslint.org/docs/rules/quotes
    quotes: ['warn', 'single'],

    // Require or disallow semicolons instead of ASI
    // https://eslint.org/docs/rules/semi
    semi: ['warn', 'never'],

    // Enforce spacing before and after semicolons
    // https://eslint.org/docs/rules/semi-spacing
    'semi-spacing': [
      'warn',
      {
        before: false,
        after: true
      }
    ],

    // Enforce location of semicolons
    // https://eslint.org/docs/rules/semi-style
    'semi-style': 'warn',

    // Require object keys to be sorted
    // https://eslint.org/docs/rules/sort-keys
    'sort-keys': [
      'warn',
      'asc',
      {
        natural: true
      }
    ],

    // Variable sorting
    // https://eslint.org/docs/rules/sort-vars
    'sort-vars': 'warn',

    // Require or disallow space before blocks
    // https://eslint.org/docs/rules/space-before-blocks
    'space-before-blocks': 'warn',

    // Require or disallow a space before function parentheses
    // https://eslint.org/docs/rules/space-before-function-paren
    'space-before-function-paren': ['warn', 'never'],

    // Disallow or enforce spaces inside of parentheses
    // https://eslint.org/docs/rules/space-in-parens
    'space-in-parens': 'warn',

    // Require spacing around infix operators
    // https://eslint.org/docs/rules/space-infix-ops
    'space-infix-ops': 'warn',

    // Require or disallow spaces before/after unary operators
    // https://eslint.org/docs/rules/space-unary-ops
    'space-unary-ops': [
      'warn',
      {
        words: true,
        nonwords: false,
        overrides: {
          '+': true,
          '-': true
        }
      }
    ],

    // Requires or disallow a whitespace (space or tab) beginning a comment
    // https://eslint.org/docs/rules/spaced-comment
    'spaced-comment': 'warn',

    // Enforce spacing around colons of switch statements
    // https://eslint.org/docs/rules/switch-colon-spacing
    'switch-colon-spacing': 'warn',

    // Require or disallow spacing between template tags and their literals
    // https://eslint.org/docs/rules/template-tag-spacing
    'template-tag-spacing': 'warn',

    // Require or disallow the Unicode Byte Order Mark (BOM)
    // https://eslint.org/docs/rules/unicode-bom
    'unicode-bom': 'warn'
  }
}

module.exports = config

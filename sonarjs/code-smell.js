/** @type {import('eslint').Linter.Config} */
module.exports = {
  rules: {
    // Limit cognitive complexity
    // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/cognitive-complexity.md
    'sonarjs/cognitive-complexity': 'warn',

    // Enforce a maximum number of cases per switch
    // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/max-switch-cases.md
    'sonarjs/max-switch-cases': ['warn', 10],

    // Enforce merging collapsible `if` statements
    // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-collapsible-if.md
    'sonarjs/no-collapsible-if': 'warn',

    // Disallow comparing collection/array length against zero
    // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-collection-size-mischeck.md
    'sonarjs/no-collection-size-mischeck': 'warn',

    // Disallow duplicated string literals
    // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-duplicate-string.md
    'sonarjs/no-duplicate-string': 'warn',

    // Disallow two or more identical cases in a `switch` statement, or branches in a `if` statement
    // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-duplicated-branches.md
    'sonarjs/no-duplicated-branches': 'warn',

    // Disallow having two or more functions with the same implementation
    // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-identical-functions.md
    'sonarjs/no-identical-functions': 'warn',

    // Disallow inversion of boolean comparisons
    // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-inverted-boolean-check.md
    'sonarjs/no-inverted-boolean-check': 'warn',

    // Disallow redundant booleans
    // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-redundant-boolean.md
    'sonarjs/no-redundant-boolean': 'warn',

    // Disallow unnecessary jump statements
    // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-redundant-jump.md
    'sonarjs/no-redundant-jump': 'warn',

    // Require conditionals to be placed on a newline
    // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-same-line-conditional.md
    'sonarjs/no-same-line-conditional': 'warn',

    // Require switch statements to have at least 3 or more cases
    // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-small-switch.md
    'sonarjs/no-small-switch': 'warn',

    // Disallow collection without called methods, other than add or remove values
    // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-unused-collection.md
    'sonarjs/no-unused-collection': 'warn',

    // Disallow catch clause that only rethrows an caught exception
    // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-useless-catch.md
    'sonarjs/no-useless-catch': 'warn',

    // Disallow immediately returned variables
    // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/prefer-immediate-return.md
    'sonarjs/prefer-immediate-return': 'warn',

    // Disallow assigning object properties outside it's declaration
    // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/prefer-object-literal.md
    'sonarjs/prefer-object-literal': 'warn',

    // Disallow wrapping boolean literal statements into `if-then-else`
    // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/prefer-single-boolean-return.md
    'sonarjs/prefer-single-boolean-return': 'warn',

    // Enforce the use of `while` instead condition-only `for`
    // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/prefer-while.md
    'sonarjs/prefer-while': 'warn'
  }
}

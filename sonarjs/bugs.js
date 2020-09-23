/** @type {import('eslint').Linter.Config} */
const config = {
  rules: {
    // Disallow having all branches in a switch or if chain with the same implementation
    // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-all-duplicated-branches.md
    'sonarjs/no-all-duplicated-branches': 'warn',

    // Disallow array unconditional value replacement
    // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-element-overwrite.md
    'sonarjs/no-element-overwrite': 'warn',

    // Disallow passing extra arguments to function
    // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-extra-arguments.md
    'sonarjs/no-extra-arguments': 'warn',

    // Disallow duplicated conditionals on `if` statements
    // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-identical-conditions.md
    'sonarjs/no-identical-conditions': 'warn',

    // Disallow duplicated expressions
    // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-identical-expressions.md
    'sonarjs/no-identical-expressions': 'warn',

    // Disallow loops with a body that allows only one iteration
    // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-one-iteration-loop.md
    'sonarjs/no-one-iteration-loop': 'warn',

    // Disallow assignment of functions that don't have a return value
    // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-use-of-empty-return-value.md
    'sonarjs/no-use-of-empty-return-value': 'warn'
  }
}

module.exports = config

"use strict";
const config = {
    rules: {
        // Disallow await inside of loops
        // https://eslint.org/docs/rules/no-await-in-loop
        'no-await-in-loop': 'warn',
        // Disallow unnecessary parentheses
        // https://eslint.org/docs/rules/no-extra-parens
        'no-extra-parens': ['warn', 'all', { nestedBinaryExpressions: true }],
        // Disallow returning values from Promise executor functions
        // https://eslint.org/docs/rules/no-promise-executor-return
        'no-promise-executor-return': 'warn',
        // Disallow template literal placeholder syntax in regular strings
        // https://eslint.org/docs/rules/no-template-curly-in-string
        'no-template-curly-in-string': 'warn',
        // Disallow loops with a body that allows only one iteration
        // https://eslint.org/docs/rules/no-unreachable-loop
        'no-unreachable-loop': 'warn',
        // Disallow useless backreferences in regular expressions
        // https://eslint.org/docs/rules/no-useless-backreference
        'no-useless-backreference': 'warn',
        // Disallow assignments that can lead to race conditions due to usage of `await` or `yield`
        // https://eslint.org/docs/rules/require-atomic-updates
        'require-atomic-updates': 'warn'
    }
};
module.exports = config;

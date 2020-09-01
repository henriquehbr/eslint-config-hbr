"use strict";
const config = {
    extends: [
        'eslint:recommended',
        './best-practices',
        './es6',
        './possible-errors',
        './strict-mode',
        './stylistic-issues',
        './variables'
    ]
};
module.exports = config;

"use strict";
const config = {
    parserOptions: {
        sourceType: 'module',
        project: './tsconfig.json'
    },
    env: {
        es2020: true
    },
    extends: ['./eslint', './html', './sonarjs', './unicorn', './typescript']
};
module.exports = config;

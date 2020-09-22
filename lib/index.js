"use strict";
require("@rushstack/eslint-patch/modern-module-resolution");
const config = {
    parserOptions: {
        sourceType: 'module',
        project: './tsconfig.json'
    },
    env: {
        es2020: true
    },
    extends: ['./eslint', './sonarjs', './unicorn']
};
module.exports = config;

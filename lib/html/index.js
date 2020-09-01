"use strict";
const config = {
    env: {
        browser: true
    },
    plugins: ['html'],
    settings: {
        // Recognize files with different extensions as HTML files
        // https://github.com/BenoitZugmeyer/eslint-plugin-html#htmlhtml-extensions
        'html/html-extensions': [
            'warn',
            [
                '.erb',
                '.handlebars',
                '.hbs',
                '.htm',
                '.html',
                '.mustache',
                '.nunjucks',
                '.php',
                '.tag',
                '.twig',
                '.we',
                '.svelte'
            ]
        ],
        // Enforce indentation rules on script tags
        // https://github.com/BenoitZugmeyer/eslint-plugin-html#htmlindent
        'html/indent': ['warn', '+2']
    }
};
module.exports = config;

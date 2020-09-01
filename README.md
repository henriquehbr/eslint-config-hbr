# ts-node-boilerplate

A fully-structured project structure for writing Node with TypeScript

## Rules

Actually, this project uses the following eslint rules

- `eslint:recommended` - Official set of rules by ESLint
- `eslint-config-airbnb-base` - Airbnb ESLint config without React rules

## Start

In order to get started, just run `yarn` (or npm) to install all the required dependencies to run your application (All the core dependencies are `devDependencies`, avoiding unnecessary code and keeping your bundle size as small as possible)

## Build

Run `yarn build` to lint, transpile, and minify your entire application to production-ready vanilla JavaScript

## Lint

In order to check if your code is properly optimized, formatted and matches ESLint rules, run `yarn lint`, it will scan all files with a `.ts` extension on `src`, and also, will run the TypeScript Compiler (`tsc`) to check for inconsistencies on your code

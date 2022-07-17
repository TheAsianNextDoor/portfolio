# Aaron Scherling Portfolio

- [Aaron Scherling Portfolio](#aaron-scherling-portfolio)
- [Description](#description)
- [Scripts](#scripts)
- [Dev Tools](#dev-tools)
  - [Scss Modules](#scss-modules)
  - [VsCode](#vscode)
- [Technologies](#technologies)

<br>

# Description
This is a website that aims to display the projects and experiments I have built.

<br>

# Scripts

`check-updates` - Checks for updates on all npm modules that don't match the ncurc.json file

`clean` - Removes node_modules and package-lock.json for a clean install

`coverage` - Runs Vitest in coverage mode

`coverage:view` - View the coverage html file for more granular details

`build` - Runs Vitest in build mode and outputs to dist folder

`dev` - Runs Vitest in dev

`fix` - Runs prettier and eslint on repo

`playwright:test` - Runs all playwright files

`playwright:debug-test` - Runs a single playwright file in test mode

`prepare` - Lifecycle hook to prepare husky

`preview` - Builds a production version of app and servers file locally

`test` - Runs Vitest in watch mode

`test:ui` - Opens the Vitest UI test runner (very cool)

<br>

# Dev Tools

## Scss Modules

In order to have type-safe scss modules a `d.ts` file must be made with corresponding types. It would be tedious to create all those files, so a vite plugin does it for us [vite-plugin-sass-dts](https://github.com/activeguild/vite-plugin-sass-dts#readme). To leverage this wonderful plugin simply start the dev server and the plugin will auto create/update the types for you! Happy styling 🎨

## VsCode

`Debug on Chrome` - Launch the project in a chrome instance and allow inline Vscode debugging. This chrome instance's user data profile resides inside this directory - `.vscode/vscode-chrome-debug-userdatadir/`. This ensures a fresh environment to test against and also allows developers to segregate their personal and developer Chrome instance (highly recommend)

`Test and Watch Current File` - Runs Vitest in watch mode on the currently focused file in editor

<br>

# Technologies


| Name              | Website                                           |
| :---------------- | :------------------------------------------------ |
| concurrently      | https://www.npmjs.com/package/concurrently        |
| dotenv            | https://www.npmjs.com/package/dotenv              |
| emotion           | https://emotion.sh                                |
| eslint            | https://eslint.org                                |
| husky             | https://typicode.github.io/husky                  |
| lint staged       | https://github.com/okonet/lint-staged#readme      |
| material-ui       | https://material-ui.com                           |
| msw               | https://mswjs.io                                  |
| ncu               | https://github.com/raineorshine/npm-check-updates |
| playwright        | https://playwright.dev                            |
| prettier          | https://prettier.io                               |
| react             | https://reactjs.org                               |
| react router      | https://reactrouter.com/docs/en/v6                |
| redux toolkit     | https://redux-toolkit.js.org                      |
| sass              | https://sass-lang.com                             |
| styled components | https://styled-components.com                     |
| testing library   | https://testing-library.com                       |
| typescript        | https://www.typescriptlang.org                    |
| vite              | https://vitejs.dev                                |
| vitest            | https://vitest.dev                                |

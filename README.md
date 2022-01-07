# Component Depot
## Contents
- [About this project](#markdown-header-about-this-project)
    - [What are the benefits of using the component depot?](#markdown-header-what-are-the-benefits-of-using-the-component-depot)
    - [Dependencies](#markdown-header-dependencies)
- [Prerequisites](#markdown-header-prerequisites)
- [Installation](#markdown-header-installation)
- [Production build](#markdown-header-production-build)
- [Storybook](#markdown-header-storybook)
- [Usage](#markdown-header-usage)
- [Links](#markdown-header-links)
_____
## About this project
A store of components made up of atoms, molecules, organisms, templates, and pages.
### What are the benefits of using the component depot?
- :ant: Separation of concerns meaning components don't have to know or care about where they live. Each component will have a role to play and will concern itself with only two things. How it looks, and the task it is designed to perform.
- 👮 Having detached components means that they can be tested locally using mock data and catch any problems before anything is committed.
- :book: Using storybook, we can use this repository as a style guide and component documentation to visualize and keep the designs consistent throughout the websites.
- :electric_plug: Components can be themed and plugged into multiple websites and used in the same way saving time in development and testing, also ensuring consistency.
- :arrows_counterclockwise: Using centralized components means that fixing a bug in one place carries the fix to all instances of the component and is tested once.
### Dependencies
- [NodeJs](https://nodejs.org/en/) - Javascript runtime.
- [Yarn](https://yarnpkg.com/) - Package management.
- [Rollup](https://rollupjs.org/guide/en/) - Module bundling.
- [Babel](https://babeljs.io/) - Transcompiling for backwards compatibility.
- [Typescript](https://www.typescriptlang.org/) - for a more robust codebase.
- [Lit-element](https://lit-element.polymer-project.org/) - This allows us to create web components with good browser support coverage.
## Prerequisites
The only prerequisite before install is to have [NodeJs](https://nodejs.org/en/) installed.
>:warning: ***WARNING:*** To run this project, you need to have installed `node v10.15.0` or newer.

>:bulb: ***TIP:*** You can use either [n](https://github.com/tj/n) or [nvm](https://github.com/nvm-sh/nvm) to manage the node version running on your terminal to avoid build failure of your other repositories.
## Installation
To install dependencies, simply run yarn install.
```bash
yarn install
```
## Production build
To generate a build for production simply run yarn build.
```bash
yarn build
```
This will generate three files that will be used in the host repositories;

1. [cjs/index.js](cjs/index.js) - This will be the file used in repositories where common JS is being used, and the component depot will be included using CJS `include` statement.
2. [esm/index.js](esm/index.js) - This will be the file used in repositories where the more commonly used ECMAScript modules are used, and the component depot will be imported using an `import` statement.
3. [babel-polyfills-nomodule.js](babel-polyfills-nomodule.js) - This will include the `regenerator-runtime` polyfill for **cjs** projects.
## Storybook
To start storybook run;
```bash
yarn storybook
```
## Usage
To use this in the repository, you must first install the package using `yarn` or `npm` (whichever your repository is using).
>‼️ **TODO**: Update this to include version numbers or branch names depending on which direction we choose to go.

### Install using `yarn`
```bash
yarn add git+https://basemj@bitbucket.org/basemj/component-depot.git
```
### Install using `npm`
```bash
npm install git+https://basemj@bitbucket.org/basemj/component-depot.git
```
### Including using CJS
When using CJS, you would want to include the polyfill at the earliest point of entry in the Javascript.
```bash
require('component-depot/babel-polyfills-nomodule');
```
Now you can include the component depot at a global level or individual components from the component depot at a localised level if you like using the following.

In both cases, you need to run the functions within in order to define the elements. Here I will show examples using the [`processInclude`](https://bitbucket.org/essiloronline/commerce-cloud-sfra/src/master/cartridges/app_storefront_base/cartridge/client/default/js/util.js) function available to us on the `commerce-cloud` repository.
>‼️ **TODO**: Create built-in method to remove connection to commerce-cloud

```javascript
// Global level include
var componentDepot = require('component-depot/cjs');
processInclude(componentDepot);

// Local level include with processInclude
var { cdButton, cdListNav } = require('component-depot/cjs');
processInclude(cdButton);
processInclude(cdListNav);

// Local level include without processInclude
var { cdButton, cdListNav } = require('component-depot/cjs');
cdListNav();
cdButton();
```
### Inserting component in HTML
To insert a component in the `HTML` or `ISML`, you need to follow the documentation for each component. As an example, you will add a button component like this;
```html
<cd-button label="click here"></cd-button>
```
>:warning: ***WARNING:*** custom elements cannot be self closing or void. You **MUST** always include a closing tag.
## Links
- [JIRA Issues](https://essiloronline.atlassian.net/browse/CD)

---
# TBC

- [ ] Running tests
- [ ] Documentation
- [ ] Usage
- [ ] Docker development env
- [ ] Common questions

# TypeScript, Webpack and React starter pack

This repository contains starter project for working with TypeScript, Webpack and React in Visual Studio Code.
It is meant to be basic setup required to start writing React components, not a full blown solution for your project.
By default it has standard React and Redux libraries installed as dependencies. You can safely remove or change any of them.
For development purposes it uses [Webpack](http://webpack.github.io/) to bundle everything together and express to serve files.
It also contains configuration for [Visual Studio Code](https://code.visualstudio.com/) like npm tasks, debugging and editor config.

## Features

* TypeScript environment and transpilation setup with Webpack and Typings
* React and co. installed
* Hot Module Reload (HMR)
* TSLint, minimal ESLint (for tools)
* VS Code tasks to run common npm commands and starting app server
* VS Code launch configurations to open or attach to Chrome for built-in debugging
* Editor configuration
* Code in `src` folder, tools in `tools` folder, output in `dist` folder

## Prerequisites

I assume that you have Node.js installed globally on your machine.
Additionally you'll need to have [TypeScript](https://www.typescriptlang.org/) and [typings](https://github.com/typings/typings) installed globally (`npm install -g typescript typings`).
For debugging it uses Chrome and [vscode-chrome-debug](https://github.com/Microsoft/vscode-chrome-debug) (check the link to see how to set up Chrome).
You'll also need some VS Code plugins for better experience and debugging support:
* [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
* [TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)
* [debugger-for-chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)

## Installation

Clone the repository:
```
git clone https://github.com/bartsokol/typescript-webpack-react-starter
```
Next, install required packages and typings:
```
cd typescript-webpack-react-starter
npm install
typings install
```
Also make sure that you have remote debugging enabled in Chrome - run Chrome with extra parameter:
```
--remote-debugging-port=9222
```
If you open VS Code now you should be able to start working:
```
code .
```
Voila! You can remove Git related directiories and README/LICENCE files and start working on your project!

## Starting and debugging

* You need to start webpack/express server first - you can do it from command line by running `npm run start` or selecting `start` task from tasks in command pallete (Tasks: Run Task - I recommend you setting up key binding for it).
* Depending on selected configuration in VS Code you can launch or attach to your application by hitting `F5`.
* You can now set up breakpoint and inspect code in VS Code when breakpoint is hit. Yeah!

## Inspiration and links

This code was highly inspired and also uses portions of code from multiple great sources:
* [react-slingshot](https://github.com/coryhouse/react-slingshot/) by Cory House (and his excellent Pluralsight course)
* Willson Mock has written [excellent starter article posted on Medium](https://medium.com/@fay_jai/getting-started-with-reactjs-typescript-and-webpack-95dcaa0ed33c#.93y4uppbp)
* [Using React and Webpack](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html) from TypeScript site
* [TypeScript support in Visual Studio Code](https://code.visualstudio.com/docs/languages/typescript)
* [Debugging in Visual Studio Code](https://code.visualstudio.com/docs/editor/debugging)

## Plans for future

* Add support for production builds
* Add testing support
* Add easy way to bundle styles and other files

## Found bug or have any suggestions?

Browse [open issues](https://github.com/bartsokol/typescript-webpack-react-starter/issues) or [open new issue](https://github.com/bartsokol/typescript-webpack-react-starter/issues/new).
Also feel free to send [pull requests](https://github.com/bartsokol/typescript-webpack-react-starter/pulls) if you have some cool features to add or some bug fixes.

## Licence

This code is released as is, under MIT licence. Feel free to use it for free for both commercial and private projects. No warranty provided.

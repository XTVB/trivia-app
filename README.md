# Trivia App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to run:

Requirements:
* Node v16.13.2

Optionally:
* yarn 1.22.17
* docker 20.10.12

### Run as dev

* First install dependencies using either `npm install` or `yarn` in the terminal
* Once dependencies have been installed run either `npm start` or `yarn start`
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
   The page will reload if you make edits.<br />
   You will also see any lint errors in the console.

### Run as prod

* Run `docker compose up --build` and wait for container to be built and run
   Open [http://localhost:80](http://localhost:80) to view it in the browser.

### Run tests

* Ensure dependencies are installed like when running Dev
* Run either `npm test` or `yarn test` to launch the test runner in the interactive watch mode.
   See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Environments
Environment variables can be set in the environments directory. They are accessible through `process.env.REACT_APP_<VARIABLE-NAME>`. Npm start will automatically load the dev environment and Npm build will automatically load the prod environment, you can change this by editing the package.json scripts to point to different files.

## Additional features

In addition to the specification the following functionality has been implemented:

* Configure page to allow you to run different quiz setups (categories, number of questions, difficulty, type)
* History of past results, stored in localStorage, reachable through an icon in the Top Menu
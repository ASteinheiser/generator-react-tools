# generator-react-tools
[Yeoman](http://yeoman.io) generator for [React.js](https://reactjs.org/) and [React Native](https://facebook.github.io/react-native/) components.

# Usage
## Install
```
npm install -g yo generator-react-tools
```
## Create React.js component
```
yo react-tools
```
## Create React Native component
```
yo react-tools:native
```

# Features
- Tests with [Jest](https://jestjs.io/) and [Enzyme](https://github.com/airbnb/enzyme)
- package.json for cleaner import
- Ready to style with [CSS](https://css-tricks.com/almanac/)

# Component Structure
```
└───component-name
  ├───component-name.css
  ├───component-name.js
  ├───component-name.test.js
  └───package.json
```

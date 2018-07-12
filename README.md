# generator-react-tools
[Yeoman](http://yeoman.io) generator for [React.js](https://reactjs.org/) and [React Native](https://facebook.github.io/react-native/) components.

# Usage
## Install
```
npm install -g yo generator-react-tools

yo react-tools --help
```
## Create React.js component
```
yo react-tools
```
## Create React Native component
```
yo react-tools:native
```
## Options
```
--dumb  // creates a component with no state
--camel // camelCases the file names
```

# Features
## Libraries, etc.
- Tests with [Jest](https://jestjs.io/) and [Enzyme](https://github.com/airbnb/enzyme)
- React.js styling with [CSS](https://css-tricks.com/almanac/) file
- React Native styling with [styled-components/native](https://github.com/styled-components/styled-components)
- package.json for cleaner import

## React Component Structure
```
└───component-name
  ├───component-name.css
  ├───component-name.js
  ├───component-name.test.js
  └───package.json
```

## React Native Component Structure
```
└───component-name
  ├───component-name.js
  ├───component-name.test.js
  └───package.json
```

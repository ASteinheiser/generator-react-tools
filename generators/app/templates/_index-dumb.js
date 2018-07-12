import React, { Component } from 'react';

import './<%= componentName %>.css';

export default class <%= componentNameCamel %> extends Component {
  render() {
    return (
      <div>
        {'<%= componentName %>'}
      </div>
    );
  }
}

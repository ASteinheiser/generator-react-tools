import React, { Component } from 'react';

import './<%= componentName %>.css';

export default class <%= componentNameCamel %> extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false
    };
  }

  componentWillMount() {
    // do something
  }

  render() {
    return (
      <div>
        {'<%= componentName %>'}
      </div>
    );
  }
}

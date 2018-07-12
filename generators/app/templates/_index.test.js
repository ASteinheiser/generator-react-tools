import React from 'react';

import <%= componentNameCamel %> from './<%= componentName %>.js';

describe('<%= componentName %> tests ->', () => {
  test('renders a <%= componentName %>', () => {
    const component = shallow(
      <<%= componentNameCamel %> />
    );
    expect(component).toMatchSnapshot();
  });
});

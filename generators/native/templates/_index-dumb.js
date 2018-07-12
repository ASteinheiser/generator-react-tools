import React, { Component } from 'react';
import { View, Text }       from 'react-native';
import styled               from 'styled-components/native';

export default class <%= componentNameCamel %> extends Component {
  render() {
    return (
      <StyledView>
        <StyledText>
          {'<%= componentName %>'}
        </StyledText>
      </StyledView>
    );
  }
}

const StyledView = styled.Text`
  flex: 1;
`

const StyledText = styled.Text`
  font-size: 14px;
`

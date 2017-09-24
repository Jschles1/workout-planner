import React from 'react';

export default class FormError extends React.PureComponent {
  render() {
    const errorStyles = { color: 'red' }
    return(
      <p style={errorStyles}>Error: All inputs must be filled.</p>
    );
  }
}
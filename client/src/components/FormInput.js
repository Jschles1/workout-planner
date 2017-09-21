import React from 'react';
import { Form, Label, Input } from 'semantic-ui-react';

export default class FormInput extends React.PureComponent {
  render() {
    const { labelName, inputName, inputType, inputValue, inputSize, inputPlaceholder, updateField } = this.props;
    return(
      <Form.Field>
        <Label color="black" pointing="below">{labelName}</Label>
        <Input 
          value={inputValue} 
          size={inputSize} 
          type={inputType}
          name={inputName} 
          onChange={updateField} 
          placeholder={inputPlaceholder}
        />
      </Form.Field>
    );
  }
}
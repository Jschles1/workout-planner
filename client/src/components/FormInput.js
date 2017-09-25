import React from 'react';
import { Form, Label, Input } from 'semantic-ui-react';

// Stateless Component
const FormInput = (props) => {
  const { labelName, inputName, inputType, inputValue, inputSize, inputPlaceholder, updateField } = props;
  return(
    <Form.Field>
      <label>{labelName}</label>
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

export default FormInput;
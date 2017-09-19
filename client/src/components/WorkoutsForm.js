import React from 'react';
import { Form, Button } from 'semantic-ui-react';

export default class WorkoutsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      workoutType: ''
    }
  }

  handleOnChange(event) {
    const { name, value } = event.target; 
    this.setState({
      [name]: value
    })
  }

  render() {
    return(
      <div>
        <h1>Create a New Workout:</h1>
        <Form>
          <Form.Field>
            <label>Workout Title:</label>
            <input name="title" onChange={(event) => this.handleOnChange(event)} placeholder="Workout Title"/>
          </Form.Field>
          <Form.Field>
            <label>Workout Type:</label>
            <input name="workoutType" onChange={(event) => this.handleOnChange(event)} placeholder="Workout Type"/>
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/workoutActions';
import { bindActionCreators } from 'redux';
import { Form, Button, Label, Icon } from 'semantic-ui-react';

class ExerciseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      reps: '',
      sets: '',
      rest_period: ''
    }
  }

  render() {
    return(
      <div>
        <h3>Add an Exercise to this Workout:</h3>
        <Form>
          <Form.Field>
            <Label color="blue" pointing="below">Name:</Label>
            <input name="name" onChange={(event) => this.handleOnChange(event)} placeholder="Name"/>
          </Form.Field>
          <Form.Field>
            <Label color="blue" pointing="below">Repetitions:</Label>
            <input name="reps" onChange={(event) => this.handleOnChange(event)} placeholder="Repetitions"/>
          </Form.Field>
          <Form.Field>
            <Label color="blue" pointing="below">Number Of Sets:</Label>
            <input name="sets" onChange={(event) => this.handleOnChange(event)} placeholder="Number Of Sets"/>
          </Form.Field>
          <Form.Field>
            <Label color="blue" pointing="below">Rest Period Between Sets:</Label>
            <input name="rest_period" onChange={(event) => this.handleOnChange(event)} placeholder="Rest Period Between Sets"/>
          </Form.Field>
          <Button color="blue" content="Submit" type="submit" icon="right arrow" labelPosition="right"/>
        </Form>
      </div>
    );
  }
}
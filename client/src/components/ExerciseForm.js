import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/exerciseActions';
import { bindActionCreators } from 'redux';
import { Form, Button, Label, Icon, Input } from 'semantic-ui-react';

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

  handleOnChange(event) {
    const { name, value } = event.target; 
    this.setState({
      [name]: value
    })
  }

  handleOnSubmit(event) {
    console.log(this.state)
    event.preventDefault();
    this.props.actions.submitNewExercise(this.state, this.props.workoutId, this.props.history);
    this.setState({
      name: '',
      reps: '',
      sets: '',
      rest_period: ''
    });
  }

  render() {
    return(
      <div>
        <h3>Add an Exercise to this Workout:</h3>
        <Form size="mini" onSubmit={(event) => this.handleOnSubmit(event)}>
          <Form.Field>
            <Label color="black" pointing="below">Name:</Label>
            <Input size="small" name="name" onChange={(event) => this.handleOnChange(event)} placeholder="Name"/>
          </Form.Field>
          <Form.Field>
            <Label color="black" pointing="below">Repetitions:</Label>
            <Input  size="small" name="reps" type="number" onChange={(event) => this.handleOnChange(event)} placeholder="Repetitions"/>
          </Form.Field>
          <Form.Field>
            <Label color="black" pointing="below">Number Of Sets:</Label>
            <Input size="small" name="sets" type="number" onChange={(event) => this.handleOnChange(event)} placeholder="Number Of Sets"/>
          </Form.Field>
          <Form.Field>
            <Label color="black" pointing="below">Rest Period Between Sets:</Label>
            <Input size="small" name="rest_period" type="number" onChange={(event) => this.handleOnChange(event)} placeholder="Rest Period Between Sets"/>
          </Form.Field>
          <Button color="black" content="Submit" type="submit" icon="right arrow" labelPosition="right"/>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { exercises: state.exercises }
}

const mapDispactchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispactchToProps)(ExerciseForm);
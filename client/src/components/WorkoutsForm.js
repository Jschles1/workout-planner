import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/workoutActions';
import { bindActionCreators } from 'redux';
import { Form, Button, Label, Icon } from 'semantic-ui-react';

class WorkoutsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      workout_type: ''
    }
  }

  handleOnChange(event) {
    const { name, value } = event.target; 
    this.setState({
      [name]: value
    })
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.actions.submitNewWorkout(this.state, this.props.history);
    this.setState({
      title: '',
      workout_type: ''
    });
  }

  render() {
    return(
      <div>
        <h1>Create a New Workout:</h1>
        <Form onSubmit={(event) => this.handleOnSubmit(event)}>
          <Form.Field>
            <Label color="blue" pointing="below">Workout Title:</Label>
            <input name="title" onChange={(event) => this.handleOnChange(event)} placeholder="Workout Title"/>
          </Form.Field>
          <Form.Field>
            <Label color="blue" pointing="below">Workout Type:</Label>
            <input name="workout_type" onChange={(event) => this.handleOnChange(event)} placeholder="Workout Type"/>
          </Form.Field>
          <Button color="blue" content="Submit" type="submit" icon="right arrow" labelPosition="right"/>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { workouts: state.workouts }
}

const mapDispactchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispactchToProps)(WorkoutsForm);
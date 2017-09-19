import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/workoutActions';
import { bindActionCreators } from 'redux';
import { Form, Button } from 'semantic-ui-react';

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
            <input name="workout_type" onChange={(event) => this.handleOnChange(event)} placeholder="Workout Type"/>
          </Form.Field>
          <Button type="submit">Submit</Button>
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
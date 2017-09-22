import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/workoutActions';
import { bindActionCreators } from 'redux';
import { Form, Button, Label, Icon, Input, Segment } from 'semantic-ui-react';
import FormInput from './FormInput';

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
    const formStyles = {
      maxWidth: 450
    }
    
    return(
      <Segment style={formStyles} raised>
        <h1>Create a New Workout:</h1>
        <Form onSubmit={(event) => this.handleOnSubmit(event)}>
          <FormInput 
            labelName="Workout Title:" 
            inputValue={this.state.title} 
            inputSize="medium" 
            inputType="text"
            inputName="title" 
            inputPlaceholder="Workout Title" 
            updateField={(event) => this.handleOnChange(event)}
          />
          <FormInput 
            labelName="Workout Type:" 
            inputValue={this.state.workout_type} 
            inputSize="medium" 
            inputType="text"
            inputName="workout_type" 
            inputPlaceholder="Workout Type" 
            updateField={(event) => this.handleOnChange(event)}
          />
          <Button color="black" content="Submit" type="submit" icon="right arrow" labelPosition="right"/>
        </Form>
      </Segment>
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
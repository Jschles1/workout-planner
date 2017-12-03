import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/workoutActions';
import { bindActionCreators } from 'redux';
import { Form, Button, Segment } from 'semantic-ui-react';
import FormInput from '../FormInput';
import FormError from '../FormError';

class WorkoutsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      workout_type: ''
    }
  }

  // Updates state of component when new input is entered
  handleOnChange = (event) => {
    const { name, value } = event.target; 
    this.setState({
      [name]: value
    })
  }

  // Invokes submitNewWorkout action creator
  handleOnSubmit = (event) => {
    this.props.actions.submitNewWorkout(this.state, this.props.history);
  }

  render() {
    const formStyles = {
      maxWidth: 450
    }
    
    return(
      <Segment style={formStyles} raised>
        <h1>Create a New Workout:</h1>
        {this.props.errors === true ? <FormError/> : null}
        <Form onSubmit={this.handleOnSubmit}>
          <FormInput 
            labelName="Workout Title:" 
            inputValue={this.state.title} 
            inputSize="medium" 
            inputType="text"
            inputName="title" 
            inputPlaceholder="Workout Title" 
            updateField={this.handleOnChange}
          />
          <FormInput 
            labelName="Workout Type:" 
            inputValue={this.state.workout_type} 
            inputSize="medium" 
            inputType="text"
            inputName="workout_type" 
            inputPlaceholder="Workout Type" 
            updateField={this.handleOnChange}
          />
          <Button fluid color="black" content="Submit" type="submit" icon="right arrow" labelPosition="right"/>
        </Form>
      </Segment>
    );
  }
}

const mapStateToProps = (state) => {
  return { workouts: state.workouts, errors: state.errors }
}

// Provides action creators as props to WorkoutsForm
const mapDispactchToProps = (dispatch) => {
  // Allows us to dispatch actions to the store
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispactchToProps)(WorkoutsForm);
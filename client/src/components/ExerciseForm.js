import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/exerciseActions';
import { bindActionCreators } from 'redux';
import { Form, Button, Segment } from 'semantic-ui-react';
import FormInput from './FormInput';
import FormError from './FormError';

class ExerciseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      reps: '',
      sets: '',
      rest_period: '',
      error: false
    }
  }

  handleOnChange = (event) => {
    const { name, value } = event.target; 
    this.setState({
      [name]: value
    })
  }

  handleOnSubmit = (event) => {
    console.log(this.state)
    event.preventDefault();
    this.props.actions.submitNewExercise(this.state, this.props.workoutId, (() => {
      this.setState({
        error: true
      });
    }));
    this.setState({
      name: '',
      reps: '',
      sets: '',
      rest_period: '',
      error: false
    });
  }

  render() {
    const formStyles = {
      maxWidth: 400,
      margin: 20
    }

    return(
      <Segment style={formStyles} raised>
        <h3>Add an Exercise to this Workout:</h3>
        {this.state.error === true ? <FormError/> : null}
        <Form size="mini" onSubmit={(event) => this.handleOnSubmit(event)}>
          <FormInput 
            labelName="Name:" 
            inputValue={this.state.name} 
            inputSize="small" 
            inputType="text"
            inputName="name" 
            inputPlaceholder="Name" 
            updateField={(event) => this.handleOnChange(event)}
          />
          <FormInput 
            labelName="Repetitions:" 
            inputValue={this.state.reps} 
            inputSize="small" 
            inputType="number"
            inputName="reps" 
            inputPlaceholder="Repetitions" 
            updateField={(event) => this.handleOnChange(event)}
          />
          <FormInput 
            labelName="Number Of Sets:" 
            inputValue={this.state.sets} 
            inputSize="small" 
            inputType="number"
            inputName="sets" 
            inputPlaceholder="Number Of Sets" 
            updateField={(event) => this.handleOnChange(event)}
          />
          <FormInput 
            labelName="Rest Period Between Sets:" 
            inputValue={this.state.rest_period} 
            inputSize="small" 
            inputType="number"
            inputName="rest_period" 
            inputPlaceholder="Rest Period Between Sets" 
            updateField={(event) => this.handleOnChange(event)}
          />
          <Button fluid color="black" content="Submit" type="submit" icon="right arrow" labelPosition="right"/>
        </Form>
      </Segment>
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
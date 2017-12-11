import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/exerciseActions';
import { bindActionCreators } from 'redux';
import { Form, Button, Segment } from 'semantic-ui-react';
import FormInput from '../FormInput';
import FormError from '../FormError';

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

  handleOnChange = (event) => {
    const { name, value } = event.target; 
    this.setState({
      [name]: value
    })
  }

  handleOnSubmit = (event) => {
    this.props.actions.submitNewExercise(this.state, this.props.workoutId);
    this.setState({
      name: '',
      reps: '',
      sets: '',
      rest_period: ''
    });
  }

  render() {
    return(
      <Segment style={{margin: "20px"}} raised>
        <h3 style={{textAlign: "center"}}>Add an Exercise to this Workout:</h3>
        {this.props.errors === true ? <FormError /> : null}
        <Form size="mini" onSubmit={this.handleOnSubmit}>
          <Form.Group widths="equal">
            <FormInput 
              labelName="Name:" 
              inputValue={this.state.name} 
              inputSize="small" 
              inputType="text"
              inputName="name" 
              inputPlaceholder="Name" 
              updateField={this.handleOnChange}
            />
            <FormInput 
              labelName="Repetitions:" 
              inputValue={this.state.reps} 
              inputSize="small" 
              inputType="number"
              inputName="reps" 
              inputPlaceholder="Repetitions" 
              updateField={this.handleOnChange}
            />
            <FormInput 
              labelName="Number Of Sets:" 
              inputValue={this.state.sets} 
              inputSize="small" 
              inputType="number"
              inputName="sets" 
              inputPlaceholder="Number Of Sets" 
              updateField={this.handleOnChange}
            />
            <FormInput 
              labelName="Rest Period Between Sets:" 
              inputValue={this.state.rest_period} 
              inputSize="small" 
              inputType="number"
              inputName="rest_period" 
              inputPlaceholder="Rest Period Between Sets" 
              updateField={this.handleOnChange}
            />
          </Form.Group>
          <Button fluid color="black" content="Submit" type="submit" icon="right arrow" labelPosition="right" />
        </Form>
      </Segment>
    );
  }
}

const mapStateToProps = (state) => {
  return { exercises: state.exercises, errors: state.errors }
}

const mapDispactchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispactchToProps)(ExerciseForm);
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
      <div></div>
    );
  }
}
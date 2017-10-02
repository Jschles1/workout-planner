import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/exerciseActions';
import { bindActionCreators } from 'redux';
import ExerciseForm from './ExerciseForm';
import ExerciseList from '../ExerciseList';

// Container Component
class WorkoutShow extends React.Component {

  componentDidMount() {
    this.props.actions.fetchExercises(this.props.workout.id);
  }

  handleDeleteClick = (event) => {
    const id = (event.target.id)
    this.props.actions.deleteExercise(this.props.workout.id, id);
  }

  render() {
    return(
      <div>
        <h1>{this.props.workout.title}</h1>
        <ExerciseList 
          exercises={this.props.exercises} 
          workoutId={this.props.workout.id} 
          deleteExercise={(event) => this.handleDeleteClick(event)}
        />
        <ExerciseForm workoutId={this.props.workout.id}/>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const workout = state.workouts.find(workout => workout.id === parseInt(ownProps.match.params.workoutId), 10);
  
  if (workout) {
    return { workout: workout, exercises: state.exercises }
  } else {
    return { workout: {} }
  }
}

const mapDispactchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispactchToProps)(WorkoutShow);
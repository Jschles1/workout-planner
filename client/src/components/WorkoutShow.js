import React from 'react';
import { connect } from 'react-redux';
import ExerciseForm from './ExerciseForm';

class WorkoutShow extends React.Component {
  render() {
    return(
      <div>
        <h1>{this.props.workout.title}</h1>
        <ExerciseForm workoutId={this.props.workout.id}/>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const workout = state.workouts.find(workout => workout.id === parseInt(ownProps.match.params.workoutId), 10);
  
  if (workout) {
    return { workout: workout }
  } else {
    return { workout: {} }
  }
}

export default connect(mapStateToProps, {})(WorkoutShow);
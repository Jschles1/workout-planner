import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/workoutActions';
import { bindActionCreators } from 'redux';
import WorkoutsList from '../WorkoutsList'

// Container Component
class WorkoutsPage extends React.Component {

  componentDidMount() {
    this.props.actions.fetchWorkouts();
  }

  // Invokes deleteWorkout action creator
  handleDeleteClick = (event) => {
    const id = event.target.id
    this.props.actions.deleteWorkout(id);
  }
  
  render() {
    return(
      <div>
        <WorkoutsList workouts={this.props.workouts} deleteWorkout={this.handleDeleteClick} />
      </div>
    );
  }
}

// Provides workouts in redux state as workouts props
const mapStateToProps = (state) => {
  return { workouts: state.workouts };
}

// Provides imported action creators as props
const mapDispactchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispactchToProps)(WorkoutsPage);
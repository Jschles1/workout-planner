import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/workoutActions';
import { bindActionCreators } from 'redux';
import WorkoutsList from './WorkoutsList'
// Responsible for connecting to our store and loading our list of workouts
// Note: Remember, containers are components that are directly connected to the store via the connect function.
class WorkoutsPage extends React.Component {

  componentDidMount() {
    this.props.actions.fetchWorkouts();
  }
  
  render() {
    return(
      <div>
        <WorkoutsList workouts={this.props.workouts} deleteWorkout={this.props.actions.deleteWorkout}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { workouts: state.workouts };
}

const mapDispactchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispactchToProps)(WorkoutsPage);
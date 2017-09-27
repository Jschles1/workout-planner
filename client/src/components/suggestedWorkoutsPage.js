import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/workoutActions';
import { bindActionCreators } from 'redux';
import suggestedWorkoutsList from './suggestedWorkoutsList'

class suggestedWorkoutsPage extends React.Component {

  componentDidMount() {
    // this.props.actions.fetchSuggestedWorkouts()
  }

  handleAddToWorkoutList = (event) => {

  }

  return() {
    <div>
      <suggestedWorkoutsList workouts={this.props.workouts} addWorkout={(event) => this.handleAddToWorkoutList(event)}/>
    </div>
  }
}

const mapStateToProps = (state) => {
  return { workouts: state.workouts };
}

const mapDispactchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispactchToProps)(suggestedWorkoutsPage);
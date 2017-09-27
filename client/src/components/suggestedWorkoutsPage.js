import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/workoutActions';
import { bindActionCreators } from 'redux';

class suggestedWorkoutsPage extends React.Component {
  return() {
    <div></div>
  }
}

const mapStateToProps = (state) => {
  return { workouts: state.workouts };
}

const mapDispactchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispactchToProps)(WorkoutsPage);
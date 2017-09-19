import React from 'react';
import { connect } from 'react-redux';
import WorkoutsList from './WorkoutsList'
// Responsible for connecting to our store and loading our list of workouts
class WorkoutsPage extends React.Component {
  render() {
    return(
      <div>
        <WorkoutsList workouts={this.props.workouts}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { workouts: state.workouts };
}

export default connect(mapStateToProps)(WorkoutsPage);
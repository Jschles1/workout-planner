import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/workoutActions';
import { bindActionCreators } from 'redux';
import SuggestedWorkoutsList from '../SuggestedWorkoutsList'

class SuggestedWorkoutsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addedWorkout: ''
    }
  }

  componentDidMount() {
    this.props.actions.fetchWorkouts()
  }

  handleAddToWorkoutList = (event) => {
    const id = event.target.id;
    const title = event.target.value;
    this.props.actions.addSuggestedWorkout(id, this.props.actions.fetchWorkouts(), (() => {
      this.setState({
        addedWorkout: title
      });
    }));
  }

  render() {
    return(
      <div>
        <SuggestedWorkoutsList 
          workouts={this.props.workouts} 
          addWorkout={this.handleAddToWorkoutList} 
          addedWorkout={this.state.addedWorkout}
        />
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

export default connect(mapStateToProps, mapDispactchToProps)(SuggestedWorkoutsPage);
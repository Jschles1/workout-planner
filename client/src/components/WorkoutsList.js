import React from 'react';
import { Link } from 'react-router-dom';
import { List, Button } from 'semantic-ui-react';

export default class WorkoutsList extends React.Component {
  render() {
    const renderWorkouts = this.props.workouts.map(workout => {
      return(
        <List.Item key={workout.id}>
          {workout.title}
        </List.Item>
      );
    })

    return(
      <div>
        <h1>Workouts:</h1>
        <List size="massive">
          {(this.props.workouts) ? renderWorkouts : null}
        </List>
      </div>
    );
  }
}
import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Button, Icon } from 'semantic-ui-react';

export default class WorkoutsList extends React.Component {
  render() {
    const renderWorkouts = this.props.workouts.map(workout => {
      return(
        <Table.Row key={workout.id}>
          <Table.Cell>{workout.title}</Table.Cell>
          <Table.Cell>{workout.workout_type}</Table.Cell>
          <Table.Cell>
            <Button content="View Workout" color="green" icon="right arrow" labelPosition="right"/>
          </Table.Cell>
          <Table.Cell>
            <Button content="Delete Workout" color="red" icon="remove" labelPosition="right"/>
          </Table.Cell>
        </Table.Row>
      );
    })

    return(
      <div>
        <h1>Workouts:</h1>
        <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Title:</Table.HeaderCell>
                <Table.HeaderCell>Type:</Table.HeaderCell>
                <Table.HeaderCell colSpan="2">Options:</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {(this.props.workouts) ? renderWorkouts : null}
            </Table.Body>
        </Table>
      </div>
    );
  }
}
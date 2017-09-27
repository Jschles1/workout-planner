import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Button, Icon } from 'semantic-ui-react';

const SuggestedWorkoutsList = (props) => {
  const { addWorkout, workouts } = props;

  const renderSuggestedWorkouts = workouts.map(workout => {
    return(
      <Table.Row key={workout.id}>
        <Table.Cell>{workout.title}</Table.Cell>
        <Table.Cell>{workout.workout_type}</Table.Cell>
        <Table.Cell>
          <Button fluid as={Link} to={`/workouts/${workout.id}`} content="View Workout" color="green" icon="right arrow" labelPosition="right"/>
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
              <Table.HeaderCell>Options:</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {(workouts) ? renderSuggestedWorkouts : null}
          </Table.Body>
      </Table>
    </div>
  );
}

export default SuggestedWorkoutsList;
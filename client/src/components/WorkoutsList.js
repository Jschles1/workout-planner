import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Button, Icon } from 'semantic-ui-react';

// Stateless Component
const WorkoutsList = (props) => {
  const { deleteWorkout, workouts } = props;
  
  // Renders each workout in a table row format
  const renderWorkouts = workouts.map(workout => {
    return(
      <Table.Row key={workout.id}>
        <Table.Cell>{workout.title}</Table.Cell>
        <Table.Cell>{workout.workout_type}</Table.Cell>
        <Table.Cell>
          <Button fluid as={Link} to={`/workouts/${workout.id}`} content="View Workout Exercises" color="green" icon="right arrow" labelPosition="right" />
        </Table.Cell>
        <Table.Cell>
          <Button fluid id={workout.id} onClick={deleteWorkout} content="Delete Workout" color="red" />
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
            <Table.HeaderCell colSpan="2" style={{textAlign: "center"}}>Options:</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {(workouts) ? renderWorkouts : null}
        </Table.Body>
      </Table>
    </div>
  );
}

export default WorkoutsList;
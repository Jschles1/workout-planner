import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Button, Icon } from 'semantic-ui-react';

const suggestedWorkoutsList = (props) => {
  const { addWorkout, workouts } = props;



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
            {(workouts) ? renderWorkouts : null}
          </Table.Body>
      </Table>
    </div>
  );
}
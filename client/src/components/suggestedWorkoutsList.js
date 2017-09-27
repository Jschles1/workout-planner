import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Button, Icon, Message } from 'semantic-ui-react';

const SuggestedWorkoutsList = (props) => {
  const { addWorkout, addedWorkout, workouts } = props;

  const renderSuggestedWorkouts = workouts.map(workout => {
    return(
      <Table.Row key={workout.id}>
        <Table.Cell><a href={workout.info_url} target="_blank">{workout.title}</a></Table.Cell>
        <Table.Cell>{workout.workout_type}</Table.Cell>
        <Table.Cell>
          <Button fluid id={workout.id} value={workout.title} onClick={addWorkout} content="Add To Workouts List" color="green" icon="right arrow" labelPosition="right"/>
        </Table.Cell>
      </Table.Row>
    );
  })

  
  return(
    <div>
      {(addedWorkout !== '') ? <Message>{addedWorkout} has been added to your Workouts List!</Message> : null}
      <h1>Suggested Workouts:</h1>
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
import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Button, Icon } from 'semantic-ui-react';

// Stateless Component
const ExerciseList = (props) => {
  const { exercises, workoutId, deleteExercise } = props;

  // Renders each exercise in a table row format
  const renderExercises = exercises.map(exercise => {
    return(
      <Table.Row key={exercise.id}>
        <Table.Cell>{exercise.name}</Table.Cell>
        <Table.Cell>{exercise.reps}</Table.Cell>
        <Table.Cell>{exercise.sets}</Table.Cell>
        <Table.Cell>{exercise.rest_period}</Table.Cell>
        <Table.Cell>
          <Button fluid id={exercise.id} onClick={deleteExercise} content="Delete Exercise" color="red"/>
        </Table.Cell>
      </Table.Row>
    );
  })

  return(
    <div>
      <h3>Exercises:</h3>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name:</Table.HeaderCell>
            <Table.HeaderCell>Repetitions:</Table.HeaderCell>
            <Table.HeaderCell>Number Of Sets:</Table.HeaderCell>
            <Table.HeaderCell>Rest Period:</Table.HeaderCell>
            <Table.HeaderCell>Delete:</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {(exercises) ? renderExercises : null}
        </Table.Body>
      </Table>
    </div>
  );
}

export default ExerciseList;
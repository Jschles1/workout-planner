import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Button, Icon } from 'semantic-ui-react';

export default class ExerciseList extends React.Component {
  // Not rerendering b/c this isn't connected to store
  handleDeleteClick(event) {
    const id = (event.target.id)
    console.log(event.target)
    this.props.deleteExercise(this.props.workoutId, id, this.props.fetch(this.props.workoutId));
  }

  render() {
    const renderExercises = this.props.exercises.map(exercise => {
      return(
        <Table.Row key={exercise.id}>
          <Table.Cell>{exercise.name}</Table.Cell>
          <Table.Cell>{exercise.reps}</Table.Cell>
          <Table.Cell>{exercise.sets}</Table.Cell>
          <Table.Cell>{exercise.rest_period}</Table.Cell>
          <Table.Cell>
            <Button fluid id={exercise.id} onClick={(event) => this.handleDeleteClick(event)} content="Delete Exercise" color="red"/>
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
              {(this.props.exercises) ? renderExercises : null}
            </Table.Body>
        </Table>
      </div>
    );
  }
}
import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Button, Icon } from 'semantic-ui-react';

export default class ExerciseList extends React.Component {
  render() {
    const renderExercises = this.props.exercises.map(exercise => {
      return(
        <p>{exercise.name}</p>
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
                <Table.HeaderCell>Number Of Sets:</Table.HeaderCell>
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
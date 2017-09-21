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
        {(this.props.exercises) ? renderExercises : null}
      </div>
    );
  }
}
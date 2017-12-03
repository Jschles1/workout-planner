import fetch from 'isomorphic-fetch';

// Retrieves exercises nested index resource from Rails API
export function fetchExercises(workoutId) {
  return function(dispatch) {
    dispatch({type: 'LOADING_EXERCISES'})
    return fetch(`/api/workouts/${workoutId}/exercises`)
      .then(resp => resp.json())
      // Dispatches JSON response containing exercises to store
      .then(exercises => dispatch({type: 'FETCH_EXERCISES', payload: exercises}))
  }
}

// Submits exercise data to Rails API which persists to the db
export function submitNewExercise(data, workoutId) {
  return function(dispatch) {
    return fetch(`/api/workouts/${workoutId}/exercises`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(handleErrors)
      .then(resp => {
        return resp.json();
      })
      .then(exercise => {
        // Dispatch action that adds JSON response to store
        dispatch({type: 'ADD_EXERCISE', payload: exercise});
      })
    .catch((error) => {
      // Dispatch error to store if validation fails
      dispatch({type: 'ERROR'})
    })
  }
}

// Deletes selected exercise from db
export function deleteExercise(workoutId, id) {
  return function(dispatch) {
    return fetch(`/api/workouts/${workoutId}/exercises/${id}`, {
      method: 'DELETE'
    })
      .then(resp => {
        dispatch({type: 'DELETE_EXERCISE', id: parseInt(id)})
      })
  }
}

// Checks if JSON response is an error
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
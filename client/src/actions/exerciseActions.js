import fetch from 'isomorphic-fetch';

export function fetchExercises(workoutId) {
  return function(dispatch) {
    dispatch({type: 'LOADING_EXERCISES'})
    return fetch(`/api/workouts/${workoutId}/exercises`)
      .then(resp => resp.json())
      .then(exercises => dispatch({type: 'FETCH_EXERCISES', payload: exercises}))
  }
}

export function submitNewExercise(data, workoutId, callback) {
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
        dispatch({type: 'ADD_EXERCISE', payload: exercise});
      })
    .catch((error) => {
      errorCallback()
    })
  }
}

export function deleteExercise(workoutId, id, callback) {
  return function(dispatch) {
    return fetch(`/api/workouts/${workoutId}/exercises/${id}`, {
      method: 'DELETE'
    })
      .then(() => dispatch({type: 'DELETE_EXERCISE', workoutId: workoutId, id: id}))
      // .then(() => callback)
  }
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
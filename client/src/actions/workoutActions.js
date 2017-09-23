import fetch from 'isomorphic-fetch';

export function fetchWorkouts() {
  return function(dispatch) {
    dispatch({type: 'LOADING_WORKOUTS'})
    return fetch(`/api/workouts`)
      .then(resp => resp.json())
      .then(workouts => dispatch({type: 'FETCH_WORKOUTS', payload: workouts}))
  }
}

export function submitNewWorkout(data, history, errorCallback) {
  return function(dispatch) {
    return fetch(`/api/workouts`, {
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
      .then(workout => {
        dispatch({type: 'ADD_WORKOUT', payload: workout});
        history.push('/workouts');
      })
    .catch((error) => {
      errorCallback()
    })
  }
}

export function deleteWorkout(id, callback) {
  return function(dispatch) {
    return fetch(`/api/workouts/${id}`, {
      method: 'DELETE'
    })
      .then(() => dispatch({type: 'DELETE_WORKOUT', id: id}))
      // .then(() => callback)
  }
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
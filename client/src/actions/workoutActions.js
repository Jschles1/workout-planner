import fetch from 'isomorphic-fetch';

// Retrieves workouts index resource from Rails API
export function fetchWorkouts() {
  return function(dispatch) {
    // Tells store we are about to make a request to API
    dispatch({type: 'LOADING_WORKOUTS'})
    return fetch(`/api/workouts`)
      .then(resp => resp.json())
      // Dispatches JSON response containing workouts to store
      .then(workouts => dispatch({type: 'FETCH_WORKOUTS', payload: workouts}))
  }
}

// Retrieves workouts index resource from Rails API
export function fetchSuggestedWorkouts() {
  return function(dispatch) {
    dispatch({type: 'LOADING_WORKOUTS'})
    return fetch(`/api/workouts`)
      .then(resp => resp.json())
      // Dispatches JSON response containing workouts to store, but with different action type
      .then(workouts => dispatch({type: 'FETCH_SUGGESTED_WORKOUTS', payload: workouts}))
  }
}

// Submits workout data to Rails API which persists to the db
export function submitNewWorkout(data, history) {
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
        // Dispatch action that adds JSON response to store
        dispatch({type: 'ADD_WORKOUT', payload: workout});
        history.push('/workouts');
      })
    .catch((error) => {
      // Dispatch error to store if validation fails
      dispatch({type: 'ERROR'})
    })
  }
}

// Modifies the suggested attribute on the selected workout
export function addSuggestedWorkout(id, callback) {
  return function(dispatch) {
    return fetch(`/api/workouts/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ suggested: false })
    })
      .then(resp => {
        dispatch({type: 'DELETE_WORKOUT', id: parseInt(id)})
      })
      .then(callback())
  }
}

// Deletes selected workout from db
export function deleteWorkout(id) {
  return function(dispatch) {
    return fetch(`/api/workouts/${id}`, {
      method: 'DELETE'
    })
      .then(resp => {
        dispatch({type: 'DELETE_WORKOUT', id: parseInt(id)})
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
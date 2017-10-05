import fetch from 'isomorphic-fetch';

export function addLike(workout, newLike, id) {
  console.log(newLike)
  return function(dispatch) {
    return fetch(`/api/workouts/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ likes: newLike })
    })
      .then(resp => {
        return resp.json();
      })
      .then(workout => {
        dispatch({type: 'ADD_LIKE', payload: workout});
      })
  }
}

export function fetchWorkouts() {
  return function(dispatch) {
    dispatch({type: 'LOADING_WORKOUTS'})
    return fetch(`/api/workouts`)
      .then(resp => resp.json())
      .then(workouts => dispatch({type: 'FETCH_WORKOUTS', payload: workouts}))
  }
}

export function fetchSuggestedWorkouts() {
  return function(dispatch) {
    dispatch({type: 'LOADING_WORKOUTS'})
    return fetch(`/api/workouts`)
      .then(resp => resp.json())
      .then(workouts => dispatch({type: 'FETCH_SUGGESTED_WORKOUTS', payload: workouts}))
  }
}

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
        dispatch({type: 'ADD_WORKOUT', payload: workout});
        history.push('/workouts');
      })
    .catch((error) => {
      dispatch({type: 'ERROR'})
    })
  }
}

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

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
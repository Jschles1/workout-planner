import fetch from 'isomorphic-fetch';

export function submitNewExercise(data, workoutId, history) {
  return function(dispatch) {
    return fetch(`/api/workouts/${workoutId}/exercises`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(resp => {
        dispatch({type: 'SUCCESS'});
        return resp.json();
      })
      .then(exercise => {
        dispatch({type: 'ADD_EXERCISE', payload: exercise});
      })
  }
}
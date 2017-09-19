import fetch from 'isomorphic-fetch';

export function submitNewWorkout(data, history) {
  return function(dispatch) {
    return fetch(`/api/workouts`, {
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
      .then(workout => {
        dispatch({type: 'ADD_WORKOUT', payload: workout});
        history.push('/workouts');
      })
  }
}
export default function workoutsReducer(state = [], action) {
  switch(action.type) {
    case 'FETCH_WORKOUTS':
      return action.payload.filter(workout => workout.suggested === false);
    case 'FETCH_SUGGESTED_WORKOUTS':
      return action.payload.filter(workout => workout.suggested === true);
    case 'ADD_WORKOUT':
      return state.concat(action.payload);
    case 'DELETE_WORKOUT':
      return state.filter(workout => workout.id !== action.id);
    case 'ADD_LIKE':
      return state.map((workout) => {
        if (workout.id === action.payload.id) {                 
          return action.payload;
        } else {
          return workout;
        }
      })
    default:
      return state;
  }
}
export default function workoutsReducer(state = [], action) {
  switch(action.type) {
    case 'FETCH_WORKOUTS':
      return action.payload;
    case 'ADD_WORKOUT':
      return state.concat(action.payload);
    case 'DELETE_WORKOUT':
      return state.filter(workout => workout.id !== action.id);
    default:
      return state;
  }
}
export default function workoutsReducer(state = {
  workouts: []
}, action) {
  switch(action.type) {
    case 'ADD_WORKOUT':
      return state.concat(action.payload);
    default:
      return state;
  }
}
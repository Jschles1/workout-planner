export default function exercisesReducer(state = [], action) {
  switch(action.type) {
    case 'FETCH_EXERCISES':
      return action.payload;
    case 'ADD_EXERCISE':
      return state.concat(action.payload);
    case 'DELETE_EXERCISE':
      return state.filter(exercise => exercise.id !== action.id);
    default:
      return state;
  }
}
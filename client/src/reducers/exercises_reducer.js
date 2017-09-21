export default function exercisesReducer(state = [], action) {
  switch(action.type) {
    case 'ADD_EXERCISE':
      return state.concat(action.payload);
    default:
      return state;
  }
}
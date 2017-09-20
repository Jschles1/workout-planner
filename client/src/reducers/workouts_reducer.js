export default function workoutsReducer(state = [], action) {
  switch(action.type) {
    case 'ADD_WORKOUT':
      return state.concat(action.payload);
    default:
      return state;
  }
}
export default function errorsReducer(state = false, action) {
  switch (action.type) {
    case 'ERROR':
      return true;
    case 'FETCH_WORKOUTS':
      return false;
    case 'FETCH_EXERCISES':
      return false;
    case 'ADD_WORKOUT':
      return false;
    case 'ADD_EXERCISE':
      return false;
    default:
      return state;
  }
}